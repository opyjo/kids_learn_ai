import {
	ADAPTIVE_ALGORITHM_VERSION,
	ADAPTIVE_SESSION_LENGTH,
	type AdaptiveQuestionCandidate,
	type AdaptiveSessionState,
	type ConceptMastery,
	type Confidence,
	type EvidenceInput,
	type EvidenceResult,
	masteryKey,
	type QuestionSelection,
	type SelectionReason,
} from "@/lib/adaptive-practice/types";

const QUOTAS: Record<Exclude<SelectionReason, "remediation">, number> = {
	due_or_weak: 5,
	developing: 3,
	retention: 2,
};

const clamp = (value: number, min: number, max: number) =>
	Math.max(min, Math.min(max, value));

function stableJitter(seed: string, value: string): number {
	let hash = 2166136261;
	for (const character of `${seed}:${value}`) {
		hash ^= character.charCodeAt(0);
		hash = Math.imul(hash, 16777619);
	}
	return (hash >>> 0) / 4_294_967_295;
}

export function targetDifficulty(masteryScore: number): number {
	if (masteryScore < 40) return 1;
	if (masteryScore < 60) return 2;
	if (masteryScore < 80) return 3;
	if (masteryScore < 90) return 4;
	return 5;
}

export function createSession(input: {
	id: string;
	seed: string;
	targetLength?: number;
}): AdaptiveSessionState {
	return {
		id: input.id,
		seed: input.seed,
		algorithmVersion: ADAPTIVE_ALGORITHM_VERSION,
		targetLength: clamp(input.targetLength ?? ADAPTIVE_SESSION_LENGTH, 1, 10),
		selectedQuestionIds: [],
		selectedVariantGroups: [],
		conceptCounts: {},
		reasonCounts: {
			due_or_weak: 0,
			developing: 0,
			retention: 0,
			remediation: 0,
		},
		conceptMissStreaks: {},
		forcedRemediation: null,
		currentSelection: null,
		status: "active",
	};
}

function classifyReason(
	candidate: AdaptiveQuestionCandidate,
	mastery: ConceptMastery,
	nowMs: number,
): Exclude<SelectionReason, "remediation"> {
	if (
		(candidate.dueAt && new Date(candidate.dueAt).getTime() <= nowMs) ||
		mastery.score < 50
	)
		return "due_or_weak";
	if (mastery.score < 80) return "developing";
	return "retention";
}

function pickDesiredReason(
	state: AdaptiveSessionState,
	available: Set<Exclude<SelectionReason, "remediation">>,
): Exclude<SelectionReason, "remediation"> | null {
	const order: Exclude<SelectionReason, "remediation">[] = [
		"due_or_weak",
		"developing",
		"retention",
	];
	return (
		order
			.filter((reason) => available.has(reason))
			.sort((a, b) => {
				const aDeficit = QUOTAS[a] - state.reasonCounts[a];
				const bDeficit = QUOTAS[b] - state.reasonCounts[b];
				return bDeficit - aDeficit || order.indexOf(a) - order.indexOf(b);
			})[0] ?? null
	);
}

