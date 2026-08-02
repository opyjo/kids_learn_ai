import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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

function hostGame(status: "question" | "paused" | "review" = "question") {
	return {
		game: {
			id: "game-1",
			quizId: "quiz-1",
			code: "ABC123",
			status,
			currentQuestionIndex: 0,
			questionStartedAt: new Date(Date.now() - 60_000).toISOString(),
			questionDeadlineAt:
				status === "question"
					? new Date(Date.now() + 20_000).toISOString()
					: null,
			pausedRemainingMs: status === "paused" ? 12_000 : null,
			stateVersion: 4,
			title: "Loops — Live Lesson Challenge",
			totalQuestions: 8,
			quizType: "lesson_challenge",
			powerupsEnabled: true,
			teamMode: false,
			autoReveal: true,
		},
		isHost: true,
		player: null,
		players: [
			{ id: "player-1", display_name: "Ada L.", team_id: null },
			{ id: "player-2", display_name: "Grace H.", team_id: null },
			{ id: "player-3", display_name: "Alan T.", team_id: null },
		],
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
		review:
			status === "review"
				? {
						correctAnswer: "The length",
						explanation: "len() counts items.",
						answers: [],
					}
				: null,
		hostAnswerKey: {
			correctAnswer: "The length",
			explanation: "len() counts items.",
		},
		hostNextQuestion: {
			question: "Which loop repeats while a condition is true?",
			questionType: "multiple_choice",
		},
		personalResult: null,
		hostMetrics: {
			totalPlayers: 3,
			connectedPlayers: 2,
			answeredCount: 2,
			distribution: [
				{ answer: "The length", count: 2 },
				{ answer: "The last item", count: 1 },
			],
			hostLastSeenAt: new Date().toISOString(),
		},
	};
}

function mockHostFetch(status: "question" | "paused" | "review" = "question") {
	return vi
		.spyOn(globalThis, "fetch")
		.mockImplementation(async (_input, init) => {
			if (init?.method === "PATCH")
				return new Response(JSON.stringify({ ok: true }), { status: 200 });
			if (init?.method === "POST")
				return new Response(JSON.stringify({ ok: true }), { status: 200 });
			return new Response(JSON.stringify(hostGame(status)), { status: 200 });
		});
}

const patchBodies = (fetchMock: { mock: { calls: unknown[][] } }) =>
	fetchMock.mock.calls
		.filter((call) => (call[1] as RequestInit | undefined)?.method === "PATCH")
		.map((call) => JSON.parse((call[1] as RequestInit).body as string));

