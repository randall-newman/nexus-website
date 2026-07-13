import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';

const visionPillars = [
  {
    headline: 'Every student.',
    body: 'A research partner that finds the sources, checks the facts and helps finish the essay, without doing the thinking for them.',
    accent: '#217bfe',
  },
  {
    headline: 'Every creator.',
    body: 'A creative studio that turns a rough idea into a polished deck, image, audio piece or branded document, in minutes.',
    accent: '#ac87eb',
  },
  {
    headline: 'Every team.',
    body: 'A shared workspace where meeting notes write themselves, code gets reviewed and every deliverable moves from draft to done.',
    accent: '#ee4d5d',
  },
];

const AboutVision = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-32 overflow-hidden">
      <div className="main-container">
        <div className="space-y-14 md:space-y-18">
          {/* Big statement */}
          <div className="mx-auto max-w-[820px] text-center space-y-6">
            <TextReveal delay={0.1}>
              <p
                className="text-secondary font-bold leading-[1.1] tracking-tight"
                style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)' }}
              >
                Every person.{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                >
                  Every device.
                </span>
              </p>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="text-background-14/55 text-lg md:text-xl leading-relaxed mx-auto max-w-[580px]">
                We are building toward a world where Nexus AI runs on every device, in every
                classroom, office and home, making finished work universally accessible.
              </p>
            </TextReveal>
          </div>

          {/* Three pillar cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {visionPillars.map((pillar, i) => (
              <RevealAnimation
                key={pillar.headline}
                delay={0.1 + i * 0.1}
                asChild={false}
                className="bg-secondary rounded-2xl p-8 space-y-4 flex flex-col"
              >
                <div
                  className="w-10 h-1 rounded-full"
                  style={{ background: pillar.accent }}
                />
                <h3
                  className="text-white font-bold leading-tight"
                  style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}
                >
                  {pillar.headline}
                </h3>
                <p className="text-white/55 leading-relaxed flex-1">{pillar.body}</p>
              </RevealAnimation>
            ))}
          </div>

          {/* Ambition line */}
          <RevealAnimation delay={0.2} asChild={false} className="text-center">
            <p
              className="text-secondary/30 font-semibold tracking-tight mx-auto max-w-[700px] leading-[1.2]"
              style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.85rem)' }}
            >
              &ldquo;We will not stop until Nexus AI is on every device and in the hands of
              every person who wants to do great work.&rdquo;
            </p>
            <p className="mt-4 text-sm text-secondary/30 font-medium">— Randall Newman, CEO</p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutVision;
