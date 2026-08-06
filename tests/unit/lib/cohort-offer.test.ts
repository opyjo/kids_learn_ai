import { describe, expect, it } from "vitest";
import {
	FALL_2026_COHORT,
	FALL_2026_TRIAL_TIME_NOTE,
} from "@/lib/marketing/cohort-offer";

describe("Fall 2026 cohort offer", () => {
	it("keeps the public trial and beginner cohort details aligned", () => {
		expect(FALL_2026_COHORT).toMatchObject({
			ageRange: "Ages 9–13",
			day: "Mondays",
			startDate: "Monday, September 14, 2026",
			trialDate: "Monday, August 17, 2026",
			trialDuration: "1 hour",
			maxStudents: 6,
		});
		expect(FALL_2026_TRIAL_TIME_NOTE).toContain("within 24 hours");
	});
});
