"use client";

import { Brush, Eraser, Sparkles } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
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
}

const CANVAS_SIZE = 260;
const STROKE_WIDTH = 16;
/** Below this much total ink we treat the canvas as blank. */
const MIN_INK = 4;
/** Samples required per class before the child can train. */
const MIN_PER_CLASS = 2;

export function TrainableClassifierLab({
	definition,
	onAction,
	onCanContinueChange,
}: TrainableClassifierLabProps) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const drawingRef = useRef(false);
	const lastPointRef = useRef<{ x: number; y: number } | null>(null);

	const [samples, setSamples] = useState<LabeledSample[]>([]);
	const [stage, setStage] = useState<"teach" | "test">("teach");
	const [result, setResult] = useState<ClassificationResult | null>(null);
	const [awaitingVerdict, setAwaitingVerdict] = useState(false);
	const [hint, setHint] = useState<string | null>(null);

	const [classA, classB] = definition.classes;
	const countA = samples.filter((s) => s.label === classA).length;
	const countB = samples.filter((s) => s.label === classB).length;
	const canTrain = countA >= MIN_PER_CLASS && countB >= MIN_PER_CLASS;

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

	function clearCanvas() {
		const canvas = canvasRef.current;
		const ctx = canvas?.getContext("2d");
		if (canvas && ctx) paintWhite(ctx);
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

	function teach(label: string) {
		const features = readFeatures();
		if (!features) {
			setHint("Draw something first, then teach the machine! ✏️");
			return;
		}
		setSamples((prev) => [...prev, { label, features }]);
		onAction({ type: "add-sample", label });
		setHint(null);
		clearCanvas();
	}

	function train() {
		onAction({ type: "train", sampleCount: samples.length });
		setStage("test");
		setResult(null);
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
		setHint(null);
	}

	function verdict(wasRight: boolean) {
		if (!result) return;
		const expected = wasRight
			? (result.label ?? classA)
			: result.label === classA
				? classB
				: classA;
		onAction({
			type: "test",
			predicted: result.label,
			expected,
			correct: wasRight,
		});
		setAwaitingVerdict(false);
		setResult(null);
		clearCanvas();
		onCanContinueChange(true);
	}

	function resetAll() {
		setSamples([]);
		setStage("teach");
		setResult(null);
		setAwaitingVerdict(false);
		setHint(null);
		clearCanvas();
		onAction({ type: "reset" });
		onCanContinueChange(false);
	}

	const emoji = (label: string) => definition.classEmoji?.[label] ?? "";

	return (
		<div className="space-y-4">
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
					aria-label="Drawing canvas"
				/>
				<Button
					variant="ghost"
					size="sm"
					onClick={clearCanvas}
					className="gap-1.5 text-xs text-muted-foreground"
				>
					<Eraser className="h-3.5 w-3.5" />
					Clear drawing
				</Button>
			</div>

			{hint && (
				<p className="text-center text-sm font-medium text-amber-600">{hint}</p>
			)}

			{stage === "teach" ? (
				<div className="space-y-3">
					<div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
						<Brush className="h-4 w-4" />
						Draw a picture, then tell the machine what it is:
					</div>
					<div className="grid grid-cols-2 gap-3">
						{definition.classes.map((label) => (
							<Button
								key={label}
								variant="outline"
								onClick={() => teach(label)}
								className="h-auto flex-col gap-1 py-3 rounded-xl border-2"
							>
								<span className="text-2xl">{emoji(label)}</span>
								<span className="text-sm font-semibold">Teach as {label}</span>
								<span className="text-xs text-muted-foreground">
									{label === classA ? countA : countB} taught
								</span>
							</Button>
						))}
					</div>
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
							<p className="text-center text-sm text-muted-foreground">
								Now draw a new picture and see if the machine guesses right!
							</p>
							<Button onClick={guess} className="w-full rounded-xl">
								🔮 Ask the machine to guess
							</Button>
						</>
					)}

					{awaitingVerdict && result && (
						<div className="space-y-3 rounded-xl border-2 border-primary/30 bg-primary/5 p-4">
							<p className="text-center text-lg font-bold">
								I think it's {emoji(result.label ?? "")} {result.label ?? "…"}!
							</p>
							<p className="text-center text-xs text-muted-foreground">
								(votes:{" "}
								{definition.classes
									.map((c) => `${c} ${result.votes[c] ?? 0}`)
									.join(" · ")}
								)
							</p>
							<p className="text-center text-sm font-medium">Was I right?</p>
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
