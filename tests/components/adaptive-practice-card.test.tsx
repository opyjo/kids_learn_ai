import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { AdaptivePracticeCard } from "@/components/quizzes/adaptive-practice-card";

const question = {
	id: "00000000-0000-4000-8000-000000000001",
	question: "What does print(2 + 2) show?",
	question_type: "multiple_choice" as const,
	options: ["4", "22", "Error"],
	explanation: "Python adds numbers.",
	hint: "Use arithmetic.",
	order_index: 0,
	time_limit_seconds: 30,
};

afterEach(() => vi.restoreAllMocks());

describe("AdaptivePracticeCard", () => {
	it("requires confidence and shows approved remediation privately", async () => {
		const onProgress = vi.fn();
		vi.spyOn(globalThis, "fetch").mockImplementation(async (input) => {
			if (String(input) === "/api/practice/v1/sessions")
				return new Response(
					JSON.stringify({
						mode: "adaptive",
						sessionId: "00000000-0000-4000-8000-000000000010",
						position: 1,
						targetLength: 10,
						question,
					}),
					{ status: 200 },
				);
			return new Response(
				JSON.stringify({
					correct: false,
					explanation: "Python adds numbers.",
					remediation: "Add the values before printing.",
					mastery: { score: 30, status: "learning" },
					status: "active",
					position: 2,
					targetLength: 10,
					question: { ...question, id: "00000000-0000-4000-8000-000000000002" },
				}),
				{ status: 200 },
			);
		});

		render(
			<AdaptivePracticeCard onUnavailable={vi.fn()} onProgress={onProgress} />,
		);
		fireEvent.click(await screen.findByRole("radio", { name: "22" }));
		expect(screen.getByRole("button", { name: "Check answer" })).toBeDisabled();
		fireEvent.click(screen.getByRole("button", { name: /unsure/i }));
		fireEvent.click(screen.getByRole("button", { name: "Check answer" }));

		expect(await screen.findByText("Quick mini-lesson")).toBeInTheDocument();
		expect(screen.getByRole("alert")).toHaveTextContent(
			"Add the values before printing.",
		);
		expect(onProgress).toHaveBeenCalledOnce();
	});

	it("hands control back to spaced review when rollout is unavailable", async () => {
		const onUnavailable = vi.fn();
		vi.spyOn(globalThis, "fetch").mockResolvedValue(
			new Response(JSON.stringify({ mode: "fallback" }), { status: 200 }),
		);
		render(
			<AdaptivePracticeCard
				onUnavailable={onUnavailable}
				onProgress={vi.fn()}
			/>,
		);
		await waitFor(() => expect(onUnavailable).toHaveBeenCalledOnce());
	});
});
