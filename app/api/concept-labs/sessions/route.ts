import { type NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth-helpers";
import type { Cohort } from "@/lib/concept-labs/cohort";
import type { LabSessionSummary } from "@/lib/concept-labs/types";
import { getSupabaseServerClient } from "@/lib/supabase/server";

interface PersistBody {
	summary: LabSessionSummary;
	cohort: Cohort;
	seed: number;
}

/**
 * Persist one completed concept-lab attempt. Signed-out attempts are not stored
 * (they can't be analysed). Writes go through the user's own session so RLS
 * enforces user_id = auth.uid(). Fails soft: a storage failure must never
 * surface to the child, who has already finished the lab.
 */
export const POST = async (req: NextRequest): Promise<NextResponse> => {
	try {
		const user = await getAuthUser();
		if (!user) {
			return NextResponse.json({ persisted: false, reason: "anonymous" });
		}

		const { summary, cohort, seed } = (await req.json()) as PersistBody;
		if (!summary?.labId || (cohort !== "baseline" && cohort !== "labs-v1")) {
			return NextResponse.json({ persisted: false, reason: "invalid" });
		}

		const supabase = await getSupabaseServerClient();

		const { data: session, error: sessionError } = await supabase
			.from("lab_sessions")
			.insert({
				user_id: user.id,
				lab_id: summary.labId,
				cohort,
				seed,
				predict_option: summary.predict?.optionId ?? null,
				predict_correct: summary.predict?.isCorrect ?? null,
				predict_misconception: summary.predict?.misconceptionTag ?? null,
				apply_option: summary.apply?.optionId ?? null,
				apply_correct: summary.apply?.isCorrect ?? null,
				apply_misconception: summary.apply?.misconceptionTag ?? null,
				explain_text: summary.explainText ?? null,
				explain_rubric_score: summary.explainRubricScore ?? null,
				trained_sample_count: summary.trainedSampleCount,
				test_count: summary.testCount,
				test_correct_count: summary.testCorrectCount,
				completed: true,
			})
			.select("id")
			.single();

		if (sessionError || !session) {
			console.error("Lab session insert failed:", sessionError?.message);
			return NextResponse.json({ persisted: false, reason: "insert-failed" });
		}

		if (Array.isArray(summary.events) && summary.events.length > 0) {
			const rows = summary.events.map((event) => ({
				session_id: session.id,
				t_ms: event.tMs,
				payload: event.payload,
			}));
			const { error: eventsError } = await supabase
				.from("lab_events")
				.insert(rows);
			if (eventsError) {
				// Session is saved; losing the event stream is non-fatal.
				console.error("Lab events insert failed:", eventsError.message);
			}
		}

		return NextResponse.json({ persisted: true, sessionId: session.id });
	} catch (error) {
		console.error("Concept-lab session route error:", error);
		return NextResponse.json({ persisted: false, reason: "error" });
	}
};
