/**
 * Dataset-skew detection for classifier labs.
 *
 * The bias trap in these labs is only pedagogically useful if the child
 * actually hits it. These pure checks notice the two ways a young learner
 * skews their training set — teaching far more of one class than another, and
 * teaching near-identical examples of one class — so the UI can nudge them
 * toward the failure moment (and then toward fixing it) instead of hoping
 * they stumble into it.
 */

import { squaredDistance } from "./knn";
import type { LabeledSample } from "./types";

/** One class outnumbering another by at least this ratio counts as lopsided. */
const IMBALANCE_RATIO = 2;
/**
 * A class whose examples sit this much closer to each other than the dataset
 * average counts as "all the same drawing".
 */
const LOW_VARIETY_FRACTION = 0.35;
/** Variety needs a few examples before "they're all alike" means anything. */
const MIN_SAMPLES_FOR_VARIETY = 3;

export interface SkewReport {
	/** Set when one class has ≥2× the examples of the scarcest class. */
	overRepresented?: { label: string; ratio: number };
	/** Classes whose taught examples are suspiciously alike. */
	lowVariety: string[];
}

/** Mean pairwise squared distance among a set of feature vectors. */
function meanPairwiseDistance(vectors: number[][]): number {
	if (vectors.length < 2) return 0;
	let sum = 0;
	let pairs = 0;
	for (let i = 0; i < vectors.length; i++) {
		for (let j = i + 1; j < vectors.length; j++) {
			sum += squaredDistance(vectors[i], vectors[j]);
			pairs++;
		}
	}
	return sum / pairs;
}

/**
 * Inspect a training set for the skews a child is likely to create.
 * Pure and cheap (sample counts here are tens, not thousands).
 */
export function detectDatasetSkew(
	samples: LabeledSample[],
	classes: string[],
): SkewReport {
	const report: SkewReport = { lowVariety: [] };
	if (samples.length === 0 || classes.length < 2) return report;

	const byClass = new Map<string, number[][]>(classes.map((c) => [c, []]));
	for (const sample of samples) {
		byClass.get(sample.label)?.push(sample.features);
	}

	// Imbalance: only meaningful once every class has at least one example —
	// before that the child simply hasn't gotten to the other class yet.
	const counts = classes.map((label) => ({
		label,
		count: byClass.get(label)?.length ?? 0,
	}));
	const min = Math.min(...counts.map((c) => c.count));
	const max = Math.max(...counts.map((c) => c.count));
	if (min >= 1 && max >= min * IMBALANCE_RATIO && max >= 4) {
		const biggest = counts.find((c) => c.count === max);
		if (biggest) {
			report.overRepresented = { label: biggest.label, ratio: max / min };
		}
	}

	// Low variety: a class whose examples cluster far tighter than the dataset
	// as a whole (e.g. the same left-facing cat drawn five times).
	const overallSpread = meanPairwiseDistance(samples.map((s) => s.features));
	if (overallSpread > 0) {
		for (const { label } of counts) {
			const vectors = byClass.get(label) ?? [];
			if (vectors.length < MIN_SAMPLES_FOR_VARIETY) continue;
			const spread = meanPairwiseDistance(vectors);
			if (spread < overallSpread * LOW_VARIETY_FRACTION) {
				report.lowVariety.push(label);
			}
		}
	}

	return report;
}
