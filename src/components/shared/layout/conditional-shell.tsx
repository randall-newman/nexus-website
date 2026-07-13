'use client';

import { CookiesBanner } from '@/src/components/shared/cookies-banner';
import Footer from '@/src/components/shared/layout/footer/footer';
import Navbar from '@/src/components/shared/layout/navbar/navbar';
import { MobileMenuProvider } from '@/src/context/MobileMenuContext';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

const AUTH_PATHS = ['/login', '/signup', '/developers/console/login'];
const CUSTOM_LAYOUT_PATHS = ['/help'];

export function ConditionalShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAuth = AUTH_PATHS.some((p) => pathname === p || pathname.startsWith(p + '/'));
  const isCustomLayout = CUSTOM_LAYOUT_PATHS.some((p) => pathname === p || pathname.startsWith(p + '/'));

  if (isAuth) {
    return <main className="min-h-screen bg-background-13">{children}</main>;
  }

  if (isCustomLayout) {
    return <>{children}</>;
  }

  return (
    <MobileMenuProvider>
      <Navbar />
      <main className="bg-background-13">{children}</main>
      <Footer />
      <CookiesBanner />
    </MobileMenuProvider>
  );
}
