import { NextResponse } from "next/server";
import {
	type AnalysisSession,
	computeCohortReport,
} from "@/lib/concept-labs/analysis";
import type { Cohort } from "@/lib/concept-labs/cohort";
import { getSupabaseServerClient } from "@/lib/supabase/server";

interface LabSessionRow {
	lab_id: string;
	cohort: Cohort;
	predict_correct: boolean | null;
	apply_correct: boolean | null;
	predict_misconception: string | null;
	apply_misconception: string | null;
	explain_rubric_score: number | null;
}

/**
 * Admin-only gain report for the concept-lab experiment. Computes the same
 * numbers as the concept_lab_gain SQL view, in TypeScript, so the result is
 * unit-tested (lib/concept-labs/analysis.ts) and easy to shape for a dashboard.
 */
export const GET = async (): Promise<NextResponse> => {
	const supabase = await getSupabaseServerClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();
	if (!user) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const { data: profile } = await supabase
		.from("profiles")
		.select("role")
		.eq("id", user.id)
		.single();
	if (profile?.role !== "admin") {
		return NextResponse.json({ error: "Forbidden" }, { status: 403 });
	}

	const { data, error } = await supabase
		.from("lab_sessions")
		.select(
			"lab_id, cohort, predict_correct, apply_correct, predict_misconception, apply_misconception, explain_rubric_score",
		)
		.eq("completed", true);

	if (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}

	const sessions: AnalysisSession[] = (data as LabSessionRow[]).map((row) => ({
		labId: row.lab_id,
		cohort: row.cohort,
		predictCorrect: row.predict_correct ?? undefined,
		applyCorrect: row.apply_correct ?? undefined,
		predictMisconception: row.predict_misconception ?? undefined,
		applyMisconception: row.apply_misconception ?? undefined,
		rubricScore: row.explain_rubric_score ?? undefined,
	}));

	return NextResponse.json({
		totalSessions: sessions.length,
		report: computeCohortReport(sessions),
	});
};
