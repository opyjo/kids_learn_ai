import { describe, expect, it, vi } from "vitest";
import { NextWordLab } from "@/components/concept-labs/next-word-lab";
import { nextWordGuesserLab } from "@/lib/concept-labs/labs/next-word-guesser";
import { render, screen } from "@/tests/test-utils";

describe("NextWordLab", () => {
	it("locks Continue again when a learner returns to teaching or retrains", async () => {
		const onCanContinueChange = vi.fn();
		const { user } = render(
			<NextWordLab
				definition={nextWordGuesserLab}
				onAction={() => {}}
				onCanContinueChange={onCanContinueChange}
			/>,
		);

		for (const sentence of nextWordGuesserLab.starterSentences?.slice(0, 3) ??
			[]) {
			await user.click(
				screen.getByRole("button", { name: new RegExp(sentence, "i") }),
			);
		}
		await user.click(
			screen.getByRole("button", { name: /train the machine/i }),
		);
		await user.click(screen.getByRole("button", { name: /^the$/i }));
		await user.click(screen.getByRole("button", { name: /yes/i }));
		expect(onCanContinueChange).toHaveBeenLastCalledWith(true);

		await user.click(
			screen.getByRole("button", { name: /teach it more sentences/i }),
		);
		expect(onCanContinueChange).toHaveBeenLastCalledWith(false);

		await user.click(
			screen.getByRole("button", { name: /train the machine/i }),
		);
		expect(onCanContinueChange).toHaveBeenLastCalledWith(false);
	});
});
