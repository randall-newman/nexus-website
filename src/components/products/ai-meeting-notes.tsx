import chatbotHeroImg from '@/public/images/opai-img-138.jpg';
import PricingTeaser from '@/src/components/home/pricing-teaser';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import { CheckIcon } from '@/src/components/shared/icon';
import {
  Calendar,
  CheckCircle2,
  Clock,
  FileBarChart2,
  Globe,
  Lock,
  Mail,
  MessageSquare,
  Mic,
  MonitorPlay,
  Search,
  Shield,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

/* ─── Hero live meeting mock ──────────────────────────── */
function HeroMeetingMock() {
  const transcript = [
    { speaker: 'Maya', color: '#7458e8', time: '04:12', text: 'I think we need another round of testing before we commit to a launch date.' },
    { speaker: 'Jordan', color: '#078efb', time: '04:35', text: 'Agreed. I can schedule sessions for next week. Just send me the prototype link.' },
    { speaker: 'Alex', color: '#ee4d5d', time: '04:51', text: 'I will get the updated copy into the spec by Thursday so you have it before testing.' },
    { speaker: 'Maya', color: '#7458e8', time: '05:03', text: 'Perfect. Let us also flag the payment API dependency for the eng team today.' },
  ];

  const actions = [
    { owner: 'Jordan', task: 'Schedule user testing sessions', due: 'Fri' },
    { owner: 'Alex', task: 'Update onboarding spec with copy', due: 'Thu' },
    { owner: 'Maya', task: 'Flag payment API dep to eng', due: 'Today' },
  ];

  return (
    <RevealAnimation delay={0.5} asChild={false} className="mx-auto mt-14 w-full max-w-[880px]">
      <div className="rounded-2xl border border-white/10 bg-secondary p-1">
        {/* Window chrome */}
        <div className="flex items-center gap-x-1.5 px-3 py-2.5">
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="size-2.5 rounded-full bg-white/20" />
          <div className="ml-3 flex items-center gap-x-2">
            <span className="size-1.5 rounded-full bg-red-400 animate-pulse" />
            <span className="text-[11px] font-medium text-white/60">Weekly Product Sync · Live · 23:14</span>
          </div>
          <div className="ml-auto flex items-center gap-x-1.5">
            <div className="flex items-center gap-x-1 rounded-full bg-white/10 px-2 py-0.5">
              <Sparkles className="size-3 text-white/60" />
              <span className="text-[10px] text-white/60">Nexus AI is taking notes…</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px rounded-xl overflow-hidden md:grid-cols-2">
          {/* Transcript panel */}
          <div className="bg-[#0c1452]/80 p-4 space-y-3">
            <p className="text-[10px] font-medium uppercase tracking-widest text-white/30">Live Transcript</p>
            <div className="space-y-3">
              {transcript.map((line) => (
                <div key={line.time} className="space-y-0.5">
                  <div className="flex items-center gap-x-2">
                    <span className="text-[11px] font-semibold" style={{ color: line.color }}>{line.speaker}</span>
                    <span className="text-[10px] text-white/30">{line.time}</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-white/60">{line.text}</p>
                </div>
              ))}
              <div className="flex items-center gap-x-1.5">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="size-1.5 rounded-full bg-white/20 animate-bounce"
                    style={{ animationDelay: `${i * 150}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Summary + action items panel */}
          <div className="bg-[#060e3a]/80 p-4 space-y-4">
            <p className="text-[10px] font-medium uppercase tracking-widest text-white/30">AI Summary</p>
            <div className="space-y-2">
              {[
                'Agreed to run a second round of user testing before launch.',
                'Payment API migration flagged as a blocker for engineering.',
                'All copy updates needed in the spec by Thursday.',
              ].map((pt) => (
                <div key={pt} className="flex items-start gap-x-2">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#7458e8]" />
                  <p className="text-[11px] leading-relaxed text-white/60">{pt}</p>
                </div>
              ))}
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-medium uppercase tracking-widest text-white/30">Action Items</p>
              {actions.map((a) => (
                <div key={a.task} className="flex items-start gap-x-2 rounded-lg bg-white/5 px-2.5 py-1.5">
                  <CheckCircle2 className="size-3 mt-0.5 shrink-0 text-[#7458e8]" />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-semibold" style={{ color: '#ac87eb' }}>{a.owner}</span>
                    <p className="text-[10px] text-white/50 truncate">{a.task}</p>
                  </div>
                  <span className="shrink-0 text-[10px] text-white/30">Due {a.due}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RevealAnimation>
  );
}

/* ─── Transcript deep-dive mock ───────────────────────── */
function TranscriptMock() {
  const lines = [
    { speaker: 'Maya', color: '#7458e8', time: '04:12', text: 'I think we need another round of testing before we commit to a launch date. The last session surfaced three critical flows we missed.' },
    { speaker: 'Jordan', color: '#078efb', time: '04:35', text: 'Agreed. I can schedule sessions for next week if you send me the prototype link.' },
    { speaker: 'Alex', color: '#ee4d5d', time: '04:51', text: 'I will get the updated copy into the spec by Thursday so you have it before testing starts.' },
  ];

  return (
    <div className="rounded-2xl border border-stroke-3 bg-white p-5 space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-medium uppercase tracking-widest text-secondary/40">Transcript: Weekly Product Sync</p>
        <span className="rounded-full bg-background-13 border border-stroke-3 px-2.5 py-0.5 text-[11px] text-secondary/50">42 min · 4 speakers</span>
      </div>
      <div className="space-y-4">
        {lines.map((line) => (
          <div key={line.time} className="space-y-1">
            <div className="flex items-center gap-x-2">
              <span className="size-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0" style={{ background: line.color }}>
                {line.speaker[0]}
              </span>
              <span className="text-[12px] font-semibold" style={{ color: line.color }}>{line.speaker}</span>
              <span className="text-[11px] text-secondary/40">{line.time}</span>
            </div>
            <p className="pl-7 text-[12px] leading-relaxed text-secondary/70">{line.text}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-x-2 rounded-xl border border-stroke-3 bg-background-13 px-3 py-2">
        <Search className="size-3.5 text-secondary/30 shrink-0" />
        <p className="text-[12px] text-secondary/30">Search transcript…</p>
      </div>
    </div>
  );
}

/* ─── Summary & action items mock ────────────────────── */
function SummaryMock() {
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white p-5 space-y-5">
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-medium uppercase tracking-widest text-secondary/40">Meeting Notes</p>
        <div className="flex items-center gap-x-1.5 text-[11px] text-secondary/40">
          <Clock className="size-3" />
          <span>Ready in 30 s</span>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-[11px] font-medium text-secondary/50 uppercase tracking-wide">Summary</p>
        {[
          'Agreed to a second round of user testing before setting a launch date.',
          'Payment API migration identified as a dependency blocking engineering.',
          'All copy updates to land in the spec by Thursday.',
        ].map((pt) => (
          <div key={pt} className="flex items-start gap-x-2">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary-500" />
            <p className="text-[12px] leading-relaxed text-secondary/70">{pt}</p>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <p className="text-[11px] font-medium text-secondary/50 uppercase tracking-wide">Action Items</p>
        {[
          { owner: 'Jordan', task: 'Schedule user testing sessions for next week', due: 'Fri' },
          { owner: 'Alex', task: 'Update onboarding spec with finalised copy', due: 'Thu' },
          { owner: 'Maya', task: 'Flag payment API dependency to engineering lead', due: 'Today' },
        ].map((item) => (
          <div key={item.task} className="flex items-start justify-between gap-x-3 rounded-xl border border-stroke-3 bg-background-13 p-3">
            <div className="space-y-0.5 min-w-0">
              <p className="text-[11px] font-semibold text-primary-500">{item.owner}</p>
              <p className="text-[12px] text-secondary/70 leading-snug">{item.task}</p>
            </div>
            <span className="shrink-0 text-[11px] text-secondary/40">Due {item.due}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Search mock ──────────────────────────────────────── */
function SearchMock() {
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white p-5 space-y-4">
      <p className="text-[11px] font-medium uppercase tracking-widest text-secondary/40">Search your meetings</p>
      <div className="flex items-center gap-x-2 rounded-xl border border-stroke-3 px-3 py-2.5">
        <Search className="size-3.5 text-secondary/40 shrink-0" />
        <p className="text-[12px] text-secondary/40">pricing page decision</p>
      </div>
      <div className="space-y-2.5">
        {[
          {
            title: 'Product Roadmap Review, May 14',
            quote: '"…we agreed to keep the pricing page simple with three tiers and remove the enterprise tier from the public page."',
            speaker: 'Jordan',
            time: '18:22',
          },
          {
            title: 'Quarterly Planning, Apr 3',
            quote: '"…pricing page should reflect our repositioning, simpler and cleaner than what competitors show."',
            speaker: 'Maya',
            time: '31:05',
          },
        ].map((r) => (
          <div key={r.title} className="rounded-xl border border-stroke-3 bg-background-13 p-3 space-y-1">
            <p className="text-[11px] font-semibold text-primary-500">{r.title}</p>
            <p className="text-[12px] text-secondary/65 leading-relaxed">{r.quote}</p>
            <p className="text-[11px] text-secondary/40">
              {r.speaker} · {r.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Data ─────────────────────────────────────────────── */
const steps = [
  {
    icon: Calendar,
    title: 'Connect your calendar',
    body: 'Link Google Calendar or Outlook and Nexus AI automatically joins every scheduled call. No manual invite needed.',
  },
  {
    icon: Mic,
    title: 'Record and identify',
    body: 'Every word is transcribed in real time. Nexus AI identifies each speaker by voice and labels every line automatically.',
  },
  {
    icon: Zap,
    title: 'Notes before the call ends',
    body: 'A structured summary, action items with owners, a decision log, and the full timestamped transcript, ready when the call drops.',
  },
];

const transcriptFeatures = [
  { icon: Globe, text: '30+ languages with auto-detection' },
  { icon: Users, text: 'Speaker diarization: who said what' },
  { icon: Clock, text: 'Timestamps on every line' },
  { icon: Search, text: 'Full-text search across all past meetings' },
];

const summaryFeatures = [
  { icon: Sparkles, text: 'Three-bullet executive summary' },
  { icon: CheckCircle2, text: 'Action items with named owners and due dates' },
  { icon: MessageSquare, text: 'Decision log of every agreed next step' },
  { icon: Mail, text: 'Delivered to your inbox and in-app instantly' },
];

const searchFeatures = [
  { icon: Search, text: 'Ask in plain English: "What did we decide about pricing?"' },
  { icon: Clock, text: 'Pinpoints the exact timestamp and speaker' },
  { icon: MessageSquare, text: 'Filter by meeting, date, topic, or person' },
  { icon: Sparkles, text: 'Your entire history becomes a queryable knowledge base' },
];

const integrationLogos = [
  { label: 'Zoom', src: '/images/integrations/zoom.svg' },
  { label: 'Google Meet', src: '/images/integrations/google-meet.svg' },
  { label: 'Microsoft Teams', src: '/images/integrations/teams.svg' },
  { label: 'Webex', src: '/images/integrations/webex.svg' },
  { label: 'Slack', src: '/images/integrations/slack.svg' },
  { label: 'Google Calendar', src: '/images/integrations/google-calendar.svg' },
  { label: 'Outlook', src: '/images/integrations/outlook.svg' },
  { label: 'Notion', src: '/images/integrations/notion.svg' },
  { label: 'HubSpot', src: '/images/integrations/hubspot.svg' },
  { label: 'Jira', src: '/images/integrations/jira.svg' },
];

const capabilities = [
  {
    icon: FileBarChart2,
    label: 'Meeting Reports',
    body: 'A formatted post-meeting report covering summary, decisions, and action items, ready to share with stakeholders the moment the call ends.',
  },
  {
    icon: MessageSquare,
    label: 'Summary & Transcription',
    body: 'Full verbatim transcript with speaker labels and timestamps, plus a three-bullet executive summary. Always together, always searchable.',
  },
  {
    icon: Sparkles,
    label: 'Assistant',
    body: 'Ask anything about any past meeting in plain English. "What did Maya say about the budget?" Nexus AI cites the exact moment.',
  },
  {
    icon: Zap,
    label: 'Real-Time Notes',
    body: 'Notes appear as the conversation unfolds, not after. Follow along or catch up mid-call without losing a single detail.',
  },
  {
    icon: MonitorPlay,
    label: 'Playback',
    body: 'Replay any recorded meeting with synced transcript scrolling alongside. Jump to any moment by clicking a line in the transcript.',
  },
];

const privacyPoints = [
  'Encrypted at rest and in transit',
  'Recordings deleted from processing servers within 24 hours',
  'Your data is never used to train Nexus AI models',
  'SOC 2 Type II compliant',
];

const meetingPlans = [
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
    note: null as string | null,
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
    note: null as string | null,
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
      'CRM and project handoff',
    ],
    featured: false,
    note: 'Bundled in Business plan at no extra charge' as string | null,
  },
];

export const aiMeetingNotesFaqItems = [
  {
    value: 'faq-1',
    question: 'Which video platforms does Nexus AI Meeting Notes support?',
    answer:
      'Nexus AI joins calls on Zoom, Google Meet, Microsoft Teams, Webex, and Riverside. You can also upload an audio or video file directly to get the same structured output from recordings that were not captured live.',
  },
  {
    value: 'faq-2',
    question: 'Do I need to install anything for Nexus AI to join my calls?',
    answer:
      'No desktop install is required. Connect your Google Calendar or Outlook calendar from your Nexus AI account and a bot joins your scheduled meetings automatically. For manual sessions you can invite the bot via its meeting link.',
  },
  {
    value: 'faq-3',
    question: 'How accurate is the transcription?',
    answer:
      'Nexus AI transcription achieves over 90% word accuracy across most accents and speaking styles. Accuracy improves further when the audio quality is good. Technical terms and proper nouns are handled well in most domains.',
  },
  {
    value: 'faq-4',
    question: 'What languages does it support?',
    answer:
      'Meeting Notes currently supports over 30 languages including English, French, Spanish, German, Portuguese, Japanese, Korean, Mandarin, Arabic, and Hindi. Language is detected automatically with no configuration needed.',
  },
  {
    value: 'faq-5',
    question: 'Who can see my meeting notes?',
    answer:
      'Notes are private to you by default. You control sharing: you can send a link, export to PDF or Word, push to Notion, or share with specific workspace members. Other participants are not automatically notified or given access.',
  },
  {
    value: 'faq-6',
    question: 'Can I upload recordings of past meetings?',
    answer:
      'Yes. Upload any audio or video file from the Meeting Notes page and Nexus AI will transcribe it, identify speakers, and generate the same summary, action items, and decision log as a live session.',
  },
  {
    value: 'faq-7',
    question: 'Is Meeting Notes available on the free plan?',
    answer:
      'Meeting Notes is available to all Nexus AI users. Free plan users can record and transcribe meetings with core summaries and action items. Pro and Teams plans unlock unlimited meeting history, advanced search, CRM integrations, and custom note templates.',
  },
  {
    value: 'faq-8',
    question: 'How is this different from built-in transcription in Zoom or Teams?',
    answer:
      'Built-in transcriptions are raw text files. Nexus AI adds speaker identification, AI-generated summaries, action item extraction, a decision log, full-text search across all past meetings, and cross-platform consistency, so you get the same structured output whether the call was on Zoom, Google Meet, or uploaded from a local recording.',
  },
];

/* ─── Main component ───────────────────────────────────── */
const AiMeetingNotes = () => {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-[160px] pb-0">
        <figure className="absolute inset-0" aria-hidden="true">
          <Image
            src={chatbotHeroImg}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </figure>
        <div className="main-container relative z-10">
          <div className="space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>AI Meeting Notes</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h1
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'var(--color-gradient-logo)' }}
              >
                Your AI meeting assistant
              </h1>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="mx-auto max-w-[580px] text-secondary/70">
                Nexus AI joins every call, transcribes every word, identifies every speaker, and
                delivers structured notes including summary, action items and decisions, before the call ends.
              </p>
            </TextReveal>
            <RevealAnimation delay={0.4} className="flex flex-wrap justify-center gap-3">
              <Link href="/signup">
                <ButtonPrimary textClassName="text-nowrap">
                  Start free · No credit card
                </ButtonPrimary>
              </Link>
            </RevealAnimation>
          </div>

          <HeroMeetingMock />
        </div>
      </section>

      {/* ── Stats strip ─────────────────────────────────────── */}
      <section className="border-y border-stroke-3 py-8">
        <div className="main-container">
          <RevealAnimation
            delay={0.1}
            asChild={false}
            className="grid grid-cols-2 gap-y-6 md:grid-cols-4"
          >
            {[
              { value: '6', label: 'Video platforms' },
              { value: '30+', label: 'Languages' },
              { value: '<30s', label: 'Notes delivered' },
              { value: '0', label: 'Data used for training' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-y-1 text-center">
                <p className="text-heading-3 font-bold text-secondary">{stat.value}</p>
                <p className="text-tagline-2 text-secondary/50">{stat.label}</p>
              </div>
            ))}
          </RevealAnimation>
        </div>
      </section>

      {/* ── How it works ────────────────────────────────────── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-5 text-center mb-14">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>How it works</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>From calendar invite to structured notes in three steps</h2>
            </TextReveal>
          </div>
          <RevealAnimation
            delay={0.3}
            asChild={false}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="relative rounded-2xl border border-stroke-3 bg-white p-6 space-y-4"
                >
                  <div className="flex items-center gap-x-3">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-secondary text-white text-[13px] font-bold shrink-0">
                      {i + 1}
                    </span>
                    <Icon className="size-5 text-primary-500" />
                  </div>
                  <h3 className="text-heading-6">{step.title}</h3>
                  <p className="text-tagline-1 text-secondary/60 leading-relaxed">{step.body}</p>
                </div>
              );
            })}
          </RevealAnimation>
        </div>
      </section>

      {/* ── Deep dive: Transcription ─────────────────────────── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-10 lg:gap-x-14">
            <div className="col-span-12 space-y-6 lg:col-span-5">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Transcription</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Every word. Every speaker. Every second.</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-tagline-1 text-secondary/60 leading-relaxed">
                  Nexus AI captures the full conversation in real time, identifying who spoke,
                  when, and what they said with timestamps on every line. No more misattributed
                  notes or forgotten nuance.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false} className="space-y-3">
                {transcriptFeatures.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.text} className="flex items-center gap-x-3">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-background-13 border border-stroke-3">
                        <Icon className="size-4 text-primary-500" />
                      </div>
                      <p className="text-tagline-1 text-secondary/70">{f.text}</p>
                    </div>
                  );
                })}
              </RevealAnimation>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <RevealAnimation delay={0.3} asChild={false}>
                <TranscriptMock />
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ── Deep dive: Summary & Action Items ───────────────── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-10 lg:gap-x-14">
            <div className="col-span-12 lg:col-span-7 lg:order-1">
              <RevealAnimation delay={0.3} asChild={false}>
                <SummaryMock />
              </RevealAnimation>
            </div>
            <div className="col-span-12 space-y-6 lg:col-span-5 lg:order-2">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>AI Summary</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Structured notes without lifting a finger</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-tagline-1 text-secondary/60 leading-relaxed">
                  Nexus AI distils the conversation into a clean summary, pulls out every action
                  item with an owner, and logs every decision made. All delivered to your inbox
                  and in-app within seconds of the call ending.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false} className="space-y-3">
                {summaryFeatures.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.text} className="flex items-center gap-x-3">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-background-13 border border-stroke-3">
                        <Icon className="size-4 text-primary-500" />
                      </div>
                      <p className="text-tagline-1 text-secondary/70">{f.text}</p>
                    </div>
                  );
                })}
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ── Deep dive: Search ───────────────────────────────── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-10 lg:gap-x-14">
            <div className="col-span-12 space-y-6 lg:col-span-5">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Meeting Search</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Every meeting becomes searchable knowledge</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-tagline-1 text-secondary/60 leading-relaxed">
                  Ask in plain English: &ldquo;What did we decide about the pricing page last
                  month?&rdquo; Nexus AI finds the exact timestamp and the people who said
                  it. Your entire meeting history becomes a queryable knowledge base.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false} className="space-y-3">
                {searchFeatures.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.text} className="flex items-center gap-x-3">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-background-13 border border-stroke-3">
                        <Icon className="size-4 text-primary-500" />
                      </div>
                      <p className="text-tagline-1 text-secondary/70">{f.text}</p>
                    </div>
                  );
                })}
              </RevealAnimation>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <RevealAnimation delay={0.3} asChild={false}>
                <SearchMock />
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities ─────────────────────────────────────── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-5 text-center mb-12">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Capabilities</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Everything you need from every meeting</h2>
            </TextReveal>
          </div>
          <RevealAnimation
            delay={0.3}
            asChild={false}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.label}
                  className={`rounded-2xl border border-stroke-3 bg-white p-6 space-y-3 ${
                    i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-secondary">
                    <Icon className="size-5 text-white" />
                  </div>
                  <h3 className="text-heading-6">{cap.label}</h3>
                  <p className="text-tagline-1 text-secondary/60 leading-relaxed">{cap.body}</p>
                </div>
              );
            })}
          </RevealAnimation>
        </div>
      </section>

      {/* ── Integrations marquee ──────────────────────────────── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <style>{`
          @keyframes nexus-marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .nexus-marquee-track {
            display: flex;
            width: max-content;
            animation: nexus-marquee 28s linear infinite;
          }
          .nexus-marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="space-y-5 text-center mb-12">
          <RevealAnimation delay={0.1}>
            <BadgePrimary>Integrations</BadgePrimary>
          </RevealAnimation>
          <TextReveal delay={0.2}>
            <h2>Works with every tool you already use</h2>
          </TextReveal>
          <TextReveal delay={0.3}>
            <p className="text-background-14/60 mx-auto max-w-[520px] px-4">
              Connect your calendar and Nexus AI joins automatically. Push notes to Slack,
              Notion, or your CRM, wherever your team already works.
            </p>
          </TextReveal>
        </div>

        <div className="overflow-hidden">
          <div className="nexus-marquee-track">
            {[...integrationLogos, ...integrationLogos].map((int, i) => (
              <div
                key={`${int.label}-${i}`}
                className="mx-3 flex flex-col items-center gap-y-2"
              >
                <div className="flex size-16 items-center justify-center rounded-2xl border border-stroke-3 bg-white p-3 shadow-sm">
                  <Image
                    src={int.src}
                    alt={int.label}
                    width={40}
                    height={40}
                    unoptimized
                    className="size-full object-contain"
                  />
                </div>
                <span className="text-[11px] font-medium text-secondary/50 whitespace-nowrap">{int.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Privacy ──────────────────────────────────────────── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <RevealAnimation
            delay={0.1}
            asChild={false}
            className="rounded-2xl bg-secondary p-8 md:p-12"
          >
            <div className="flex flex-col items-center gap-y-6 text-center md:flex-row md:items-start md:text-left md:gap-x-12">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                <Shield className="size-7 text-white" />
              </div>
              <div className="space-y-4">
                <h2 className="text-white">Private by default</h2>
                <p className="text-white/60 max-w-[560px] leading-relaxed">
                  Your meeting recordings and transcripts are encrypted at rest and in transit.
                  Recordings are deleted from processing servers within 24 hours. Your data is
                  never used to train Nexus AI models.
                </p>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {privacyPoints.map((pt) => (
                    <div key={pt} className="flex items-center gap-x-2">
                      <Lock className="size-3.5 shrink-0 text-white/40" />
                      <p className="text-tagline-2 text-white/60">{pt}</p>
                    </div>
                  ))}
                </div>
                <Link href="/trust" className="inline-block text-tagline-2 text-white/50 underline hover:text-white/80 transition-colors">
                  Read our full security policy →
                </Link>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* ── Meeting Notes Pricing ────────────────────────────── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-5 text-center mb-12">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Pricing</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Simple pricing for Meeting Notes</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-background-14/60 mx-auto max-w-[480px]">
                Add Meeting Notes to any Nexus AI plan. Start free and upgrade when you need
                more minutes, search, or team features.
              </p>
            </TextReveal>
          </div>

          <div className="grid grid-cols-12 gap-y-5 md:gap-5">
            {meetingPlans.map((plan, index) => (
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
            className="mt-8 text-center"
          >
            <Link
              href="/pricing/meeting-notes"
              className="text-tagline-2 text-secondary/60 underline hover:text-secondary transition-colors"
            >
              See full Meeting Notes plan details →
            </Link>
          </RevealAnimation>
        </div>
      </section>

      {/* ── Pricing Teaser ───────────────────────────────────── */}
      <PricingTeaser />
    </>
  );
};

export default AiMeetingNotes;
