import { render, screen } from "@testing-library/react";
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
