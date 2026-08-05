import { describe, expect, it } from "vitest";
import {
	IRAP_EXCLUDED_WORK,
	IRAP_PROJECT_BRIEF,
	OCI_DMAP_ANSWERS,
	OCI_DMAP_DETAILS,
	PARTNER_MASTER_ONE_PAGER,
	PARTNER_PROGRAM_ADAPTATIONS,
	SHARED_FUNDING_EVIDENCE,
} from "@/lib/funding/application-workspace";

describe("funding application workspace", () => {
	it("keeps canonical program facts out of the application kit", () => {
		expect("timing" in OCI_DMAP_DETAILS).toBe(false);
		expect("value" in OCI_DMAP_DETAILS).toBe(false);
		expect(OCI_DMAP_ANSWERS.length).toBeGreaterThanOrEqual(6);
	});

	it("tracks reusable facts without treating missing evidence as ready", () => {
		const labelsByStatus = Object.groupBy(
			SHARED_FUNDING_EVIDENCE,
			(item) => item.status,
		);

		expect(labelsByStatus.Ready?.length).toBeGreaterThan(0);
		expect(labelsByStatus.Confirm?.length).toBeGreaterThan(0);
		expect(labelsByStatus["Add evidence"]?.length).toBeGreaterThan(0);
		expect(labelsByStatus["Add evidence"]?.map((item) => item.label)).toContain(
			"Historical results",
		);
	});

	it("creates distinct partner adaptations for each lead program", () => {
		expect(PARTNER_PROGRAM_ADAPTATIONS.map((program) => program.id)).toEqual([
			"cancode",
			"otf",
			"promoscience",
		]);
		expect(
			PARTNER_PROGRAM_ADAPTATIONS.every(
				(program) => program.requirements.length >= 4,
			),
		).toBe(true);
		expect(PARTNER_MASTER_ONE_PAGER).toContain("[ELIGIBLE ORGANIZATION]");
		expect(
			PARTNER_PROGRAM_ADAPTATIONS.every(
				(program) =>
					!("deadline" in program) &&
					!("value" in program) &&
					!("officialUrl" in program),
			),
		).toBe(true);
	});

	it("keeps IRAP focused on experimental work", () => {
		expect(IRAP_PROJECT_BRIEF.map((section) => section.id)).toContain(
			"irap-uncertainty",
		);
		expect(IRAP_PROJECT_BRIEF.map((section) => section.id)).toContain(
			"irap-hypotheses",
		);
		expect(IRAP_EXCLUDED_WORK).toContain(
			"Routine platform maintenance or ordinary feature development",
		);
	});
});
