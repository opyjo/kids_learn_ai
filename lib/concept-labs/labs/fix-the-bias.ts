import type { ConceptLabDefinition } from "../types";

/**
 * Standalone lab — "Fix the Biased Machine" (follow-up to How AI Learns).
 *
 * Where the first lab lets the child *stumble into* bias, this one makes it
 * the mission: deliberately build a biased machine, watch it fail, then repair
 * it with more varied examples and watch it succeed. The probes distinguish
 * the target concept from:
 *   - ai-has-agency : "scold the machine until it behaves"
 *   - ai-unfixable  : "once a machine is wrong, it's wrong forever"
 */
export const fixTheBiasLab: ConceptLabDefinition = {
	labId: "fix-the-biased-model-v1",
	title: "Fix the Biased Machine",
	concept: "Biased examples make a biased AI — and better examples fix it",
	primitive: "trainable-classifier",
	icon: "🛠️",
	estimatedMinutes: 15,
	classes: ["Cat", "Dog"],
	classEmoji: { Cat: "🐱", Dog: "🐶" },
	biasTrapHint:
		"Your mission: FIRST build a biased machine — teach it only cats facing LEFT. Test a right-facing cat and watch it goof. THEN fix it: teach some right-facing cats and test again! 🛠️",
	predictProbe: {
		question:
			"A machine keeps getting right-facing cats wrong because it only ever saw left-facing ones. What's the BEST fix?",
		options: [
			{ id: "a", text: "Tell it off until it starts behaving" },
			{ id: "b", text: "Teach it lots of examples of right-facing cats too" },
			{
				id: "c",
				text: "Nothing — once a machine learns wrong, it's wrong forever",
			},
		],
		correctOptionId: "b",
		misconceptionTags: {
			a: "ai-has-agency",
			c: "ai-unfixable",
		},
	},
	applyProbe: {
		question:
			"A face-unlock feature works badly for some people's faces. What probably went wrong — and what would fix it?",
		options: [
			{
				id: "a",
				text: "It was trained on too few faces like theirs — add more examples",
			},
			{ id: "b", text: "The phone is being unfair on purpose" },
			{ id: "c", text: "Nothing can fix it — that's just how it is" },
		],
		correctOptionId: "a",
		misconceptionTags: {
			b: "ai-has-agency",
			c: "ai-unfixable",
		},
	},
	explainPrompt:
		"In your own words: what made your machine biased, and what did you do that fixed it?",
};
