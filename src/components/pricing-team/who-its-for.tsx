import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonWhite } from '@/src/components/shared/ui/button';
import Link from 'next/link';

const scenarios = [
  {
    title: 'A 4-person startup',
    description: 'Shares one Folder per project so founders never re-explain context.',
  },
  {
    title: 'A 6-person agency team',
    description: 'Keeps client research, decks and copy in one shared workspace.',
  },
  {
    title: 'A growing department',
    description: 'Adds seats as the team grows, billed centrally on one invoice.',
  },
];

const WhoItsFor = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-10 lg:space-y-14">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Who it&apos;s for</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Built for small teams that already work together</h2>
            </TextReveal>
          </div>

          <div className="grid grid-cols-12 gap-y-5 md:gap-4">
            {scenarios.map((scenario, index) => (
              <RevealAnimation
                key={scenario.title}
                delay={0.1 * (index + 1)}
                asChild={false}
                className="col-span-12 space-y-1.5 rounded-2xl bg-white p-6 md:col-span-4"
              >
                <h3 className="text-heading-6">{scenario.title}</h3>
                <p className="text-tagline-2 text-secondary/60">{scenario.description}</p>
              </RevealAnimation>
            ))}
          </div>

          <RevealAnimation
            delay={0.4}
            asChild={false}
            className="border-stroke-3 mx-auto flex w-full max-w-[680px] flex-col items-center gap-y-4 rounded-2xl border bg-white p-8 text-center"
          >
            <p className="text-tagline-2 text-secondary/80">
              Bigger team, or need SSO and audit logs? Business pricing is on the main{' '}
              <Link href="/pricing" className="text-secondary underline">
                Pricing
              </Link>{' '}
              page, and Enterprise has its own dedicated plan.
            </p>
            <Link href="/enterprise">
              <ButtonWhite className="mx-auto w-[80%]! md:w-fit!" textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!">
                See Enterprise
              </ButtonWhite>
            </Link>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
