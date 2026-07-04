import { describe, expect, it } from "vitest";
import {
	assignCohort,
	type Cohort,
	deriveSeed,
	resolveCohort,
} from "@/lib/concept-labs/cohort";

describe("assignCohort", () => {
	it("is deterministic for the same user and lab", () => {
		const a = assignCohort("user-123", "how-ai-learns-classifier-v1");
		const b = assignCohort("user-123", "how-ai-learns-classifier-v1");
		expect(a).toBe(b);
	});

	it("splits a population into roughly balanced arms", () => {
		const counts: Record<Cohort, number> = { baseline: 0, "labs-v1": 0 };
		for (let i = 0; i < 1000; i++) {
			counts[assignCohort(`user-${i}`, "lab-x")] += 1;
		}
		// Expect neither arm to be wildly under-represented (~50/50).
		expect(counts.baseline).toBeGreaterThan(400);
		expect(counts["labs-v1"]).toBeGreaterThan(400);
	});
});

describe("deriveSeed", () => {
	it("is deterministic and distinct from the cohort hash space", () => {
		expect(deriveSeed("u", "lab")).toBe(deriveSeed("u", "lab"));
		expect(deriveSeed("u", "lab")).not.toBe(deriveSeed("u", "other"));
	});
});

describe("resolveCohort", () => {
	it("returns labs-v1 for everyone when the experiment is off", () => {
		expect(resolveCohort("user-123", "lab-x", false)).toBe("labs-v1");
	});

	it("returns labs-v1 for signed-out users even when the experiment is on", () => {
		expect(resolveCohort(undefined, "lab-x", true)).toBe("labs-v1");
	});

	it("randomizes signed-in users when the experiment is on", () => {
		const resolved = resolveCohort("user-123", "lab-x", true);
		expect(resolved).toBe(assignCohort("user-123", "lab-x"));
	});
});
