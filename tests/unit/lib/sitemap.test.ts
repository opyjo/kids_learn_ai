import { describe, expect, it } from "vitest";
import sitemap, { PUBLIC_COURSE_ROUTES } from "@/app/sitemap";

describe("sitemap", () => {
	it("includes every public Year 1 and Year 2 course route", () => {
		const entries = sitemap();
		const urls = new Set(entries.map((entry) => new URL(entry.url).pathname));

		expect(PUBLIC_COURSE_ROUTES).toHaveLength(16);
		for (const route of PUBLIC_COURSE_ROUTES) {
			expect(urls.has(route)).toBe(true);
		}
	});

	it("contains no duplicate URLs", () => {
		const urls = sitemap().map((entry) => entry.url);

		expect(new Set(urls).size).toBe(urls.length);
	});

	it("only publishes genuine article modification dates", () => {
		const entries = sitemap();
		const home = entries.find((entry) => entry.url.endsWith("/"));
		const article = entries.find((entry) => entry.url.includes("/blog/"));

		expect(home?.lastModified).toBeUndefined();
		expect(article?.lastModified).toBeInstanceOf(Date);
	});
});
