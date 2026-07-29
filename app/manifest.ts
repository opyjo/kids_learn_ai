import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Kids Learn AI",
		short_name: "Kids Learn AI",
		description:
			"Live online Python and AI classes for kids ages 9-13, with hands-on projects and supportive instructors.",
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#4f46e5",
		lang: "en-CA",
		icons: [
			{
				src: "/web-app-manifest-192x192.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/web-app-manifest-512x512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "any",
			},
		],
	};
}
