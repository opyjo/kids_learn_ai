"use client";

import { Camera, CameraOff, Hand, Loader2, ShieldCheck } from "lucide-react";
import type { HandPoseModel } from "ml5";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
	describeHandGesture,
	type HandLandmark,
} from "@/lib/concept-labs/hand-pose";
import type { LabAction } from "@/lib/concept-labs/types";

interface HandPoseLabProps {
	onAction: (action: LabAction) => void;
	onCanContinueChange: (canContinue: boolean) => void;
}

type CameraState = "idle" | "loading" | "running" | "demo" | "error";

const VIDEO_WIDTH = 640;
const VIDEO_HEIGHT = 480;
const FINGERTIP_INDEXES = new Set([4, 8, 12, 16, 20]);

// A non-biometric fallback that lets devices without camera access complete the
// same landmark-reading activity.
const DEMO_HAND: HandLandmark[] = [
	{ x: 320, y: 410 },
	{ x: 245, y: 360 },
	{ x: 195, y: 315 },
	{ x: 155, y: 265 },
	{ x: 115, y: 215 },
	{ x: 270, y: 285 },
	{ x: 260, y: 215 },
	{ x: 255, y: 145 },
	{ x: 250, y: 75 },
	{ x: 320, y: 270 },
	{ x: 320, y: 190 },
	{ x: 320, y: 110 },
	{ x: 320, y: 40 },
	{ x: 370, y: 285 },
	{ x: 380, y: 215 },
	{ x: 385, y: 145 },
	{ x: 390, y: 80 },
	{ x: 415, y: 315 },
	{ x: 440, y: 255 },
	{ x: 455, y: 195 },
	{ x: 465, y: 140 },
];

