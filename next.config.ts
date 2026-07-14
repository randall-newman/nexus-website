import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [100, 75],
    remotePatterns: [
      { protocol: 'https', hostname: 'account.verbosec.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  },
};

export default nextConfig;
