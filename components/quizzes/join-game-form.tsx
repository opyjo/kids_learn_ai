"use client";

import { Gamepad2 } from "lucide-react";
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

export function JoinGameForm() {
	const [code, setCode] = useState("");
	const router = useRouter();
	return (
		<Card className="w-full">
			<CardHeader className="text-center">
				<Gamepad2 className="mx-auto h-10 w-10 text-purple-600" />
				<CardTitle>Join a Term Challenge</CardTitle>
				<CardDescription>
					Enter the six-character code your teacher shared.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form
					className="space-y-4"
					onSubmit={(event) => {
						event.preventDefault();
						if (code.length === 6)
							router.push(`/quiz/live/${code.toUpperCase()}`);
					}}
				>
					<div>
						<Label htmlFor="game-code">Game code</Label>
						<Input
							id="game-code"
							value={code}
							onChange={(event) =>
								setCode(
									event.target.value
										.replace(/[^a-z0-9]/gi, "")
										.slice(0, 6)
										.toUpperCase(),
								)
							}
							className="h-16 text-center font-mono text-3xl tracking-[0.3em]"
							autoComplete="off"
						/>
					</div>
					<Button className="w-full" size="lg" disabled={code.length !== 6}>
						Join game
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
