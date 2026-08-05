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

		expect(screen.getByText(/review previous assignment/i)).toBeInTheDocument();
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
});
