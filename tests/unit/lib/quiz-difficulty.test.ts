import { describe, expect, it } from "vitest";
import {
	DEFAULT_QUIZ_GENERATION_DIFFICULTY,
	QUIZ_GENERATION_DIFFICULTIES,
	QUIZ_GENERATION_DIFFICULTY_LABELS,
	questionDifficultiesMatchRequest,
	quizDifficultyPrompt,
} from "@/lib/quizzes/difficulty";

describe("quiz generation difficulty", () => {
	it("exposes the four child-learning labels and defaults to Standard", () => {
		expect(DEFAULT_QUIZ_GENERATION_DIFFICULTY).toBe("standard");
		expect(
			QUIZ_GENERATION_DIFFICULTIES.map(
				(difficulty) => QUIZ_GENERATION_DIFFICULTY_LABELS[difficulty],
			),
		).toEqual(["Easy", "Standard", "Challenging", "Very challenging"]);
	});

	it.each([
		["easy", [1, 1, 2, 1], true],
		["easy", [1, 2, 3], false],
		["standard", [1, 2, 2, 3], true],
		["standard", [2, 3, 4], false],
		["challenging", [2, 3, 3, 4], true],
		["challenging", [2, 2, 2, 2], false],
		["very_challenging", [3, 4, 4, 5], true],
		["very_challenging", [3, 3, 3, 4], false],
	] as const)("validates the %s adaptive distribution", (difficulty, levels, expected) => {
		expect(questionDifficultiesMatchRequest([...levels], difficulty)).toBe(
			expected,
		);
	});

	it("gives every level explicit complexity, distractor, code, and distribution guidance", () => {
		for (const difficulty of QUIZ_GENERATION_DIFFICULTIES) {
			const prompt = quizDifficultyPrompt(difficulty);
			expect(prompt).toMatch(/Question complexity:/);
			expect(prompt).toMatch(/Distractors:/);
			expect(prompt).toMatch(/Code reasoning:/);
			expect(prompt).toMatch(/Adaptive distribution:/);
		}
	});
});
