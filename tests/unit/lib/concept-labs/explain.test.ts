import { describe, expect, it } from "vitest";
import {
	buildRubricSystemPrompt,
	buildSocraticSystemPrompt,
	childWordsFrom,
	clampRubricScore,
	fallbackSocraticReply,
	MAX_CHILD_TURNS,
	openingQuestion,
} from "@/lib/concept-labs/explain";
import { howAiLearnsLab } from "@/lib/concept-labs/labs/how-ai-learns";
import { nextWordGuesserLab } from "@/lib/concept-labs/labs/next-word-guesser";
import { shapeSorterLab } from "@/lib/concept-labs/labs/shape-sorter";
import type { DialogueTurn } from "@/lib/concept-labs/types";

const stats = { trainedSampleCount: 6, testCount: 2, testCorrectCount: 1 };

describe("openingQuestion", () => {
	it("names both classes so the child grounds their explanation", () => {
		const q = openingQuestion(howAiLearnsLab);
		expect(q).toContain("Cat");
		expect(q).toContain("Dog");
	});

	it("names all classes for a multi-class lab", () => {
		const q = openingQuestion(shapeSorterLab);
		for (const label of shapeSorterLab.classes) {
			expect(q).toContain(label);
		}
	});

	it("asks about word choice for next-word labs, not drawings", () => {
		const q = openingQuestion(nextWordGuesserLab);
		expect(q).toMatch(/word/i);
		expect(q).not.toMatch(/drawing/i);
	});
});

describe("buildSocraticSystemPrompt", () => {
	it("enforces ask-don't-tell for the first two turns", () => {
		const prompt = buildSocraticSystemPrompt({
			definition: howAiLearnsLab,
			stats,
			misconceptionTags: [],
			childTurnsSoFar: 0,
		});
		expect(prompt).toMatch(/ONLY ask/i);
		expect(prompt).toContain(howAiLearnsLab.concept);
	});

	it("relaxes to nudging once the child has spoken twice", () => {
		const prompt = buildSocraticSystemPrompt({
			definition: howAiLearnsLab,
			stats,
			misconceptionTags: [],
			childTurnsSoFar: 2,
		});
		expect(prompt).not.toMatch(/ONLY ask/i);
		expect(prompt).toMatch(/keep nudging/i);
	});

	it("injects a targeting hint when a misconception tag is present", () => {
		const prompt = buildSocraticSystemPrompt({
			definition: howAiLearnsLab,
			stats,
			misconceptionTags: ["ai-has-agency"],
			childTurnsSoFar: 0,
		});
		expect(prompt).toMatch(/thinks, wants, or feels/i);
	});

	it("reports the remaining turn budget", () => {
		const prompt = buildSocraticSystemPrompt({
			definition: howAiLearnsLab,
			stats,
			misconceptionTags: [],
			childTurnsSoFar: MAX_CHILD_TURNS - 1,
		});
		expect(prompt).toMatch(/about 1 exchange/i);
	});
});

describe("buildRubricSystemPrompt", () => {
	it("demands strict JSON with a 0-2 score", () => {
		const prompt = buildRubricSystemPrompt();
		expect(prompt).toMatch(/only as json/i);
		expect(prompt).toContain('"score"');
	});

	it("describes the next-word activity for next-word labs", () => {
		const prompt = buildRubricSystemPrompt(nextWordGuesserLab);
		expect(prompt).toMatch(/next word/i);
		expect(prompt).not.toMatch(/drawing/i);
	});
});

describe("buildSocraticSystemPrompt for next-word labs", () => {
	it("describes sentences and word-counting, not drawings", () => {
		const prompt = buildSocraticSystemPrompt({
			definition: nextWordGuesserLab,
			stats,
			misconceptionTags: [],
			childTurnsSoFar: 0,
		});
		expect(prompt).toMatch(/sentence/i);
		expect(prompt).not.toMatch(/drawing examples/i);
	});
});

describe("clampRubricScore", () => {
	it("accepts 0, 1, and 2", () => {
		expect(clampRubricScore(0)).toBe(0);
		expect(clampRubricScore(1)).toBe(1);
		expect(clampRubricScore(2)).toBe(2);
	});

	it("rounds near-integer values", () => {
		expect(clampRubricScore(1.4)).toBe(1);
	});

	it("rejects out-of-range and non-numbers", () => {
		expect(clampRubricScore(3)).toBeUndefined();
		expect(clampRubricScore(-1)).toBeUndefined();
		expect(clampRubricScore("2")).toBeUndefined();
		expect(clampRubricScore(null)).toBeUndefined();
	});
});

describe("childWordsFrom", () => {
	it("keeps only the child's words in order", () => {
		const dialogue: DialogueTurn[] = [
			{ role: "assistant", content: "How did it decide?" },
			{ role: "user", content: "it looked at my drawings" },
			{ role: "assistant", content: "Tell me more" },
			{ role: "user", content: "the closest ones" },
		];
		expect(childWordsFrom(dialogue)).toBe(
			"it looked at my drawings the closest ones",
		);
	});
});

describe("fallbackSocraticReply", () => {
	it("returns a question and never indexes out of range", () => {
		expect(fallbackSocraticReply(0)).toMatch(/\?$/);
		expect(fallbackSocraticReply(99)).toMatch(/\?$/);
	});
});