export function selectNextQuestion(input: {
	state: AdaptiveSessionState;
	candidates: AdaptiveQuestionCandidate[];
	mastery: ConceptMastery[];
	now: Date;
}): { state: AdaptiveSessionState; selection: QuestionSelection | null } {
	if (
		input.state.status !== "active" ||
		input.state.selectedQuestionIds.length >= input.state.targetLength
	)
		return {
			state: completeSession(input.state, "completed"),
			selection: null,
		};
	const masteryByConcept = new Map(
		input.mastery.map((entry) => [
			masteryKey(entry.courseId, entry.conceptTag),
			entry,
		]),
	);
	const getMastery = (candidate: AdaptiveQuestionCandidate) =>
		masteryByConcept.get(masteryKey(candidate.courseId, candidate.conceptTag));
	const eligible = input.candidates.filter((candidate) => {
		const candidateKey = masteryKey(candidate.courseId, candidate.conceptTag);
		if (!candidate.isPublished || !candidate.isEnrolled) return false;
		if (input.state.selectedQuestionIds.includes(candidate.id)) return false;
		if (input.state.selectedVariantGroups.includes(candidate.variantGroup))
			return false;
		if (
			(input.state.conceptCounts[candidateKey] || 0) >= 3 &&
			(input.state.forcedRemediation?.courseId !== candidate.courseId ||
				input.state.forcedRemediation?.conceptTag !== candidate.conceptTag)
		)
			return false;
		return candidate.prerequisiteTags.every(
			(prerequisite) =>
				(masteryByConcept.get(masteryKey(candidate.courseId, prerequisite))
					?.score || 0) >= 50,
		);
	});
	if (!eligible.length)
		return { state: completeSession(input.state, "fallback"), selection: null };

	let reason: SelectionReason;
	let pool: AdaptiveQuestionCandidate[];
	if (input.state.forcedRemediation) {
		reason = "remediation";
		pool = eligible.filter(
			(candidate) =>
				candidate.courseId === input.state.forcedRemediation?.courseId &&
				candidate.conceptTag === input.state.forcedRemediation?.conceptTag &&
				candidate.difficulty <= input.state.forcedRemediation.maxDifficulty,
		);
		if (!pool.length)
			return {
				state: completeSession(input.state, "fallback"),
				selection: null,
			};
	} else {
		const availableReasons = new Set(
			eligible.map((candidate) =>
				classifyReason(
					candidate,
					getMastery(candidate) || {
						courseId: candidate.courseId,
						conceptTag: candidate.conceptTag,
						score: 0,
						status: "learning",
						totalAnswers: 0,
					},
					input.now.getTime(),
				),
			),
		);
		reason = pickDesiredReason(input.state, availableReasons) || "due_or_weak";
		pool = eligible.filter((candidate) => {
			const mastery = getMastery(candidate) || {
				courseId: candidate.courseId,
				conceptTag: candidate.conceptTag,
				score: 0,
				status: "learning" as const,
				totalAnswers: 0,
			};
			return classifyReason(candidate, mastery, input.now.getTime()) === reason;
		});
	}

	const scored = pool.map((candidate) => {
		const concept = getMastery(candidate) || {
			courseId: candidate.courseId,
			conceptTag: candidate.conceptTag,
			score: 0,
			status: "learning" as const,
			totalAnswers: 0,
		};
		const target = input.state.forcedRemediation
			? input.state.forcedRemediation.maxDifficulty
			: targetDifficulty(concept.score);
		const overdueDays = candidate.dueAt
			? Math.max(
					0,
					(input.now.getTime() - new Date(candidate.dueAt).getTime()) /
						86_400_000,
				)
			: 0;
		const score =
			(100 - concept.score) * 0.4 +
			Math.min(10, overdueDays) +
			Math.max(0, 20 - Math.abs(candidate.difficulty - target) * 7) +
			stableJitter(
				input.state.seed,
				`${candidate.id}:${input.state.selectedQuestionIds.length}`,
			);
		return { candidate, score, target };
	});
	scored.sort(
		(a, b) => b.score - a.score || a.candidate.id.localeCompare(b.candidate.id),
	);
	const winner = scored[0];
	const winnerConceptKey = masteryKey(
		winner.candidate.courseId,
		winner.candidate.conceptTag,
	);
	const nextState: AdaptiveSessionState = {
		...input.state,
		selectedQuestionIds: [
			...input.state.selectedQuestionIds,
			winner.candidate.id,
		],
		selectedVariantGroups: [
			...input.state.selectedVariantGroups,
			winner.candidate.variantGroup,
		],
		conceptCounts: {
			...input.state.conceptCounts,
			[winnerConceptKey]:
				(input.state.conceptCounts[winnerConceptKey] || 0) + 1,
		},
		reasonCounts: {
			...input.state.reasonCounts,
			[reason]: input.state.reasonCounts[reason] + 1,
		},
		forcedRemediation: null,
		currentSelection: {
			questionId: winner.candidate.id,
			reason,
			targetDifficulty: winner.target,
		},
	};
	return {
		state: nextState,
		selection: {
			question: winner.candidate,
			reason,
			targetDifficulty: winner.target,
		},
	};
}

export function evidenceDelta(input: {
	correct: boolean;
	confidence: Confidence;
	usedHint: boolean;
}): number {
	const positive: Record<Confidence, number> = {
		sure: 12,
		unsure: 8,
		guessing: 3,
	};
	const negative: Record<Confidence, number> = {
		sure: -15,
		unsure: -10,
		guessing: -6,
	};
	const raw = input.correct
		? positive[input.confidence]
		: negative[input.confidence];
	return input.correct && input.usedHint ? Math.max(1, raw - 3) : raw;
}

export function recordEvidence(input: {
	state: AdaptiveSessionState;
	mastery: ConceptMastery;
	evidence: EvidenceInput;
}): EvidenceResult {
	const delta = evidenceDelta(input.evidence);
	const score = clamp(input.mastery.score + delta, 0, 100);
	const totalAnswers = input.mastery.totalAnswers + 1;
	const conceptKey = masteryKey(
		input.evidence.question.courseId,
		input.evidence.question.conceptTag,
	);
	const missStreak = input.evidence.correct
		? 0
		: (input.state.conceptMissStreaks[conceptKey] || 0) + 1;
	const showRemediation = missStreak >= 2;
	const mastery: ConceptMastery = {
		...input.mastery,
		score,
		totalAnswers,
		status:
			totalAnswers >= 3 && score >= 80
				? "mastered"
				: score >= 50
					? "practising"
					: "learning",
	};
	const state: AdaptiveSessionState = {
		...input.state,
		conceptMissStreaks: {
			...input.state.conceptMissStreaks,
			[conceptKey]: showRemediation ? 0 : missStreak,
		},
		forcedRemediation: showRemediation
			? {
					courseId: input.evidence.question.courseId,
					conceptTag: input.evidence.question.conceptTag,
					maxDifficulty: Math.max(1, input.evidence.question.difficulty - 1),
				}
			: input.state.forcedRemediation,
		currentSelection: null,
	};
	return {
		state,
		mastery,
		delta,
		showRemediation,
		remediation: showRemediation ? input.evidence.question.remediation : null,
	};
}

export function completeSession(
	state: AdaptiveSessionState,
	status: "completed" | "fallback" = "completed",
): AdaptiveSessionState {
	return { ...state, status };
}
