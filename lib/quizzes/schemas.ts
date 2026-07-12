import { z } from "zod";
import { QUESTION_TYPES } from "@/lib/quizzes/types";

export const quizQuestionInputSchema = z
	.object({
		id: z.string().uuid().optional(),
		question: z.string().trim().min(5).max(1000),
		question_type: z.enum(QUESTION_TYPES),
		options: z.array(z.string().trim().min(1)).min(2).max(10),
		correct_answer: z.union([
			z.string().trim().min(1),
			z.array(z.string().trim().min(1)).min(2),
		]),
		explanation: z.string().trim().min(3).max(1000),
		hint: z.string().trim().max(500).default(""),
		misconception_tag: z.string().trim().max(100).default(""),
		concept_tag: z.string().trim().min(1).max(100).default("general"),
		adaptive_difficulty: z.number().int().min(1).max(5).default(1),
		variant_group: z.string().trim().max(100).default(""),
		learning_objective: z.string().trim().max(300).default(""),
		prerequisite_tags: z
			.array(z.string().trim().min(1).max(100))
			.max(10)
			.default([]),
		remediation: z.string().trim().max(2000).default(""),
		points: z.number().int().min(1).max(5000).default(1000),
		order_index: z.number().int().min(0),
		time_limit_seconds: z.number().int().min(5).max(300).default(30),
	})
	.superRefine((value, context) => {
		const expected = Array.isArray(value.correct_answer)
			? value.correct_answer
			: [value.correct_answer];
		if (expected.some((answer) => !value.options.includes(answer))) {
			context.addIssue({
				code: z.ZodIssueCode.custom,
				path: ["correct_answer"],
				message: "Every correct answer must appear in options",
			});
		}
		if (
			value.question_type === "code_ordering" &&
			!Array.isArray(value.correct_answer)
		) {
			context.addIssue({
				code: z.ZodIssueCode.custom,
				path: ["correct_answer"],
				message: "Code ordering questions require an ordered answer array",
			});
		}
	});

export const quizInputSchema = z.object({
	id: z.string().uuid().optional(),
	title: z.string().trim().min(3).max(200),
	description: z.string().trim().max(1000).default(""),
	lesson_id: z.string().uuid().nullable().optional(),
	course_id: z.string().uuid().nullable().optional(),
	quiz_type: z.enum(["quick_check", "term_finale"]),
	status: z.enum(["draft", "published", "archived"]).default("draft"),
	passing_score: z.number().int().min(0).max(100).default(67),
	questions: z.array(quizQuestionInputSchema).min(1).max(50),
});

export const answerInputSchema = z.object({
	questionId: z.string().uuid(),
	answer: z.union([z.string(), z.array(z.string())]),
	timeTakenMs: z.number().int().min(0).max(600_000).default(0),
	powerUp: z
		.enum(["fifty_fifty", "hint", "second_chance"])
		.nullable()
		.optional(),
});

export type QuizInput = z.infer<typeof quizInputSchema>;
export type QuizQuestionInput = z.infer<typeof quizQuestionInputSchema>;
export type AnswerInput = z.infer<typeof answerInputSchema>;
