import AnimatedArtifactsDemo from '@/src/components/home/animated-artifacts-demo';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { CheckIcon } from '@/src/components/shared/icon';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import {
  Code2,
  FileText,
  Globe,
  History,
  Image as ImageIcon,
  LayoutTemplate,
  PanelRight,
  Presentation,
  Sparkles,
  Workflow,
} from 'lucide-react';
import Link from 'next/link';

/* ─── Artifact type cards ───────────────────────────── */
const artifactTypes = [
  {
    icon: FileText,
    label: 'Documents',
    description: 'Reports, essays, proposals, research papers and meeting notes, rendered as rich, editable text.',
    examples: ['Word / DOCX', 'PDF', 'Markdown', 'Plain text'],
    accent: '#217bfe',
    bg: 'bg-blue-50',
  },
  {
    icon: Code2,
    label: 'Code',
    description: 'Functions, scripts and full components in any language, displayed with syntax highlighting and a run option.',
    examples: ['TypeScript', 'Python', 'SQL', 'Bash'],
    accent: '#ac87eb',
    bg: 'bg-purple-50',
  },
  {
    icon: Globe,
    label: 'Websites',
    description: 'Single-page HTML applications, landing pages and interactive tools, with a live in-browser preview.',
    examples: ['HTML / CSS', 'React components', 'Interactive tools', 'Landing pages'],
    accent: '#078efb',
    bg: 'bg-sky-50',
  },
  {
    icon: Presentation,
    label: 'Slides',
    description: 'Presentation decks rendered slide-by-slide. Navigate, edit and export to PowerPoint or PDF.',
    examples: ['PPTX / PowerPoint', 'Google Slides format', 'PDF export', 'Deck thumbnails'],
    accent: '#ee4d5d',
    bg: 'bg-rose-50',
  },
  {
    icon: Workflow,
    label: 'Diagrams',
    description: 'Flowcharts, mind maps, entity diagrams and timelines rendered from Mermaid or plain-language descriptions.',
    examples: ['Flowcharts', 'ERD / schema', 'Mind maps', 'Timelines'],
    accent: '#f65c9c',
    bg: 'bg-pink-50',
  },
  {
    icon: ImageIcon,
    label: 'SVG graphics',
    description: 'Scalable vector illustrations, icons, infographics and data visualisations, editable inline.',
    examples: ['Illustrations', 'Icons and badges', 'Infographics', 'Data charts'],
    accent: '#4c7df0',
    bg: 'bg-indigo-50',
  },
];

