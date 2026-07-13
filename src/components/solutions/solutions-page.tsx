'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRight, Check, X,
  GraduationCap, TrendingUp, Scale, BarChart3, Megaphone, Users, Code2, HeartPulse,
  ShoppingBag, Landmark, Heart, Building2, Palette, Building, Target, Rocket, BookOpen, Users2,
} from 'lucide-react';
import type { ComponentType } from 'react';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import { solutionsData } from '@/src/data/solutions';

const solutionIconMap: Record<string, ComponentType<{ className?: string }>> = {
  'education': GraduationCap,
  'financial-services': TrendingUp,
  'legal': Scale,
  'sales': BarChart3,
  'marketing': Megaphone,
  'hr': Users,
  'technology': Code2,
  'healthcare': HeartPulse,
  'small-business': ShoppingBag,
  'government': Landmark,
  'nonprofits': Heart,
  'for-businesses': Building2,
  'for-creators': Palette,
  'for-enterprise': Building,
  'for-marketers': Target,
  'for-solopreneurs': Rocket,
  'for-students': BookOpen,
  'for-teams': Users2,
};

const industries = solutionsData.filter((s) => s.type === 'industry');
const audiences  = solutionsData.filter((s) => s.type === 'audience');

const CYCLING_WORDS = ['Education', 'Legal', 'Marketing', 'Healthcare', 'Finance', 'Teams', 'Technology'];

const COMPARISON_ROWS = [
  { without: 'Writing a report takes all afternoon',             with: 'Draft in minutes, refine with a few clicks' },
  { without: 'Every email starts from a blank page',            with: 'AI writes in your voice and tone automatically' },
  { without: 'Research means hours of tab-switching',           with: 'Sources gathered and synthesised instantly' },
  { without: 'Client presentations recycle old templates',      with: 'Slide decks built from bullet points in seconds' },
  { without: 'Onboarding docs drift out of date',               with: 'Skills keep every document consistent and current' },
];

const TOOLS = [
  { name: 'AI Chat',             desc: 'Unlimited conversations with the most capable models.',         href: '/products/chat',                icon: Users2 },
  { name: 'Essay Writer',        desc: 'Structured essays and reports with real citations.',            href: '/features/essay-writer',         icon: BookOpen },
  { name: 'Academic Research',   desc: 'Deep-dive research with sourced, cited papers.',               href: '/features/academic-research',    icon: GraduationCap },
  { name: 'AI File Chat',        desc: 'Upload docs and interrogate them in plain language.',          href: '/features/ai-file-chat',         icon: Target },
  { name: 'Creative Studio',     desc: 'Images, audio and video from a single text prompt.',          href: '/products/creative-studio',      icon: Palette },
  { name: 'Skills',              desc: 'Reusable instructions that apply across every session.',       href: '/features/skills',               icon: Rocket },
  { name: 'Artifacts',           desc: 'Live editable documents, code, and structured outputs.',      href: '/features/artifacts',            icon: Building2 },
  { name: 'Plagiarism Checker',  desc: 'Originality scan across 200 M+ academic sources.',            href: '/features/plagiarism-checker',   icon: Scale },
];

