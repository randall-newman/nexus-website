import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary } from '@/src/components/shared/ui/button';
import { PricingPlansGrid } from '@/src/components/pricing/plan-comparison';
import Link from 'next/link';

const PricingTeaser = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-10 lg:space-y-14">
          <div className="space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Pricing</BadgePrimary>
            </RevealAnimation>
            <div className="space-y-3">
              <TextReveal delay={0.2}>
                <h2>Simple pricing, built to scale with you</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-background-14/60 mx-auto max-w-[480px]">
                  Start free, no card required. Upgrade when you&rsquo;re ready.
                </p>
              </TextReveal>
            </div>
          </div>

          <PricingPlansGrid />

          <RevealAnimation delay={0.5} className="flex justify-center">
            <Link href="/pricing">
              <ButtonPrimary
                className="mx-auto md:w-fit!"
                textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
              >
                Compare all plans
              </ButtonPrimary>
            </Link>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default PricingTeaser;
