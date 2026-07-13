import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { CheckIcon } from '@/src/components/shared/icon';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary } from '@/src/components/shared/ui/button';
import Link from 'next/link';

const integrations = ['Zoom', 'Google Meet', 'Microsoft Teams', 'Webex', 'Riverside', 'Local audio upload'];

const featureList = [
  'Automatic speaker identification and labeling',
  'Full verbatim transcript with timestamps',
  'AI-generated summary in three bullet points',
  'Action items extracted and assigned to named speakers',
  'Decision log capturing every agreed next step',
  'Searchable archive of all past meeting notes',
  'Share via link or export to PDF, Word, or Notion',
];

const AiMeetingNotes = () => {
  return (
    <>
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>AI Meeting Notes</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h1>Never take a note in a meeting again</h1>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-background-14/60 mx-auto max-w-[560px]">
                Nexus AI joins your call, transcribes every word, identifies who said what, and
                delivers a clean summary with action items by the time the call ends.
              </p>
            </TextReveal>
            <RevealAnimation delay={0.4} className="flex justify-center">
              <Link href="/signup">
                <ButtonPrimary
                  className="mx-auto md:w-fit!"
                  textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
                >
                  Try it on your next call
                </ButtonPrimary>
              </Link>
            </RevealAnimation>
          </div>

          {/* Meeting notes demo */}
          <RevealAnimation
            delay={0.5}
            asChild={false}
            className="border-stroke-3 mx-auto mt-14 w-full max-w-[760px] space-y-5 rounded-2xl border bg-white p-8"
          >
            <div className="flex items-center justify-between">
              <p className="text-tagline-3 text-secondary/50 font-medium uppercase tracking-wide">
                Meeting notes: Weekly Product Sync
              </p>
              <p className="text-tagline-3 text-secondary/40">42 min &bull; 4 participants</p>
            </div>

            <div className="space-y-3">
              <p className="text-tagline-3 text-secondary/50 font-medium">Summary</p>
              <ul className="space-y-2">
                {[
                  'Agreed to ship the new onboarding flow by end of quarter.',
                  'Maya to run a second round of user testing before the launch date.',
                  'Engineering flagged a dependency on the payment API migration.',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-x-2">
                    <span className="mt-1 size-2 shrink-0 rounded-full bg-primary-500" />
                    <span className="text-tagline-2 text-secondary/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-tagline-3 text-secondary/50 font-medium">Action items</p>
              <div className="space-y-2">
                {[
                  { owner: 'Maya', task: 'Schedule user testing sessions for next week', due: 'Fri' },
                  { owner: 'Jordan', task: 'Share payment API migration timeline with team', due: 'Mon' },
                  { owner: 'Alex', task: 'Update onboarding spec with finalised copy', due: 'Thu' },
                ].map((item) => (
                  <div
                    key={item.task}
                    className="border-stroke-3 flex items-start justify-between gap-x-3 rounded-lg border p-3"
                  >
                    <div className="space-y-0.5">
                      <p className="text-tagline-3 text-primary-500 font-medium">{item.owner}</p>
                      <p className="text-tagline-2 text-secondary/80">{item.task}</p>
                    </div>
                    <span className="text-tagline-3 text-secondary/40 shrink-0">Due {item.due}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-tagline-3 text-secondary/50 font-medium">Transcript excerpt</p>
              <div className="border-stroke-3 rounded-xl border p-4 space-y-3">
                {[
                  { speaker: 'Maya', time: '04:12', text: 'I think we need another round of testing before we commit to a launch date. The last session surfaced three critical flows we missed.' },
                  { speaker: 'Jordan', time: '04:35', text: 'Agreed. I can schedule sessions for next week if you send me the prototype link.' },
                  { speaker: 'Alex', time: '04:51', text: 'I will get the updated copy into the spec by Thursday so you have it before testing.' },
                ].map((line) => (
                  <div key={line.time} className="space-y-0.5">
                    <div className="flex items-center gap-x-2">
                      <span className="text-tagline-3 text-primary-500 font-medium">{line.speaker}</span>
                      <span className="text-tagline-3 text-secondary/40">{line.time}</span>
                    </div>
                    <p className="text-tagline-2 text-secondary/70">{line.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-12 gap-y-10 lg:gap-x-14">
            <div className="col-span-12 space-y-5 lg:col-span-5">
              <TextReveal delay={0.1}>
                <h2>What every set of notes includes</h2>
              </TextReveal>
              <RevealAnimation delay={0.2}>
                <ul className="space-y-3">
                  {featureList.map((item) => (
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
            <div className="col-span-12 lg:col-span-7">
              <RevealAnimation
                delay={0.3}
                asChild={false}
                className="border-stroke-3 rounded-2xl border bg-white p-6 space-y-5"
              >
                <h3 className="text-heading-6">Works with every platform you already use</h3>
                <div className="flex flex-wrap gap-3">
                  {integrations.map((integration) => (
                    <span
                      key={integration}
                      className="border-stroke-3 text-tagline-2 text-secondary rounded-full border bg-background-3 px-4 py-2"
                    >
                      {integration}
                    </span>
                  ))}
                </div>
                <p className="text-tagline-2 text-secondary/60">
                  Connect your calendar and Nexus AI automatically joins scheduled calls. Or
                  upload an audio recording after the fact and get the same structured output.
                </p>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-12 gap-y-10 lg:gap-x-14">
            <div className="col-span-12 space-y-4 lg:col-span-6">
              <TextReveal delay={0.1}>
                <h2>Searchable across every meeting you have ever had</h2>
              </TextReveal>
              <RevealAnimation delay={0.2}>
                <p className="text-tagline-1 text-secondary/60">
                  Ask &ldquo;What did we decide about the pricing page last month?&rdquo; and Nexus
                  AI pulls the exact timestamp and the speakers involved. Your entire meeting
                  history becomes a queryable knowledge base.
                </p>
              </RevealAnimation>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation
                delay={0.3}
                asChild={false}
                className="border-stroke-3 rounded-2xl border bg-white p-6 space-y-4"
              >
                <p className="text-tagline-3 text-secondary/50">Search your meetings</p>
                <div className="border-stroke-3 flex items-center gap-x-3 rounded-xl border px-4 py-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-secondary/40 shrink-0">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                  </svg>
                  <p className="text-tagline-2 text-secondary/40">pricing page decision</p>
                </div>
                <div className="space-y-2">
                  <div className="border-stroke-3 rounded-xl border p-3 space-y-1">
                    <p className="text-tagline-3 text-primary-500 font-medium">Product Roadmap Review, May 14</p>
                    <p className="text-tagline-2 text-secondary/70">
                      &ldquo;...we agreed to keep the pricing page simple with three tiers and
                      remove the enterprise tier from the public page.&rdquo;
                    </p>
                    <p className="text-tagline-3 text-secondary/40">Jordan &bull; 18:22</p>
                  </div>
                </div>
              </RevealAnimation>
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
            <h2>Private by default</h2>
            <p className="text-tagline-2 text-secondary/60">
              Meeting recordings and transcripts are encrypted at rest and in transit. Recordings
              are deleted from processing servers within 24 hours. Your data is never used to
              train Nexus AI models. See our{' '}
              <Link href="/trust" className="text-secondary underline">
                full security policy
              </Link>
              .
            </p>
          </RevealAnimation>
        </div>
      </section>
    </>
  );
};

export default AiMeetingNotes;
