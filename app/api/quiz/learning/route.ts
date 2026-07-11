import { type NextRequest, NextResponse } from "next/server";
import { answersMatch, sanitizeQuestion } from "@/lib/quizzes/grading";
import { nextReviewDelayDays } from "@/lib/quizzes/learning";
import { answerInputSchema } from "@/lib/quizzes/schemas";
import { getApiContext, recordLearning } from "@/lib/quizzes/server";
import type { QuizQuestionRecord } from "@/lib/quizzes/types";

export async function GET() {
	const context = await getApiContext();
	if ("error" in context) return context.error;
	const [{ data: mastery }, { data: queue }] = await Promise.all([
		context.db
			.from("quiz_concept_mastery")
			.select(
				"course_id, concept_tag, correct_count, total_count, mastery_score, status, last_practised_at, courses(title)",
			)
			.eq("user_id", context.user.id)
			.order("mastery_score", { ascending: true }),
		context.db
			.from("quiz_review_queue")
			.select(
				"id, question_id, course_id, due_at, interval_step, courses(title)",
			)
			.eq("user_id", context.user.id)
			.order("due_at", { ascending: true }),
	]);
	const now = Date.now();
	const dueRows = (queue || []).filter(
		(row) => new Date(row.due_at).getTime() <= now,
	);
	const questionIds = dueRows.map((row) => row.question_id);
	const { data: questions } = questionIds.length
		? await context.db.from("quiz_questions").select("*").in("id", questionIds)
		: { data: [] };
	const questionById = new Map(
		((questions || []) as QuizQuestionRecord[]).map((question) => [
			question.id,
			question,
		]),
	);
	return NextResponse.json({
		mastery: mastery || [],
		dueCount: dueRows.length,
		totalScheduled: queue?.length || 0,
		nextReviewAt: queue?.[0]?.due_at || null,
		reviews: dueRows.flatMap((row) => {
			const question = questionById.get(row.question_id);
			return question
				? [
						{
							queueId: row.id,
							courseTitle: row.courses?.[0]?.title || "Course review",
							intervalStep: row.interval_step,
							question: sanitizeQuestion(question),
						},
					]
				: [];
		}),
	});
}

export async function POST(request: NextRequest) {
	const context = await getApiContext();
	if ("error" in context) return context.error;
	const body = await request.json();
	const parsed = answerInputSchema.safeParse(body);
	if (!parsed.success || typeof body.queueId !== "string")
		return NextResponse.json(
			{ error: "Invalid review answer" },
			{ status: 400 },
		);
	const { data: queue } = await context.db
		.from("quiz_review_queue")
		.select("id, question_id, due_at, interval_step")
		.eq("id", body.queueId)
		.eq("user_id", context.user.id)
		.single();
	if (!queue || queue.question_id !== parsed.data.questionId)
		return NextResponse.json({ error: "Review not found" }, { status: 404 });
	if (new Date(queue.due_at).getTime() > Date.now() + 30_000)
		return NextResponse.json(
			{ error: "This review is not due yet" },
			{ status: 409 },
		);
	const { data: question } = await context.db
		.from("quiz_questions")
		.select("*")
		.eq("id", queue.question_id)
		.single();
	if (!question)
		return NextResponse.json({ error: "Question not found" }, { status: 404 });
	const typed = question as QuizQuestionRecord;
	const correct = answersMatch(parsed.data.answer, typed.correct_answer);
	await recordLearning(context.db, context.user.id, typed.id, correct, true);
	return NextResponse.json({
		correct,
		correctAnswer: typed.correct_answer,
		explanation: typed.explanation || "Review this idea and try again later.",
		concept: typed.concept_tag,
		nextReviewDays: nextReviewDelayDays(queue.interval_step, correct),
	});
}
