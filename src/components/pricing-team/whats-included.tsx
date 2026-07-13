import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { CheckIcon } from '@/src/components/shared/icon';
import { BadgePrimary } from '@/src/components/shared/ui/badge';

const included = [
  'Shared Folders across the team',
  'Dedicated team workspace',
  'Central billing, one invoice',
  'Seat management for admins',
  'Team templates',
  'Shared knowledge base',
  'Admin controls',
  'Basic usage analytics',
];

const WhatsIncluded = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-10 lg:space-y-14">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Beyond Premium</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Everything in Premium, plus the team layer</h2>
            </TextReveal>
          </div>

          <div className="mx-auto grid w-full max-w-[760px] grid-cols-12 gap-y-4 md:gap-x-6">
            {included.map((item, index) => (
              <RevealAnimation
                key={item}
                delay={0.05 * (index + 1)}
                asChild={false}
                className="col-span-12 flex items-center gap-x-2 md:col-span-6"
              >
                <span className="border-stroke-3 flex size-5 shrink-0 items-center justify-center rounded-full border p-0.5">
                  <CheckIcon className="stroke-secondary size-3" />
                </span>
                <span className="text-tagline-2 text-secondary/80">{item}</span>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