describe("LiveQuizGame resilient host controls", () => {
	it("shows participation, connection, and anonymous-answer progress", async () => {
		mockHostFetch();

		render(<LiveQuizGame code="ABC123" />);

		expect(await screen.findByText("2/3 answered")).toBeInTheDocument();
		expect(screen.getByText("2 of 3 connected")).toBeInTheDocument();
		expect(screen.getByText("Anonymous answers")).toBeInTheDocument();
		expect(screen.getByRole("button", { name: "+10 seconds" })).toBeVisible();
		expect(
			screen.getByRole("button", { name: "Lock and reveal" }),
		).toBeVisible();
	});

	it("sends the current state version with classroom actions", async () => {
		const fetchMock = mockHostFetch();

		render(<LiveQuizGame code="ABC123" />);

		fireEvent.click(await screen.findByRole("button", { name: "+10 seconds" }));
		await waitFor(() =>
			expect(patchBodies(fetchMock)).toContainEqual({
				action: "add_time",
				seconds: 10,
				version: 4,
			}),
		);
	});

	it("offers resume and more time after the host reconnects to a paused game", async () => {
		mockHostFetch("paused");

		render(<LiveQuizGame code="ABC123" />);

		expect(
			await screen.findByRole("button", { name: "Resume question" }),
		).toBeVisible();
		expect(
			screen.getByRole("button", { name: "Add 10 seconds" }),
		).toBeVisible();
		expect(
			screen.getByText(/students cannot answer until you resume/i),
		).toBeInTheDocument();
	});

	it("shows the host the live question with the correct answer highlighted", async () => {
		mockHostFetch();

		render(<LiveQuizGame code="ABC123" />);

		expect(
			await screen.findByText("What does len() return?"),
		).toBeInTheDocument();
		// Options also appear in the anonymous-answer distribution, so match all.
		expect(screen.getAllByText("The length").length).toBeGreaterThan(0);
		expect(screen.getAllByText("The last item").length).toBeGreaterThan(0);
		expect(screen.getByText("len() counts items.")).toBeInTheDocument();
		expect(
			screen.getByText(/only you can see the answer key/i),
		).toBeInTheDocument();
		// The host reads the question — they must not be able to answer it.
		expect(
			screen.queryByRole("button", { name: "Lock answer" }),
		).not.toBeInTheDocument();
	});

	it("hides the answer key and distribution in projector mode", async () => {
		mockHostFetch();

		render(<LiveQuizGame code="ABC123" />);

		expect(await screen.findByText("len() counts items.")).toBeInTheDocument();
		expect(screen.getByText("Anonymous answers")).toBeInTheDocument();

		fireEvent.click(
			screen.getByRole("switch", { name: /hide the answer key/i }),
		);

		expect(screen.queryByText("len() counts items.")).not.toBeInTheDocument();
		expect(screen.queryByText("Anonymous answers")).not.toBeInTheDocument();
		expect(screen.queryByText("Up next")).not.toBeInTheDocument();
		expect(
			screen.getByText(/answer key is hidden from this screen/i),
		).toBeInTheDocument();
		// Options stay visible so the class can read them from the shared screen.
		expect(screen.getByText("The length")).toBeInTheDocument();
		expect(screen.getByText("The last item")).toBeInTheDocument();
	});

	it("previews the next question for the host", async () => {
		mockHostFetch();

		render(<LiveQuizGame code="ABC123" />);

		expect(await screen.findByText("Up next")).toBeInTheDocument();
		expect(
			screen.getByText("Which loop repeats while a condition is true?"),
		).toBeInTheDocument();
	});

	it("signals the host when every student has answered", async () => {
		const game = hostGame();
		game.hostMetrics.answeredCount = 3;
		vi.spyOn(globalThis, "fetch").mockResolvedValue(
			new Response(JSON.stringify(game), { status: 200 }),
		);

		render(<LiveQuizGame code="ABC123" />);

		expect(await screen.findByText("All 3 answered!")).toBeInTheDocument();
		expect(
			screen.getByRole("button", {
				name: /everyone answered — lock and reveal/i,
			}),
		).toBeVisible();
	});

	it("asks for confirmation before ending the game", async () => {
		const fetchMock = mockHostFetch();

		render(<LiveQuizGame code="ABC123" />);

		fireEvent.click(await screen.findByRole("button", { name: "End game" }));
		expect(patchBodies(fetchMock)).not.toContainEqual(
			expect.objectContaining({ action: "finish" }),
		);

		fireEvent.click(
			await screen.findByRole("button", { name: "Yes, end the game" }),
		);
		await waitFor(() =>
			expect(patchBodies(fetchMock)).toContainEqual({
				action: "finish",
				version: 4,
			}),
		);
	});
});

describe("LiveQuizGame student question states", () => {
	it("tells the student time is up instead of showing disabled inputs", async () => {
		const base = hostGame();
		const game = {
			...base,
			game: {
				...base.game,
				questionDeadlineAt: new Date(Date.now() - 5_000).toISOString(),
			},
			isHost: false,
			hostMetrics: null,
			hostAnswerKey: null,
			hostNextQuestion: null,
			player: {
				id: "player-1",
				team_id: null,
				display_name: "Ada L.",
				fifty_fifty_available: true,
				hint_available: true,
				second_chance_available: true,
			},
		};
		vi.spyOn(globalThis, "fetch").mockResolvedValue(
			new Response(JSON.stringify(game), { status: 200 }),
		);

		render(<LiveQuizGame code="ABC123" />);

		expect(await screen.findByText("Time's up!")).toBeInTheDocument();
		expect(
			screen.getByText(/your teacher will reveal the answer/i),
		).toBeInTheDocument();
		expect(
			screen.queryByRole("button", { name: "Lock answer" }),
		).not.toBeInTheDocument();
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
