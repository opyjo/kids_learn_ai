/**
 * Turn a small RGBA bitmap (a downsampled drawing) into a feature vector.
 *
 * The canvas component downsamples the child's drawing to `size`×`size` via
 * `drawImage`, reads the pixels, and hands the raw RGBA bytes here. Keeping the
 * math in a pure function lets us unit-test it without a DOM.
 *
 * "Ink" = darkness weighted by opacity, normalized to 0..1 (1 = solid stroke,
 * 0 = blank). This makes the vector background-agnostic and comparable across
 * drawings regardless of stroke colour.
 */

export const DEFAULT_FEATURE_SIZE = 16;

/**
 * @param rgba   Uint8ClampedArray / number[] of length size*size*4 (RGBA rows).
 * @param size   Side length of the square bitmap (default 16 → 256 features).
 * @returns      Length size*size vector of ink intensities in [0, 1].
 */
export function rgbaToFeatureVector(
	rgba: Uint8ClampedArray | number[],
	size: number = DEFAULT_FEATURE_SIZE,
): number[] {
	const expected = size * size * 4;
	if (rgba.length !== expected) {
		throw new Error(
			`Expected ${expected} RGBA bytes for a ${size}x${size} bitmap, got ${rgba.length}.`,
		);
	}

	const features: number[] = new Array(size * size);
	for (let px = 0; px < size * size; px++) {
		const i = px * 4;
		const r = rgba[i];
		const g = rgba[i + 1];
		const b = rgba[i + 2];
		const alpha = rgba[i + 3] / 255;

		// Perceptual luminance, then invert so dark ink → high intensity.
		const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
		const ink = (1 - luminance) * alpha;
		features[px] = ink;
	}

	return features;
}

/** Total ink in a feature vector — used to reject near-blank submissions. */
export function inkAmount(features: number[]): number {
	let sum = 0;
	for (const f of features) sum += f;
	return sum;
}
