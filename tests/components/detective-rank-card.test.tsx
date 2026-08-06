import { beforeEach, describe, expect, it } from "vitest";
import { DetectiveRankCard } from "@/components/stories/detective-rank-card";
import { currentStory } from "@/lib/story-club";
import { writeStoryProgress } from "@/lib/story-club-progress";
import { render, screen } from "@/tests/test-utils";

describe("DetectiveRankCard", () => {
	beforeEach(() => window.localStorage.clear());

	it("shows the earned badge and updated detective rank", async () => {
		expect(currentStory).toBeDefined();
		if (!currentStory) return;
		const correct = currentStory.challenge.options.find(
			(option) => option.correct,
		);
		expect(correct).toBeDefined();
		if (!correct) return;
		writeStoryProgress(currentStory.slug, { answer: correct.id });

		render(<DetectiveRankCard />);
		expect(await screen.findByText("Clue Spotter")).toBeInTheDocument();
		expect(screen.getByText("1/4 badges")).toBeInTheDocument();
	});
});
