import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd } from '@/src/utils/structured-data';
import { JsonLd } from '@/src/components/shared/json-ld';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import CTA from '@/src/components/shared/cta';
import { CheckIcon } from '@/src/components/shared/icon';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'AI Chatbot Pricing — Starter, Growth and Business | Nexus AI',
    'Deploy an AI chatbot on your website or app. Choose a plan with the right conversation volume, branding options and integrations — from $19/month.',
    '/pricing/chatbot'
  ),
};

const chatbotPlans = [
  {
    name: 'Starter',
    price: '$19',
    period: '/month',
    description: 'Launch your first AI chatbot with everything you need to get started.',
    rows: [
      '2,000 conversations/month',
      '3 chatbot projects',
      'Nexus AI knowledge base',
      'Basic lead capture',
      'Embed on any website',
      'Email support',
    ],
    featured: false,
    note: null,
    href: '/upgrade/chatbot-starter',
  },
  {
    name: 'Growth',
    price: '$49',
    period: '/month',
    description: 'More conversations, full branding control and deeper integrations.',
    rows: [
      '20,000 conversations/month',
      '10 chatbot projects',
      'Custom branding & avatar',
      'Advanced lead capture & CRM sync',
      'Conversation analytics',
      'Remove Nexus AI branding',
      'Zapier & webhook integrations',
      'Priority support',
    ],
    featured: true,
    note: null,
    href: '/upgrade/chatbot-growth',
  },
  {
    name: 'Business',
    price: '$99',
    period: '/month',
    description: 'Unlimited chatbots, white-label options and team management.',
    rows: [
      'Unlimited conversations',
      'Unlimited chatbot projects',
      'White-label deployment',
      'Team workspace & roles',
      'Full API access',
      'SSO (Okta, Google, Azure AD)',
      'Advanced analytics & exports',
      'SLA & dedicated support',
    ],
    featured: false,
    note: 'Bundled in Enterprise plan',
    href: '/upgrade/chatbot-business',
  },
];

export default function ChatbotPricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Pricing', path: '/pricing' },
          { name: 'Chatbot', path: '/pricing/chatbot' },
        ])}
      />

      <section className="pt-32 pb-10 md:pt-40">
        <div className="main-container text-center space-y-5">
          <RevealAnimation delay={0.1}>
            <BadgePrimary>AI Chatbot</BadgePrimary>
          </RevealAnimation>
          <TextReveal delay={0.2}>
            <h1>Simple pricing for AI chatbots</h1>
          </TextReveal>
          <TextReveal delay={0.3}>
            <p className="text-tagline-1 text-secondary/60 mx-auto max-w-[520px]">
              Deploy an AI chatbot on your website, app or product. Powered by the
              same AI that drives Nexus AI — starting at $19/month.
            </p>
          </TextReveal>
        </div>
      </section>

      <section className="pt-10 md:pt-14">
        <div className="main-container">
          <div className="grid grid-cols-12 gap-y-5 md:gap-5">
            {chatbotPlans.map((plan, index) => (
              <RevealAnimation
                key={plan.name}
                delay={0.1 * (index + 1)}
                className="col-span-12 md:col-span-4"
              >
                <div
                  className={`border-stroke-3 flex h-full flex-col gap-y-6 rounded-2xl border bg-white p-8 ${
                    plan.featured ? 'border-secondary' : ''
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-heading-6">{plan.name}</h3>
                      {plan.featured && <BadgePrimary>Most popular</BadgePrimary>}
                    </div>
                    <p className="text-tagline-2 text-secondary/60">{plan.description}</p>
                    <div className="flex items-baseline gap-x-1">
                      <p className="text-heading-4 text-secondary font-bold">{plan.price}</p>
                      <p className="text-tagline-2 text-secondary/50">{plan.period}</p>
                    </div>
                    {plan.note && (
                      <p className="text-tagline-3 bg-green-50 text-green-700 rounded-lg px-3 py-1.5">
                        {plan.note}
                      </p>
                    )}
                  </div>
                  <ul className="flex-1 space-y-2">
                    {plan.rows.map((r) => (
                      <li key={r} className="flex items-center gap-2">
                        <span className="border-stroke-3 flex size-5 shrink-0 items-center justify-center rounded-full border p-0.5">
                          <CheckIcon className="stroke-secondary size-3" />
                        </span>
                        <span className="text-tagline-2 text-secondary/80">{r}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={plan.href} className="block">
                    {plan.featured ? (
                      <ButtonPrimary
                        className="w-full"
                        textClassName="text-center flex-1 px-0! pr-8!"
                      >
                        Get {plan.name}
                      </ButtonPrimary>
                    ) : (
                      <ButtonWhite
                        className="w-full"
                        textClassName="text-center flex-1 px-0! pr-8!"
                      >
                        Get {plan.name}
                      </ButtonWhite>
                    )}
                  </Link>
                </div>
              </RevealAnimation>
            ))}
          </div>

          <RevealAnimation
            delay={0.5}
            asChild={false}
            className="mt-10 rounded-2xl border border-stroke-3 bg-white p-6 text-center space-y-2"
          >
            <p className="text-tagline-1 text-secondary/70">
              Need the full Nexus AI plan?{' '}
              <Link href="/pricing" className="text-secondary font-medium underline">
                Compare all plans
              </Link>{' '}
              or explore{' '}
              <Link href="/products/chatbot" className="text-secondary font-medium underline">
                Chatbot features
              </Link>
              .
            </p>
          </RevealAnimation>
        </div>
      </section>

      {/* ── Feature comparison ── */}
      <section className="pt-20 md:pt-25">
        <div className="main-container">
          <RevealAnimation delay={0.1}>
            <h2 className="text-secondary text-center mb-10">Everything included</h2>
          </RevealAnimation>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Instant setup',
                body: 'Create and embed your chatbot in minutes. No coding required — paste a snippet or use our WordPress plugin.',
              },
              {
                title: 'Your knowledge base',
                body: 'Upload PDFs, URLs, text files or connect a website. Your chatbot answers only from the content you provide.',
              },
              {
                title: 'Custom branding',
                body: 'Set your chatbot\'s name, avatar, colours and welcome message. Match your product or website perfectly.',
              },
              {
                title: 'Lead capture',
                body: 'Collect visitor names, emails and enquiries automatically. Sync leads to your CRM or receive email notifications.',
              },
              {
                title: 'Conversation analytics',
                body: 'See what your visitors are asking. Track conversation volume, resolution rates and unanswered questions.',
              },
              {
                title: 'Enterprise-grade security',
                body: 'Data encrypted in transit and at rest. SOC 2 Type II certified. Visitor data never used to train models.',
              },
            ].map((f, i) => (
              <RevealAnimation
                key={f.title}
                delay={0.1 * (i + 1)}
                asChild={false}
                className="rounded-2xl border border-stroke-3 bg-white p-6 space-y-2"
              >
                <h3 className="text-heading-6 text-secondary">{f.title}</h3>
                <p className="text-tagline-2 text-secondary/60">{f.body}</p>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
