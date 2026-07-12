import { type NextRequest, NextResponse } from "next/server";
import {
	createSupabaseAdaptiveRepositories,
	SupabaseAdaptiveAdapter,
} from "@/lib/adaptive-practice/adapters/supabase";
import { adaptiveResponseSchema } from "@/lib/adaptive-practice/api";
import {
	adaptiveRolloutMode,
	canUseAdaptivePractice,
} from "@/lib/adaptive-practice/config";
import { AdaptivePracticeService } from "@/lib/adaptive-practice/service";
import { answersMatch, sanitizeQuestion } from "@/lib/quizzes/grading";
import { getApiContext } from "@/lib/quizzes/server";

type Context = { params: Promise<{ id: string }> };

export async function POST(request: NextRequest, { params }: Context) {
	const context = await getApiContext();
	if ("error" in context) return context.error;
	if (
		canUseAdaptivePractice({
			mode: adaptiveRolloutMode(),
			isAdmin: context.profile?.role === "admin",
		}) !== "adaptive"
	)
		return NextResponse.json(
			{ error: "Adaptive practice is disabled" },
			{ status: 409 },
		);
	const parsed = adaptiveResponseSchema.safeParse(await request.json());
	if (!parsed.success)
		return NextResponse.json(
			{ error: "Answer and confidence are required" },
			{ status: 400 },
		);
	const { id } = await params;
	const adapter = new SupabaseAdaptiveAdapter(
		context.db,
		context.profile?.role === "admin",
	);
	const state = await adapter.get(context.user.id, id);
	if (
		!state?.currentSelection ||
		state.currentSelection.questionId !== parsed.data.questionId
	)
		return NextResponse.json(
			{ error: "Stale adaptive question" },
			{ status: 409 },
		);
	const [answerKey, answeredQuestion] = await Promise.all([
		adapter.getProtectedAnswer(parsed.data.questionId),
		adapter.getQuestionRecord(parsed.data.questionId),
	]);
	if (answerKey === null || !answeredQuestion)
		return NextResponse.json(
			{ error: "Question unavailable" },
			{ status: 404 },
		);
	const correct = answersMatch(parsed.data.answer, answerKey);
	const service = new AdaptivePracticeService({
		repositories: createSupabaseAdaptiveRepositories(adapter),
		now: () => new Date(),
		newId: () => crypto.randomUUID(),
	});
	try {
		const result = await service.submit({
			userId: context.user.id,
			sessionId: id,
			idempotencyKey: parsed.data.idempotencyKey,
			confidence: parsed.data.confidence,
			correct,
			usedHint: parsed.data.usedHint,
		});
		if (result.status === "duplicate")
			return NextResponse.json(
				{ error: "Answer already submitted" },
				{ status: 409 },
			);
		const nextQuestion = result.selection
			? await adapter.getQuestionRecord(result.selection.question.id)
			: null;
		return NextResponse.json({
			correct,
			explanation: answeredQuestion.explanation,
			remediation: result.remediation,
			mastery: result.mastery,
			status: result.status,
			position: result.state.selectedQuestionIds.length,
			targetLength: result.state.targetLength,
			question: nextQuestion ? sanitizeQuestion(nextQuestion) : null,
		});
	} catch (error) {
		console.error("Adaptive response failed:", error);
		await adapter.logDiagnostic({
			userId: context.user.id,
			eventType: "session_error",
			reason: "response_recording_failed",
			details: { sessionId: id },
		});
		return NextResponse.json(
			{ error: "Could not record adaptive answer" },
			{ status: 500 },
		);
	}
}
