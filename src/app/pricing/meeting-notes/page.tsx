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
    'AI Meeting Notes Pricing — Starter, Pro and Business | Nexus AI',
    'Choose a Meeting Notes plan that fits your team. Automatic transcription, AI summaries, action items and speaker identification — from $12/month.',
    '/pricing/meeting-notes'
  ),
};

const meetingNotes = [
  {
    name: 'Starter',
    price: '$12',
    period: '/month',
    rows: [
      '300 recording minutes/month',
      '20 meetings/month',
      'AI summaries and transcripts',
      'Action items',
      'Google Calendar',
    ],
    featured: false,
    note: null,
  },
  {
    name: 'Pro',
    price: '$25',
    period: '/month',
    rows: [
      '1,200 recording minutes/month',
      'Unlimited meetings',
      'AI summaries and transcripts',
      'Action items',
      'Speaker identification',
      'Google and Outlook calendar',
      'Search across meetings',
      'Video highlights',
    ],
    featured: true,
    note: null,
  },
  {
    name: 'Business',
    price: '$50',
    period: '/seat/month',
    rows: [
      'Team credit pool',
      'Unlimited meetings',
      'AI summaries and transcripts',
      'Action items',
      'Speaker identification',
      'All major calendars',
      'Team-wide search',
      'Shared workspace',
      'Team insights',
      'Full video playback',
      'CRM and project handoff',
    ],
    featured: false,
    note: 'Bundled in Business plan at no extra charge',
  },
];

export default function MeetingNotesPricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Pricing', path: '/pricing' },
          { name: 'Meeting Notes', path: '/pricing/meeting-notes' },
        ])}
      />

      <section className="pt-32 pb-10 md:pt-40">
        <div className="main-container text-center space-y-5">
          <RevealAnimation delay={0.1}>
            <BadgePrimary>Meeting Notes</BadgePrimary>
          </RevealAnimation>
          <TextReveal delay={0.2}>
            <h1>Simple pricing for AI meeting notes</h1>
          </TextReveal>
          <TextReveal delay={0.3}>
            <p className="text-tagline-1 text-secondary/60 mx-auto max-w-[520px]">
              Add Meeting Notes to any Nexus AI plan. Automatic transcription, AI summaries,
              speaker identification and action items — starting at $12/month.
            </p>
          </TextReveal>
        </div>
      </section>

      <section className="pt-10 md:pt-14">
        <div className="main-container">
          <div className="grid grid-cols-12 gap-y-5 md:gap-5">
            {meetingNotes.map((plan, index) => (
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
                  <Link href="/upgrade/meeting-notes" className="block">
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
              or top up with extra credits on the{' '}
              <Link href="/pricing/add-ons" className="text-secondary font-medium underline">
                Credits page
              </Link>
              .
            </p>
          </RevealAnimation>
        </div>
      </section>

      <CTA />
    </>
  );
}
