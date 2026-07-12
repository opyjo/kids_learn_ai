import type {
	AdaptiveQuestionCandidate,
	AdaptiveSessionState,
	ConceptMastery,
	Confidence,
} from "@/lib/adaptive-practice/types";

export interface QuestionBankPort {
	listCandidates(userId: string): Promise<AdaptiveQuestionCandidate[]>;
	getProtectedAnswer(questionId: string): Promise<string | string[] | null>;
}

export interface MasteryPort {
	listMastery(userId: string): Promise<ConceptMastery[]>;
}

export interface SessionPort {
	create(userId: string, state: AdaptiveSessionState): Promise<void>;
	get(userId: string, sessionId: string): Promise<AdaptiveSessionState | null>;
	complete(sessionId: string, status: "completed" | "fallback"): Promise<void>;
}

export interface EvidenceEvent {
	idempotencyKey: string;
	sessionId: string;
	userId: string;
	questionId: string;
	position: number;
	selectionReason: string;
	confidence: Confidence;
	correct: boolean;
	usedHint: boolean;
	difficulty: number;
	masteryBefore: number;
	masteryAfter: number;
	remediationShown: boolean;
}

export interface EventPort {
	record(
		event: EvidenceEvent,
		nextState: AdaptiveSessionState,
		mastery: ConceptMastery,
	): Promise<{ inserted: boolean }>;
}

export interface AdaptiveRepositories {
	questions: QuestionBankPort;
	mastery: MasteryPort;
	sessions: SessionPort;
	events: EventPort;
}
