import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			// Private pages are crawlable so bots can read their `noindex`
			// directives. Only non-document endpoints are blocked here.
			disallow: ["/api/", "/auth/"],
		},
		sitemap: absoluteUrl("/sitemap.xml"),
	};
}
