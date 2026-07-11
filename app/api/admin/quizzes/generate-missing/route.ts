import { NextResponse } from "next/server";
import { generateQuizQuestions } from "@/lib/quizzes/generation";
import { getApiContext } from "@/lib/quizzes/server";
import { createRateLimiter } from "@/lib/rate-limit";

// Each call generates drafts for a small batch of uncovered lessons and
// reports how many are left, so the client loops until remaining is 0
// without any single request outliving the function time limit.
export const maxDuration = 60;
const BATCH_SIZE = 3;
const QUESTIONS_PER_QUIZ = 3;
const limiter = createRateLimiter({ windowMs: 60_000, maxRequests: 10 });

export async function POST() {
	const context = await getApiContext({ admin: true });
	if ("error" in context) return context.error;
	if (!limiter.checkRateLimit(context.user.id)) {
		return NextResponse.json(
			{ error: "Please wait before generating again" },
			{ status: 429 },
		);
	}
	const [lessonsResult, quizzesResult] = await Promise.all([
		context.db
			.from("lessons")
			.select("id, title, description, content, starter_code, order_index")
			.order("order_index"),
		context.db
			.from("quizzes")
			.select("lesson_id")
			.eq("quiz_type", "quick_check")
			.neq("status", "archived"),
	]);
	if (lessonsResult.error || quizzesResult.error) {
		return NextResponse.json(
			{
				error:
					lessonsResult.error?.message ||
					quizzesResult.error?.message ||
					"Could not load coverage",
			},
			{ status: 500 },
		);
	}
	const covered = new Set(
		(quizzesResult.data || []).map((quiz) => quiz.lesson_id),
	);
	const missing = (lessonsResult.data || []).filter(
		(lesson) => !covered.has(lesson.id),
	);
	const batch = missing.slice(0, BATCH_SIZE);
	const created: { lessonId: string; quizId: string; title: string }[] = [];
	const failed: { lessonId: string; title: string; error: string }[] = [];
	for (const lesson of batch) {
		const source = `${lesson.title}\n${lesson.description || ""}\n${lesson.content || ""}\n${lesson.starter_code || ""}`;
		const result = await generateQuizQuestions(source, QUESTIONS_PER_QUIZ);
		if ("error" in result) {
			failed.push({
				lessonId: lesson.id,
				title: lesson.title,
				error: result.error,
			});
			continue;
		}
		const { data: quiz, error: quizError } = await context.db
			.from("quizzes")
			.insert({
				title: `${lesson.title} — Quick Check`,
				description: "AI-generated draft. Review and publish when ready.",
				quiz_type: "quick_check",
				status: "draft",
				passing_score: 67,
				lesson_id: lesson.id,
				course_id: null,
				is_active: false,
				created_by: context.user.id,
			})
			.select("id")
			.single();
		if (quizError || !quiz) {
			failed.push({
				lessonId: lesson.id,
				title: lesson.title,
				error: quizError?.message || "Create failed",
			});
			continue;
		}
		const { error: questionError } = await context.db
			.from("quiz_questions")
			.insert(
				result.questions.map(({ id: _id, ...question }, index) => ({
					...question,
					order_index: index,
					quiz_id: quiz.id,
				})),
			);
		if (questionError) {
			await context.db.from("quizzes").delete().eq("id", quiz.id);
			failed.push({
				lessonId: lesson.id,
				title: lesson.title,
				error: questionError.message,
			});
			continue;
		}
		created.push({ lessonId: lesson.id, quizId: quiz.id, title: lesson.title });
	}
	return NextResponse.json({
		created,
		failed,
		remaining: missing.length - batch.length,
	});
}
