import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import { BookOpen, FileSearch, Layers, Mic, Presentation } from 'lucide-react';
import Link from 'next/link';

const categoryCards = [
  { label: 'Research & Writing', anchor: '#research-writing' },
  { label: 'Creative & Media',   anchor: '#creative-media' },
  { label: 'Productivity',       anchor: '#productivity' },
  { label: 'Integrations',       anchor: '#integrations' },
];

const floatingFeatures = [
  { icon: BookOpen, label: 'Academic Research', color: '#217bfe', bg: 'bg-blue-50' },
  { icon: FileSearch, label: 'AI File Chat', color: '#ee4d5d', bg: 'bg-rose-50' },
  { icon: Presentation, label: 'AI Presentations', color: '#ac87eb', bg: 'bg-purple-50' },
  { icon: Layers, label: 'Artifacts', color: '#f07aaa', bg: 'bg-pink-50' },
  { icon: Mic, label: 'Audio Generator', color: '#4ade80', bg: 'bg-green-50' },
];

const Intro = () => {
  return (
    <section className="relative overflow-hidden pt-[160px] pb-10">
      {/* Soft gradient bg */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute -top-40 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 rounded-full opacity-[0.055] blur-3xl"
          style={{ background: 'var(--color-gradient-logo)' }}
        />
      </div>

      <div className="main-container relative">
        <div className="mx-auto max-w-[820px] space-y-6 text-center">
          <RevealAnimation delay={0.1}>
            <BadgePrimary>Features</BadgePrimary>
          </RevealAnimation>
          <TextReveal delay={0.2}>
            <h1 className="text-secondary leading-[1.1]">
              Everything you need{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'var(--color-gradient-logo)' }}
              >
                to finish the work
              </span>
            </h1>
          </TextReveal>
          <TextReveal delay={0.3}>
            <p className="mx-auto max-w-[560px] text-lg text-background-14/60 leading-relaxed">
              From academic research and AI image generation to meeting notes and code review.
              Nexus AI brings everything into one workspace, with more on the way.
            </p>
          </TextReveal>
          <RevealAnimation delay={0.4} asChild={false} className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/signup">
              <ButtonPrimary textClassName="text-nowrap">Try for Free</ButtonPrimary>
            </Link>
            <Link href="/pricing">
              <ButtonWhite textClassName="text-nowrap">View pricing</ButtonWhite>
            </Link>
          </RevealAnimation>
        </div>

        {/* Feature category quick-links */}
        <RevealAnimation delay={0.5} asChild={false} className="mx-auto mt-14 grid max-w-[780px] grid-cols-2 gap-3 sm:grid-cols-4">
          {categoryCards.map((cat) => (
            <a
              key={cat.label}
              href={cat.anchor}
              className="group flex items-center justify-center gap-y-2 rounded-2xl border border-stroke-3 bg-white px-4 py-4 text-center transition-shadow hover:shadow-md"
            >
              <p className="text-[13px] font-semibold text-secondary leading-snug">{cat.label}</p>
            </a>
          ))}
        </RevealAnimation>

        {/* Floating feature pill strip */}
        <RevealAnimation delay={0.6} asChild={false} className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {floatingFeatures.map(({ icon: Icon, label, color, bg }) => (
            <span key={label} className={`${bg} inline-flex items-center gap-x-1.5 rounded-full px-3 py-1.5 text-[12px] font-medium`} style={{ color }}>
              <Icon className="size-3.5" />
              {label}
            </span>
          ))}
          <span className="inline-flex items-center rounded-full border border-stroke-3 bg-white px-3 py-1.5 text-[12px] font-medium text-secondary/40">
            + 8 more
          </span>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Intro;
