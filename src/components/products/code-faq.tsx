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

export const codeFaqItems = [
  {
    value: 'languages',
    question: 'What languages does Nexus AI Code support?',
    answer:
      'Nexus AI Code works across TypeScript, JavaScript, Python, Go, Rust, Java, Kotlin, Swift, C++, C#, Ruby, PHP, SQL and Bash. Output is idiomatic in each language, following the conventions and patterns the community expects.',
  },
  {
    value: 'install',
    question: 'Do I need to install anything?',
    answer:
      'No IDE plugin is required. Nexus AI Code runs in the browser and is also available as a CLI you install with one command: curl -fsSL https://mynexusai.com/install.sh | bash. VS Code and JetBrains extensions are also available.',
  },
  {
    value: 'vs-copilot',
    question: 'How is Nexus AI Code different from GitHub Copilot?',
    answer:
      "GitHub Copilot focuses on inline autocomplete. Nexus AI Code is a full coding assistant: it generates complete features, reviews pull requests with structured reasoning, runs multi-step agents, and lives in the same workspace as your research, writing and design so you never need to copy context between tabs.",
  },
  {
    value: 'agents',
    question: 'What are Code Agents and how do they work?',
    answer:
      'Code Agents break a larger task into steps, write the code, run validation and iterate until the output meets your requirements. You give a prompt such as "Add Stripe billing to the user model" and the agent plans the approach, generates the code, writes tests and hands you a pull-ready branch with an explanation of every decision.',
  },
  {
    value: 'existing-codebase',
    question: 'Can I upload or paste an existing codebase for review?',
    answer:
      'Yes. Paste individual files or upload your full codebase. Nexus AI Code reads across files to understand dependencies and context so its review catches cross-file issues, not just single-function bugs.',
  },
  {
    value: 'privacy',
    question: 'Is my code kept private?',
    answer:
      'Your code is never used to train the underlying AI models. All conversations are encrypted in transit and at rest. You can delete your history at any time. Enterprise plans add data residency and access control options.',
  },
  {
    value: 'docs',
    question: 'Can Nexus AI Code write documentation for my project?',
    answer:
      'Yes. Docstrings, inline comments, README files, API reference pages and architectural decision records. Because Nexus AI Code shares the same workspace as Chat and Artifacts, it can pull in your product spec, write the docs and let you refine them all in one place.',
  },
  {
    value: 'free',
    question: "What is included in the free plan?",
    answer:
      'Free gives you unlimited code chat, code generation and code review. Code Agents and advanced reasoning are available in Premium at $20 per month and above. No credit card is needed to get started.',
  },
];

const CodeFaq = () => {
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
                      Everything you need to know about Nexus AI Code. Still have questions?
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
            <Accordion defaultOpen={codeFaqItems[0].value} className="space-y-4" aria-label="FAQ">
              {codeFaqItems.map((item) => (
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

export default CodeFaq;
