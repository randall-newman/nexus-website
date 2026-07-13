'use client';

import { cn } from '@/src/utils/cn';
import Link from 'next/link';
import { InnerPagesMenuLink } from './inner-pages-menu-link';
import {
  GraduationCap, TrendingUp, Scale, BarChart3, Megaphone, Users, Code2, HeartPulse,
  ShoppingBag, Landmark, Heart, Building2, Palette, Building, Target, Rocket, BookOpen, Users2,
  ArrowRight, Layers,
} from 'lucide-react';
import type { ComponentType } from 'react';

const MENU_SOLUTIONS_ID = 'solutions-mega-menu-v2';

type SolutionLink = {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

function wrapLucide(Icon: ComponentType<{ className?: string }>) {
  return ({ className }: { className?: string }) => (
    <Icon className={cn('stroke-secondary size-5', className)} />
  );
}

const audienceLinks: SolutionLink[] = [
  { label: 'For Businesses',   href: '/solutions/for-businesses',   icon: wrapLucide(Building2) },
  { label: 'For Creators',     href: '/solutions/for-creators',     icon: wrapLucide(Palette) },
  { label: 'For Enterprise',   href: '/solutions/for-enterprise',   icon: wrapLucide(Building) },
  { label: 'For Marketers',    href: '/solutions/for-marketers',    icon: wrapLucide(Target) },
  { label: 'For Solopreneurs', href: '/solutions/for-solopreneurs', icon: wrapLucide(Rocket) },
  { label: 'For Students',     href: '/solutions/for-students',     icon: wrapLucide(BookOpen) },
  { label: 'For Teams',        href: '/solutions/for-teams',        icon: wrapLucide(Users2) },
];

const industryLinks: SolutionLink[] = [
  { label: 'Education',          href: '/solutions/education',          icon: wrapLucide(GraduationCap) },
  { label: 'Financial Services', href: '/solutions/financial-services', icon: wrapLucide(TrendingUp) },
  { label: 'Legal',              href: '/solutions/legal',              icon: wrapLucide(Scale) },
  { label: 'Sales',              href: '/solutions/sales',              icon: wrapLucide(BarChart3) },
  { label: 'Marketing',          href: '/solutions/marketing',          icon: wrapLucide(Megaphone) },
  { label: 'HR',                 href: '/solutions/hr',                 icon: wrapLucide(Users) },
  { label: 'Technology',         href: '/solutions/technology',         icon: wrapLucide(Code2) },
  { label: 'Healthcare',         href: '/solutions/healthcare',         icon: wrapLucide(HeartPulse) },
  { label: 'Small Business',     href: '/solutions/small-business',     icon: wrapLucide(ShoppingBag) },
  { label: 'Government',         href: '/solutions/government',         icon: wrapLucide(Landmark) },
  { label: 'Nonprofits',         href: '/solutions/nonprofits',         icon: wrapLucide(Heart) },
];

/* Three highlighted industries to surface in the featured panel */
const featuredIndustries = industryLinks.slice(0, 3);

interface SolutionsMenuProps {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}

export const SolutionsMenu = ({ menuDropdownId, setMenuDropdownId }: SolutionsMenuProps) => {
  const handleClose = () => setMenuDropdownId(null);
  const isOpen = menuDropdownId === MENU_SOLUTIONS_ID;

  return (
    <div>
      <div className="dropdown-menu-bridge pointer-events-none fixed top-full left-1/2 z-40 h-3 w-full -translate-x-1/2 bg-transparent transition-opacity duration-300 lg:w-[1290px]" />
      <div
        id={MENU_SOLUTIONS_ID}
        className={cn(
          'dropdown-menu border-stroke-1 fixed top-full left-1/2 z-50 mt-2 w-full -translate-x-1/2 rounded-[20px] border bg-white p-4 transition-all duration-300 lg:w-[1290px]',
          isOpen && 'active'
        )}
      >
        <div className="grid grid-cols-12 gap-4">

          {/* ── Left featured panel (dark navy) ─────────────────────── */}
          <div className="col-span-12 lg:col-span-3">
            <div className="flex h-full flex-col justify-between rounded-2xl bg-secondary p-5">
              {/* Icon + heading */}
              <div>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10">
                  <Layers className="h-5 w-5 stroke-white" />
                </div>
                <p className="text-base font-semibold text-white">Solutions</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/50">
                  AI built for every team, role, and industry. Find the workflow that fits how you
                  work.
                </p>
              </div>

              {/* Featured quick-links */}
              <div className="my-5 space-y-1">
                {featuredIndustries.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={handleClose}
                      className="group flex items-center gap-2.5 rounded-xl px-2 py-2 transition-colors hover:bg-white/10"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10">
                        <Icon className="!stroke-white/70 !size-3.5" />
                      </span>
                      <span className="text-[13px] text-white/70 transition-colors group-hover:text-white">
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>

              {/* CTA */}
              <Link
                href="/solutions"
                onClick={handleClose}
                className="group flex items-center gap-2 text-[13px] font-medium text-white/60 transition-colors hover:text-white"
              >
                View all solutions
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* ── Audiences ───────────────────────────────────────────── */}
          <div className="col-span-12 lg:col-span-3">
            <p className="text-tagline-2 text-secondary/60 p-3 font-medium">By Role</p>
            <ul>
              {audienceLinks.map((link) => (
                <InnerPagesMenuLink key={link.label} {...link} onClose={handleClose} />
              ))}
            </ul>
          </div>

          {/* ── Industries (two sub-columns) ────────────────────────── */}
          <div className="col-span-12 lg:col-span-6">
            <p className="text-tagline-2 text-secondary/60 p-3 font-medium">By Industry</p>
            <div className="grid grid-cols-2 gap-x-2">
              <ul>
                {industryLinks.slice(0, 6).map((link) => (
                  <InnerPagesMenuLink key={link.label} {...link} onClose={handleClose} />
                ))}
              </ul>
              <ul>
                {industryLinks.slice(6).map((link) => (
                  <InnerPagesMenuLink key={link.label} {...link} onClose={handleClose} />
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
