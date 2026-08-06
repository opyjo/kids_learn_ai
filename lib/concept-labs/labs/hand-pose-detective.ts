import type { ConceptLabDefinition } from "../types";

/** Standalone ml5-powered lab that exposes the landmarks behind hand tracking. */
export const handPoseDetectiveLab: ConceptLabDefinition = {
	labId: "hand-pose-detective-v1",
	title: "Hand-Pose Detective",
	concept: "Computer vision finds landmarks, not thoughts or identity",
	primitive: "hand-pose",
	icon: "🖐️",
	estimatedMinutes: 8,
	classes: [],
	predictProbe: {
		question: "When an AI tracks your hand on camera, what does it look for?",
		options: [
			{ id: "a", text: "Points such as fingertips, knuckles and your wrist" },
			{ id: "b", text: "Your name and who you are" },
			{ id: "c", text: "What you are thinking" },
		],
		correctOptionId: "a",
		misconceptionTags: {
			b: "ai-identity-awareness",
			c: "ai-has-agency",
		},
	},
	applyProbe: {
		question:
			"A hand-tracking game stops working when a hand moves off-camera. Why?",
		options: [
			{ id: "a", text: "The AI got bored" },
			{ id: "b", text: "The camera no longer contains landmarks to detect" },
			{ id: "c", text: "The AI forgot who was playing" },
		],
		correctOptionId: "b",
		misconceptionTags: {
			a: "ai-has-agency",
			c: "ai-identity-awareness",
		},
	},
	explainPrompt:
		"In your own words: what did the hand-tracking AI see, and what did it not know about you?",
};
