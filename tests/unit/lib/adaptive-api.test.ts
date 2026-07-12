import { afterEach, describe, expect, it } from "vitest";
import { adaptiveResponseSchema } from "@/lib/adaptive-practice/api";
import {
	adaptiveRolloutMode,
	canUseAdaptivePractice,
} from "@/lib/adaptive-practice/config";

const originalEnabled = process.env.ADAPTIVE_PRACTICE_ENABLED;
const originalShadow = process.env.ADAPTIVE_PRACTICE_SHADOW;

afterEach(() => {
	if (originalEnabled === undefined)
		delete process.env.ADAPTIVE_PRACTICE_ENABLED;
	else process.env.ADAPTIVE_PRACTICE_ENABLED = originalEnabled;
	if (originalShadow === undefined) delete process.env.ADAPTIVE_PRACTICE_SHADOW;
	else process.env.ADAPTIVE_PRACTICE_SHADOW = originalShadow;
});

describe("adaptive API contract", () => {
	it("requires a non-empty answer, confidence, and idempotency key", () => {
		const base = {
			questionId: "00000000-0000-4000-8000-000000000001",
			answer: "4",
			confidence: "sure",
			usedHint: false,
			idempotencyKey: "00000000-0000-4000-8000-000000000002",
		};
		expect(adaptiveResponseSchema.safeParse(base).success).toBe(true);
		expect(
			adaptiveResponseSchema.safeParse({ ...base, answer: "" }).success,
		).toBe(false);
		expect(
			adaptiveResponseSchema.safeParse({ ...base, confidence: "maybe" })
				.success,
		).toBe(false);
	});

	it("defaults off, limits shadow mode to admins, and explicitly enables students", () => {
		delete process.env.ADAPTIVE_PRACTICE_ENABLED;
		delete process.env.ADAPTIVE_PRACTICE_SHADOW;
		expect(adaptiveRolloutMode()).toBe("off");
		expect(canUseAdaptivePractice({ mode: "off", isAdmin: true })).toBe(
			"fallback",
		);
		expect(canUseAdaptivePractice({ mode: "shadow", isAdmin: false })).toBe(
			"fallback",
		);
		expect(canUseAdaptivePractice({ mode: "shadow", isAdmin: true })).toBe(
			"shadow",
		);
		expect(canUseAdaptivePractice({ mode: "on", isAdmin: false })).toBe(
			"adaptive",
		);
	});
});
