'use client';

import { APP_PLANS_URL } from '@/src/lib/zitadel-scopes';
import { useSession } from 'next-auth/react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export function UpgradeSpinner() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white">
      <span
        aria-hidden
        className="border-stroke-3 border-t-secondary size-10 animate-spin rounded-full border-[3px]"
      />
      <p className="text-tagline-2 text-secondary/50">Redirecting…</p>
    </div>
  );
}

// Reads /upgrade/[plan]?monthly|annual and sends the visitor straight to the
// app: authenticated users go to app.mynexusai.com/plans with the plan and
// billing cycle attached; everyone else goes through /login first, carrying
// that same destination as a `next` param so they land on the right plan
// after signing in.
export default function UpgradeRedirect() {
  const { status } = useSession();
  const router = useRouter();
  const params = useParams<{ slug?: string[] }>();
  const searchParams = useSearchParams();

  const plan = params.slug?.[0] ?? null;
  const billing = searchParams.has('annual')
    ? 'annual'
    : searchParams.has('monthly')
      ? 'monthly'
      : null;

  useEffect(() => {
    if (status === 'loading') return;

    const target = new URL(APP_PLANS_URL);
    if (plan) target.searchParams.set('plan', plan);
    if (billing) target.searchParams.set('billing', billing);

    if (status === 'authenticated') {
      window.location.replace(target.toString());
      return;
    }

    const loginUrl = new URL('/login', window.location.origin);
    loginUrl.searchParams.set('next', target.toString());
    router.replace(`${loginUrl.pathname}${loginUrl.search}`);
  }, [status, plan, billing, router]);

  return <UpgradeSpinner />;
}
