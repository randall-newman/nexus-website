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

export const pricingFaqItems = [
  {
    value: 'annual-billing',
    question: 'Which plans have annual billing?',
    answer:
      'Annual billing is available on Premium ($16/month, $192/year) and Ultimate ($80/month, $960/year). Teams and Business plans are billed monthly per seat only — no annual contract is required.',
  },
  {
    value: 'what-is-a-credit',
    question: 'What is a credit?',
    answer:
      'Credits are how Nexus AI measures AI usage across the platform — chat, Research Mode, Creative Studio, academic tools, code and more. Every plan comes with a monthly credit allowance. You can top up at any time if you need more before your credits reset.',
  },
  {
    value: 'credits-run-out',
    question: 'What happens when I run out of credits?',
    answer:
      "Your plan's core features remain active. AI-intensive actions (like advanced model responses, image generation or Research Mode queries) will prompt you to top up or upgrade. Top-ups start from $10 and are available instantly.",
  },
  {
    value: 'research-mode-premium',
    question: 'Can I use Research Mode on Premium?',
    answer:
      'Yes. Premium includes 20 Research Mode queries per month. Ultimate includes unlimited queries and longer reports (up to 20,000 words). Research Mode is not available on the Free plan.',
  },
  {
    value: 'academic-vs-essay',
    question: 'Is Nexus AI Academic the same as the AI Essay Writer?',
    answer:
      'Yes — they are now one product. Nexus AI Academic is a unified research and writing workspace that covers academic writing, essay drafting, citations, plagiarism checking, peer review simulation, literature reviews and more.',
  },
  {
    value: 'file-uploads-credits',
    question: 'Do file uploads count against my credits?',
    answer:
      'Uploading a file does not cost credits. File operations — like summarising a document or running File Chat — do use credits. All paid plans include unlimited file uploads; the Free plan is limited to 5 files.',
  },
  {
    value: 'teams-minimum',
    question: 'What is the minimum for a Teams plan?',
    answer:
      'Teams plans require a minimum of 2 seats at $30/seat/month. There is no annual contract — you pay month to month.',
  },
  {
    value: 'meeting-notes-addon',
    question: 'Can I add Meeting Notes to any plan?',
    answer:
      'Yes. Meeting Notes is available as an add-on on Free, Premium, Ultimate and Teams plans. On the Business plan, Meeting Notes is bundled in at no extra charge (300 minutes/month included per account).',
  },
  {
    value: 'education-enterprise',
    question: 'How do I get Education or Enterprise pricing?',
    answer:
      'Contact our team directly. Education pricing is an annual institutional licence. Enterprise is a custom contract. Both include dedicated onboarding and support.',
  },
  {
    value: 'cancel-anytime',
    question: 'Can I switch plans or cancel at any time?',
    answer:
      'Monthly plans can be cancelled at any time. Annual plans can be cancelled and refunded on a pro-rated basis within 30 days. Contact support for assistance.',
  },
  {
    value: 'free-trial-premium',
    question: 'Is there a free trial of Premium?',
    answer:
      'The Free plan lets you try Nexus AI with no commitment and no card required. If you want to trial Premium features, contact us about an extended trial.',
  },
];

const FAQ = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="flex flex-col items-start justify-center gap-y-6 overflow-hidden lg:flex-row lg:gap-x-18 lg:gap-y-0">
          {/* Left: heading + CTA */}
          <RevealAnimation delay={0.1} direction="left" offset={100} className="w-full lg:w-1/2 lg:sticky lg:top-32 lg:self-start">
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-5">
                <RevealAnimation delay={0.1}>
                  <BadgePrimary>Pricing FAQ</BadgePrimary>
                </RevealAnimation>
                <div className="space-y-3">
                  <TextReveal delay={0.2}>
                    <h2 className="text-secondary">Frequently asked questions</h2>
                  </TextReveal>
                  <TextReveal delay={0.3}>
                    <p className="text-background-14/60 mx-auto max-w-[420px] lg:mx-0">
                      Everything you need to know about plans, billing and features.
                      Still have a question? We are happy to help.
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

          {/* Right: accordion */}
          <RevealAnimation delay={0.2} direction="right" offset={100} className="w-full lg:w-1/2">
            <Accordion
              defaultOpen={pricingFaqItems[0].value}
              className="space-y-4"
              aria-label="Pricing FAQ"
            >
              {pricingFaqItems.map((item) => (
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

export default FAQ;
