"use client";

import { BrainCircuit, PartyPopper } from "lucide-react";
import { useCallback, useMemo, useRef, useState } from "react";
import {
	ExplainDialogue,
	type ExplainOutcome,
} from "@/components/concept-labs/explain-dialogue";
import { NextWordLab } from "@/components/concept-labs/next-word-lab";
import { ProbeRunner } from "@/components/concept-labs/probe-runner";
import { TrainableClassifierLab } from "@/components/concept-labs/trainable-classifier-lab";
import { Button } from "@/components/ui/button";
import {
	type Cohort,
	deriveSeed,
	resolveCohort,
} from "@/lib/concept-labs/cohort";
import { LabTelemetryRecorder } from "@/lib/concept-labs/telemetry";
import type {
	ConceptLabDefinition,
	LabAction,
	LabContext,
	LabeledSample,
	LabPhase,
	LabSessionSummary,
} from "@/lib/concept-labs/types";
import { cn } from "@/lib/utils";

interface ConceptLabHostProps {
	definition: ConceptLabDefinition;
	/** Signed-in learner id — used for cohort assignment and to persist results. */
	userId?: string;
	/** Where this attempt happens; standalone runs are excluded from the lesson experiment. */
	context?: LabContext;
	/** Called once per completed attempt with the anonymizable session summary. */
	onComplete?: (summary: LabSessionSummary) => void;
}

const STEPS: { phase: LabPhase; label: string }[] = [
	{ phase: "predict", label: "Predict" },
	{ phase: "play", label: "Play" },
	{ phase: "explain", label: "Explain" },
	{ phase: "apply", label: "Apply" },
];

// The baseline arm answers the same probes with only the static lesson content
// in between — no Play, no Explain.
const BASELINE_STEPS: { phase: LabPhase; label: string }[] = [
	{ phase: "predict", label: "Predict" },
	{ phase: "apply", label: "Apply" },
];

