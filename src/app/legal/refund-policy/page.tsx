import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'Refund Policy | Nexus AI',
    'Monthly plans can cancel anytime. Annual plans receive a pro-rata refund within 30 days of purchase. Full refund policy for Nexus AI.',
    '/legal/refund-policy'
  ),
};

const planRows = [
  {
    plan: 'Free',
    cancellation: 'Cancel anytime',
    refund: 'Not applicable',
    notes: 'No charge, no refund needed.',
  },
  {
    plan: 'Pro Monthly',
    cancellation: 'Cancel anytime, effective end of billing period',
    refund: 'No refund for the current period',
    notes: 'You retain access until the end of the period you paid for.',
  },
  {
    plan: 'Pro Annual',
    cancellation: 'Cancel anytime',
    refund: 'Pro-rata refund within 30 days of payment',
    notes: 'After 30 days, no refund is issued but you keep access until the annual period ends.',
  },
  {
    plan: 'Team Monthly',
    cancellation: 'Cancel anytime, effective end of billing period',
    refund: 'No refund for the current period',
    notes: 'Seat removals take effect at the next billing cycle.',
  },
  {
    plan: 'Team Annual',
    cancellation: 'Cancel anytime',
    refund: 'Pro-rata refund within 30 days of payment',
    notes: 'Seats removed during the year are not refunded unless within the 30-day window.',
  },
  {
    plan: 'Enterprise',
    cancellation: 'Per contract terms',
    refund: 'Per contract terms',
    notes: 'Contact your account manager for details.',
  },
];

const faqItems = [
  {
    q: 'When does my annual subscription start?',
    a: 'Your annual subscription starts on the date you complete payment. The 30-day refund window runs from that date, not from when you first start using a feature.',
  },
  {
    q: 'How do I request a refund?',
    a: 'Email billing@mynexusai.com from the address associated with your account. Include your account email and a brief description. We process eligible refunds within 5-10 business days.',
  },
  {
    q: 'What happens to my data if I cancel?',
    a: 'Your data remains accessible until the end of your paid period. After that, documents and files are retained for 30 days in a read-only state, then permanently deleted. You can export everything before cancelling.',
  },
  {
    q: 'I was charged in error. What do I do?',
    a: 'Contact billing@mynexusai.com within 14 days. Erroneous charges are refunded in full, regardless of plan type or timing.',
  },
  {
    q: 'Can I switch from annual to monthly and get a refund for the difference?',
    a: 'Yes, if you are within the 30-day refund window. We will refund the unused annual amount and charge the monthly rate going forward. Contact support to arrange this.',
  },
  {
    q: 'What currency are refunds issued in?',
    a: 'Refunds are issued in the same currency as the original charge and returned to the original payment method. Processing times depend on your bank or card issuer.',
  },
];

export default function RefundPolicyPage() {
  return (
    <>
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Refund Policy</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h1>Fair, clear refund terms</h1>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-background-14/60 mx-auto max-w-[560px]">
                Monthly plans cancel anytime. Annual plans get a pro-rata refund within 30 days.
                No complicated conditions.
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
          <RevealAnimation delay={0.1}>
            <h2 className="text-heading-4 mb-6">Refund summary by plan</h2>
          </RevealAnimation>
          <RevealAnimation
            delay={0.2}
            asChild={false}
            className="border-stroke-3 overflow-hidden rounded-2xl border bg-white"
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-stroke-3 border-b bg-background-3">
                    <th className="text-tagline-3 text-secondary/50 px-5 py-4 text-left font-medium">Plan</th>
                    <th className="text-tagline-3 text-secondary/50 px-5 py-4 text-left font-medium">Cancellation</th>
                    <th className="text-tagline-3 text-secondary/50 px-5 py-4 text-left font-medium">Refund</th>
                    <th className="text-tagline-3 text-secondary/50 px-5 py-4 text-left font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {planRows.map((row, index) => (
                    <tr
                      key={row.plan}
                      className={`border-stroke-3 border-b last:border-b-0 ${index % 2 === 1 ? 'bg-background-3/50' : ''}`}
                    >
                      <td className="text-tagline-2 text-secondary font-medium px-5 py-4">{row.plan}</td>
                      <td className="text-tagline-2 text-secondary/70 px-5 py-4">{row.cancellation}</td>
                      <td className="text-tagline-2 text-secondary/70 px-5 py-4">{row.refund}</td>
                      <td className="text-tagline-2 text-secondary/50 px-5 py-4">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="mx-auto max-w-[760px] space-y-5">
            <RevealAnimation delay={0.1}>
              <h2 className="text-heading-4">Frequently asked questions</h2>
            </RevealAnimation>
            {faqItems.map((item, index) => (
              <RevealAnimation
                key={item.q}
                delay={0.1 * (index + 1)}
                asChild={false}
                className="border-stroke-3 rounded-2xl border bg-white p-5 md:p-6 space-y-2"
              >
                <p className="text-tagline-1 text-secondary font-semibold">{item.q}</p>
                <p className="text-tagline-2 text-secondary/70">{item.a}</p>
              </RevealAnimation>
            ))}
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
            <h2>Need help with billing?</h2>
            <p className="text-tagline-2 text-secondary/60">
              Contact us at{' '}
              <a href="mailto:billing@mynexusai.com" className="text-secondary underline">
                billing@mynexusai.com
              </a>{' '}
              and we will get back to you within one business day.
            </p>
            <Link href="/pricing" className="text-secondary text-tagline-2 underline">
              View all plans and pricing
            </Link>
          </RevealAnimation>
        </div>
      </section>

      <CTA />
    </>
  );
}
