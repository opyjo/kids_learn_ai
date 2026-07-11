import { JoinGameForm } from "@/components/quizzes/join-game-form";
import { requireAuth } from "@/lib/auth-helpers";

export default async function JoinQuizPage() {
	await requireAuth();
	return (
		<main className="mx-auto flex min-h-[70vh] max-w-lg items-center px-4">
			<JoinGameForm />
		</main>
	);
}
