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
  // Disable source map loading for node_modules to reduce console noise
  productionBrowserSourceMaps: false,
  devIndicators: false,
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

export default nextConfig;
