/**
 * Concept Labs — shared types.
 *
 * A "Concept Lab" delivers an abstract AI/ML idea through a four-phase loop:
 *   predict → play → explain → apply
 * wrapped around a small, in-browser simulation the child manipulates with
 * their own data. See docs/RnD/novel-pedagogy-implementation.md.
 *
 * This module is pure (no React, no DOM) so the learning logic can be
 * unit-tested and, later, lifted into a standalone package.
 */

/** The forward-only phases of the pedagogical loop. */
export type LabPhase = "predict" | "play" | "explain" | "apply" | "done";

/** A single labelled training example fed to a simulation. */
export interface LabeledSample {
	label: string;
	/** Fixed-length numeric feature vector (e.g. a downsampled drawing). */
	features: number[];
}

/** Result of asking a classifier to label a new example. */
export interface ClassificationResult {
	/** Predicted label, or null if the model has no training data yet. */
	label: string | null;
	/** Per-label vote counts among the k nearest neighbours. */
	votes: Record<string, number>;
	/** Distance to the single nearest neighbour (Infinity if untrained). */
	nearestDistance: number;
}

/** One selectable answer in a probe. */
export interface ProbeOption {
	id: string;
	text: string;
}

/**
 * A multiple-choice probe. Exactly one option expresses the target concept;
 * the others are authored to express specific, named misconceptions so the
 * analytics can report which misconception a child held — not just right/wrong.
 */
export interface Probe {
	question: string;
	options: ProbeOption[];
	/** The option id that expresses the target concept. */
	correctOptionId: string;
	/** optionId -> misconception tag (from the misconception taxonomy). */
	misconceptionTags: Record<string, string>;
}

/**
 * Actions a child can take inside a simulation. Kept as a discriminated union
 * so a session is fully described by its ordered action log (replayable).
 */
export type LabAction =
	| { type: "add-sample"; label: string }
	| { type: "train"; sampleCount: number }
	| {
			type: "test";
			predicted: string | null;
			expected: string;
			correct: boolean;
	  }
	| { type: "reset" };

/** The simulation primitives available to authored labs. v1 ships one. */
export type LabPrimitive = "trainable-classifier";

/**
 * A fully-authored lab. Curriculum authors describe a lab as data; the host
 * component supplies the pedagogical loop and measurement around it.
 */
export interface ConceptLabDefinition {
	/** Stable id — ties telemetry together across content revisions. */
	labId: string;
	title: string;
	/** One-line name of the concept being taught (shown to the child). */
	concept: string;
	primitive: LabPrimitive;
	/** Which lesson this lab belongs to. */
	courseSlug: string;
	orderIndex: number;
	/** The two class labels the child will teach the machine (v1 = binary). */
	classes: [string, string];
	/** Optional emoji shown alongside each class label. */
	classEmoji?: Partial<Record<string, string>>;
	/** Kid-facing framing that sets up the deliberate-failure moment. */
	biasTrapHint?: string;
	predictProbe: Probe;
	applyProbe: Probe;
	/** Prompt for the (currently non-LLM) reflection step. */
	explainPrompt: string;
}

/** A recorded interaction or phase transition, timestamped from session start. */
export interface LabEvent {
	tMs: number;
	payload: LabAction | { type: "phase"; phase: LabPhase };
}

/** The answer a child gave to one probe. */
export interface ProbeResponse {
	optionId: string;
	isCorrect: boolean;
	misconceptionTag?: string;
}

/** One turn in the Socratic "Explain" dialogue with BrightByte. */
export interface DialogueTurn {
	role: "assistant" | "user";
	content: string;
}

/**
 * Rubric score for the child's final self-explanation:
 *   0 = a misconception restated, 1 = partial, 2 = target concept in own words.
 */
export type ExplainRubricScore = 0 | 1 | 2;

/**
 * Everything worth analysing from one attempt. This is the anonymizable unit
 * the validation harness will eventually persist and aggregate.
 */
export interface LabSessionSummary {
	labId: string;
	predict?: ProbeResponse;
	apply?: ProbeResponse;
	/** The child's clearest self-explanation (their own words). */
	explainText?: string;
	/** Full Socratic dialogue, for research review of how understanding shifted. */
	explainDialogue?: DialogueTurn[];
	/** Rubric score of the self-explanation, if the scorer ran. */
	explainRubricScore?: ExplainRubricScore;
	/** Number of training samples the child added before testing. */
	trainedSampleCount: number;
	/** Tests run and how many the model got right, from the child's judgement. */
	testCount: number;
	testCorrectCount: number;
	events: LabEvent[];
}
