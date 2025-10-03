import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    unoptimized: true,
    remotePatterns: [
      new URL('https://avatars.githubusercontent.com/**')
    ]
  }
}

export default nextConfig
