"use client";

import { CheckCircle2, HelpCircle, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { Probe, ProbeResponse } from "@/lib/concept-labs/types";
import { cn } from "@/lib/utils";

interface ProbeRunnerProps {
	probe: Probe;
	/**
	 * When true (the Apply phase), the child sees whether they were right.
	 * When false (the Predict phase), we affirm the guess without spoiling the
	 * discovery they're about to make in the lab.
	 */
	revealCorrectness: boolean;
	ctaLabel: string;
	onSubmit: (response: ProbeResponse) => void;
}

export function ProbeRunner({
	probe,
	revealCorrectness,
	ctaLabel,
	onSubmit,
}: ProbeRunnerProps) {
	const [selectedId, setSelectedId] = useState<string | null>(null);

	const isCorrect = selectedId === probe.correctOptionId;

	function handleContinue() {
		if (!selectedId) return;
		onSubmit({
			optionId: selectedId,
			isCorrect: selectedId === probe.correctOptionId,
			misconceptionTag: probe.misconceptionTags[selectedId],
		});
	}

	return (
		<div className="space-y-4">
			<p className="text-base font-semibold text-foreground">
				{probe.question}
			</p>

			<div className="space-y-2.5">
				{probe.options.map((option) => {
					const isSelected = selectedId === option.id;
					const showAsCorrect =
						revealCorrectness &&
						selectedId !== null &&
						option.id === probe.correctOptionId;
					const showAsWrong = revealCorrectness && isSelected && !isCorrect;

					return (
						<button
							key={option.id}
							type="button"
							onClick={() => setSelectedId(option.id)}
							aria-pressed={isSelected}
							className={cn(
								"w-full text-left rounded-xl border-2 px-4 py-3 text-sm font-medium transition-colors",
								"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
								!isSelected &&
									"border-border bg-background hover:border-primary/50 hover:bg-primary/5",
								isSelected &&
									!revealCorrectness &&
									"border-primary bg-primary/10",
								showAsCorrect &&
									"border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30",
								showAsWrong &&
									"border-amber-500 bg-amber-50 dark:bg-amber-950/30",
							)}
						>
							<span className="flex items-center gap-2">
								{showAsCorrect && (
									<CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
								)}
								{option.text}
							</span>
						</button>
					);
				})}
			</div>

			{selectedId && (
				<div
					className={cn(
						"flex items-start gap-2 rounded-lg p-3 text-sm",
						!revealCorrectness && "bg-primary/5 text-foreground",
						revealCorrectness &&
							isCorrect &&
							"bg-emerald-50 text-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-100",
						revealCorrectness &&
							!isCorrect &&
							"bg-amber-50 text-amber-900 dark:bg-amber-950/30 dark:text-amber-100",
					)}
				>
					{!revealCorrectness ? (
						<>
							<Sparkles className="h-4 w-4 shrink-0 text-primary mt-0.5" />
							<span>Great guess! Let's find out by teaching the machine.</span>
						</>
					) : isCorrect ? (
						<>
							<CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
							<span>Exactly right — you used what you just learned! 🎉</span>
						</>
					) : (
						<>
							<HelpCircle className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
							<span>
								Good thinking! Remember: an AI only knows what its examples
								showed it.
							</span>
						</>
					)}
				</div>
			)}

			<div className="flex justify-end">
				<Button
					onClick={handleContinue}
					disabled={!selectedId}
					className="rounded-xl"
				>
					{ctaLabel}
				</Button>
			</div>
		</div>
	);
}
