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
			"Live online Python and responsible AI classes for Canadian kids ages 9–13. The new beginner cohort starts September 14, with a free group trial on August 17.",
		);
		expect(SITE_DESCRIPTION).toBe(PARENT_FACING_PROMISE);
	});

	it("keeps the headline aligned with the approved audience and offer", () => {
		expect(PARENT_FACING_HEADLINE).toContain("Responsible AI");
		expect(PARENT_FACING_HEADLINE).toContain("Canadian Kids Ages 9–13");
		expect(PARENT_FACING_SUPPORTING_COPY).toBe(
			"A small Monday beginner cohort, real projects, and a free one-hour group trial on August 17.",
		);
		expect(FREE_FIRST_CLASS_CTA).toBe("Book a Free First Class");
	});
});
