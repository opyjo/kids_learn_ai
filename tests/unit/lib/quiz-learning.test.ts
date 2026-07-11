import { describe, expect, it } from "vitest";
import {
	conceptLabel,
	masteryStatus,
	nextReviewDelayDays,
} from "@/lib/quizzes/learning";

describe("spaced review scheduling", () => {
	it("moves correct reviews through one week and one month", () => {
		expect(nextReviewDelayDays(0, true)).toBe(7);
		expect(nextReviewDelayDays(1, true)).toBe(30);
		expect(nextReviewDelayDays(2, true)).toBeNull();
	});

	it("resets an incorrect review to two days", () => {
		expect(nextReviewDelayDays(2, false)).toBe(2);
	});
});

describe("concept mastery", () => {
	it("requires enough evidence before marking a concept mastered", () => {
		expect(masteryStatus(100, 1)).toBe("practising");
		expect(masteryStatus(80, 3)).toBe("mastered");
		expect(masteryStatus(49, 5)).toBe("learning");
	});

	it("turns stable concept tags into readable labels", () => {
		expect(conceptLabel("for-loops_and-lists")).toBe("for loops and lists");
	});
});
