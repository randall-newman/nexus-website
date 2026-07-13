'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { CheckIcon } from '@/src/components/shared/icon';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import { cn } from '@/src/utils/cn';
import Link from 'next/link';
import { useState } from 'react';

const individualPlans = [
  {
    name: 'Free',
    monthly: 0,
    annualMonthly: 0,
    tagline: 'Try Nexus AI with no commitment.',
    inheritsFrom: undefined as string | undefined,
    cta: 'Start for free',
    href: 'https://app.mynexusai.com/signup',
    highlights: ['Limited AI Chat and File Chat', '3 Folders', 'Academic, Creative and Code preview'],
    perSeat: false,
  },
  {
    name: 'Premium',
    monthly: 20,
    annualMonthly: 16,
    tagline: 'Everything you need to finish real work, every day.',
    inheritsFrom: 'Free' as string | undefined,
    cta: 'Get Premium',
    href: 'https://app.mynexusai.com/upgrade/premium',
    featured: true,
    highlights: [
      'Unlimited AI Chat and Research Mode',
      'Full Nexus AI Academic workspace',
      'Creative Studio, Code and Canvas',
    ],
    perSeat: false,
  },
  {
    name: 'Ultimate',
    monthly: 100,
    annualMonthly: 80,
    tagline: 'Maximum power for people who live in Nexus AI.',
    inheritsFrom: 'Premium' as string | undefined,
    cta: 'Get Ultimate',
    href: 'https://app.mynexusai.com/upgrade/ultimate',
    highlights: [
      'Unlimited Research Mode and Academic',
      '750 Creative Studio credits/month',
      'Advanced models and priority processing',
    ],
    perSeat: false,
  },
];

const PricingTeaser = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-10 lg:space-y-14">
          <div className="space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Pricing</BadgePrimary>
            </RevealAnimation>
            <div className="space-y-3">
              <TextReveal delay={0.2}>
                <h2>Simple pricing, built to scale with you</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-background-14/60 mx-auto max-w-[480px]">
                  Start free, no card required. Upgrade when you&rsquo;re ready.
                </p>
              </TextReveal>
            </div>
          </div>

          <RevealAnimation delay={0.3} className="flex justify-center">
            <div className="flex items-center gap-x-3">
              <span className="text-tagline-2 text-secondary font-normal select-none">Monthly</span>
              <label className="inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  checked={isYearly}
                  onChange={(e) => setIsYearly(e.target.checked)}
                  className="peer sr-only"
                  aria-label="Toggle yearly billing"
                />
                <div className="bg-secondary peer peer-checked:after:border-buffer after:shadow-16 relative h-6 w-11.5 rounded-full peer-focus:outline-0 after:absolute after:inset-s-[2px] after:top-1/2 after:size-5 after:-translate-y-1/2 after:rounded-full after:bg-(image:--color-gradient-logo) after:transition-all after:content-[''] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full" />
              </label>
              <span className="text-tagline-2 text-secondary font-normal select-none">
                Yearly <span className="text-primary-500">(save up to 20%)</span>
              </span>
            </div>
          </RevealAnimation>

          {/* Individual plans: Free, Premium, Ultimate */}
          <div className="grid grid-cols-12 gap-y-5 md:gap-4">
            {individualPlans.map((plan, index) => {
              const price = isYearly ? plan.annualMonthly : plan.monthly;

              return (
                <RevealAnimation
                  key={plan.name}
                  delay={0.1 * (index + 1)}
                  className="col-span-12 md:col-span-4"
                >
                  <div
                    className={cn(
                      'border-stroke-3 flex h-full flex-col gap-y-6 rounded-2xl border bg-white p-6',
                      plan.featured && 'border-secondary'
                    )}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-heading-6">{plan.name}</h3>
                        {plan.featured ? <BadgePrimary>Most popular</BadgePrimary> : null}
                      </div>
                      <p className="text-tagline-3 text-secondary/60">{plan.tagline}</p>
                      <div>
                        <span className="text-heading-4 text-secondary font-bold">${price}</span>
                        <span className="text-tagline-2 text-secondary/60">/month</span>
                        {plan.inheritsFrom && (
                          <p className="text-tagline-3 text-secondary/50 mt-0.5">
                            Everything in {plan.inheritsFrom}, plus:
                          </p>
                        )}
                      </div>
                    </div>

                    <ul className="flex-1 space-y-2.5">
                      {plan.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-x-2">
                          <span className="border-stroke-3 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border p-0.5">
                            <CheckIcon className="stroke-secondary size-3" />
                          </span>
                          <span className="text-tagline-2 text-secondary/80">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href={plan.href} target="_blank" rel="noopener noreferrer" className="block">
                      {plan.featured ? (
                        <ButtonPrimary className="w-full" textClassName="text-center flex-1 px-0! pr-8!">
                          {plan.cta}
                        </ButtonPrimary>
                      ) : (
                        <ButtonWhite className="w-full" textClassName="text-center flex-1 px-0! pr-8!">
                          {plan.cta}
                        </ButtonWhite>
                      )}
                    </Link>
                  </div>
                </RevealAnimation>
              );
            })}
          </div>

          {/* Teams plan — displayed separately below */}
          <RevealAnimation delay={0.4} asChild={false} className="border-stroke-3 rounded-2xl border bg-white p-6 md:flex md:items-center md:gap-x-10">
            <div className="flex-1 space-y-3 mb-6 md:mb-0">
              <div className="flex items-center gap-x-3">
                <h3 className="text-heading-6">Teams</h3>
                <span className="text-tagline-3 text-secondary/50 rounded-full border border-stroke-3 px-3 py-1">
                  Billed monthly per seat
                </span>
              </div>
              <p className="text-tagline-2 text-secondary/60">One AI workspace for your whole team. Minimum 2 members.</p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {['Per seat, minimum 2 members', 'Shared Folders and credit pool', 'Central billing and admin controls'].map((item) => (
                  <li key={item} className="flex items-center gap-x-2">
                    <span className="border-stroke-3 flex size-5 shrink-0 items-center justify-center rounded-full border p-0.5">
                      <CheckIcon className="stroke-secondary size-3" />
                    </span>
                    <span className="text-tagline-2 text-secondary/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start gap-y-3 md:items-end md:shrink-0">
              <div className="text-left md:text-right">
                <span className="text-heading-4 text-secondary font-bold">$30</span>
                <span className="text-tagline-2 text-secondary/60">/seat/month</span>
              </div>
              <Link href="/pricing/team" className="block w-full md:w-auto">
                <ButtonWhite className="w-full md:w-auto" textClassName="text-center flex-1 px-0! pr-8!">
                  Explore Team Plan
                </ButtonWhite>
              </Link>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.5} className="flex justify-center">
            <Link href="/pricing">
              <ButtonPrimary
                className="mx-auto md:w-fit!"
                textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
              >
                Compare all plans
              </ButtonPrimary>
            </Link>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default PricingTeaser;
