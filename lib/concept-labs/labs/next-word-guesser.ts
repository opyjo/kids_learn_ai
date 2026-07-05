import type { ConceptLabDefinition } from "../types";

/**
 * Standalone lab — "The Next-Word Guesser" (bigram language model).
 *
 * The child teaches the machine a handful of sentences, then watches it
 * continue phrases by picking the word it saw most often next — discovering
 * that "AI writing" is pattern-counting over training text, not understanding.
 * The probes distinguish the target concept from:
 *   - ai-has-agency       : "it makes up its own ideas / reads your mind"
 *   - ai-innate-knowledge : "it already knows all the words"
 */
export const nextWordGuesserLab: ConceptLabDefinition = {
	labId: "next-word-guesser-v1",
	title: "The Next-Word Guesser",
	concept: "AI predicts the next word from patterns in what it has read",
	primitive: "next-word-guesser",
	icon: "💬",
	estimatedMinutes: 10,
	classes: [],
	starterSentences: [
		"the cat sat on the mat",
		"the cat chased the mouse",
		"the dog chased the ball",
		"my dog ate my homework",
		"the mouse ate the cheese",
	],
	predictProbe: {
		question:
			"You teach the machine only sentences about cats. If you start a phrase with 'the', what will it say next?",
		options: [
			{ id: "a", text: "A word from YOUR sentences, like 'cat'" },
			{ id: "b", text: "Anything it likes — it makes up its own ideas" },
			{
				id: "c",
				text: "The perfect word — it already knows all the words there are",
			},
		],
		correctOptionId: "a",
		misconceptionTags: {
			b: "ai-has-agency",
			c: "ai-innate-knowledge",
		},
	},
	applyProbe: {
		question:
			"Your phone's keyboard suggests your next word while you type. How does it guess so well?",
		options: [
			{ id: "a", text: "It reads your mind" },
			{
				id: "b",
				text: "It learned patterns from lots and lots of typed sentences",
			},
			{ id: "c", text: "It just knows English perfectly" },
		],
		correctOptionId: "b",
		misconceptionTags: {
			a: "ai-has-agency",
			c: "ai-innate-knowledge",
		},
	},
	explainPrompt:
		"In your own words: how did the machine pick the next word? Did it really understand your sentences?",
};
