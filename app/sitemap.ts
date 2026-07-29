import type { MetadataRoute } from "next";
import { posts } from "@/app/blog/blog-posts";
import { absoluteUrl } from "@/lib/seo";

const UPDATED_AT = new Date("2026-07-29T00:00:00.000Z");

const PUBLIC_ROUTES = [
	"/",
	"/about",
	"/blog",
	"/careers",
	"/careers/apply",
	"/contact",
	"/faq",
	"/games",
	"/get-thonny",
	"/get-trinket",
	"/inquiry",
	"/inquiry/book",
	"/lessons",
	"/lessons/term-1-hello-python",
	"/lessons/term-2-math-wizard",
	"/lessons/term-3-decision-maker",
	"/lessons/term-4-more-choices",
	"/lessons/term-5-ai-sneak-peek",
	"/lessons/term-6-loop-magic",
	"/lessons/term-7-game-builder",
	"/lessons/term-8-ai-explorer",
	"/playground",
	"/pricing",
	"/privacy",
	"/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
	const publicPages: MetadataRoute.Sitemap = PUBLIC_ROUTES.map((route) => ({
		url: absoluteUrl(route),
		lastModified: UPDATED_AT,
		changeFrequency: route === "/" ? "weekly" : "monthly",
		priority: route === "/" ? 1 : route === "/inquiry" ? 0.9 : 0.7,
	}));

	const articles: MetadataRoute.Sitemap = posts.map((post) => ({
		url: absoluteUrl(`/blog/${post.slug}`),
		lastModified: new Date(`${post.updatedAt}T00:00:00.000Z`),
		changeFrequency: "monthly",
		priority: 0.8,
	}));

	return [...publicPages, ...articles];
}
