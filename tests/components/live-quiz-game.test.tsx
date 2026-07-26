import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { LiveQuizGame } from "@/components/quizzes/live-quiz-game";

const channel = {
	on: vi.fn().mockReturnThis(),
	subscribe: vi.fn().mockReturnThis(),
};

vi.mock("@/lib/supabase/client", () => ({
	getSupabaseBrowserClient: () => ({
		channel: () => channel,
		removeChannel: vi.fn(),
	}),
}));

afterEach(() => vi.restoreAllMocks());

describe("LiveQuizGame lesson challenge privacy", () => {
	it("shows team rankings and a private result without exposing individual rankings", async () => {
		vi.spyOn(globalThis, "fetch").mockResolvedValue(
			new Response(
				JSON.stringify({
					game: {
						id: "game-1",
						quizId: "quiz-1",
						code: "ABC123",
						status: "finished",
						currentQuestionIndex: 7,
						questionStartedAt: null,
						title: "Loops — Live Lesson Challenge",
						totalQuestions: 8,
						quizType: "lesson_challenge",
						powerupsEnabled: true,
						teamMode: true,
					},
					isHost: false,
					player: {
						id: "player-1",
						team_id: "team-1",
						display_name: "Ada L.",
						score: 3200,
					},
					players: [
						{
							id: "player-1",
							team_id: "team-1",
							display_name: "Ada L.",
						},
					],
					teams: [{ id: "team-1", name: "Code Crew" }],
					leaderboard: [],
					teamLeaderboard: [
						{
							id: "team-1",
							name: "Code Crew",
							averagePoints: 3000,
							accuracy: 0.75,
							members: 2,
						},
					],
					question: null,
					review: null,
					personalResult: {
						rank: 2,
						points: 3200,
						correctAnswers: 5,
						averageResponseMs: 4000,
					},
				}),
				{ status: 200 },
			),
		);

		render(<LiveQuizGame code="ABC123" />);

		expect(await screen.findByText("Team leaders")).toBeInTheDocument();
		expect(screen.getByText(/Code Crew/)).toBeInTheDocument();
		expect(screen.getByText("Your private result")).toBeInTheDocument();
		expect(
			screen.getByText((_text, node) =>
				Boolean(node?.matches("strong") && node.textContent === "#2"),
			),
		).toBeInTheDocument();
		expect(screen.queryByText("Individual leaders")).not.toBeInTheDocument();
		expect(screen.queryByText(/solo review/i)).not.toBeInTheDocument();
	});
});

/** A host sitting on a question whose timer ran out 40s ago. */
function expiredHostGame(autoReveal: boolean) {
	return {
		game: {
			id: "game-1",
			quizId: "quiz-1",
			code: "ABC123",
			status: "question",
			currentQuestionIndex: 0,
			questionStartedAt: new Date(Date.now() - 60_000).toISOString(),
			title: "Loops — Live Lesson Challenge",
			totalQuestions: 8,
			quizType: "lesson_challenge",
			powerupsEnabled: true,
			teamMode: false,
			autoReveal,
		},
		isHost: true,
		player: null,
		players: [],
		teams: [],
		leaderboard: [],
		teamLeaderboard: [],
		question: {
			id: "q-1",
			question: "What does len() return?",
			question_type: "multiple_choice",
			options: ["The length", "The last item"],
			hint: null,
			order_index: 0,
			time_limit_seconds: 20,
		},
		review: null,
		personalResult: null,
	};
}

function mockHostFetch(autoReveal: boolean) {
	return vi
		.spyOn(globalThis, "fetch")
		.mockImplementation(async (_input, init) =>
			init?.method === "PATCH"
				? new Response(JSON.stringify({ ok: true }), { status: 200 })
				: new Response(JSON.stringify(expiredHostGame(autoReveal)), {
						status: 200,
					}),
		);
}

const patchBodies = (fetchMock: { mock: { calls: unknown[][] } }) =>
	fetchMock.mock.calls
		.filter((call) => (call[1] as RequestInit | undefined)?.method === "PATCH")
		.map((call) => JSON.parse((call[1] as RequestInit).body as string));

describe("LiveQuizGame auto-reveal", () => {
	it("reveals the answer once when the timer runs out", async () => {
		vi.useFakeTimers({ shouldAdvanceTime: true });
		const fetchMock = mockHostFetch(true);

		render(<LiveQuizGame code="ABC123" />);

		await waitFor(() =>
			expect(patchBodies(fetchMock)).toEqual([{ action: "review" }]),
		);

		// The 2.5s poll keeps returning a still-expired question, so the guard has
		// to stop the host from spamming "review" for the same question.
		const callsAfterReveal = fetchMock.mock.calls.length;
		await vi.advanceTimersByTimeAsync(10_000);
		expect(fetchMock.mock.calls.length).toBeGreaterThan(callsAfterReveal);
		expect(patchBodies(fetchMock)).toEqual([{ action: "review" }]);

		vi.useRealTimers();
	});

	it("waits for the host when auto-reveal is off", async () => {
		vi.useFakeTimers({ shouldAdvanceTime: true });
		const fetchMock = mockHostFetch(false);

		render(<LiveQuizGame code="ABC123" />);

		expect(await screen.findByText("Game controls")).toBeInTheDocument();
		await vi.advanceTimersByTimeAsync(10_000);
		expect(fetchMock.mock.calls.length).toBeGreaterThan(1);
		expect(patchBodies(fetchMock)).toEqual([]);

		vi.useRealTimers();
	});
});

describe("LiveQuizGame bad code recovery", () => {
	it("offers a way back and stops polling when the code does not exist", async () => {
		vi.useFakeTimers({ shouldAdvanceTime: true });
		const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue(
			new Response(JSON.stringify({ error: "Game not found" }), {
				status: 404,
			}),
		);

		render(<LiveQuizGame code="ZZZZZZ" />);

		expect(await screen.findByText("Game not found")).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: /try another code/i }),
		).toHaveAttribute("href", "/quiz/join");
		expect(
			screen.getByRole("link", { name: /back to dashboard/i }),
		).toHaveAttribute("href", "/dashboard");

		// The interval must be torn down so a mistyped code cannot poll forever.
		await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
		const callsAfterError = fetchMock.mock.calls.length;
		await vi.advanceTimersByTimeAsync(10_000);
		expect(fetchMock).toHaveBeenCalledTimes(callsAfterError);

		vi.useRealTimers();
	});
});
