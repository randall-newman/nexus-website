import { TextReveal } from '@/src/components/animation/text-reveal';
import RevealAnimation from '@/src/components/animation/reveal-animation';

const declarations = [
  {
    verse: 'We believe AI should finish the work, not just start the conversation.',
  },
  {
    verse: 'Every person, researcher, founder, student and creator deserves tools that think alongside them.',
  },
  {
    verse: 'Not a feature added. A workspace built from the ground up for how people actually work.',
  },
  {
    verse: 'We build for the researcher at 2am, the founder drafting their pitch, the student before the deadline.',
  },
  {
    verse: 'One place. Everything. Done.',
  },
];

const AboutDeclarations = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="mx-auto max-w-[860px] space-y-0 divide-y divide-stroke-3">
          {declarations.map((item, index) => (
            <RevealAnimation
              key={index}
              delay={0.1 * (index + 1)}
              asChild={false}
              className="py-10 md:py-14"
            >
              <TextReveal delay={0.05 * index}>
                <p
                  className="text-secondary font-semibold leading-[1.2] tracking-tight"
                  style={{
                    fontSize: `clamp(1.5rem, ${index === declarations.length - 1 ? '5' : '3.5'}vw, ${index === declarations.length - 1 ? '4' : '2.75'}rem)`,
                    opacity: 1 - index * 0.08,
                  }}
                >
                  {item.verse}
                </p>
              </TextReveal>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutDeclarations;
