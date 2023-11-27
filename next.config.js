/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sanbox-integration.foloosi.com',
      },
    ],
  },
}

module.exports = nextConfig
