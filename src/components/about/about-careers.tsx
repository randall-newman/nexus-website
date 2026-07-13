import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { ArrowRight, Briefcase, Globe2, Zap } from 'lucide-react';
import Link from 'next/link';

const perks = [
  { icon: Globe2, text: 'Remote-first team across multiple continents' },
  { icon: Zap,    text: 'Work directly on products used by 500,000+ people' },
  { icon: Briefcase, text: 'Backed by Verbosec with room to own your craft' },
];

const AboutCareers = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-32">
      <div className="main-container">
        <RevealAnimation
          delay={0.1}
          asChild={false}
          className="bg-secondary overflow-hidden rounded-[28px] px-8 py-14 md:px-14 md:py-20 lg:px-20"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div className="space-y-6">
              <div
                className="inline-flex items-center gap-x-2 rounded-full px-4 py-1.5 text-[13px] font-semibold text-white"
                style={{ background: 'rgba(255,255,255,0.12)' }}
              >
                <Briefcase className="size-3.5" />
                Careers
              </div>
              <TextReveal delay={0.1}>
                <h2 className="text-white">Come build the future of work with us</h2>
              </TextReveal>
              <TextReveal delay={0.2}>
                <p className="text-white/60 text-lg leading-relaxed">
                  We are a small, ambitious team at Verbosec working on products that millions of
                  people rely on every day. If you care about AI, great design and work that
                  actually ships. We would love to hear from you.
                </p>
              </TextReveal>
              <Link
                href="https://verbosec.com/careers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-x-2 rounded-full px-7 py-3.5 text-[15px] font-semibold text-secondary transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                style={{ background: 'white' }}
              >
                View open roles
                <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Right */}
            <div className="space-y-4">
              {perks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <RevealAnimation
                    key={perk.text}
                    delay={0.2 + i * 0.1}
                    asChild={false}
                    className="flex items-start gap-x-4 rounded-2xl p-4"
                    style={{ background: 'rgba(255,255,255,0.07)' }}
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <Icon className="size-5 text-white" />
                    </div>
                    <p className="text-white/70 leading-relaxed pt-2">{perk.text}</p>
                  </RevealAnimation>
                );
              })}
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default AboutCareers;
