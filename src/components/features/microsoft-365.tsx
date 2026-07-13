import PricingTeaser from '@/src/components/home/pricing-teaser';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import {
  CheckCircle,
  Download,
  Mic,
  Plug,
  RefreshCw,
  Shield,
  Sparkles,
  Wand2,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

/* ─── App icon component ─────────────────────────────── */
function AppIcon({ src, alt, size = 40 }: { src: string; alt: string; size?: number }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      unoptimized
      className="shrink-0"
    />
  );
}

/* ─── Hero Word + sidebar mock ──────────────────────────── */
function HeroWordMock() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden text-[12px]">
      <div className="flex items-center gap-x-1.5 border-b border-white/10 px-4 py-3 bg-white/5">
        <span className="size-2.5 rounded-full bg-red-500/70" />
        <span className="size-2.5 rounded-full bg-yellow-500/70" />
        <span className="size-2.5 rounded-full bg-green-500/70" />
        <span className="ml-2 flex items-center gap-x-1.5">
          <AppIcon src="/images/microsoft/word.svg" alt="Word" size={14} />
          <span className="text-[11px] text-white/30">Microsoft Word</span>
        </span>
        <span className="ml-auto text-[10px] text-white/20">Nexus AI</span>
      </div>
      <div className="flex" style={{ minHeight: 320 }}>
        {/* Document area */}
        <div className="flex-1 p-4 space-y-2 border-r border-white/10">
          <div className="h-3 w-3/4 rounded bg-white/20" />
          <div className="h-2 w-full rounded bg-white/10" />
          <div className="h-2 w-5/6 rounded bg-white/10" />
          <div className="h-2 w-full rounded bg-white/10" />
          <div className="h-2 w-4/5 rounded bg-white/10" />
          <div className="mt-3 space-y-1 border-l-2 border-[#4c7df0]/60 pl-2">
            <div className="h-2 w-full rounded bg-[#4c7df0]/20" />
            <div className="h-2 w-5/6 rounded bg-[#4c7df0]/20" />
            <div className="h-2 w-full rounded bg-[#4c7df0]/20" />
          </div>
          <div className="h-2 w-4/6 rounded bg-white/10" />
          <div className="h-2 w-full rounded bg-white/10" />
          <div className="h-2 w-3/4 rounded bg-white/10" />
          <div className="mt-2 rounded bg-[#078efb]/15 border border-[#078efb]/20 p-1.5 text-[10px] text-[#8ab0f5]">
            ✓ Tracked change: updated to match executive tone guide
          </div>
        </div>
        {/* Nexus AI sidebar */}
        <div className="w-48 shrink-0 p-3 space-y-3 bg-white/3">
          <div className="flex items-center gap-x-1.5">
            <Sparkles className="size-3 text-[#ac87eb]" />
            <span className="text-[10px] font-semibold text-white/60">Nexus AI</span>
          </div>
          <div className="rounded-lg bg-white/8 border border-white/10 p-2 text-[10px] text-white/50 leading-relaxed">
            Rewrite the second paragraph to match the executive style guide and add a tracked change
          </div>
          <div className="rounded-lg bg-[#4c7df0]/20 border border-[#4c7df0]/30 p-2 text-[10px] text-white/65 leading-relaxed">
            Done. Revision tracked. Tone matched to Q3 Brief style guide. Ready to accept or reject.
          </div>
          <div className="flex flex-col gap-y-1">
            <button className="w-full rounded-md bg-[#4c7df0]/30 border border-[#4c7df0]/40 py-1 text-[10px] text-[#8ab0f5]">Accept change</button>
            <button className="w-full rounded-md bg-white/8 border border-white/10 py-1 text-[10px] text-white/40">Reject</button>
          </div>
          <div className="mt-1 rounded-lg bg-white/5 border border-white/8 p-2 space-y-1.5">
            <p className="text-[9px] text-white/30 uppercase tracking-widest">Comments</p>
            <div className="h-1.5 w-2/3 rounded bg-white/10" />
            <div className="h-1.5 w-5/6 rounded bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Excel sidebar mock ─────────────────────────────── */
