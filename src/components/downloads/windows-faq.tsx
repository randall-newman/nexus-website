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

export const windowsFaqItems = [
  {
    value: 'os-version',
    question: 'Which Windows versions are supported?',
    answer: 'Windows 10 and Windows 11, 64-bit.',
  },
  {
    value: 'ram',
    question: 'How much RAM do I need?',
    answer: '8 GB or more is recommended for the best experience.',
  },
  {
    value: 'sync',
    question: 'Does it sync with the mobile and Mac apps?',
    answer: 'Yes. Folders and conversation history sync across every platform you use.',
  },
  {
    value: 'storage',
    question: 'How much storage does it need?',
    answer: 'About 500 MB of free storage, plus space for any files you upload.',
  },
];

const WindowsFaq = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-10 lg:space-y-14">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>FAQ</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Questions about Nexus AI for Windows</h2>
            </TextReveal>
          </div>

          <RevealAnimation delay={0.3} className="mx-auto w-full max-w-[720px]">
            <Accordion
              defaultOpen={windowsFaqItems[0].value}
              className="space-y-4"
              aria-label="Windows FAQ"
            >
              {windowsFaqItems.map((item) => (
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

export default WindowsFaq;
