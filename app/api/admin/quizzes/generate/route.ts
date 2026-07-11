import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { checkKidChatSafety } from "@/lib/concept-labs/safety";
import { quizQuestionInputSchema } from "@/lib/quizzes/schemas";
import { getApiContext } from "@/lib/quizzes/server";
import { createRateLimiter } from "@/lib/rate-limit";

const limiter = createRateLimiter({ windowMs: 60_000, maxRequests: 5 });
const requestSchema = z.object({
	lessonId: z.string().uuid().optional(),
	courseId: z.string().uuid().optional(),
	count: z.number().int().min(1).max(20).default(3),
});

export async function POST(request: NextRequest) {
	const context = await getApiContext({ admin: true });
	if ("error" in context) return context.error;
	if (!limiter.checkRateLimit(context.user.id)) {
		return NextResponse.json(
			{ error: "Please wait before generating again" },
			{ status: 429 },
		);
	}
	const parsed = requestSchema.safeParse(await request.json());
	if (!parsed.success || (!parsed.data.lessonId && !parsed.data.courseId)) {
		return NextResponse.json(
			{ error: "Select a lesson or course" },
			{ status: 400 },
		);
	}
	let source = "";
	if (parsed.data.lessonId) {
		const { data } = await context.db
			.from("lessons")
			.select("title, description, content, starter_code")
			.eq("id", parsed.data.lessonId)
			.single();
		source = data
			? `${data.title}\n${data.description || ""}\n${data.content}\n${data.starter_code || ""}`
			: "";
	} else {
		const { data } = await context.db
			.from("lessons")
			.select("title, description, content")
			.eq("course_id", parsed.data.courseId)
			.order("order_index");
		source = (data || [])
			.map(
				(lesson) =>
					`${lesson.title}\n${lesson.description || ""}\n${lesson.content}`,
			)
			.join("\n\n");
	}
	if (!source)
		return NextResponse.json(
			{ error: "No lesson content found" },
			{ status: 404 },
		);
	const apiKey = process.env.OPENAI_API_KEY;
	if (!apiKey)
		return NextResponse.json(
			{ error: "OPENAI_API_KEY is not configured" },
			{ status: 503 },
		);
	const response = await fetch("https://api.openai.com/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`,
		},
		body: JSON.stringify({
			model: "gpt-4o-mini",
			temperature: 0.3,
			response_format: { type: "json_object" },
			messages: [
				{
					role: "system",
					content:
						"Create safe, clear quiz questions for children ages 9-13. Return JSON {questions:[...]}. Each item must have question, question_type (multiple_choice, true_false, code_output, or code_ordering), options, correct_answer (an array only for code_ordering), explanation, hint, misconception_tag, concept_tag (a short reusable skill label such as for-loops), points=1000, order_index, and time_limit_seconds=30. Never introduce facts absent from the source.",
				},
				{
					role: "user",
					content: `Create ${parsed.data.count} varied questions from this course material:\n${source.slice(0, 60_000)}`,
				},
			],
		}),
	});
	if (!response.ok)
		return NextResponse.json(
			{ error: "Question generation failed" },
			{ status: 502 },
		);
	const json = await response.json();
	try {
		const generated = JSON.parse(json.choices?.[0]?.message?.content || "{}");
		const output = z
			.object({ questions: z.array(quizQuestionInputSchema).min(1).max(20) })
			.parse(generated);
		if (
			output.questions.some(
				(question) =>
					!checkKidChatSafety(
						`${question.question} ${question.explanation} ${question.hint}`,
					).isSafe,
			)
		) {
			return NextResponse.json(
				{ error: "Generated content did not pass safety review" },
				{ status: 422 },
			);
		}
		return NextResponse.json({ questions: output.questions, status: "draft" });
	} catch {
		return NextResponse.json(
			{ error: "The model returned invalid questions. Please try again." },
			{ status: 422 },
		);
	}
}
