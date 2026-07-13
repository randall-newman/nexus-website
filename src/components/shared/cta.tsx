'use client';

import globeImg from '@/public/images/ns-img-26.svg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import {
  faAndroid,
  faApple,
  faChrome,
  faWindows,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type PlatformInfo = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

function detectPlatform(): PlatformInfo {
  if (typeof navigator === 'undefined') {
    return { label: 'Download', href: '/downloads', icon: <Download className="size-4" /> };
  }
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/i.test(ua)) {
    return {
      label: 'Get on iOS',
      href: '/downloads/mobile',
      icon: <FontAwesomeIcon icon={faApple} className="size-4" />,
    };
  }
  if (/Android/i.test(ua)) {
    return {
      label: 'Get on Android',
      href: '/downloads/mobile',
      icon: <FontAwesomeIcon icon={faAndroid} className="size-4" />,
    };
  }
  if (/Mac/i.test(ua)) {
    return {
      label: 'Download for Mac',
      href: '/downloads/mac',
      icon: <FontAwesomeIcon icon={faApple} className="size-4" />,
    };
  }
  if (/Win/i.test(ua)) {
    return {
      label: 'Download for Windows',
      href: '/downloads/windows',
      icon: <FontAwesomeIcon icon={faWindows} className="size-4" />,
    };
  }
  return {
    label: 'Get the extension',
    href: 'https://chromewebstore.google.com/detail/megonkedidbhgokacgilpjmhlbbhanck',
    icon: <FontAwesomeIcon icon={faChrome} className="size-4" />,
  };
}

const SparkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-4"
    aria-hidden
  >
    <path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" />
  </svg>
);

const CTA = () => {
  const [platform, setPlatform] = useState<PlatformInfo | null>(null);

  useEffect(() => {
    // Detect platform client-side after mount (window is not available on server)
    const p = detectPlatform();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPlatform(p);
  }, []);

  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <RevealAnimation delay={0.1}>
        <div className="main-container">
          <div className="relative overflow-hidden rounded-2xl bg-white px-5 pt-20 pb-20 md:px-16 md:pt-39 md:pb-39 lg:pt-60">
            <RevealAnimation
              delay={0.2}
              className="absolute top-15 left-1/2 z-10 size-[639px] -translate-x-1/2"
            >
              <figure>
                <Image src={globeImg} alt="globe" className="size-full object-cover" />
              </figure>
            </RevealAnimation>

            <div className="relative z-20 space-y-8">
              <div className="space-y-5 text-center">
                <RevealAnimation delay={0.3}>
                  <BadgePrimary>Get started</BadgePrimary>
                </RevealAnimation>

                <div className="space-y-3">
                  <TextReveal delay={0.4}>
                    <h2 className="mx-auto text-[clamp(1.4rem,3.8vw,3.25rem)]">
                      <span className="block whitespace-nowrap">One AI workspace.</span>
                      <span className="block whitespace-nowrap">Finished work, not just chat.</span>
                    </h2>
                  </TextReveal>
                  <TextReveal delay={0.5}>
                    <p className="text-background-14/60 mx-auto max-w-[550px]">
                      Research, write, design and code in one place.
                      <br />
                      Start free, no card required.
                    </p>
                  </TextReveal>
                </div>
              </div>

              <RevealAnimation delay={0.6} asChild={false} className="flex flex-wrap items-center justify-center gap-3">
                <Link href="https://app.mynexusai.com/signup" target="_blank" rel="noopener noreferrer">
                  <ButtonPrimary
                    className="mx-auto md:mx-0 md:w-fit!"
                    textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
                  >
                    <span className="flex items-center gap-1.5">
                      <SparkIcon />
                      Join Nexus AI
                      <span className="opacity-60 text-[0.75em] font-normal ml-0.5">It&apos;s free</span>
                    </span>
                  </ButtonPrimary>
                </Link>

                {platform && (
                  <Link
                    href={platform.href}
                    target={platform.href.startsWith('http') ? '_blank' : undefined}
                    rel={platform.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <ButtonWhite
                      className="mx-auto md:mx-0 md:w-fit!"
                      textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
                    >
                      <span className="flex items-center gap-2">
                        {platform.icon}
                        {platform.label}
                      </span>
                    </ButtonWhite>
                  </Link>
                )}
              </RevealAnimation>
            </div>

            <div
              className="absolute bottom-0 left-0 z-10 h-[300px] w-full rounded-b-[20px] lg:h-[390px]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0) -59.75%, rgba(255, 255, 255, 0.5) -10.1%, rgba(255, 255, 255, 0.8) 30.12%, #fff 70.98%)',
              }}
            />
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default CTA;
