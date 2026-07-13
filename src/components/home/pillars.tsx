import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import AnimatedArtifactsDemo from '@/src/components/home/animated-artifacts-demo';
import AnimatedChatDemo from '@/src/components/home/animated-chat-demo';
import AnimatedCreativeDemo from '@/src/components/home/animated-creative-demo';
import LiveCodeDemo from '@/src/components/home/live-code-demo';
import { ButtonWhite } from '@/src/components/shared/ui/button';
import { cn } from '@/src/utils/cn';
import Link from 'next/link';

const ChatDemo           = () => <AnimatedChatDemo />;
const CreativeStudioDemo = () => <AnimatedCreativeDemo />;
const CodeDemo           = () => <LiveCodeDemo />;
const ArtifactsDemo      = () => <AnimatedArtifactsDemo />;

const pillars = [
  {
    title: 'Chat',
    description: 'General chat, research chat and file chat, organised into Folders.',
    href: '/products/chat',
    iconClass: 'ns-shape-1',
    Demo: ChatDemo,
  },
  {
    title: 'Creative Studio',
    description: 'Images, slides, docs, video, audio and wireframes, on-brand by default.',
    href: '/products/creative-studio',
    iconClass: 'ns-shape-2',
    Demo: CreativeStudioDemo,
  },
  {
    title: 'Code',
    description: 'An AI coding assistant for generation, review and the command line.',
    href: '/products/code',
    iconClass: 'ns-shape-3',
    Demo: CodeDemo,
  },
  {
    title: 'Artifacts',
    description: 'Preview, edit and refine AI-generated work before you export it.',
    href: '/features/artifacts',
    iconClass: 'ns-shape-4',
    Demo: ArtifactsDemo,
  },
];

const Pillars = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-10 lg:space-y-14">
          <div className="space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Products</BadgePrimary>
            </RevealAnimation>
            <div className="space-y-3">
              <TextReveal delay={0.2}>
                <h2>How you can use Nexus AI</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-background-14/60 mx-auto max-w-[550px]">
                  From a quick question to a finished deck, here&rsquo;s what working in Nexus AI
                  actually looks like.
                </p>
              </TextReveal>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {pillars.map((pillar, index) => (
              <RevealAnimation
                key={pillar.title}
                delay={0.1 * (index + 1)}
                asChild={false}
                className={cn(
                  'border-stroke-3 flex flex-col overflow-hidden rounded-2xl border bg-white p-6',
                  'h-[480px] lg:h-auto lg:aspect-square'
                )}
              >
                {/* Header — fixed height, never shrinks */}
                <div className="flex shrink-0 items-center gap-x-3">
                  <span className="bg-secondary flex size-10 shrink-0 items-center justify-center rounded-xl">
                    <span className={cn(pillar.iconClass, 'text-[18px] text-white')} />
                  </span>
                  <div>
                    <h3 className="text-heading-6 text-secondary">{pillar.title}</h3>
                    <p className="text-tagline-3 text-secondary/50">{pillar.description}</p>
                  </div>
                </div>

                {/* Demo — absolutely positioned so layout changes inside
                    have zero influence on the card size or page scroll */}
                <div className="relative mt-4 min-h-0 flex-1">
                  <div className="absolute inset-0 overflow-hidden">
                    <pillar.Demo />
                  </div>
                </div>

                {/* Explore button — fixed at bottom */}
                <Link href={pillar.href} className="mt-4 shrink-0 block">
                  <ButtonWhite className="w-full" textClassName="text-center flex-1 px-0! pr-8!">
                    Explore {pillar.title}
                  </ButtonWhite>
                </Link>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
