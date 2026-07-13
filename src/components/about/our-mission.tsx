import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';

const pillars = [
  {
    num: '01',
    title: 'Mission',
    body: 'To make the full power of AI available to every person, regardless of technical background, budget or expertise.',
  },
  {
    num: '02',
    title: 'Vision',
    body: 'A world where every person and every device runs on Nexus AI, where finished work is always one workspace away.',
  },
  {
    num: '03',
    title: 'Why we exist',
    body: 'Most AI tools stop at the answer. Nexus AI goes further: a research partner, a creative studio, a coding assistant and an editor, all in one place. We built the workspace that closes the gap between AI and finished work.',
  },
];

const OurMission = () => {
  return (
    <section className="overflow-hidden pt-20 md:pt-25 lg:pt-32">
      <div className="main-container">
        <div className="space-y-14 md:space-y-20">

          {/* Split header */}
          <div className="grid grid-cols-12 items-end gap-y-6 md:gap-x-12">
            <div className="col-span-12 md:col-span-6 space-y-4">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Our mission</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Making AI work for every person</h2>
              </TextReveal>
            </div>
            <div className="col-span-12 md:col-span-6">
              <TextReveal delay={0.3}>
                <p className="text-background-14/60 text-lg leading-relaxed">
                  We believe the full power of AI should be available to every person, not just
                  engineers, researchers or the technically skilled. Nexus AI is our answer to that
                  belief: a workspace that turns AI output into finished work.
                </p>
              </TextReveal>
            </div>
          </div>

          {/* Mission manifesto block */}
          <RevealAnimation delay={0.1} offset={60}>
            <div className="relative overflow-hidden rounded-[28px] bg-secondary px-8 py-16 md:px-16 md:py-24">
              {/* Subtle dot texture */}
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                style={{ opacity: 0.035 }}
              >
                <pattern id="msDots" width="28" height="28" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="white" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#msDots)" />
              </svg>

              {/* Gradient glow blobs */}
              <div
                className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full blur-3xl"
                style={{ background: '#217bfe', opacity: 0.35 }}
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-20 left-[38%] h-72 w-72 rounded-full blur-3xl"
                style={{ background: '#7458E8', opacity: 0.28 }}
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-20 right-[10%] h-64 w-64 rounded-full blur-3xl"
                style={{ background: '#ee6a99', opacity: 0.22 }}
                aria-hidden="true"
              />

              {/* Decorative oversized opening quote */}
              <div
                className="pointer-events-none absolute top-2 right-8 font-black leading-none select-none md:right-14"
                style={{ fontSize: 'clamp(120px, 18vw, 220px)', color: 'rgba(255,255,255,0.03)', lineHeight: 1 }}
                aria-hidden="true"
              >
                &#8220;
              </div>

              {/* Mission statement */}
              <TextReveal delay={0.15}>
                <p
                  className="relative text-white font-bold leading-[1.15] tracking-tight"
                  style={{ fontSize: 'clamp(1.65rem, 4vw, 3.25rem)' }}
                >
                  &#8220;To make the full power of AI available to{' '}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                  >
                    every person,
                  </span>{' '}
                  regardless of technical background, budget or expertise.&#8221;
                </p>
              </TextReveal>

              <RevealAnimation delay={0.25} asChild={false} className="relative mt-8 flex items-center gap-x-4">
                <div className="h-px w-10 bg-white/20" />
                <p className="text-[13px] font-medium tracking-wide text-white/40">
                  Randall Newman, CEO &#183; Nexus AI
                </p>
              </RevealAnimation>
            </div>
          </RevealAnimation>

          {/* Three editorial pillars */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8 lg:gap-14">
            {pillars.map((pillar, i) => (
              <RevealAnimation key={pillar.title} delay={0.1 + i * 0.1} asChild={false}>
                <div>
                  <div
                    className="mb-7 h-0.5 w-full rounded-full"
                    style={{ background: 'var(--color-gradient-logo)' }}
                  />
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-secondary/30">
                    {pillar.num}
                  </p>
                  <h3 className="mb-4 text-[21px] font-semibold text-secondary">{pillar.title}</h3>
                  <p className="text-background-14/60 leading-relaxed">{pillar.body}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurMission;
