import chatbotHeroImg from '@/public/images/opai-img-138.jpg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { CheckIcon } from '@/src/components/shared/icon';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import FunctionsSection from './functions-section';
import {
  FileText,
  Globe,
  Key,
  Lock,
  MessageSquare,
  Shield,
  ShieldCheck,
  Users,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

/* ─── Data ──────────────────────────────────────────────── */

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Built to pass security review',
    body: 'SOC 2 Type II, GDPR, SSO, SCIM, audit logs, and data residency. Every enterprise control included by default — not added on as a premium tier.',
  },
  {
    icon: Zap,
    title: 'No model training on your data',
    body: 'Your prompts, documents, and outputs are never used to train Nexus AI models. This applies to every plan and is contractually binding for Enterprise customers.',
  },
  {
    icon: MessageSquare,
    title: 'One platform for every team',
    body: 'Deploy once across your entire organisation. Chat, file analysis, document creation, code, meeting notes — all in a single workspace every team can use from day one.',
  },
];

const securityItems = [
  {
    category: 'Identity & Access',
    items: [
      'SAML 2.0 and OIDC single sign-on',
      'SCIM automated user provisioning',
      'Role-based access control with custom roles',
      'Per-workspace permission policies',
    ],
  },
  {
    category: 'Data & Privacy',
    items: [
      'Data residency selection (US or EU)',
      'User data never used to train AI models',
      'GDPR data processing agreement included',
      'BAA available for healthcare customers',
    ],
  },
  {
    category: 'Audit & Visibility',
    items: [
      'Full audit log with 12-month retention',
      'SIEM-compatible export via webhook',
      'Admin dashboard with real-time usage analytics',
      'Per-user activity reporting',
    ],
  },
  {
    category: 'Certifications',
    items: [
      'SOC 2 Type II report on request',
      'ISO 27001 in progress',
      'HIPAA-ready deployment available',
      'Custom security review supported',
    ],
  },
];

const supportFeatures = [
  {
    icon: Users,
    title: 'Named success manager',
    description: 'A dedicated contact who knows your deployment, your team structure, and your goals.',
  },
  {
    icon: Zap,
    title: 'Priority SLA',
    description: '4-hour response for critical issues, 24-hour for standard, guaranteed in writing.',
  },
  {
    icon: Globe,
    title: 'Custom onboarding',
    description: 'Live training sessions for every team, a rollout plan, and a configuration review before go-live.',
  },
  {
    icon: FileText,
    title: 'Quarterly business reviews',
    description: 'We meet every quarter to review adoption metrics, surface wins, and adjust your plan.',
  },
];

const contractItems = [
  'Custom master services agreement (MSA)',
  'GDPR data processing agreement (DPA)',
  'BAA for healthcare organisations',
  'Annual invoiced billing available',
  'Multi-year agreements with price locks',
  'Negotiated per-seat or usage-based pricing',
];

const integrations = [
  'Slack', 'Microsoft Teams', 'Google Workspace',
  'Salesforce', 'Notion', 'Confluence',
  'Jira', 'SharePoint', 'Zapier', 'Workday',
];

