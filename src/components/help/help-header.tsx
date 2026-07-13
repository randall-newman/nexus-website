import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import mainLogoWhite from '@/public/images/logo/main-logo-white.svg';
import logo from '@/public/images/logo/logo.svg';
import HelpSearch from './help-search';

export default function HelpHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#000C60]">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        {/* Logo */}
        <Link href="/help" className="flex items-center gap-2.5 shrink-0">
          {/* Full white logo on desktop */}
          <figure className="relative hidden h-8 w-[160px] lg:block">
            <Image src={mainLogoWhite} alt="Nexus AI" fill className="object-contain object-left" sizes="160px" />
          </figure>
          {/* Icon-only logo on mobile */}
          <figure className="relative block h-8 w-8 lg:hidden">
            <Image src={logo} alt="Nexus AI" fill className="object-contain" sizes="32px" />
          </figure>
          <div className="flex items-baseline gap-1.5 lg:hidden">
            <span className="text-sm font-semibold text-white">Nexus AI</span>
          </div>
          <div className="hidden lg:flex items-baseline gap-1.5 ml-1">
            <span className="text-xs text-white/40">/</span>
            <span className="text-xs font-medium text-white/60">Help Centre</span>
          </div>
        </Link>

        {/* Search */}
        <div className="flex-1 min-w-0 mx-4">
          <HelpSearch
            placeholder="Search help articles..."
            className="w-full max-w-lg"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/"
            className="hidden items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white sm:flex"
          >
            Help Centre Home
          </Link>
          <Link
            href="https://app.mynexusai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/20"
          >
            <span className="hidden sm:inline">Go to Nexus AI</span>
            <span className="sm:hidden">App</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
