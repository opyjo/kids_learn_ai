"use client";

import { Brush, Eraser, Sparkles, Undo2 } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { detectDatasetSkew } from "@/lib/concept-labs/bias";
import {
	DEFAULT_FEATURE_SIZE,
	inkAmount,
	rgbaToFeatureVector,
} from "@/lib/concept-labs/features";
import { classify } from "@/lib/concept-labs/knn";
import type {
	ClassificationResult,
	ConceptLabDefinition,
	LabAction,
	LabeledSample,
} from "@/lib/concept-labs/types";
import { cn } from "@/lib/utils";

interface TrainableClassifierLabProps {
	definition: ConceptLabDefinition;
	onAction: (action: LabAction) => void;
	onCanContinueChange: (canContinue: boolean) => void;
	/** Resume with a previously-trained machine ("keep teaching" replays). */
	initialSamples?: LabeledSample[];
	/** Reports the current training set so the host can offer to keep it. */
	onSamplesChange?: (samples: LabeledSample[]) => void;
}

const CANVAS_SIZE = 260;
const STROKE_WIDTH = 16;
/** Below this much total ink we treat the canvas as blank. */
const MIN_INK = 4;
/** Samples required per class before the child can train. */
const MIN_PER_CLASS = 2;
/** Side length of the little preview kept per taught example. */
const THUMBNAIL_SIZE = 48;
/** How many undo steps we keep (one snapshot per stroke). */
const MAX_UNDO = 24;

type Verdict = "right" | "wrong" | null;

/** The four-beat walkthrough shown before the child starts. */
const WALKTHROUGH: { emoji: string; label: string }[] = [
	{ emoji: "✏️", label: "Draw" },
	{ emoji: "🏷️", label: "Teach" },
	{ emoji: "✨", label: "Train" },
	{ emoji: "🔮", label: "Test" },
];

