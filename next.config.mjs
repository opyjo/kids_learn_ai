import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		unoptimized: true,
	},
	// Empty turbopack config to silence the warning
	turbopack: {},
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
