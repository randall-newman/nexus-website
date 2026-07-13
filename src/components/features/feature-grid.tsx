'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { cn } from '@/src/utils/cn';
import {
  featureAudiences,
  features,
  type FeatureAudience,
  type FeatureItem,
} from '@/src/data/features';
import {
  ArrowRight,
  BookOpen,
  Brain,
  ClipboardList,
  FileSearch,
  Film,
  Globe,
  type LucideIcon,
  Layers,
  Mic,
  Monitor,
  PenLine,
  Presentation,
  ShieldCheck,
  Sparkles,
  Image as ImageIcon,
  Wand2,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

/* ─── Icon + theme config ──────────────────────────── */

const iconMap: Record<string, LucideIcon> = {
  'Academic Research': BookOpen,
  'AI Essay Writer': PenLine,
  'AI Plagiarism Checker': ShieldCheck,
  'AI Image Generator': ImageIcon,
  'AI Audio Generator': Mic,
  'AI Video Generator': Film,
  'AI Presentation / Slides': Presentation,
  'AI File Chat': FileSearch,
  'AI Note Taking / Meeting Notes': ClipboardList,
  'AI Memory': Brain,
  'Skills': Wand2,
  'Artifacts': Layers,
  'Nexus AI for Microsoft 365': Monitor,
  'Nexus AI for Chrome': Globe,
};

const themeConfig: Record<
  FeatureItem['theme'],
  { color: string; bg: string; label: string; id: string }
> = {
  'Research and writing': { color: '#217bfe', bg: 'bg-blue-50', label: 'Research & Writing', id: 'research-writing' },
  'Creative and media':   { color: '#ac87eb', bg: 'bg-purple-50', label: 'Creative & Media', id: 'creative-media' },
  'Productivity and memory': { color: '#ee4d5d', bg: 'bg-rose-50', label: 'Productivity & Memory', id: 'productivity' },
  'Platform integrations':   { color: '#078efb', bg: 'bg-sky-50', label: 'Platform Integrations', id: 'integrations' },
};

const themes = Object.keys(themeConfig) as FeatureItem['theme'][];

/* ─── Feature card ─────────────────────────────────── */

function FeatureCard({ item }: { item: FeatureItem }) {
  const Icon = iconMap[item.title] ?? Sparkles;
  const theme = themeConfig[item.theme];
  const isBuilt = item.built && item.href !== '#';

  return (
    <div className="group flex flex-col rounded-2xl border border-stroke-3 bg-white p-5 space-y-4 transition-shadow hover:shadow-sm">
      <div className="flex items-start justify-between gap-x-2">
        <div className={`${theme.bg} flex size-10 shrink-0 items-center justify-center rounded-xl`}>
          <Icon className="size-5" style={{ color: theme.color }} />
        </div>
        {!isBuilt && (
          <span className="rounded-full border border-stroke-3 bg-background-13 px-2.5 py-0.5 text-[10px] font-semibold text-secondary/40">
            Coming soon
          </span>
        )}
      </div>

      <div className="flex-1 space-y-1.5">
        <h3 className="text-[15px] font-semibold text-secondary leading-snug">{item.title}</h3>
        <p className="text-[13px] text-secondary/55 leading-relaxed">{item.description}</p>
      </div>

      {isBuilt ? (
        <Link
          href={item.href}
          className="inline-flex items-center gap-x-1 text-[13px] font-semibold transition-colors"
          style={{ color: theme.color }}
        >
          Explore
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      ) : (
        <span className="text-[13px] text-secondary/30">Not yet available</span>
      )}
    </div>
  );
}

/* ─── Main component ────────────────────────────────── */

const FeatureGrid = () => {
  const [audience, setAudience] = useState<FeatureAudience | 'All'>('All');

  const filtered =
    audience === 'All' ? features : features.filter((item) => item.audiences.includes(audience));

  return (
    <section className="pt-20 md:pt-25 lg:pt-32">
      <div className="main-container">
        <div className="space-y-14">

          {/* Filter tabs */}
          <RevealAnimation delay={0.1} asChild={false} className="flex flex-wrap items-center justify-center gap-2">
            {(['All', ...featureAudiences] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setAudience(option)}
                className={cn(
                  'rounded-full border px-5 py-2 text-[14px] font-medium transition-all',
                  audience === option
                    ? 'bg-secondary border-secondary text-white shadow-sm'
                    : 'border-stroke-3 text-secondary/60 bg-white hover:text-secondary hover:border-secondary/30'
                )}
              >
                {option}
              </button>
            ))}
          </RevealAnimation>

          {/* Theme groups */}
          {themes.map((theme) => {
            const items = filtered.filter((item) => item.theme === theme);
            if (items.length === 0) return null;
            const config = themeConfig[theme];

            return (
              <div key={theme} id={config.id} className="space-y-6">
                {/* Theme header */}
                <div className="flex items-center gap-x-4">
                  <div className="h-4 w-1 rounded-full" style={{ background: config.color }} />
                  <TextReveal delay={0.1}>
                    <h2 className="text-[18px] font-semibold text-secondary">{config.label}</h2>
                  </TextReveal>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item, index) => (
                    <RevealAnimation
                      key={item.title}
                      delay={0.05 * (index + 1)}
                      asChild={false}
                    >
                      <FeatureCard item={item} />
                    </RevealAnimation>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
