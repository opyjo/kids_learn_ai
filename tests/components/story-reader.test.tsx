import { beforeEach, describe, expect, it } from "vitest";
import { StoryReader } from "@/components/stories/story-reader";
import { currentStory } from "@/lib/story-club";
import { render, screen } from "@/tests/test-utils";

describe("StoryReader", () => {
	beforeEach(() => {
		window.localStorage.clear();
	});

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
			"50",
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

	it("restores saved progress when the reader is reopened", async () => {
		expect(currentStory).toBeDefined();
		if (!currentStory) return;

		const { user, unmount } = render(<StoryReader story={currentStory} />);
		await user.click(
			screen.getByRole("button", {
				name: "Check two trusted science sources",
			}),
		);
		unmount();

		render(<StoryReader story={currentStory} />);
		expect(
			await screen.findByText("The F.A.C.T. detective check"),
		).toBeInTheDocument();
	});

	it("turns the clue hunt and story choice into visible story outcomes", async () => {
		expect(currentStory).toBeDefined();
		if (!currentStory?.clueHunt) return;

		const { user } = render(<StoryReader story={currentStory} />);
		for (
			let index = 0;
			index < currentStory.clueHunt.hotspots.length;
			index++
		) {
			await user.click(
				screen.getByRole("button", {
					name: new RegExp(`^Clue ${index + 1}:`),
				}),
			);
		}
		expect(
			screen.getByText(currentStory.clueHunt.successMessage),
		).toBeInTheDocument();

		await user.click(
			screen.getByRole("button", { name: "Copy it onto the poster" }),
		);
		expect(
			screen.getByText(currentStory.choices[0].bridge),
		).toBeInTheDocument();
	});

	it("lets the reader question Pixel and make a verdict", async () => {
		expect(currentStory).toBeDefined();
		if (!currentStory?.askPixel) return;

		const { user } = render(<StoryReader story={currentStory} />);
		await user.click(
			screen.getByRole("button", { name: "Check two trusted science sources" }),
		);
		await user.click(
			screen.getByRole("button", { name: "Where did you learn that?" }),
		);
		expect(
			screen.getByText(/do not actually have a source saved/i),
		).toBeInTheDocument();

		await user.click(screen.getByRole("button", { name: "False" }));
		expect(
			screen.getByText(currentStory.askPixel.verdict.correctFeedback),
		).toBeInTheDocument();
	});
});
