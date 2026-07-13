'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight, ChevronRight, Check,
  GraduationCap, TrendingUp, Scale, BarChart3, Megaphone, Users, Code2, HeartPulse,
  ShoppingBag, Landmark, Heart, Building2, Palette, Building, Target, Rocket, BookOpen, Users2,
  Sparkles, Send,
} from 'lucide-react';
import type { ComponentType } from 'react';
import type { Solution } from '@/src/data/solutions';
import { solutionsData } from '@/src/data/solutions';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';

const solutionIconMap: Record<string, ComponentType<{ className?: string }>> = {
  'education':          GraduationCap,
  'financial-services': TrendingUp,
  'legal':              Scale,
  'sales':              BarChart3,
  'marketing':          Megaphone,
  'hr':                 Users,
  'technology':         Code2,
  'healthcare':         HeartPulse,
  'small-business':     ShoppingBag,
  'government':         Landmark,
  'nonprofits':         Heart,
  'for-businesses':     Building2,
  'for-creators':       Palette,
  'for-enterprise':     Building,
  'for-marketers':      Target,
  'for-solopreneurs':   Rocket,
  'for-students':       BookOpen,
  'for-teams':          Users2,
};

const toolLinks: Record<string, string> = {
  'AI Chat':               '/products/chat',
  'Essay Writer':          '/features/essay-writer',
  'Academic Research':     '/features/academic-research',
  'Plagiarism Checker':    '/features/plagiarism-checker',
  'AI File Chat':          '/features/ai-file-chat',
  'Creative Studio':       '/products/creative-studio',
  'Artifacts':             '/features/artifacts',
  'Skills':                '/features/skills',
  'Code':                  '/products/code',
  'AI Presentation Maker': '/features/presentation',
  'Microsoft 365':         '/features/microsoft-365',
};

function FaqItem({ item, isOpen, onToggle }: {
  item: Solution['faq'][0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-[20px] bg-white">
      <button
        className="flex w-full cursor-pointer items-center justify-between gap-x-4 px-6 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-secondary">{item.question}</span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-stroke-3 text-secondary/60 transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-sm text-secondary/60 leading-relaxed">{item.answer}</div>
      )}
    </div>
  );
}

