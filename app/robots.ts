import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kidslearnai.ca";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: [
				"/admin/",
				"/api/",
				"/auth/",
				"/dashboard",
				"/settings",
				"/teacher-notes/",
				"/reset-password",
				"/forgot-password",
			],
		},
		sitemap: `${SITE_URL}/sitemap.xml`,
	};
}
