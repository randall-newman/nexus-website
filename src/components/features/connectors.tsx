import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import { connectorCategories, connectors } from '@/src/data/connectors';
import { CheckCircle2, Link2, MessageSquareText, ShieldCheck, Sparkles, Workflow } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

/* Connectors with real logos, shown in the hero showcase strip. */
const showcase = connectors.filter((c) => c.logo !== null);

const steps = [
  {
    Icon: Link2,
    title: 'Connect in one click',
    text: 'Pick an app and approve access with its own sign-in. OAuth, no code, no agents to install. Most connections take under a minute.',
  },
  {
    Icon: MessageSquareText,
    title: 'Ask with your real context',
    text: 'Nexus AI searches the files, tickets, docs and data you connected, and answers with citations you can check, instead of guessing from memory.',
  },
  {
    Icon: Workflow,
    title: 'Act, with your approval',
    text: 'Draft the doc, file the issue, update the record. Consequential actions are shown to you before they run, so nothing happens behind your back.',
  },
];

const benefits = [
  {
    Icon: Sparkles,
    title: 'Answers grounded in your work',
    text: 'When Nexus AI can see your actual documents and systems, hallucinations drop and every claim comes with a source you can open.',
  },
  {
    Icon: Workflow,
    title: 'Finished work, not just chat',
    text: 'Connectors turn conversations into completed tasks: summaries filed to your wiki, issues created in your tracker, reports built from your data.',
  },
  {
    Icon: ShieldCheck,
    title: 'You stay in control',
    text: 'Each connector sees only what you grant. Permissions are scoped per workspace, actions need your approval, and you can disconnect anything instantly.',
  },
];

/* Category overview with example connector names, replacing a raw directory. */
const categoryExamples: Record<string, string> = {
  'Communication & Email': 'Gmail, Slack, Outlook, Teams, Zoom',
  'Customer Support & CRM': 'Salesforce, HubSpot, Intercom',
  'Data & Analytics': 'Snowflake, Databricks, MotherDuck',
  'Design & Creative': 'Canva, Wix',
  'Development Tools': 'GitHub, Sentry, Supabase, Vercel',
  'Documents & Files': 'Google Drive, Dropbox, Box, SharePoint',
  'Finance & Investing': 'Stripe, Square, Morningstar, PitchBook',
  'Healthcare & Life Sciences': 'NEJM, The BMJ, EBSCO',
  'Legal': 'Docusign, Deel, NetDocuments',
  'Lifestyle & Local': 'DoorDash, Trivago',
  'Productivity & Notes': 'Notion, Todoist, OneNote, Guru',
  'Project Management': 'Jira, Linear, Asana, Confluence',
  'Research & Data': 'Hugging Face, Statista, Similarweb',
  'Sales & Marketing': 'Apollo.io, Klaviyo, WordPress.com',
};