export default function SolutionsPage() {
  const [activeTab, setActiveTab]     = useState<'audiences' | 'industries'>('audiences');
  const [cycleIdx,  setCycleIdx]      = useState(0);
  const [visible,   setVisible]       = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCycleIdx((i) => (i + 1) % CYCLING_WORDS.length);
        setVisible(true);
      }, 300);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const items = activeTab === 'audiences' ? audiences : industries;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-secondary pt-[160px] pb-24">
        {/* ambient glow */}
        <div
          className="pointer-events-none absolute -top-60 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full opacity-25 blur-[140px]"
          style={{ background: 'radial-gradient(circle, #7458E8 0%, #4C7DF0 60%, transparent 100%)' }}
        />
        {/* floating grid of ghosted icons */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {solutionsData.slice(0, 12).map((sol, i) => {
            const Icon = solutionIconMap[sol.slug];
            const positions = [
              'top-16 left-8', 'top-8 left-1/4', 'top-20 right-16', 'top-4 right-1/3',
              'bottom-20 left-12', 'bottom-8 left-1/3', 'bottom-16 right-20', 'bottom-4 right-1/4',
              'top-1/3 left-4', 'top-1/2 right-8', 'bottom-1/3 left-1/5', 'top-2/3 right-1/5',
            ];
            return Icon ? (
              <div
                key={sol.slug}
                className={`absolute ${positions[i]} opacity-[0.07]`}
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                <Icon className="h-12 w-12 stroke-white" />
              </div>
            ) : null;
          })}
        </div>

        <div className="main-container relative z-10 text-center">
          <RevealAnimation delay={0.1}>
            <BadgePrimary className="border-white/20 bg-white/10 text-white/80">
              Solutions
            </BadgePrimary>
          </RevealAnimation>

          <div className="mt-5 space-y-4">
            <TextReveal delay={0.2}>
              <h1 className="mx-auto max-w-4xl text-white leading-tight">
                AI built for{' '}
                <span
                  className={`inline-block bg-clip-text text-transparent transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                >
                  {CYCLING_WORDS[cycleIdx]}
                </span>
              </h1>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="mx-auto max-w-2xl text-lg text-white/60">
                Whether you&apos;re a student writing your first paper, a legal team reviewing
                hundreds of contracts, or a startup stretching a tight budget — Nexus AI has a
                solution shaped around how you actually work.
              </p>
            </TextReveal>
          </div>

          <RevealAnimation delay={0.4} asChild={false} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/signup">
              <ButtonPrimary textClassName="text-nowrap">Start for free</ButtonPrimary>
            </Link>
            <Link href="/pricing">
              <ButtonWhite textClassName="text-nowrap">Compare plans</ButtonWhite>
            </Link>
          </RevealAnimation>

          {/* Mini stats */}
          <RevealAnimation delay={0.5} asChild={false} className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-white/10 pt-10">
            {[
              { v: '500K+', l: 'active users' },
              { v: '18',    l: 'tailored solutions' },
              { v: '150+',  l: 'countries' },
              { v: '99.9%', l: 'uptime SLA' },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <p className="text-2xl font-bold text-white">{s.v}</p>
                <p className="text-xs text-white/50">{s.l}</p>
              </div>
            ))}
          </RevealAnimation>
        </div>
      </section>

      {/* ── Solutions explorer ──────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="main-container">
          <div className="mb-12 flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Find your solution</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="max-w-md">
                  Built for every team, every goal
                </h2>
              </TextReveal>
            </div>
            {/* Tab switcher */}
            <RevealAnimation delay={0.2} asChild={false}>
              <div className="flex rounded-full border border-stroke-3 bg-white p-1 shadow-sm">
                {(['audiences', 'industries'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition-all duration-200 ${
                      activeTab === tab
                        ? 'bg-secondary text-white shadow-sm'
                        : 'text-secondary/60 hover:text-secondary'
                    }`}
                  >
                    By {tab === 'audiences' ? 'Role' : 'Industry'}
                  </button>
                ))}
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.1} asChild={false}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((sol) => {
                const Icon = solutionIconMap[sol.slug];
                return (
                  <Link
                    key={sol.slug}
                    href={`/solutions/${sol.slug}`}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-stroke-3 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg"
                  >
                    {/* icon */}
                    <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-stroke-3 ${sol.color}`}>
                      {Icon && <Icon className="stroke-secondary h-5 w-5" />}
                    </div>

                    {/* name + tagline */}
                    <h3 className="text-[15px] font-semibold text-secondary group-hover:text-primary-600 transition-colors">
                      {sol.name}
                    </h3>
                    <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-secondary/55">
                      {sol.tagline}
                    </p>

                    {/* key stat */}
                    <div className="mt-5 border-t border-stroke-3 pt-4">
                      <p className="text-xl font-bold text-secondary">{sol.stats[0].value}</p>
                      <p className="text-[11px] text-secondary/50">{sol.stats[0].label}</p>
                    </div>

                    {/* hover arrow */}
                    <div className="mt-3 flex items-center gap-1 text-xs font-medium text-primary-500 opacity-0 transition-opacity group-hover:opacity-100">
                      Explore solution <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* ── Comparison ──────────────────────────────────────────────────── */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="main-container">
          <div className="mb-12 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary className="border-white/20 bg-white/10 text-white/80">
                See the difference
              </BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2 className="mt-4 text-white">Work the old way or work with AI</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="mx-auto mt-3 max-w-lg text-white/55">
                Nexus AI doesn&apos;t just speed things up — it changes how the work gets done.
              </p>
            </TextReveal>
          </div>

          <RevealAnimation delay={0.2} asChild={false}>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              {/* header row */}
              <div className="grid grid-cols-2 border-b border-white/10">
                <div className="flex items-center gap-2 px-6 py-4">
                  <X className="h-4 w-4 text-red-400" />
                  <span className="text-sm font-semibold text-white/60">Without AI</span>
                </div>
                <div className="flex items-center gap-2 border-l border-white/10 bg-white/5 px-6 py-4">
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm font-semibold text-white">With Nexus AI</span>
                </div>
              </div>
              {/* rows */}
              {COMPARISON_ROWS.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-2 border-b border-white/10 last:border-0 transition-colors hover:bg-white/5"
                >
                  <div className="flex items-start gap-3 px-6 py-5">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/60" />
                    <p className="text-sm text-white/50">{row.without}</p>
                  </div>
                  <div className="flex items-start gap-3 border-l border-white/10 bg-white/[0.03] px-6 py-5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <p className="text-sm text-white/90">{row.with}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.3} asChild={false} className="mt-8 text-center">
            <Link href="/signup">
              <ButtonWhite textClassName="text-nowrap">Try Nexus AI free</ButtonWhite>
            </Link>
          </RevealAnimation>
        </div>
      </section>

      {/* ── Platform tools ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="main-container">
          <div className="mb-12 space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>One platform</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Everything your team needs, in one subscription</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="mx-auto max-w-xl text-secondary/55">
                Every solution runs on the same core platform. No add-ons, no separate logins.
              </p>
            </TextReveal>
          </div>

          <RevealAnimation delay={0.2} asChild={false}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {TOOLS.map((tool) => (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className="group flex flex-col gap-4 rounded-2xl border border-stroke-3 bg-white p-5 shadow-sm transition-all hover:border-primary-300 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/5">
                    <tool.icon className="h-5 w-5 stroke-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-secondary group-hover:text-primary-600 transition-colors">
                      {tool.name}
                    </p>
                    <p className="mt-1 text-[13px] leading-relaxed text-secondary/55">{tool.desc}</p>
                  </div>
                  <span className="mt-auto flex items-center gap-1 text-xs font-medium text-primary-500 opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="bg-secondary py-20">
        <div className="main-container">
          <RevealAnimation delay={0.1} asChild={false} className="rounded-2xl border border-white/10 bg-white/5 px-8 py-14 text-center backdrop-blur-sm">
            <TextReveal delay={0.2}>
              <h2 className="text-white">
                Find the solution built for your work
              </h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="mx-auto mt-4 max-w-lg text-white/55">
                Start on the Free plan — no credit card required. Upgrade whenever your team is
                ready for more power.
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
          </RevealAnimation>
        </div>
      </section>
    </>
  );
}
