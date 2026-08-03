import { describe, expect, it } from "vitest";
import {
	FUNDING_PROGRAM_LANES,
	IRAP_EXCLUDED_WORK,
	IRAP_PROJECT_BRIEF,
	OCI_DMAP_ANSWERS,
	OCI_DMAP_DETAILS,
	PARTNER_MASTER_ONE_PAGER,
	PARTNER_PROGRAM_ADAPTATIONS,
	SHARED_FUNDING_EVIDENCE,
} from "@/lib/funding/application-workspace";

describe("funding application workspace", () => {
	it("keeps DMAP timing separate from the TDP deadline", () => {
		expect(OCI_DMAP_DETAILS.timing).toContain("First-come, first-served");
		expect(OCI_DMAP_DETAILS.timing).not.toContain("August 10");
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

	it("shows every active lane in the workspace overview", () => {
		expect(FUNDING_PROGRAM_LANES.map((program) => program.name)).toEqual([
			"OCI DMAP",
			"NRC IRAP",
			"CanCode",
			"OTF Seed",
			"NSERC PromoScience",
		]);
	});
});
