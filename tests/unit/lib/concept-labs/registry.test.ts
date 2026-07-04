import { describe, expect, it } from "vitest";
import { allLabs, getLabForLesson } from "@/lib/concept-labs/registry";

describe("concept lab registry", () => {
	it("finds the How AI Learns lab for Term 5 Week 4", () => {
		const lab = getLabForLesson("term-5-ai-sneak-peek", 4);
		expect(lab?.labId).toBe("how-ai-learns-classifier-v1");
		expect(lab?.primitive).toBe("trainable-classifier");
	});

	it("returns null for a lesson with no lab", () => {
		expect(getLabForLesson("term-5-ai-sneak-peek", 1)).toBeNull();
		expect(getLabForLesson("term-2-math-wizard", 4)).toBeNull();
	});

	it("returns null when course slug or order index is missing", () => {
		expect(getLabForLesson(undefined, 4)).toBeNull();
		expect(getLabForLesson("term-5-ai-sneak-peek", undefined)).toBeNull();
	});

	it("keeps every authored probe well-formed", () => {
		for (const lab of allLabs()) {
			for (const probe of [lab.predictProbe, lab.applyProbe]) {
				// The correct option must exist among the options.
				expect(probe.options.some((o) => o.id === probe.correctOptionId)).toBe(
					true,
				);
				// Misconception tags must reference real, non-correct options.
				for (const optionId of Object.keys(probe.misconceptionTags)) {
					expect(probe.options.some((o) => o.id === optionId)).toBe(true);
					expect(optionId).not.toBe(probe.correctOptionId);
				}
			}
		}
	});
});
