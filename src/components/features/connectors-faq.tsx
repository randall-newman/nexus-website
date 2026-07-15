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

export const connectorsFaqItems = [
  {
    value: 'what-are-connectors',
    question: 'What are Nexus AI Connectors?',
    answer:
      'Connectors link your Nexus AI workspace to tools you already use, like Google Drive, Notion, GitHub or Slack, so the AI can search your real files and data and take actions on your behalf. They are built on the Model Context Protocol (MCP), an open standard supported across the AI industry.',
  },
  {
    value: 'how-do-i-connect',
    question: 'How do I connect an app?',
    answer:
      'Open Nexus AI, go to Settings, then Connectors, and choose the app you want to link. Most connectors use a standard OAuth sign-in: you approve access in the app itself and you are done in under a minute. No code, no agents to install.',
  },
  {
    value: 'is-my-data-safe',
    question: 'Is my data safe when I use Connectors?',
    answer:
      'Yes. A connector only sees what you explicitly grant, permissions are scoped to your account or workspace, and consequential actions are surfaced for your approval before they run. You can disconnect any connector at any time from Settings, which immediately revokes its access.',
  },
  {
    value: 'which-plans',
    question: 'Which plans include Connectors?',
    answer:
      'Every plan can browse the directory and use a starter set of connectors. Premium and Ultimate unlock the full catalogue, higher usage limits and team-shared connections. See the pricing page for details.',
  },
  {
    value: 'connector-missing',
    question: 'The tool I use is not in the directory. What can I do?',
    answer:
      'Because Connectors are built on MCP, any service that speaks the protocol is a candidate. You can request a connector through our support team, or if you have built your own MCP server you can submit it for review using the Submit a connector button above.',
  },
  {
    value: 'submit-own',
    question: 'How do I submit my own connector?',
    answer:
      'Build your connector as a remote MCP server, make sure it meets our security and documentation requirements, then send it to us via the submission form. Our team reviews every submission before it appears in the directory. The full requirements are in the submission guide in our Help Centre.',
  },
];

const ConnectorsFaq = () => {
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
                      Everything you need to know about Nexus AI Connectors. Still have questions?
                      We are happy to help.
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
              defaultOpen={connectorsFaqItems[0].value}
              className="space-y-4"
              aria-label="Connectors FAQ"
            >
              {connectorsFaqItems.map((item) => (
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

export default ConnectorsFaq;
