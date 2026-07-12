import { describe, expect, it, vi } from "vitest";
import { SupabaseAdaptiveAdapter } from "@/lib/adaptive-practice/adapters/supabase";
import { createSession } from "@/lib/adaptive-practice/engine";

describe("SupabaseAdaptiveAdapter", () => {
	it("passes immutable event and next-state data to one atomic RPC", async () => {
		const rpc = vi.fn().mockResolvedValue({ data: true, error: null });
		const adapter = new SupabaseAdaptiveAdapter({ rpc } as never, false);
		const state = createSession({ id: "session", seed: "session" });
		const result = await adapter.record(
			{
				idempotencyKey: "00000000-0000-4000-8000-000000000001",
				sessionId: "00000000-0000-4000-8000-000000000002",
				userId: "00000000-0000-4000-8000-000000000003",
				questionId: "00000000-0000-4000-8000-000000000004",
				position: 1,
				selectionReason: "due_or_weak",
				confidence: "sure",
				correct: true,
				usedHint: false,
				difficulty: 1,
				masteryBefore: 30,
				masteryAfter: 42,
				remediationShown: false,
			},
			state,
			{
				courseId: "00000000-0000-4000-8000-000000000005",
				conceptTag: "loops",
				score: 42,
				status: "learning",
				totalAnswers: 2,
			},
		);
		expect(result).toEqual({ inserted: true });
		expect(rpc).toHaveBeenCalledTimes(1);
		expect(rpc).toHaveBeenCalledWith(
			"record_adaptive_practice_response",
			expect.objectContaining({
				p_confidence: "sure",
				p_mastery_after: 42,
				p_next_state: state,
			}),
		);
	});
});
