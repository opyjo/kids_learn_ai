import { NextResponse } from "next/server";
import {
	createSupabaseAdaptiveRepositories,
	SupabaseAdaptiveAdapter,
} from "@/lib/adaptive-practice/adapters/supabase";
import {
	adaptiveRolloutMode,
	canUseAdaptivePractice,
} from "@/lib/adaptive-practice/config";
import { AdaptivePracticeService } from "@/lib/adaptive-practice/service";
import { sanitizeQuestion } from "@/lib/quizzes/grading";
import { getApiContext } from "@/lib/quizzes/server";

export async function POST() {
	const context = await getApiContext();
	if ("error" in context) return context.error;
	const rollout = canUseAdaptivePractice({
		mode: adaptiveRolloutMode(),
		isAdmin: context.profile?.role === "admin",
	});
	if (rollout === "fallback") return NextResponse.json({ mode: "fallback" });
	const adapter = new SupabaseAdaptiveAdapter(
		context.db,
		context.profile?.role === "admin",
	);
	const service = new AdaptivePracticeService({
		repositories: createSupabaseAdaptiveRepositories(adapter),
		now: () => new Date(),
		newId: () => crypto.randomUUID(),
	});
	try {
		const result = await service.create(context.user.id);
		if (result.mode === "fallback") {
			await adapter.logDiagnostic({
				userId: context.user.id,
				eventType: "fallback",
				reason: result.reason,
			});
			return NextResponse.json({ mode: "fallback", reason: result.reason });
		}
		if (rollout === "shadow") {
			await adapter.markShadow(result.state.id);
			return NextResponse.json({ mode: "shadow", sessionId: result.state.id });
		}
		const question = await adapter.getQuestionRecord(
			result.selection.question.id,
		);
		if (!question) return NextResponse.json({ mode: "fallback" });
		return NextResponse.json({
			mode: "adaptive",
			sessionId: result.state.id,
			position: result.state.selectedQuestionIds.length,
			targetLength: result.state.targetLength,
			question: sanitizeQuestion(question),
		});
	} catch (error) {
		console.error("Adaptive session creation failed:", error);
		await adapter.logDiagnostic({
			userId: context.user.id,
			eventType: "session_error",
			reason: "session_creation_failed",
		});
		return NextResponse.json({ mode: "fallback" });
	}
}
