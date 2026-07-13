import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
	LESSON_CHALLENGE_QUESTION_COUNT,
	lessonChallengeSource,
	lessonSourceHash,
} from "@/lib/quizzes/challenges";
import { generateQuizQuestions } from "@/lib/quizzes/generation";
import { getApiContext } from "@/lib/quizzes/server";
import { createRateLimiter } from "@/lib/rate-limit";

export const maxDuration = 60;

const limiter = createRateLimiter({ windowMs: 60_000, maxRequests: 5 });
const requestSchema = z.object({
	lessonId: z.string().uuid(),
	regenerate: z.boolean().default(false),
});

export async function POST(request: NextRequest) {
	const context = await getApiContext({ admin: true });
	if ("error" in context) return context.error;
	if (!limiter.checkRateLimit(context.user.id))
		return NextResponse.json(
			{ error: "Please wait before generating another challenge" },
			{ status: 429 },
		);
	const parsed = requestSchema.safeParse(await request.json());
	if (!parsed.success)
		return NextResponse.json({ error: "Choose a lesson" }, { status: 400 });

	const [{ data: lesson }, { data: existing }] = await Promise.all([
		context.db
			.from("lessons")
			.select("id, title, description, content, starter_code")
			.eq("id", parsed.data.lessonId)
			.single(),
		context.db
			.from("quizzes")
			.select("id, status, generation_source_hash, created_at")
			.eq("lesson_id", parsed.data.lessonId)
			.eq("quiz_type", "lesson_challenge")
			.neq("status", "archived")
			.order("created_at", { ascending: false }),
	]);
	if (!lesson)
		return NextResponse.json({ error: "Lesson not found" }, { status: 404 });
	if (existing?.length && !parsed.data.regenerate)
		return NextResponse.json(
			{ error: "This lesson already has a challenge", existing: existing[0] },
			{ status: 409 },
		);

	const source = lessonChallengeSource(lesson);
	const result = await generateQuizQuestions(
		source,
		LESSON_CHALLENGE_QUESTION_COUNT,
	);
	if ("error" in result)
		return NextResponse.json(
			{ error: result.error },
			{ status: result.status },
		);
	const sourceHash = await lessonSourceHash(lesson);
	const superseded =
		existing?.find((quiz) => quiz.status === "published") || existing?.[0];
	const { data: quiz, error: quizError } = await context.db
		.from("quizzes")
		.insert({
			title: `${lesson.title} — Live Lesson Challenge`,
			description:
				"AI-generated collaborative challenge. Review and publish before hosting.",
			quiz_type: "lesson_challenge",
			status: "draft",
			passing_score: 0,
			lesson_id: lesson.id,
			course_id: null,
			is_active: false,
			created_by: context.user.id,
			generation_source_hash: sourceHash,
			generated_at: new Date().toISOString(),
			supersedes_quiz_id: superseded?.id || null,
		})
		.select("id")
		.single();
	if (quizError || !quiz)
		return NextResponse.json(
			{ error: quizError?.message || "Could not create challenge" },
			{ status: 500 },
		);

	const { error: questionError } = await context.db
		.from("quiz_questions")
		.insert(
			result.questions.map(({ id: _id, ...question }, index) => ({
				...question,
				quiz_id: quiz.id,
				order_index: index,
				variant_group: question.variant_group || crypto.randomUUID(),
				learning_objective: question.learning_objective || question.concept_tag,
				remediation: question.remediation || question.explanation,
			})),
		);
	if (questionError) {
		await context.db.from("quizzes").delete().eq("id", quiz.id);
		return NextResponse.json({ error: questionError.message }, { status: 500 });
	}
	if (parsed.data.regenerate) {
		const oldDraftIds = (existing || [])
			.filter((item) => item.status === "draft")
			.map((item) => item.id);
		if (oldDraftIds.length)
			await context.db
				.from("quizzes")
				.update({ status: "archived", is_active: false })
				.in("id", oldDraftIds);
	}
	return NextResponse.json(
		{
			id: quiz.id,
			questionCount: result.questions.length,
			status: "draft",
		},
		{ status: 201 },
	);
}
