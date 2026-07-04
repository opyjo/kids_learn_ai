import { afterEach, describe, expect, it, vi } from "vitest";
import { ExplainDialogue } from "@/components/concept-labs/explain-dialogue";
import { openingQuestion } from "@/lib/concept-labs/explain";
import { howAiLearnsLab } from "@/lib/concept-labs/labs/how-ai-learns";
import { render, screen, waitFor } from "@/tests/test-utils";

const stats = { trainedSampleCount: 6, testCount: 2, testCorrectCount: 1 };

function mockFetch() {
	return vi.fn(async (_url: string, init?: RequestInit) => {
		const body = JSON.parse(String(init?.body ?? "{}"));
		if (body.action === "reply") {
			return {
				ok: true,
				json: async () => ({
					role: "assistant",
					content: "What did the machine look at to guess?",
					childTurns: 1,
					shouldWrapUp: false,
				}),
			} as Response;
		}
		return {
			ok: true,
			json: async () => ({ score: 2, feedback: "You explained it clearly!" }),
		} as Response;
	});
}

afterEach(() => {
	vi.unstubAllGlobals();
});

describe("ExplainDialogue", () => {
	it("opens with BrightByte's grounded question", () => {
		vi.stubGlobal("fetch", mockFetch());
		render(
			<ExplainDialogue
				definition={howAiLearnsLab}
				stats={stats}
				misconceptionTags={[]}
				onComplete={() => {}}
			/>,
		);
		expect(
			screen.getByText(openingQuestion(howAiLearnsLab)),
		).toBeInTheDocument();
	});

	it("sends a reply, shows BrightByte's response, and scores on finish", async () => {
		vi.stubGlobal("fetch", mockFetch());
		const onComplete = vi.fn();
		const { user } = render(
			<ExplainDialogue
				definition={howAiLearnsLab}
				stats={stats}
				misconceptionTags={["ai-has-agency"]}
				onComplete={onComplete}
			/>,
		);

		await user.type(
			screen.getByPlaceholderText("Type your answer…"),
			"it compared my drawing to the ones I taught it",
		);
		await user.click(screen.getByRole("button", { name: /send message/i }));

		await waitFor(() =>
			expect(
				screen.getByText("What did the machine look at to guess?"),
			).toBeInTheDocument(),
		);

		await user.click(screen.getByRole("button", { name: /i've got it/i }));

		await waitFor(() => expect(onComplete).toHaveBeenCalledTimes(1));
		const outcome = onComplete.mock.calls[0][0];
		expect(outcome.text).toContain("it compared my drawing");
		expect(outcome.rubricScore).toBe(2);
		expect(outcome.dialogue.length).toBeGreaterThanOrEqual(3);
	});
});
