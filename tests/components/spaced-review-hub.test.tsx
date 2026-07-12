import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { LearningProgressCard } from "@/components/dashboard/learning-progress-card";
import { SpacedReviewHub } from "@/components/quizzes/spaced-review-hub";

const question = {
	id: "00000000-0000-4000-8000-000000000001",
	question: "What does print(2 + 2) show?",
	question_type: "multiple_choice" as const,
	options: ["4", "22", "Error"],
	explanation: "Python adds the two numbers.",
	hint: "Use arithmetic.",
	order_index: 0,
	time_limit_seconds: 30,
};

const learningPayload = {
	mastery: [
		{
			course_id: "00000000-0000-4000-8000-000000000010",
			concept_tag: "python-arithmetic",
			correct_count: 2,
			total_count: 3,
			mastery_score: 78,
			status: "practising",
			courses: [{ title: "Hello Python" }],
		},
	],
	dueCount: 1,
	totalScheduled: 1,
	nextReviewAt: "2026-07-11T12:00:00.000Z",
	reviews: [
		{
			queueId: "00000000-0000-4000-8000-000000000020",
			courseTitle: "Hello Python",
			intervalStep: 0,
			question,
		},
	],
};

afterEach(() => vi.restoreAllMocks());

describe("SpacedReviewHub", () => {
	it("shows due work, mastery, and the next spaced interval after grading", async () => {
		const fetchMock = vi
			.spyOn(globalThis, "fetch")
			.mockImplementation(async (input, init) => {
				const url = String(input);
				if (url === "/api/practice/v1/sessions")
					return new Response(JSON.stringify({ mode: "fallback" }), {
						status: 200,
					});
				if (url === "/api/quiz/learning" && init?.method === "POST")
					return new Response(
						JSON.stringify({
							correct: true,
							correctAnswer: "4",
							explanation: "Python adds the two numbers.",
							concept: "python-arithmetic",
							nextReviewDays: 7,
						}),
						{ status: 200 },
					);
				return new Response(JSON.stringify(learningPayload), { status: 200 });
			});

		render(<SpacedReviewHub />);
		expect(
			await screen.findByText("What does print(2 + 2) show?"),
		).toBeInTheDocument();
		expect(screen.getByText("python arithmetic")).toBeInTheDocument();
		expect(screen.getByText("78%")).toBeInTheDocument();

		fireEvent.click(screen.getByRole("radio", { name: "4" }));
		fireEvent.click(screen.getByRole("button", { name: "Check answer" }));

		expect(await screen.findByText("Nice work!")).toBeInTheDocument();
		expect(
			screen.getByText("We’ll revisit python arithmetic in 7 days."),
		).toBeInTheDocument();
		expect(fetchMock).toHaveBeenLastCalledWith(
			"/api/quiz/learning",
			expect.objectContaining({ method: "POST" }),
		);
	});

	it("shows a caught-up state when nothing is due", async () => {
		vi.spyOn(globalThis, "fetch").mockImplementation(async (input) => {
			if (String(input) === "/api/practice/v1/sessions")
				return new Response(JSON.stringify({ mode: "fallback" }), {
					status: 200,
				});
			return new Response(
				JSON.stringify({
					...learningPayload,
					dueCount: 0,
					reviews: [],
					nextReviewAt: "2026-07-18T12:00:00.000Z",
				}),
				{ status: 200 },
			);
		});
		render(<SpacedReviewHub />);
		expect(await screen.findByText("You’re caught up!")).toBeInTheDocument();
	});
});

describe("LearningProgressCard", () => {
	it("links the dashboard to due reviews", async () => {
		vi.spyOn(globalThis, "fetch").mockResolvedValue(
			new Response(JSON.stringify(learningPayload), { status: 200 }),
		);
		render(<LearningProgressCard />);
		await waitFor(() =>
			expect(
				screen.getByText("1 short review question is ready today."),
			).toBeInTheDocument(),
		);
		expect(
			screen.getByRole("link", { name: /Review and view map/ }),
		).toHaveAttribute("href", "/review");
	});
});
