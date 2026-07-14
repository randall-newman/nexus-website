'use client';

import promoImage from '@/public/images/ns-img-422.jpg';
import newArrowWhite from '@/public/images/icons/new-arrow-white.svg';
import { BlogIcon, DownloadIcon, PrivacyIcon, TermsConditionsIcon } from '@/src/components/shared/icon/menu-icon';
import { InnerPagesMenuLink } from '@/src/components/shared/layout/navbar/inner-pages-menu-link';
import { cn } from '@/src/utils/cn';
import { Handshake, HelpCircle, Mail, Palette, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ComponentType } from 'react';

const MENU_INNER_PAGES_ID = 'resources-dropdown-menu-v2';

const ContactMailIcon = ({ className }: { className?: string }) => (
  <Mail className={cn('stroke-secondary size-5', className)} />
);

const ReviewsStarIcon = ({ className }: { className?: string }) => (
  <Star className={cn('stroke-secondary size-5', className)} />
);

const AffiliateIcon = ({ className }: { className?: string }) => (
  <Handshake className={cn('stroke-secondary size-5', className)} />
);

const HelpIcon = ({ className }: { className?: string }) => (
  <HelpCircle className={cn('stroke-secondary size-5', className)} />
);

const BrandIcon = ({ className }: { className?: string }) => (
  <Palette className={cn('stroke-secondary size-5', className)} />
);

interface InnerLink {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}

const resourceLinks: InnerLink[] = [
  { label: 'Downloads', href: '/downloads', icon: DownloadIcon },
  { label: 'Blog', href: '/blog', icon: BlogIcon },
  { label: 'Reviews', href: '/reviews', icon: ReviewsStarIcon },
  { label: 'Affiliate Program', href: '/affiliates', icon: AffiliateIcon },
];

const supportLinks: InnerLink[] = [
  { label: 'Help Centre', href: '/help', icon: HelpIcon },
  { label: 'Brand', href: '/brand', icon: BrandIcon },
  { label: 'Privacy Policy', href: '/legal/privacy', icon: PrivacyIcon },
  { label: 'Terms of Service', href: '/legal/terms', icon: TermsConditionsIcon },
];

interface InnerPagesMenuProps {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}

export const InnerPagesMenu = ({ menuDropdownId, setMenuDropdownId }: InnerPagesMenuProps) => {
  const handleClose = () => setMenuDropdownId(null);
  const isOpen = menuDropdownId === MENU_INNER_PAGES_ID;

  return (
    <div>
      <div className="dropdown-menu-bridge pointer-events-none fixed top-full left-1/2 z-40 h-3 w-full -translate-x-1/2 bg-transparent transition-opacity duration-300 lg:w-[860px]" />
      <div
        id={MENU_INNER_PAGES_ID}
        className={cn(
          'dropdown-menu border-stroke-1 fixed top-full left-1/2 z-50 mt-2 w-full -translate-x-1/2 rounded-[20px] border bg-white p-4 transition-all duration-300 lg:w-[860px]',
          isOpen && 'active'
        )}
      >
        <div className="grid grid-cols-12 items-start gap-y-6 md:gap-x-6">
          <div className="col-span-12 grid grid-cols-12 gap-x-6 lg:col-span-7">
            <div className="col-span-12 xl:col-span-6">
              <p className="text-tagline-2 text-secondary/60 p-3 font-medium">Resources</p>
              <ul>
                {resourceLinks.map((link) => (
                  <InnerPagesMenuLink key={link.label} {...link} onClose={handleClose} />
                ))}
              </ul>
            </div>
            <div className="col-span-12 xl:col-span-6">
              <p className="text-tagline-2 text-secondary/60 p-3 font-medium">Support &amp; Legal</p>
              <ul>
                {supportLinks.map((link) => (
                  <InnerPagesMenuLink key={link.label} {...link} onClose={handleClose} />
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <Link href="/downloads" onClick={handleClose} className="block">
              <article className="group border-stroke-1 relative space-y-3 overflow-hidden rounded-2xl border p-3">
                <figure className="relative min-h-[140px] w-full overflow-hidden rounded-lg">
                  <Image
                    src={promoImage}
                    alt="Nexus AI downloads"
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 300px"
                  />
                </figure>
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <p className="text-heading-6 text-secondary font-normal">Everywhere you work</p>
                    <p className="text-tagline-1 text-secondary/60 font-normal">
                      Desktop, mobile and browser, all synced.
                    </p>
                  </div>
                  <span className="bg-secondary group-hover:bg-primary-500 ring-background-12 relative flex h-9.5 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full px-5 py-2 ring-[6px] transition-all duration-500 ease-in-out">
                    <span className="relative flex size-6 items-center justify-center overflow-hidden">
                      <Image
                        src={newArrowWhite}
                        alt=""
                        width={24}
                        height={24}
                        className="absolute inset-0 size-full -translate-x-6 object-cover transition-transform duration-400 ease-in-out group-hover:translate-x-1"
                      />
                      <Image
                        src={newArrowWhite}
                        alt=""
                        width={24}
                        height={24}
                        className="size-full object-cover transition-transform duration-400 ease-in-out group-hover:translate-x-6"
                      />
                    </span>
                  </span>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
