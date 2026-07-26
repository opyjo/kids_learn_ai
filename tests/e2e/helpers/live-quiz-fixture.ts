import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export const liveQuizE2EConfigured = Boolean(
	process.env.E2E_SUPABASE_URL &&
		process.env.E2E_SUPABASE_ANON_KEY &&
		process.env.E2E_SUPABASE_SERVICE_ROLE_KEY &&
		process.env.E2E_ALLOW_DATABASE_WRITES === "true",
);

interface TestUser {
	id: string;
	email: string;
	password: string;
}

export interface LiveQuizFixture {
	admin: TestUser;
	students: [TestUser, TestUser];
	quizId: string;
	cleanup: () => Promise<void>;
}

function requireData<T>(
	result: { data: T | null; error: { message: string } | null },
	label: string,
) {
	if (result.error || !result.data)
		throw new Error(`${label}: ${result.error?.message || "no data returned"}`);
	return result.data;
}

async function createUser(
	adminClient: SupabaseClient,
	input: { email: string; password: string; fullName: string; role: string },
): Promise<TestUser> {
	const authResult = await adminClient.auth.admin.createUser({
		email: input.email,
		password: input.password,
		email_confirm: true,
		user_metadata: { full_name: input.fullName },
	});
	const user = requireData(
		{ data: authResult.data.user, error: authResult.error },
		`Create ${input.role} auth user`,
	);
	const profileResult = await adminClient.from("profiles").upsert({
		id: user.id,
		email: input.email,
		full_name: input.fullName,
		role: input.role,
	});
	if (profileResult.error)
		throw new Error(
			`Create ${input.role} profile: ${profileResult.error.message}`,
		);
	return { id: user.id, email: input.email, password: input.password };
}

export async function createLiveQuizFixture(): Promise<LiveQuizFixture> {
	if (!liveQuizE2EConfigured)
		throw new Error("Dedicated E2E Supabase credentials are required");
	const url = process.env.E2E_SUPABASE_URL as string;
	const serviceRole = process.env.E2E_SUPABASE_SERVICE_ROLE_KEY as string;
	const adminClient = createClient(url, serviceRole, {
		auth: { autoRefreshToken: false, persistSession: false },
	});
	const suffix = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
	const password = `LiveQuiz!${suffix}`;
	const createdUserIds: string[] = [];
	let courseId: string | null = null;

	try {
		const admin = await createUser(adminClient, {
			email: `live-host-${suffix}@example.com`,
			password,
			fullName: "E2E Teacher",
			role: "admin",
		});
		createdUserIds.push(admin.id);
		const studentOne = await createUser(adminClient, {
			email: `live-student-one-${suffix}@example.com`,
			password,
			fullName: "Ada Lovelace",
			role: "student",
		});
		createdUserIds.push(studentOne.id);
		const studentTwo = await createUser(adminClient, {
			email: `live-student-two-${suffix}@example.com`,
			password,
			fullName: "Grace Hopper",
			role: "student",
		});
		createdUserIds.push(studentTwo.id);

		const course = requireData<{ id: string }>(
			await adminClient
				.from("courses")
				.insert({
					title: "Live Quiz E2E Course",
					description: "Disposable browser-test fixture",
					slug: `live-quiz-e2e-${suffix}`,
					order_index: 99_999,
					age_range: "9-13",
				})
				.select("id")
				.single(),
			"Create E2E course",
		);
		courseId = course.id;
		const lesson = requireData<{ id: string }>(
			await adminClient
				.from("lessons")
				.insert({
					course_id: course.id,
					title: "Reliable Live Challenge",
					description: "Disposable E2E lesson",
					content: "A short lesson used only by the multi-user browser test.",
					order_index: 99_999,
					created_by: admin.id,
				})
				.select("id")
				.single(),
			"Create E2E lesson",
		);
		const quiz = requireData<{ id: string }>(
			await adminClient
				.from("quizzes")
				.insert({
					lesson_id: lesson.id,
					title: "Reliable Live Challenge",
					description: "Multi-user E2E challenge",
					quiz_type: "lesson_challenge",
					status: "published",
					is_active: true,
					created_by: admin.id,
				})
				.select("id")
				.single(),
			"Create E2E quiz",
		);
		const questionResult = await adminClient.from("quiz_questions").insert([
			{
				quiz_id: quiz.id,
				question: "Which word describes code that runs again?",
				question_type: "multiple_choice",
				options: ["Loop", "Variable"],
				correct_answer: "Loop",
				explanation: "A loop repeats a block of code.",
				hint: "Think about repetition.",
				misconception_tag: "loop-purpose",
				concept_tag: "loops",
				adaptive_difficulty: 1,
				variant_group: `loop-${suffix}`,
				learning_objective: "Recognize a loop",
				prerequisite_tags: [],
				remediation: "Loops repeat instructions.",
				order_index: 0,
				time_limit_seconds: 6,
			},
			{
				quiz_id: quiz.id,
				question: "What stores a value for later use?",
				question_type: "multiple_choice",
				options: ["Variable", "Comment"],
				correct_answer: "Variable",
				explanation: "A variable gives a stored value a name.",
				hint: "It can vary.",
				misconception_tag: "variable-purpose",
				concept_tag: "variables",
				adaptive_difficulty: 1,
				variant_group: `variable-${suffix}`,
				learning_objective: "Recognize a variable",
				prerequisite_tags: [],
				remediation: "Variables store named values.",
				order_index: 1,
				time_limit_seconds: 20,
			},
		]);
		if (questionResult.error)
			throw new Error(`Create E2E questions: ${questionResult.error.message}`);
		const enrollmentResult = await adminClient.from("level_enrollments").insert(
			[studentOne, studentTwo].map((student) => ({
				student_id: student.id,
				course_id: course.id,
				enrolled_by: admin.id,
				notes: "Disposable live-quiz E2E fixture",
			})),
		);
		if (enrollmentResult.error)
			throw new Error(
				`Create E2E enrollments: ${enrollmentResult.error.message}`,
			);

		const cleanup = async () => {
			if (courseId)
				await adminClient.from("courses").delete().eq("id", courseId);
			for (const userId of createdUserIds)
				await adminClient.auth.admin.deleteUser(userId);
		};
		return {
			admin,
			students: [studentOne, studentTwo],
			quizId: quiz.id,
			cleanup,
		};
	} catch (error) {
		if (courseId) await adminClient.from("courses").delete().eq("id", courseId);
		for (const userId of createdUserIds)
			await adminClient.auth.admin.deleteUser(userId);
		throw error;
	}
}
