import { describe, expect, it } from "vitest";
import {
	completeSession,
	createSession,
	evidenceDelta,
	recordEvidence,
	selectNextQuestion,
	targetDifficulty,
} from "@/lib/adaptive-practice/engine";
import type {
	AdaptiveQuestionCandidate,
	ConceptMastery,
} from "@/lib/adaptive-practice/types";

const now = new Date("2026-07-11T12:00:00.000Z");
const candidate = (
	id: string,
	conceptTag: string,
	difficulty: number,
	overrides: Partial<AdaptiveQuestionCandidate> = {},
): AdaptiveQuestionCandidate => ({
	id,
	quizId: `quiz-${id}`,
	courseId: "course-1",
	conceptTag,
	difficulty,
	variantGroup: `variant-${id}`,
	learningObjective: `Learn ${conceptTag}`,
	prerequisiteTags: [],
	remediation: `Review ${conceptTag}`,
	dueAt: null,
	isPublished: true,
	isEnrolled: true,
	...overrides,
});

const mastery = (conceptTag: string, score: number): ConceptMastery => ({
	courseId: "course-1",
	conceptTag,
	score,
	status: score >= 80 ? "mastered" : score >= 50 ? "practising" : "learning",
	totalAnswers: 3,
});

describe("adaptive engine", () => {
	it("maps mastery onto five transparent difficulty bands", () => {
		expect([0, 40, 60, 80, 90].map(targetDifficulty)).toEqual([1, 2, 3, 4, 5]);
	});

	it("is deterministic for the same seed and inputs", () => {
		const candidates = [candidate("a", "loops", 1), candidate("b", "loops", 1)];
		const state = createSession({ id: "session", seed: "stable-seed" });
		const first = selectNextQuestion({
			state,
			candidates,
			mastery: [mastery("loops", 20)],
			now,
		});
		const second = selectNextQuestion({
			state,
			candidates,
			mastery: [mastery("loops", 20)],
			now,
		});
		expect(first.selection?.question.id).toBe(second.selection?.question.id);
	});

	it("prioritizes overdue weak material at an appropriate difficulty", () => {
		const state = createSession({ id: "session", seed: "seed" });
		const result = selectNextQuestion({
			state,
			candidates: [
				candidate("due", "loops", 1, { dueAt: "2026-07-01T12:00:00.000Z" }),
				candidate("hard", "loops", 5),
				candidate("mastered", "variables", 5),
			],
			mastery: [mastery("loops", 20), mastery("variables", 95)],
			now,
		});
		expect(result.selection).toMatchObject({
			reason: "due_or_weak",
			targetDifficulty: 1,
			question: { id: "due" },
		});
	});

	it("never selects unpublished, unenrolled, repeated, or locked questions", () => {
		const state = {
			...createSession({ id: "session", seed: "seed" }),
			selectedQuestionIds: ["seen"],
			selectedVariantGroups: ["used-group"],
		};
		const result = selectNextQuestion({
			state,
			candidates: [
				candidate("draft", "loops", 1, { isPublished: false }),
				candidate("other-course", "loops", 1, { isEnrolled: false }),
				candidate("seen", "loops", 1),
				candidate("same-variant", "loops", 1, { variantGroup: "used-group" }),
				candidate("locked", "functions", 1, { prerequisiteTags: ["loops"] }),
			],
			mastery: [mastery("loops", 20)],
			now,
		});
		expect(result.selection).toBeNull();
		expect(result.state.status).toBe("fallback");
	});

	it("produces the requested 5/3/2 composition when the bank supports it", () => {
		let state = createSession({ id: "session", seed: "composition" });
		const candidates = [
			...Array.from({ length: 8 }, (_, index) =>
				candidate(`weak-${index}`, `weak-${index}`, 1),
			),
			...Array.from({ length: 6 }, (_, index) =>
				candidate(`developing-${index}`, `developing-${index}`, 3),
			),
			...Array.from({ length: 5 }, (_, index) =>
				candidate(`mastered-${index}`, `mastered-${index}`, 5),
			),
		];
		const masteryRows = [
			...Array.from({ length: 8 }, (_, index) => mastery(`weak-${index}`, 20)),
			...Array.from({ length: 6 }, (_, index) =>
				mastery(`developing-${index}`, 65),
			),
			...Array.from({ length: 5 }, (_, index) =>
				mastery(`mastered-${index}`, 95),
			),
		];
		for (let index = 0; index < 10; index += 1) {
			const result = selectNextQuestion({
				state,
				candidates,
				mastery: masteryRows,
				now,
			});
			expect(result.selection).not.toBeNull();
			state = result.state;
		}
		expect(state.reasonCounts).toMatchObject({
			due_or_weak: 5,
			developing: 3,
			retention: 2,
		});
		expect(state.selectedQuestionIds).toHaveLength(10);
		expect(
			selectNextQuestion({ state, candidates, mastery: masteryRows, now })
				.selection,
		).toBeNull();
	});

	it("weights confidence and help without penalizing time", () => {
		expect(
			evidenceDelta({ correct: true, confidence: "sure", usedHint: false }),
		).toBe(12);
		expect(
			evidenceDelta({ correct: true, confidence: "guessing", usedHint: false }),
		).toBe(3);
		expect(
			evidenceDelta({ correct: false, confidence: "sure", usedHint: false }),
		).toBe(-15);
		expect(
			evidenceDelta({ correct: true, confidence: "sure", usedHint: true }),
		).toBe(9);
	});

	it("triggers approved remediation and an easier forced variant after two misses", () => {
		const question = candidate("hard-loop", "loops", 4, {
			remediation: "A loop repeats code.",
		});
		const initial = createSession({ id: "session", seed: "seed" });
		const first = recordEvidence({
			state: initial,
			mastery: mastery("loops", 70),
			evidence: {
				question,
				correct: false,
				confidence: "unsure",
				usedHint: false,
			},
		});
		expect(first.showRemediation).toBe(false);
		const second = recordEvidence({
			state: first.state,
			mastery: first.mastery,
			evidence: {
				question,
				correct: false,
				confidence: "sure",
				usedHint: false,
			},
		});
		expect(second.showRemediation).toBe(true);
		expect(second.remediation).toBe("A loop repeats code.");
		expect(second.state.forcedRemediation).toEqual({
			courseId: "course-1",
			conceptTag: "loops",
			maxDifficulty: 3,
		});

		const selected = selectNextQuestion({
			state: second.state,
			candidates: [
				candidate("easy-loop", "loops", 2),
				candidate("harder-loop", "loops", 4),
			],
			mastery: [second.mastery],
			now,
		});
		expect(selected.selection).toMatchObject({
			reason: "remediation",
			question: { id: "easy-loop" },
		});
	});

	it("completes explicitly without mutating prior state", () => {
		const state = createSession({ id: "session", seed: "seed" });
		const completed = completeSession(state);
		expect(completed.status).toBe("completed");
		expect(state.status).toBe("active");
	});
});
