import { type NextRequest, NextResponse } from "next/server";
import { quizInputSchema } from "@/lib/quizzes/schemas";
import { getApiContext } from "@/lib/quizzes/server";

export async function GET() {
	const context = await getApiContext({ admin: true });
	if ("error" in context) return context.error;
	const { data, error } = await context.db
		.from("quizzes")
		.select(
			"*, lessons(title), courses(title), quiz_questions(count), quiz_attempts(count)",
		)
		.order("updated_at", { ascending: false });
	return error
		? NextResponse.json({ error: error.message }, { status: 500 })
		: NextResponse.json({ quizzes: data || [] });
}

export async function POST(request: NextRequest) {
	const context = await getApiContext({ admin: true });
	if ("error" in context) return context.error;
	const parsed = quizInputSchema.safeParse(await request.json());
	if (!parsed.success)
		return NextResponse.json(
			{ error: parsed.error.flatten() },
			{ status: 400 },
		);
	const { questions, ...quiz } = parsed.data;
	const { data, error } = await context.db
		.from("quizzes")
		.insert({
			...quiz,
			is_active: quiz.status === "published",
			created_by: context.user.id,
		})
		.select("id")
		.single();
	if (error || !data)
		return NextResponse.json(
			{ error: error?.message || "Create failed" },
			{ status: 500 },
		);
	const { error: questionError } = await context.db
		.from("quiz_questions")
		.insert(
			questions.map(({ id: _id, ...question }) => ({
				...question,
				quiz_id: data.id,
			})),
		);
	if (questionError) {
		await context.db.from("quizzes").delete().eq("id", data.id);
		return NextResponse.json({ error: questionError.message }, { status: 500 });
	}
	return NextResponse.json({ id: data.id }, { status: 201 });
}
