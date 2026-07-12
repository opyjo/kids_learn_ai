import { z } from "zod";
import { getAnthropicClient, QUIZ_MODEL } from "@/lib/anthropic";
import { checkKidChatSafety } from "@/lib/concept-labs/safety";
import {
	type QuizQuestionInput,
	quizQuestionInputSchema,
} from "@/lib/quizzes/schemas";
import { QUESTION_TYPES } from "@/lib/quizzes/types";

const generatedOutputSchema = z.object({
	questions: z.array(quizQuestionInputSchema).min(1).max(20),
});

// JSON schema for Claude's structured output — guarantees parseable JSON.
// The zod schema above still enforces the finer rules (answers must appear
// in options, ordering questions need an array answer, etc.).
const QUESTIONS_JSON_SCHEMA = {
	type: "object",
	properties: {
		questions: {
			type: "array",
			items: {
				type: "object",
				properties: {
					question: { type: "string" },
					question_type: { type: "string", enum: [...QUESTION_TYPES] },
					options: { type: "array", items: { type: "string" } },
					correct_answer: {
						anyOf: [
							{ type: "string" },
							{ type: "array", items: { type: "string" } },
						],
					},
					explanation: { type: "string" },
					hint: { type: "string" },
					misconception_tag: { type: "string" },
					concept_tag: { type: "string" },
					// Structured outputs reject minimum/maximum on integers; the zod
					// schema still enforces the 1-5 range after parsing.
					adaptive_difficulty: { type: "integer" },
					variant_group: { type: "string" },
					learning_objective: { type: "string" },
					prerequisite_tags: { type: "array", items: { type: "string" } },
					remediation: { type: "string" },
					points: { type: "integer" },
					order_index: { type: "integer" },
					time_limit_seconds: { type: "integer" },
				},
				required: [
					"question",
					"question_type",
					"options",
					"correct_answer",
					"explanation",
					"hint",
					"misconception_tag",
					"concept_tag",
					"adaptive_difficulty",
					"variant_group",
					"learning_objective",
					"prerequisite_tags",
					"remediation",
					"points",
					"order_index",
					"time_limit_seconds",
				],
				additionalProperties: false,
			},
		},
	},
	required: ["questions"],
	additionalProperties: false,
} as const;

export type GenerateQuestionsResult =
	| { questions: QuizQuestionInput[] }
	| { error: string; status: number };

export async function generateQuizQuestions(
	source: string,
	count: number,
): Promise<GenerateQuestionsResult> {
	const anthropic = getAnthropicClient();
	if (!anthropic)
		return { error: "ANTHROPIC_API_KEY is not configured", status: 503 };
	let response: Awaited<ReturnType<typeof anthropic.messages.create>>;
	try {
		response = await anthropic.messages.create({
			model: QUIZ_MODEL,
			max_tokens: 8192,
			system:
				"Create safe, clear quiz questions for children ages 9-13. Return JSON {questions:[...]}. Each item must have question, question_type (multiple_choice, true_false, code_output, or code_ordering), options, correct_answer (an array only for code_ordering), explanation, hint, misconception_tag, concept_tag (a short reusable skill label such as for-loops), adaptive_difficulty from 1 to 5, variant_group shared only by equivalent variants, learning_objective, prerequisite_tags, a short remediation mini-lesson, points=1000, order_index, and time_limit_seconds=30. Never introduce facts absent from the source.",
			output_config: {
				format: { type: "json_schema", schema: QUESTIONS_JSON_SCHEMA },
			},
			messages: [
				{
					role: "user",
					content: `Create ${count} varied questions from this course material:\n${source.slice(0, 60_000)}`,
				},
			],
		});
	} catch (error) {
		console.error("Quiz generation error:", error);
		return { error: "Question generation failed", status: 502 };
	}
	if (response.stop_reason === "refusal") {
		return {
			error: "Generated content did not pass safety review",
			status: 422,
		};
	}
	const text = response.content.find((block) => block.type === "text")?.text;
	try {
		const generated = JSON.parse(text || "{}");
		const output = generatedOutputSchema.parse(generated);
		if (
			output.questions.some(
				(question) =>
					!checkKidChatSafety(
						`${question.question} ${question.explanation} ${question.hint}`,
					).isSafe,
			)
		) {
			return {
				error: "Generated content did not pass safety review",
				status: 422,
			};
		}
		return { questions: output.questions };
	} catch {
		return {
			error: "The model returned invalid questions. Please try again.",
			status: 422,
		};
	}
}
