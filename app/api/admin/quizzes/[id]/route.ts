import { type NextRequest, NextResponse } from "next/server";
import { quizInputSchema } from "@/lib/quizzes/schemas";
import { getApiContext } from "@/lib/quizzes/server";

type Context = { params: Promise<{ id: string }> };

export async function GET(_request: NextRequest, { params }: Context) {
	const context = await getApiContext({ admin: true });
	if ("error" in context) return context.error;
	const { id } = await params;
	const { data, error } = await context.db
		.from("quizzes")
		.select("*, quiz_questions(*)")
		.eq("id", id)
		.single();
	return error
		? NextResponse.json({ error: error.message }, { status: 404 })
		: NextResponse.json(data);
}

export async function PUT(request: NextRequest, { params }: Context) {
	const context = await getApiContext({ admin: true });
	if ("error" in context) return context.error;
	const { id } = await params;
	const parsed = quizInputSchema.safeParse(await request.json());
	if (!parsed.success)
		return NextResponse.json(
			{ error: parsed.error.flatten() },
			{ status: 400 },
		);
	const { questions, ...quiz } = parsed.data;
	const { error } = await context.db
		.from("quizzes")
		.update({
			...quiz,
			is_active: quiz.status === "published",
			updated_at: new Date().toISOString(),
		})
		.eq("id", id);
	if (error)
		return NextResponse.json({ error: error.message }, { status: 500 });
	await context.db.from("quiz_questions").delete().eq("quiz_id", id);
	const { error: questionError } = await context.db
		.from("quiz_questions")
		.insert(
			questions.map(({ id: _questionId, ...question }) => ({
				...question,
				quiz_id: id,
			})),
		);
	return questionError
		? NextResponse.json({ error: questionError.message }, { status: 500 })
		: NextResponse.json({ id });
}

export async function DELETE(_request: NextRequest, { params }: Context) {
	const context = await getApiContext({ admin: true });
	if ("error" in context) return context.error;
	const { id } = await params;
	const { error } = await context.db
		.from("quizzes")
		.update({ status: "archived", is_active: false })
		.eq("id", id);
	return error
		? NextResponse.json({ error: error.message }, { status: 500 })
		: NextResponse.json({ id });
}
