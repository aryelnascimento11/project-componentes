/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.pixabay.com',
            port: '',
            pathname: '/photo/2015/04/23/22/00/tree-736885_1280.jpg',
          },
        ],
      },
}

module.exports = nextConfig