import type { ConceptLabDefinition } from "../types";

/**
 * Standalone lab — "Shape Sorter" (three-class classifier).
 *
 * The child teaches one machine three shape classes at once, discovering that
 * a single model can hold many categories as long as every category gets good
 * examples. The probes distinguish the target concept from:
 *   - ai-innate-knowledge : "everyone knows shapes, so the AI does too"
 *   - ai-fixed-capacity   : "a machine only has room for a couple of things"
 */
export const shapeSorterLab: ConceptLabDefinition = {
	labId: "shape-sorter-classifier-v1",
	title: "Shape Sorter",
	concept: "One machine can learn many categories — if each gets good examples",
	primitive: "trainable-classifier",
	icon: "🔷",
	estimatedMinutes: 10,
	classes: ["Circle", "Square", "Zigzag"],
	classEmoji: { Circle: "⭕", Square: "🟦", Zigzag: "⚡" },
	biasTrapHint:
		"Sneaky challenge: teach only TINY circles, then draw one really BIG circle and test it. Does the machine still know it? 🤔",
	predictProbe: {
		question:
			"You want one machine to learn circles, squares AND zigzags. What does it need?",
		options: [
			{
				id: "a",
				text: "Nothing — everyone knows shapes, so the AI does too",
			},
			{ id: "b", text: "Good examples of every single shape" },
			{ id: "c", text: "It can't — machines only have room for two things" },
		],
		correctOptionId: "b",
		misconceptionTags: {
			a: "ai-innate-knowledge",
			c: "ai-fixed-capacity",
		},
	},
	applyProbe: {
		question:
			"A photo app can spot cats, dogs, birds and hundreds of other animals. How did it learn them all?",
		options: [
			{ id: "a", text: "It was born knowing every animal" },
			{
				id: "b",
				text: "People showed it lots of example photos of each animal",
			},
			{ id: "c", text: "It went outside and studied animals itself" },
		],
		correctOptionId: "b",
		misconceptionTags: {
			a: "ai-innate-knowledge",
			c: "ai-has-agency",
		},
	},
	explainPrompt:
		"In your own words: how did one machine learn to tell three different shapes apart?",
};
