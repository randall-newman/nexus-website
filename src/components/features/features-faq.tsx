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

const faqItems = [
  {
    value: 'features-vs-products',
    question: 'What is the difference between Features and Products?',
    answer:
      'Products describes how Nexus AI is organised: Chat, Creative Studio, Code and Artifacts are the four core products. Features describes specific things you can do, like Academic Research, AI File Chat or AI Image Generation. Features live inside Products. For example, Research Mode and File Chat are features inside Nexus AI Chat.',
  },
  {
    value: 'coming-soon',
    question: 'Which features are coming soon?',
    answer:
      'Features marked "Coming soon" are on the roadmap but not yet available. These include AI Memory, Skills, AI Video Generator, AI Plagiarism Checker, Nexus AI for Microsoft 365 and the Chrome Extension. Premium and Ultimate subscribers get early access to new features as they ship.',
  },
  {
    value: 'credits-features',
    question: 'Do all features use credits?',
    answer:
      'Not all features consume credits equally. General Chat, basic writing and file uploads do not cost extra. AI-intensive features (like Research Mode queries, image generation, audio production and video creation) use credits from your monthly allowance. Uploading a file does not cost credits; running AI analysis on it does.',
  },
  {
    value: 'academic-research-feature',
    question: 'Is Academic Research the same as Research Mode?',
    answer:
      'Research Mode is the chat interface that runs live multi-source searches. Academic Research is the full workspace built on top of it, adding citation management, essay drafting, plagiarism checking, peer review simulation and literature reviews. Think of Research Mode as the engine and Academic Research as the full product built around it.',
  },
  {
    value: 'file-chat-formats',
    question: 'What file formats does AI File Chat support?',
    answer:
      'AI File Chat supports PDF, DOCX, XLSX, PPTX, CSV, TXT, Markdown, HTML, JSON, XML, JPG and PNG. You can upload multiple files to a Folder and ask questions across all of them at once. Page-level and cell-level citations appear on every answer.',
  },
  {
    value: 'artifacts-output',
    question: 'What can I do with an Artifact once it is created?',
    answer:
      'You can edit it directly using the rich text canvas, add images and tables, rearrange sections and share it via a public link. Export to PDF or DOCX is available on Premium and above with no watermark. Artifacts are accessible from any device and remain stored in your Folder.',
  },
  {
    value: 'feature-access-free',
    question: 'Which features are available on the free plan?',
    answer:
      'The free plan includes preview access to most features: General Chat, AI File Chat (limited files), Academic Research preview, Creative Studio preview, Code preview and Artifacts preview. Full access to Research Mode, unlimited File Chat, full Creative Studio and full Artifacts requires a Premium or Ultimate plan.',
  },
  {
    value: 'early-access',
    question: 'How do I get early access to features before they launch?',
    answer:
      'Ultimate subscribers receive early access to new features before they are available on other plans. When a "coming soon" feature ships, Ultimate users are notified and can start using it immediately. Premium users get access shortly after.',
  },
];

const FeaturesFaq = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-32">
      <div className="main-container">
        <div className="flex flex-col items-start justify-center gap-y-6 overflow-hidden lg:flex-row lg:gap-x-18 lg:gap-y-0">
          {/* Left */}
          <RevealAnimation
            delay={0.1}
            direction="left"
            offset={100}
            className="w-full lg:w-1/2 lg:sticky lg:top-32 lg:self-start"
          >
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-5">
                <RevealAnimation delay={0.1}>
                  <BadgePrimary>Features FAQ</BadgePrimary>
                </RevealAnimation>
                <div className="space-y-3">
                  <TextReveal delay={0.2}>
                    <h2 className="text-secondary">Frequently asked questions</h2>
                  </TextReveal>
                  <TextReveal delay={0.3}>
                    <p className="text-background-14/60 mx-auto max-w-[420px] lg:mx-0">
                      Everything you need to know about what Nexus AI can do, which features are
                      available and how they work together. Still have a question? We are happy to help.
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

          {/* Right */}
          <RevealAnimation delay={0.2} direction="right" offset={100} className="w-full lg:w-1/2">
            <Accordion defaultOpen={faqItems[0].value} className="space-y-4" aria-label="Features FAQ">
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

export default FeaturesFaq;
