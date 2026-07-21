import UpgradeRedirect, { UpgradeSpinner } from '@/src/components/upgrade/upgrade-redirect';
import type { Metadata } from 'next';
import { Suspense } from 'react';

// Transitional redirect route, not real content — never index it.
export const metadata: Metadata = {
  title: 'Redirecting… | Nexus AI',
  robots: { index: false, follow: false },
};

export default function UpgradePage() {
  return (
    <Suspense fallback={<UpgradeSpinner />}>
      <UpgradeRedirect />
    </Suspense>
  );
}