function ExcelMock() {
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden text-[12px]">
      <div className="flex items-center gap-x-1.5 border-b border-stroke-3 px-4 py-3 bg-background-13">
        <AppIcon src="/images/microsoft/excel.svg" alt="Excel" size={16} />
        <span className="text-[11px] text-secondary/60 font-medium">Financial Model.xlsx</span>
        <span className="ml-auto text-[10px] text-secondary/30">Nexus AI</span>
      </div>
      <div className="flex" style={{ minHeight: 260 }}>
        {/* Spreadsheet */}
        <div className="flex-1 p-3">
          <div className="grid grid-cols-4 gap-px text-[10px]">
            {['', 'Q1', 'Q2', 'Q3'].map((h) => (
              <div key={h} className="bg-secondary/6 px-2 py-1 font-semibold text-secondary/50">{h}</div>
            ))}
            {['Revenue', '2,400', '2,650', '2,820'].map((c) => (
              <div key={c} className={`px-2 py-1 ${c === 'Revenue' ? 'bg-secondary/4 font-medium text-secondary/70' : 'text-secondary/60'}`}>{c}</div>
            ))}
            {['COGS', '960', '1,060', '1,128'].map((c) => (
              <div key={c} className={`px-2 py-1 ${c === 'COGS' ? 'bg-secondary/4 font-medium text-secondary/70' : 'text-secondary/60'}`}>{c}</div>
            ))}
            {['Gross Margin', '59%', '60%', '60%'].map((c, i) => (
              <div key={i} className={`px-2 py-1 ${i === 0 ? 'bg-secondary/4 font-medium text-secondary/70' : 'text-[#217346] font-semibold'}`}>{c}</div>
            ))}
            {['Growth Rate', '—', '10.4%', '6.4%'].map((c, i) => (
              <div key={i} className={`px-2 py-1 ${i === 0 ? 'bg-secondary/4 font-medium text-secondary/70' : 'bg-[#217346]/10 rounded text-[#217346] text-center'}`}>{c}</div>
            ))}
          </div>
          <div className="mt-2 rounded bg-[#217346]/10 border border-[#217346]/20 p-1.5 text-[10px] text-[#217346]">
            ✓ Nexus AI updated assumptions, formulas preserved
          </div>
        </div>
        {/* Sidebar */}
        <div className="w-44 shrink-0 border-l border-stroke-3 p-3 space-y-2.5 bg-background-13/50">
          <div className="flex items-center gap-x-1">
            <Sparkles className="size-3 text-[#217346]" />
            <span className="text-[10px] font-semibold text-secondary/50">Nexus AI</span>
          </div>
          <div className="rounded-lg bg-secondary/5 border border-stroke-3 p-2 text-[10px] text-secondary/60">
            Update the Q3 growth rate to 6.4% and recalculate all margins
          </div>
          <div className="rounded-lg bg-[#217346]/10 border border-[#217346]/20 p-2 text-[10px] text-[#217346]">
            Done. Updated B4 and cascaded through all dependent formulas. No references broken.
          </div>
          <button className="w-full rounded-md bg-[#217346]/15 border border-[#217346]/20 py-1.5 text-[10px] text-[#217346]">
            Run scenario analysis
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── PowerPoint sidebar mock ────────────────────────── */
function PowerPointMock() {
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden text-[12px]">
      <div className="flex items-center gap-x-1.5 border-b border-stroke-3 px-4 py-3 bg-background-13">
        <AppIcon src="/images/microsoft/powerpoint.svg" alt="PowerPoint" size={16} />
        <span className="text-[11px] text-secondary/60 font-medium">Q3 Investor Deck.pptx</span>
        <span className="ml-auto text-[10px] text-secondary/30">Nexus AI</span>
      </div>
      <div className="flex" style={{ minHeight: 240 }}>
        {/* Slide area */}
        <div className="flex-1 p-3">
          <div className="rounded-lg border-2 border-[#c43e1c]/30 bg-gradient-to-br from-[#c43e1c]/10 to-[#c43e1c]/5 p-3 space-y-2">
            <div className="h-3 w-1/2 rounded bg-[#c43e1c]/40" />
            <div className="grid grid-cols-3 gap-1 mt-2">
              {['$2.8M', '60%', '3 yrs'].map((v, i) => (
                <div key={i} className="rounded bg-white/80 border border-stroke-3 p-1.5 text-center">
                  <p className="text-[11px] font-bold text-[#c43e1c]">{v}</p>
                  <p className="text-[9px] text-secondary/40">{['Revenue', 'Margin', 'Runway'][i]}</p>
                </div>
              ))}
            </div>
            <div className="h-1.5 w-3/4 rounded bg-[#c43e1c]/20" />
            <div className="h-1.5 w-2/3 rounded bg-[#c43e1c]/20" />
            <p className="text-[9px] text-secondary/30 mt-1">Slide 4 / 18 · native chart generated by Nexus AI</p>
          </div>
        </div>
        {/* Sidebar */}
        <div className="w-44 shrink-0 border-l border-stroke-3 p-3 space-y-2.5 bg-background-13/50">
          <div className="flex items-center gap-x-1">
            <Sparkles className="size-3 text-[#c43e1c]" />
            <span className="text-[10px] font-semibold text-secondary/50">Nexus AI</span>
          </div>
          <div className="rounded-lg bg-secondary/5 border border-stroke-3 p-2 text-[10px] text-secondary/60">
            Add a KPI slide using the revenue and margin data from the Excel model
          </div>
          <div className="rounded-lg bg-[#c43e1c]/10 border border-[#c43e1c]/20 p-2 text-[10px] text-[#c43e1c]">
            Slide 4 added. Chart uses data from Financial Model.xlsx. Slide master applied.
          </div>
          <button className="w-full rounded-md bg-[#c43e1c]/15 border border-[#c43e1c]/20 py-1.5 text-[10px] text-[#c43e1c]">
            Generate speaker notes
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Teams sidebar mock ─────────────────────────────── */
function TeamsMock() {
  const messages = [
    { from: 'Sarah K.', time: '9:02', text: 'Can someone summarise the action items from yesterday\'s call?', unread: true },
    { from: 'David L.', time: '9:05', text: 'I\'ll loop in the finance team on the model review.', unread: false },
    { from: 'Maria C.', time: '9:11', text: 'Deadline is end of day Thursday for the deck.', unread: true },
  ];
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden text-[12px]">
      <div className="flex items-center gap-x-1.5 border-b border-stroke-3 px-4 py-3 bg-background-13">
        <AppIcon src="/images/microsoft/teams.svg" alt="Teams" size={16} />
        <span className="text-[11px] text-secondary/60 font-medium"># q3-deliverables</span>
        <span className="ml-auto text-[10px] text-secondary/30">Nexus AI</span>
      </div>
      <div className="flex" style={{ minHeight: 240 }}>
        {/* Chat area */}
        <div className="flex-1 divide-y divide-stroke-3 overflow-hidden">
          {messages.map((m) => (
            <div key={m.from} className={`px-4 py-2.5 ${m.unread ? 'bg-white' : 'bg-background-13/40'}`}>
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[11px] font-semibold text-secondary">{m.from}</span>
                <span className="text-[10px] text-secondary/35">{m.time} AM</span>
              </div>
              <p className="text-[10px] text-secondary/60 leading-relaxed">{m.text}</p>
            </div>
          ))}
          <div className="px-4 py-2.5 bg-[#6264a7]/5 border-l-2 border-[#6264a7]/40">
            <p className="text-[10px] font-semibold text-[#6264a7] mb-0.5">Nexus AI summary</p>
            <p className="text-[10px] text-secondary/60">3 action items: (1) Finance model review by Thu, (2) Deck due EOD Thu, (3) Sarah to send call notes.</p>
          </div>
        </div>
        {/* Sidebar */}
        <div className="w-44 shrink-0 border-l border-stroke-3 p-3 space-y-2.5 bg-background-13/50">
          <div className="flex items-center gap-x-1">
            <Sparkles className="size-3 text-[#6264a7]" />
            <span className="text-[10px] font-semibold text-secondary/50">Nexus AI</span>
          </div>
          <div className="rounded-lg bg-secondary/5 border border-stroke-3 p-2 text-[10px] text-secondary/60">
            Summarise this channel and list all action items with owners and deadlines
          </div>
          <div className="rounded-lg bg-[#6264a7]/10 border border-[#6264a7]/20 p-2 text-[10px] text-[#6264a7]">
            3 action items found. Sarah: call notes. David: finance loop-in. Full deck due Thursday EOD.
          </div>
          <button className="w-full rounded-md bg-[#6264a7]/15 border border-[#6264a7]/20 py-1.5 text-[10px] text-[#6264a7]">
            Draft follow-up message
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Workflow flow mock ────────────────────────────── */
function WorkflowMock() {
  const steps = [
    { icon: '/images/microsoft/teams.svg', app: 'Teams', action: 'Summarise channel and extract action items', color: '#6264a7' },
    { icon: '/images/microsoft/word.svg', app: 'Word', action: 'Turn action items into a structured project brief', color: '#185abd' },
    { icon: '/images/microsoft/excel.svg', app: 'Excel', action: 'Build a model or tracker from the brief', color: '#217346' },
    { icon: '/images/microsoft/powerpoint.svg', app: 'PowerPoint', action: 'Generate a progress deck from model data', color: '#c43e1c' },
  ];
  return (
    <div className="space-y-3">
      {steps.map((step, i) => (
        <div key={step.app} className="flex items-start gap-x-4">
          <div className="flex flex-col items-center">
            <div
              className="flex size-9 shrink-0 items-center justify-center rounded-xl border"
              style={{ borderColor: `${step.color}40`, background: `${step.color}15` }}
            >
              <Image src={step.icon} alt={step.app} width={20} height={20} unoptimized />
            </div>
            {i < steps.length - 1 && (
              <div className="mt-1 h-4 w-px bg-stroke-3" />
            )}
          </div>
          <div className="pb-3">
            <p className="text-[13px] font-semibold text-secondary">{step.app}</p>
            <p className="text-[12px] text-secondary/55">{step.action}</p>
          </div>
        </div>
      ))}
      <div className="rounded-xl border border-stroke-3 bg-background-13 px-4 py-3 text-[12px] text-secondary/60">
        One Nexus AI conversation carries context across all four apps, no copy-pasting between windows.
      </div>
    </div>
  );
}

/* ─── App features data ──────────────────────────────── */
const appFeatures = [
  {
    icon: '/images/microsoft/word.svg',
    alt: 'Word',
    label: 'Word',
    badge: 'Nexus AI for Word',
    headline: 'Write and edit with your style guide built in',
    desc: "Nexus AI rewrites, summarises, and restructures Word documents using your company's heading styles, tone guidelines, and numbering conventions. Every change is tracked so you decide what stays.",
    points: [
      'Edit with tracked changes: accept or reject each one',
      'Respond to comment threads without leaving the sidebar',
      'Update content to match a style guide from another document',
      'Summarise long reports into executive briefs',
    ],
  },
  {
    icon: '/images/microsoft/excel.svg',
    alt: 'Excel',
    label: 'Excel',
    badge: 'Nexus AI for Excel',
    headline: 'Ask questions. Update assumptions. Build models.',
    desc: 'Ask Nexus AI what a cell does, change assumptions without breaking formula references, or build a financial model from a written brief. All from the sidebar, all in your existing spreadsheet.',
    points: [
      'Ask what any cell, formula, or range does',
      'Update assumptions and cascade through all dependent formulas',
      'Build models from a written brief',
      'Run scenario analysis and surface key risks',
    ],
  },
  {
    icon: '/images/microsoft/powerpoint.svg',
    alt: 'PowerPoint',
    label: 'PowerPoint',
    badge: 'Nexus AI for PowerPoint',
    headline: 'Slides that match your template, first time',
    desc: 'Nexus AI builds slides inside your existing deck template, respecting your slide masters, font choices, and colour palette. Pull data from Word or Excel to generate native charts without copy-pasting.',
    points: [
      'Generate slides within your existing slide master',
      'Pull data from Word or Excel into native charts',
      'Edit selected content or entire sections',
      'Add speaker notes and Q&A anticipations',
    ],
  },
  {
    icon: '/images/microsoft/teams.svg',
    alt: 'Teams',
    label: 'Teams',
    badge: 'Nexus AI for Teams',
    headline: 'Catch up on channels and act on meetings fast',
    desc: "Nexus AI reads your Teams channels and meeting transcripts, surfaces what needs your attention, extracts action items with owners and deadlines, and drafts follow-up messages ready for you to send.",
    points: [
      'Summarise channels and extract action items',
      'Turn meeting transcripts into structured action lists',
      'Draft follow-up messages for your review before sending',
      'Feed Teams context into Word, Excel, or PowerPoint',
    ],
  },
];

/* ─── Capabilities ──────────────────────────────────── */
const capabilities = [
  {
    icon: RefreshCw,
    title: 'One conversation, all four apps',
    body: 'Context carries from Teams to Word to Excel to PowerPoint. Reference a brief from one app when building a model in another, without switching windows.',
  },
  {
    icon: Zap,
    title: 'Reusable Skills',
    body: "Save a multi-step process as a Skill, for example \"turn a Teams thread into a Word brief and an Excel model\", and run it in one click. Skills work across all four apps.",
  },
  {
    icon: Plug,
    title: 'Connector access',
    body: 'Pull external context directly into the sidebar, including CRM data, project trackers and internal knowledge bases, without leaving the Microsoft 365 window.',
  },
  {
    icon: Mic,
    title: 'Voice input',
    body: 'Dictate your prompt instead of typing it. Useful in Teams when summarising quickly, or in Excel when your hands are already on the keyboard.',
  },
  {
    icon: Wand2,
    title: 'Document drop',
    body: 'Drop a PDF or document into the sidebar and use it as reference context, letting Nexus AI write, format, or calculate based on its content.',
  },
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    body: "Nexus AI works within your existing Microsoft 365 compliance and security framework. Data processed by Nexus AI is not used to train AI models.",
  },
];

/* ─── FAQ items ─────────────────────────────────────── */
export const microsoft365FaqItems = [
  {
    value: 'how-install',
    question: 'How do I install Nexus AI for Microsoft 365?',
    answer:
      'Download the Nexus AI Microsoft 365 extension from the Downloads page. Once installed, a Nexus AI sidebar appears in Word, Excel, PowerPoint, and Teams. Sign in with your Nexus AI account to get started. No IT administrator access is required for personal installation.',
  },
  {
    value: 'which-apps',
    question: 'Which Microsoft 365 apps does Nexus AI work in?',
    answer:
      'Nexus AI currently works inside Microsoft Word, Excel, PowerPoint, and Teams. The same Nexus AI conversation context carries across all four apps, so you can reference a Teams action item when building an Excel model, or pull Excel data into a PowerPoint deck without switching windows.',
  },
  {
    value: 'tracked-changes',
    question: 'Does Nexus AI make changes directly to my documents?',
    answer:
      'In Word, all edits are made as tracked changes. You review and accept or reject each one before the document is changed permanently. In Excel, updated cells and formulas are highlighted before you apply them. In Teams, drafted messages are held for your review before sending. Nothing is changed without your approval.',
  },
  {
    value: 'template',
    question: 'Will Nexus AI respect my company template and style guide?',
    answer:
      'Yes. In PowerPoint, Nexus AI works inside your existing slide master and respects your font choices, colour palette, and layout. In Word, you can drop a style guide document into the sidebar and Nexus AI will match its heading styles, tone, and formatting rules. Excel formula conventions are preserved when assumptions are updated.',
  },
  {
    value: 'cross-app',
    question: 'Can Nexus AI reference data from one app in another?',
    answer:
      'Yes. One Nexus AI conversation carries context across all four apps. For example, you can ask Nexus AI to summarise a Teams channel, turn it into a Word brief, build an Excel model from the brief, then generate a PowerPoint deck from the model, all without copying and pasting between windows.',
  },
  {
    value: 'skills',
    question: 'What are Skills and how do they work?',
    answer:
      'Skills are reusable multi-step processes you save inside Nexus AI. For example, you can save a skill called "Teams thread to briefing" that summarises a Teams channel, extracts action items, and creates a structured Word document, all in one click. Skills work across all four Microsoft 365 apps and can be shared with teammates on Team plans.',
  },
  {
    value: 'plan',
    question: 'Which Nexus AI plan includes the Microsoft 365 extension?',
    answer:
      'The Microsoft 365 extension is available on Pro and Team plans. Free plan users can download and install the extension but will need to upgrade to unlock full features. Enterprise plans include priority support, advanced connector access, and Skills management across your organisation.',
  },
  {
    value: 'security',
    question: 'Is my Microsoft 365 data secure with Nexus AI?',
    answer:
      'Yes. Nexus AI works within your existing Microsoft 365 compliance and security framework. Data processed by Nexus AI is not used to train AI models. Sign in with your Nexus AI account or your existing Microsoft credentials. Enterprise plans support deployment through your preferred cloud provider.',
  },
];

/* ─── Main component ─────────────────────────────────── */
const Microsoft365 = () => {
  const supportedApps = [
    { src: '/images/microsoft/word.svg', alt: 'Microsoft Word', label: 'Word' },
    { src: '/images/microsoft/excel.svg', alt: 'Microsoft Excel', label: 'Excel' },
    { src: '/images/microsoft/powerpoint.svg', alt: 'Microsoft PowerPoint', label: 'PowerPoint' },
    { src: '/images/microsoft/teams.svg', alt: 'Microsoft Teams', label: 'Teams' },
  ];

  const appMocks = [HeroWordMock, ExcelMock, PowerPointMock, TeamsMock];

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-secondary overflow-hidden pt-[160px] pb-0">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-14 lg:gap-x-12">
            {/* Left */}
            <div className="col-span-12 space-y-8 lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary className="border-white/20 bg-white/10 text-white/80">
                  Nexus AI for Microsoft 365
                </BadgePrimary>
              </RevealAnimation>
              <div className="space-y-5">
                <TextReveal delay={0.2}>
                  <h1 className="text-white">
                    Work inside the apps{' '}
                    <span
                      className="bg-clip-text text-transparent"
                      style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                    >
                      you already use
                    </span>
                  </h1>
                </TextReveal>
                <TextReveal delay={0.3}>
                  <p className="text-white/60 max-w-[500px]">
                    Nexus AI integrates directly into Word, Excel, PowerPoint, and Teams, with a
                    persistent sidebar that carries one conversation across all four apps. No window
                    switching. No copy-pasting. Just work, done faster.
                  </p>
                </TextReveal>
              </div>
              {/* App icons */}
              <RevealAnimation delay={0.35} asChild={false} className="flex items-center gap-x-5 flex-wrap gap-y-3">
                {supportedApps.map((app) => (
                  <div key={app.alt} className="flex flex-col items-center gap-y-1.5">
                    <AppIcon src={app.src} alt={app.alt} size={38} />
                    <span className="text-[10px] text-white/40">{app.label}</span>
                  </div>
                ))}
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false} className="flex flex-wrap gap-3">
                <Link href="/downloads">
                  <ButtonPrimary textClassName="text-nowrap">
                    <Download className="size-4" />
                    Download extension
                  </ButtonPrimary>
                </Link>
                <Link href="/pricing">
                  <ButtonWhite textClassName="text-nowrap">View plans</ButtonWhite>
                </Link>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <p className="text-[13px] text-white/35">
                  Available on Pro and Team plans · Works with Microsoft 365 personal and business
                </p>
              </RevealAnimation>
            </div>
            {/* Right — hero mock */}
            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.3} direction="right" offset={60}>
                <HeroWordMock />
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-white py-10 border-b border-stroke-3">
        <div className="main-container">
          <RevealAnimation
            delay={0.1}
            asChild={false}
            className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-center"
          >
            {[
              { stat: '4', label: 'Microsoft 365 apps' },
              { stat: '1', label: 'Persistent conversation' },
              { stat: 'Zero', label: 'Window switching' },
              { stat: 'Pro+', label: 'Plans included' },
            ].map(({ stat, label }) => (
              <div key={label} className="space-y-1">
                <p className="text-2xl font-bold text-secondary">{stat}</p>
                <p className="text-tagline-3 text-secondary/50">{label}</p>
              </div>
            ))}
          </RevealAnimation>
        </div>
      </section>

      {/* ── Per-app deep dives ── */}
      {appFeatures.map((app, i) => {
        const MockComponent = appMocks[i];
        const isEven = i % 2 === 0;
        return (
          <section key={app.label} className="pt-20 md:pt-25 lg:pt-39">
            <div className="main-container">
              <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-16">
                {/* Text — left on even, right on odd */}
                <div className={`col-span-12 space-y-6 lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-x-3">
                    <AppIcon src={app.icon} alt={app.alt} size={32} />
                    <RevealAnimation delay={0.1}>
                      <BadgePrimary>{app.badge}</BadgePrimary>
                    </RevealAnimation>
                  </div>
                  <TextReveal delay={0.2}>
                    <h2>{app.headline}</h2>
                  </TextReveal>
                  <TextReveal delay={0.3}>
                    <p className="text-secondary/60 max-w-[440px]">{app.desc}</p>
                  </TextReveal>
                  <RevealAnimation delay={0.4} asChild={false} className="space-y-3">
                    {app.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-x-2.5">
                        <CheckCircle className="size-4 text-secondary shrink-0 mt-0.5" />
                        <span className="text-tagline-2 text-secondary/80">{pt}</span>
                      </div>
                    ))}
                  </RevealAnimation>
                </div>
                {/* Mock — right on even, left on odd */}
                <div className={`col-span-12 lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <RevealAnimation delay={0.3} direction={isEven ? 'right' : 'left'} offset={50}>
                    <MockComponent />
                  </RevealAnimation>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Cross-app workflow ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-12 items-start gap-y-12 lg:gap-x-16">
            <div className="col-span-12 space-y-6 lg:col-span-5">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Cross-App Workflow</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>One conversation across all four apps</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-secondary/60 max-w-[440px]">
                  Most AI tools reset when you switch applications. Nexus AI carries the full
                  conversation context from Teams to Word to Excel to PowerPoint, so you can build
                  a complete deliverable without breaking your flow.
                </p>
              </TextReveal>
              <RevealAnimation delay={0.4} asChild={false} className="space-y-3">
                {[
                  'Summarise a Teams channel, then turn it into a Word brief',
                  'Build an Excel model from that brief in the same session',
                  'Generate a PowerPoint deck from the model without copy-pasting',
                  'All with one persistent Nexus AI conversation thread',
                ].map((pt) => (
                  <div key={pt} className="flex items-start gap-x-2.5">
                    <CheckCircle className="size-4 text-secondary shrink-0 mt-0.5" />
                    <span className="text-tagline-2 text-secondary/80">{pt}</span>
                  </div>
                ))}
              </RevealAnimation>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <RevealAnimation delay={0.3} direction="right" offset={50}>
                <div className="rounded-2xl border border-stroke-3 bg-white p-8">
                  <p className="text-[12px] font-semibold uppercase tracking-widest text-secondary/30 mb-6">
                    Example workflow: Teams to Deliverable
                  </p>
                  <WorkflowMock />
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities grid ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container space-y-14">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Capabilities</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>More than a chat window</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-secondary/60 mx-auto max-w-[520px]">
                Nexus AI for Microsoft 365 is built for how professionals actually work, with
                reusable processes, external data access, and enterprise security built in.
              </p>
            </TextReveal>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <RevealAnimation key={cap.title} delay={0.1 + i * 0.07} direction="up" offset={35}>
                <div className="rounded-2xl border border-stroke-3 bg-white p-6 space-y-4 h-full">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-secondary/6">
                    <cap.icon className="size-5 text-secondary" />
                  </div>
                  <h3 className="text-[17px] font-semibold text-secondary leading-snug">{cap.title}</h3>
                  <p className="text-tagline-3 text-secondary/60 leading-relaxed">{cap.body}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ── Download CTA ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <RevealAnimation
            delay={0.1}
            asChild={false}
            className="bg-secondary rounded-3xl px-8 py-12 md:px-14 md:py-16"
          >
            <div className="grid grid-cols-12 items-center gap-y-10 lg:gap-x-16">
              <div className="col-span-12 space-y-6 lg:col-span-7">
                <div className="flex items-center gap-x-4 flex-wrap gap-y-2">
                  {supportedApps.map((app) => (
                    <AppIcon key={app.alt} src={app.src} alt={app.alt} size={30} />
                  ))}
                </div>
                <TextReveal delay={0.2}>
                  <h2 className="text-white">
                    Add Nexus AI to{' '}
                    <span
                      className="bg-clip-text text-transparent"
                      style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                    >
                      Microsoft 365
                    </span>
                  </h2>
                </TextReveal>
                <p className="text-white/60 max-w-[480px]">
                  Download the extension from the Downloads page. One install adds Nexus AI to
                  Word, Excel, PowerPoint, and Teams. Available on Pro and Team plans.
                </p>
              </div>
              <div className="col-span-12 flex flex-col gap-y-3 lg:col-span-5 lg:items-end">
                <Link href="/downloads">
                  <ButtonPrimary textClassName="text-nowrap">
                    <Download className="size-4" />
                    Download extension
                  </ButtonPrimary>
                </Link>
                <Link href="/pricing">
                  <ButtonWhite textClassName="text-nowrap">View plans</ButtonWhite>
                </Link>
                <p className="text-[12px] text-white/30 lg:text-right">
                  Pro and Team plans · Enterprise available
                </p>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* ── Pricing ── */}
      <PricingTeaser />
    </>
  );
};

export default Microsoft365;
