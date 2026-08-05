import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { AssignmentReview } from "@/components/lessons/assignment-review";
import { render, screen } from "@/tests/test-utils";

const review = {
	lessonOrderIndex: 2,
	lessonTitle: "Python Does Math!",
	assignment: "## Homework\nUse all four operations.",
	solutionCode: 'print("model answer")',
	reviewNotes: "## Ask the class\nWhy does division return a decimal?",
};

describe("assignment review", () => {
	it("keeps the model answer hidden until the teacher reveals it", async () => {
		const user = userEvent.setup();
		render(<AssignmentReview review={review} />);

		expect(screen.getByText(/opening review/i)).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: /previous assignment/i }),
		).toBeInTheDocument();
		expect(screen.getByText(/lesson 2: python does math/i)).toBeInTheDocument();
		expect(screen.queryByText(/model answer/i)).not.toBeInTheDocument();
		expect(
			screen.queryByText(/use all four operations/i),
		).not.toBeInTheDocument();

		await user.click(screen.getByRole("button", { name: /show assignment/i }));
		expect(screen.getByText(/use all four operations/i)).toBeInTheDocument();

		await user.click(screen.getByRole("button", { name: /reveal solution/i }));
		expect(screen.getByText(/model answer/i)).toBeInTheDocument();
		expect(
			screen.getByText(/why does division return a decimal/i),
		).toBeInTheDocument();
	});

	it("connects each disclosure button to its hidden content", async () => {
		const user = userEvent.setup();
		render(<AssignmentReview review={review} idPrefix="term-two-review" />);

		const assignmentButton = screen.getByRole("button", {
			name: /show assignment/i,
		});
		const solutionButton = screen.getByRole("button", {
			name: /reveal solution/i,
		});

		expect(assignmentButton).toHaveAttribute(
			"aria-controls",
			"term-two-review-prompt",
		);
		expect(solutionButton).toHaveAttribute(
			"aria-controls",
			"term-two-review-solution",
		);

		await user.click(assignmentButton);
		await user.click(solutionButton);

		expect(document.querySelector("#term-two-review-prompt")).not.toBeNull();
		expect(document.querySelector("#term-two-review-solution")).not.toBeNull();
	});
});
