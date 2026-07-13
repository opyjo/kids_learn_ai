import { type NextRequest, NextResponse } from "next/server";
import { lessonSourceHash } from "@/lib/quizzes/challenges";
import { quizInputSchema } from "@/lib/quizzes/schemas";
import { getApiContext } from "@/lib/quizzes/server";

export async function GET() {
	const context = await getApiContext({ admin: true });
	if ("error" in context) return context.error;
	const { data, error } = await context.db
		.from("quizzes")
		.select(
			"*, lessons(title, description, content, starter_code), courses(title), quiz_questions(count), quiz_attempts(count)",
		)
		.order("updated_at", { ascending: false });
	const quizzes = await Promise.all(
		(data || []).map(async (quiz) => {
			const lesson = Array.isArray(quiz.lessons)
				? quiz.lessons[0]
				: quiz.lessons;
			const sourceOutdated =
				quiz.quiz_type === "lesson_challenge" &&
				Boolean(quiz.generation_source_hash) &&
				Boolean(lesson) &&
				(await lessonSourceHash(lesson)) !== quiz.generation_source_hash;
			return {
				...quiz,
				lessons: lesson ? { title: lesson.title } : null,
				source_outdated: sourceOutdated,
			};
		}),
	);
	return error
		? NextResponse.json({ error: error.message }, { status: 500 })
		: NextResponse.json({ quizzes });
}

export async function POST(request: NextRequest) {
	const context = await getApiContext({ admin: true });
	if ("error" in context) return context.error;
	const parsed = quizInputSchema.safeParse(await request.json());
	if (!parsed.success)
		return NextResponse.json(
			{ error: parsed.error.flatten() },
			{ status: 400 },
		);
	const { questions, ...quiz } = parsed.data;
	const publishChallenge =
		quiz.quiz_type === "lesson_challenge" && quiz.status === "published";
	const { data, error } = await context.db
		.from("quizzes")
		.insert({
			...quiz,
			status: publishChallenge ? "draft" : quiz.status,
			is_active: publishChallenge ? false : quiz.status === "published",
			created_by: context.user.id,
		})
		.select("id")
		.single();
	if (error || !data)
		return NextResponse.json(
			{ error: error?.message || "Create failed" },
			{ status: 500 },
		);
	const { error: questionError } = await context.db
		.from("quiz_questions")
		.insert(
			questions.map(({ id: _id, ...question }) => ({
				...question,
				variant_group: question.variant_group || crypto.randomUUID(),
				learning_objective: question.learning_objective || question.concept_tag,
				remediation: question.remediation || question.explanation,
				quiz_id: data.id,
			})),
		);
	if (questionError) {
		await context.db.from("quizzes").delete().eq("id", data.id);
		return NextResponse.json({ error: questionError.message }, { status: 500 });
	}
	if (publishChallenge) {
		const { data: published, error: publishError } = await context.db.rpc(
			"publish_lesson_challenge",
			{ p_quiz_id: data.id },
		);
		if (publishError || !published)
			return NextResponse.json(
				{ error: publishError?.message || "Could not publish challenge" },
				{ status: 500 },
			);
	}
	return NextResponse.json({ id: data.id }, { status: 201 });
}
