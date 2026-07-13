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

export const aiPresentationMakerFaqItems = [
  {
    value: 'input-formats',
    question: 'What formats can I use to create a presentation?',
    answer:
      'You can create presentations from typed or pasted text, uploaded Word (.docx) documents, PDFs, Markdown files, and any publicly accessible URL. Nexus AI reads the content, identifies structure and generates a formatted presentation automatically.',
  },
  {
    value: 'pptx-export',
    question: 'Can I export to PowerPoint (.pptx)?',
    answer:
      'Yes. Every presentation you create can be exported as an editable PowerPoint (.pptx) file with one click. You can then open it in Microsoft PowerPoint, Google Slides or Apple Keynote and continue editing.',
  },
  {
    value: 'beautify',
    question: 'What does AI-Beautify Slide do?',
    answer:
      'AI-Beautify takes your existing plain or inconsistently designed slides and redesigns them with a professional colour palette, proper typography hierarchy and optimised layouts. Your content stays exactly the same — only the visual design is upgraded.',
  },
  {
    value: 'how-slides-structured',
    question: 'How does Nexus AI decide how to structure the slides?',
    answer:
      'Nexus AI reads your input and identifies natural content breaks — headings, key points, data, and supporting detail. It maps these to a slide-by-slide structure using a logical narrative flow, then applies a layout appropriate to each content type (title, bullet, data, chart, closing).',
  },
  {
    value: 'templates',
    question: 'Are there templates I can choose from?',
    answer:
      'Yes. There are 50+ professionally designed templates across Business, Marketing, Education, Pitch Deck, Minimalist and Creative categories. You can select a template before generating, or apply a different one after — without losing your content.',
  },
  {
    value: 'how-many-slides',
    question: 'How many slides does it generate?',
    answer:
      'This depends on the length and complexity of your input. A short brief typically produces 8–12 slides. A full PDF or long document can produce 15–30 slides. You can also specify a target slide count in your prompt.',
  },
  {
    value: 'editing',
    question: 'Can I edit the slides after they are generated?',
    answer:
      'Yes. All generated presentations are fully editable inside Nexus AI. You can change text, swap layouts, add or remove slides, update the colour theme and reorder content. You can also ask the AI to revise any specific slide with a follow-up prompt.',
  },
  {
    value: 'brand-colours',
    question: 'Can I apply my own brand colours and logo?',
    answer:
      'Yes. On Pro and above you can set your brand colours, upload your logo and define typography preferences. These are applied automatically to every presentation you generate, keeping your decks on-brand without manual work.',
  },
];

const AiPresentationMakerFaq = () => {
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
                      Everything you need to know about the Nexus AI Presentation Maker.
                      Still have questions? We are happy to help.
                    </p>
                  </TextReveal>
                </div>
              </div>
              <Link href="/help" className="flex justify-center lg:justify-start">
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
              defaultOpen={aiPresentationMakerFaqItems[0].value}
              className="space-y-4"
              aria-label="AI Presentation Maker FAQ"
            >
              {aiPresentationMakerFaqItems.map((item) => (
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

export default AiPresentationMakerFaq;
