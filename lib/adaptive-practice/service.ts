import {
	completeSession,
	createSession,
	recordEvidence,
	selectNextQuestion,
} from "@/lib/adaptive-practice/engine";
import type { AdaptiveRepositories } from "@/lib/adaptive-practice/ports";
import type {
	AdaptiveSessionState,
	ConceptMastery,
	Confidence,
	QuestionSelection,
} from "@/lib/adaptive-practice/types";

const MINIMUM_ADAPTIVE_VARIANTS = 10;

export interface AdaptiveServiceDependencies {
	repositories: AdaptiveRepositories;
	now: () => Date;
	newId: () => string;
}

export type CreateAdaptiveSessionResult =
	| {
			mode: "adaptive";
			state: AdaptiveSessionState;
			selection: QuestionSelection;
	  }
	| { mode: "fallback"; reason: "insufficient_bank" | "no_selection" };

export class AdaptivePracticeService {
	constructor(private readonly dependencies: AdaptiveServiceDependencies) {}

	async create(userId: string): Promise<CreateAdaptiveSessionResult> {
		const [candidates, mastery] = await Promise.all([
			this.dependencies.repositories.questions.listCandidates(userId),
			this.dependencies.repositories.mastery.listMastery(userId),
		]);
		const distinctVariants = new Set(
			candidates
				.filter((question) => question.isPublished && question.isEnrolled)
				.map((question) => question.variantGroup),
		).size;
		if (distinctVariants < MINIMUM_ADAPTIVE_VARIANTS)
			return { mode: "fallback", reason: "insufficient_bank" };
		const id = this.dependencies.newId();
		const initial = createSession({ id, seed: id });
		let probe = initial;
		while (probe.selectedQuestionIds.length < probe.targetLength) {
			const next = selectNextQuestion({
				state: probe,
				candidates,
				mastery,
				now: this.dependencies.now(),
			});
			if (!next.selection)
				return { mode: "fallback", reason: "insufficient_bank" };
			probe = { ...next.state, currentSelection: null };
		}
		const selected = selectNextQuestion({
			state: initial,
			candidates,
			mastery,
			now: this.dependencies.now(),
		});
		if (!selected.selection)
			return { mode: "fallback", reason: "no_selection" };
		await this.dependencies.repositories.sessions.create(
			userId,
			selected.state,
		);
		return {
			mode: "adaptive",
			state: selected.state,
			selection: selected.selection,
		};
	}

	async submit(input: {
		userId: string;
		sessionId: string;
		idempotencyKey: string;
		confidence: Confidence;
		correct: boolean;
		usedHint: boolean;
	}): Promise<
		| { status: "duplicate" }
		| {
				status: "active" | "completed" | "fallback";
				state: AdaptiveSessionState;
				selection: QuestionSelection | null;
				correct: boolean;
				mastery: ConceptMastery;
				remediation: string | null;
		  }
	> {
		const state = await this.dependencies.repositories.sessions.get(
			input.userId,
			input.sessionId,
		);
		if (!state || state.status !== "active" || !state.currentSelection)
			throw new Error("Adaptive session is not active");
		const [candidates, masteryRows] = await Promise.all([
			this.dependencies.repositories.questions.listCandidates(input.userId),
			this.dependencies.repositories.mastery.listMastery(input.userId),
		]);
		const question = candidates.find(
			(candidate) => candidate.id === state.currentSelection?.questionId,
		);
		if (!question) throw new Error("Adaptive question is unavailable");
		const mastery = masteryRows.find(
			(row) =>
				row.courseId === question.courseId &&
				row.conceptTag === question.conceptTag,
		) || {
			courseId: question.courseId,
			conceptTag: question.conceptTag,
			score: 0,
			status: "learning" as const,
			totalAnswers: 0,
		};
		const evidence = recordEvidence({
			state,
			mastery,
			evidence: {
				question,
				correct: input.correct,
				confidence: input.confidence,
				usedHint: input.usedHint,
			},
		});
		const updatedMastery = masteryRows.map((row) =>
			row.courseId === evidence.mastery.courseId &&
			row.conceptTag === evidence.mastery.conceptTag
				? evidence.mastery
				: row,
		);
		if (
			!updatedMastery.some(
				(row) =>
					row.courseId === evidence.mastery.courseId &&
					row.conceptTag === evidence.mastery.conceptTag,
			)
		)
			updatedMastery.push(evidence.mastery);
		let selection: QuestionSelection | null = null;
		let nextState = evidence.state;
		if (nextState.selectedQuestionIds.length >= nextState.targetLength) {
			nextState = completeSession(nextState, "completed");
		} else {
			const next = selectNextQuestion({
				state: nextState,
				candidates,
				mastery: updatedMastery,
				now: this.dependencies.now(),
			});
			nextState = next.state;
			selection = next.selection;
		}
		const recorded = await this.dependencies.repositories.events.record(
			{
				idempotencyKey: input.idempotencyKey,
				sessionId: state.id,
				userId: input.userId,
				questionId: question.id,
				position: state.selectedQuestionIds.length,
				selectionReason: state.currentSelection.reason,
				confidence: input.confidence,
				correct: input.correct,
				usedHint: input.usedHint,
				difficulty: question.difficulty,
				masteryBefore: mastery.score,
				masteryAfter: evidence.mastery.score,
				remediationShown: evidence.showRemediation,
			},
			nextState,
			evidence.mastery,
		);
		if (!recorded.inserted) return { status: "duplicate" };
		return {
			status: nextState.status,
			state: nextState,
			selection,
			correct: input.correct,
			mastery: evidence.mastery,
			remediation: evidence.remediation,
		};
	}
}
