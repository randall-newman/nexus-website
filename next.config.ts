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

      /* ── Legacy WordPress URLs (pre-migration). Google indexed these for
         years; without 301s they 404 and their rankings evaporate. Mapped
         to the closest current equivalent. ─────────────────────────── */

      // Old root-level feature landing pages
      { source: '/ai-article-writer', destination: '/features/essay-writer', permanent: true },
      { source: '/ai-rewriter', destination: '/features/essay-writer', permanent: true },
      { source: '/code-generator', destination: '/products/code', permanent: true },
      { source: '/file-chat', destination: '/features/ai-file-chat', permanent: true },

      // Old blog posts with a sensible current home
      { source: '/blog/how-to-write-in-apa-format', destination: '/features/academic-research', permanent: true },
      { source: '/blog/how-ai-is-transforming-academic-writing', destination: '/features/academic-research', permanent: true },
      { source: '/blog/master-academics-with-nexus-ai-at-harvard', destination: '/solutions/education', permanent: true },
      { source: '/blog/using-nexus-ai-at-uct', destination: '/solutions/education', permanent: true },
      { source: '/blog/nexus-vs-jenni', destination: '/features', permanent: true },

      // WordPress taxonomy/feed/pagination URLs → blog index
      { source: '/category/:path*', destination: '/blog', permanent: true },
      { source: '/tag/:path*', destination: '/blog', permanent: true },
      { source: '/author/:path*', destination: '/blog', permanent: true },
      { source: '/blog/category/:path*', destination: '/blog', permanent: true },
      { source: '/blog/tag/:path*', destination: '/blog', permanent: true },
      { source: '/blog/author/:path*', destination: '/blog', permanent: true },
      { source: '/blog/page/:n', destination: '/blog', permanent: true },
      { source: '/feed', destination: '/blog', permanent: true },
      { source: '/comments/feed', destination: '/blog', permanent: true },

      // Yoast sitemap names Search Console may still poll
      { source: '/sitemap_index.xml', destination: '/sitemap.xml', permanent: true },
      { source: '/:name-sitemap.xml', destination: '/sitemap.xml', permanent: true },
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
