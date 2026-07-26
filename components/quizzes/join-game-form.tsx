"use client";

import { Gamepad2, LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export const GAME_CODE_LENGTH = 6;

/** Game codes are uppercase alphanumerics — see makeGameCode in lib/quizzes/server. */
export function normalizeGameCode(value: string) {
	return value
		.replace(/[^a-z0-9]/gi, "")
		.slice(0, GAME_CODE_LENGTH)
		.toUpperCase();
}

/**
 * Shared code entry used by both the dedicated join page and the dashboard
 * card. `size="lg"` is the full-page treatment; `size="md"` fits inside a
 * dashboard card next to other content.
 */
export function JoinGameCodeForm({
	size = "lg",
	inputId = "game-code",
}: {
	size?: "md" | "lg";
	inputId?: string;
}) {
	const [code, setCode] = useState("");
	const [navigating, setNavigating] = useState(false);
	const router = useRouter();
	const ready = code.length === GAME_CODE_LENGTH;
	const hintId = `${inputId}-hint`;
	return (
		<form
			className={cn(
				"gap-3",
				size === "lg" ? "space-y-4" : "flex flex-col sm:flex-row sm:items-end",
			)}
			onSubmit={(event) => {
				event.preventDefault();
				if (!ready || navigating) return;
				setNavigating(true);
				router.push(`/quiz/live/${code}`);
			}}
		>
			<div className={cn(size === "md" && "sm:w-56")}>
				<Label htmlFor={inputId}>Game code</Label>
				<Input
					id={inputId}
					name="gameCode"
					value={code}
					onChange={(event) => setCode(normalizeGameCode(event.target.value))}
					className={cn(
						"mt-1 text-center font-mono uppercase tracking-[0.3em]",
						size === "lg" ? "h-16 text-3xl" : "h-12 text-xl",
					)}
					placeholder="ABC123"
					maxLength={GAME_CODE_LENGTH}
					autoComplete="off"
					autoCapitalize="characters"
					autoCorrect="off"
					spellCheck={false}
					aria-describedby={hintId}
				/>
				<p id={hintId} className="sr-only">
					Six letters or numbers, shown on your teacher's screen.
				</p>
			</div>
			<Button
				type="submit"
				size={size === "lg" ? "lg" : "default"}
				className={cn(size === "lg" ? "w-full" : "h-12 sm:w-auto")}
				disabled={!ready || navigating}
			>
				{navigating ? (
					<LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
				) : null}
				{navigating ? "Joining…" : "Join game"}
			</Button>
		</form>
	);
}

export function JoinGameForm() {
	return (
		<Card className="w-full">
			<CardHeader className="text-center">
				<Gamepad2 className="mx-auto h-10 w-10 text-purple-600" />
				<CardTitle>Join a Live Challenge</CardTitle>
				<CardDescription>
					Enter the six-character code your teacher shared.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<JoinGameCodeForm />
			</CardContent>
		</Card>
	);
}
