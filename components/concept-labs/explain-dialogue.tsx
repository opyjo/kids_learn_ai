"use client";

import { Loader2, RefreshCw, Send, Sparkles } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
	childWordsFrom,
	type ExplainLabStats,
	MAX_CHILD_TURNS,
	openingQuestion,
} from "@/lib/concept-labs/explain";
import type {
	ConceptLabDefinition,
	DialogueTurn,
	ExplainRubricScore,
} from "@/lib/concept-labs/types";
import { cn } from "@/lib/utils";

export interface ExplainOutcome {
	text: string;
	dialogue: DialogueTurn[];
	rubricScore?: ExplainRubricScore;
}

interface ExplainDialogueProps {
	definition: ConceptLabDefinition;
	stats: ExplainLabStats;
	misconceptionTags: string[];
	onComplete: (outcome: ExplainOutcome) => void;
}

export function ExplainDialogue({
	definition,
	stats,
	misconceptionTags,
	onComplete,
}: ExplainDialogueProps) {
	const [dialogue, setDialogue] = useState<DialogueTurn[]>([
		{ role: "assistant", content: openingQuestion(definition) },
	]);
	const [input, setInput] = useState("");
	const [thinking, setThinking] = useState(false);
	const [wrapUp, setWrapUp] = useState(false);
	const [finishing, setFinishing] = useState(false);
	const [sendFailed, setSendFailed] = useState(false);
	const completedRef = useRef(false);

	const childTurns = dialogue.filter((t) => t.role === "user").length;
	const reachedCap = childTurns >= MAX_CHILD_TURNS;
	const canFinish = childTurns >= 1 && !thinking && !finishing;

	/** Ask BrightByte to reply to `next`. On failure the child's turn stays in
	 * the transcript and a visible retry is offered — no silent canned answer. */
	async function requestReply(next: DialogueTurn[]) {
		setThinking(true);
		setSendFailed(false);
		try {
			const res = await fetch("/api/concept-labs/explain", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					action: "reply",
					labId: definition.labId,
					stats,
					misconceptionTags,
					dialogue: next,
				}),
			});
			const data = await res.json();
			if (!res.ok || typeof data?.content !== "string") {
				setSendFailed(true);
				return;
			}
			setDialogue((prev) => [
				...prev,
				{ role: "assistant", content: data.content },
			]);
			setWrapUp(Boolean(data?.shouldWrapUp));
		} catch {
			setSendFailed(true);
		} finally {
			setThinking(false);
		}
	}

	async function send() {
		const text = input.trim();
		if (!text || thinking || reachedCap) return;

		const next: DialogueTurn[] = [...dialogue, { role: "user", content: text }];
		setDialogue(next);
		setInput("");
		await requestReply(next);
	}

	async function retry() {
		if (thinking) return;
		await requestReply(dialogue);
	}

	async function finish() {
		if (completedRef.current) return;
		completedRef.current = true;
		setFinishing(true);

		const childExplanation = childWordsFrom(dialogue);
		let rubricScore: ExplainRubricScore | undefined;
		try {
			const res = await fetch("/api/concept-labs/explain", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					action: "score",
					labId: definition.labId,
					childExplanation,
				}),
			});
			const data = await res.json();
			if (data?.score === 0 || data?.score === 1 || data?.score === 2) {
				rubricScore = data.score;
			}
		} catch {
			// Scoring is best-effort; never block completion on it.
		}

		onComplete({ text: childExplanation, dialogue, rubricScore });
	}

	function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			void send();
		}
	}

	return (
		<div className="space-y-3">
			<div className="space-y-2.5 rounded-xl border bg-muted/30 p-3 max-h-72 overflow-y-auto">
				{dialogue.map((turn, i) => (
					<div
						key={`${turn.role}-${i}`}
						className={cn(
							"flex",
							turn.role === "assistant" ? "justify-start" : "justify-end",
						)}
					>
						<div
							className={cn(
								"max-w-[85%] rounded-2xl px-3 py-2 text-sm",
								turn.role === "assistant"
									? "bg-background border text-foreground"
									: "bg-primary text-primary-foreground",
							)}
						>
							{turn.role === "assistant" && (
								<span className="mr-1 font-semibold text-primary">
									BrightByte:
								</span>
							)}
							{turn.content}
						</div>
					</div>
				))}
				{thinking && (
					<div className="flex items-center gap-2 text-xs text-muted-foreground">
						<Loader2 className="h-3.5 w-3.5 animate-spin" />
						BrightByte is thinking…
					</div>
				)}
				{sendFailed && !thinking && (
					<div
						className="flex items-center justify-between gap-2 rounded-lg bg-amber-50 dark:bg-amber-950/30 px-3 py-2 text-xs text-amber-800 dark:text-amber-200"
						role="alert"
					>
						<span>BrightByte couldn't hear you — let's try that again!</span>
						<Button
							variant="outline"
							size="sm"
							onClick={() => void retry()}
							className="h-7 rounded-lg gap-1 text-xs shrink-0"
						>
							<RefreshCw className="h-3 w-3" />
							Retry
						</Button>
					</div>
				)}
			</div>

			{!reachedCap && !wrapUp && (
				<div className="flex items-end gap-2">
					<Textarea
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={handleKeyDown}
						placeholder="Type your answer…"
						rows={2}
						disabled={thinking || finishing}
						className="rounded-xl resize-none"
					/>
					<Button
						onClick={() => void send()}
						disabled={!input.trim() || thinking || finishing}
						size="icon"
						className="rounded-xl shrink-0"
						aria-label="Send message"
					>
						<Send className="h-4 w-4" />
					</Button>
				</div>
			)}

			{(reachedCap || wrapUp) && (
				<p className="text-center text-xs text-muted-foreground">
					You've explained it beautifully — ready to move on!
				</p>
			)}

			<div className="flex justify-end">
				<Button
					onClick={() => void finish()}
					disabled={!canFinish}
					variant={reachedCap || wrapUp ? "default" : "outline"}
					className="rounded-xl gap-1.5"
				>
					{finishing ? (
						<Loader2 className="h-4 w-4 animate-spin" />
					) : (
						<Sparkles className="h-4 w-4" />
					)}
					I've got it →
				</Button>
			</div>
		</div>
	);
}
