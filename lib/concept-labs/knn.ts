/**
 * A tiny k-nearest-neighbours classifier — pure, dependency-free, deterministic.
 *
 * This is deliberately the simplest model that still teaches the lesson: "the
 * machine looks at the examples most similar to the ones you taught it." There
 * is no opaque training step and no randomness, so a child's result is always
 * explainable and reproducible.
 */

import type { ClassificationResult, LabeledSample } from "./types";

/** Squared Euclidean distance between two equal-length vectors. */
export function squaredDistance(a: number[], b: number[]): number {
	if (a.length !== b.length) {
		throw new Error(
			`Feature length mismatch: ${a.length} vs ${b.length}. All samples must share one feature length.`,
		);
	}
	let sum = 0;
	for (let i = 0; i < a.length; i++) {
		const d = a[i] - b[i];
		sum += d * d;
	}
	return sum;
}

/**
 * Classify `query` against `samples` using majority vote among the k nearest.
 *
 * Ties in the vote are broken toward the label whose single closest neighbour
 * is nearest — the intuitive "most similar example wins" rule.
 */
export function classify(
	samples: LabeledSample[],
	query: number[],
	k = 3,
): ClassificationResult {
	if (samples.length === 0) {
		return {
			label: null,
			votes: {},
			nearestDistance: Number.POSITIVE_INFINITY,
		};
	}

	const ranked = samples
		.map((sample) => ({
			label: sample.label,
			distance: squaredDistance(sample.features, query),
		}))
		.sort((a, b) => a.distance - b.distance);

	const effectiveK = Math.min(k, ranked.length);
	const neighbours = ranked.slice(0, effectiveK);

	const votes: Record<string, number> = {};
	const bestDistanceForLabel: Record<string, number> = {};
	for (const neighbour of neighbours) {
		votes[neighbour.label] = (votes[neighbour.label] ?? 0) + 1;
		if (
			bestDistanceForLabel[neighbour.label] === undefined ||
			neighbour.distance < bestDistanceForLabel[neighbour.label]
		) {
			bestDistanceForLabel[neighbour.label] = neighbour.distance;
		}
	}

	let winner = neighbours[0].label;
	for (const label of Object.keys(votes)) {
		const moreVotes = votes[label] > votes[winner];
		const tieButCloser =
			votes[label] === votes[winner] &&
			bestDistanceForLabel[label] < bestDistanceForLabel[winner];
		if (moreVotes || tieButCloser) {
			winner = label;
		}
	}

	return {
		label: winner,
		votes,
		nearestDistance: ranked[0].distance,
	};
}
