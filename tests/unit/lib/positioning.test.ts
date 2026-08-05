import { describe, expect, it } from "vitest";
import {
	FREE_FIRST_CLASS_CTA,
	PARENT_FACING_HEADLINE,
	PARENT_FACING_PROMISE,
	PARENT_FACING_SUPPORTING_COPY,
} from "@/lib/marketing/positioning";
import { SITE_DESCRIPTION } from "@/lib/seo";

describe("parent-facing positioning", () => {
	it("uses the approved promise as the site-wide description", () => {
		expect(PARENT_FACING_PROMISE).toBe(
			"Live online Python and responsible AI classes for Canadian kids ages 9–13, with real projects and no more than 6 students per class.",
		);
		expect(SITE_DESCRIPTION).toBe(PARENT_FACING_PROMISE);
	});

	it("keeps the headline aligned with the approved audience and offer", () => {
		expect(PARENT_FACING_HEADLINE).toContain("Responsible AI");
		expect(PARENT_FACING_HEADLINE).toContain("Canadian Kids Ages 9–13");
		expect(PARENT_FACING_SUPPORTING_COPY).toBe(
			"Free live trial on Monday, August 17, 2026. The next beginner cohort starts Monday, September 14, 2026.",
		);
		expect(FREE_FIRST_CLASS_CTA).toBe("Request a Free Trial Spot");
	});
});
