'use client';

import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react';

// Catches render errors in the root layout that error.tsx boundaries can't.
// Must render its own <html>/<body> because it replaces the root layout.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Something went wrong</h1>
        <p className="text-sm text-gray-500">
          An unexpected error occurred. Our team has been notified.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:opacity-85"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
