import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kidslearnai.ca";

/** Public, indexable routes. Authed app areas (dashboard, lessons content,
 * labs, admin) are intentionally excluded — they redirect to /login. */
const PUBLIC_ROUTES = [
	"",
	"/about",
	"/blog",
	"/blog/black-youth-stem-canada",
	"/blog/future-of-ai-in-education",
	"/blog/python-best-first-language",
	"/blog/teaching-ai-ethics-to-kids",
	"/blog/why-learning-ai-young-matters",
	"/careers",
	"/contact",
	"/faq",
	"/games",
	"/get-thonny",
	"/get-trinket",
	"/inquiry",
	"/login",
	"/pricing",
	"/privacy",
	"/signup",
	"/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
	return PUBLIC_ROUTES.map((route) => ({
		url: `${SITE_URL}${route}`,
		changeFrequency: route.startsWith("/blog") ? "monthly" : "weekly",
		priority: route === "" ? 1 : 0.7,
	}));
}
