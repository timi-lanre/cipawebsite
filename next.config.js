/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: false,
  },
  devIndicators: {
    buildActivity: false,
  },
}

module.exports = nextConfig