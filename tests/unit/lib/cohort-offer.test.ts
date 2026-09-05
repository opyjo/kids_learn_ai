import { describe, expect, it } from "vitest";
import {
	FALL_2026_OFFER,
	getBeginnerCohortDetails,
} from "@/lib/marketing/cohort-offer";

describe("Fall 2026 enrolment offer", () => {
	it("routes both supported age groups into the Monday beginner cohort", () => {
		expect(getBeginnerCohortDetails("9-10")).toEqual({
			label: "Ages 9–10",
			day: "Mondays",
		});
		expect(getBeginnerCohortDetails("11-13")).toEqual({
			label: "Ages 11–13",
			day: "Mondays",
		});
	});

	it("keeps the trial, cohort, capacity, and price in one offer", () => {
		expect(FALL_2026_OFFER).toMatchObject({
			trialDate: "Monday, September 14, 2026",
			cohortStartDate: "Monday, September 14, 2026",
			maximumStudents: 6,
			foundingRate: "$159.99 CAD",
		});
	});

	it("publishes the same Eastern and Mountain times for the trial and weekly classes", () => {
		expect(FALL_2026_OFFER.classTime).toBe(
			"6–7 p.m. Eastern / 4–5 p.m. Mountain (Calgary/Edmonton)",
		);
		expect(FALL_2026_OFFER.weeklySchedule).toBe(
			`Mondays, ${FALL_2026_OFFER.classTime}`,
		);
		expect(FALL_2026_OFFER.trialConfirmation).toBe(
			"Availability and joining instructions confirmed within 24 hours",
		);
	});
});
