import { describe, expect, it } from "vitest";
import {
	isTeamFirstGame,
	lessonSourceHash,
	personalLiveResult,
	updatesLearningFromLiveGame,
	visibleIndividualLeaderboard,
} from "@/lib/quizzes/challenges";
import type { LeaderboardEntry } from "@/lib/quizzes/types";

const leaderboard: LeaderboardEntry[] = [
	{
		id: "first",
		displayName: "Ada L.",
		points: 2100,
		correctAnswers: 2,
		averageResponseMs: 2000,
	},
	{
		id: "second",
		displayName: "Grace H.",
		points: 900,
		correctAnswers: 1,
		averageResponseMs: 4000,
	},
];

describe("lesson challenge source tracking", () => {
	it("creates a deterministic hash and changes it with lesson content", async () => {
		const lesson = {
			title: "Loops",
			description: "Repeat instructions",
			content: "A loop repeats code.",
			starter_code: "for item in items:",
		};
		const first = await lessonSourceHash(lesson);
		const second = await lessonSourceHash({ ...lesson });
		const changed = await lessonSourceHash({
			...lesson,
			content: "A loop repeats code safely.",
		});

		expect(first).toMatch(/^[a-f0-9]{64}$/);
		expect(second).toBe(first);
		expect(changed).not.toBe(first);
	});
});

describe("team-first challenge privacy", () => {
	it("keeps lesson challenges out of mastery and review updates", () => {
		expect(updatesLearningFromLiveGame("lesson_challenge")).toBe(false);
		expect(updatesLearningFromLiveGame("term_finale")).toBe(true);
		expect(updatesLearningFromLiveGame("quick_check")).toBe(true);
	});

	it("uses team-first mode only for lesson challenges that have teams", () => {
		expect(isTeamFirstGame("lesson_challenge", 2)).toBe(true);
		expect(isTeamFirstGame("lesson_challenge", 0)).toBe(false);
		expect(isTeamFirstGame("term_finale", 2)).toBe(false);
	});

	it("keeps individual rankings host-only in team-first mode", () => {
		expect(
			visibleIndividualLeaderboard({
				leaderboard,
				isHost: false,
				teamFirst: true,
			}),
		).toEqual([]);
		expect(
			visibleIndividualLeaderboard({
				leaderboard,
				isHost: true,
				teamFirst: true,
			}),
		).toEqual(leaderboard);
	});

	it("returns only the signed-in player's private final result", () => {
		expect(personalLiveResult(leaderboard, "second")).toEqual({
			rank: 2,
			points: 900,
			correctAnswers: 1,
			averageResponseMs: 4000,
		});
		expect(personalLiveResult(leaderboard, "missing")).toBeNull();
	});
});
