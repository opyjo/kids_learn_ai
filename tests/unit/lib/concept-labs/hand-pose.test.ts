import { describe, expect, it } from "vitest";
import {
	describeHandGesture,
	type HandLandmark,
} from "@/lib/concept-labs/hand-pose";

function landmarksWithFingerDistances(
	distances: [number, number, number, number, number],
): HandLandmark[] {
	const landmarks = Array.from({ length: 21 }, () => ({ x: 0, y: 0 }));
	const pairs = [
		[4, 3],
		[8, 6],
		[12, 10],
		[16, 14],
		[20, 18],
	] as const;
	pairs.forEach(([tip, joint], index) => {
		landmarks[joint] = { x: 10, y: index * 2 };
		landmarks[tip] = { x: distances[index], y: index * 2 };
	});
	return landmarks;
}

describe("describeHandGesture", () => {
	it("labels four or more extended fingers as an open hand", () => {
		expect(
			describeHandGesture(landmarksWithFingerDistances([20, 20, 20, 20, 10])),
		).toBe("Open hand");
	});

	it("labels one or fewer extended fingers as a closed hand", () => {
		expect(
			describeHandGesture(landmarksWithFingerDistances([10, 10, 10, 10, 20])),
		).toBe("Closed hand");
	});

	it("requires the complete 21-landmark hand", () => {
		expect(describeHandGesture([{ x: 0, y: 0 }])).toBeNull();
	});
});
