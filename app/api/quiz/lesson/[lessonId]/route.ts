import { type NextRequest, NextResponse } from "next/server";
import { answersMatch, sanitizeQuestion } from "@/lib/quizzes/grading";
import { type AnswerInput, answerInputSchema } from "@/lib/quizzes/schemas";
import {
	getApiContext,
	isCourseEnrolled,
	recordLearning,
} from "@/lib/quizzes/server";
import type { QuizQuestionRecord } from "@/lib/quizzes/types";

type Context = { params: Promise<{ lessonId: string }> };

async function loadQuiz(lessonId: string) {
	const context = await getApiContext();
	if ("error" in context) return context;
	const { data: lesson } = await context.db
		.from("lessons")
		.select("id, course_id")
		.eq("id", lessonId)
		.single();
	if (!lesson || !(await isCourseEnrolled(context.user.id, lesson.course_id))) {
		return {
			error: NextResponse.json({ error: "Forbidden" }, { status: 403 }),
		};
	}
	const { data: quiz } = await context.db
		.from("quizzes")
		.select("id, title, description, passing_score")
		.eq("lesson_id", lessonId)
		.eq("quiz_type", "quick_check")
		.eq("status", "published")
		.eq("is_active", true)
		.maybeSingle();
	return { ...context, quiz };
}

export async function GET(_request: NextRequest, { params }: Context) {
	const { lessonId } = await params;
	const loaded = await loadQuiz(lessonId);
	if ("error" in loaded) return loaded.error;
	if (!loaded.quiz) return NextResponse.json({ quiz: null });
	const [{ data: questions }, { data: attempts }] = await Promise.all([
		loaded.db
			.from("quiz_questions")
			.select("*")
			.eq("quiz_id", loaded.quiz.id)
			.order("order_index"),
		loaded.db
			.from("quiz_attempts")
			.select("id, percentage, passed, attempt_number, completed_at")
			.eq("quiz_id", loaded.quiz.id)
			.eq("user_id", loaded.user.id)
			.order("attempt_number"),
	]);
	return NextResponse.json({
		quiz: loaded.quiz,
		questions: ((questions || []) as QuizQuestionRecord[]).map(
			sanitizeQuestion,
		),
		attempts: attempts || [],
		canAttempt: (attempts?.length || 0) < 2,
	});
}

export async function POST(request: NextRequest, { params }: Context) {
	const { lessonId } = await params;
	const loaded = await loadQuiz(lessonId);
	if ("error" in loaded) return loaded.error;
	if (!loaded.quiz)
		return NextResponse.json({ error: "Quiz not found" }, { status: 404 });
	const body = await request.json();
	if (body.action === "check") {
		const answer = answerInputSchema.safeParse(body);
		if (!answer.success)
			return NextResponse.json({ error: "Invalid answer" }, { status: 400 });
		const { data: question } = await loaded.db
			.from("quiz_questions")
			.select("*")
			.eq("quiz_id", loaded.quiz.id)
			.eq("id", answer.data.questionId)
			.single();
		if (!question)
			return NextResponse.json(
				{ error: "Question not found" },
				{ status: 404 },
			);
		const typed = question as QuizQuestionRecord;
		return NextResponse.json({
			correct: answersMatch(answer.data.answer, typed.correct_answer),
			explanation: typed.explanation || "Review this concept and try again.",
			correctAnswer: typed.correct_answer,
		});
	}
	const answerRows: unknown[] = Array.isArray(body.answers) ? body.answers : [];
	const validAnswers: AnswerInput[] = [];
	for (const row of answerRows) {
		const result = answerInputSchema.safeParse(row);
		if (result.success) validAnswers.push(result.data);
	}
	if (answerRows.length === 0 || validAnswers.length !== answerRows.length) {
		return NextResponse.json({ error: "Invalid answers" }, { status: 400 });
	}
	const { count } = await loaded.db
		.from("quiz_attempts")
		.select("id", { count: "exact", head: true })
		.eq("quiz_id", loaded.quiz.id)
		.eq("user_id", loaded.user.id);
	if ((count || 0) >= 2)
		return NextResponse.json({ error: "Retry limit reached" }, { status: 409 });
	const { data: questions } = await loaded.db
		.from("quiz_questions")
		.select("*")
		.eq("quiz_id", loaded.quiz.id);
	const byId = new Map(
		((questions || []) as QuizQuestionRecord[]).map((q) => [q.id, q]),
	);
	let score = 0;
	const graded = validAnswers.map((answer) => {
		const question = byId.get(answer.questionId);
		const correct = Boolean(
			question && answersMatch(answer.answer, question.correct_answer),
		);
		if (correct) score += question?.points || 1;
		return {
			questionId: answer.questionId,
			answer: answer.answer,
			correct,
			explanation:
				question?.explanation || "Review this concept and try again.",
			correctAnswer: question?.correct_answer,
			misconceptionTag: correct ? null : question?.misconception_tag,
			timeTakenMs: answer.timeTakenMs,
		};
	});
	const maxScore = ((questions || []) as QuizQuestionRecord[]).reduce(
		(sum, q) => sum + q.points,
		0,
	);
	const percentage = maxScore ? Math.round((score / maxScore) * 100) : 0;
	const passed = percentage >= loaded.quiz.passing_score;
	const { error } = await loaded.db.from("quiz_attempts").insert({
		user_id: loaded.user.id,
		quiz_id: loaded.quiz.id,
		score,
		max_score: maxScore,
		percentage,
		passed,
		answers: graded,
		attempt_number: (count || 0) + 1,
		time_taken_seconds: Math.round(
			validAnswers.reduce((sum, item) => sum + item.timeTakenMs, 0) / 1000,
		),
	});
	if (error)
		return NextResponse.json({ error: error.message }, { status: 500 });
	await Promise.all(
		graded.map((answer) =>
			recordLearning(
				loaded.db,
				loaded.user.id,
				answer.questionId,
				answer.correct,
			),
		),
	);
	return NextResponse.json({ score, maxScore, percentage, passed, graded });
}
