/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https//',
        hostname: 'avatars.githubusercontent.com/',
        port: '',
        pathname: '/u/**',
      },
    ],
  },
}

module.exports = nextConfig
