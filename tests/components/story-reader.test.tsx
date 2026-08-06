import { describe, expect, it } from "vitest";
import { StoryReader } from "@/components/stories/story-reader";
import { currentStory } from "@/lib/story-club";
import { render, screen } from "@/tests/test-utils";

describe("StoryReader", () => {
	it("reveals the fact-checking lesson after the child makes a choice", async () => {
		expect(currentStory).toBeDefined();
		if (!currentStory) return;

		const { user } = render(<StoryReader story={currentStory} />);

		expect(screen.getByRole("progressbar")).toHaveAttribute(
			"aria-valuenow",
			"25",
		);
		expect(
			screen.queryByText("The F.A.C.T. detective check"),
		).not.toBeInTheDocument();

		await user.click(
			screen.getByRole("button", {
				name: "Check two trusted science sources",
			}),
		);

		expect(screen.getByText("Sharp thinking!")).toBeInTheDocument();
		expect(
			screen.getByText("The F.A.C.T. detective check"),
		).toBeInTheDocument();
		expect(screen.getByRole("progressbar")).toHaveAttribute(
			"aria-valuenow",
			"75",
		);
	});

	it("unlocks the badge when the weekly challenge is answered correctly", async () => {
		expect(currentStory).toBeDefined();
		if (!currentStory) return;

		const { user } = render(<StoryReader story={currentStory} />);
		await user.click(
			screen.getByRole("button", {
				name: "Check two trusted science sources",
			}),
		);
		await user.click(
			screen.getByRole("button", {
				name: "Pause and verify the claim with reliable sources",
			}),
		);

		expect(screen.getByText(/badge unlocked/i)).toBeInTheDocument();
		expect(screen.getByText("Your clue for next Thursday")).toBeInTheDocument();
		expect(screen.getByRole("progressbar")).toHaveAttribute(
			"aria-valuenow",
			"100",
		);
	});
});
