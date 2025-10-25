/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
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

export default nextConfig;
