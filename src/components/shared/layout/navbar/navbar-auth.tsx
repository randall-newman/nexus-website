'use client';

import { ButtonPrimary } from '@/src/components/shared/ui/button';
import { ExternalLink, LogOut } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

function Avatar({ imageUrl, name, size }: { imageUrl?: string | null; name: string; size: number }) {
  if (imageUrl) {
    return (
      <Image
        src={imageUrl}
        alt={name}
        width={size}
        height={size}
        className="shrink-0 rounded-full object-cover"
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-full bg-secondary font-semibold text-white"
      style={{ width: size, height: size, fontSize: size * 0.43 }}
    >
      {name[0]?.toUpperCase() ?? 'U'}
    </span>
  );
}

async function federatedSignOut() {
  // End the Zitadel session too (SSO with app.mynexusai.com), not just the
  // local NextAuth cookie — otherwise the next login silently auto-signs-in.
  let logoutUrl = '/';
  try {
    const res = await fetch('/api/auth/federated-logout');
    if (res.ok) {
      logoutUrl = (await res.json()).url ?? '/';
    }
  } catch {
    // Fall back to local-only sign-out.
  }
  await signOut({ redirect: false });
  window.location.href = logoutUrl;
}

export function NavbarAuth() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  if (status === 'loading') {
    return <div className="h-9 w-24 animate-pulse rounded-full bg-secondary/10" />;
  }

  if (session?.user) {
    const name = session.user.name ?? session.user.email ?? '';

    return (
      <div className="relative" ref={menuRef}>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-x-2 rounded-full border border-stroke-3 bg-white px-2.5 py-1.5 transition-colors hover:bg-background-13"
          aria-label="Open user menu"
          aria-expanded={open}
        >
          <Avatar imageUrl={session.user.image} name={name} size={28} />
          <span className="hidden max-w-[120px] truncate text-[13px] font-medium text-secondary xl:block">
            {name}
          </span>
        </button>

        {open && (
          <div className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-xl border border-stroke-3 bg-white shadow-lg">
            <div className="flex items-center gap-x-2.5 border-b border-stroke-3 px-4 py-3">
              <Avatar imageUrl={session.user.image} name={name} size={32} />
              <div className="min-w-0">
                {session.user.name && (
                  <p className="truncate text-[13px] font-semibold text-secondary">{session.user.name}</p>
                )}
                {session.user.email && (
                  <p className="truncate text-[12px] text-secondary/50">{session.user.email}</p>
                )}
              </div>
            </div>
            <a
              href="https://app.mynexusai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-2.5 px-4 py-2.5 text-[13px] text-secondary/70 hover:bg-background-13 hover:text-secondary"
              onClick={() => setOpen(false)}
            >
              <ExternalLink className="size-4 shrink-0" />
              Open Nexus AI
            </a>
            <button
              type="button"
              onClick={() => { setOpen(false); federatedSignOut(); }}
              className="flex w-full items-center gap-x-2.5 px-4 py-2.5 text-[13px] text-secondary/70 hover:bg-background-13 hover:text-secondary"
            >
              <LogOut className="size-4 shrink-0" />
              Sign out
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <Link
        href="/login"
        className="text-tagline-1 px-3 py-2 font-normal text-secondary/60 transition-colors duration-200 hover:text-secondary"
      >
        Login
      </Link>
      <Link href="/signup" className="inline-block" aria-label="Try for Free">
        <ButtonPrimary>Try for Free</ButtonPrimary>
      </Link>
    </>
  );
}