/* ─── Main component ────────────────────────────────────── */
const EnterprisePage = () => {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-[160px] pb-0">
        <figure className="absolute inset-0" aria-hidden="true">
          <Image
            src={chatbotHeroImg}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </figure>
        <div className="main-container relative z-10">
          <div className="mx-auto max-w-[860px] space-y-6 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Enterprise solutions</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h1 className="text-secondary leading-[1.1]">
                Put Nexus AI to work{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                >
                  across your organisation
                </span>
              </h1>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="mx-auto max-w-[600px] text-lg text-secondary/70 leading-relaxed">
                Help every team think deeper, move faster, and do more. One platform deployed
                organisation-wide, with the enterprise controls your IT and legal teams require.
              </p>
            </TextReveal>
            <RevealAnimation delay={0.4} asChild={false} className="flex flex-wrap justify-center gap-3">
              <Link href="/contact-sales">
                <ButtonPrimary textClassName="text-center text-nowrap">
                  Talk to sales
                </ButtonPrimary>
              </Link>
              <Link href="/pricing">
                <ButtonWhite textClassName="text-center text-nowrap">
                  Compare plans
                </ButtonWhite>
              </Link>
            </RevealAnimation>
          </div>

          {/* Trust strip */}
          <div className="relative z-10 mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 pb-16">
            {[
              { label: 'SOC 2 Type II', sub: 'Certified' },
              { label: 'GDPR', sub: 'Compliant by default' },
              { label: 'SSO & SCIM', sub: 'SAML 2.0 and OIDC' },
              { label: '0 data training', sub: 'Your data stays yours' },
            ].map((badge, i) => (
              <RevealAnimation
                key={badge.label}
                delay={0.1 * (i + 1)}
                asChild={false}
                className="border-stroke-3 rounded-2xl border bg-white/90 backdrop-blur-sm p-5 text-center"
              >
                <p className="text-heading-5 text-secondary font-bold">{badge.label}</p>
                <p className="text-tagline-3 text-secondary/50 mt-1">{badge.sub}</p>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ══ VALUE PILLARS ═════════════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <RevealAnimation
                key={pillar.title}
                delay={0.1 * (i + 1)}
                asChild={false}
                className="border-stroke-3 rounded-2xl border bg-white p-6 space-y-4"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary-50">
                  <pillar.icon className="size-5 text-primary-500" />
                </div>
                <h3 className="text-heading-6 text-secondary">{pillar.title}</h3>
                <p className="text-tagline-2 text-secondary/60">{pillar.body}</p>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ══ REAL WORK, ACROSS EVERY FUNCTION ═════════════════ */}
      <FunctionsSection />

      {/* ══ SECURITY & COMPLIANCE ════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-12 gap-y-12 lg:gap-x-14">
            <div className="col-span-12 space-y-5 lg:col-span-5">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Security and compliance</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Enterprise-grade security, included by default</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-tagline-1 text-secondary/60">
                  Every enterprise deployment ships with the controls your IT, legal,
                  and compliance teams require. No separate security tier, no hidden add-ons.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false} className="space-y-3">
                {[
                  { icon: Lock, label: 'Zero-training guarantee', note: 'Your data is never used to train our models.' },
                  { icon: ShieldCheck, label: 'SOC 2 Type II certified', note: 'Report available on request under NDA.' },
                  { icon: Key, label: 'End-to-end encryption', note: 'At rest (AES-256) and in transit (TLS 1.3).' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-x-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-50">
                      <item.icon className="size-4 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-tagline-2 text-secondary font-medium">{item.label}</p>
                      <p className="text-tagline-3 text-secondary/50">{item.note}</p>
                    </div>
                  </div>
                ))}
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <Link href="/trust" className="text-tagline-2 text-primary-500 underline underline-offset-2 hover:text-primary-600 transition-colors">
                  View full Trust & Safety documentation
                </Link>
              </RevealAnimation>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <RevealAnimation
                delay={0.3}
                asChild={false}
                className="border-stroke-3 rounded-2xl border bg-white p-6 space-y-5"
              >
                {securityItems.map((group) => (
                  <div key={group.category}>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-secondary/40 mb-3">
                      {group.category}
                    </p>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-x-2">
                          <span className="border-stroke-3 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border p-0.5">
                            <CheckIcon className="stroke-secondary size-3" />
                          </span>
                          <span className="text-tagline-2 text-secondary/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SUPPORT ═════════════════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-5 text-center mb-14">
            <TextReveal delay={0.1}>
              <h2>A dedicated team, not a ticket queue</h2>
            </TextReveal>
            <RevealAnimation delay={0.2}>
              <p className="text-tagline-1 text-secondary/60 mx-auto max-w-[480px]">
                Enterprise customers get named contacts and guaranteed response times from
                day one.
              </p>
            </RevealAnimation>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {supportFeatures.map((feature, i) => (
              <RevealAnimation
                key={feature.title}
                delay={0.1 * (i + 1)}
                asChild={false}
                className="border-stroke-3 rounded-2xl border bg-white p-6 space-y-4"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary-50">
                  <feature.icon className="size-5 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-heading-6 text-secondary">{feature.title}</h3>
                  <p className="text-tagline-2 text-secondary/60 mt-1">{feature.description}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTRACTS & INTEGRATIONS ════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-12 gap-y-10 lg:gap-x-14">
            <div className="col-span-12 space-y-5 lg:col-span-6">
              <TextReveal delay={0.1}>
                <h2>Custom contracts and flexible billing</h2>
              </TextReveal>
              <RevealAnimation delay={0.2}>
                <p className="text-tagline-1 text-secondary/60">
                  Enterprise plans are negotiated directly with your procurement team.
                  We work to your timeline, your templates, and your legal requirements.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.3} asChild={false}>
                <ul className="space-y-3">
                  {contractItems.map((item) => (
                    <li key={item} className="flex items-start gap-x-2">
                      <span className="border-stroke-3 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border p-0.5">
                        <CheckIcon className="stroke-secondary size-3" />
                      </span>
                      <span className="text-tagline-2 text-secondary/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealAnimation>
            </div>

            <div className="col-span-12 lg:col-span-6 space-y-5">
              <RevealAnimation
                delay={0.3}
                asChild={false}
                className="border-stroke-3 rounded-2xl border bg-white p-6 space-y-5"
              >
                <h3 className="text-heading-6 text-secondary">Works with your existing tools</h3>
                <div className="flex flex-wrap gap-2.5">
                  {integrations.map((tool) => (
                    <span
                      key={tool}
                      className="border-stroke-3 text-tagline-2 text-secondary rounded-full border bg-background-13 px-4 py-1.5"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="text-tagline-2 text-secondary/60">
                  Enterprise customers also get access to the full API and webhook layer
                  for custom integrations with internal systems.
                </p>
              </RevealAnimation>

              <RevealAnimation
                delay={0.4}
                asChild={false}
                className="border-stroke-3 rounded-2xl border bg-white p-6 space-y-3"
              >
                <h3 className="text-heading-6 text-secondary">Deployment options</h3>
                {[
                  { label: 'Cloud (shared)', note: 'Hosted on Nexus AI infrastructure with data residency controls.' },
                  { label: 'Private cloud', note: 'Deployed into your own cloud account (AWS, GCP or Azure).' },
                  { label: 'API-first', note: 'Integrate Nexus AI directly into your own applications via REST API.' },
                ].map((opt) => (
                  <div key={opt.label} className="flex items-start gap-x-2">
                    <span className="border-stroke-3 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border p-0.5">
                      <CheckIcon className="stroke-secondary size-3" />
                    </span>
                    <div>
                      <span className="text-tagline-2 text-secondary font-medium">{opt.label}</span>
                      <span className="text-tagline-2 text-secondary/60"> {opt.note}</span>
                    </div>
                  </div>
                ))}
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ═══════════════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39 pb-0">
        <div className="main-container">
          <RevealAnimation
            delay={0.1}
            asChild={false}
            className="bg-secondary rounded-3xl px-8 py-14 text-center space-y-6"
          >
            <div className="space-y-4">
              <TextReveal delay={0.2}>
                <h2 className="text-white">Ready to get started?</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-white/60 mx-auto max-w-[460px] text-lg leading-relaxed">
                  Fill in a short form and our enterprise team will reach out within
                  one business day. No sales script, just a conversation about your needs.
                </p>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.4} asChild={false} className="flex flex-wrap justify-center gap-3">
              <Link href="/contact-sales">
                <ButtonPrimary textClassName="text-center text-nowrap">
                  Talk to our enterprise team
                </ButtonPrimary>
              </Link>
              <Link href="/pricing">
                <ButtonWhite textClassName="text-center text-nowrap">
                  Compare plans
                </ButtonWhite>
              </Link>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <p className="text-white/30 text-sm">
                Or email us at{' '}
                <a href="mailto:enterprise@mynexusai.com" className="text-white/60 hover:text-white underline transition-colors">
                  enterprise@mynexusai.com
                </a>
              </p>
            </RevealAnimation>
          </RevealAnimation>
        </div>
      </section>
    </>
  );
};

export default EnterprisePage;
