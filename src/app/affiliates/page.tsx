import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { CheckIcon } from '@/src/components/shared/icon';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary } from '@/src/components/shared/ui/button';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import {
  Accordion,
  AccordionAction,
  AccordionContent,
  AccordionIcon,
  AccordionItem,
  AccordionTitle,
} from '@/src/components/shared/ui/accordion';
import { DollarSign, Link2, Share2, TrendingUp, Users, Zap } from 'lucide-react';
import { ButtonWhite } from '@/src/components/shared/ui/button';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  ...generateMetadata(
    'Affiliate Program | Nexus AI',
    'Join the Nexus AI affiliate program and earn 20 to 35% recurring commission on every referral. Get paid monthly with no earnings cap.',
    '/affiliates'
  ),
};

const steps = [
  {
    number: '01',
    icon: Users,
    title: 'Apply and get your link',
    description:
      'Fill in the application below. Once approved, you get a unique tracking link and access to marketing materials.',
  },
  {
    number: '02',
    icon: Share2,
    title: 'Share with your audience',
    description:
      'Post on social media, write a blog, record a video, or simply recommend Nexus AI to your network. Use your link anywhere.',
  },
  {
    number: '03',
    icon: DollarSign,
    title: 'Earn recurring commissions',
    description:
      'Earn 20 to 35% of every sale your referrals make, for as long as they stay subscribed. No cap on earnings.',
  },
];

const benefits = [
  '20 to 35% recurring commission on all referrals',
  'No cap on how much you can earn',
  '30-day referral cookie window',
  'Monthly payouts, every last Friday of the month',
  'Dedicated affiliate dashboard to track clicks and earnings',
  'Marketing materials and product updates provided',
  'Priority support from our affiliate team',
  'Works on all paid plans, including Teams and Business',
];

const faqItems = [
  {
    value: 'how-much',
    question: 'How much can I earn?',
    answer:
      'You earn between 20 and 35% of every sale made through your referral link. The commission is recurring, meaning you keep earning as long as your referrals stay subscribed. There is no cap on earnings.',
  },
  {
    value: 'when-paid',
    question: 'When do I get paid?',
    answer:
      'Commissions are tracked and paid to all affiliates on the last Friday of every month, in USD. Payments are made via your preferred payout method once a minimum threshold is reached.',
  },
  {
    value: 'cookie',
    question: 'How long does the referral window last?',
    answer:
      'Your referral link has a 30-day cookie window. If someone clicks your link and signs up within 30 days, the sale is attributed to you.',
  },
  {
    value: 'self-referral',
    question: 'Can I refer myself?',
    answer:
      'No. Self-referrals are not permitted and will result in account suspension. The program is designed for genuine promotion to new users.',
  },
  {
    value: 'who-can-join',
    question: 'Who can join the affiliate program?',
    answer:
      'Anyone with an audience or network can apply: content creators, educators, bloggers, developers, marketers and consultants. We review all applications manually.',
  },
];

