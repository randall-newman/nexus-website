import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import {
  Accordion,
  AccordionAction,
  AccordionContent,
  AccordionIcon,
  AccordionItem,
  AccordionTitle,
} from '@/src/components/shared/ui/accordion';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonWhite } from '@/src/components/shared/ui/button';
import Link from 'next/link';

export const faqItems = [
  {
    value: 'what-does-nexus-ai-do',
    question: 'What can Nexus AI do?',
    answer:
      'Nexus AI is an AI workspace for research, writing, design and code. Upload files, chat with your documents, generate images, slides and video, and edit everything in Artifacts before you export.',
  },
  {
    value: 'which-plan-is-right-for-me',
    question: 'Which plan is right for me?',
    answer:
      'Free is enough to try Nexus AI with no card required. Premium suits everyday research and writing. Ultimate is for heavy, daily AI use across documents, decks and code.',
  },
  {
    value: 'can-my-team-use-nexus-ai',
    question: 'Can my whole team use Nexus AI?',
    answer:
      'Yes. Team pricing starts at $30 per seat with a 2-seat minimum, with shared Folders so a team never has to re-explain context. Larger teams needing SSO and audit logs can move to Enterprise.',
  },
  {
    value: 'is-my-data-secure',
    question: 'Is my data secure?',
    answer:
      'We use encryption in transit and at rest with strict access controls. Our Privacy Policy covers retention, your rights, and how AI-specific data like memory and training data is handled.',
  },
  {
    value: 'which-devices-can-i-use',
    question: 'Which devices can I use Nexus AI on?',
    answer:
      'Nexus AI is available on Mac, Windows and mobile, with your Folders and history synced everywhere so you can pick up exactly where you left off.',
  },
  {
    value: 'do-i-own-what-i-create',
    question: 'Do I own what I create with Nexus AI?',
    answer:
      'Yes. You own the documents, images, slides and code you generate with Nexus AI, subject to the rights of any third-party material you upload, as set out in our Terms of Service.',
  },
];

const FAQ = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="flex flex-col items-start justify-center gap-y-6 overflow-hidden lg:flex-row lg:gap-x-18 lg:gap-y-0">
          <RevealAnimation delay={0.1} direction="left" offset={100} className="w-full lg:w-1/2">
            <div className="space-y-14 text-center lg:text-left">
              <div className="space-y-5">
                <RevealAnimation delay={0.1}>
                  <BadgePrimary>Frequently Asked Questions</BadgePrimary>
                </RevealAnimation>

                <div className="space-y-3">
                  <TextReveal delay={0.2}>
                    <h2>Frequently asked questions</h2>
                  </TextReveal>
                  <TextReveal delay={0.3}>
                    <p className="text-background-14/60 mx-auto max-w-[450px] lg:mx-0">
                      We&apos;ve gathered the most commonly asked questions to help you understand
                      our services, workflow, pricing, and support.
                    </p>
                  </TextReveal>
                </div>
              </div>

              <Link href="/contact" className="flex justify-center lg:justify-start">
                <ButtonWhite
                  className="mx-auto w-[80%]! md:mx-0 md:w-fit!"
                  textClassName="text-center max-sm:flex-1 max-sm:px-0! max-sm:pr-8!"
                >
                  Contact Us
                </ButtonWhite>
              </Link>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2} direction="right" offset={100} className="w-full lg:w-1/2">
            <Accordion defaultOpen={faqItems[0].value} className="space-y-4" aria-label="FAQ">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="group rounded-[20px] bg-white px-4 md:px-6"
                >
                  <AccordionAction
                    showIcon={false}
                    className="flex w-full cursor-pointer items-center justify-between gap-x-4 pt-6 transition-all duration-400 ease-in-out group-data-[state=closed]:pb-6 group-data-[state=open]:pb-4 md:pt-8 md:group-data-[state=closed]:pb-8"
                  >
                    <AccordionTitle>{item.question}</AccordionTitle>
                    <AccordionIcon className="shrink-0" />
                  </AccordionAction>
                  <AccordionContent contentClassName="text-tagline-3 sm:text-tagline-2 font-inter-tight cursor-text pb-8 text-left">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
