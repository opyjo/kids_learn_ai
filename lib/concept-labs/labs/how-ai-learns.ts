import type { ConceptLabDefinition } from "../types";

/**
 * Lab for Term 5 (AI Sneak Peek), Week 4 — "How AI Learns".
 *
 * The child teaches a machine to tell cats from dogs using only drawings they
 * make themselves, then discovers that a lopsided training set (all cats facing
 * one way) makes the machine fail — experiencing "learning from data" and its
 * bias failure mode first-hand. The probes are authored to distinguish the
 * target concept from two documented child misconceptions about AI:
 *   - ai-innate-knowledge : "AI just knows things"
 *   - ai-has-agency       : "AI thinks/feels/wants like a person"
 */
export const howAiLearnsLab: ConceptLabDefinition = {
	labId: "how-ai-learns-classifier-v1",
	title: "Teach the Machine",
	concept: "AI learns from the examples you give it",
	primitive: "trainable-classifier",
	courseSlug: "term-5-ai-sneak-peek",
	orderIndex: 4,
	classes: ["Cat", "Dog"],
	classEmoji: { Cat: "🐱", Dog: "🐶" },
	biasTrapHint:
		"Sneaky challenge: teach the machine using ONLY cats that face left. Then draw a cat facing right and test it. What happens? 🤔",
	predictProbe: {
		question:
			"If you only teach the AI with pictures of cats facing LEFT, what will happen when it sees a cat facing RIGHT?",
		options: [
			{ id: "a", text: "It still knows it's a cat — AI just knows things" },
			{
				id: "b",
				text: "It might get confused, because it never saw one like that",
			},
			{ id: "c", text: "It will ask you for help" },
		],
		correctOptionId: "b",
		misconceptionTags: {
			a: "ai-innate-knowledge",
			c: "ai-has-agency",
		},
	},
	applyProbe: {
		question:
			"A voice assistant understands grown-ups but struggles with kids' voices. Using what you just learned, why might that be?",
		options: [
			{ id: "a", text: "Kids talk the wrong way" },
			{ id: "b", text: "It was probably trained mostly on grown-up voices" },
			{ id: "c", text: "It doesn't like kids" },
		],
		correctOptionId: "b",
		misconceptionTags: {
			c: "ai-has-agency",
		},
	},
	explainPrompt:
		"In your own words: how did the machine decide whether your drawing was a cat or a dog? What made it get confused?",
};
