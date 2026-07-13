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

export const macFaqItems = [
  {
    value: 'apple-silicon',
    question: 'Does Nexus AI for Mac support Apple Silicon?',
    answer:
      'Yes. Native Apple Silicon (M-series) builds are available alongside a separate Intel build.',
  },
  {
    value: 'storage',
    question: 'How much storage does it need?',
    answer: 'About 500 MB of free storage, plus space for any files you upload.',
  },
  {
    value: 'sync',
    question: 'Does my data sync between Mac and other devices?',
    answer: 'Yes. Your Folders and conversation history sync automatically across Mac, Windows and mobile.',
  },
  {
    value: 'macos-version',
    question: 'Which macOS version do I need?',
    answer: 'macOS 13 or later.',
  },
];

const MacFaq = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-10 lg:space-y-14">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>FAQ</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Questions about Nexus AI for Mac</h2>
            </TextReveal>
          </div>

          <RevealAnimation delay={0.3} className="mx-auto w-full max-w-[720px]">
            <Accordion defaultOpen={macFaqItems[0].value} className="space-y-4" aria-label="Mac FAQ">
              {macFaqItems.map((item) => (
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

export default MacFaq;
