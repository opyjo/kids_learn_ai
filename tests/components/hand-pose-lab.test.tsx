import { describe, expect, it, vi } from "vitest";
import { HandPoseLab } from "@/components/concept-labs/hand-pose-lab";
import { render, screen } from "@/tests/test-utils";

describe("HandPoseLab", () => {
	it("offers a camera-free demo that can complete the play requirement", async () => {
		const onAction = vi.fn();
		const onCanContinueChange = vi.fn();
		const { user } = render(
			<HandPoseLab
				onAction={onAction}
				onCanContinueChange={onCanContinueChange}
			/>,
		);

		await user.click(screen.getByRole("button", { name: /use a demo hand/i }));
		expect(screen.getByText(/21 landmarks/i)).toBeInTheDocument();

		await user.click(
			screen.getByRole("button", { name: /capture what the ai sees/i }),
		);

		expect(onAction).toHaveBeenCalledWith(
			expect.objectContaining({ type: "test", correct: true }),
		);
		expect(onCanContinueChange).toHaveBeenLastCalledWith(true);
		expect(screen.getByText(/captured: open hand/i)).toBeInTheDocument();
	});
});
