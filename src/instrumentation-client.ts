// Browser-side Sentry init. Loaded automatically by Next.js (15.3+) on the
// client. With no DSN configured the SDK stays dormant.
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT || process.env.NODE_ENV,
  // Keep performance sampling modest on a marketing site.
  tracesSampleRate: 0.1,
  // Session replay only for errored sessions.
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 0.5,
  integrations: [Sentry.replayIntegration()],
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
