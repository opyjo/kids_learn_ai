import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { QuickCheck } from "@/components/quizzes/quick-check";

const lessonId = "00000000-0000-4000-8000-0000000000aa";
const question = {
	id: "00000000-0000-4000-8000-000000000001",
	question: "What does print(2 + 2) show?",
	question_type: "multiple_choice" as const,
	options: ["4", "22", "Error"],
	explanation: "Python adds numbers.",
	hint: "Think about maths, not text.",
	order_index: 0,
	time_limit_seconds: 30,
};
const payload = {
	quiz: { id: "quiz-1", title: "Quick Check", description: "One question." },
	questions: [question],
	attempts: [],
	canAttempt: true,
};

afterEach(() => vi.restoreAllMocks());

describe("QuickCheck", () => {
	it("asks signed-out students to sign in", () => {
		render(<QuickCheck lessonId={lessonId} signedIn={false} />);
		expect(screen.getByText(/sign in to play/i)).toBeInTheDocument();
	});

	it("plays a question through check, hint, and result", async () => {
		vi.spyOn(globalThis, "fetch").mockImplementation(async (_input, init) => {
			if (!init || init.method !== "POST")
				return new Response(JSON.stringify(payload), { status: 200 });
			const body = JSON.parse(String(init.body));
			if (body.action === "check")
				return new Response(
					JSON.stringify({
						correct: true,
						explanation: "Python adds numbers.",
						correctAnswer: "4",
					}),
					{ status: 200 },
				);
			return new Response(
				JSON.stringify({
					score: 1,
					maxScore: 1,
					percentage: 100,
					passed: true,
					graded: [{ questionId: question.id, correct: true }],
				}),
				{ status: 200 },
			);
		});

		render(<QuickCheck lessonId={lessonId} signedIn={true} />);
		fireEvent.click(
			await screen.findByRole("button", { name: /need a hint/i }),
		);
		expect(screen.getByText(/maths, not text/i)).toBeInTheDocument();

		fireEvent.click(screen.getByRole("radio", { name: "4" }));
		fireEvent.click(screen.getByRole("button", { name: "Check answer" }));
		expect(await screen.findByText(/you got it/i)).toBeInTheDocument();

		fireEvent.click(screen.getByRole("button", { name: "See my result" }));
		expect(await screen.findByText("100%")).toBeInTheDocument();
		expect(screen.getByText(/1 of 1 right/i)).toBeInTheDocument();
		expect(screen.getByText(/superstar/i)).toBeInTheDocument();
	});

	it("shows a locked summary when both tries are used", async () => {
		vi.spyOn(globalThis, "fetch").mockResolvedValue(
			new Response(
				JSON.stringify({
					...payload,
					attempts: [
						{ percentage: 33, passed: false, attempt_number: 1 },
						{ percentage: 67, passed: false, attempt_number: 2 },
					],
					canAttempt: false,
				}),
				{ status: 200 },
			),
		);
		render(<QuickCheck lessonId={lessonId} signedIn={true} />);
		expect(await screen.findByText(/used both tries/i)).toBeInTheDocument();
		expect(screen.getByText(/best score is 67%/i)).toBeInTheDocument();
		expect(
			screen.queryByRole("button", { name: /try again/i }),
		).not.toBeInTheDocument();
	});
});
