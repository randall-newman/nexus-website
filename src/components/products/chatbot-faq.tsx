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

export const chatbotFaqItems = [
  {
    value: 'train',
    question: 'How do I train the chatbot on my content?',
    answer:
      'Paste your website URL and Nexus AI crawls every page automatically. You can also upload PDFs, Word documents, spreadsheets or CSV files. Connect a Google Drive, Notion or Confluence workspace for automatic syncing. The chatbot updates itself whenever your content changes.',
  },
  {
    value: 'channels',
    question: 'Which channels can I deploy the chatbot on?',
    answer:
      'You can deploy on a website widget (copy one line of code), WhatsApp Business, Facebook Messenger, Instagram DMs, Telegram, Slack, email and SMS. One chatbot, one setup, deployed across every channel simultaneously.',
  },
  {
    value: 'no-code',
    question: 'Do I need coding skills to set it up?',
    answer:
      'No. Adding the chatbot to a website takes one line of code you copy and paste. Connecting to WhatsApp, Facebook, Instagram and other channels is done through guided OAuth flows in the dashboard. No developer required.',
  },
  {
    value: 'handoff',
    question: 'Can the chatbot hand off to a human agent?',
    answer:
      'Yes. You can set rule-based triggers (for example, any mention of a complaint or refund) or let the AI decide when to escalate. When a handoff happens, the full chat history, customer details and account tier are passed to the human agent automatically. It integrates with Zendesk, HubSpot and Salesforce.',
  },
  {
    value: 'unanswered',
    question: "What happens when the chatbot doesn't know the answer?",
    answer:
      "You control the fallback behaviour. Options include: escalate to a human agent, collect an email and promise a follow-up, display a custom message, or route to a specific FAQ page. The Analytics dashboard shows all unanswered questions so you can add them to your knowledge base.",
  },
  {
    value: 'languages',
    question: 'What languages does the chatbot support?',
    answer:
      'The chatbot supports over 80 languages automatically. Train it in English and it can respond in French, Spanish, Arabic, Mandarin and more without any additional configuration. Language detection happens per conversation.',
  },
  {
    value: 'privacy',
    question: 'Is customer data secure?',
    answer:
      'Yes. All conversation data is encrypted in transit and at rest. Your training content and customer conversations are never used to train third-party AI models. The Business plan adds data residency options and SOC 2 Type II compliance documentation.',
  },
  {
    value: 'customize',
    question: 'Can I customize the bot appearance and personality?',
    answer:
      'Fully. Set the bot name, avatar, brand colors and chat bubble style to match your brand. Choose a response tone: professional, friendly or casual. Set operating hours so the bot hands off to email capture when your team is offline. All of this is done in the dashboard with no code.',
  },
];

const ChatbotFaq = () => {
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
                      Everything you need to know about Nexus AI Chatbot. Still have questions?
                      Talk to our team.
                    </p>
                  </TextReveal>
                </div>
              </div>
              <Link href="/contact-sales" className="flex justify-center lg:justify-start">
                <ButtonWhite
                  className="mx-auto w-[80%]! md:mx-0 md:w-fit!"
                  textClassName="text-center max-sm:flex-1 max-sm:px-0! max-sm:pr-8!"
                >
                  Talk to sales
                </ButtonWhite>
              </Link>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2} direction="right" offset={100} className="w-full lg:w-1/2">
            <Accordion defaultOpen={chatbotFaqItems[0].value} className="space-y-4" aria-label="Chatbot FAQ">
              {chatbotFaqItems.map((item) => (
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

export default ChatbotFaq;
