import { describe, expect, it } from "vitest";
import { detectDatasetSkew } from "@/lib/concept-labs/bias";
import type { LabeledSample } from "@/lib/concept-labs/types";

const CLASSES = ["Cat", "Dog"];

/** A sample at a point, so distances are easy to reason about. */
function at(label: string, x: number, y: number): LabeledSample {
	return { label, features: [x, y] };
}

describe("detectDatasetSkew", () => {
	it("reports nothing for an empty or single-class-config dataset", () => {
		expect(detectDatasetSkew([], CLASSES)).toEqual({ lowVariety: [] });
		expect(detectDatasetSkew([at("Cat", 0, 0)], ["Cat"]).lowVariety).toEqual(
			[],
		);
	});

	it("reports nothing for a balanced, varied dataset", () => {
		const samples = [
			at("Cat", 0, 0),
			at("Cat", 5, 3),
			at("Dog", 10, 10),
			at("Dog", 14, 6),
		];
		const report = detectDatasetSkew(samples, CLASSES);
		expect(report.overRepresented).toBeUndefined();
		expect(report.lowVariety).toEqual([]);
	});

	it("flags a class with at least twice the examples of the scarcest", () => {
		const samples = [
			at("Cat", 0, 0),
			at("Cat", 5, 3),
			at("Cat", 2, 8),
			at("Cat", 9, 1),
			at("Dog", 10, 10),
			at("Dog", 14, 6),
		];
		const report = detectDatasetSkew(samples, CLASSES);
		expect(report.overRepresented?.label).toBe("Cat");
		expect(report.overRepresented?.ratio).toBe(2);
	});

	it("stays quiet about imbalance before the other class has any examples", () => {
		const samples = [at("Cat", 0, 0), at("Cat", 5, 3), at("Cat", 2, 8)];
		expect(detectDatasetSkew(samples, CLASSES).overRepresented).toBeUndefined();
	});

	it("flags a class whose examples are near-identical", () => {
		const samples = [
			// Three cats drawn in essentially the same spot…
			at("Cat", 0, 0),
			at("Cat", 0.1, 0),
			at("Cat", 0, 0.1),
			// …while dogs are spread out.
			at("Dog", 20, 20),
			at("Dog", 40, 5),
			at("Dog", 5, 40),
		];
		const report = detectDatasetSkew(samples, CLASSES);
		expect(report.lowVariety).toContain("Cat");
		expect(report.lowVariety).not.toContain("Dog");
	});

	it("needs a few examples before calling a class low-variety", () => {
		const samples = [
			at("Cat", 0, 0),
			at("Cat", 0.1, 0),
			at("Dog", 20, 20),
			at("Dog", 40, 5),
		];
		expect(detectDatasetSkew(samples, CLASSES).lowVariety).toEqual([]);
	});
});
