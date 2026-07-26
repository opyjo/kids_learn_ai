import { Gamepad2 } from "lucide-react";
import { JoinGameCodeForm } from "@/components/quizzes/join-game-form";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export function JoinLiveGameCard() {
	return (
		<Card className="mb-5 rounded-2xl border-0 shadow-xl ring-1 ring-purple-200/70 bg-gradient-to-r from-purple-50 to-fuchsia-50 dark:ring-purple-500/20 dark:from-purple-950/30 dark:to-fuchsia-950/30">
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<Gamepad2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
					Live Class Challenge
				</CardTitle>
				<CardDescription>
					Playing a live quiz with your teacher? Type the six-character code
					from their screen to jump into the lobby.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<JoinGameCodeForm size="md" inputId="dashboard-game-code" />
			</CardContent>
		</Card>
	);
}
