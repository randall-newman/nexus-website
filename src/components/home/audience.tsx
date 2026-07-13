import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { Briefcase, GraduationCap, Sparkles, Users } from 'lucide-react';
import Link from 'next/link';

const audiences = [
  {
    title: 'Students',
    description: 'Research, cite and check your work before you submit it.',
    href: '/solutions/for-students',
    Icon: GraduationCap,
  },
  {
    title: 'Creators',
    description: 'Generate, then refine in Artifacts before you publish.',
    href: '/solutions/for-creators',
    Icon: Sparkles,
  },
  {
    title: 'Professionals',
    description: 'Upload a document and ask it anything before a meeting.',
    href: '/solutions/for-businesses',
    Icon: Briefcase,
  },
  {
    title: 'Teams',
    description: 'Shared Folders, central billing and one workspace for everyone.',
    href: '/solutions/for-teams',
    Icon: Users,
  },
];

const Audience = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-10 lg:space-y-18">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Who it&apos;s for</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Built for the way you already work</h2>
            </TextReveal>
          </div>

          <div className="grid grid-cols-12 gap-y-5 md:gap-4">
            {audiences.map((audience, index) => (
              <RevealAnimation
                key={audience.title}
                delay={0.1 * (index + 1)}
                className="col-span-12 md:col-span-6 lg:col-span-3"
              >
                <Link
                  href={audience.href}
                  className="bg-accent group flex min-h-[370px] flex-col justify-between space-y-2 rounded-xl p-7 md:p-10"
                >
                  <span className="bg-accent-magenta/10 flex size-17 items-center justify-center rounded-3xl p-4 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                    <audience.Icon
                      strokeDasharray="2.5 3.5"
                      className="text-accent-magenta size-8 shrink-0"
                    />
                  </span>
                  <div className="space-y-2 text-left">
                    <h3 className="text-heading-5 text-secondary/80">{audience.title}</h3>
                    <p className="text-tagline-2 text-secondary/50">{audience.description}</p>
                  </div>
                </Link>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