const Connectors = () => {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="pt-[150px] lp:pt-[200px]">
        <div className="main-container">
          <div className="mx-auto max-w-[820px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Connectors</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h1 className="text-heading-4 sm:text-heading-3 md:text-heading-2 font-bold">
                Your AI, connected to the tools you already use
              </h1>
            </TextReveal>
            <RevealAnimation delay={0.3}>
              <p className="text-tagline-1 md:text-tagline-new text-secondary/60 mx-auto max-w-[640px]">
                Connectors link Nexus AI to your files, projects and data across{' '}
                {connectors.length}+ apps, so it answers from your real work and takes real
                actions. Built on the open Model Context Protocol.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4} asChild={false} className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link href="/signup">
                <ButtonPrimary textClassName="text-center text-nowrap">
                  Try Connectors free
                </ButtonPrimary>
              </Link>
              <Link href="/blog/what-is-mcp-model-context-protocol">
                <ButtonWhite textClassName="text-center text-nowrap">What is MCP?</ButtonWhite>
              </Link>
            </RevealAnimation>
          </div>

          {/* Logo showcase strip */}
          <RevealAnimation delay={0.5} asChild={false} className="mx-auto mt-12 max-w-[860px]">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {showcase.map((c) => (
                <span
                  key={c.name}
                  title={c.name}
                  className="border-stroke-3 flex size-12 items-center justify-center rounded-xl border bg-white p-3 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <Image
                    src={`/images/connectors/${c.logo}.svg`}
                    alt={`${c.name} connector for Nexus AI`}
                    width={24}
                    height={24}
                    className="size-full object-contain"
                  />
                </span>
              ))}
              <span className="text-tagline-2 text-secondary/60 border-stroke-3 flex h-12 items-center justify-center rounded-xl border bg-white px-4">
                +{connectors.length - showcase.length} more
              </span>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────── */}
      <section className="pt-20 md:pt-25 lg:pt-32">
        <div className="main-container">
          <div className="space-y-10 lg:space-y-14">
            <div className="space-y-3 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>How it works</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>From connected to done in three steps</h2>
              </TextReveal>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {steps.map((step, index) => (
                <RevealAnimation key={step.title} delay={0.15 + index * 0.1}>
                  <article className="border-stroke-3 h-full space-y-4 rounded-2xl border bg-white p-7">
                    <div className="flex items-center gap-x-3">
                      <span className="bg-secondary/5 border-stroke-3 flex size-11 items-center justify-center rounded-xl border">
                        <step.Icon className="stroke-secondary size-5" />
                      </span>
                      <span className="text-tagline-3 text-secondary/40 font-medium">
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 className="text-heading-6 text-secondary font-medium">{step.title}</h3>
                    <p className="text-tagline-2 text-secondary/70">{step.text}</p>
                  </article>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why it matters ───────────────────────────────────────── */}
      <section className="pt-20 md:pt-25 lg:pt-32">
        <div className="main-container">
          <div className="space-y-10 lg:space-y-14">
            <div className="space-y-3 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Why Connectors</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>AI that works with your work</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-background-14/60 mx-auto max-w-[560px]">
                  Most AI answers from memory. With Connectors, Nexus AI answers from your
                  documents, your data and your tools.
                </p>
              </TextReveal>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {benefits.map((benefit, index) => (
                <RevealAnimation key={benefit.title} delay={0.15 + index * 0.1}>
                  <article className="border-stroke-3 h-full space-y-4 rounded-2xl border bg-white p-7">
                    <span className="bg-secondary/5 border-stroke-3 flex size-11 items-center justify-center rounded-xl border">
                      <benefit.Icon className="stroke-secondary size-5" />
                    </span>
                    <h3 className="text-heading-6 text-secondary font-medium">{benefit.title}</h3>
                    <p className="text-tagline-2 text-secondary/70">{benefit.text}</p>
                  </article>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What you can connect ─────────────────────────────────── */}
      <section className="pt-20 md:pt-25 lg:pt-32">
        <div className="main-container">
          <div className="space-y-10 lg:space-y-14">
            <div className="space-y-3 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>{connectors.length}+ connectors</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>What you can connect</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-background-14/60 mx-auto max-w-[560px]">
                  Fourteen categories covering how modern teams communicate, build, sell, research
                  and get paid.
                </p>
              </TextReveal>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {connectorCategories.map((category, index) => (
                <RevealAnimation key={category} delay={0.1 + (index % 3) * 0.08}>
                  <article className="border-stroke-3 h-full rounded-2xl border bg-white p-6">
                    <p className="text-tagline-1 text-secondary font-medium">{category}</p>
                    <p className="text-tagline-3 text-secondary/60 mt-1.5">
                      {categoryExamples[category]}
                      {' and more.'}
                    </p>
                  </article>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Security ─────────────────────────────────────────────── */}
      <section className="pt-20 md:pt-25 lg:pt-32">
        <div className="main-container">
          <RevealAnimation delay={0.1}>
            <div className="border-stroke-3 grid gap-8 rounded-2xl border bg-white p-8 md:p-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-4">
                <BadgePrimary>Private by design</BadgePrimary>
                <h2 className="text-heading-5 md:text-heading-4">
                  Connected does not mean exposed
                </h2>
                <p className="text-tagline-2 md:text-tagline-1 text-secondary/70">
                  Connectors are built on the Model Context Protocol with security as the default.
                  Nexus AI only ever sees what a connector explicitly exposes, and you decide what
                  that is.
                </p>
              </div>
              <ul className="space-y-3.5">
                {[
                  'OAuth 2.0 sign-in — your passwords are never shared with Nexus AI',
                  'Least-privilege access: grant only the scopes you choose',
                  'Consequential actions require your approval before they run',
                  'Disconnect any app instantly; access is revoked immediately',
                  'Every connector in the directory is reviewed before listing',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-x-3">
                    <CheckCircle2 className="stroke-primary-500 mt-0.5 size-5 shrink-0" />
                    <span className="text-tagline-2 text-secondary/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* ── Submit your own ──────────────────────────────────────── */}
      <section className="pt-20 md:pt-25 lg:pt-32" id="submit">
        <div className="main-container">
          <RevealAnimation delay={0.1}>
            <div className="bg-secondary relative overflow-hidden rounded-2xl px-6 py-14 text-center md:px-16 md:py-20">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[130%] -translate-x-1/2 rounded-[100%] bg-(image:--color-gradient-logo) opacity-25 blur-3xl"
              />
              <div className="relative space-y-4">
                <TextReveal delay={0.2}>
                  <h2 className="text-white">Submit your own connector</h2>
                </TextReveal>
                <RevealAnimation delay={0.3}>
                  <p className="mx-auto max-w-[560px] text-white/70">
                    Built something on the Model Context Protocol? New connectors expand what Nexus
                    AI can do for everyone. Tell us about yours and our team will review it for the
                    directory.
                  </p>
                </RevealAnimation>
                <RevealAnimation delay={0.4} asChild={false} className="flex flex-wrap items-center justify-center gap-3 pt-3">
                  <Link href="/contact-sales">
                    <ButtonPrimary textClassName="text-center text-nowrap">
                      Submit a connector
                    </ButtonPrimary>
                  </Link>
                  <Link href="/help/submit-your-connector">
                    <ButtonWhite textClassName="text-center text-nowrap">
                      Read submission guide
                    </ButtonWhite>
                  </Link>
                </RevealAnimation>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </>
  );
};

export default Connectors;
