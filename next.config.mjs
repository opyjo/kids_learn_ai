import { withSentryConfig } from "@sentry/nextjs";

const careersOpen =
	process.env.NEXT_PUBLIC_CAREERS_OPEN?.toLowerCase() === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Empty turbopack config to silence the warning
	turbopack: {},
	async redirects() {
		const redirects = [
			{
				source: "/:path*",
				has: [{ type: "host", value: "kidslearnai.ca" }],
				destination: "https://www.kidslearnai.ca/:path*",
				permanent: true,
			},
		];

		if (!careersOpen) {
			redirects.push({
				source: "/careers/apply",
				destination: "/careers",
				permanent: false,
			});
		}

		return redirects;
	},
	async headers() {
		const privateRoutes = [
			"/admin/:path*",
			"/dashboard/:path*",
			"/family/:path*",
			"/labs/:path*",
			"/quiz/:path*",
			"/review/:path*",
			"/settings/:path*",
			"/teacher-notes/:path*",
			"/tutor/:path*",
			"/lessons/:course/:id",
			"/login",
			"/signup",
			"/forgot-password",
			"/reset-password",
		];

		return privateRoutes.map((source) => ({
			source,
			headers: [
				{
					key: "X-Robots-Tag",
					value: "noindex, nofollow, noarchive, nosnippet",
				},
			],
		}));
	},
	webpack: (config, { isServer }) => {
		if (!isServer) {
			// Ignore Node.js modules when building for the client
			config.resolve.fallback = {
				...config.resolve.fallback,
				fs: false,
				path: false,
				crypto: false,
				child_process: false,
				"node:fs": false,
				"node:path": false,
				"node:crypto": false,
				"node:child_process": false,
				"node:fs/promises": false,
			};
		}
		return config;
	},
};

const isProduction = process.env.NODE_ENV === "production";

// Only wrap with Sentry in production
export default isProduction
	? withSentryConfig(nextConfig, {
			// For all available options, see:
			// https://github.com/getsentry/sentry-webpack-plugin#options

			// Suppresses source map uploading logs during build
			silent: true,
			org: process.env.SENTRY_ORG,
			project: process.env.SENTRY_PROJECT,
			authToken: process.env.SENTRY_AUTH_TOKEN,
		})
	: nextConfig;