export function ConceptLabHost({
	definition,
	userId,
	context = "lesson",
	onComplete,
}: ConceptLabHostProps) {
	const recorderRef = useRef<LabTelemetryRecorder>(
		new LabTelemetryRecorder(definition.labId),
	);
	// The baseline-vs-lab A/B stays OFF until explicitly enabled, so the live
	// product never hides the lab from students. When off, everyone gets the full
	// loop and sessions still persist (lab-arm data accrues). Standalone
	// playground runs are never split — a "baseline" (no-lab) arm makes no sense
	// outside a lesson, and playground data is excluded from the experiment.
	const [cohort] = useState<Cohort>(() =>
		resolveCohort(
			userId,
			definition.labId,
			context === "lesson" &&
				process.env.NEXT_PUBLIC_CONCEPT_LAB_EXPERIMENT === "on",
		),
	);
	const seedRef = useRef(deriveSeed(userId ?? "anon", definition.labId));

	const [phase, setPhase] = useState<LabPhase>("predict");
	const [canContinuePlay, setCanContinuePlay] = useState(false);
	const [predictTag, setPredictTag] = useState<string | undefined>(undefined);
	const [summary, setSummary] = useState<LabSessionSummary | null>(null);
	// Replay support: the trained machine survives "Play again with my machine".
	const [attempt, setAttempt] = useState(0);
	const [keepSamples, setKeepSamples] = useState(false);
	const lastSamplesRef = useRef<LabeledSample[]>([]);

	const steps = cohort === "baseline" ? BASELINE_STEPS : STEPS;
	const stepIndex = steps.findIndex((s) => s.phase === phase);
	const live = recorderRef.current.summary();

	const handleAction = useCallback((action: LabAction) => {
		recorderRef.current.recordAction(action);
	}, []);

	const handleSamplesChange = useCallback((samples: LabeledSample[]) => {
		lastSamplesRef.current = samples;
	}, []);

	function goTo(next: LabPhase) {
		recorderRef.current.recordPhase(next);
		setPhase(next);
	}

	function finishPredict(optionId: string, isCorrect: boolean, tag?: string) {
		recorderRef.current.recordPredict({
			optionId,
			isCorrect,
			misconceptionTag: tag,
		});
		setPredictTag(tag);
		// Baseline arm skips the interactive loop straight to the Apply probe.
		goTo(cohort === "baseline" ? "apply" : "play");
	}

	function handleExplainComplete(outcome: ExplainOutcome) {
		recorderRef.current.recordExplain(
			outcome.text,
			outcome.dialogue,
			outcome.rubricScore,
		);
		goTo("apply");
	}

	function finishApply(optionId: string, isCorrect: boolean, tag?: string) {
		recorderRef.current.recordApply({
			optionId,
			isCorrect,
			misconceptionTag: tag,
		});
		recorderRef.current.recordPhase("done");
		const result = recorderRef.current.summary();
		setSummary(result);
		setPhase("done");
		onComplete?.(result);
		persistSession(result);
	}

	function persistSession(result: LabSessionSummary) {
		// Fire-and-forget; the child has finished, so storage must never block
		// them. Signed-out attempts are dropped server-side.
		void fetch("/api/concept-labs/sessions", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				summary: result,
				cohort,
				seed: seedRef.current,
				context,
			}),
		}).catch(() => {});
	}

	function playAgain(withTrainedMachine: boolean) {
		recorderRef.current = new LabTelemetryRecorder(definition.labId);
		setKeepSamples(withTrainedMachine);
		if (!withTrainedMachine) lastSamplesRef.current = [];
		setAttempt((n) => n + 1);
		setCanContinuePlay(false);
		setPredictTag(undefined);
		setSummary(null);
		setPhase("predict");
	}

	const movedForward = useMemo(() => {
		if (!summary) return false;
		// The child arrived holding a misconception (wrong predict) and left
		// applying the concept correctly to a brand-new situation.
		return (
			summary.predict?.isCorrect === false && summary.apply?.isCorrect === true
		);
	}, [summary]);

	return (
		<div className="space-y-5">
			<div className="flex items-center gap-2.5">
				<BrainCircuit className="h-5 w-5 text-primary" />
				<div>
					<h3 className="text-sm font-bold text-foreground">
						{definition.title}
					</h3>
					<p className="text-xs text-muted-foreground">{definition.concept}</p>
				</div>
			</div>

			{phase !== "done" && (
				<ol className="flex items-center gap-1.5" aria-label="Lab progress">
					{steps.map((step, i) => (
						<li
							key={step.phase}
							className="flex flex-1 items-center gap-1.5"
							aria-current={i === stepIndex ? "step" : undefined}
						>
							<div
								className={cn(
									"flex flex-1 flex-col items-center gap-1 rounded-lg py-1.5 text-[11px] font-semibold transition-colors",
									i < stepIndex && "text-emerald-600",
									i === stepIndex && "text-primary",
									i > stepIndex && "text-muted-foreground/50",
								)}
							>
								<span
									className={cn(
										"flex h-6 w-6 items-center justify-center rounded-full border-2 text-xs",
										i < stepIndex &&
											"border-emerald-500 bg-emerald-500 text-white",
										i === stepIndex && "border-primary text-primary",
										i > stepIndex && "border-muted-foreground/30",
									)}
								>
									{i < stepIndex ? "✓" : i + 1}
								</span>
								{step.label}
							</div>
						</li>
					))}
				</ol>
			)}

			{phase === "predict" && (
				<div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
					<p className="text-xs font-semibold uppercase tracking-wide text-primary">
						Step 1 · Make a prediction
					</p>
					<ProbeRunner
						probe={definition.predictProbe}
						revealCorrectness={false}
						ctaLabel="I've made my guess →"
						onSubmit={(r) =>
							finishPredict(r.optionId, r.isCorrect, r.misconceptionTag)
						}
					/>
				</div>
			)}

			{phase === "play" && (
				<div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
					<p className="text-xs font-semibold uppercase tracking-wide text-primary">
						Step 2 · Teach the machine
					</p>
					{definition.primitive === "next-word-guesser" ? (
						<NextWordLab
							key={attempt}
							definition={definition}
							onAction={handleAction}
							onCanContinueChange={setCanContinuePlay}
						/>
					) : (
						<TrainableClassifierLab
							key={attempt}
							definition={definition}
							onAction={handleAction}
							onCanContinueChange={setCanContinuePlay}
							initialSamples={keepSamples ? lastSamplesRef.current : undefined}
							onSamplesChange={handleSamplesChange}
						/>
					)}
					<div className="flex justify-end">
						<Button
							onClick={() => goTo("explain")}
							disabled={!canContinuePlay}
							className="rounded-xl"
						>
							{canContinuePlay
								? "Continue →"
								: "Train, then test the machine to continue"}
						</Button>
					</div>
				</div>
			)}

			{phase === "explain" && (
				<div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
					<p className="text-xs font-semibold uppercase tracking-wide text-primary">
						Step 3 · Explain it to BrightByte
					</p>
					<p className="text-sm font-medium text-foreground">
						{definition.explainPrompt}
					</p>
					<ExplainDialogue
						definition={definition}
						stats={{
							trainedSampleCount: live.trainedSampleCount,
							testCount: live.testCount,
							testCorrectCount: live.testCorrectCount,
						}}
						misconceptionTags={predictTag ? [predictTag] : []}
						onComplete={handleExplainComplete}
					/>
				</div>
			)}

			{phase === "apply" && (
				<div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
					<p className="text-xs font-semibold uppercase tracking-wide text-primary">
						Step {steps.length} · Use what you learned
					</p>
					<ProbeRunner
						probe={definition.applyProbe}
						revealCorrectness
						ctaLabel="Finish the lab 🎉"
						onSubmit={(r) =>
							finishApply(r.optionId, r.isCorrect, r.misconceptionTag)
						}
					/>
				</div>
			)}

			{phase === "done" && summary && (
				<div className="space-y-4 rounded-xl border-2 border-emerald-200/60 bg-emerald-50/60 dark:border-emerald-900/60 dark:bg-emerald-950/20 p-5 text-center animate-in fade-in zoom-in-95 duration-500">
					<PartyPopper className="mx-auto h-8 w-8 text-emerald-600" />
					<h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-100">
						You did it!
					</h3>
					<p className="text-sm text-emerald-900/90 dark:text-emerald-100/90">
						{movedForward
							? "You changed your mind after seeing the machine learn — that's exactly how real scientists think! 🔬"
							: "You taught a machine and used what you learned in a brand-new situation. 🌟"}
					</p>
					<p className="text-xs text-emerald-800/80 dark:text-emerald-200/80">
						You taught {summary.trainedSampleCount} examples and tested the
						machine {summary.testCount} time
						{summary.testCount === 1 ? "" : "s"}.
					</p>
					<div className="flex flex-wrap justify-center gap-2">
						<Button
							onClick={() => playAgain(false)}
							variant="outline"
							className="rounded-xl"
						>
							Play again
						</Button>
						{definition.primitive === "trainable-classifier" &&
							lastSamplesRef.current.length > 0 && (
								<Button onClick={() => playAgain(true)} className="rounded-xl">
									Keep teaching my machine ({lastSamplesRef.current.length}{" "}
									examples)
								</Button>
							)}
					</div>
				</div>
			)}
		</div>
	);
}
