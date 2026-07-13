import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { ButtonPrimary } from '@/src/components/shared/ui/button';
import Link from 'next/link';

const Continuity = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <RevealAnimation
          delay={0.1}
          asChild={false}
          className="mx-auto flex w-full max-w-[680px] flex-col items-center gap-y-6 rounded-2xl bg-white p-10 text-center"
        >
          <TextReveal delay={0.2}>
            <h2>Your work follows you</h2>
          </TextReveal>
          <p className="text-tagline-2 text-secondary/60">
            Folders, chat history and Creative Studio assets sync across every platform. Start a
            draft on desktop, finish it on your phone.
          </p>
          <Link href="/products/chat">
            <ButtonPrimary
              className="mx-auto md:w-fit!"
              textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
            >
              Start free
            </ButtonPrimary>
          </Link>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Continuity;
