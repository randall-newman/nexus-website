import {
  faAndroid,
  faApple,
  faChrome,
  faLinux,
  faOpera,
  faWindows,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonWhite } from '@/src/components/shared/ui/button';
import Link from 'next/link';

const platforms = [
  { label: 'Mac', icon: faApple, href: '/downloads/mac', external: false },
  { label: 'Windows', icon: faWindows, href: '/downloads/windows', external: false },
  { label: 'Linux', icon: faLinux, href: '/downloads', external: false },
  { label: 'Android', icon: faAndroid, href: '/downloads/mobile', external: false },
  { label: 'iOS', icon: faApple, href: '/downloads/mobile', external: false },
  {
    label: 'Chrome Extension',
    icon: faChrome,
    href: 'https://chromewebstore.google.com/detail/megonkedidbhgokacgilpjmhlbbhanck',
    external: true,
  },
  {
    label: 'Opera Extension',
    icon: faOpera,
    href: 'https://addons.opera.com/extensions/details/nexus-ai-all-in-one-ai-assistant/',
    external: true,
  },
];

const DownloadsStrip = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="border-stroke-3 flex flex-col items-center gap-y-8 rounded-2xl border bg-white px-5 py-14 text-center md:px-10">
          <div className="space-y-5">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Downloads</BadgePrimary>
            </RevealAnimation>
            <div className="space-y-3">
              <TextReveal delay={0.2}>
                <h2>Nexus AI, wherever you work</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-background-14/60 mx-auto max-w-[480px]">
                  Start a chat on your phone, pick up the draft on your laptop. Everything follows
                  you.
                </p>
              </TextReveal>
            </div>
          </div>

          <RevealAnimation delay={0.4}>
            <ul className="flex flex-wrap items-center justify-center gap-3">
              {platforms.map((platform) => (
                <li key={platform.label}>
                  <Link
                    href={platform.href}
                    target={platform.external ? '_blank' : undefined}
                    rel={platform.external ? 'noopener noreferrer' : undefined}
                    className="border-stroke-3 text-tagline-2 text-secondary hover:border-secondary/40 flex items-center gap-x-2 rounded-full border px-5 py-2 font-normal transition-colors duration-200"
                  >
                    <FontAwesomeIcon icon={platform.icon} className="size-4" />
                    {platform.label}
                  </Link>
                </li>
              ))}
            </ul>
          </RevealAnimation>

          <RevealAnimation delay={0.5}>
            <Link href="/downloads">
              <ButtonWhite
                className="mx-auto w-[80%]! md:w-fit!"
                textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
              >
                Get Nexus AI
              </ButtonWhite>
            </Link>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default DownloadsStrip;
