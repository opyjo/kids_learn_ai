import type { MetadataRoute } from "next";
import { posts } from "@/app/blog/blog-posts";
import { CAREERS_OPEN } from "@/lib/careers";
import { absoluteUrl } from "@/lib/seo";
import { storyIssues } from "@/lib/story-club";

const PUBLIC_ROUTES = [
	"/",
	"/about",
	"/blog",
	...(CAREERS_OPEN ? ["/careers", "/careers/apply"] : []),
	"/contact",
	"/faq",
	"/games",
	"/get-pickcode",
	"/get-thonny",
	"/inquiry",
	"/inquiry/book",
	"/lessons",
	"/playground",
	"/pricing",
	"/privacy",
	"/stories",
	"/terms",
];

export const PUBLIC_COURSE_ROUTES = [
	"/lessons/term-1-hello-python",
	"/lessons/term-2-math-wizard",
	"/lessons/term-3-decision-maker",
	"/lessons/term-4-more-choices",
	"/lessons/term-5-ai-sneak-peek",
	"/lessons/term-6-loop-magic",
	"/lessons/term-7-game-builder",
	"/lessons/term-8-ai-explorer",
	"/lessons/year2-term-1-python-accelerated",
	"/lessons/year2-term-2-loops-mastery",
	"/lessons/year2-term-3-functions",
	"/lessons/year2-term-4-data-structures",
	"/lessons/year2-term-5-ai-deep-dive",
	"/lessons/year2-term-6-apis",
	"/lessons/year2-term-7-data-visualization",
	"/lessons/year2-term-8-capstone",
];

export default function sitemap(): MetadataRoute.Sitemap {
	const publicPages: MetadataRoute.Sitemap = [
		...PUBLIC_ROUTES,
		...PUBLIC_COURSE_ROUTES,
	].map((route) => ({
		url: absoluteUrl(route),
		// Static pages intentionally omit lastModified rather than claiming that
		// unrelated pages changed on the same release date.
		changeFrequency: route === "/" ? "weekly" : "monthly",
		priority: route === "/" ? 1 : route === "/inquiry" ? 0.9 : 0.7,
	}));

	const articles: MetadataRoute.Sitemap = posts.map((post) => ({
		url: absoluteUrl(`/blog/${post.slug}`),
		lastModified: new Date(`${post.updatedAt}T00:00:00.000Z`),
		changeFrequency: "monthly",
		priority: 0.8,
	}));

	const stories: MetadataRoute.Sitemap = storyIssues
		.filter((story) => story.status === "published")
		.map((story) => ({
			url: absoluteUrl(`/stories/${story.slug}`),
			lastModified: new Date(`${story.releaseDate}T00:00:00.000Z`),
			changeFrequency: "weekly",
			priority: 0.8,
		}));

	return [...publicPages, ...articles, ...stories];
}