/* ─── Hero canvas mockup ────────────────────────────── */
function HeroCanvasMock() {
  return (
    <div className="flex h-[400px]">
      {/* Chat pane */}
      <div className="w-[200px] shrink-0 border-r border-white/10 flex flex-col text-[11px]">
        <div className="px-3 py-2.5 border-b border-white/10">
          <p className="text-[10px] font-semibold text-white/30 uppercase tracking-wider">Chat</p>
        </div>
        <div className="flex-1 p-2.5 space-y-3 overflow-hidden">
          <div className="flex justify-end">
            <div className="bg-white/15 text-white/80 rounded-xl rounded-br-sm px-2.5 py-2 max-w-[90%] leading-relaxed">
              Write a Q3 market analysis report with key insights and recommendations.
            </div>
          </div>
          <div className="flex gap-x-1.5 items-end">
            <div className="size-5 rounded-full bg-white/15 shrink-0 flex items-center justify-center">
              <Sparkles className="size-2.5 text-white/70" />
            </div>
            <div className="bg-white/8 border border-white/10 rounded-xl rounded-bl-sm px-2.5 py-2 text-white/55 leading-relaxed flex-1">
              Report generated in Artifacts. You can edit it directly or ask me to refine any section.
            </div>
          </div>
          <div className="flex gap-x-1.5 items-end">
            <div className="size-5 rounded-full bg-white/15 shrink-0 flex items-center justify-center">
              <Sparkles className="size-2.5 text-white/70" />
            </div>
            <div className="bg-white/8 border border-white/10 rounded-xl rounded-bl-sm px-2.5 py-2 text-white/55 leading-relaxed flex-1">
              The executive summary has been rewritten with a sharper hook.
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-white/15 text-white/80 rounded-xl rounded-br-sm px-2.5 py-2 max-w-[90%] leading-relaxed">
              Add a competitive landscape section after the revenue data.
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-2.5 py-2 flex items-center gap-x-1.5">
          <span className="flex-1 text-[10px] text-white/25">Ask to edit...</span>
        </div>
      </div>

      {/* Artifacts canvas pane */}
      <div className="flex-1 bg-white/5 flex flex-col overflow-hidden">
        {/* Pane header */}
        <div className="flex items-center gap-x-2 border-b border-white/10 px-3 py-2.5">
          <PanelRight className="size-3.5 text-[#4c7df0]" />
          <span className="text-[11px] font-semibold text-white/60">Artifacts</span>
          <span className="ml-auto rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-white/40">v3</span>
        </div>
        {/* Document preview */}
        <div className="flex-1 overflow-hidden bg-white m-2 rounded-xl p-4 text-[10px] space-y-2.5">
          <div className="h-2.5 w-[55%] rounded-full bg-secondary/70" />
          <div className="h-1.5 w-[35%] rounded-full bg-secondary/25" />
          <div className="h-px w-full bg-stroke-3 my-2" />
          <p className="text-[9px] font-semibold uppercase tracking-wider text-secondary/35">Executive Summary</p>
          {[88, 92, 78, 85, 70].map((w, i) => (
            <div key={i} className="h-1.5 rounded-full bg-secondary/15" style={{ width: `${w}%` }} />
          ))}
          <p className="text-[9px] font-semibold uppercase tracking-wider text-secondary/35 mt-3">Revenue Analysis</p>
          {/* Mini bar chart */}
          <div className="flex items-end gap-x-1 h-10 mt-1">
            {[55, 68, 72, 60, 85, 90, 78].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: 'var(--color-gradient-logo)', opacity: 0.7 }} />
            ))}
          </div>
          {[80, 65].map((w, i) => (
            <div key={i} className="h-1.5 rounded-full bg-secondary/15 mt-1" style={{ width: `${w}%` }} />
          ))}
          <p className="text-[9px] font-semibold uppercase tracking-wider text-secondary/35 mt-3">Competitive Landscape</p>
          {[75, 88, 60].map((w, i) => (
            <div key={i} className="h-1.5 rounded-full bg-secondary/15" style={{ width: `${w}%` }} />
          ))}
        </div>
        {/* Toolbar */}
        <div className="flex items-center gap-x-2 border-t border-white/10 px-3 py-2">
          {['Edit', 'Comment', 'History', 'Export'].map(action => (
            <span key={action} className={`rounded-lg px-2.5 py-1 text-[10px] font-medium cursor-default ${action === 'Export' ? 'text-white' : 'text-white/40 hover:text-white/60'}`}
              style={action === 'Export' ? { background: 'var(--color-gradient-logo)' } : {}}>
              {action}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Version history mockup ────────────────────────── */
function VersionHistoryMock() {
  const versions = [
    { label: 'v3', time: 'Just now', note: 'Added competitive landscape section', active: true },
    { label: 'v2', time: '8 min ago', note: 'Rewrote executive summary', active: false },
    { label: 'v1', time: '14 min ago', note: 'Initial draft generated', active: false },
  ];
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden">
      <div className="border-b border-stroke-3 bg-background-13 px-4 py-3 flex items-center gap-x-2">
        <History className="size-4 text-secondary/40" />
        <span className="text-[13px] font-medium text-secondary">Version history</span>
      </div>
      <div className="divide-y divide-stroke-3">
        {versions.map((v) => (
          <div key={v.label} className={`flex items-center gap-x-4 px-4 py-3.5 ${v.active ? 'bg-blue-50/50' : ''}`}>
            <div className={`flex size-8 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold ${v.active ? 'bg-secondary text-white' : 'bg-background-13 text-secondary/50'}`}>
              {v.label}
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-[13px] font-medium truncate ${v.active ? 'text-secondary' : 'text-secondary/60'}`}>{v.note}</p>
              <p className="text-[11px] text-secondary/35 mt-0.5">{v.time}</p>
            </div>
            {v.active && (
              <span className="rounded-full bg-secondary text-white text-[10px] font-medium px-2.5 py-0.5 shrink-0">Current</span>
            )}
            {!v.active && (
              <button type="button" className="text-[11px] text-secondary/40 hover:text-secondary transition-colors shrink-0">Restore</button>
            )}
          </div>
        ))}
      </div>
      {/* Diff preview */}
      <div className="border-t border-stroke-3 p-4 space-y-2 font-mono text-[11px]">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-secondary/40 mb-2">Changes in v3</p>
        <div className="bg-red-50 border-l-2 border-red-300 px-3 py-1.5 text-red-500 line-through leading-relaxed">
          - Market position remains competitive across three segments.
        </div>
        <div className="bg-green-50 border-l-2 border-green-400 px-3 py-1.5 text-green-700 leading-relaxed">
          + Nexus holds category leadership in SMB automation with 34% market share, ahead of the next competitor at 22%.
        </div>
      </div>
    </div>
  );
}

/* ─── Export formats ────────────────────────────────── */
const exportFormats = [
  { ext: 'PDF',   color: 'bg-red-50   text-red-500   border-red-200/60'    },
  { ext: 'DOCX',  color: 'bg-blue-50  text-blue-600  border-blue-200/60'   },
  { ext: 'PPTX',  color: 'bg-orange-50 text-orange-500 border-orange-200/60' },
  { ext: 'HTML',  color: 'bg-sky-50   text-sky-600   border-sky-200/60'    },
  { ext: 'SVG',   color: 'bg-violet-50 text-violet-600 border-violet-200/60' },
  { ext: 'PNG',   color: 'bg-pink-50  text-pink-500  border-pink-200/60'   },
  { ext: 'MD',    color: 'bg-secondary/8 text-secondary border-secondary/15' },
  { ext: 'TXT',   color: 'bg-secondary/8 text-secondary border-secondary/15' },
];

/* ─── Main component ─────────────────────────────────── */
const Artifacts = () => {
  return (
    <>
      {/* ══ 1. HERO ══════════════════════════════════════ */}
      <section className="bg-secondary overflow-hidden pt-[160px] pb-0">
        <div className="main-container">
          <div className="mx-auto max-w-[820px] space-y-6 text-center">
            <RevealAnimation delay={0.1}>
              <span
                className="inline-flex items-center gap-x-2 rounded-full px-4 py-1.5 text-[13px] font-semibold text-white"
                style={{ background: 'rgba(255,255,255,0.12)' }}
              >
                <PanelRight className="size-3.5" />
                Artifacts
              </span>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h1 className="text-white leading-[1.1]">
                Generate it. Preview it.{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                >
                  Make it yours.
                </span>
              </h1>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="mx-auto max-w-[600px] text-lg text-white/60 leading-relaxed">
                Artifacts is the live canvas inside Nexus AI where every AI output (document,
                code, website, slide or diagram) renders in a dedicated preview pane, ready to
                edit directly or refine with a follow-up message.
              </p>
            </TextReveal>
            <RevealAnimation delay={0.4} asChild={false} className="flex flex-wrap items-center justify-center gap-3">
              <Link href="https://app.mynexusai.com/signup" target="_blank" rel="noopener noreferrer">
                <ButtonPrimary textClassName="text-center text-nowrap">
                  Try Artifacts free
                </ButtonPrimary>
              </Link>
              <Link href="/products">
                <ButtonWhite textClassName="text-center text-nowrap">
                  See all products
                </ButtonWhite>
              </Link>
            </RevealAnimation>
          </div>

          {/* Canvas mockup */}
          <RevealAnimation
            delay={0.5}
            asChild={false}
            className="mx-auto mt-14 w-full max-w-[820px] overflow-hidden rounded-t-2xl border border-white/10 shadow-[0_-20px_80px_rgba(76,125,240,0.25)]"
          >
            <div className="flex items-center gap-x-1.5 border-b border-white/10 bg-white/5 px-4 py-3">
              <span className="size-2.5 rounded-full bg-red-500/70" />
              <span className="size-2.5 rounded-full bg-yellow-500/70" />
              <span className="size-2.5 rounded-full bg-green-500/70" />
              <span className="ml-3 text-[11px] text-white/30">Nexus AI</span>
              <div className="ml-auto flex gap-x-2 text-[10px]">
                <span className="text-white/25">Chat</span>
                <span className="text-[#4c7df0] font-medium">Artifacts</span>
              </div>
            </div>
            <HeroCanvasMock />
          </RevealAnimation>
        </div>
      </section>

      {/* ══ 2. WHAT IS ARTIFACTS ═════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>What is Artifacts</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">The gap between AI output and finished work, closed.</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  Most AI tools give you raw text in a chat window. You copy it somewhere else,
                  format it manually, and start over every session. Artifacts changes that.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.35}>
                <p className="text-background-14/60 leading-relaxed">
                  When Nexus AI creates a document, a piece of code, a website or a diagram, it
                  opens in a dedicated Artifacts pane alongside the chat. You see it rendered,
                  not as plain text. You edit it inline or ask the AI to change it. Then you
                  export the finished file, not a transcript.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'Renders output as a live preview, not raw text',
                    'Edit directly or ask AI to refine with a follow-up message',
                    'Full version history: compare and restore any revision',
                    'Export in the native file format, ready to use',
                    'Works across documents, code, websites, slides and diagrams',
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

            {/* Animated artifacts demo from homepage */}
            <RevealAnimation delay={0.3} asChild={false} className="rounded-2xl border border-stroke-3 bg-white p-6 h-[400px] flex flex-col">
              <AnimatedArtifactsDemo />
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ══ 3. ARTIFACT TYPES ════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-5 text-center mb-12">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>What you can create</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2 className="text-secondary">Every output type, one canvas</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-background-14/60 mx-auto max-w-[520px]">
                From a research report to a live website, Artifacts renders any AI output
                in a dedicated preview pane with inline editing.
              </p>
            </TextReveal>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {artifactTypes.map((type, i) => {
              const Icon = type.icon;
              return (
                <RevealAnimation
                  key={type.label}
                  delay={0.1 * (i + 1)}
                  asChild={false}
                  className="border border-stroke-3 rounded-2xl bg-white p-6 space-y-4"
                >
                  <div className={`${type.bg} flex size-11 items-center justify-center rounded-xl`}>
                    <Icon style={{ color: type.accent }} className="size-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-6 text-secondary">{type.label}</h3>
                    <p className="text-[14px] text-secondary/60 leading-relaxed">{type.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {type.examples.map(ex => (
                      <span key={ex} className="rounded-full border border-stroke-3 bg-background-13 px-2.5 py-1 text-[11px] font-medium text-secondary/60">
                        {ex}
                      </span>
                    ))}
                  </div>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ 4. HOW IT WORKS ══════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-5 text-center mb-12">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>How it works</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2 className="text-secondary">From prompt to finished file in one loop</h2>
            </TextReveal>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { step: '01', icon: Sparkles, title: 'Ask',     body: 'Type what you need in the chat. Nexus AI generates it in seconds.', accent: '#217bfe', bg: 'bg-blue-50' },
              { step: '02', icon: PanelRight, title: 'Preview', body: 'The output opens in the Artifacts pane, rendered as it will look in the final file.', accent: '#ac87eb', bg: 'bg-purple-50' },
              { step: '03', icon: LayoutTemplate, title: 'Edit', body: 'Click to edit text, code or structure directly. Or send a follow-up to the AI.', accent: '#078efb', bg: 'bg-sky-50' },
              { step: '04', icon: History, title: 'Compare', body: 'Each iteration saved as a version. Restore any previous state with one click.', accent: '#ee4d5d', bg: 'bg-rose-50' },
              { step: '05', icon: FileText, title: 'Export', body: 'Download as PDF, DOCX, PPTX, HTML or plain text. A finished file, not a transcript.', accent: '#4c7df0', bg: 'bg-indigo-50' },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <RevealAnimation
                  key={s.step}
                  delay={0.1 * (i + 1)}
                  asChild={false}
                  className="border border-stroke-3 rounded-2xl bg-white p-6 space-y-4 relative"
                >
                  <span className="absolute top-4 right-4 text-[36px] font-black text-secondary/5 leading-none select-none">
                    {s.step}
                  </span>
                  <div className={`${s.bg} flex size-10 items-center justify-center rounded-xl`}>
                    <Icon style={{ color: s.accent }} className="size-4.5" />
                  </div>
                  <h3 className="text-heading-6 text-secondary">{s.title}</h3>
                  <p className="text-[13px] text-secondary/60 leading-relaxed">{s.body}</p>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ 5. VERSION HISTORY ════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <RevealAnimation delay={0.2} asChild={false} className="order-2 lg:order-1">
              <VersionHistoryMock />
            </RevealAnimation>
            <div className="order-1 lg:order-2 space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Version history</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Every revision saved. Any version restorable.</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  Every time you or the AI makes a change, a new version is saved automatically.
                  See exactly what changed between revisions with a colour-coded diff, and restore
                  any earlier version with one click.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'Automatic versioning on every AI iteration',
                    'Named versions with timestamps and change notes',
                    'Colour-coded diff view between any two versions',
                    'One-click restore to any previous state',
                    'Branch from any version to explore different directions',
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
          </div>
        </div>
      </section>

      {/* ══ 6. EXPORT ════════════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Export</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">A finished file. Not a copy-paste.</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  When you export from Artifacts, you get the native file: a real DOCX you can
                  open in Word, a real PPTX for PowerPoint, a working HTML page, a valid SVG.
                  Not a plain-text transcript you have to reformat somewhere else.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'Export to PDF, DOCX, PPTX, HTML, SVG, PNG and more',
                    'Document formatting preserved on export',
                    'Code exported with correct syntax and file extension',
                    'Websites exported as working single-file HTML',
                    'Slides exported slide-by-slide with layouts intact',
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

            <RevealAnimation delay={0.3} asChild={false} className="space-y-6">
              <div className="rounded-2xl border border-stroke-3 bg-white p-6 space-y-5">
                <p className="text-[13px] font-semibold uppercase tracking-wider text-secondary/40">
                  Export formats
                </p>
                <div className="grid grid-cols-4 gap-3">
                  {exportFormats.map(fmt => (
                    <div
                      key={fmt.ext}
                      className={`flex items-center justify-center rounded-xl border py-3 text-[13px] font-bold ${fmt.color}`}
                    >
                      {fmt.ext}
                    </div>
                  ))}
                </div>
                <div className="rounded-xl bg-background-13 border border-stroke-3 p-4 space-y-3">
                  <p className="text-[12px] font-semibold text-secondary/50">Ready to export</p>
                  <div className="flex items-center gap-x-3">
                    <div className="flex-1 rounded-lg border border-stroke-3 bg-white px-3 py-2">
                      <p className="text-[12px] font-medium text-secondary">Q3 Market Analysis.docx</p>
                      <p className="text-[10px] text-secondary/40 mt-0.5">3 pages · Formatted · Ready</p>
                    </div>
                    <button type="button" className="shrink-0 rounded-lg px-3 py-2 text-[12px] font-semibold text-white" style={{ background: 'var(--color-gradient-logo)' }}>
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ══ 7. WORKS WITH EVERYTHING ═════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-12">
            <div className="space-y-5 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Part of Nexus AI</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Artifacts powers every Nexus AI product</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-background-14/60 mx-auto max-w-[500px]">
                  Artifacts is not a standalone tool. It is the rendering layer that makes every
                  Nexus AI output visible, editable and exportable.
                </p>
              </TextReveal>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {[
                {
                  label: 'Chat',
                  href: '/products/chat',
                  body: 'Every document, summary and draft written in Chat opens in Artifacts, formatted, editable and ready to export.',
                  accent: '#217bfe', bg: 'bg-blue-50',
                  items: ['Research reports', 'Written summaries', 'Email and proposal drafts'],
                },
                {
                  label: 'Creative Studio',
                  href: '/products/creative-studio',
                  body: 'Slides, images, infographics and brand assets generated in Creative Studio are previewed and refined in Artifacts.',
                  accent: '#ac87eb', bg: 'bg-purple-50',
                  items: ['Presentation decks', 'Brand graphics', 'Social media assets'],
                },
                {
                  label: 'Code',
                  href: '/products/code',
                  body: 'Every function, script and component from Nexus AI Code is displayed in an Artifacts pane with syntax highlighting and a run option.',
                  accent: '#ee4d5d', bg: 'bg-rose-50',
                  items: ['Functions and scripts', 'React components', 'Single-page HTML apps'],
                },
              ].map((product, i) => (
                <RevealAnimation
                  key={product.label}
                  delay={0.1 * (i + 1)}
                  asChild={false}
                  className="border border-stroke-3 rounded-2xl bg-white p-6 space-y-4"
                >
                  <div className={`${product.bg} inline-flex rounded-xl px-3 py-1.5`}>
                    <span className="text-[13px] font-semibold" style={{ color: product.accent }}>{product.label}</span>
                  </div>
                  <p className="text-[14px] text-secondary/60 leading-relaxed">{product.body}</p>
                  <ul className="space-y-1.5">
                    {product.items.map(item => (
                      <li key={item} className="flex items-center gap-x-2">
                        <span className="size-1.5 rounded-full shrink-0" style={{ background: product.accent }} />
                        <span className="text-[13px] text-secondary/65">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={product.href} className="inline-flex items-center text-[13px] font-medium text-secondary/50 hover:text-secondary transition-colors">
                    Learn more about {product.label} &rarr;
                  </Link>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Artifacts;
