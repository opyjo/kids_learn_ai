import { describe, expect, it } from "vitest";
import {
	answersMatch,
	calculateLivePoints,
	displayName,
	sanitizeQuestion,
	sortLeaderboard,
	sortTeamLeaderboard,
} from "@/lib/quizzes/grading";
import {
	quizInputSchema,
	quizQuestionInputSchema,
} from "@/lib/quizzes/schemas";
import type { QuizQuestionRecord } from "@/lib/quizzes/types";

const question: QuizQuestionRecord = {
	id: "00000000-0000-4000-8000-000000000001",
	question: "What does print(2 + 2) show?",
	question_type: "code_output",
	options: ["4", "22", "2 + 2", "Error"],
	correct_answer: "4",
	explanation: "Python adds the numbers before printing.",
	hint: "Think about the plus sign.",
	misconception_tag: "addition-vs-concatenation",
	concept_tag: "arithmetic",
	adaptive_difficulty: 1,
	variant_group: "arithmetic-output",
	learning_objective: "Evaluate a simple arithmetic expression",
	prerequisite_tags: [],
	remediation: "The plus sign adds numbers before print displays the result.",
	points: 1000,
	order_index: 0,
	time_limit_seconds: 30,
};

describe("quiz grading", () => {
	it("normalizes text while preserving ordering semantics", () => {
		expect(answersMatch("  HELLO  world ", "hello world")).toBe(true);
		expect(answersMatch(["first", "second"], ["first", "second"])).toBe(true);
		expect(answersMatch(["second", "first"], ["first", "second"])).toBe(false);
	});

	it("uses accuracy-first points and power-up caps", () => {
		expect(
			calculateLivePoints({
				correct: false,
				timeTakenMs: 1,
				timeLimitSeconds: 30,
			}),
		).toBe(0);
		expect(
			calculateLivePoints({
				correct: true,
				timeTakenMs: 0,
				timeLimitSeconds: 30,
			}),
		).toBe(1200);
		expect(
			calculateLivePoints({
				correct: true,
				timeTakenMs: 15_000,
				timeLimitSeconds: 30,
			}),
		).toBe(1100);
		expect(
			calculateLivePoints({
				correct: true,
				timeTakenMs: 1_000,
				timeLimitSeconds: 30,
				powerUp: "hint",
			}),
		).toBeLessThanOrEqual(1000);
		expect(
			calculateLivePoints({
				correct: true,
				timeTakenMs: 1_000,
				timeLimitSeconds: 30,
				isSecondChance: true,
			}),
		).toBe(500);
	});

	it("never includes grading keys in student questions", () => {
		const safe = sanitizeQuestion(question) as unknown as Record<
			string,
			unknown
		>;
		expect(safe.correct_answer).toBeUndefined();
		expect(safe.explanation).toBeUndefined();
		expect(safe.points).toBeUndefined();
		expect(safe.misconception_tag).toBeUndefined();
		expect(safe.concept_tag).toBeUndefined();
		expect(safe.adaptive_difficulty).toBeUndefined();
		expect(safe.variant_group).toBeUndefined();
		expect(safe.learning_objective).toBeUndefined();
		expect(safe.prerequisite_tags).toBeUndefined();
		expect(safe.remediation).toBeUndefined();
		expect(safe.question).toBe(question.question);
	});

	it("applies individual and fair team tie breakers", () => {
		const individual = sortLeaderboard([
			{
				id: "slow",
				displayName: "Slow",
				points: 1000,
				correctAnswers: 2,
				averageResponseMs: 5000,
			},
			{
				id: "fast",
				displayName: "Fast",
				points: 1000,
				correctAnswers: 2,
				averageResponseMs: 2000,
			},
			{
				id: "points",
				displayName: "Points",
				points: 1100,
				correctAnswers: 1,
				averageResponseMs: 9000,
			},
		]);
		expect(individual.map((entry) => entry.id)).toEqual([
			"points",
			"fast",
			"slow",
		]);
		const teams = sortTeamLeaderboard([
			{ id: "a", name: "A", averagePoints: 500, accuracy: 0.8, members: 2 },
			{ id: "b", name: "B", averagePoints: 500, accuracy: 0.9, members: 5 },
		]);
		expect(teams[0].id).toBe("b");
	});

	it("formats leaderboard names without exposing full surnames", () => {
		expect(displayName("Ada Lovelace")).toBe("Ada L.");
		expect(displayName("Prince")).toBe("Prince");
	});
});

describe("quiz question validation", () => {
	it("rejects answer keys not found in the options", () => {
		const parsed = quizQuestionInputSchema.safeParse({
			...question,
			correct_answer: "5",
		});
		expect(parsed.success).toBe(false);
	});

	it("requires an ordered answer array for code ordering", () => {
		const parsed = quizQuestionInputSchema.safeParse({
			...question,
			question_type: "code_ordering",
			correct_answer: "4",
		});
		expect(parsed.success).toBe(false);
	});

	it("requires lesson challenges to use lesson scope only", () => {
		const valid = quizInputSchema.safeParse({
			title: "Loops live challenge",
			description: "Collaborative review",
			quiz_type: "lesson_challenge",
			status: "draft",
			lesson_id: "00000000-0000-4000-8000-000000000010",
			course_id: null,
			questions: [question],
		});
		const invalid = quizInputSchema.safeParse({
			title: "Loops live challenge",
			description: "Collaborative review",
			quiz_type: "lesson_challenge",
			status: "draft",
			lesson_id: null,
			course_id: "00000000-0000-4000-8000-000000000020",
			questions: [question],
		});

		expect(valid.success).toBe(true);
		expect(invalid.success).toBe(false);
	});
});
