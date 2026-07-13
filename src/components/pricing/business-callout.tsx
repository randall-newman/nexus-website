import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { CheckIcon } from '@/src/components/shared/icon';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import { Building2, Users } from 'lucide-react';
import Link from 'next/link';

const teamFeatures = [
  'Minimum 2 seats at $30/seat/month',
  'Shared admin dashboard',
  'Centralised billing and invoicing',
  'Team-wide usage analytics',
  'Collaboration across all workspaces',
  'Priority onboarding support',
];

const enterpriseFeatures = [
  'Custom contract and SLA',
  'SSO (Okta, Azure AD, Google)',
  'SCIM provisioning and RBAC',
  'Audit logs and compliance exports',
  'HIPAA-ready deployment option',
  'Dedicated account manager',
];

const addOns = [
  {
    title: 'Meeting Notes',
    description: 'Automatic transcription, AI summaries and action items — from $12/month.',
    href: '/pricing/meeting-notes',
    cta: 'See Meeting Notes pricing',
  },
  {
    title: 'AI Chatbot',
    description: 'Deploy a custom AI chatbot on your website or app — from $19/month.',
    href: '/pricing/chatbot',
    cta: 'See Chatbot pricing',
  },
  {
    title: 'Credits & Add-ons',
    description: 'Top up Creative Studio credits or buy extra Research Mode queries.',
    href: '/pricing/add-ons',
    cta: 'See add-ons',
  },
];

const BusinessCallout = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container space-y-5">
        {/* Section heading */}
        <div className="space-y-4 text-center mb-10">
          <RevealAnimation delay={0.1}>
            <BadgePrimary>Teams &amp; Enterprise</BadgePrimary>
          </RevealAnimation>
          <TextReveal delay={0.2}>
            <h2 className="text-secondary">Built for teams of any size</h2>
          </TextReveal>
        </div>

        {/* Team + Enterprise cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Teams */}
          <RevealAnimation delay={0.2} asChild={false}>
            <div className="flex flex-col gap-y-6 rounded-2xl border border-stroke-3 bg-white p-8">
              <div className="flex items-start gap-x-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                  <Users className="size-5 text-[#217bfe]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-[20px] font-semibold text-secondary">Teams</h3>
                  <p className="text-[13px] text-secondary/50">For teams of 2–150 people</p>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline gap-x-1">
                  <span className="text-[32px] font-bold text-secondary">$30</span>
                  <span className="text-[14px] text-secondary/50">/seat/month</span>
                </div>
                <p className="text-[12px] text-secondary/40">Billed monthly, minimum 2 seats</p>
              </div>

              <ul className="flex-1 space-y-2.5">
                {teamFeatures.map(f => (
                  <li key={f} className="flex items-start gap-x-2.5">
                    <span className="border-stroke-3 mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full border p-0.5">
                      <CheckIcon className="stroke-secondary size-2.5" />
                    </span>
                    <span className="text-[13px] text-secondary/70">{f}</span>
                  </li>
                ))}
              </ul>

              <Link href="/pricing/team">
                <ButtonPrimary className="w-full" textClassName="text-center flex-1 px-0! pr-8!">
                  See team pricing
                </ButtonPrimary>
              </Link>
            </div>
          </RevealAnimation>

          {/* Enterprise */}
          <RevealAnimation delay={0.3} asChild={false}>
            <div className="relative flex flex-col gap-y-6 overflow-hidden rounded-2xl bg-secondary p-8">
              {/* Glow */}
              <div
                className="pointer-events-none absolute -top-20 -right-20 size-56 rounded-full opacity-15 blur-3xl"
                style={{ background: 'var(--color-gradient-logo)' }}
              />

              <div className="relative flex items-start gap-x-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Building2 className="size-5 text-white" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-[20px] font-semibold text-white">Enterprise</h3>
                  <p className="text-[13px] text-white/50">Custom pricing for large organisations</p>
                </div>
              </div>

              <div className="relative space-y-1">
                <p className="text-[32px] font-bold text-white">Custom</p>
                <p className="text-[12px] text-white/40">Contact sales for a tailored quote</p>
              </div>

              <ul className="relative flex-1 space-y-2.5">
                {enterpriseFeatures.map(f => (
                  <li key={f} className="flex items-start gap-x-2.5">
                    <span className="mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full border border-white/25">
                      <CheckIcon className="size-2.5 stroke-white" />
                    </span>
                    <span className="text-[13px] text-white/70">{f}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact-sales" className="relative">
                <ButtonWhite className="w-full" textClassName="text-center flex-1 px-0! pr-8!">
                  Talk to sales
                </ButtonWhite>
              </Link>
            </div>
          </RevealAnimation>
        </div>

        {/* Add-ons strip */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {addOns.map((addon, i) => (
            <RevealAnimation
              key={addon.title}
              delay={0.1 * (i + 4)}
              asChild={false}
              className="flex flex-col justify-between gap-y-4 rounded-2xl border border-stroke-3 bg-white p-6"
            >
              <div className="space-y-1.5">
                <h3 className="text-[15px] font-semibold text-secondary">{addon.title}</h3>
                <p className="text-[13px] text-secondary/60 leading-relaxed">{addon.description}</p>
              </div>
              <Link href={addon.href} className="text-[13px] font-medium text-secondary underline underline-offset-2 hover:text-secondary/70 transition-colors">
                {addon.cta} →
              </Link>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessCallout;
