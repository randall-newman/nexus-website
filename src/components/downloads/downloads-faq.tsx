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

export const downloadsFaqItems = [
  {
    value: 'platforms',
    question: 'Which platforms are supported?',
    answer:
      'Nexus AI is available on macOS (Apple Silicon and Intel), Windows 10/11, iOS, Android, and as a browser extension for Chrome, Edge and Brave. A Linux build (AppImage and .deb) is currently in beta.',
  },
  {
    value: 'free-to-download',
    question: 'Is the app free to download?',
    answer:
      'Yes. All Nexus AI apps are free to download. The Free plan is included with every account — no credit card required. Premium and Ultimate plans unlock additional features and usage limits.',
  },
  {
    value: 'sync',
    question: 'Does my data sync across devices?',
    answer:
      'Yes. Your folders, chat history, Creative Studio assets, and settings all sync automatically across every device where you are signed in to Nexus AI. Start something on desktop and pick it up on your phone.',
  },
  {
    value: 'account-needed',
    question: 'Do I need an account to use the app?',
    answer:
      'A Nexus AI account is required to use the app. Creating an account is free and takes under a minute. Sign up with your email, or continue with Google or Apple.',
  },
  {
    value: 'updates',
    question: 'How do I update the app?',
    answer:
      'The desktop app (macOS and Windows) checks for updates automatically and installs them in the background. Mobile apps update through the App Store or Google Play. You will always have the latest version without manual action.',
  },
  {
    value: 'browser-extension',
    question: 'Can I use the browser extension without installing the desktop app?',
    answer:
      'Yes. The browser extension works independently. It connects to your Nexus AI account and lets you summarise pages, write, translate and ask questions from any tab — no desktop app required.',
  },
  {
    value: 'enterprise-deploy',
    question: 'Can the app be deployed across an enterprise?',
    answer:
      'Yes. Nexus AI supports managed deployment on macOS (via MDM, Jamf, Intune) and Windows (via Group Policy or MSI packaging). Contact our sales team for enterprise deployment documentation.',
  },
];

const DownloadsFaq = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="flex flex-col items-start justify-center gap-y-6 overflow-hidden lg:flex-row lg:gap-x-18 lg:gap-y-0">
          <RevealAnimation delay={0.1} direction="left" offset={100} className="w-full lg:w-1/2">
            <div className="space-y-14 text-center lg:text-left">
              <div className="space-y-5">
                <RevealAnimation delay={0.1}>
                  <BadgePrimary>FAQ</BadgePrimary>
                </RevealAnimation>
                <div className="space-y-3">
                  <TextReveal delay={0.2}>
                    <h2>Frequently asked questions</h2>
                  </TextReveal>
                  <TextReveal delay={0.3}>
                    <p className="text-background-14/60 mx-auto max-w-[450px] lg:mx-0">
                      Everything you need to know about downloading and running Nexus AI.
                      Still have questions? Our Help Centre has the answers.
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
              defaultOpen={downloadsFaqItems[0].value}
              className="space-y-4"
              aria-label="Downloads FAQ"
            >
              {downloadsFaqItems.map((item) => (
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

export default DownloadsFaq;
