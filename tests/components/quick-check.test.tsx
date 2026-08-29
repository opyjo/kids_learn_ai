import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { QuickCheck } from "@/components/quizzes/quick-check";

const lessonId = "00000000-0000-4000-8000-0000000000aa";
const question = {
	id: "00000000-0000-4000-8000-000000000001",
	question: "What does print(2 + 2) show?",
	question_type: "multiple_choice" as const,
	options: ["4", "22", "Error"],
	hint: "Think about maths, not text.",
	order_index: 0,
	time_limit_seconds: 30,
};
const payload = {
	quiz: {
		id: "quiz-1",
		title: "Math Wizard Homework Challenge",
		description: "One question.",
	},
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
		expect(
			await screen.findByText("Math Wizard Homework Challenge"),
		).toBeInTheDocument();
		fireEvent.click(screen.getByRole("button", { name: /need a hint/i }));
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

	it("renders fenced code in a question instead of showing Markdown fences", async () => {
		vi.spyOn(globalThis, "fetch").mockResolvedValue(
			new Response(
				JSON.stringify({
					...payload,
					questions: [
						{
							...question,
							question: "What does this show?\n\n```python\nprint(2 + 2)\n```",
						},
					],
				}),
				{ status: 200 },
			),
		);

		render(<QuickCheck lessonId={lessonId} signedIn={true} />);

		await screen.findByText("What does this show?");
		expect(document.querySelector("code.language-python")).toHaveTextContent(
			"print(2 + 2)",
		);
		expect(screen.queryByText(/```python/)).not.toBeInTheDocument();
	});

	it("caps a long take-home pause and reports a failed answer check", async () => {
		let requestBody: Record<string, unknown> | undefined;
		vi.spyOn(globalThis, "fetch").mockImplementation(async (_input, init) => {
			if (!init || init.method !== "POST")
				return new Response(JSON.stringify(payload), { status: 200 });
			requestBody = JSON.parse(String(init.body));
			return new Response("Could not check", { status: 500 });
		});
		const dateNow = vi.spyOn(Date, "now");
		dateNow.mockReturnValueOnce(1_000).mockReturnValue(3_601_000);

		render(<QuickCheck lessonId={lessonId} signedIn={true} />);
		await screen.findByText("Math Wizard Homework Challenge");
		fireEvent.click(screen.getByRole("radio", { name: "4" }));
		fireEvent.click(screen.getByRole("button", { name: "Check answer" }));

		expect(
			await screen.findByText(/couldn’t check your answer/i),
		).toBeInTheDocument();
		await waitFor(() => expect(requestBody?.timeTakenMs).toBe(600_000));
		expect(screen.getByRole("button", { name: "Check answer" })).toBeEnabled();
	});
});
