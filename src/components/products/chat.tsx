import chatHeroImg from '@/public/images/opai-img-137.jpg';
import Image from 'next/image';
import AnimatedChatDemo from '@/src/components/home/animated-chat-demo';
import PricingTeaser from '@/src/components/home/pricing-teaser';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { CheckIcon } from '@/src/components/shared/icon';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import {
  BookOpen,
  FileText,
  FolderOpen,
  Globe,
  MessageCircle,
  Search,
  Sparkles,
  Upload,
  Users,
} from 'lucide-react';
import Link from 'next/link';

/* ─── Chat mode cards ───────────────────────────────── */
function GeneralChatMock() {
  return (
    <div className="rounded-xl border border-stroke-3 bg-white p-3 space-y-2 text-[11px]">
      <div className="flex justify-end">
        <div className="rounded-2xl rounded-br-sm bg-secondary px-3 py-2 text-white max-w-[75%]">
          What is the difference between RAM and ROM?
        </div>
      </div>
      <div className="flex gap-x-1.5">
        <div className="size-5 rounded-full bg-secondary shrink-0 flex items-center justify-center">
          <Sparkles className="size-3 text-white" />
        </div>
        <div className="rounded-2xl rounded-bl-sm border border-stroke-3 bg-background-13 px-3 py-2 max-w-[80%] leading-relaxed text-secondary/70">
          RAM is temporary storage your computer uses while running programs and resets when powered off. ROM is permanent storage that retains data, used for firmware.
        </div>
      </div>
      <div className="flex justify-end">
        <div className="rounded-2xl rounded-br-sm bg-secondary px-3 py-2 text-white max-w-[75%]">
          Can you write that as a one-page explainer?
        </div>
      </div>
      <div className="flex items-center gap-x-1.5 pl-6.5">
        {[0,1,2].map(i => (
          <span key={i} className="size-1.5 rounded-full bg-secondary/30 animate-bounce" style={{ animationDelay: `${i*150}ms` }} />
        ))}
      </div>
    </div>
  );
}

function ResearchMock() {
  return (
    <div className="rounded-xl border border-stroke-3 bg-white p-3 space-y-2 text-[11px]">
      <div className="flex justify-end">
        <div className="rounded-2xl rounded-br-sm bg-secondary px-3 py-2 text-white max-w-[80%]">
          Latest advances in mRNA cancer vaccines
        </div>
      </div>
      <div className="flex gap-x-1.5">
        <div className="size-5 rounded-full bg-[#ac87eb] shrink-0 flex items-center justify-center">
          <Search className="size-3 text-white" />
        </div>
        <div className="space-y-1.5 flex-1">
          <div className="flex flex-wrap gap-1">
            {['Nature', 'PubMed', 'Science', 'NEJM'].map(s => (
              <span key={s} className="rounded-full bg-[#f4f2fe] border border-[#ac87eb]/30 px-2 py-0.5 text-[9px] font-medium text-[#7458e8]">{s}</span>
            ))}
          </div>
          <div className="rounded-2xl rounded-bl-sm border border-stroke-3 bg-background-13 px-3 py-2 leading-relaxed text-secondary/70">
            mRNA vaccines targeting personalized tumour antigens showed 44% reduction in recurrence in a Phase 2 trial
            <span className="ml-1 inline-flex items-center rounded bg-[#f4f2fe] px-1 text-[9px] text-[#7458e8] font-medium">[1]</span>.
            Moderna and Merck reported similar results across 157 patients
            <span className="ml-1 inline-flex items-center rounded bg-[#f4f2fe] px-1 text-[9px] text-[#7458e8] font-medium">[2]</span>.
          </div>
        </div>
      </div>
    </div>
  );
}

