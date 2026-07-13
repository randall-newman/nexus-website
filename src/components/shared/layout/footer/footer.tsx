import mainLogo from '@/public/images/logo/main-logo.svg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { FooterBottom } from '@/src/components/shared/layout/footer/footer-bottom';
import { FooterLinkGroups } from '@/src/components/shared/layout/footer/footer-link-groups';
import { FooterSocialLinks } from '@/src/components/shared/layout/footer/footer-social-links';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer bg-background-13 relative z-0 overflow-hidden">
      <div className="main-container px-5">
        <div className="space-y-14 pt-32 pb-12 lg:space-y-16 lg:pt-39">
          <RevealAnimation delay={0.1}>
            <div className="flex flex-col items-start justify-between gap-y-8 lg:flex-row lg:items-end">
              <div className="max-w-[480px]">
                <Link href="/">
                  <span className="sr-only">Nexus AI</span>
                  <figure>
                    <Image src={mainLogo} alt="Nexus AI logo" width={209} height={40} />
                  </figure>
                </Link>
                <p className="text-background-14/60 text-tagline-1 mt-4 font-normal">
                  Nexus AI is the AI workspace that finishes your work. Research, write, design and
                  code in one place, built by Verbosec.
                </p>
              </div>
              <FooterSocialLinks />
            </div>
          </RevealAnimation>

          <div className="bg-stroke-3 h-px w-full" />

          <FooterLinkGroups />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
