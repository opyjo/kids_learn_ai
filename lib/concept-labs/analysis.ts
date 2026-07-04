/**
 * Analysis for the concept-lab experiment: turn a set of completed sessions
 * into a per-lab, per-cohort report of the primary and secondary outcomes.
 * See docs/RnD/novel-pedagogy-implementation.md §8.
 *
 * Pure and unit-tested — the same computation backs both the admin report route
 * and the SQL convenience view (scripts/30-create-concept-labs.sql).
 */

import type { Cohort } from "./cohort";

/** The minimal shape of a completed session the analysis needs. */
export interface AnalysisSession {
	labId: string;
	cohort: Cohort;
	/** Predict-probe correctness (the pre-measure). */
	predictCorrect?: boolean;
	/** Apply-probe correctness (the post-measure). */
	applyCorrect?: boolean;
	/** Misconception tag implied by the Predict answer, if any. */
	predictMisconception?: string;
	/** Misconception tag implied by the Apply answer, if any. */
	applyMisconception?: string;
	/** Self-explanation rubric score (labs arm only). */
	rubricScore?: number;
}

export interface CohortStats {
	cohort: Cohort;
	n: number;
	/** Fraction correct on the Predict probe. */
	preCorrectRate: number;
	/** Fraction correct on the Apply probe. */
	postCorrectRate: number;
	/**
	 * Hake normalized gain: (post - pre) / (1 - pre). 0 when there is no
	 * headroom (everyone already correct on Predict).
	 */
	normalizedGain: number;
	/** Fraction whose Predict answer carried a misconception. */
	misconceptionRateAtPredict: number;
	/** Fraction whose Apply answer carried a misconception. */
	misconceptionRateAtApply: number;
	/** Mean rubric score among sessions that have one (labs arm). */
	avgRubricScore?: number;
}

export interface LabReport {
	labId: string;
	cohorts: CohortStats[];
	/**
	 * labs-v1 normalized gain minus baseline normalized gain — the headline
	 * effect. Present only when both arms have sessions.
	 */
	gainDelta?: number;
}

function rate(count: number, total: number): number {
	return total === 0 ? 0 : count / total;
}

function statsFor(cohort: Cohort, sessions: AnalysisSession[]): CohortStats {
	const n = sessions.length;
	const preCorrect = sessions.filter((s) => s.predictCorrect === true).length;
	const postCorrect = sessions.filter((s) => s.applyCorrect === true).length;
	const preMisc = sessions.filter((s) =>
		Boolean(s.predictMisconception),
	).length;
	const postMisc = sessions.filter((s) => Boolean(s.applyMisconception)).length;

	const pre = rate(preCorrect, n);
	const post = rate(postCorrect, n);
	const normalizedGain = pre >= 1 ? 0 : (post - pre) / (1 - pre);

	const rubrics = sessions
		.map((s) => s.rubricScore)
		.filter((v): v is number => typeof v === "number");
	const avgRubricScore =
		rubrics.length > 0
			? rubrics.reduce((a, b) => a + b, 0) / rubrics.length
			: undefined;

	return {
		cohort,
		n,
		preCorrectRate: pre,
		postCorrectRate: post,
		normalizedGain,
		misconceptionRateAtPredict: rate(preMisc, n),
		misconceptionRateAtApply: rate(postMisc, n),
		avgRubricScore,
	};
}

const COHORTS: Cohort[] = ["baseline", "labs-v1"];

/** Group sessions by lab and cohort and compute the outcome report. */
export function computeCohortReport(sessions: AnalysisSession[]): LabReport[] {
	const byLab = new Map<string, AnalysisSession[]>();
	for (const session of sessions) {
		const list = byLab.get(session.labId) ?? [];
		list.push(session);
		byLab.set(session.labId, list);
	}

	const reports: LabReport[] = [];
	for (const [labId, labSessions] of byLab) {
		const cohorts = COHORTS.map((cohort) =>
			statsFor(
				cohort,
				labSessions.filter((s) => s.cohort === cohort),
			),
		).filter((c) => c.n > 0);

		const baseline = cohorts.find((c) => c.cohort === "baseline");
		const labs = cohorts.find((c) => c.cohort === "labs-v1");
		const gainDelta =
			baseline && labs
				? labs.normalizedGain - baseline.normalizedGain
				: undefined;

		reports.push({ labId, cohorts, gainDelta });
	}

	// Stable ordering for deterministic output.
	return reports.sort((a, b) => a.labId.localeCompare(b.labId));
}
