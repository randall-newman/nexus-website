import { withSentryConfig } from '@sentry/nextjs';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        // Old URL, may be indexed/bookmarked — canonical page lives at
        // /features/plagiarism-checker.
        source: '/features/ai-plagiarism-checker',
        destination: '/features/plagiarism-checker',
        permanent: true,
      },
    ];
  },
  images: {
    qualities: [100, 75],
    remotePatterns: [
      { protocol: 'https', hostname: 'account.verbosec.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  },
};

export default withSentryConfig(nextConfig, {
  // Source-map upload — only runs on production builds when
  // SENTRY_AUTH_TOKEN / SENTRY_ORG / SENTRY_PROJECT are set (e.g. in Vercel).
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: !process.env.CI,
  // Route browser events through /monitoring to dodge ad blockers.
  tunnelRoute: '/monitoring',
  disableLogger: true,
});
