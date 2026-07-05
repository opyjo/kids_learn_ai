/**
 * The "Explain" phase — a constrained Socratic dialogue where BrightByte helps
 * a child put what they just discovered into their own words, then a lightweight
 * rubric scores that self-explanation. See
 * docs/RnD/novel-pedagogy-implementation.md §6.
 *
 * This module is pure (prompt construction + validation). The network call lives
 * in app/api/concept-labs/explain/route.ts; the UI lives in
 * components/concept-labs/explain-dialogue.tsx. Keeping the prompts here lets us
 * unit-test the contract — "ask, don't tell", misconception targeting, the turn
 * budget — without hitting a model.
 */

import type {
	ConceptLabDefinition,
	DialogueTurn,
	ExplainRubricScore,
} from "./types";

/** Hard cap on the child's turns, to keep the phase short and costs bounded. */
export const MAX_CHILD_TURNS = 5;

/** Human-readable descriptions of the misconceptions the probes can flag. */
export const MISCONCEPTION_HINTS: Record<string, string> = {
	"ai-innate-knowledge":
		"the child may believe the AI 'just knows' things without being taught",
	"ai-has-agency":
		"the child may believe the AI thinks, wants, or feels like a person",
	"ai-fixed-capacity":
		"the child may believe an AI can only ever learn a small, fixed number of things",
	"ai-unfixable":
		"the child may believe a mistrained AI cannot be improved with better examples",
};

/** "a Cat or a Dog" / "a Circle, a Square, or a Zigzag". */
function listClasses(classes: string[]): string {
	const named = classes.map((c) => `a ${c}`);
	if (named.length <= 2) return named.join(" or ");
	return `${named.slice(0, -1).join(", ")}, or ${named[named.length - 1]}`;
}

/** Compact facts about what the child just did, fed into every prompt. */
export interface ExplainLabStats {
	trainedSampleCount: number;
	testCount: number;
	testCorrectCount: number;
}

/**
 * The opening question, generated locally so the dialogue can start without a
 * round-trip (and still works if the model is unavailable).
 */
export function openingQuestion(definition: ConceptLabDefinition): string {
	if (definition.primitive === "next-word-guesser") {
		return `Nice work teaching the machine your sentences! 🤖 When you gave it a starting word, how do you think it chose which word came next?`;
	}
	return `Nice work teaching the machine! 🤖 When it saw your new drawing, how do you think it decided whether it was ${listClasses(definition.classes)}?`;
}

/** What the child did + the mechanism, per primitive, for the system prompt. */
function activityDescription(
	definition: ConceptLabDefinition,
	stats: ExplainLabStats,
): { didWhat: string; mechanism: string } {
	if (definition.primitive === "next-word-guesser") {
		return {
			didWhat: `They taught a machine ${stats.trainedSampleCount} sentence(s), then gave it starting words and watched it continue the phrase. They tested it ${stats.testCount} time(s) (${stats.testCorrectCount} sounded right, by their own judgement).`,
			mechanism: `The machine only counted which word followed which in the sentences it was taught — to continue a phrase it picks the word it saw most often next. It does not understand meaning.`,
		};
	}
	return {
		didWhat: `They taught a machine to tell ${listClasses(definition.classes)} apart by drawing examples. They taught ${stats.trainedSampleCount} example(s) and tested it ${stats.testCount} time(s) (${stats.testCorrectCount} correct, by their own judgement).`,
		mechanism: `The machine only knows what its examples showed it — to make a guess it compares a new drawing to the ones it was taught.`,
	};
}

interface SocraticPromptParams {
	definition: ConceptLabDefinition;
	stats: ExplainLabStats;
	misconceptionTags: string[];
	/** How many turns the child has already taken. */
	childTurnsSoFar: number;
}

