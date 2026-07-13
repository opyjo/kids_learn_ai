import type { NextRequest } from "next/server";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/quiz/live/[code]/route";
import { isCourseEnrolled } from "@/lib/quizzes/server";

vi.mock("@/lib/quizzes/server", () => ({
	getApiContext: vi.fn(),
	isCourseEnrolled: vi.fn(),
	recordLearning: vi.fn(),
}));

const userId = "00000000-0000-4000-8000-000000000001";
const playerId = "00000000-0000-4000-8000-000000000002";
const gameId = "00000000-0000-4000-8000-000000000003";
const quizId = "00000000-0000-4000-8000-000000000004";
const questionId = "00000000-0000-4000-8000-000000000005";

function createDb(powerupsEnabled: boolean) {
	const game = {
		id: gameId,
		quiz_id: quizId,
		host_id: "host-id",
		status: "question",
		current_question_index: 0,
		question_started_at: new Date().toISOString(),
		powerups_enabled: powerupsEnabled,
		team_mode: false,
		quizzes: {
			id: quizId,
			title: "Loops challenge",
			quiz_type: "lesson_challenge",
			course_id: null,
			lesson_id: "lesson-id",
			lessons: { course_id: "course-from-lesson" },
		},
	};
	const player = {
		id: playerId,
		game_id: gameId,
		user_id: userId,
		second_chance_available: true,
	};
	const question = {
		id: questionId,
		question: "What does this loop do?",
		question_type: "multiple_choice",
		options: ["Repeats code", "Deletes code"],
		correct_answer: "Repeats code",
		explanation: "Loops repeat instructions.",
		hint: "Think about repetition.",
		misconception_tag: "loop-purpose",
		concept_tag: "loops",
		adaptive_difficulty: 1,
		variant_group: "loops-purpose",
		learning_objective: "Identify a loop",
		prerequisite_tags: [],
		remediation: "A loop repeats a block of code.",
		points: 1000,
		order_index: 0,
		time_limit_seconds: 30,
	};
	return {
		from: vi.fn((table: string) => {
			const chain: Record<string, unknown> = {};
			chain.select = vi.fn(() => chain);
			chain.eq = vi.fn(() => chain);
			chain.maybeSingle = vi.fn(async () => ({
				data:
					table === "quiz_games"
						? game
						: table === "quiz_game_players"
							? player
							: null,
			}));
			chain.order = vi.fn(async () => ({
				data: table === "quiz_questions" ? [question] : [],
			}));
			return chain;
		}),
	};
}

async function contextFor(db: ReturnType<typeof createDb>) {
	const { getApiContext } = await import("@/lib/quizzes/server");
	vi.mocked(getApiContext).mockResolvedValue({
		db,
		user: { id: userId },
		profile: { id: userId, role: "student", full_name: "Ada Lovelace" },
	} as never);
}

beforeEach(() => {
	vi.clearAllMocks();
	vi.mocked(isCourseEnrolled).mockResolvedValue(true);
});

describe("live lesson challenge API", () => {
	it("derives enrollment through the lesson and rejects disabled power-ups", async () => {
		const db = createDb(false);
		await contextFor(db);
		const request = new Request("http://localhost/api/quiz/live/ABC123", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ action: "powerup", kind: "hint" }),
		}) as NextRequest;

		const response = await POST(request, {
			params: Promise.resolve({ code: "ABC123" }),
		});

		expect(response.status).toBe(409);
		expect(await response.json()).toEqual({
			error: "Power-ups are disabled for this game",
		});
		expect(isCourseEnrolled).toHaveBeenCalledWith(userId, "course-from-lesson");
	});

	it("rejects a previously joined player whose enrollment is no longer active", async () => {
		const db = createDb(true);
		await contextFor(db);
		vi.mocked(isCourseEnrolled).mockResolvedValue(false);
		const request = new Request("http://localhost/api/quiz/live/ABC123", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ action: "powerup", kind: "hint" }),
		}) as NextRequest;

		const response = await POST(request, {
			params: Promise.resolve({ code: "ABC123" }),
		});

		expect(response.status).toBe(403);
		expect(await response.json()).toEqual({
			error: "You are not enrolled in this course",
		});
	});
});