function FileChatMock() {
  return (
    <div className="rounded-xl border border-stroke-3 bg-white p-3 space-y-2 text-[11px]">
      <div className="flex items-center gap-x-2 rounded-lg border border-stroke-3 bg-background-13 px-3 py-2">
        <FileText className="size-4 text-red-400 shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="font-medium text-secondary truncate">2024 Annual Report.pdf</p>
          <p className="text-secondary/40 text-[9px]">2.4 MB · 48 pages</p>
        </div>
        <span className="rounded-full bg-green-50 border border-green-200/60 px-2 py-0.5 text-[9px] text-green-600 font-medium">Ready</span>
      </div>
      <div className="flex justify-end">
        <div className="rounded-2xl rounded-br-sm bg-secondary px-3 py-2 text-white max-w-[75%]">
          What was the revenue growth rate?
        </div>
      </div>
      <div className="flex gap-x-1.5">
        <div className="size-5 rounded-full bg-secondary shrink-0 flex items-center justify-center">
          <Sparkles className="size-3 text-white" />
        </div>
        <div className="rounded-2xl rounded-bl-sm border border-stroke-3 bg-background-13 px-3 py-2 max-w-[80%] space-y-1 leading-relaxed text-secondary/70">
          <p>Revenue grew 34% year-over-year, from $2.1B to $2.8B.</p>
          <span className="inline-block rounded bg-blue-50 border border-blue-200/50 px-1.5 py-0.5 text-[9px] text-blue-600 font-medium">Page 12</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Folders sidebar mockup ────────────────────────── */
function FoldersSidebar() {
  const folders = [
    { name: 'Contract Review', count: 3, active: true },
    { name: 'PhD Research', count: 8 },
    { name: 'Q3 Revenue Report', count: 5 },
    { name: 'Client Proposals', count: 4 },
    { name: 'Product Launch Prep', count: 6 },
  ];
  return (
    <div className="rounded-2xl bg-secondary overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-x-1.5 border-b border-white/10 px-4 py-3">
        <span className="size-2.5 rounded-full bg-red-500/70" />
        <span className="size-2.5 rounded-full bg-yellow-500/70" />
        <span className="size-2.5 rounded-full bg-green-500/70" />
        <span className="ml-3 text-[11px] text-white/30">Nexus AI Chat</span>
      </div>
      <div className="flex h-[340px]">
        {/* Sidebar */}
        <div className="w-[180px] border-r border-white/10 p-3 space-y-1 shrink-0">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30 px-2 mb-2">Folders</p>
          {folders.map(f => (
            <div
              key={f.name}
              className={`flex items-center gap-x-2 rounded-lg px-2 py-1.5 cursor-default ${f.active ? 'bg-white/15' : 'hover:bg-white/8'}`}
            >
              <FolderOpen className={`size-3.5 shrink-0 ${f.active ? 'text-[#4c7df0]' : 'text-white/40'}`} />
              <span className={`text-[11px] flex-1 min-w-0 truncate ${f.active ? 'text-white font-medium' : 'text-white/50'}`}>
                {f.name}
              </span>
              <span className={`text-[9px] ${f.active ? 'text-white/60' : 'text-white/25'}`}>{f.count}</span>
            </div>
          ))}
          <div className="pt-4 border-t border-white/10 mt-3">
            <button type="button" className="flex items-center gap-x-2 rounded-lg px-2 py-1.5 w-full text-left text-white/40 hover:text-white/60">
              <span className="text-[11px]">+ New Folder</span>
            </button>
          </div>
        </div>
        {/* Chat pane */}
        <div className="flex-1 flex flex-col p-3 gap-y-2 text-[11px] overflow-hidden">
          <p className="text-[10px] font-semibold text-white/40 px-1 mb-1">Contract Review</p>
          <div className="flex justify-end">
            <div className="rounded-2xl rounded-br-sm bg-white/15 px-3 py-2 text-white/80 max-w-[75%]">
              Summarise the key risks in this contract.
            </div>
          </div>
          <div className="flex gap-x-1.5">
            <div className="size-5 rounded-full bg-white/15 shrink-0 flex items-center justify-center">
              <Sparkles className="size-3 text-white/70" />
            </div>
            <div className="rounded-2xl rounded-bl-sm bg-white/8 border border-white/10 px-3 py-2 max-w-[80%] leading-relaxed text-white/55 space-y-1">
              <p>Three risks stand out:</p>
              <p>1. Auto-renewal clause on page 4</p>
              <p>2. Uncapped liability on page 9</p>
              <p>3. 30-day termination window on page 12</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="rounded-2xl rounded-br-sm bg-white/15 px-3 py-2 text-white/80 max-w-[75%]">
              Draft a reply flagging these for legal.
            </div>
          </div>
          {/* Input bar */}
          <div className="mt-auto flex items-center gap-x-2 rounded-xl bg-white/8 border border-white/10 px-3 py-2">
            <span className="text-white/25 text-[11px] flex-1">Ask anything in this folder...</span>
            <div className="size-5 rounded-full bg-white/15 flex items-center justify-center">
              <Upload className="size-3 text-white/40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Research mode mockup ──────────────────────────── */
function ResearchDeepDiveMock() {
  const sources = [
    { name: 'Nature', domain: 'nature.com', color: '#4c7df0' },
    { name: 'PubMed', domain: 'pubmed.ncbi.nlm.nih.gov', color: '#ac87eb' },
    { name: 'Science', domain: 'science.org', color: '#217bfe' },
    { name: 'NEJM', domain: 'nejm.org', color: '#ee4d5d' },
    { name: 'The Lancet', domain: 'thelancet.com', color: '#078efb' },
  ];
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden">
      <div className="border-b border-stroke-3 bg-background-13 px-4 py-3 flex items-center gap-x-2">
        <Search className="size-4 text-[#ac87eb]" />
        <span className="text-[13px] font-medium text-secondary">Research Mode</span>
        <span className="ml-auto text-[10px] text-secondary/40">Searching 5 sources</span>
      </div>
      <div className="p-4 space-y-4">
        {/* Query */}
        <div className="flex justify-end">
          <div className="rounded-2xl rounded-br-sm bg-secondary px-3 py-2 text-white text-[12px] max-w-[80%]">
            What are the latest clinical results for mRNA cancer vaccines?
          </div>
        </div>
        {/* Sources */}
        <div className="space-y-1.5">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-secondary/40">Sources found</p>
          <div className="flex flex-wrap gap-1.5">
            {sources.map((s, i) => (
              <span key={s.name} className="flex items-center gap-x-1.5 rounded-full border border-stroke-3 bg-background-13 px-2.5 py-1 text-[11px]">
                <span className="size-2 rounded-full shrink-0" style={{ background: s.color }} />
                <span className="font-medium text-secondary">{s.name}</span>
                <span className="text-secondary/30 text-[9px] hidden sm:block">[{i+1}]</span>
              </span>
            ))}
          </div>
        </div>
        {/* Answer */}
        <div className="rounded-xl bg-background-13 border border-stroke-3 p-3 text-[12px] leading-relaxed text-secondary/70 space-y-2">
          <p>
            A Phase 2 trial published in{' '}
            <span className="text-[#4c7df0] font-medium">Nature</span>
            <span className="inline-flex items-center rounded bg-blue-50 border border-blue-200/50 px-1 text-[9px] text-blue-600 font-medium ml-1">[1]</span>{' '}
            showed 44% reduction in recurrence using personalised mRNA antigens.
          </p>
          <p>
            Moderna reported similar Phase 2 results across 157 patients in a joint study with Merck
            <span className="inline-flex items-center rounded bg-purple-50 border border-purple-200/50 px-1 text-[9px] text-purple-600 font-medium ml-1">[2]</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── File types ────────────────────────────────────── */
const fileTypes = [
  { ext: 'PDF', color: 'bg-red-50 text-red-500 border-red-200/50' },
  { ext: 'DOCX', color: 'bg-blue-50 text-blue-600 border-blue-200/50' },
  { ext: 'XLSX', color: 'bg-green-50 text-green-600 border-green-200/50' },
  { ext: 'PPTX', color: 'bg-orange-50 text-orange-500 border-orange-200/50' },
  { ext: 'CSV', color: 'bg-teal-50 text-teal-600 border-teal-200/50' },
  { ext: 'TXT', color: 'bg-secondary/8 text-secondary border-secondary/15' },
  { ext: 'MD', color: 'bg-secondary/8 text-secondary border-secondary/15' },
  { ext: 'JPG', color: 'bg-pink-50 text-pink-500 border-pink-200/50' },
  { ext: 'PNG', color: 'bg-violet-50 text-violet-600 border-violet-200/50' },
  { ext: 'JSON', color: 'bg-yellow-50 text-yellow-600 border-yellow-200/50' },
  { ext: 'XML', color: 'bg-sky-50 text-sky-600 border-sky-200/50' },
  { ext: 'HTML', color: 'bg-indigo-50 text-indigo-600 border-indigo-200/50' },
];

/* ─── Capabilities ──────────────────────────────────── */
const capabilities = [
  { icon: MessageCircle, label: 'Quick answers', description: 'Any question, any topic, instant response.' },
  { icon: FileText,      label: 'Summarise documents', description: 'Upload any file and get the key points.' },
  { icon: Search,        label: 'Multi-source research', description: 'Cited answers across several sources at once.' },
  { icon: Globe,         label: 'Translate content', description: 'Any language, any length, with context preserved.' },
  { icon: BookOpen,      label: 'Write and rewrite', description: 'Drafts, rewrites, tone changes, style edits.' },
  { icon: Sparkles,      label: 'Brainstorm ideas', description: 'Generate options, frameworks and outlines fast.' },
  { icon: Users,         label: 'Explain anything', description: 'Complex topics made clear, at any level.' },
  { icon: FolderOpen,    label: 'Organise in Folders', description: 'Every chat saved, searchable, with full context.' },
];

/* ─── Personas ──────────────────────────────────────── */
const personas = [
  {
    label: 'Students',
    headline: 'Research and write with citations',
    body: 'Upload papers, generate cited drafts, summarise lecture notes and get explanations of difficult concepts, all inside one Folder.',
    accent: '#217bfe',
    bg: 'bg-blue-50',
    items: ['Cited essay drafts', 'Lecture note summaries', 'Concept explanations', 'File Chat with textbooks'],
  },
  {
    label: 'Researchers',
    headline: 'Analyse sources at depth',
    body: 'Research Mode searches across academic databases and returns structured answers with source attribution. Upload papers and query them directly.',
    accent: '#ac87eb',
    bg: 'bg-purple-50',
    items: ['Multi-source literature review', 'PDF and dataset analysis', 'Structured summaries', 'Citation tracking'],
  },
  {
    label: 'Writers',
    headline: 'Draft, rewrite and refine',
    body: 'Go from outline to polished draft in one Folder. Chat about your piece, rewrite sections, adjust tone and export when done.',
    accent: '#ee4d5d',
    bg: 'bg-rose-50',
    items: ['Drafts with tone control', 'Rewrite and rephrase', 'Headline brainstorming', 'Long-form content'],
  },
  {
    label: 'Teams',
    headline: 'Shared context, no briefing needed',
    body: 'Shared Folders mean everyone on the team works with the same context. No copying prompts, no re-explaining. Just pick up where the last person left off.',
    accent: '#078efb',
    bg: 'bg-sky-50',
    items: ['Shared Folder workspaces', 'Proposal and report drafts', 'Meeting summaries', 'Document Q&A'],
  },
];

/* ─── Main component ────────────────────────────────── */
const ChatProduct = () => {
  return (
    <>
      {/* ══ 1. HERO ══════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-[160px] pb-0">
        <figure className="absolute inset-0" aria-hidden="true">
          <Image
            src={chatHeroImg}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </figure>
        <div className="main-container relative z-10">
          <div className="mx-auto max-w-[900px] space-y-6 text-center">
            <RevealAnimation delay={0.1}>
              <span
                className="inline-flex items-center gap-x-2 rounded-full px-4 py-1.5 text-[13px] font-semibold text-secondary"
                style={{ background: 'rgba(0,12,96,0.08)' }}
              >
                <MessageCircle className="size-3.5" />
                Nexus AI Chat
              </span>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h1 className="text-secondary leading-[1.1]">
                The AI chat that turns{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                >
                  questions into finished work
                </span>
              </h1>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="mx-auto max-w-[580px] text-lg text-secondary/70 leading-relaxed">
                General Chat, Research Mode and File Chat in one workspace. Every conversation
                organised into Folders so your context never gets lost.
              </p>
            </TextReveal>
            <RevealAnimation delay={0.4} asChild={false} className="flex flex-wrap items-center justify-center gap-3">
              <Link href="https://app.mynexusai.com/signup" target="_blank" rel="noopener noreferrer">
                <ButtonPrimary textClassName="text-center text-nowrap">
                  Start chatting free
                </ButtonPrimary>
              </Link>
              <Link href="/pricing">
                <ButtonWhite textClassName="text-center text-nowrap">
                  View pricing
                </ButtonWhite>
              </Link>
            </RevealAnimation>
          </div>

          {/* Chat demo window */}
          <RevealAnimation
            delay={0.5}
            asChild={false}
            className="mx-auto mt-14 w-full max-w-[820px] overflow-hidden rounded-t-2xl border border-white/10 bg-secondary shadow-[0_-20px_80px_rgba(76,125,240,0.25)]"
          >
            <div className="flex items-center gap-x-1.5 border-b border-white/10 bg-white/5 px-4 py-3">
              <span className="size-2.5 rounded-full bg-red-500/70" />
              <span className="size-2.5 rounded-full bg-yellow-500/70" />
              <span className="size-2.5 rounded-full bg-green-500/70" />
              <div className="ml-3 flex items-center gap-x-1 rounded-full bg-white/10 px-3 py-1 text-[11px]">
                <FolderOpen className="size-3 text-[#4c7df0]" />
                <span className="text-white/50">Contract Review</span>
              </div>
              <div className="ml-2 flex gap-x-2">
                {['General Chat', 'Research Mode', 'File Chat'].map((tab, i) => (
                  <span
                    key={tab}
                    className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${i === 2 ? 'bg-white/15 text-white' : 'text-white/30'}`}
                  >
                    {tab}
                  </span>
                ))}
              </div>
            </div>
            <div className="h-[380px] overflow-hidden">
              <AnimatedChatDemo />
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* ══ 2. STATS ═════════════════════════════════════ */}
      <section className="border-b border-stroke-3 bg-white">
        <div className="main-container">
          <div className="grid grid-cols-3 divide-x divide-stroke-3">
            {[
              { stat: '3', label: 'Chat modes built in' },
              { stat: '500K+', label: 'Active users' },
              { stat: 'Unlimited', label: 'Folders and history' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center justify-center py-8 text-center">
                <p className="text-secondary font-bold" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.25rem)' }}>
                  {item.stat}
                </p>
                <p className="text-secondary/50 text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. THREE CHAT MODES ══════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-5 text-center mb-12">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Chat Modes</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2 className="text-secondary">One chat. Three ways to work.</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-background-14/60 mx-auto max-w-[500px]">
                General Chat for everyday tasks. Research Mode for depth. File Chat for your
                documents. All in the same Folder.
              </p>
            </TextReveal>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {/* General Chat */}
            <RevealAnimation
              delay={0.1}
              asChild={false}
              className="border border-stroke-3 rounded-2xl bg-white p-6 space-y-5"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50">
                <MessageCircle className="size-5 text-[#217bfe]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-heading-6 text-secondary">General Chat</h3>
                <p className="text-[14px] text-secondary/60 leading-relaxed">
                  Ask anything and get a fast, capable response. Write, explain, brainstorm, translate
                  and problem-solve in one conversation.
                </p>
              </div>
              <ul className="space-y-2">
                {['Instant answers on any topic', 'Write, rewrite and edit', 'Brainstorm and outline', 'No context lost between sessions'].map(item => (
                  <li key={item} className="flex items-start gap-x-2">
                    <span className="border-stroke-3 mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border p-0.5">
                      <CheckIcon className="stroke-secondary size-2.5" />
                    </span>
                    <span className="text-[13px] text-secondary/70">{item}</span>
                  </li>
                ))}
              </ul>
              <GeneralChatMock />
            </RevealAnimation>

            {/* Research Mode */}
            <RevealAnimation
              delay={0.2}
              asChild={false}
              className="border border-[#ac87eb]/30 rounded-2xl bg-white p-6 space-y-5"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-purple-50">
                <Search className="size-5 text-[#ac87eb]" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-x-2">
                  <h3 className="text-heading-6 text-secondary">Research Mode</h3>
                  <span className="rounded-full bg-[#f4f2fe] border border-[#ac87eb]/30 px-2 py-0.5 text-[10px] font-semibold text-[#7458e8]">Premium</span>
                </div>
                <p className="text-[14px] text-secondary/60 leading-relaxed">
                  Searches across multiple real sources and returns cited, structured answers.
                  Built for deep research, academic work and evidence-based decisions.
                </p>
              </div>
              <ul className="space-y-2">
                {['Multi-source web and academic search', 'Inline citations with source links', 'Structured summaries and analysis', 'Real-time information'].map(item => (
                  <li key={item} className="flex items-start gap-x-2">
                    <span className="border-[#ac87eb]/40 mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border p-0.5">
                      <CheckIcon className="stroke-[#ac87eb] size-2.5" />
                    </span>
                    <span className="text-[13px] text-secondary/70">{item}</span>
                  </li>
                ))}
              </ul>
              <ResearchMock />
            </RevealAnimation>

            {/* File Chat */}
            <RevealAnimation
              delay={0.3}
              asChild={false}
              className="border border-stroke-3 rounded-2xl bg-white p-6 space-y-5"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-rose-50">
                <FileText className="size-5 text-[#ee4d5d]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-heading-6 text-secondary">File Chat</h3>
                <p className="text-[14px] text-secondary/60 leading-relaxed">
                  Upload a document and ask it directly. PDFs, spreadsheets, presentations and
                  images. Get page-level citations on every answer.
                </p>
              </div>
              <ul className="space-y-2">
                {['PDF, DOCX, XLSX, PPTX and more', 'Page-level citations on every answer', 'Multiple files in one Folder', 'Ask across files at once'].map(item => (
                  <li key={item} className="flex items-start gap-x-2">
                    <span className="border-stroke-3 mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border p-0.5">
                      <CheckIcon className="stroke-secondary size-2.5" />
                    </span>
                    <span className="text-[13px] text-secondary/70">{item}</span>
                  </li>
                ))}
              </ul>
              <FileChatMock />
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ══ 4. FOLDERS DEEP DIVE ════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text */}
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Folders</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Context that carries forward, not resets</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  Every conversation, uploaded file and draft lives inside a Folder. Come back to a
                  project hours or weeks later and the AI still has full context. No re-briefing,
                  no lost work, no starting over.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.35}>
                <p className="text-background-14/60 leading-relaxed">
                  Shared Folders let teams work in the same context. One person researches, another
                  drafts, a third edits, all inside one shared workspace where the AI knows what
                  has already been discussed.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'Chats, files and drafts in one place',
                    'Full context returned on every session',
                    'Share Folders with your team',
                    'Searchable across all past conversations',
                    'Unlimited Folders on Premium and above',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-x-2.5">
                      <span className="border-stroke-3 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border p-0.5">
                        <CheckIcon className="stroke-secondary size-3" />
                      </span>
                      <span className="text-secondary/75 text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealAnimation>
            </div>

            {/* Folders UI mockup */}
            <RevealAnimation delay={0.3} asChild={false}>
              <FoldersSidebar />
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ══ 5. RESEARCH MODE DEEP DIVE ══════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Research mockup */}
            <RevealAnimation delay={0.2} asChild={false} className="order-2 lg:order-1">
              <ResearchDeepDiveMock />
            </RevealAnimation>

            {/* Text */}
            <div className="order-1 lg:order-2 space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Research Mode</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Answers with sources, not just summaries</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  Research Mode searches across the web, academic databases and real-time sources in
                  parallel, then returns a structured answer with every claim linked to a source.
                  No hallucinated citations, no vague summaries.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'Searches web, academic and news sources',
                    'Every claim linked to a real citation',
                    'Structured answers with depth and nuance',
                    'Real-time information, not training data cutoff',
                    'Ask follow-up questions with full source context',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-x-2.5">
                      <span className="border-stroke-3 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border p-0.5">
                        <CheckIcon className="stroke-secondary size-3" />
                      </span>
                      <span className="text-secondary/75 text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <Link href="/features/academic-research">
                  <ButtonWhite textClassName="text-nowrap">
                    Explore Academic Research
                  </ButtonWhite>
                </Link>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 6. FILE CHAT DEEP DIVE ══════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text */}
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>File Chat</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Talk to any document, spreadsheet or image</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  Upload a file and start asking questions. Nexus AI reads every page, table and
                  image and gives you page-level citations on every answer. Upload multiple files
                  to a Folder and ask across all of them at once.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'Ask questions across multiple uploaded files',
                    'Page-level and cell-level citations',
                    'Summarise, compare and extract data',
                    'Reads tables, images and structured data',
                    'Keep files in Folders for future reference',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-x-2.5">
                      <span className="border-stroke-3 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border p-0.5">
                        <CheckIcon className="stroke-secondary size-3" />
                      </span>
                      <span className="text-secondary/75 text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <Link href="/features/ai-file-chat">
                  <ButtonWhite textClassName="text-nowrap">
                    Explore AI File Chat
                  </ButtonWhite>
                </Link>
              </RevealAnimation>
            </div>

            {/* File types */}
            <RevealAnimation delay={0.3} asChild={false} className="space-y-4">
              <p className="text-[13px] font-semibold uppercase tracking-wider text-secondary/40">
                Supported file types
              </p>
              <div className="flex flex-wrap gap-2">
                {fileTypes.map(ft => (
                  <span
                    key={ft.ext}
                    className={`rounded-lg border px-3 py-1.5 text-[13px] font-semibold ${ft.color}`}
                  >
                    {ft.ext}
                  </span>
                ))}
              </div>
              <div className="rounded-2xl border border-stroke-3 bg-white p-5 space-y-4">
                <div className="flex items-center gap-x-3 rounded-xl border border-dashed border-stroke-3 bg-background-13 p-4">
                  <Upload className="size-5 text-secondary/30" />
                  <div>
                    <p className="text-[13px] font-medium text-secondary/60">Drop files to upload</p>
                    <p className="text-[11px] text-secondary/35">or click to browse</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { name: 'Q3 Report.pdf', size: '2.4 MB', color: 'text-red-400' },
                    { name: 'Revenue data.xlsx', size: '840 KB', color: 'text-green-500' },
                    { name: 'Product brief.docx', size: '1.1 MB', color: 'text-blue-500' },
                  ].map(f => (
                    <div key={f.name} className="flex items-center gap-x-3 rounded-lg bg-background-13 px-3 py-2">
                      <FileText className={`size-4 shrink-0 ${f.color}`} />
                      <span className="text-[13px] text-secondary flex-1">{f.name}</span>
                      <span className="text-[11px] text-secondary/35">{f.size}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ══ 7. CAPABILITIES ══════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-12">
            <div className="space-y-5 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>What you can do</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Everything you need in one conversation</h2>
              </TextReveal>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {capabilities.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <RevealAnimation
                    key={cap.label}
                    delay={0.05 * (i + 1)}
                    asChild={false}
                    className="border border-stroke-3 rounded-2xl bg-white p-5 space-y-3 text-center"
                  >
                    <div className="mx-auto flex size-10 items-center justify-center rounded-xl bg-secondary/8">
                      <Icon className="size-4 text-secondary" />
                    </div>
                    <p className="text-[14px] font-semibold text-secondary">{cap.label}</p>
                    <p className="text-[12px] text-secondary/55 leading-relaxed">{cap.description}</p>
                  </RevealAnimation>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 8. WHO IT'S FOR ══════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-12">
            <div className="space-y-5 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Who it is for</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Built for anyone who thinks for a living</h2>
              </TextReveal>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {personas.map((persona, i) => (
                <RevealAnimation
                  key={persona.label}
                  delay={0.1 * (i + 1)}
                  asChild={false}
                  className="border border-stroke-3 rounded-2xl bg-white p-6 space-y-4"
                >
                  <div className={`${persona.bg} inline-flex rounded-xl px-3 py-1.5`}>
                    <span className="text-[13px] font-semibold" style={{ color: persona.accent }}>
                      {persona.label}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-6 text-secondary">{persona.headline}</h3>
                    <p className="text-[13px] text-secondary/60 leading-relaxed">{persona.body}</p>
                  </div>
                  <ul className="space-y-1.5">
                    {persona.items.map(item => (
                      <li key={item} className="flex items-start gap-x-2">
                        <span className="mt-1.5 size-1.5 rounded-full shrink-0" style={{ background: persona.accent }} />
                        <span className="text-[12px] text-secondary/65">{item}</span>
                      </li>
                    ))}
                  </ul>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 9. PRICING ═══════════════════════════════════ */}
      <PricingTeaser />
    </>
  );
};

export default ChatProduct;
