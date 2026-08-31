import type { NextRequest } from "next/server";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { GET } from "@/app/api/quiz/lesson/[lessonId]/route";
import { getApiContext, isCourseEnrolled } from "@/lib/quizzes/server";

vi.mock("@/lib/quizzes/server", () => ({
	getApiContext: vi.fn(),
	isCourseEnrolled: vi.fn(),
	recordLearning: vi.fn(),
}));

const userId = "00000000-0000-4000-8000-000000000001";
const lessonId = "00000000-0000-4000-8000-000000000002";
const courseId = "00000000-0000-4000-8000-000000000003";
const quizId = "00000000-0000-4000-8000-000000000004";
const questionId = "00000000-0000-4000-8000-000000000005";

function queryChain(
	data: unknown,
	terminal?: "single" | "maybeSingle" | "order",
) {
	const chain: Record<string, unknown> = {};
	chain.select = vi.fn(() => chain);
	chain.eq = vi.fn(() => chain);
	if (terminal) chain[terminal] = vi.fn(async () => ({ data }));
	return chain;
}

function createDb() {
	const question = {
		id: questionId,
		quiz_id: quizId,
		question: "What does print(2 + 2) show?",
		question_type: "multiple_choice",
		options: ["4", "22", "Error"],
		correct_answer: "4",
		explanation: "Python adds numbers.",
		hint: "Think about maths.",
		misconception_tag: "addition-vs-concatenation",
		concept_tag: "arithmetic",
		adaptive_difficulty: 1,
		variant_group: "arithmetic-output",
		learning_objective: "Evaluate addition",
		prerequisite_tags: [],
		remediation: "Add numeric values.",
		points: 1000,
		order_index: 0,
		time_limit_seconds: 30,
	};
	return {
		from: vi.fn((table: string) => {
			if (table === "lessons") {
				return queryChain({ id: lessonId, course_id: courseId }, "single");
			}
			if (table === "quizzes") {
				return queryChain(
					{
						id: quizId,
						title: "Math Wizard Homework Challenge",
						description: "Review Lessons 1–7.",
						passing_score: 70,
					},
					"maybeSingle",
				);
			}
			if (table === "quiz_questions") {
				return queryChain([question], "order");
			}
			if (table === "quiz_attempts") return queryChain([], "order");
			if (table === "quiz_question_checks") {
				return queryChain(
					[
						{
							question_id: questionId,
							answer: "22",
							correct: false,
						},
					],
					"order",
				);
			}
			throw new Error(`Unexpected table: ${table}`);
		}),
	};
}

beforeEach(() => {
	vi.clearAllMocks();
	vi.mocked(isCourseEnrolled).mockResolvedValue(true);
});

describe("lesson quiz API", () => {
	it("returns checked answers for the current unfinished attempt", async () => {
		const db = createDb();
		vi.mocked(getApiContext).mockResolvedValue({
			db,
			user: { id: userId },
			profile: { id: userId, role: "student", full_name: "Student" },
		} as never);

		const response = await GET(
			new Request(
				`http://localhost/api/quiz/lesson/${lessonId}`,
			) as NextRequest,
			{ params: Promise.resolve({ lessonId }) },
		);
		const payload = await response.json();

		expect(response.status).toBe(200);
		expect(payload.questions[0]).not.toHaveProperty("correct_answer");
		expect(payload.inProgress).toEqual({
			attemptNumber: 1,
			checks: [
				{
					questionId,
					answer: "22",
					correct: false,
					explanation: "Python adds numbers.",
					correctAnswer: "4",
				},
			],
		});
	});
});
