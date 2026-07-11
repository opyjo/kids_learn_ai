import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { generateQuizQuestions } from "@/lib/quizzes/generation";
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
	const result = await generateQuizQuestions(source, parsed.data.count);
	if ("error" in result)
		return NextResponse.json(
			{ error: result.error },
			{ status: result.status },
		);
	return NextResponse.json({ questions: result.questions, status: "draft" });
}
