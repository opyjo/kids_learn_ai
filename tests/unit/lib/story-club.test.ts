import { describe, expect, it } from "vitest";
import { currentStory, getPublishedStory, storyIssues } from "@/lib/story-club";

describe("AI Story Club library", () => {
	it("ships a four-week first season with sequential issues", () => {
		expect(storyIssues).toHaveLength(4);
		expect(storyIssues.map((story) => story.issueNumber)).toEqual([1, 2, 3, 4]);
		expect(
			storyIssues.every((story) => story.season.includes("Truth Detectives")),
		).toBe(true);
	});

	it("publishes only complete stories", () => {
		expect(currentStory?.status).toBe("published");
		expect(currentStory?.panels.length).toBeGreaterThanOrEqual(3);
		expect(getPublishedStory(currentStory?.slug ?? "")).toBe(currentStory);
		expect(getPublishedStory("the-video-that-never-happened")).toBeUndefined();
	});
});
