import { type NextRequest, NextResponse } from "next/server";
import { answersMatch, sanitizeQuestion } from "@/lib/quizzes/grading";
import { type AnswerInput, answerInputSchema } from "@/lib/quizzes/schemas";
import {
	getApiContext,
	isCourseEnrolled,
	recordLearning,
} from "@/lib/quizzes/server";
import type { QuizQuestionRecord } from "@/lib/quizzes/types";

type Context = { params: Promise<{ quizId: string }> };

async function loadReview(quizId: string) {
	const context = await getApiContext();
	if ("error" in context) return context;
	const { data: quiz } = await context.db
		.from("quizzes")
		.select("id, title, description, course_id, passing_score")
		.eq("id", quizId)
		.eq("quiz_type", "term_finale")
		.eq("status", "published")
		.single();
	if (!quiz || !(await isCourseEnrolled(context.user.id, quiz.course_id))) {
		return {
			error: NextResponse.json(
				{ error: "Review unavailable" },
				{ status: 403 },
			),
		};
	}
	if (context.profile?.role !== "admin") {
		const { data: finishedGame } = await context.db
			.from("quiz_games")
			.select("id")
			.eq("quiz_id", quizId)
			.eq("status", "finished")
			.limit(1)
			.maybeSingle();
		if (!finishedGame)
			return {
				error: NextResponse.json(
					{ error: "Review opens after the live finale" },
					{ status: 403 },
				),
			};
	}
	return { ...context, quiz };
}

export async function GET(_request: NextRequest, { params }: Context) {
	const { quizId } = await params;
	const loaded = await loadReview(quizId);
	if ("error" in loaded) return loaded.error;
	const { data: questions } = await loaded.db
		.from("quiz_questions")
		.select("*")
		.eq("quiz_id", quizId)
		.order("order_index");
	return NextResponse.json({
		quiz: loaded.quiz,
		questions: ((questions || []) as QuizQuestionRecord[]).map(
			sanitizeQuestion,
		),
	});
}

export async function POST(request: NextRequest, { params }: Context) {
	const { quizId } = await params;
	const loaded = await loadReview(quizId);
	if ("error" in loaded) return loaded.error;
	const body = await request.json();
	const rows: unknown[] = Array.isArray(body.answers) ? body.answers : [];
	const answers: AnswerInput[] = [];
	for (const row of rows) {
		const parsed = answerInputSchema.safeParse(row);
		if (parsed.success) answers.push(parsed.data);
	}
	if (!answers.length || answers.length !== rows.length)
		return NextResponse.json({ error: "Invalid answers" }, { status: 400 });
	const { data: questions } = await loaded.db
		.from("quiz_questions")
		.select("*")
		.eq("quiz_id", quizId);
	const typed = (questions || []) as QuizQuestionRecord[];
	const byId = new Map(typed.map((question) => [question.id, question]));
	let score = 0;
	const graded = answers.map((answer) => {
		const question = byId.get(answer.questionId);
		const correct = Boolean(
			question && answersMatch(answer.answer, question.correct_answer),
		);
		if (correct) score += question?.points || 0;
		return {
			questionId: answer.questionId,
			correct,
			correctAnswer: question?.correct_answer,
			explanation: question?.explanation,
			misconceptionTag: correct ? null : question?.misconception_tag,
		};
	});
	const maxScore = typed.reduce((sum, question) => sum + question.points, 0);
	const percentage = maxScore ? Math.round((score / maxScore) * 100) : 0;
	const { count } = await loaded.db
		.from("quiz_attempts")
		.select("id", { count: "exact", head: true })
		.eq("quiz_id", quizId)
		.eq("user_id", loaded.user.id);
	await loaded.db.from("quiz_attempts").insert({
		quiz_id: quizId,
		user_id: loaded.user.id,
		score,
		max_score: maxScore,
		percentage,
		passed: percentage >= loaded.quiz.passing_score,
		answers: graded,
		attempt_number: (count || 0) + 1,
		is_official: false,
	});
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
	return NextResponse.json({ percentage, graded });
}
