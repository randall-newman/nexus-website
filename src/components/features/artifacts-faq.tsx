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

export const artifactsFaqItems = [
  {
    value: 'what-is-artifacts',
    question: 'What is Artifacts and how is it different from the chat window?',
    answer:
      'Artifacts is a dedicated preview pane that opens alongside the chat. When Nexus AI generates a document, code file, website or diagram, it renders there as a live preview rather than raw text in the conversation. You can edit it directly, ask the AI to refine it, and export the finished file, all without copying anything out of the chat.',
  },
  {
    value: 'canvas-vs-artifacts',
    question: 'Is Artifacts the same as Canvas on other AI platforms?',
    answer:
      'Yes. What Nexus AI calls Artifacts, Google Gemini calls Canvas and OpenAI also introduced a Canvas feature. The concept is the same: a dedicated, side-by-side editing workspace where AI-generated content is rendered and editable in real time. Nexus AI Artifacts supports a broader set of output types including documents, code, live websites, slides, diagrams and SVG graphics.',
  },
  {
    value: 'output-types',
    question: 'What types of content can I view and edit in Artifacts?',
    answer:
      'Documents (DOCX, PDF, Markdown), code (all major languages with syntax highlighting), single-page websites (HTML/CSS/JS with a live preview), presentation slides (PPTX format), flowcharts and diagrams (Mermaid and plain-language), and SVG illustrations and infographics. Creative Studio and Code output also render in Artifacts.',
  },
  {
    value: 'edit-modes',
    question: 'Can I edit directly or only through the AI?',
    answer:
      'Both. You can click anywhere in the Artifacts pane and type to edit the content directly. Or you can send a follow-up message in the chat ("rewrite the third paragraph", "change the chart to a bar chart") and the AI applies the change. Both approaches are saved as new versions automatically.',
  },
  {
    value: 'version-history',
    question: 'How does version history work?',
    answer:
      'Every change, whether made by you directly or by the AI, creates a new numbered version automatically. You can see what changed between versions in a colour-coded diff view, restore any earlier version with one click, and branch from any point to explore a different direction without losing the original.',
  },
  {
    value: 'export-formats',
    question: 'What formats can I export from Artifacts?',
    answer:
      'PDF, DOCX, PPTX, HTML, SVG, PNG, Markdown and plain text. The export is always the native file: a real DOCX you can open in Microsoft Word, a working HTML file, a valid SVG. Not a plain-text transcript that needs reformatting.',
  },
  {
    value: 'website-preview',
    question: 'Can Artifacts show a live website preview?',
    answer:
      'Yes. When Nexus AI generates a single-page HTML application, landing page or interactive tool, it renders as a working preview inside the Artifacts pane. You can interact with it, see how it looks, then export the completed HTML file.',
  },
  {
    value: 'relationship-products',
    question: 'Does Artifacts work with Chat, Creative Studio and Code?',
    answer:
      'Yes. Artifacts is the rendering layer underneath all three products. Documents and drafts from Chat, slides and graphics from Creative Studio, and functions and scripts from Code all open in Artifacts for preview, editing and export.',
  },
];

const ArtifactsFaq = () => {
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
                      Everything you need to know about Nexus AI Artifacts. Still have
                      questions? We are happy to help.
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
            <Accordion defaultOpen={artifactsFaqItems[0].value} className="space-y-4" aria-label="Artifacts FAQ">
              {artifactsFaqItems.map((item) => (
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

export default ArtifactsFaq;