/** System prompt for one Socratic reply. */
export function buildSocraticSystemPrompt(
	params: SocraticPromptParams,
): string {
	const { definition, stats, misconceptionTags, childTurnsSoFar } = params;
	const remaining = Math.max(1, MAX_CHILD_TURNS - childTurnsSoFar);
	const stillAskingOnly = childTurnsSoFar < 2;
	const { didWhat, mechanism } = activityDescription(definition, stats);

	const hints = misconceptionTags
		.map((tag) => MISCONCEPTION_HINTS[tag])
		.filter(Boolean);
	const watchFor =
		hints.length > 0
			? `\nWATCH FOR (guide away gently, never lecture): ${hints.join("; ")}.`
			: "";

	return [
		`You are BrightByte, a warm, playful helper for a child aged 8-12. You are helping them EXPLAIN, in their own words, what just happened in a hands-on lab.`,
		``,
		`WHAT THE CHILD JUST DID:`,
		didWhat,
		``,
		`THE IDEA THEY SHOULD REACH (do NOT say it for them):`,
		`${definition.concept}. ${mechanism}${watchFor}`,
		``,
		`HOW TO TALK:`,
		stillAskingOnly
			? `- Right now, ONLY ask one short, curious question that nudges them to notice WHY the machine guessed the way it did. Do not give the answer.`
			: `- Keep nudging with short questions. If they've expressed the idea in their own words, celebrate it warmly and stop asking.`,
		`- One idea at a time. Simple words. At most 2 short sentences. At most one emoji.`,
		`- If they're close, encourage them to say a little more.`,
		`- You have about ${remaining} exchange(s) left; if running low, help them put it in their own words.`,
		``,
		`SAFETY: You are talking to a child. Stay strictly on this drawing lab. If they go off-topic, gently steer back. Never ask for or repeat personal information.`,
	].join("\n");
}

interface RubricPromptParams {
	definition: ConceptLabDefinition;
	/** The child's own words (their turns, joined). */
	childExplanation: string;
}

/** System prompt for the rubric scorer. Must return strict JSON. */
export function buildRubricSystemPrompt(
	definition?: ConceptLabDefinition,
): string {
	const activity =
		definition?.primitive === "next-word-guesser"
			? 'a "guess the next word" language model'
			: 'a machine-learning "guess the drawing" classifier';
	const target =
		definition?.primitive === "next-word-guesser"
			? "the machine picks the next word by counting which words followed which in the sentences it was taught — it only knows the patterns it was shown"
			: "the machine compares a new drawing to the examples it was taught and only knows what it was shown";
	return `You score a child's self-explanation of how ${activity} works, on a 0-2 rubric. Be encouraging but honest.
0 = restates a misconception (e.g. "the AI just knows", "it thinks like a person") or says nothing relevant.
1 = partially correct: mentions examples or learning, but vague or incomplete.
2 = clearly expresses, in their own words, that ${target}.
Respond ONLY as JSON: {"score": 0, "feedback": "one short, warm, kid-friendly sentence"}.`;
}

/** User content for the rubric scorer. */
export function buildRubricUserPrompt(params: RubricPromptParams): string {
	return `TARGET IDEA: ${params.definition.concept}.\nCHILD'S EXPLANATION: "${params.childExplanation.trim()}"`;
}

/**
 * Offline / model-unavailable fallback questions, so the Explain phase never
 * blocks a child from finishing the lab. Varied by turn to avoid repetition.
 */
const FALLBACK_QUESTIONS = [
	"What did the machine look at to make its guess?",
	"Why do you think it got confused on that drawing?",
	"What would help the machine get it right next time?",
	"Can you say that in your own words — how does it learn?",
	"You're so close! What did teaching it more examples change?",
];

export function fallbackSocraticReply(childTurnsSoFar: number): string {
	const index = Math.min(childTurnsSoFar, FALLBACK_QUESTIONS.length - 1);
	return FALLBACK_QUESTIONS[index];
}

/** Coerce an arbitrary model value into a valid rubric score, or undefined. */
export function clampRubricScore(
	value: unknown,
): ExplainRubricScore | undefined {
	const n = typeof value === "number" ? Math.round(value) : Number.NaN;
	if (n === 0 || n === 1 || n === 2) return n;
	return undefined;
}

/** Pull the child's own words out of a dialogue, for scoring. */
export function childWordsFrom(dialogue: DialogueTurn[]): string {
	return dialogue
		.filter((turn) => turn.role === "user")
		.map((turn) => turn.content.trim())
		.filter(Boolean)
		.join(" ");
}