export function HandPoseLab({
	onAction,
	onCanContinueChange,
}: HandPoseLabProps) {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const streamRef = useRef<MediaStream | null>(null);
	const modelRef = useRef<HandPoseModel | null>(null);
	const aliveRef = useRef(true);
	const lastRenderRef = useRef(0);

	const [cameraState, setCameraState] = useState<CameraState>("idle");
	const [keypoints, setKeypoints] = useState<HandLandmark[]>([]);
	const [videoSize, setVideoSize] = useState({
		width: VIDEO_WIDTH,
		height: VIDEO_HEIGHT,
	});
	const [capturedGesture, setCapturedGesture] = useState<string | null>(null);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const releaseCamera = useCallback(() => {
		modelRef.current?.detectStop();
		modelRef.current = null;
		for (const track of streamRef.current?.getTracks() ?? []) track.stop();
		streamRef.current = null;
		if (videoRef.current) videoRef.current.srcObject = null;
	}, []);

	useEffect(() => {
		return () => {
			aliveRef.current = false;
			releaseCamera();
		};
	}, [releaseCamera]);

	async function startCamera() {
		releaseCamera();
		onCanContinueChange(false);
		setCapturedGesture(null);
		setKeypoints([]);
		setErrorMessage(null);
		setCameraState("loading");

		try {
			if (!navigator.mediaDevices?.getUserMedia) {
				throw new Error("This browser does not offer camera access.");
			}

			const stream = await navigator.mediaDevices.getUserMedia({
				audio: false,
				video: { facingMode: "user", width: VIDEO_WIDTH, height: VIDEO_HEIGHT },
			});
			if (!aliveRef.current) {
				for (const track of stream.getTracks()) track.stop();
				return;
			}

			streamRef.current = stream;
			const video = videoRef.current;
			if (!video) throw new Error("The camera preview could not start.");
			video.srcObject = stream;
			await video.play();
			setVideoSize({
				width: video.videoWidth || VIDEO_WIDTH,
				height: video.videoHeight || VIDEO_HEIGHT,
			});

			// ml5 is intentionally loaded only after the learner chooses to use the
			// camera, keeping its large model bundle out of the normal gallery path.
			const { default: ml5 } = await import("ml5");
			const model = ml5.handPose({
				maxHands: 1,
				flipped: true,
				modelType: "lite",
				runtime: "tfjs",
			});
			await model.ready;
			if (!aliveRef.current) {
				model.detectStop();
				releaseCamera();
				return;
			}

			modelRef.current = model;
			model.detectStart(video, (predictions) => {
				if (!aliveRef.current) return;
				const now = performance.now();
				if (now - lastRenderRef.current < 100) return;
				lastRenderRef.current = now;
				setKeypoints(predictions[0]?.keypoints ?? []);
			});
			setCameraState("running");
		} catch (error) {
			releaseCamera();
			setCameraState("error");
			setErrorMessage(
				error instanceof Error
					? error.message
					: "Camera access or the hand model could not start.",
			);
		}
	}

	function useDemoHand() {
		releaseCamera();
		onCanContinueChange(false);
		setCapturedGesture(null);
		setErrorMessage(null);
		setVideoSize({ width: VIDEO_WIDTH, height: VIDEO_HEIGHT });
		setKeypoints(DEMO_HAND);
		setCameraState("demo");
	}

	function captureLandmarks() {
		const gesture = describeHandGesture(keypoints);
		if (!gesture) return;
		setCapturedGesture(gesture);
		onAction({
			type: "test",
			predicted: gesture,
			expected: gesture,
			correct: true,
		});
		onCanContinueChange(true);
	}

	function stopCamera() {
		releaseCamera();
		setKeypoints([]);
		setCameraState("idle");
	}

	const handDetected = keypoints.length >= 21;
	const liveGesture = describeHandGesture(keypoints);
	const showStage = cameraState === "running" || cameraState === "demo";

	return (
		<div className="space-y-4">
			<div className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-sm text-sky-950 dark:border-sky-900 dark:bg-sky-950/30 dark:text-sky-100">
				<div className="flex items-start gap-2">
					<ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" />
					<p>
						Your camera stays on this device. The lab reads hand landmarks only;
						it does not identify you or upload camera images.
					</p>
				</div>
			</div>

			{cameraState === "idle" && (
				<div className="space-y-3 text-center">
					<Hand className="mx-auto h-10 w-10 text-primary" />
					<p className="text-sm text-muted-foreground">
						Try an open hand, a fist and a partly-open hand. Watch the AI mark
						each point it can see.
					</p>
					<div className="flex flex-wrap justify-center gap-2">
						<Button
							onClick={() => void startCamera()}
							className="rounded-xl gap-2"
						>
							<Camera className="h-4 w-4" />
							Turn on my camera
						</Button>
						<Button
							variant="outline"
							onClick={useDemoHand}
							className="rounded-xl"
						>
							Use a demo hand
						</Button>
					</div>
				</div>
			)}

			{cameraState === "loading" && (
				<div className="flex min-h-52 flex-col items-center justify-center gap-3 rounded-xl border bg-muted/30 text-center">
					<Loader2 className="h-8 w-8 animate-spin text-primary" />
					<p className="text-sm font-medium">
						Loading the hand-landmark model…
					</p>
					<p className="text-xs text-muted-foreground">
						The first load can take a little longer.
					</p>
				</div>
			)}

			{cameraState === "error" && (
				<div className="space-y-3 rounded-xl border border-amber-300 bg-amber-50 p-4 text-center dark:border-amber-900 dark:bg-amber-950/30">
					<CameraOff className="mx-auto h-7 w-7 text-amber-700" />
					<p className="text-sm font-semibold">The camera could not start.</p>
					<p className="text-xs text-muted-foreground">{errorMessage}</p>
					<div className="flex flex-wrap justify-center gap-2">
						<Button variant="outline" onClick={() => void startCamera()}>
							Try the camera again
						</Button>
						<Button onClick={useDemoHand}>Use a demo hand instead</Button>
					</div>
				</div>
			)}

			<div className={showStage ? "space-y-3" : "hidden"}>
				<div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-border bg-slate-950">
					<video
						ref={videoRef}
						muted
						playsInline
						aria-label="Live camera preview for hand landmark detection"
						className={
							cameraState === "running"
								? "h-full w-full scale-x-[-1] object-cover"
								: "hidden"
						}
					/>
					{cameraState === "demo" && (
						<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
					)}
					<svg
						viewBox={`0 0 ${videoSize.width} ${videoSize.height}`}
						className="pointer-events-none absolute inset-0 h-full w-full"
						aria-hidden="true"
					>
						{keypoints.map((point, index) => (
							<circle
								key={`${index}-${point.name ?? "point"}`}
								cx={point.x}
								cy={point.y}
								r={FINGERTIP_INDEXES.has(index) ? 8 : 5}
								className={
									FINGERTIP_INDEXES.has(index)
										? "fill-amber-300 stroke-amber-950"
										: "fill-cyan-300 stroke-cyan-950"
								}
								strokeWidth="2"
							/>
						))}
					</svg>
					<div className="absolute bottom-2 left-2 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
						{handDetected
							? `${keypoints.length} landmarks · ${liveGesture}`
							: "Show one hand to the camera"}
					</div>
				</div>

				{capturedGesture && (
					<div className="rounded-xl bg-emerald-50 p-3 text-center text-sm text-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-100">
						<strong>Captured: {capturedGesture}.</strong> The label came from
						the distances between visible landmarks—not from knowing who you
						are.
					</div>
				)}

				<div className="flex flex-wrap justify-center gap-2">
					<Button
						onClick={captureLandmarks}
						disabled={!handDetected}
						className="rounded-xl"
					>
						Capture what the AI sees
					</Button>
					{cameraState === "running" && (
						<Button variant="ghost" onClick={stopCamera} className="rounded-xl">
							Stop camera
						</Button>
					)}
					{cameraState === "demo" && (
						<Button variant="ghost" onClick={() => void startCamera()}>
							Try my camera
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}
