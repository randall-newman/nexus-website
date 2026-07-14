import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { CheckIcon } from '@/src/components/shared/icon';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'Usage Policy | Nexus AI',
    'What you can and cannot do with Nexus AI. Permitted uses, prohibited uses, and how we enforce this policy.',
    '/legal/usage-policy'
  ),
};

const permitted = [
  'Writing, editing, and improving original content for personal, academic, or professional use',
  'Researching topics, summarising documents, and extracting insights from your own files',
  'Generating images, slides, audio, and other creative assets for lawful purposes',
  'Writing, reviewing, and debugging code for software projects',
  'Transcribing and summarising meetings you are a participant in or have permission to record',
  'Building internal tools using the Nexus AI API within the limits of your plan',
  'Using Nexus AI outputs as a starting point for your own original work',
];

const prohibited = [
  {
    category: 'Harmful or illegal content',
    items: [
      'Generating content that promotes, facilitates, or glorifies violence, self-harm, or illegal activity',
      'Creating content that sexualises minors in any way',
      'Producing content designed to harass, threaten, or abuse a specific individual',
      'Generating disinformation, deepfakes, or synthetic media designed to deceive',
    ],
  },
  {
    category: 'Misuse of the platform',
    items: [
      'Circumventing safety filters or attempting to jailbreak the AI models',
      'Using Nexus AI to scrape, spam, or send unsolicited bulk messages',
      'Reselling access to Nexus AI without an authorised reseller agreement',
      'Sharing account credentials with users outside your licensed plan',
    ],
  },
  {
    category: 'Intellectual property and privacy',
    items: [
      'Uploading files you do not have the right to process or share',
      'Using Nexus AI to reproduce, redistribute, or plagiarise copyrighted works',
      'Processing or generating personal data about real individuals in a way that violates applicable privacy law',
      'Using the plagiarism checker output to falsely attribute original work to yourself',
    ],
  },
  {
    category: 'Automated harmful use',
    items: [
      'Deploying Nexus AI as part of an automated pipeline to generate high-volume spam or phishing content',
      'Using Nexus AI to generate malware, exploits, or cyberweapons',
      'Training a competing AI model on Nexus AI outputs without prior written consent',
    ],
  },
];

const enforcement = [
  {
    action: 'Warning',
    description: 'For first-time or low-severity violations, we will contact you and explain the issue before taking further action.',
  },
  {
    action: 'Content removal',
    description: 'We may remove specific content that violates this policy without suspending your account.',
  },
  {
    action: 'Account suspension',
    description: 'Repeated or serious violations may result in temporary or permanent suspension of your account.',
  },
  {
    action: 'Legal referral',
    description: 'Illegal activity, including CSAM, threats, and fraud, will be reported to relevant law enforcement authorities.',
  },
];

export default function UsagePolicyPage() {
  return (
    <>
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Usage Policy</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h1>What you can and cannot do with Nexus AI</h1>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-background-14/60 mx-auto max-w-[560px]">
                Nexus AI is designed for legitimate, constructive use. This policy outlines what
                is permitted, what is not, and how we respond to violations.
              </p>
            </TextReveal>
            <RevealAnimation delay={0.4}>
              <p className="text-tagline-3 text-secondary/40 mx-auto">Last updated: July 2026</p>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="mx-auto max-w-[760px] space-y-6">
            <RevealAnimation delay={0.1}>
              <h2 className="text-heading-4">Permitted uses</h2>
            </RevealAnimation>
            <RevealAnimation
              delay={0.2}
              asChild={false}
              className="border-stroke-3 rounded-2xl border bg-white p-6 md:p-8"
            >
              <ul className="space-y-3">
                {permitted.map((item) => (
                  <li key={item} className="flex items-start gap-x-2">
                    <span className="border-stroke-3 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border p-0.5">
                      <CheckIcon className="stroke-secondary size-3" />
                    </span>
                    <span className="text-tagline-2 text-secondary/80">{item}</span>
                  </li>
                ))}
              </ul>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="mx-auto max-w-[760px] space-y-6">
            <RevealAnimation delay={0.1}>
              <h2 className="text-heading-4">Prohibited uses</h2>
            </RevealAnimation>
            <div className="space-y-5">
              {prohibited.map((group, index) => (
                <RevealAnimation
                  key={group.category}
                  delay={0.1 * (index + 1)}
                  asChild={false}
                  className="border-stroke-3 rounded-2xl border bg-white p-6 md:p-8 space-y-4"
                >
                  <h3 className="text-heading-6 text-secondary">{group.category}</h3>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-x-2">
                        <span className="mt-1 size-2 shrink-0 rounded-full bg-red-400" />
                        <span className="text-tagline-2 text-secondary/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="mx-auto max-w-[760px] space-y-6">
            <RevealAnimation delay={0.1}>
              <h2 className="text-heading-4">Enforcement</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-tagline-1 text-secondary/60">
                We review reports of policy violations and take action proportional to the
                severity and intent of the breach. The steps below describe our typical
                enforcement ladder, though serious violations may skip directly to suspension or
                legal referral.
              </p>
            </RevealAnimation>
            <div className="space-y-4">
              {enforcement.map((step, index) => (
                <RevealAnimation
                  key={step.action}
                  delay={0.1 * (index + 1)}
                  asChild={false}
                  className="border-stroke-3 flex items-start gap-x-4 rounded-2xl border bg-white p-5 md:p-6"
                >
                  <span className="text-tagline-3 text-secondary/40 font-medium mt-0.5 shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="space-y-1">
                    <p className="text-tagline-1 text-secondary font-semibold">{step.action}</p>
                    <p className="text-tagline-2 text-secondary/60">{step.description}</p>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <RevealAnimation
            delay={0.1}
            asChild={false}
            className="border-stroke-3 mx-auto flex w-full max-w-[680px] flex-col items-center gap-y-4 rounded-2xl border bg-white p-8 text-center"
          >
            <h2>Report a violation</h2>
            <p className="text-tagline-2 text-secondary/60">
              If you believe someone is using Nexus AI in violation of this policy, please contact{' '}
              <a href="mailto:trust@mynexusai.com" className="text-secondary underline">
                trust@mynexusai.com
              </a>
              . We review all reports and will follow up within two business days.
            </p>
            <Link href="/legal/terms" className="text-secondary text-tagline-2 underline">
              Read the full Terms of Service
            </Link>
          </RevealAnimation>
        </div>
      </section>

      <CTA />
    </>
  );
}