export default function AffiliatesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary overflow-hidden pt-[160px] pb-20 md:pb-28">
        <div className="main-container">
          <div className="mx-auto max-w-[760px] space-y-6 text-center">
            <RevealAnimation delay={0.1}>
              <span
                className="inline-flex items-center gap-x-2 rounded-full px-4 py-1.5 text-[13px] font-semibold text-white"
                style={{ background: 'rgba(255,255,255,0.12)' }}
              >
                <TrendingUp className="size-3.5" />
                Affiliate Program
              </span>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h1 className="text-white leading-[1.1]">
                Get paid to{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                >
                  share Nexus AI
                </span>
              </h1>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="mx-auto max-w-[560px] text-lg text-white/60 leading-relaxed">
                Earn 20 to 35% recurring commission on every referral you send our way. No cap.
                Monthly payouts. Built for creators, educators and builders.
              </p>
            </TextReveal>
            <RevealAnimation delay={0.4} asChild={false} className="flex flex-wrap items-center justify-center gap-3">
              <a href="https://nexusai.getrewardful.com/signup">
                <ButtonPrimary className="md:w-fit!" textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!">
                  Join the program
                </ButtonPrimary>
              </a>
              <Link href="#how-it-works">
                <span className="inline-flex items-center gap-x-2 rounded-full border border-white/20 px-6 py-3 text-[14px] font-medium text-white/75 transition-colors hover:bg-white/10">
                  How it works
                </span>
              </Link>
            </RevealAnimation>

            <RevealAnimation delay={0.5} asChild={false} className="grid grid-cols-3 gap-4 max-w-[560px] mx-auto pt-4">
              {[
                { value: '20–35%', label: 'Recurring commission' },
                { value: 'No cap', label: 'On your earnings' },
                { value: '30 days', label: 'Cookie window' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center">
                  <p className="text-[1.5rem] font-bold text-white leading-none">{stat.value}</p>
                  <p className="mt-1.5 text-[12px] text-white/50">{stat.label}</p>
                </div>
              ))}
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-10 lg:space-y-14">
            <div className="space-y-3 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>How it works</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Three steps to start earning</h2>
              </TextReveal>
            </div>

            <div className="grid grid-cols-12 gap-y-6 md:gap-6">
              {steps.map((step, index) => (
                <RevealAnimation
                  key={step.number}
                  delay={0.1 * (index + 1)}
                  asChild={false}
                  className="col-span-12 md:col-span-4 border-stroke-3 rounded-2xl border bg-white p-8 space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-tagline-3 text-secondary/40 font-medium">{step.number}</span>
                    <div className="bg-primary-50 flex size-10 items-center justify-center rounded-xl">
                      <step.icon className="text-primary-500 size-5" />
                    </div>
                  </div>
                  <h3 className="text-heading-6 text-secondary">{step.title}</h3>
                  <p className="text-tagline-2 text-secondary/60">{step.description}</p>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-10 lg:gap-x-14">
            <div className="col-span-12 space-y-6 lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Why join</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Built for serious promoters</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-tagline-1 text-secondary/60">
                  We built this program for people who genuinely use and love Nexus AI, and want to share it with their audience while earning real income.
                </p>
              </TextReveal>
              <RevealAnimation delay={0.4}>
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="border-stroke-3 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border p-0.5">
                        <CheckIcon className="stroke-secondary size-3" />
                      </span>
                      <span className="text-tagline-2 text-secondary/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </RevealAnimation>
            </div>

            <RevealAnimation
              delay={0.3}
              asChild={false}
              className="border-stroke-3 col-span-12 rounded-2xl border bg-white p-8 lg:col-span-6 space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#f65c9c]/10">
                  <TrendingUp className="text-[#f65c9c] size-6" />
                </div>
                <div>
                  <p className="text-heading-6 text-secondary font-semibold">Example earnings</p>
                  <p className="text-tagline-3 text-secondary/50">At 25% commission</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { refs: '10 Premium subscribers', monthly: '$50', annual: '$600' },
                  { refs: '50 Premium subscribers', monthly: '$250', annual: '$3,000' },
                  { refs: '100 Premium subscribers', monthly: '$500', annual: '$6,000' },
                  { refs: '20 Ultimate subscribers', monthly: '$500', annual: '$6,000' },
                ].map((row) => (
                  <div key={row.refs} className="flex items-center justify-between rounded-xl bg-[#f4f8fc] px-4 py-3">
                    <span className="text-tagline-2 text-secondary/80">{row.refs}</span>
                    <div className="text-right">
                      <span className="text-tagline-2 text-secondary font-semibold">{row.monthly}/mo</span>
                      <span className="text-tagline-3 text-secondary/40 ml-1.5">{row.annual}/yr</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-tagline-3 text-secondary/40">Estimates based on monthly Premium plan at $20/month. Actual rates vary by plan and billing cycle.</p>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <RevealAnimation
            delay={0.1}
            asChild={false}
            className="rounded-2xl p-10 md:p-16 text-center text-white"
            style={{ background: 'linear-gradient(135deg, #000c60 0%, #1c2570 100%)' }}
          >
            <div className="flex justify-center mb-6">
              <div className="flex size-16 items-center justify-center rounded-2xl bg-white/10">
                <Zap className="size-8 text-[#f65c9c]" />
              </div>
            </div>
            <h2 className="text-white mx-auto max-w-[560px]">Ready to start earning?</h2>
            <p className="mt-4 text-white/70 mx-auto max-w-[480px]">
              Apply today and get your unique link within 24 to 48 hours. We review every application personally.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="https://nexusai.getrewardful.com/signup">
                <ButtonPrimary className="md:w-fit!" textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!">
                  Apply now
                </ButtonPrimary>
              </a>
              <Link href="/contact" className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm text-white/80 hover:bg-white/10 transition-colors">
                <Link2 className="size-4" />
                Contact us
              </Link>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* FAQ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
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
                    <BadgePrimary>Affiliate FAQ</BadgePrimary>
                  </RevealAnimation>
                  <div className="space-y-3">
                    <TextReveal delay={0.2}>
                      <h2 className="text-secondary">Frequently asked questions</h2>
                    </TextReveal>
                    <TextReveal delay={0.3}>
                      <p className="text-background-14/60 mx-auto max-w-[420px] lg:mx-0">
                        Everything you need to know about commissions, payouts and how the affiliate
                        program works. Still have a question? We are happy to help.
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
              <Accordion defaultOpen={faqItems[0].value} className="space-y-4" aria-label="Affiliate FAQ">
                {faqItems.map((item) => (
                  <AccordionItem key={item.value} value={item.value} className="group rounded-[20px] bg-white px-4 md:px-6">
                    <AccordionAction showIcon={false} className="flex w-full cursor-pointer items-center justify-between gap-x-4 pt-6 transition-all duration-400 ease-in-out group-data-[state=closed]:pb-6 group-data-[state=open]:pb-4 md:pt-8 md:group-data-[state=closed]:pb-8">
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

      <CTA />
    </>
  );
}
