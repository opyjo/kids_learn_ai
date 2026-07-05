import { describe, expect, it } from "vitest";
import { classify, squaredDistance } from "@/lib/concept-labs/knn";
import type { LabeledSample } from "@/lib/concept-labs/types";

describe("squaredDistance", () => {
	it("is zero for identical vectors", () => {
		expect(squaredDistance([1, 2, 3], [1, 2, 3])).toBe(0);
	});

	it("sums squared component differences", () => {
		expect(squaredDistance([0, 0], [3, 4])).toBe(25);
	});

	it("throws on length mismatch", () => {
		expect(() => squaredDistance([1, 2], [1])).toThrow(/length mismatch/i);
	});
});

describe("classify", () => {
	const samples: LabeledSample[] = [
		{ label: "cat", features: [0, 0] },
		{ label: "cat", features: [0, 1] },
		{ label: "dog", features: [10, 10] },
		{ label: "dog", features: [10, 11] },
	];

	it("returns null label with no training data", () => {
		const result = classify([], [1, 1]);
		expect(result.label).toBeNull();
		expect(result.nearestDistance).toBe(Number.POSITIVE_INFINITY);
		expect(result.neighbors).toEqual([]);
	});

	it("reports the voting neighbours nearest-first with sample indices", () => {
		const result = classify(samples, [0, 0], 3);
		expect(result.neighbors).toHaveLength(3);
		expect(result.neighbors[0]).toEqual({
			sampleIndex: 0,
			label: "cat",
			distance: 0,
		});
		const distances = result.neighbors.map((n) => n.distance);
		expect(distances).toEqual([...distances].sort((a, b) => a - b));
	});

	it("predicts the nearest cluster", () => {
		expect(classify(samples, [0, 0.5], 3).label).toBe("cat");
		expect(classify(samples, [10, 10.5], 3).label).toBe("dog");
	});

	it("reports per-label vote counts among k neighbours", () => {
		const result = classify(samples, [0, 0], 3);
		expect(result.votes.cat).toBe(2);
		expect(result.votes.dog).toBe(1);
	});

	it("breaks a vote tie toward the closer neighbour", () => {
		// One cat and one dog; query sits closer to the cat, so cat wins the tie.
		const twoClass: LabeledSample[] = [
			{ label: "cat", features: [0, 0] },
			{ label: "dog", features: [3, 0] },
		];
		const result = classify(twoClass, [1, 0], 2);
		expect(result.votes.cat).toBe(1);
		expect(result.votes.dog).toBe(1);
		expect(result.label).toBe("cat");
	});

	it("clamps k to the sample count", () => {
		const result = classify(samples, [0, 0], 99);
		const totalVotes = Object.values(result.votes).reduce((a, b) => a + b, 0);
		expect(totalVotes).toBe(samples.length);
	});
});
