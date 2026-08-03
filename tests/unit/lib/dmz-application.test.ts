import { describe, expect, it } from "vitest";
import {
	DMZ_APPLICATION_ANSWERS,
	DMZ_APPLICATION_DETAILS,
	DMZ_ELIGIBILITY_ITEMS,
	DMZ_NINETY_SECOND_PITCH,
	DMZ_REQUIRED_INPUTS,
	DMZ_SELECTION_EVIDENCE,
	DMZ_WORKBACK_PLAN,
} from "@/lib/funding/dmz-application";

describe("DMZ application workspace", () => {
	it("covers every published selection criterion", () => {
		expect(DMZ_SELECTION_EVIDENCE.map((item) => item.criterion)).toEqual([
			"Product stage",
			"Scalability",
			"Leadership proficiency",
			"Market assessment",
			"Technological capabilities",
			"Traction",
		]);
	});

	it("keeps founder-controlled eligibility facts unconfirmed", () => {
		const confirmations = DMZ_ELIGIBILITY_ITEMS.filter(
			(item) => item.status === "Confirm",
		);

		expect(confirmations.map((item) => item.title)).toEqual([
			"Black founder or co-founder leads the business",
			"Can attend in person in downtown Toronto",
		]);
		expect(DMZ_REQUIRED_INPUTS.length).toBeGreaterThanOrEqual(8);
	});

	it("provides unique, usable answer drafts and a pitch", () => {
		const ids = DMZ_APPLICATION_ANSWERS.map((answer) => answer.id);

		expect(new Set(ids).size).toBe(ids.length);
		expect(DMZ_APPLICATION_ANSWERS.length).toBeGreaterThanOrEqual(10);
		expect(
			DMZ_APPLICATION_ANSWERS.every((answer) => answer.draft.length > 100),
		).toBe(true);
		expect(DMZ_NINETY_SECOND_PITCH.length).toBeGreaterThan(700);
	});

	it("builds in a submission buffer before the official deadline", () => {
		expect(DMZ_APPLICATION_DETAILS.internalSubmitDate).toBe("August 22, 2026");
		expect(DMZ_APPLICATION_DETAILS.deadline).toBe("August 24, 2026");
		expect(DMZ_WORKBACK_PLAN.at(-1)?.date).toBe("August 22");
	});
});
