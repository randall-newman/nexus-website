import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { ButtonWhite } from '@/src/components/shared/ui/button';
import Link from 'next/link';

const perks = [
  { title: 'Apple Silicon and Intel', description: 'Native builds for both, so you always get the right one.' },
  { title: 'Menu bar app', description: 'Quick access without switching windows.' },
  { title: 'Native notifications', description: 'macOS-native alerts when a task finishes.' },
];

const MacDetails = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-10 lg:space-y-14">
          <div className="space-y-3 text-center">
            <TextReveal delay={0.1}>
              <h2>Built for macOS</h2>
            </TextReveal>
          </div>

          <div className="grid grid-cols-12 gap-y-5 md:gap-4">
            {perks.map((perk, index) => (
              <RevealAnimation
                key={perk.title}
                delay={0.1 * (index + 1)}
                asChild={false}
                className="col-span-12 space-y-1.5 rounded-2xl bg-white p-6 md:col-span-4"
              >
                <h3 className="text-heading-6">{perk.title}</h3>
                <p className="text-tagline-2 text-secondary/60">{perk.description}</p>
              </RevealAnimation>
            ))}
          </div>

          <RevealAnimation delay={0.4} className="flex justify-center">
            <Link href="/downloads/mobile">
              <ButtonWhite
                className="mx-auto w-[80%]! md:w-fit!"
                textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
              >
                Get the iOS companion app
              </ButtonWhite>
            </Link>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default MacDetails;
