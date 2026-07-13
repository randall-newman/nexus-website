import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import {
  BookOpen,
  Compass,
  Heart,
  Rocket,
  Shield,
  Users,
} from 'lucide-react';

const values = [
  {
    icon: Rocket,
    title: 'Finish over assist',
    body: "We don't build tools that hand work back half-done. Nexus AI is built to complete a draft, a deck, a codebase, a report. Not just to respond.",
    accent: '#217bfe',
    bg: 'bg-blue-50',
  },
  {
    icon: Compass,
    title: 'Radical simplicity',
    body: 'We hide the complexity so you never have to think about it. Powerful AI should feel like a natural extension of how you already work, not a barrier to it.',
    accent: '#ac87eb',
    bg: 'bg-purple-50',
  },
  {
    icon: Users,
    title: 'Built for everyone',
    body: 'Not just engineers. Not just researchers. Every person, from student to founder, teacher to designer, deserves AI tools that meet them where they are.',
    accent: '#078efb',
    bg: 'bg-sky-50',
  },
  {
    icon: Shield,
    title: 'Honest by design',
    body: 'We are transparent about what our AI can and cannot do. We cite sources, flag uncertainty and never design systems that obscure the truth.',
    accent: '#ee4d5d',
    bg: 'bg-rose-50',
  },
  {
    icon: Heart,
    title: 'Ship with care',
    body: 'We move fast but never recklessly. Every feature we release is one we have used, stress-tested and believe makes people genuinely better at their work.',
    accent: '#f65c9c',
    bg: 'bg-pink-50',
  },
  {
    icon: BookOpen,
    title: 'Always learning',
    body: 'AI is moving fast and so are we. We stay at the frontier, push the research, absorb feedback and treat every user as a collaborator in building something better.',
    accent: '#4c7df0',
    bg: 'bg-indigo-50',
  },
];

const AboutValues = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-32">
      <div className="main-container">
        <div className="space-y-12 md:space-y-14">
          <div className="text-center space-y-4">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Our values</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2 className="text-secondary">What we stand for</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-background-14/60 mx-auto max-w-[480px]">
                Six principles that shape every decision we make, from the features we build to
                the way we talk about our product.
              </p>
            </TextReveal>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <RevealAnimation
                  key={value.title}
                  delay={0.05 * (i + 1)}
                  asChild={false}
                  className="border border-stroke-3 rounded-2xl bg-white p-7 space-y-4 flex flex-col"
                >
                  <div
                    className={`${value.bg} flex size-11 items-center justify-center rounded-xl`}
                  >
                    <Icon style={{ color: value.accent }} className="size-5" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-heading-6 text-secondary">{value.title}</h3>
                    <p className="text-background-14/60 leading-relaxed text-[15px]">{value.body}</p>
                  </div>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
