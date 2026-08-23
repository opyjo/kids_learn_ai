import { describe, expect, it } from "vitest";
import { posts } from "@/app/blog/blog-posts";
import { expandedArticles } from "@/lib/blog/expanded-articles";

describe("expanded blog library", () => {
	it("adds seventeen unique, complete articles", () => {
		expect(expandedArticles).toHaveLength(17);
		expect(new Set(expandedArticles.map((article) => article.slug)).size).toBe(
			17,
		);

		for (const article of expandedArticles) {
			expect(article.sections.length).toBeGreaterThanOrEqual(5);
			expect(article.takeaways).toHaveLength(3);
			expect(article.relatedLinks.length).toBeGreaterThanOrEqual(3);
			expect(article.sources.length).toBeGreaterThanOrEqual(1);
			expect(article.publishedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
		}
	});

	it("publishes the expanded articles in the main blog registry", () => {
		expect(posts).toHaveLength(26);

		for (const article of expandedArticles) {
			expect(posts.some((post) => post.slug === article.slug)).toBe(true);
		}

		expect(posts.filter((post) => post.featured)).toHaveLength(1);
	});
});
