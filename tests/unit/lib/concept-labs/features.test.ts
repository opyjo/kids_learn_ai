import { describe, expect, it } from "vitest";
import { inkAmount, rgbaToFeatureVector } from "@/lib/concept-labs/features";

/** Build a size*size*4 RGBA buffer from a per-pixel colour function. */
function makeRgba(
	size: number,
	pixel: (i: number) => [number, number, number, number],
): Uint8ClampedArray {
	const data = new Uint8ClampedArray(size * size * 4);
	for (let p = 0; p < size * size; p++) {
		const [r, g, b, a] = pixel(p);
		data[p * 4] = r;
		data[p * 4 + 1] = g;
		data[p * 4 + 2] = b;
		data[p * 4 + 3] = a;
	}
	return data;
}

describe("rgbaToFeatureVector", () => {
	it("maps a fully white opaque bitmap to all-zero ink", () => {
		const rgba = makeRgba(16, () => [255, 255, 255, 255]);
		const features = rgbaToFeatureVector(rgba);
		expect(features).toHaveLength(256);
		expect(features.every((f) => f === 0)).toBe(true);
	});

	it("maps a fully black opaque bitmap to full ink", () => {
		const rgba = makeRgba(16, () => [0, 0, 0, 255]);
		const features = rgbaToFeatureVector(rgba);
		expect(features.every((f) => Math.abs(f - 1) < 1e-9)).toBe(true);
	});

	it("treats transparent pixels as no ink regardless of colour", () => {
		const rgba = makeRgba(16, () => [0, 0, 0, 0]);
		const features = rgbaToFeatureVector(rgba);
		expect(features.every((f) => f === 0)).toBe(true);
	});

	it("throws when the byte length does not match the size", () => {
		expect(() => rgbaToFeatureVector(new Uint8ClampedArray(10), 16)).toThrow(
			/RGBA bytes/i,
		);
	});
});

describe("inkAmount", () => {
	it("sums the feature vector", () => {
		expect(inkAmount([0.5, 0.25, 0.25])).toBeCloseTo(1);
		expect(inkAmount([0, 0, 0])).toBe(0);
	});
});
