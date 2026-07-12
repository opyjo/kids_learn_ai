import { describe, expect, it } from "vitest";
import {
	createSession,
	selectNextQuestion,
} from "@/lib/adaptive-practice/engine";
import type { AdaptiveQuestionCandidate } from "@/lib/adaptive-practice/types";

const candidates: AdaptiveQuestionCandidate[] = Array.from(
	{ length: 40 },
	(_, index) => ({
		id: `question-${index}`,
		quizId: `quiz-${index % 4}`,
		courseId: "enrolled-course",
		conceptTag: `concept-${index % 10}`,
		difficulty: (index % 5) + 1,
		variantGroup: `variant-${index}`,
		learningObjective: "Practise an approved objective",
		prerequisiteTags: [],
		remediation: "Review the approved worked example.",
		dueAt: null,
		isPublished: index % 7 !== 0,
		isEnrolled: index % 11 !== 0,
	}),
);

describe("adaptive selection properties", () => {
	it("selects only safe unique candidates and never exceeds ten", () => {
		for (let seedIndex = 0; seedIndex < 50; seedIndex += 1) {
			let state = createSession({
				id: `session-${seedIndex}`,
				seed: `seed-${seedIndex}`,
			});
			while (state.status === "active") {
				const next = selectNextQuestion({
					state,
					candidates,
					mastery: [],
					now: new Date("2026-07-11T12:00:00Z"),
				});
				state = next.state;
				if (!next.selection) break;
				expect(next.selection.question.isPublished).toBe(true);
				expect(next.selection.question.isEnrolled).toBe(true);
			}
			expect(state.selectedQuestionIds.length).toBeLessThanOrEqual(10);
			expect(new Set(state.selectedQuestionIds).size).toBe(
				state.selectedQuestionIds.length,
			);
			expect(new Set(state.selectedVariantGroups).size).toBe(
				state.selectedVariantGroups.length,
			);
		}
	});
});
