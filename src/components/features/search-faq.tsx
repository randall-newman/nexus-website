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

export const searchFaqItems = [
  {
    value: 'what-is-ai-search',
    question: 'What is Nexus AI Search?',
    answer:
      'Nexus AI Search is an AI answer engine built into your workspace. Ask a question in plain language and Nexus AI searches the live web, reads the most relevant pages and returns a direct answer with citations you can open and verify. It replaces the tab-juggling of a traditional search engine with one sourced answer.',
  },
  {
    value: 'real-time-data',
    question: 'Does Nexus AI Search use real-time information?',
    answer:
      'Yes. Search queries the live web at the moment you ask, so answers can include today’s news, current prices, fresh statistics and anything published after the AI model’s training cutoff. When freshness matters, the answer shows when its sources were published.',
  },
  {
    value: 'sources-citations',
    question: 'Where do the answers come from? Are sources shown?',
    answer:
      'Every factual claim in a search answer links to its source. You see the publications behind the answer as citation chips, and clicking one opens the original page, so you can verify anything before you rely on it in your work.',
  },
  {
    value: 'search-vs-google',
    question: 'How is this different from searching on Google?',
    answer:
      'A traditional search engine gives you links to read yourself. Nexus AI Search reads the results for you and returns one direct, cited answer, then lets you ask follow-ups that keep the context of the conversation. And because it lives in your workspace, the answer can flow straight into the essay, report or deck you are building.',
  },
  {
    value: 'search-my-files',
    question: 'Can it search my own files and connected apps too?',
    answer:
      'Yes. Search works alongside AI File Chat and Connectors: one question can draw on the live web, your uploaded documents and your connected tools like Google Drive or Notion, with sources shown for each. That is something a standalone search engine cannot do.',
  },
  {
    value: 'which-plans-search',
    question: 'Which plans include AI Search?',
    answer:
      'Every plan includes AI Search. The Free plan has daily usage limits; Premium and Ultimate raise the limits and unlock deeper research runs that read more sources per question. See the pricing page for details.',
  },
];

const SearchFaq = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="flex flex-col items-start justify-center gap-y-6 overflow-hidden lg:flex-row lg:gap-x-18 lg:gap-y-0">
          <RevealAnimation
            delay={0.1}
            direction="left"
            offset={100}
            className="w-full lg:w-1/2 lg:sticky lg:top-32 lg:self-start"
          >
            <div className="space-y-8 text-center lg:text-left">
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
                      Everything you need to know about Nexus AI Search. Still have questions? We
                      are happy to help.
                    </p>
                  </TextReveal>
                </div>
              </div>
              <Link
                href="/help"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center lg:justify-start"
              >
                <ButtonWhite
                  className="mx-auto w-[80%]! md:mx-0 md:w-fit!"
                  textClassName="text-center max-sm:flex-1 max-sm:px-0! max-sm:pr-8!"
                >
                  Visit Help Centre
                </ButtonWhite>
              </Link>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2} direction="right" offset={100} className="w-full lg:w-1/2">
            <Accordion
              defaultOpen={searchFaqItems[0].value}
              className="space-y-4"
              aria-label="AI Search FAQ"
            >
              {searchFaqItems.map((item) => (
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

export default SearchFaq;