export default function SolutionDetailPage({ solution }: { solution: Solution }) {
  const [openFaq,      setOpenFaq]      = useState<string | null>(solution.faq[0]?.value ?? null);
  const [activeUseCase, setActiveUseCase] = useState(0);

  const Icon = solutionIconMap[solution.slug];

  const related = solutionsData
    .filter((s) => s.slug !== solution.slug && s.type === solution.type)
    .slice(0, 3);

  const uc = solution.useCases[activeUseCase];

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-secondary pt-[160px] pb-0">
        {/* ambient glow */}
        <div
          className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[600px] rounded-full opacity-20 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #7458E8 0%, #4C7DF0 100%)' }}
        />

        <div className="main-container relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-1.5 text-sm text-white/40">
            <Link href="/solutions" className="transition-colors hover:text-white/70">Solutions</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/70">{solution.name}</span>
          </nav>

          <div className="grid grid-cols-1 items-end gap-12 pb-16 lg:grid-cols-12">
            {/* Left — copy */}
            <div className="lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10`}>
                  {Icon && <Icon className="stroke-white h-7 w-7" />}
                </div>
              </RevealAnimation>

              <TextReveal delay={0.2}>
                <h1 className="text-white leading-tight">{solution.tagline}</h1>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="mt-5 text-lg text-white/55 leading-relaxed">{solution.description}</p>
              </TextReveal>

              <RevealAnimation delay={0.4} asChild={false} className="mt-8 flex flex-wrap gap-3">
                <Link href="/signup">
                  <ButtonPrimary textClassName="text-nowrap">Start for free</ButtonPrimary>
                </Link>
                <Link href="/pricing">
                  <ButtonWhite textClassName="text-nowrap">View pricing</ButtonWhite>
                </Link>
              </RevealAnimation>

              {/* trust line */}
              <RevealAnimation delay={0.5} asChild={false} className="mt-8 flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                <span className="text-sm text-white/40">No credit card required · Cancel anytime</span>
              </RevealAnimation>
            </div>

            {/* Right — AI mock chat UI */}
            <RevealAnimation
              delay={0.3}
              asChild={false}
              className="lg:col-span-6 lg:translate-y-8"
            >
              <div className="relative overflow-hidden rounded-t-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
                {/* Mock chrome bar */}
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-white/10" />
                    <span className="h-3 w-3 rounded-full bg-white/10" />
                    <span className="h-3 w-3 rounded-full bg-white/10" />
                  </div>
                  <div className="flex-1 mx-2 rounded-full bg-white/10 px-3 py-1 text-center text-[11px] text-white/30">
                    app.mynexusai.com
                  </div>
                  <Sparkles className="h-3.5 w-3.5 text-white/20" />
                </div>

                {/* Chat body */}
                <div className="space-y-4 p-5">
                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-white/15 px-4 py-3">
                      <p className="text-sm text-white/80">
                        {solution.useCases[0]?.title ?? `Help me with ${solution.name.toLowerCase()} work`}
                      </p>
                    </div>
                  </div>

                  {/* AI response */}
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
                      <Sparkles className="h-4 w-4 text-white/60" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="rounded-2xl rounded-tl-sm border border-white/10 bg-white/5 px-4 py-4">
                        <p className="text-sm text-white/70 leading-relaxed">
                          {solution.useCases[0]?.description ?? solution.description}
                        </p>
                        {/* streamed output line placeholders */}
                        <div className="mt-3 space-y-1.5">
                          {[70, 55, 85, 40].map((w, i) => (
                            <div
                              key={i}
                              className="h-1.5 rounded-full bg-white/10"
                              style={{ width: `${w}%` }}
                            />
                          ))}
                        </div>
                      </div>
                      {/* action chips */}
                      <div className="flex flex-wrap gap-2">
                        {['Copy', 'Continue', 'Save as Artifact'].map((label) => (
                          <span
                            key={label}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/40"
                          >
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Input row */}
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="flex-1 text-sm text-white/25">Ask Nexus AI anything…</span>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                      <Send className="h-3.5 w-3.5 text-white/40" />
                    </div>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ── Stats strip ──────────────────────────────────────────────── */}
      <RevealAnimation delay={0.1} asChild={false}>
        <div className="border-y border-stroke-3 bg-white">
          <div className="main-container py-8">
            <div className="grid grid-cols-3 divide-x divide-stroke-3">
              {solution.stats.map((stat) => (
                <div key={stat.label} className="px-8 py-2 text-center first:pl-0 last:pr-0">
                  <p className="text-3xl font-bold text-secondary">{stat.value}</p>
                  <p className="mt-1 text-sm text-secondary/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealAnimation>

      {/* ── Use cases (interactive) ───────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="main-container">
          <div className="mb-12 space-y-3">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Use cases</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2 className="max-w-xl">How {solution.name} teams use Nexus AI</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="max-w-lg text-secondary/55">
                Six real-world applications that save time and elevate the quality of your work.
              </p>
            </TextReveal>
          </div>

          <RevealAnimation delay={0.2} asChild={false}>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              {/* Tab list */}
              <div className="lg:col-span-4 space-y-2">
                {solution.useCases.map((useCase, idx) => (
                  <button
                    key={useCase.title}
                    onClick={() => setActiveUseCase(idx)}
                    className={`w-full group flex items-start gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-200 ${
                      activeUseCase === idx
                        ? 'border-primary-200 bg-primary-50 shadow-sm'
                        : 'border-stroke-3 bg-white hover:border-primary-100 hover:bg-gray-50'
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                        activeUseCase === idx
                          ? 'bg-secondary text-white'
                          : 'bg-secondary/10 text-secondary/60 group-hover:bg-secondary/15'
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span
                      className={`text-sm font-medium leading-snug transition-colors ${
                        activeUseCase === idx ? 'text-secondary' : 'text-secondary/60'
                      }`}
                    >
                      {useCase.title}
                    </span>
                  </button>
                ))}
              </div>

              {/* Detail panel */}
              <div className="lg:col-span-8">
                <div className="h-full rounded-2xl border border-stroke-3 bg-white p-8 shadow-sm">
                  <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-stroke-3 ${solution.color}`}>
                    {Icon && <Icon className="stroke-secondary h-6 w-6" />}
                  </div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-secondary/40">
                    Use case {activeUseCase + 1} of {solution.useCases.length}
                  </p>
                  <h3 className="text-2xl font-bold text-secondary">{uc?.title}</h3>
                  <p className="mt-4 text-secondary/60 leading-relaxed">{uc?.description}</p>

                  {/* Action row */}
                  <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-stroke-3 pt-6">
                    <Link href="/signup">
                      <ButtonPrimary textClassName="text-nowrap">Try this free</ButtonPrimary>
                    </Link>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setActiveUseCase((p) => Math.max(0, p - 1))}
                        disabled={activeUseCase === 0}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-stroke-3 text-secondary/40 transition-colors hover:border-secondary/30 hover:text-secondary disabled:opacity-30"
                        aria-label="Previous use case"
                      >
                        ‹
                      </button>
                      <button
                        onClick={() => setActiveUseCase((p) => Math.min(solution.useCases.length - 1, p + 1))}
                        disabled={activeUseCase === solution.useCases.length - 1}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-stroke-3 text-secondary/40 transition-colors hover:border-secondary/30 hover:text-secondary disabled:opacity-30"
                        aria-label="Next use case"
                      >
                        ›
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* ── Tools ────────────────────────────────────────────────────── */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="main-container">
          <div className="mb-12 grid grid-cols-1 items-end gap-6 lg:grid-cols-2">
            <div className="space-y-3">
              <RevealAnimation delay={0.1}>
                <BadgePrimary className="border-white/20 bg-white/10 text-white/80">
                  Included features
                </BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-white">
                  The tools {solution.name} professionals rely on
                </h2>
              </TextReveal>
            </div>
            <RevealAnimation delay={0.3}>
              <p className="text-white/55">
                Every feature is available in a single subscription. No add-ons, no separate logins,
                no surprise bills.
              </p>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.2} asChild={false}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {solution.tools.map((tool) => (
                <Link
                  key={tool}
                  href={toolLinks[tool] ?? '/features'}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-all hover:border-white/20 hover:bg-white/10"
                >
                  <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                    {tool}
                  </span>
                  <ArrowRight className="h-4 w-4 text-white/30 transition-transform group-hover:translate-x-0.5 group-hover:text-white/60" />
                </Link>
              ))}
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.3} asChild={false} className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-white">All features. One plan.</p>
                <p className="mt-1 text-sm text-white/50">
                  Free forever with limits. Upgrade for unlimited access.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/pricing">
                  <ButtonWhite textClassName="text-nowrap">Compare plans</ButtonWhite>
                </Link>
                <Link href="/signup">
                  <ButtonPrimary textClassName="text-nowrap">Start free</ButtonPrimary>
                </Link>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="main-container">
          <div className="flex flex-col items-start gap-y-12 lg:flex-row lg:gap-x-16">
            {/* Sticky heading */}
            <div className="w-full lg:w-2/5 lg:sticky lg:top-28 lg:self-start">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>FAQ</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="mt-3">Frequently asked questions</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="mt-3 text-secondary/55">
                  Common questions about using Nexus AI for {solution.name.toLowerCase()} work.
                </p>
              </TextReveal>
              <RevealAnimation delay={0.4}>
                <Link
                  href="/help"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-stroke-3 bg-white px-5 py-2.5 text-sm font-medium text-secondary shadow-sm transition-all hover:border-primary-200 hover:shadow-md"
                >
                  Visit Help Centre <ArrowRight className="h-4 w-4" />
                </Link>
              </RevealAnimation>
            </div>

            {/* Accordion */}
            <RevealAnimation delay={0.2} asChild={false} className="w-full lg:w-3/5 space-y-3">
              {solution.faq.map((item) => (
                <FaqItem
                  key={item.value}
                  item={item}
                  isOpen={openFaq === item.value}
                  onToggle={() => setOpenFaq(openFaq === item.value ? null : item.value)}
                />
              ))}
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="main-container">
          <RevealAnimation
            delay={0.1}
            asChild={false}
            className="relative overflow-hidden rounded-3xl bg-secondary px-8 py-16 text-center"
          >
            <div
              className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[300px] w-[500px] rounded-full opacity-30 blur-[100px]"
              style={{ background: 'radial-gradient(circle, #7458E8 0%, #4C7DF0 100%)' }}
            />
            <div className="relative z-10">
              <TextReveal delay={0.2}>
                <h2 className="text-white">
                  Ready to see what Nexus AI can do for {solution.name.toLowerCase()}?
                </h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="mx-auto mt-4 max-w-lg text-white/55">
                  Start on the Free plan — no credit card required. Upgrade whenever you're ready
                  for more power.
                </p>
              </TextReveal>
              <RevealAnimation delay={0.4} asChild={false} className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link href="/signup">
                  <ButtonPrimary textClassName="text-nowrap">Get started free</ButtonPrimary>
                </Link>
                <Link href="/contact-sales">
                  <ButtonWhite textClassName="text-nowrap">Talk to sales</ButtonWhite>
                </Link>
              </RevealAnimation>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* ── Related solutions ─────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="border-t border-stroke-3 py-12">
          <div className="main-container">
            <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-secondary/40">
              Related {solution.type === 'industry' ? 'industry' : 'audience'} solutions
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {related.map((rel) => {
                const RelIcon = solutionIconMap[rel.slug];
                return (
                  <Link
                    key={rel.slug}
                    href={`/solutions/${rel.slug}`}
                    className="group flex items-start gap-4 rounded-2xl border border-stroke-3 bg-white p-5 transition-all hover:border-primary-200 hover:shadow-sm"
                  >
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stroke-3 ${rel.color}`}>
                      {RelIcon && <RelIcon className="stroke-secondary h-4 w-4" />}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-secondary transition-colors group-hover:text-primary-600">
                        {rel.name}
                      </p>
                      <p className="mt-1 text-sm text-secondary/50 line-clamp-2">{rel.tagline}</p>
                    </div>
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-secondary/20 transition-colors group-hover:text-primary-400" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
