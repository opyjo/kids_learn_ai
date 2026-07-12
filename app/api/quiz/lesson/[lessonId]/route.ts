import { type NextRequest, NextResponse } from "next/server";
import { answersMatch, sanitizeQuestion } from "@/lib/quizzes/grading";
import { answerInputSchema } from "@/lib/quizzes/schemas";
import {
	getApiContext,
	isCourseEnrolled,
	recordLearning,
} from "@/lib/quizzes/server";
import type { QuizQuestionRecord } from "@/lib/quizzes/types";

type Context = { params: Promise<{ lessonId: string }> };

const MAX_ATTEMPTS = 2;

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
		canAttempt: (attempts?.length || 0) < MAX_ATTEMPTS,
	});
}

export async function POST(request: NextRequest, { params }: Context) {
	const { lessonId } = await params;
	const loaded = await loadQuiz(lessonId);
	if ("error" in loaded) return loaded.error;
	if (!loaded.quiz)
		return NextResponse.json({ error: "Quiz not found" }, { status: 404 });
	const body = await request.json();
	const { count } = await loaded.db
		.from("quiz_attempts")
		.select("id", { count: "exact", head: true })
		.eq("quiz_id", loaded.quiz.id)
		.eq("user_id", loaded.user.id);
	const attemptNumber = (count || 0) + 1;
	if (attemptNumber > MAX_ATTEMPTS)
		return NextResponse.json({ error: "Retry limit reached" }, { status: 409 });
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
		// The first answer checked for a question is binding for the attempt:
		// it is recorded server-side and the final grade is computed from these
		// rows, so revealing the verdict here cannot be used to switch answers.
		const { data: existing } = await loaded.db
			.from("quiz_question_checks")
			.select("answer, correct")
			.eq("user_id", loaded.user.id)
			.eq("question_id", typed.id)
			.eq("attempt_number", attemptNumber)
			.maybeSingle();
		const verdict = existing ?? {
			answer: answer.data.answer,
			correct: answersMatch(answer.data.answer, typed.correct_answer),
		};
		if (!existing) {
			const { error } = await loaded.db.from("quiz_question_checks").insert({
				user_id: loaded.user.id,
				quiz_id: loaded.quiz.id,
				question_id: typed.id,
				attempt_number: attemptNumber,
				answer: verdict.answer,
				correct: verdict.correct,
				time_taken_ms: answer.data.timeTakenMs,
			});
			if (error)
				return NextResponse.json({ error: error.message }, { status: 500 });
		}
		return NextResponse.json({
			correct: verdict.correct,
			explanation: typed.explanation || "Review this concept and try again.",
			correctAnswer: typed.correct_answer,
			lockedAnswer: verdict.answer,
		});
	}
	// Finish the attempt: grade from the answers recorded at check time — the
	// client no longer supplies answers, so feedback can't be replayed into a
	// perfect submission.
	const [{ data: questions }, { data: checks }] = await Promise.all([
		loaded.db.from("quiz_questions").select("*").eq("quiz_id", loaded.quiz.id),
		loaded.db
			.from("quiz_question_checks")
			.select("question_id, answer, correct, time_taken_ms")
			.eq("user_id", loaded.user.id)
			.eq("quiz_id", loaded.quiz.id)
			.eq("attempt_number", attemptNumber),
	]);
	const typedQuestions = (questions || []) as QuizQuestionRecord[];
	const checkByQuestion = new Map(
		(checks || []).map((check) => [check.question_id, check]),
	);
	if (typedQuestions.some((question) => !checkByQuestion.has(question.id)))
		return NextResponse.json(
			{ error: "Check every question before finishing" },
			{ status: 400 },
		);
	let score = 0;
	const graded = typedQuestions.map((question) => {
		const check = checkByQuestion.get(question.id);
		const correct = Boolean(check?.correct);
		if (correct) score += question.points || 1;
		return {
			questionId: question.id,
			answer: check?.answer,
			correct,
			explanation: question.explanation || "Review this concept and try again.",
			correctAnswer: question.correct_answer,
			misconceptionTag: correct ? null : question.misconception_tag,
			timeTakenMs: check?.time_taken_ms ?? 0,
		};
	});
	const maxScore = typedQuestions.reduce((sum, q) => sum + q.points, 0);
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
		attempt_number: attemptNumber,
		time_taken_seconds: Math.round(
			graded.reduce((sum, item) => sum + item.timeTakenMs, 0) / 1000,
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