export function TrainableClassifierLab({
	definition,
	onAction,
	onCanContinueChange,
	initialSamples,
	onSamplesChange,
}: TrainableClassifierLabProps) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const drawingRef = useRef(false);
	const lastPointRef = useRef<{ x: number; y: number } | null>(null);
	const undoStackRef = useRef<ImageData[]>([]);

	const [samples, setSamples] = useState<LabeledSample[]>(
		() => initialSamples ?? [],
	);
	const [stage, setStage] = useState<"teach" | "test">("teach");
	const [result, setResult] = useState<ClassificationResult | null>(null);
	const [awaitingVerdict, setAwaitingVerdict] = useState(false);
	const [lastVerdict, setLastVerdict] = useState<Verdict>(null);
	const [hint, setHint] = useState<string | null>(null);
	const [canUndo, setCanUndo] = useState(false);

	const classes = definition.classes;
	const countFor = (label: string) =>
		samples.filter((s) => s.label === label).length;
	const canTrain = classes.every((label) => countFor(label) >= MIN_PER_CLASS);

	const skew = useMemo(
		() => detectDatasetSkew(samples, classes),
		[samples, classes],
	);

	useEffect(() => {
		onSamplesChange?.(samples);
	}, [samples, onSamplesChange]);

	const paintWhite = useCallback((ctx: CanvasRenderingContext2D) => {
		ctx.fillStyle = "#ffffff";
		ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
	}, []);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		paintWhite(ctx);
		ctx.lineCap = "round";
		ctx.lineJoin = "round";
		ctx.strokeStyle = "#1f2937";
		ctx.lineWidth = STROKE_WIDTH;
	}, [paintWhite]);

	function snapshotForUndo() {
		const ctx = canvasRef.current?.getContext("2d");
		if (!ctx) return;
		undoStackRef.current.push(ctx.getImageData(0, 0, CANVAS_SIZE, CANVAS_SIZE));
		if (undoStackRef.current.length > MAX_UNDO) undoStackRef.current.shift();
		setCanUndo(true);
	}

	function undoStroke() {
		const ctx = canvasRef.current?.getContext("2d");
		const previous = undoStackRef.current.pop();
		if (ctx && previous) ctx.putImageData(previous, 0, 0);
		setCanUndo(undoStackRef.current.length > 0);
	}

	function clearCanvas(options?: { undoable?: boolean }) {
		const canvas = canvasRef.current;
		const ctx = canvas?.getContext("2d");
		if (!canvas || !ctx) return;
		if (options?.undoable) {
			snapshotForUndo();
		} else {
			undoStackRef.current = [];
			setCanUndo(false);
		}
		paintWhite(ctx);
	}

	function pointFromEvent(e: React.PointerEvent<HTMLCanvasElement>) {
		const canvas = canvasRef.current;
		if (!canvas) return { x: 0, y: 0 };
		const rect = canvas.getBoundingClientRect();
		return {
			x: ((e.clientX - rect.left) / rect.width) * CANVAS_SIZE,
			y: ((e.clientY - rect.top) / rect.height) * CANVAS_SIZE,
		};
	}

	function handlePointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
		e.preventDefault();
		canvasRef.current?.setPointerCapture(e.pointerId);
		snapshotForUndo();
		drawingRef.current = true;
		lastPointRef.current = pointFromEvent(e);
	}

	function handlePointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
		if (!drawingRef.current) return;
		const ctx = canvasRef.current?.getContext("2d");
		const last = lastPointRef.current;
		if (!ctx || !last) return;
		const point = pointFromEvent(e);
		ctx.beginPath();
		ctx.moveTo(last.x, last.y);
		ctx.lineTo(point.x, point.y);
		ctx.stroke();
		lastPointRef.current = point;
	}

	function handlePointerUp() {
		drawingRef.current = false;
		lastPointRef.current = null;
	}

	/** Downsample the current drawing to a feature vector, or null if blank. */
	function readFeatures(): number[] | null {
		const canvas = canvasRef.current;
		if (!canvas) return null;
		const small = document.createElement("canvas");
		small.width = DEFAULT_FEATURE_SIZE;
		small.height = DEFAULT_FEATURE_SIZE;
		const sctx = small.getContext("2d");
		if (!sctx) return null;
		sctx.drawImage(canvas, 0, 0, DEFAULT_FEATURE_SIZE, DEFAULT_FEATURE_SIZE);
		const { data } = sctx.getImageData(
			0,
			0,
			DEFAULT_FEATURE_SIZE,
			DEFAULT_FEATURE_SIZE,
		);
		const features = rgbaToFeatureVector(data);
		return inkAmount(features) < MIN_INK ? null : features;
	}

	/** A small preview of the current drawing, for the nearest-neighbour view. */
	function readThumbnail(): string | undefined {
		const canvas = canvasRef.current;
		if (!canvas) return undefined;
		const small = document.createElement("canvas");
		small.width = THUMBNAIL_SIZE;
		small.height = THUMBNAIL_SIZE;
		const sctx = small.getContext("2d");
		if (!sctx) return undefined;
		sctx.drawImage(canvas, 0, 0, THUMBNAIL_SIZE, THUMBNAIL_SIZE);
		return small.toDataURL("image/png");
	}

	function teach(label: string) {
		const features = readFeatures();
		if (!features) {
			setHint("Draw something first, then teach the machine! ✏️");
			return;
		}
		setSamples((prev) => [
			...prev,
			{ label, features, thumbnail: readThumbnail() },
		]);
		onAction({ type: "add-sample", label });
		setHint(null);
		clearCanvas();
	}

	function train() {
		onAction({ type: "train", sampleCount: samples.length });
		setStage("test");
		setResult(null);
		setLastVerdict(null);
		setHint(null);
		clearCanvas();
	}

	function guess() {
		const features = readFeatures();
		if (!features) {
			setHint("Draw a picture, then ask the machine to guess! ✏️");
			return;
		}
		const outcome = classify(samples, features, 3);
		setResult(outcome);
		setAwaitingVerdict(true);
		setLastVerdict(null);
		setHint(null);
	}

	function verdict(wasRight: boolean) {
		if (!result) return;
		const fallbackWrong =
			classes.find((c) => c !== result.label) ?? classes[0] ?? "";
		const expected = wasRight
			? (result.label ?? classes[0] ?? "")
			: fallbackWrong;
		onAction({
			type: "test",
			predicted: result.label,
			expected,
			correct: wasRight,
		});
		setAwaitingVerdict(false);
		setResult(null);
		setLastVerdict(wasRight ? "right" : "wrong");
		clearCanvas();
		onCanContinueChange(true);
	}

	function backToTeaching() {
		setStage("teach");
		setResult(null);
		setAwaitingVerdict(false);
		setLastVerdict(null);
		setHint(null);
		clearCanvas();
	}

	function resetAll() {
		setSamples([]);
		setStage("teach");
		setResult(null);
		setAwaitingVerdict(false);
		setLastVerdict(null);
		setHint(null);
		clearCanvas();
		onAction({ type: "reset" });
		onCanContinueChange(false);
	}

	const emoji = (label: string) => definition.classEmoji?.[label] ?? "";

	// Nudges that make the bias trap findable instead of hoping the child
	// stumbles into it.
	const teachNudge = skew.overRepresented
		? `You've taught a lot more ${skew.overRepresented.label}s than anything else — the machine will mostly get good at ${skew.overRepresented.label}s! ⚖️`
		: skew.lowVariety.length > 0
			? `Your ${skew.lowVariety.join(" and ")} drawings look really similar. The machine will only know that one kind — try some different-looking ones! 🎨`
			: null;

	const wrongTestNudge =
		skew.lowVariety.length > 0
			? `The machine only knows the examples you taught it — and your ${skew.lowVariety.join(" and ")} drawings were all very alike. Teaching more different-looking ones would help it!`
			: skew.overRepresented
				? `The machine saw way more ${skew.overRepresented.label}s than anything else, so it leans that way. Evening out your examples would help it!`
				: `That's a great discovery — the machine only knows what your examples showed it. Want to teach it more and try again?`;

	return (
		<div className="space-y-4">
			{stage === "teach" && samples.length === 0 && (
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

			{definition.biasTrapHint && stage === "teach" && (
				<div className="rounded-lg border border-purple-200/60 bg-purple-50/70 dark:border-purple-900/60 dark:bg-purple-950/20 p-3 text-sm text-purple-900 dark:text-purple-100">
					{definition.biasTrapHint}
				</div>
			)}

			<div className="flex flex-col items-center gap-3">
				<canvas
					ref={canvasRef}
					width={CANVAS_SIZE}
					height={CANVAS_SIZE}
					onPointerDown={handlePointerDown}
					onPointerMove={handlePointerMove}
					onPointerUp={handlePointerUp}
					onPointerLeave={handlePointerUp}
					className="touch-none rounded-2xl border-2 border-border bg-white shadow-sm cursor-crosshair"
					style={{ width: CANVAS_SIZE, height: CANVAS_SIZE, maxWidth: "100%" }}
					aria-label="Drawing canvas — draw with your mouse, finger, or stylus"
				/>
				<div className="flex items-center gap-1">
					<Button
						variant="ghost"
						size="sm"
						onClick={undoStroke}
						disabled={!canUndo}
						className="gap-1.5 text-xs text-muted-foreground"
					>
						<Undo2 className="h-3.5 w-3.5" />
						Undo
					</Button>
					<Button
						variant="ghost"
						size="sm"
						onClick={() => clearCanvas({ undoable: true })}
						className="gap-1.5 text-xs text-muted-foreground"
					>
						<Eraser className="h-3.5 w-3.5" />
						Clear drawing
					</Button>
				</div>
			</div>

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
						<Brush className="h-4 w-4" />
						Draw a picture, then tell the machine what it is:
					</div>
					<div
						className={cn(
							"grid gap-3",
							classes.length === 2 ? "grid-cols-2" : "grid-cols-3",
						)}
					>
						{classes.map((label) => (
							<Button
								key={label}
								variant="outline"
								onClick={() => teach(label)}
								className="h-auto flex-col gap-1 py-3 rounded-xl border-2"
							>
								<span className="text-2xl">{emoji(label)}</span>
								<span className="text-sm font-semibold">Teach as {label}</span>
								<span className="text-xs text-muted-foreground">
									{countFor(label)} taught
								</span>
							</Button>
						))}
					</div>
					{teachNudge && (
						<p
							className="rounded-lg bg-amber-50 dark:bg-amber-950/30 p-2.5 text-center text-xs font-medium text-amber-800 dark:text-amber-200"
							role="status"
						>
							{teachNudge}
						</p>
					)}
					<Button
						onClick={train}
						disabled={!canTrain}
						className="w-full rounded-xl"
					>
						<Sparkles className="h-4 w-4 mr-1.5" />
						{canTrain
							? "Train the machine!"
							: `Teach at least ${MIN_PER_CLASS} of each first`}
					</Button>
				</div>
			) : (
				<div className="space-y-3">
					{!awaitingVerdict && !result && (
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
										It got it right — your teaching worked!
									</p>
								</div>
							)}
							{lastVerdict === "wrong" && (
								<div
									className="animate-in fade-in duration-300 rounded-xl bg-amber-50 dark:bg-amber-950/30 p-3 text-center text-sm text-amber-800 dark:text-amber-200"
									role="status"
								>
									{wrongTestNudge}
								</div>
							)}
							<p className="text-center text-sm text-muted-foreground">
								{lastVerdict
									? "Draw another picture to test it again!"
									: "Now draw a new picture and see if the machine guesses right!"}
							</p>
							<Button onClick={guess} className="w-full rounded-xl">
								🔮 Ask the machine to guess
							</Button>
							<div className="flex justify-center">
								<Button
									variant="ghost"
									size="sm"
									onClick={backToTeaching}
									className="text-xs text-muted-foreground"
								>
									← Teach it more examples
								</Button>
							</div>
						</>
					)}

					{awaitingVerdict && result && (
						<div className="space-y-3 rounded-xl border-2 border-primary/30 bg-primary/5 p-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
							<p className="text-center text-lg font-bold">
								I think it's {emoji(result.label ?? "")} {result.label ?? "…"}!
							</p>
							<p className="text-center text-xs text-muted-foreground">
								(votes:{" "}
								{classes.map((c) => `${c} ${result.votes[c] ?? 0}`).join(" · ")}
								)
							</p>

							{result.neighbors.length > 0 && (
								<div className="space-y-1.5">
									<p className="text-center text-xs font-medium text-muted-foreground">
										I compared your drawing to these examples you taught me:
									</p>
									<div className="flex justify-center gap-2">
										{result.neighbors.map((neighbor) => {
											const sample = samples[neighbor.sampleIndex];
											const votedForWinner = neighbor.label === result.label;
											return (
												<figure
													key={neighbor.sampleIndex}
													className="flex flex-col items-center gap-0.5"
												>
													{sample?.thumbnail ? (
														// eslint-disable-next-line @next/next/no-img-element
														<img
															src={sample.thumbnail}
															alt={`A ${neighbor.label} you taught`}
															width={THUMBNAIL_SIZE}
															height={THUMBNAIL_SIZE}
															className={cn(
																"rounded-lg border-2 bg-white",
																votedForWinner
																	? "border-primary"
																	: "border-border opacity-60",
															)}
														/>
													) : (
														<span
															className={cn(
																"flex h-12 w-12 items-center justify-center rounded-lg border-2 bg-white text-xl",
																votedForWinner
																	? "border-primary"
																	: "border-border opacity-60",
															)}
														>
															{emoji(neighbor.label) || "🖼️"}
														</span>
													)}
													<figcaption className="text-[10px] text-muted-foreground">
														{emoji(neighbor.label)} {neighbor.label}
													</figcaption>
												</figure>
											);
										})}
									</div>
								</div>
							)}

							<p className="text-center text-sm font-medium">Was I right?</p>
							<p className="text-center text-[11px] text-muted-foreground">
								Answer honestly — real scientists report what actually happened,
								and your honest answer is what teaches us! 🔬
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
									👎 Nope
								</Button>
							</div>
						</div>
					)}
				</div>
			)}

			<div className="flex items-center justify-between pt-1">
				<span className="text-xs text-muted-foreground">
					{samples.length} example{samples.length === 1 ? "" : "s"} taught
				</span>
				<Button
					variant="ghost"
					size="sm"
					onClick={resetAll}
					className={cn(
						"text-xs text-muted-foreground",
						samples.length === 0 && "invisible",
					)}
				>
					Start over
				</Button>
			</div>
		</div>
	);
}
