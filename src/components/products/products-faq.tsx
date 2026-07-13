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
    value: 'what-are-products',
    question: 'What are the four Nexus AI products?',
    answer:
      'Nexus AI has four core products: Chat (general chat, Research Mode and File Chat), Creative Studio (images, presentations, audio and video), Code (generation, review and CLI), and Artifacts (the shared output canvas where work from every product lands). All four share the same Folders, credits and workspace.',
  },
  {
    value: 'one-subscription',
    question: 'Do I need separate subscriptions for each product?',
    answer:
      'No. Every Nexus AI plan — Free, Premium and Ultimate — gives you access to all four products. A single monthly credit allowance works across Chat, Creative Studio, Code and Artifacts. No juggling separate tools or billing.',
  },
  {
    value: 'what-are-folders',
    question: 'What are Folders and how do they connect the products?',
    answer:
      'Folders are persistent workspaces that hold your chats, uploaded files, generated assets and Artifacts together. When you switch between Chat, Creative Studio and Code inside the same Folder, the AI retains full context and your files are accessible across every product. You never have to re-upload or re-brief.',
  },
  {
    value: 'what-are-credits',
    question: 'How does the credit system work across products?',
    answer:
      'Credits measure AI usage across the platform. They apply to Research Mode queries, image and audio generation, video creation and other AI-intensive actions. Chat on the Free plan uses credits; unlimited chat is available on Premium and above. Creative Studio credits are allocated monthly (100 on Premium, 750 on Ultimate) and top-ups are available any time.',
  },
  {
    value: 'creative-studio-access',
    question: 'Is Creative Studio included in my plan?',
    answer:
      'Creative Studio is available as a preview on the Free plan, but image generation and video generation require a paid plan. Premium includes 100 Creative Studio credits per month, unlocking AI Image Generator, audio generation and presentation tools. Ultimate includes 750 credits and adds AI video generation (50 videos per month).',
  },
  {
    value: 'artifacts-vs-canvas',
    question: 'What is the difference between Artifacts and a normal document editor?',
    answer:
      'Artifacts is the output layer of Nexus AI — a rich canvas where the AI deposits finished work. Instead of copying AI output into another app, Artifacts lets you edit, arrange, refine and export directly inside Nexus AI. Every product writes to Artifacts, so your research, code, images and slides all live in the same place.',
  },
  {
    value: 'code-product',
    question: 'What programming languages does Nexus AI Code support?',
    answer:
      'Nexus AI Code supports over 30 programming languages including Python, JavaScript, TypeScript, Go, Rust, Java, C++, Swift, Kotlin, PHP, Ruby and more. It can generate, review, explain and refactor code, and integrates into your terminal workflow via the CLI on Premium and Ultimate plans.',
  },
  {
    value: 'mobile-access',
    question: 'Can I use all four products on mobile?',
    answer:
      'Yes. Nexus AI is available on web, iOS and Android. Chat, File Chat, Research Mode and Artifacts are fully mobile-optimised. Creative Studio and Code have full functionality on the web app and progressively enhanced mobile experiences.',
  },
];

const ProductsFaq = () => {
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
                  <BadgePrimary>FAQ</BadgePrimary>
                </RevealAnimation>
                <div className="space-y-3">
                  <TextReveal delay={0.2}>
                    <h2 className="text-secondary">Frequently asked questions</h2>
                  </TextReveal>
                  <TextReveal delay={0.3}>
                    <p className="text-background-14/60 mx-auto max-w-[420px] lg:mx-0">
                      Everything you need to know about Nexus AI products, credits and how the
                      platform works together. Still have a question? We are happy to help.
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
            <Accordion defaultOpen={faqItems[0].value} className="space-y-4" aria-label="Products FAQ">
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

export default ProductsFaq;
