import { describe, expect, it } from "vitest";
import {
	type AnalysisSession,
	computeCohortReport,
} from "@/lib/concept-labs/analysis";

/** Build n sessions with the first `pre` predict-correct and first `post` apply-correct. */
function sessions(
	labId: string,
	cohort: AnalysisSession["cohort"],
	n: number,
	pre: number,
	post: number,
	extra: Partial<AnalysisSession> = {},
): AnalysisSession[] {
	return Array.from({ length: n }, (_, i) => ({
		labId,
		cohort,
		predictCorrect: i < pre,
		applyCorrect: i < post,
		// Non-correct predict answers carry a misconception tag.
		predictMisconception: i < pre ? undefined : "ai-has-agency",
		...extra,
	}));
}

describe("computeCohortReport", () => {
	it("computes Hake normalized gain per cohort", () => {
		// labs: pre 2/5 = 0.4, post 4/5 = 0.8 → gain (0.8-0.4)/(1-0.4) = 0.667
		const labs = sessions("lab-a", "labs-v1", 5, 2, 4, { rubricScore: 2 });
		// baseline: pre 2/4 = 0.5, post 2/4 = 0.5 → gain 0
		const baseline = sessions("lab-a", "baseline", 4, 2, 2);

		const [report] = computeCohortReport([...labs, ...baseline]);
		const labsStats = report.cohorts.find((c) => c.cohort === "labs-v1");
		const baseStats = report.cohorts.find((c) => c.cohort === "baseline");

		expect(labsStats?.normalizedGain).toBeCloseTo(0.6667, 3);
		expect(baseStats?.normalizedGain).toBeCloseTo(0, 5);
		expect(report.gainDelta).toBeCloseTo(0.6667, 3);
	});

	it("reports a zero gain with no headroom (everyone already correct)", () => {
		const all = sessions("lab-b", "labs-v1", 3, 3, 3);
		const [report] = computeCohortReport(all);
		expect(report.cohorts[0].preCorrectRate).toBe(1);
		expect(report.cohorts[0].normalizedGain).toBe(0);
	});

	it("tracks misconception prevalence at predict vs apply", () => {
		const s = sessions("lab-c", "labs-v1", 4, 1, 3); // 3 carry a predict misconception
		const [report] = computeCohortReport(s);
		expect(report.cohorts[0].misconceptionRateAtPredict).toBeCloseTo(0.75);
		expect(report.cohorts[0].misconceptionRateAtApply).toBe(0);
	});

	it("averages rubric scores only where present", () => {
		const s: AnalysisSession[] = [
			{ labId: "lab-d", cohort: "labs-v1", rubricScore: 2 },
			{ labId: "lab-d", cohort: "labs-v1", rubricScore: 1 },
			{ labId: "lab-d", cohort: "labs-v1" }, // no rubric — excluded
		];
		const [report] = computeCohortReport(s);
		expect(report.cohorts[0].avgRubricScore).toBeCloseTo(1.5);
	});

	it("omits gainDelta when only one arm has data", () => {
		const [report] = computeCohortReport(sessions("lab-e", "labs-v1", 3, 1, 2));
		expect(report.cohorts).toHaveLength(1);
		expect(report.gainDelta).toBeUndefined();
	});

	it("groups by lab and returns labs in stable order", () => {
		const reports = computeCohortReport([
			...sessions("lab-z", "labs-v1", 2, 1, 2),
			...sessions("lab-a", "labs-v1", 2, 1, 2),
		]);
		expect(reports.map((r) => r.labId)).toEqual(["lab-a", "lab-z"]);
	});
});
