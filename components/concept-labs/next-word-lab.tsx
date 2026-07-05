"use client";

import { MessageSquarePlus, Sparkles, Wand2, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	continuePhrase,
	nextWordCandidates,
	startingWords,
	tokenize,
	trainBigrams,
} from "@/lib/concept-labs/ngram";
import type { ConceptLabDefinition, LabAction } from "@/lib/concept-labs/types";
import { cn } from "@/lib/utils";

interface NextWordLabProps {
	definition: ConceptLabDefinition;
	onAction: (action: LabAction) => void;
	onCanContinueChange: (canContinue: boolean) => void;
}

/** Sentences required before the child can train. */
const MIN_SENTENCES = 3;
/** How many start-word chips to offer. */
const MAX_START_CHIPS = 8;
/** How far the machine continues a phrase. */
const MAX_CONTINUATION = 6;

/** The four-beat walkthrough shown before the child starts. */
const WALKTHROUGH: { emoji: string; label: string }[] = [
	{ emoji: "⌨️", label: "Type" },
	{ emoji: "🏷️", label: "Teach" },
	{ emoji: "✨", label: "Train" },
	{ emoji: "🔮", label: "Test" },
];

export function NextWordLab({
	definition,
	onAction,
	onCanContinueChange,
}: NextWordLabProps) {
	const [sentences, setSentences] = useState<string[]>([]);
	const [draft, setDraft] = useState("");
	const [stage, setStage] = useState<"teach" | "test">("teach");
	const [phrase, setPhrase] = useState<string[] | null>(null);
	const [startWord, setStartWord] = useState<string | null>(null);
	const [awaitingVerdict, setAwaitingVerdict] = useState(false);
	const [lastVerdict, setLastVerdict] = useState<"right" | "wrong" | null>(
		null,
	);
	const [hint, setHint] = useState<string | null>(null);

	const model = useMemo(() => trainBigrams(sentences), [sentences]);
	const startChips = useMemo(
		() => startingWords(model).slice(0, MAX_START_CHIPS),
		[model],
	);
	const canTrain = sentences.length >= MIN_SENTENCES;

	const starterChips = (definition.starterSentences ?? []).filter(
		(s) => !sentences.includes(s),
	);

	function teachSentence(raw: string) {
		const cleaned = raw.trim();
		if (tokenize(cleaned).length < 2) {
			setHint("A sentence needs at least two words to teach a pattern! ⌨️");
			return;
		}
		if (sentences.includes(cleaned)) {
			setHint("You already taught me that one — try a different sentence!");
			return;
		}
		setSentences((prev) => [...prev, cleaned]);
		onAction({ type: "add-sample", label: cleaned });
		setDraft("");
		setHint(null);
	}

	function removeSentence(sentence: string) {
		setSentences((prev) => prev.filter((s) => s !== sentence));
	}

	function train() {
		onAction({ type: "train", sampleCount: sentences.length });
		setStage("test");
		setPhrase(null);
		setStartWord(null);
		setLastVerdict(null);
		setHint(null);
	}

	function guessFrom(word: string) {
		const continued = continuePhrase(model, word, MAX_CONTINUATION);
		setStartWord(word);
		setPhrase(continued);
		setAwaitingVerdict(true);
		setLastVerdict(null);
	}

	function verdict(wasRight: boolean) {
		if (!phrase) return;
		const predicted = phrase.join(" ");
		onAction({
			type: "test",
			predicted,
			expected: wasRight ? predicted : "something-else",
			correct: wasRight,
		});
		setAwaitingVerdict(false);
		setPhrase(null);
		setStartWord(null);
		setLastVerdict(wasRight ? "right" : "wrong");
		onCanContinueChange(true);
	}

	function backToTeaching() {
		setStage("teach");
		setPhrase(null);
		setStartWord(null);
		setAwaitingVerdict(false);
		setLastVerdict(null);
	}

	function resetAll() {
		setSentences([]);
		setDraft("");
		setStage("teach");
		setPhrase(null);
		setStartWord(null);
		setAwaitingVerdict(false);
		setLastVerdict(null);
		setHint(null);
		onAction({ type: "reset" });
		onCanContinueChange(false);
	}

	// The evidence panel — the counts behind the machine's very first pick, so
	// the mechanism is visible, not just narrated.
	const firstStepEvidence =
		startWord !== null ? nextWordCandidates(model, startWord) : [];

	return (
		<div className="space-y-4">
			{stage === "teach" && sentences.length === 0 && (
				<ol
					className="flex items-center justify-center gap-1 text-xs text-muted-foreground"
					aria-label="How this lab works"
				>
					{WALKTHROUGH.map((step, i) => (
						<li key={step.label} className="flex items-center gap-1">
							<span className="flex flex-col items-center gap-0.5 rounded-lg bg-muted/50 px-2.5 py-1.5">
								<span aria-hidden="true" className="text-base">
									{step.emoji}
								</span>
								<span className="font-semibold">{step.label}</span>
							</span>
							{i < WALKTHROUGH.length - 1 && <span aria-hidden="true">→</span>}
						</li>
					))}
				</ol>
			)}

			{hint && (
				<p
					className="text-center text-sm font-medium text-amber-600"
					role="status"
				>
					{hint}
				</p>
			)}

			{stage === "teach" ? (
				<div className="space-y-3">
					<div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
						<MessageSquarePlus className="h-4 w-4" />
						Teach the machine some sentences:
					</div>

					{starterChips.length > 0 && (
						<div className="flex flex-wrap justify-center gap-1.5">
							{starterChips.map((sentence) => (
								<button
									key={sentence}
									type="button"
									onClick={() => teachSentence(sentence)}
									className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/10"
								>
									+ “{sentence}”
								</button>
							))}
						</div>
					)}

					<form
						className="flex items-center gap-2"
						onSubmit={(e) => {
							e.preventDefault();
							teachSentence(draft);
						}}
					>
						<Input
							value={draft}
							onChange={(e) => setDraft(e.target.value)}
							placeholder="…or type your own sentence"
							className="rounded-xl"
							aria-label="Type a sentence to teach the machine"
						/>
						<Button
							type="submit"
							variant="outline"
							disabled={!draft.trim()}
							className="rounded-xl shrink-0"
						>
							Teach it
						</Button>
					</form>

					{sentences.length > 0 && (
						<ul className="space-y-1.5" aria-label="Sentences you taught">
							{sentences.map((sentence) => (
								<li
									key={sentence}
									className="flex items-center justify-between gap-2 rounded-lg bg-muted/40 px-3 py-1.5 text-sm"
								>
									<span>“{sentence}”</span>
									<button
										type="button"
										onClick={() => removeSentence(sentence)}
										className="text-muted-foreground hover:text-foreground"
										aria-label={`Remove sentence: ${sentence}`}
									>
										<X className="h-3.5 w-3.5" />
									</button>
								</li>
							))}
						</ul>
					)}

					<Button
						onClick={train}
						disabled={!canTrain}
						className="w-full rounded-xl"
					>
						<Sparkles className="h-4 w-4 mr-1.5" />
						{canTrain
							? "Train the machine!"
							: `Teach at least ${MIN_SENTENCES} sentences first`}
					</Button>
				</div>
			) : (
				<div className="space-y-3">
					{!awaitingVerdict && (
						<>
							{lastVerdict === "right" && (
								<div
									className="animate-in zoom-in-50 duration-500 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 p-3 text-center"
									role="status"
								>
									<span className="text-2xl" aria-hidden="true">
										🎉✨🎉
									</span>
									<p className="text-sm font-bold text-emerald-700 dark:text-emerald-300">
										It sounded just like your sentences — pattern power!
									</p>
								</div>
							)}
							{lastVerdict === "wrong" && (
								<div
									className="animate-in fade-in duration-300 rounded-xl bg-amber-50 dark:bg-amber-950/30 p-3 text-center text-sm text-amber-800 dark:text-amber-200"
									role="status"
								>
									Interesting! The machine can only remix word patterns from
									your sentences — it doesn't know what they mean. Teaching it
									more sentences gives it more patterns to use!
								</div>
							)}
							<p className="text-center text-sm text-muted-foreground">
								Pick a word — the machine will keep choosing the word it saw
								most often next:
							</p>
							<div
								role="group"
								className="flex flex-wrap justify-center gap-1.5"
								aria-label="Starting words"
							>
								{startChips.map((chip) => (
									<button
										key={chip.word}
										type="button"
										onClick={() => guessFrom(chip.word)}
										className="rounded-full border-2 border-primary/40 bg-primary/5 px-3.5 py-1.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
									>
										{chip.word}
									</button>
								))}
							</div>
							<div className="flex justify-center">
								<Button
									variant="ghost"
									size="sm"
									onClick={backToTeaching}
									className="text-xs text-muted-foreground"
								>
									← Teach it more sentences
								</Button>
							</div>
						</>
					)}

					{awaitingVerdict && phrase && (
						<div className="space-y-3 rounded-xl border-2 border-primary/30 bg-primary/5 p-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
							<div className="flex items-center justify-center gap-2">
								<Wand2 className="h-4 w-4 text-primary" />
								<p className="text-lg font-bold">
									{phrase.map((word, i) => (
										<span
											key={`${word}-${i}`}
											className={cn(i === 0 && "underline decoration-primary")}
										>
											{i > 0 && " "}
											{word}
										</span>
									))}
									…
								</p>
							</div>

							{firstStepEvidence.length > 0 && (
								<div className="rounded-lg bg-background/60 p-2.5 text-center text-xs text-muted-foreground">
									<p className="font-medium">
										Why? After “{startWord}”, your sentences had:
									</p>
									<p className="mt-1">
										{firstStepEvidence
											.slice(0, 4)
											.map((c) => `${c.word} ×${c.count}`)
											.join(" · ")}
									</p>
									<p className="mt-1">
										I always pick the one I saw most — I'm counting, not
										thinking!
									</p>
								</div>
							)}

							<p className="text-center text-sm font-medium">
								Did that sound like your sentences?
							</p>
							<p className="text-center text-[11px] text-muted-foreground">
								Answer honestly — real scientists report what actually happened!
								🔬
							</p>
							<div className="flex justify-center gap-3">
								<Button
									onClick={() => verdict(true)}
									className="rounded-xl bg-emerald-600 hover:bg-emerald-700"
								>
									👍 Yes!
								</Button>
								<Button
									onClick={() => verdict(false)}
									variant="outline"
									className="rounded-xl border-2"
								>
									👎 Not really
								</Button>
							</div>
						</div>
					)}
				</div>
			)}

			<div className="flex items-center justify-between pt-1">
				<span className="text-xs text-muted-foreground">
					{sentences.length} sentence{sentences.length === 1 ? "" : "s"} taught
				</span>
				<Button
					variant="ghost"
					size="sm"
					onClick={resetAll}
					className={cn(
						"text-xs text-muted-foreground",
						sentences.length === 0 && "invisible",
					)}
				>
					Start over
				</Button>
			</div>
		</div>
	);
}
