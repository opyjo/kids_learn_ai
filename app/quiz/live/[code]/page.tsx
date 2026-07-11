import { LiveQuizGame } from "@/components/quizzes/live-quiz-game";
import { requireAuth } from "@/lib/auth-helpers";

export default async function LiveQuizPage({
	params,
}: {
	params: Promise<{ code: string }>;
}) {
	await requireAuth();
	const { code } = await params;
	return (
		<main className="mx-auto max-w-6xl px-4 py-8">
			<LiveQuizGame code={code.toUpperCase()} />
		</main>
	);
}
