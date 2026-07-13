import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd } from '@/src/utils/structured-data';
import { JsonLd } from '@/src/components/shared/json-ld';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import CTA from '@/src/components/shared/cta';
import { CheckIcon } from '@/src/components/shared/icon';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'AI Credit Top-ups | Nexus AI',
    'Top up your Nexus AI credits with a one-time purchase. No plan change or subscription required.',
    '/pricing/add-ons'
  ),
};

const topUps = [
  {
    name: 'Starter',
    price: '$10',
    credits: '1,000 AI credits',
    studioCredits: '25 Creative Studio credits',
    advancedCredits: '100 Advanced model credits',
    bestFor: 'Extra chat and light image runs',
    featured: false,
  },
  {
    name: 'Growth',
    price: '$20',
    credits: '2,500 AI credits',
    studioCredits: '75 Creative Studio credits',
    advancedCredits: '250 Advanced model credits',
    bestFor: 'Regular bursts and Research Mode',
    featured: true,
  },
  {
    name: 'Power',
    price: '$50',
    credits: '7,500 AI credits',
    studioCredits: '250 Creative Studio credits',
    advancedCredits: '750 Advanced model credits',
    bestFor: 'Heavy research, video and audio',
    featured: false,
  },
];

export default function CreditsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Pricing', path: '/pricing' },
          { name: 'Credits', path: '/pricing/add-ons' },
        ])}
      />

      <section className="pt-32 pb-10 md:pt-40">
        <div className="main-container text-center space-y-5">
          <RevealAnimation delay={0.1}>
            <BadgePrimary>Credits</BadgePrimary>
          </RevealAnimation>
          <TextReveal delay={0.2}>
            <h1>Need more credits? Top up without upgrading</h1>
          </TextReveal>
          <TextReveal delay={0.3}>
            <p className="text-tagline-1 text-secondary/60 mx-auto max-w-[520px]">
              Every plan includes a monthly credit allowance. If you need more mid-month, top
              up instantly with a one-time purchase — no subscription required.
            </p>
          </TextReveal>
        </div>
      </section>

      <section className="pt-10 md:pt-14">
        <div className="main-container space-y-10">
          <div className="grid grid-cols-12 gap-y-5 md:gap-5">
            {topUps.map((pack, index) => (
              <RevealAnimation
                key={pack.name}
                delay={0.1 * (index + 1)}
                className="col-span-12 md:col-span-4"
              >
                <div
                  className={`border-stroke-3 flex h-full flex-col gap-y-6 rounded-2xl border bg-white p-8 ${
                    pack.featured ? 'border-secondary' : ''
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-heading-6">{pack.name}</h3>
                      {pack.featured && <BadgePrimary>Best value</BadgePrimary>}
                    </div>
                    <div className="flex items-baseline gap-x-1">
                      <p className="text-heading-4 text-secondary font-bold">{pack.price}</p>
                      <p className="text-tagline-2 text-secondary/50">one-time</p>
                    </div>
                  </div>
                  <ul className="flex-1 space-y-2">
                    {[pack.credits, pack.studioCredits, pack.advancedCredits].map((r) => (
                      <li key={r} className="flex items-center gap-2">
                        <span className="border-stroke-3 flex size-5 shrink-0 items-center justify-center rounded-full border p-0.5">
                          <CheckIcon className="stroke-secondary size-3" />
                        </span>
                        <span className="text-tagline-2 text-secondary/80">{r}</span>
                      </li>
                    ))}
                    <li className="text-tagline-3 text-secondary/50 pt-1">
                      Best for: {pack.bestFor}
                    </li>
                  </ul>
                  <Link
                    href="https://app.mynexusai.com/upgrade/credits"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {pack.featured ? (
                      <ButtonPrimary
                        className="w-full"
                        textClassName="text-center flex-1 px-0! pr-8!"
                      >
                        Buy {pack.name}
                      </ButtonPrimary>
                    ) : (
                      <ButtonWhite
                        className="w-full"
                        textClassName="text-center flex-1 px-0! pr-8!"
                      >
                        Buy {pack.name}
                      </ButtonWhite>
                    )}
                  </Link>
                </div>
              </RevealAnimation>
            ))}
          </div>

          <RevealAnimation
            delay={0.5}
            asChild={false}
            className="rounded-2xl border border-stroke-3 bg-white p-6 text-center space-y-2"
          >
            <p className="text-tagline-1 text-secondary/70">
              Looking for Meeting Notes pricing?{' '}
              <Link href="/pricing/meeting-notes" className="text-secondary font-medium underline">
                See Meeting Notes plans
              </Link>
              .
            </p>
          </RevealAnimation>
        </div>
      </section>

      <CTA />
    </>
  );
}
