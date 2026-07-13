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

const useCases = [
  { title: 'Voice chat on the move', description: 'Talk through an idea without typing.' },
  { title: 'Review before a meeting', description: 'Ask a document questions on your commute.' },
  { title: 'Quick image generation', description: 'Generate a visual the moment you need one.' },
];

const faqItems = [
  {
    value: 'min-os-version',
    question: 'What is the minimum OS version?',
    answer: 'Recent versions of Android and iOS are supported; the app prompts you to update if needed.',
  },
  {
    value: 'offline-support',
    question: 'Does the app work offline?',
    answer: 'You can read past conversations offline. Generating new responses needs a connection.',
  },
  {
    value: 'shared-credits',
    question: 'Does mobile usage share the same plan credits as desktop?',
    answer: 'Yes. Mobile and desktop draw from the same plan, so your usage is consistent everywhere.',
  },
];

const MobileDetails = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-18 lg:space-y-24">
          <div className="space-y-10 lg:space-y-14">
            <div className="space-y-3 text-center">
              <TextReveal delay={0.1}>
                <h2>Made for the moments between meetings</h2>
              </TextReveal>
            </div>
            <div className="grid grid-cols-12 gap-y-5 md:gap-4">
              {useCases.map((item, index) => (
                <RevealAnimation
                  key={item.title}
                  delay={0.1 * (index + 1)}
                  asChild={false}
                  className="col-span-12 space-y-1.5 rounded-2xl bg-white p-6 md:col-span-4"
                >
                  <h3 className="text-heading-6">{item.title}</h3>
                  <p className="text-tagline-2 text-secondary/60">{item.description}</p>
                </RevealAnimation>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-3 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>FAQ</BadgePrimary>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.2} className="mx-auto w-full max-w-[680px]">
              <Accordion defaultOpen={faqItems[0].value} className="space-y-4" aria-label="Mobile app FAQ">
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
      </div>
    </section>
  );
};

export default MobileDetails;
