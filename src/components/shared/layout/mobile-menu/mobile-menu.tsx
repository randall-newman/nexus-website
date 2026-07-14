'use client';
import logo from '@/public/images/logo/logo.svg';
import MenuCloseButton from '@/src/components/shared/layout/mobile-menu/menu-close-button';
import MobileMenuItem from '@/src/components/shared/layout/mobile-menu/mobile-menu-item';
import { useMobileMenuContext } from '@/src/context/MobileMenuContext';
import { ButtonPrimary } from '@/src/components/shared/ui/button';
import { cn } from '@/src/utils/cn';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface MobileMenuItem {
  id: string;
  label: string;
  href: string;
}

export interface MobileMenuGroup {
  id: string;
  title: string;
  href?: string;
  submenu: MobileMenuItem[];
}

const MobileMenu = ({ menuData }: { menuData: MobileMenuGroup[] }) => {
  const { isOpen, closeMenu } = useMobileMenuContext();
  const { status } = useSession();
  const pathname = usePathname();

  const isActiveLink = (href: string) =>
    pathname === href || (href !== '#' && pathname.startsWith(href + '/'));

  return (
    <aside
      className={cn(
        'sidebar scroll-bar border-stroke-3/18 fixed top-0 right-0 z-9999 h-screen w-full translate-x-full border-l bg-white transition-all duration-300 sm:w-1/2 sm:rounded-l-xl xl:hidden',
        isOpen && 'translate-x-0'
      )}
    >
      <div className="space-y-4 p-5 sm:p-8 lg:p-9">
        <div className="flex items-center justify-between">
          <Link href="/">
            <span className="sr-only">Home</span>
            <figure className="max-w-[44px]">
              <Image src={logo} alt="Nexus AI" width={44} height={44} className="block w-full" />
            </figure>
          </Link>
          <MenuCloseButton />
        </div>

        <div className="scroll-bar mt-6 h-[85vh] w-full overflow-x-hidden overflow-y-auto pb-10">
          <ul className="space-y-2">
            {menuData.map((item) => (
              <MobileMenuItem
                key={item.id}
                id={item.id}
                title={item.title}
                href={item.href}
                hasSubmenu={item.submenu.length > 0}
              >
                {item.submenu.map((subItem, idx) => {
                  const isExternal = subItem.href.startsWith('http');
                  return (
                    <li key={subItem.id}>
                      <Link
                        href={subItem.href}
                        onClick={closeMenu}
                        data-selected={!isExternal && isActiveLink(subItem.href) ? true : undefined}
                        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className={cn(
                          'text-tagline-3 text-secondary/80 hover:text-secondary/90 ml-4 block text-left font-normal transition-colors duration-200 data-[selected=true]:font-medium data-[selected=true]:text-secondary',
                          idx === 0 ? 'py-1.5' : 'py-2.5'
                        )}
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  );
                })}
              </MobileMenuItem>
            ))}
          </ul>

          {/* Mirrors the desktop header CTA, placed below the Login item:
              Try for Free when signed out, Pricing when signed in. */}
          <div className="mt-4">
            <Link
              href={status === 'authenticated' ? '/pricing' : '/signup'}
              onClick={closeMenu}
              className="block"
              aria-label={status === 'authenticated' ? 'Pricing' : 'Try for Free'}
            >
              <ButtonPrimary className="w-full" textClassName="text-center text-nowrap flex-1">
                {status === 'authenticated' ? 'Pricing' : 'Try for Free'}
              </ButtonPrimary>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

MobileMenu.displayName = 'MobileMenu';
export default MobileMenu;
