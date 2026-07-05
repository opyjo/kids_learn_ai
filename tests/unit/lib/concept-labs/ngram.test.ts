import { describe, expect, it } from "vitest";
import {
	continuePhrase,
	nextWordCandidates,
	startingWords,
	tokenize,
	trainBigrams,
} from "@/lib/concept-labs/ngram";

describe("tokenize", () => {
	it("lowercases and strips punctuation", () => {
		expect(tokenize("The CAT sat, on the mat!")).toEqual([
			"the",
			"cat",
			"sat",
			"on",
			"the",
			"mat",
		]);
	});

	it("keeps apostrophes and hyphens inside words", () => {
		expect(tokenize("don't stop the ice-cream")).toEqual([
			"don't",
			"stop",
			"the",
			"ice-cream",
		]);
	});

	it("returns empty for blank input", () => {
		expect(tokenize("   ")).toEqual([]);
	});
});

describe("trainBigrams", () => {
	const model = trainBigrams(["the cat sat", "the cat ran", "a dog ran"]);

	it("counts word-follows-word pairs", () => {
		expect(model.counts.the.cat).toBe(2);
		expect(model.counts.cat.sat).toBe(1);
		expect(model.counts.cat.ran).toBe(1);
	});

	it("tracks sentence starts and count", () => {
		expect(model.sentenceStarts.the).toBe(2);
		expect(model.sentenceStarts.a).toBe(1);
		expect(model.sentenceCount).toBe(3);
	});

	it("ignores empty sentences", () => {
		expect(trainBigrams(["", "  "]).sentenceCount).toBe(0);
	});
});

describe("nextWordCandidates", () => {
	const model = trainBigrams(["the cat sat", "the cat ran", "the dog ran"]);

	it("ranks by count, most-seen first", () => {
		expect(nextWordCandidates(model, "the")[0]).toEqual({
			word: "cat",
			count: 2,
		});
	});

	it("breaks count ties alphabetically for stable results", () => {
		const candidates = nextWordCandidates(model, "cat");
		expect(candidates.map((c) => c.word)).toEqual(["ran", "sat"]);
	});

	it("normalizes the query word like training input", () => {
		expect(nextWordCandidates(model, "  THE ")[0].word).toBe("cat");
	});

	it("returns empty for unknown words", () => {
		expect(nextWordCandidates(model, "banana")).toEqual([]);
	});
});

describe("continuePhrase", () => {
	it("greedily follows the most-common next word", () => {
		const model = trainBigrams(["the cat sat on the mat", "the cat sat down"]);
		expect(continuePhrase(model, "the", 3)).toEqual([
			"the",
			"cat",
			"sat",
			"down",
		]);
	});

	it("stops at a dead end", () => {
		const model = trainBigrams(["one two three"]);
		expect(continuePhrase(model, "two", 10)).toEqual(["two", "three"]);
	});

	it("caps looping patterns at maxWords", () => {
		const model = trainBigrams(["the cat saw the cat"]);
		expect(continuePhrase(model, "the", 4)).toHaveLength(5);
	});

	it("returns empty for blank starts", () => {
		expect(continuePhrase(trainBigrams(["a b"]), "  ")).toEqual([]);
	});
});

describe("startingWords", () => {
	it("ranks words by total continuations", () => {
		const model = trainBigrams(["the cat sat", "the dog sat", "the mouse ran"]);
		expect(startingWords(model)[0]).toEqual({ word: "the", count: 3 });
	});
});
