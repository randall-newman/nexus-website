import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary } from '@/src/components/shared/ui/button';

export type PlatformHeroProps = {
  badge: string;
  title: string;
  description: string;
  ctaLabel: string;
  versionNote?: string;
  requirements: { label: string; value: string }[];
};

const PlatformHero = ({
  badge,
  title,
  description,
  ctaLabel,
  versionNote,
  requirements,
}: PlatformHeroProps) => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-10 lg:space-y-14">
          <div className="space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>{badge}</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h1>{title}</h1>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-background-14/60 mx-auto max-w-[480px]">{description}</p>
            </TextReveal>
          </div>

          <RevealAnimation
            delay={0.4}
            asChild={false}
            className="flex flex-col items-center gap-y-3"
          >
            <ButtonPrimary
              className="mx-auto md:w-fit!"
              textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
            >
              {ctaLabel}
            </ButtonPrimary>
            {versionNote ? (
              <p className="text-tagline-3 text-secondary/50">{versionNote}</p>
            ) : null}
          </RevealAnimation>

          <RevealAnimation
            delay={0.5}
            asChild={false}
            className="mx-auto grid w-full max-w-[560px] grid-cols-2 gap-4 rounded-2xl bg-white p-6 sm:grid-cols-4"
          >
            {requirements.map((req) => (
              <div key={req.label} className="space-y-1 text-center">
                <p className="text-tagline-3 text-secondary/50">{req.label}</p>
                <p className="text-tagline-2 text-secondary font-medium">{req.value}</p>
              </div>
            ))}
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default PlatformHero;
