/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  output: 'standalone',
  webpack: (config) => {
    // Disable persistent caching:
    config.cache = false;
    return config;
  },
};