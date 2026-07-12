export const ADAPTIVE_ALGORITHM_VERSION = "rules-v1" as const;
export const ADAPTIVE_SESSION_LENGTH = 10;

export type Confidence = "sure" | "unsure" | "guessing";
export type MasteryStatus = "learning" | "practising" | "mastered";
export type SelectionReason =
	| "due_or_weak"
	| "developing"
	| "retention"
	| "remediation";

export interface AdaptiveQuestionCandidate {
	id: string;
	quizId: string;
	courseId: string;
	conceptTag: string;
	difficulty: number;
	variantGroup: string;
	learningObjective: string;
	prerequisiteTags: string[];
	remediation: string;
	dueAt: string | null;
	isPublished: boolean;
	isEnrolled: boolean;
}

export interface ConceptMastery {
	courseId: string;
	conceptTag: string;
	score: number;
	status: MasteryStatus;
	totalAnswers: number;
}

export const masteryKey = (courseId: string, conceptTag: string) =>
	`${courseId}:${conceptTag}`;

export interface AdaptiveSessionState {
	id: string;
	seed: string;
	algorithmVersion: typeof ADAPTIVE_ALGORITHM_VERSION;
	targetLength: number;
	selectedQuestionIds: string[];
	selectedVariantGroups: string[];
	conceptCounts: Record<string, number>;
	reasonCounts: Record<SelectionReason, number>;
	conceptMissStreaks: Record<string, number>;
	forcedRemediation: {
		courseId: string;
		conceptTag: string;
		maxDifficulty: number;
	} | null;
	currentSelection: {
		questionId: string;
		reason: SelectionReason;
		targetDifficulty: number;
	} | null;
	status: "active" | "completed" | "fallback";
}

export interface QuestionSelection {
	question: AdaptiveQuestionCandidate;
	reason: SelectionReason;
	targetDifficulty: number;
}

export interface EvidenceInput {
	question: AdaptiveQuestionCandidate;
	correct: boolean;
	confidence: Confidence;
	usedHint: boolean;
}

export interface EvidenceResult {
	state: AdaptiveSessionState;
	mastery: ConceptMastery;
	delta: number;
	showRemediation: boolean;
	remediation: string | null;
}
