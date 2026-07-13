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

export const chatFaqItems = [
  {
    value: 'three-modes',
    question: 'What is the difference between General Chat, Research Mode and File Chat?',
    answer:
      'General Chat handles everyday questions, writing and brainstorming. Research Mode searches multiple real sources and returns cited answers built for deep research. File Chat lets you upload a document and ask questions about it directly, with page-level citations on every response. All three modes live in the same Folder, so you can switch between them without losing context.',
  },
  {
    value: 'research-mode',
    question: 'How does Research Mode work?',
    answer:
      'Research Mode searches across the web, academic databases and real-time news sources in parallel. It then builds a structured answer with every claim linked to a real source. Unlike standard chat, it does not rely solely on training data. It retrieves live information, so your answers are current and verifiable.',
  },
  {
    value: 'file-types',
    question: 'What file types can I upload in File Chat?',
    answer:
      'You can upload PDF, DOCX, XLSX, PPTX, CSV, TXT, Markdown, HTML, JSON, XML, JPG and PNG files. Upload multiple files to a single Folder and ask questions across all of them at once.',
  },
  {
    value: 'folders',
    question: 'What are Folders and how do they work?',
    answer:
      'Folders are persistent workspaces that hold your chats, uploaded files and drafts together. When you return to a Folder, Nexus AI remembers everything discussed and all the files previously uploaded, so you never have to re-brief the AI. You can share Folders with teammates on a Team plan.',
  },
  {
    value: 'model-routing',
    question: 'Does Nexus AI pick the AI model for me?',
    answer:
      'Yes. Nexus AI routes each request to the most appropriate underlying model automatically. Quick questions stay fast. Complex research or multi-step tasks get the depth they need. You never have to think about which model to use.',
  },
  {
    value: 'privacy',
    question: 'Is my chat history and uploaded data private?',
    answer:
      'Yes. Your conversations and uploaded files are encrypted in transit and at rest. They are never used to train our AI models. You can delete your history at any time. Enterprise plans add additional data residency and access control options.',
  },
  {
    value: 'sharing',
    question: 'Can I share a chat or Folder with someone?',
    answer:
      'Individual chats can be shared as a read-only link. Folders can be shared with teammates on Team and Enterprise plans, giving collaborators full access to the chat history, uploaded files and the AI with full context.',
  },
  {
    value: 'free-limits',
    question: 'How much can I chat on the free plan?',
    answer:
      'The free plan includes General Chat and File Chat with a credit allowance. Research Mode and unlimited chat are available on Premium at $20 per month. No credit card is needed to start on free.',
  },
];

const ChatFaq = () => {
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
                      Everything you need to know about Nexus AI Chat. Still have questions?
                      We are happy to help.
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
            <Accordion defaultOpen={chatFaqItems[0].value} className="space-y-4" aria-label="Chat FAQ">
              {chatFaqItems.map((item) => (
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

export default ChatFaq;
