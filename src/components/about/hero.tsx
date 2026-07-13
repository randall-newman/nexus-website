import CounterNumberOnScroll from '@/src/components/animation/counter-number-on-scroll';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';

const stats = [
  { value: 500, suffix: 'K+', label: 'People using Nexus AI' },
  { value: 190, suffix: '+',  label: 'Countries worldwide' },
  { value: 6,   suffix: 'M+', label: 'Documents finished' },
];

/* Vertical light-ray stripes — dark navy top, brand gradient bottom */
const stripes = [
  { x: 0,    w: 88,  color: '#0033cc', op: 0.52 },
  { x: 88,   w: 68,  color: '#0044dd', op: 0.64 },
  { x: 156,  w: 58,  color: '#0055ee', op: 0.74 },
  { x: 214,  w: 52,  color: '#0066ff', op: 0.80 },
  { x: 266,  w: 48,  color: '#1177ff', op: 0.85 },
  { x: 314,  w: 44,  color: '#217bfe', op: 0.89 },
  { x: 358,  w: 40,  color: '#3d8fff', op: 0.92 },
  { x: 398,  w: 36,  color: '#5599ff', op: 0.94 },
  { x: 434,  w: 33,  color: '#6688ff', op: 0.96 },
  { x: 467,  w: 30,  color: '#7070f0', op: 0.97 },
  { x: 497,  w: 28,  color: '#7a62f0', op: 0.98 },
  { x: 525,  w: 26,  color: '#7458E8', op: 0.99 },
  { x: 551,  w: 24,  color: '#8855ee', op: 1.00 },
  { x: 575,  w: 22,  color: '#9e60e8', op: 1.00 },
  { x: 597,  w: 21,  color: '#b47aee', op: 0.99 },
  { x: 618,  w: 20,  color: '#c490f0', op: 0.97 },
  { x: 638,  w: 22,  color: '#d080e8', op: 0.93 },
  { x: 660,  w: 25,  color: '#dd70dd', op: 0.86 },
  { x: 685,  w: 28,  color: '#e868cc', op: 0.76 },
  { x: 713,  w: 32,  color: '#f07aaa', op: 0.66 },
  { x: 745,  w: 38,  color: '#e06090', op: 0.54 },
  { x: 783,  w: 52,  color: '#aa44bb', op: 0.44 },
  { x: 835,  w: 68,  color: '#7733aa', op: 0.34 },
  { x: 903,  w: 84,  color: '#4422aa', op: 0.24 },
  { x: 987,  w: 108, color: '#221480', op: 0.15 },
  { x: 1095, w: 305, color: '#100a55', op: 0.07 },
];

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden pt-[160px] pb-20 md:pb-28">
      <div className="main-container">
        <div className="space-y-16 md:space-y-20">
          {/* Headline */}
          <div className="mx-auto max-w-[780px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>About Nexus AI</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h1 className="text-secondary">
                AI that finishes your work,{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                >
                  not just starts it
                </span>
              </h1>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-background-14/60 mx-auto max-w-[560px] text-lg leading-relaxed">
                Nexus AI is the all-in-one AI workspace built by Verbosec. We give you research,
                writing, design and code in one place, so you spend less time switching between
                tools and more time doing the work that matters.
              </p>
            </TextReveal>
          </div>

          {/* Abstract hero banner */}
          <RevealAnimation delay={0.3} offset={60}>
            <figure className="relative h-[420px] w-full overflow-hidden rounded-[24px] md:h-[540px]">
              {/* Abstract vertical light-ray background */}
              <svg
                viewBox="0 0 1400 540"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  {/* Base dark-navy gradient */}
                  <linearGradient id="abHeroBg" x1="0" y1="0" x2="0.4" y2="1">
                    <stop offset="0%" stopColor="#000b40" />
                    <stop offset="100%" stopColor="#001580" />
                  </linearGradient>

                  {/* Top-darken overlay */}
                  <linearGradient id="abTopFade" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"   stopColor="#000b40" stopOpacity="0.60" />
                    <stop offset="38%"  stopColor="#000b40" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#000b40" stopOpacity="0" />
                  </linearGradient>

                  {/* Per-stripe vertical gradients: transparent top → colored bottom */}
                  {stripes.map((s, i) => (
                    <linearGradient key={i} id={`abSt${i}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%"   stopColor={s.color} stopOpacity="0" />
                      <stop offset="40%"  stopColor={s.color} stopOpacity={s.op * 0.50} />
                      <stop offset="100%" stopColor={s.color} stopOpacity={s.op} />
                    </linearGradient>
                  ))}

                  {/* Soft bloom filter for glow orbs */}
                  <filter id="abBloom" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur stdDeviation="42" />
                  </filter>
                </defs>

                {/* Base */}
                <rect width="1400" height="540" fill="url(#abHeroBg)" />

                {/* Bloom glow sources at bottom — push colour up into the streaks */}
                <g filter="url(#abBloom)">
                  <ellipse cx="310"  cy="580" rx="300" ry="180" fill="#217bfe"  fillOpacity="0.65" />
                  <ellipse cx="580"  cy="580" rx="340" ry="190" fill="#4c7df0"  fillOpacity="0.70" />
                  <ellipse cx="840"  cy="580" rx="310" ry="180" fill="#7458E8"  fillOpacity="0.68" />
                  <ellipse cx="1080" cy="560" rx="260" ry="160" fill="#ee6a99"  fillOpacity="0.48" />
                </g>

                {/* Vertical stripe rays */}
                {stripes.map((s, i) => (
                  <rect key={i} x={s.x} y="0" width={s.w} height="540" fill={`url(#abSt${i})`} />
                ))}

                {/* Darken the top third so text/stats remain readable */}
                <rect width="1400" height="540" fill="url(#abTopFade)" />
              </svg>

              {/* Bottom gradient — stats readability */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[220px] bg-linear-to-t from-black/55 to-transparent"
                aria-hidden="true"
              />

              {/* Stats overlay */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-center gap-x-8 px-8 pb-8 sm:gap-x-16 md:justify-start md:gap-x-12 md:pb-10 md:pl-12">
                {stats.map((stat, i) => (
                  <RevealAnimation key={stat.label} delay={0.4 + i * 0.1} asChild={false}>
                    <div className="text-center md:text-left">
                      <p className="text-white font-bold leading-none" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
                        <CounterNumberOnScroll value={stat.value} duration={1.4} />
                        {stat.suffix}
                      </p>
                      <p className="mt-1 text-[13px] text-white/60 font-medium">{stat.label}</p>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
