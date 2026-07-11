import { type NextRequest, NextResponse } from "next/server";
import { getApiContext, makeGameCode } from "@/lib/quizzes/server";

export async function POST(request: NextRequest) {
	const context = await getApiContext({ admin: true });
	if ("error" in context) return context.error;
	const { quizId } = await request.json();
	const { data: quiz } = await context.db
		.from("quizzes")
		.select("id, quiz_type, status")
		.eq("id", quizId)
		.single();
	if (
		!quiz ||
		quiz.quiz_type !== "term_finale" ||
		quiz.status !== "published"
	) {
		return NextResponse.json(
			{ error: "Select a published term finale" },
			{ status: 400 },
		);
	}
	for (let attempt = 0; attempt < 5; attempt += 1) {
		const code = makeGameCode();
		const { data, error } = await context.db
			.from("quiz_games")
			.insert({ quiz_id: quizId, host_id: context.user.id, code })
			.select("id, code")
			.single();
		if (!error && data) return NextResponse.json(data, { status: 201 });
	}
	return NextResponse.json(
		{ error: "Could not allocate a game code" },
		{ status: 500 },
	);
}
