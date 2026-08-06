import { beforeEach, describe, expect, it } from "vitest";
import { currentStory } from "@/lib/story-club";
import {
	countEarnedBadges,
	detectiveRank,
	hasEarnedBadge,
	readStoryProgress,
	writeStoryProgress,
} from "@/lib/story-club-progress";

describe("Story Club progress", () => {
	beforeEach(() => window.localStorage.clear());

	it("stores choices, answers, and clue ids", () => {
		writeStoryProgress("case-one", {
			choice: "check-sources",
			answer: "verify-claim",
			clues: ["sun", "desert"],
		});
		expect(readStoryProgress("case-one")).toEqual({
			choice: "check-sources",
			answer: "verify-claim",
			clues: ["sun", "desert"],
		});
	});

	it("counts a correct saved answer as an earned badge", () => {
		expect(currentStory).toBeDefined();
		if (!currentStory) return;
		const correct = currentStory.challenge.options.find(
			(option) => option.correct,
		);
		expect(correct).toBeDefined();
		if (!correct) return;

		writeStoryProgress(currentStory.slug, { answer: correct.id });
		expect(hasEarnedBadge(currentStory.slug)).toBe(true);
		expect(countEarnedBadges()).toBe(1);
		expect(detectiveRank(1)).toBe("Clue Spotter");
	});
});
