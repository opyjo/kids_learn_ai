import { describe, expect, it } from "vitest";
import type {
	AdaptiveRepositories,
	EvidenceEvent,
} from "@/lib/adaptive-practice/ports";
import { AdaptivePracticeService } from "@/lib/adaptive-practice/service";
import type {
	AdaptiveQuestionCandidate,
	AdaptiveSessionState,
	ConceptMastery,
} from "@/lib/adaptive-practice/types";

const questions: AdaptiveQuestionCandidate[] = Array.from(
	{ length: 12 },
	(_, index) => ({
		id: `question-${index}`,
		quizId: "quiz",
		courseId: "course",
		conceptTag: `concept-${index % 4}`,
		difficulty: (index % 5) + 1,
		variantGroup: `variant-${index}`,
		learningObjective: "Learn safely",
		prerequisiteTags: [],
		remediation: "Review the worked example.",
		dueAt: null,
		isPublished: true,
		isEnrolled: true,
	}),
);

function repositories(candidateRows = questions) {
	const sessions = new Map<string, AdaptiveSessionState>();
	const masteryRows: ConceptMastery[] = Array.from(
		{ length: 4 },
		(_, index) => ({
			courseId: "course",
			conceptTag: `concept-${index}`,
			score: 30 + index * 20,
			status: index > 2 ? "mastered" : index > 0 ? "practising" : "learning",
			totalAnswers: 3,
		}),
	);
	const idempotency = new Set<string>();
	const events: EvidenceEvent[] = [];
	const repos: AdaptiveRepositories = {
		questions: {
			listCandidates: async () => candidateRows,
			getProtectedAnswer: async () => "answer",
		},
		mastery: { listMastery: async () => masteryRows },
		sessions: {
			create: async (_userId, state) => void sessions.set(state.id, state),
			get: async (_userId, id) => sessions.get(id) || null,
			complete: async (id, status) => {
				const state = sessions.get(id);
				if (state) sessions.set(id, { ...state, status });
			},
		},
		events: {
			record: async (event, nextState, mastery) => {
				if (idempotency.has(event.idempotencyKey)) return { inserted: false };
				idempotency.add(event.idempotencyKey);
				events.push(event);
				sessions.set(event.sessionId, nextState);
				const index = masteryRows.findIndex(
					(row) =>
						row.courseId === mastery.courseId &&
						row.conceptTag === mastery.conceptTag,
				);
				if (index >= 0) masteryRows[index] = mastery;
				return { inserted: true };
			},
		},
	};
	return { repos, sessions, events };
}

describe("AdaptivePracticeService", () => {
	it("falls back without a minimally useful approved bank", async () => {
		const { repos } = repositories(questions.slice(0, 4));
		const service = new AdaptivePracticeService({
			repositories: repos,
			now: () => new Date("2026-07-11T12:00:00Z"),
			newId: () => "session",
		});
		expect(await service.create("student")).toEqual({
			mode: "fallback",
			reason: "insufficient_bank",
		});
	});

	it("falls back when ten variants cannot form a safe ten-question session", async () => {
		const oneConcept = questions.map((question) => ({
			...question,
			conceptTag: "one-concept",
		}));
		const { repos } = repositories(oneConcept);
		const service = new AdaptivePracticeService({
			repositories: repos,
			now: () => new Date("2026-07-11T12:00:00Z"),
			newId: () => "session",
		});
		expect(await service.create("student")).toEqual({
			mode: "fallback",
			reason: "insufficient_bank",
		});
	});

	it("creates and persists a deterministic first selection", async () => {
		const { repos, sessions } = repositories();
		const service = new AdaptivePracticeService({
			repositories: repos,
			now: () => new Date("2026-07-11T12:00:00Z"),
			newId: () => "session",
		});
		const result = await service.create("student");
		expect(result.mode).toBe("adaptive");
		expect(sessions.get("session")?.currentSelection).not.toBeNull();
		expect(sessions.get("session")?.selectedQuestionIds).toHaveLength(1);
	});

	it("records one immutable event and rejects the same idempotency key", async () => {
		const { repos, events } = repositories();
		const service = new AdaptivePracticeService({
			repositories: repos,
			now: () => new Date("2026-07-11T12:00:00Z"),
			newId: () => "session",
		});
		await service.create("student");
		const input = {
			userId: "student",
			sessionId: "session",
			idempotencyKey: "00000000-0000-4000-8000-000000000001",
			confidence: "sure" as const,
			correct: true,
			usedHint: false,
		};
		const first = await service.submit(input);
		expect(first.status).toBe("active");
		expect(events).toHaveLength(1);
		const retry = await service.submit(input);
		expect(retry).toEqual({ status: "duplicate" });
		expect(events).toHaveLength(1);
	});
});
