'use client';

import newArrowWhite from '@/public/images/icons/new-arrow-white.svg';
import {
  AnalyticsIcon,
  BrandKitIcon,
  ChangeLogIcon,
  ExploreProductIcon,
  FeatureIcon,
  IntegrationIconV2,
  ManifestoIcon,
  TutorialIcon,
  WhitePaperIcon,
  WhitePaperIconV2,
} from '@/src/components/shared/icon/menu-icon';
import { InnerPagesMenuLink } from '@/src/components/shared/layout/navbar/inner-pages-menu-link';
import { cn } from '@/src/utils/cn';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import type { ComponentType } from 'react';

const MENU_PLATFORM_ID = 'platform-mega-menu-v2';

type PlatformLink = {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

type PromoCard = {
  image: string | StaticImageData;
  title: string;
  description: string;
  href: string;
};

const overviewLinks: PlatformLink[] = [
  { label: 'All products', href: '/products', icon: ExploreProductIcon },
  { label: 'Chatbot', href: '/products/chatbot', icon: IntegrationIconV2 },
  { label: 'Code', href: '/products/code', icon: ChangeLogIcon },
  { label: 'Creative Studio', href: '/products/creative-studio', icon: BrandKitIcon },
  { label: 'Notes', href: '/products/ai-meeting-notes', icon: ManifestoIcon },
];

const featureLinks: PlatformLink[] = [
  { label: 'All features', href: '/features', icon: FeatureIcon },
  { label: 'Academic Research', href: '/features/academic-research', icon: TutorialIcon },
  { label: 'AI Essay Writer', href: '/features/essay-writer', icon: WhitePaperIcon },
  { label: 'AI File Chat', href: '/features/ai-file-chat', icon: WhitePaperIconV2 },
  { label: 'AI Presentation Maker', href: '/features/presentation', icon: AnalyticsIcon },
];

interface PlatformMenuProps {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}

export const PlatformMenu = ({ menuDropdownId, setMenuDropdownId }: PlatformMenuProps) => {
  const handleClose = () => setMenuDropdownId(null);
  const isOpen = menuDropdownId === MENU_PLATFORM_ID;

  return (
    <div>
      <div className="dropdown-menu-bridge pointer-events-none fixed top-full left-1/2 z-40 h-3 w-full -translate-x-1/2 bg-transparent transition-opacity duration-300 lg:w-[1290px]" />
      <div
        id={MENU_PLATFORM_ID}
        className={cn(
          'dropdown-menu border-stroke-1 fixed top-full left-1/2 z-50 mt-2 w-full -translate-x-1/2 rounded-[20px] border bg-white p-4 transition-all duration-300 lg:w-[1290px]',
          isOpen && 'active'
        )}
      >
        <div className="grid grid-cols-12 items-start gap-y-6 md:gap-x-6">
          <div className="col-span-12 grid grid-cols-12 gap-x-6 lg:col-span-6">
            <div className="col-span-12 xl:col-span-6">
              <p className="text-tagline-2 text-secondary/60 p-3 font-medium">Overview</p>
              <ul>
                {overviewLinks.map((link) => (
                  <InnerPagesMenuLink key={link.label} {...link} onClose={handleClose} />
                ))}
              </ul>
            </div>
            <div className="col-span-12 xl:col-span-6">
              <p className="text-tagline-2 text-secondary/60 p-3 font-medium">Features</p>
              <ul>
                {featureLinks.map((link) => (
                  <InnerPagesMenuLink key={link.label} {...link} onClose={handleClose} />
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-12 grid grid-cols-12 gap-x-6 lg:col-span-6">
            {([
              {
                image: '/images/nexus-creative-studio-preview.jpg',
                title: 'Creative Studio',
                description: 'Generate images, audio and video.',
                href: '/products/creative-studio',
              },
              {
                image: '/images/nexus-chat-preview.jpg',
                title: 'Nexus AI Chat',
                description: 'Your AI, always ready to help.',
                href: '/products/chat',
              },
            ] as PromoCard[]).map((card) => (
              <div key={card.title} className="col-span-12 xl:col-span-6">
                <Link href={card.href} onClick={handleClose} className="block">
                  <article className="group border-stroke-1 space-y-3 rounded-2xl border p-3">
                    <figure className="overflow-hidden rounded-lg">
                      {typeof card.image === 'string' ? (
                        <img
                          src={card.image}
                          alt="Featured"
                          className="size-full w-full rounded-lg object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                      ) : (
                        <Image
                          src={card.image}
                          alt="Featured"
                          className="size-full rounded-lg object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                          sizes="(max-width: 1280px) 50vw, 300px"
                        />
                      )}
                    </figure>
                    <div className="space-y-14">
                      <div>
                        <p className="text-heading-6 text-secondary font-normal">{card.title}</p>
                        <p className="text-tagline-1 text-secondary/60 font-normal">
                          {card.description}
                        </p>
                      </div>
                      <div>
                        <span className="bg-secondary group-hover:bg-primary-500 ring-background-12 relative flex h-9.5 w-16 items-center justify-center overflow-hidden rounded-full px-5 py-2 ring-[6px] transition-all duration-500 ease-in-out">
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
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
