import { beforeEach, describe, expect, it, vi } from "vitest";
import { getAnthropicClient } from "@/lib/anthropic";
import { generateQuizQuestions } from "@/lib/quizzes/generation";

const createMessage = vi.hoisted(() => vi.fn());

vi.mock("@/lib/anthropic", () => ({
	QUIZ_MODEL: "test-model",
	getAnthropicClient: vi.fn(() => ({
		messages: { create: createMessage },
	})),
}));

const question = (index: number) => ({
	question: `What does loop example ${index} do?`,
	question_type: "multiple_choice",
	options: ["Repeats code", "Deletes code"],
	correct_answer: "Repeats code",
	explanation: "The loop repeats a block of code.",
	hint: "Think about repetition.",
	misconception_tag: "loop-purpose",
	concept_tag: "loops",
	adaptive_difficulty: 1,
	variant_group: `loop-purpose-${index}`,
	learning_objective: "Identify what a loop does",
	prerequisite_tags: [],
	remediation: "A loop repeats the instructions inside its block.",
	points: 1000,
	order_index: index,
	time_limit_seconds: 30,
});

const responseWith = (questions: ReturnType<typeof question>[]) => ({
	stop_reason: "end_turn",
	content: [{ type: "text", text: JSON.stringify({ questions }) }],
});

beforeEach(() => {
	vi.clearAllMocks();
	vi.mocked(getAnthropicClient).mockReturnValue({
		messages: { create: createMessage },
	} as never);
});

describe("lesson challenge AI validation", () => {
	it("accepts exactly eight valid, distinct questions", async () => {
		createMessage.mockResolvedValue(
			responseWith(Array.from({ length: 8 }, (_, index) => question(index))),
		);

		const result = await generateQuizQuestions("Lesson about loops", 8);

		expect("questions" in result && result.questions).toHaveLength(8);
	});

	it("rejects incomplete and duplicate drafts", async () => {
		createMessage.mockResolvedValueOnce(
			responseWith(Array.from({ length: 7 }, (_, index) => question(index))),
		);
		const incomplete = await generateQuizQuestions("Lesson about loops", 8);
		expect(incomplete).toMatchObject({ status: 422 });

		createMessage.mockResolvedValueOnce(
			responseWith([
				question(0),
				question(0),
				...Array.from({ length: 6 }, (_, index) => question(index + 2)),
			]),
		);
		const duplicate = await generateQuizQuestions("Lesson about loops", 8);
		expect(duplicate).toMatchObject({
			status: 422,
			error: expect.stringMatching(/duplicate/i),
		});
	});

	it("rejects drafts that omit required teaching metadata", async () => {
		createMessage.mockResolvedValue(
			responseWith([
				{ ...question(0), hint: "" },
				...Array.from({ length: 7 }, (_, index) => question(index + 1)),
			]),
		);

		expect(await generateQuizQuestions("Lesson about loops", 8)).toMatchObject({
			status: 422,
			error: expect.stringMatching(/metadata/i),
		});
	});

	it("fails gracefully when the AI key is unavailable", async () => {
		vi.mocked(getAnthropicClient).mockReturnValue(null);

		expect(await generateQuizQuestions("Lesson about loops", 8)).toEqual({
			error: "ANTHROPIC_API_KEY is not configured",
			status: 503,
		});
	});

	it("puts the requested level and grounding boundary into the model request", async () => {
		const difficulties = [3, 4, 4, 4, 5, 5, 5, 5];
		createMessage.mockResolvedValue(
			responseWith(
				difficulties.map((difficulty, index) => ({
					...question(index),
					adaptive_difficulty: difficulty,
				})),
			),
		);

		const result = await generateQuizQuestions(
			"Lesson about loops and print()",
			8,
			{
				difficulty: "very_challenging",
				enforceDifficultyProfile: true,
			},
		);

		expect("questions" in result && result.questions).toHaveLength(8);
		expect(createMessage).toHaveBeenCalledWith(
			expect.objectContaining({
				system: expect.stringMatching(
					/VERY CHALLENGING:[\s\S]*multi-step reasoning[\s\S]*only concepts[\s\S]*lesson source/i,
				),
				messages: [
					expect.objectContaining({
						content: expect.stringMatching(
							/requested very_challenging level[\s\S]*<lesson_source>[\s\S]*Lesson about loops and print\(\)[\s\S]*<\/lesson_source>/i,
						),
					}),
				],
			}),
		);
	});

	it("rejects a draft outside an explicitly enforced difficulty profile", async () => {
		createMessage.mockResolvedValue(
			responseWith(
				Array.from({ length: 8 }, (_, index) => ({
					...question(index),
					adaptive_difficulty: 1,
				})),
			),
		);

		expect(
			await generateQuizQuestions("Lesson about loops", 8, {
				difficulty: "challenging",
				enforceDifficultyProfile: true,
			}),
		).toMatchObject({
			status: 422,
			error: expect.stringMatching(/requested difficulty/i),
		});
	});
});
