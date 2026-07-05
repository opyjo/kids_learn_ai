/**
 * A tiny bigram ("next word") language model — pure, dependency-free,
 * deterministic.
 *
 * Like the kNN classifier, this is deliberately the simplest model that still
 * teaches the lesson: "the machine counts which word followed which in the
 * sentences you taught it, and picks the most common one." No randomness, so a
 * child's result is always explainable and reproducible.
 */

/** counts[word][nextWord] = how many times `nextWord` followed `word`. */
export interface BigramModel {
	counts: Record<string, Record<string, number>>;
	/** How many times each word opened a taught sentence. */
	sentenceStarts: Record<string, number>;
	sentenceCount: number;
}

/** A candidate next word with the evidence behind it. */
export interface NextWordCandidate {
	word: string;
	count: number;
}

/** Lowercase words only — punctuation and extra whitespace dropped. */
export function tokenize(text: string): string[] {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9'\s-]/g, " ")
		.split(/\s+/)
		.filter(Boolean);
}

/** Count word-follows-word pairs across the taught sentences. */
export function trainBigrams(sentences: string[]): BigramModel {
	const counts: Record<string, Record<string, number>> = {};
	const sentenceStarts: Record<string, number> = {};
	let sentenceCount = 0;

	for (const sentence of sentences) {
		const words = tokenize(sentence);
		if (words.length === 0) continue;
		sentenceCount++;
		sentenceStarts[words[0]] = (sentenceStarts[words[0]] ?? 0) + 1;
		for (let i = 0; i < words.length - 1; i++) {
			counts[words[i]] ??= {};
			const row = counts[words[i]];
			row[words[i + 1]] = (row[words[i + 1]] ?? 0) + 1;
		}
	}

	return { counts, sentenceStarts, sentenceCount };
}

/**
 * Every word the model has seen a continuation for, ranked by how often the
 * model saw it lead somewhere (ties alphabetical, so results are stable).
 */
export function startingWords(model: BigramModel): NextWordCandidate[] {
	return Object.entries(model.counts)
		.map(([word, row]) => ({
			word,
			count: Object.values(row).reduce((a, b) => a + b, 0),
		}))
		.sort((a, b) => b.count - a.count || a.word.localeCompare(b.word));
}

/** Candidate next words after `word`, most-seen first (ties alphabetical). */
export function nextWordCandidates(
	model: BigramModel,
	word: string,
): NextWordCandidate[] {
	const row = model.counts[tokenize(word)[0] ?? ""];
	if (!row) return [];
	return Object.entries(row)
		.map(([next, count]) => ({ word: next, count }))
		.sort((a, b) => b.count - a.count || a.word.localeCompare(b.word));
}

/**
 * Greedily continue a phrase from `start`, always taking the most-seen next
 * word, until the model hits a dead end or `maxWords` further words. The
 * greedy rule can loop ("the cat saw the cat…") — that cap is the guard, and
 * the loop itself is a teachable moment about pattern-following.
 */
export function continuePhrase(
	model: BigramModel,
	start: string,
	maxWords = 6,
): string[] {
	const first = tokenize(start)[0];
	if (!first) return [];
	const phrase = [first];
	let current = first;
	for (let i = 0; i < maxWords; i++) {
		const candidates = nextWordCandidates(model, current);
		if (candidates.length === 0) break;
		current = candidates[0].word;
		phrase.push(current);
	}
	return phrase;
}
