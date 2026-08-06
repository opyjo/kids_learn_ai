/** A single landmark returned by the browser-side hand-pose model. */
export interface HandLandmark {
	x: number;
	y: number;
	name?: string;
	confidence?: number;
}

export type HandGesture = "Open hand" | "Closed hand" | "Partly open";

function distance(a: HandLandmark, b: HandLandmark): number {
	return Math.hypot(a.x - b.x, a.y - b.y);
}

/**
 * Turn the model's 21 landmarks into a deliberately simple, explainable label.
 * This is not a second ML model: a finger counts as extended when its tip is
 * noticeably farther from the wrist than its middle joint.
 */
export function describeHandGesture(
	keypoints: HandLandmark[],
): HandGesture | null {
	if (keypoints.length < 21) return null;

	const wrist = keypoints[0];
	const fingerPairs = [
		[4, 3],
		[8, 6],
		[12, 10],
		[16, 14],
		[20, 18],
	] as const;
	const extended = fingerPairs.filter(([tipIndex, jointIndex]) => {
		const tipDistance = distance(keypoints[tipIndex], wrist);
		const jointDistance = distance(keypoints[jointIndex], wrist);
		return tipDistance > jointDistance * 1.15;
	}).length;

	if (extended >= 4) return "Open hand";
	if (extended <= 1) return "Closed hand";
	return "Partly open";
}
