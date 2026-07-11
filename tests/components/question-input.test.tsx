import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { QuestionInput } from "@/components/quizzes/question-input";
import type { StudentQuestion } from "@/lib/quizzes/types";

const orderingQuestion: StudentQuestion = {
	id: "00000000-0000-4000-8000-000000000001",
	question: "Put the code in order",
	question_type: "code_ordering",
	options: ["name = input()", "print(name)"],
	explanation: "Ask before printing.",
	hint: "Input comes first.",
	order_index: 0,
	time_limit_seconds: 30,
};

describe("QuestionInput", () => {
	it("lets keyboard and assistive-technology users reorder code", () => {
		const onChange = vi.fn();
		render(
			<QuestionInput
				question={orderingQuestion}
				value={orderingQuestion.options}
				onChange={onChange}
			/>,
		);
		fireEvent.click(screen.getByRole("button", { name: "Move line 2 up" }));
		expect(onChange).toHaveBeenCalledWith(["print(name)", "name = input()"]);
		expect(screen.getByText("Moved line 2 to position 1")).toBeInTheDocument();
	});

	it("uses radio semantics for answer choices", () => {
		const onChange = vi.fn();
		render(
			<QuestionInput
				question={{ ...orderingQuestion, question_type: "multiple_choice" }}
				value=""
				onChange={onChange}
			/>,
		);
		fireEvent.click(screen.getByRole("radio", { name: "print(name)" }));
		expect(onChange).toHaveBeenCalledWith("print(name)");
	});
});
