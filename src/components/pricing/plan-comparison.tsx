'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { CheckIcon } from '@/src/components/shared/icon';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonWhite } from '@/src/components/shared/ui/button';
import { Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

type Plan = {
  name: string;
  tagline: string;
  monthly: number;
  annualMonthly: number;
  annualBilled: number;
  description: string;
  inheritsFrom?: string;
  cta: string;
  href: string;
  dark?: boolean;
  badge?: string;
  badgeIcon?: React.ComponentType<{ className?: string }>;
  rows: string[];
};

const plans: Plan[] = [
  {
    name: 'Free',
    tagline: 'Explore Nexus AI',
    monthly: 0,
    annualMonthly: 0,
    annualBilled: 0,
    description: 'Try Nexus AI with no commitment. No credit card required.',
    cta: 'Try for Free',
    href: '/signup',
    rows: [
      'AI Chat (limited daily usage)',
      '3 Folders',
      'File Chat (limited)',
      'Limited memory and context',
      'Nexus AI Academic preview',
      'Creative Studio preview',
      'Code and Artifacts preview',
      '2 file uploads',
      'Nexus AI on web, iOS, Android, and Browser',
      'Community support',
    ],
  },
  {
    name: 'Premium',
    tagline: 'For individuals doing real work daily',
    monthly: 20,
    annualMonthly: 16,
    annualBilled: 192,
    description: 'Everything you need to finish real work, every day.',
    inheritsFrom: 'Free',
    cta: 'Get Premium',
    href: 'https://app.mynexusai.com/upgrade/premium',
    dark: true,
    badge: 'Most popular',
    badgeIcon: Sparkles,
    rows: [
      'Unlimited AI Chat',
      'Research Mode',
      'Unlimited Folders',
      'Full Nexus AI Academic workspace',
      'Creative Studio — image and audio generation',
      'Expanded memory',
      'Voice mode',
      'Code: generation, review and CLI',
      'Artifacts: full editing and export',
      'Unlimited file uploads',
      '50 Skills and 200 Artifacts',
      'Clean exports, no watermarks',
      'Standard support',
    ],
  },
  {
    name: 'Ultimate',
    tagline: 'Maximum power, no limits',
    monthly: 100,
    annualMonthly: 80,
    annualBilled: 960,
    description: 'Maximum power for people who live in Nexus AI.',
    inheritsFrom: 'Premium',
    cta: 'Get Ultimate',
    href: 'https://app.mynexusai.com/upgrade/ultimate',
    badge: 'Most powerful',
    badgeIcon: Zap,
    rows: [
      'Supercharged Research Mode',
      'Advanced AI models on every feature',
      'Advanced Nexus AI Academic',
      'Advanced image generation',
      'AI Video generation included',
      'Full Code access, all languages',
      'Canvas: unlimited documents',
      'Expanded file uploads',
      'Expanded voice mode',
      'Maximum memory and context',
      'Higher output limits on all tasks',
      'Unlimited Skills and Artifacts',
      'Priority processing and support',
      'Early access to new features',
    ],
  },
];

/* ─── Plan card ─────────────────────────────────────── */

function PlanCard({ plan, price, isYearly }: { plan: Plan; price: number; isYearly: boolean }) {
  const BadgeIcon = plan.badgeIcon;

  if (plan.dark) {
    return (
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-secondary p-8">
        {/* Glow */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full opacity-15 blur-3xl"
          style={{ background: 'var(--color-gradient-logo)' }}
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-16 size-64 rounded-full opacity-10 blur-3xl"
          style={{ background: 'var(--color-gradient-logo)' }}
        />

        <div className="relative flex flex-col gap-y-7 h-full">
          {/* Top: badge + name + price */}
          <div className="space-y-5">
            {plan.badge && BadgeIcon && (
              <span
                className="inline-flex items-center gap-x-1.5 rounded-full px-3 py-1 text-[12px] font-semibold text-white"
                style={{ background: 'rgba(255,255,255,0.15)' }}
              >
                <BadgeIcon className="size-3" />
                {plan.badge}
              </span>
            )}
            <div className="space-y-1">
              <h3 className="text-[22px] font-semibold text-white">{plan.name}</h3>
              <p className="text-[13px] text-white/50">{plan.tagline}</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-baseline gap-x-1">
                <span className="text-[40px] font-bold leading-none text-white">${price}</span>
                <span className="text-[14px] text-white/50">/month</span>
              </div>
            </div>
            {plan.inheritsFrom && (
              <p className="text-[12px] text-white/40">Everything in {plan.inheritsFrom}, plus:</p>
            )}
          </div>

          {/* CTA */}
          <Link href={plan.href} target="_blank" rel="noopener noreferrer" className="block">
            <ButtonWhite className="w-full" textClassName="text-center flex-1 px-0! pr-8!">
              {plan.cta}
            </ButtonWhite>
          </Link>

          {/* Divider */}
          <div className="border-t border-white/10" />

          {/* Features */}
          <ul className="flex-1 space-y-3">
            {plan.rows.map((row) => (
              <li key={row} className="flex items-start gap-x-2.5">
                <span className="mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full border border-white/25">
                  <CheckIcon className="size-2.5 stroke-white" />
                </span>
                <span className="text-[13px] text-white leading-relaxed">{row}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  /* Light card (Free & Ultimate) */
  return (
    <div className="flex h-full w-full flex-col rounded-2xl border border-stroke-3 bg-white p-8">
      <div className="space-y-5">
        {plan.badge && BadgeIcon ? (
          <span
            className="inline-flex items-center gap-x-1.5 rounded-full px-3 py-1 text-[12px] font-semibold text-secondary"
            style={{ background: 'rgba(0,12,96,0.07)' }}
          >
            <BadgeIcon className="size-3" />
            {plan.badge}
          </span>
        ) : (
          <div className="h-6" />
        )}
        <div className="space-y-1">
          <h3 className="text-[22px] font-semibold text-secondary">{plan.name}</h3>
          <p className="text-[13px] text-secondary/50">{plan.tagline}</p>
        </div>
        <div className="space-y-1">
          <div className="flex items-baseline gap-x-1">
            <span className="text-[40px] font-bold leading-none text-secondary">${price}</span>
            <span className="text-[14px] text-secondary/50">/month</span>
          </div>
        </div>
        {plan.inheritsFrom ? (
          <p className="text-[12px] text-secondary/40">Everything in {plan.inheritsFrom}, plus:</p>
        ) : (
          <p className="text-[12px] text-secondary/40">No credit card required</p>
        )}
      </div>

      <Link href={plan.href} target="_blank" rel="noopener noreferrer" className="block mt-6">
        <ButtonWhite className="w-full" textClassName="text-center flex-1 px-0! pr-8!">
          {plan.cta}
        </ButtonWhite>
      </Link>

      <div className="my-6 border-t border-stroke-3" />

      <ul className="flex-1 space-y-3">
        {plan.rows.map((row) => (
          <li key={row} className="flex items-start gap-x-2.5">
            <span className="border-stroke-3 mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full border p-0.5">
              <CheckIcon className="stroke-secondary size-2.5" />
            </span>
            <span className="text-[13px] text-secondary/70 leading-relaxed">{row}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Exported plans grid (also used by homepage) ─── */

export const PricingPlansGrid = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div className="space-y-10 lg:space-y-12">
      {/* Toggle */}
      <RevealAnimation delay={0.3} className="flex justify-center">
        <div className="flex items-center justify-center gap-x-4">
          <button
            type="button"
            onClick={() => setIsYearly(false)}
            className={`text-[15px] font-medium transition-colors cursor-pointer ${!isYearly ? 'text-secondary' : 'text-secondary/40'}`}
          >
            Monthly
          </button>

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

          <button
            type="button"
            onClick={() => setIsYearly(true)}
            className={`flex items-center gap-x-2 text-[15px] font-medium transition-colors cursor-pointer ${isYearly ? 'text-secondary' : 'text-secondary/40'}`}
          >
            Yearly
            <span className="rounded-full bg-green-100 px-2 py-0.5 text-[11px] font-semibold text-green-700">
              Save up to 20%
            </span>
          </button>
        </div>
      </RevealAnimation>

      {/* Cards */}
      <div className="grid grid-cols-1 items-stretch gap-y-5 md:grid-cols-3 md:gap-5">
        {plans.map((plan, index) => {
          const price = isYearly ? plan.annualMonthly : plan.monthly;
          return (
            <RevealAnimation key={plan.name} delay={0.1 * (index + 1)} asChild={false} className="flex">
              <PlanCard plan={plan} price={price} isYearly={isYearly} />
            </RevealAnimation>
          );
        })}
      </div>

      {/* Add-on links */}
      <RevealAnimation
        delay={0.5}
        asChild={false}
        className="rounded-2xl border border-stroke-3 bg-white px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3"
      >
        <p className="text-[14px] text-secondary/60">Looking for specialised pricing?</p>
        <div className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-1">
          {[
            { label: 'Teams', href: '/pricing/team' },
            { label: 'Meeting Notes', href: '/pricing/meeting-notes' },
            { label: 'Chatbot', href: '/pricing/chatbot' },
            { label: 'Credits & Add-ons', href: '/pricing/add-ons' },
          ].map(l => (
            <Link
              key={l.label}
              href={l.href}
              className="text-[14px] text-secondary font-medium underline underline-offset-2 hover:text-secondary/70 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </RevealAnimation>
    </div>
  );
};

/* ─── Full page wrapper ─────────────────────────────── */

const PlanComparison = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-10 lg:space-y-14">
          <div className="space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Pricing</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h1>Simple, Transparent Pricing</h1>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-background-14/60 mx-auto max-w-[520px] text-lg leading-relaxed">
                From a free start to unlimited power.
                <br />
                Choose the plan that matches how you work.
              </p>
            </TextReveal>
          </div>

          <PricingPlansGrid />
        </div>
      </div>
    </section>
  );
};

export default PlanComparison;
