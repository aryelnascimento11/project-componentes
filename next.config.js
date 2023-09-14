/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c.wallhere.com',
        port: '',
        pathname: '/photos/9c/2d/Microsoft_Windows-222026.jpg!d',
      },
    ],
  },
}

module.exports = nextConfig