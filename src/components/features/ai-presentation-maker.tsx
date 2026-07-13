import PricingTeaser from '@/src/components/home/pricing-teaser';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { CheckIcon } from '@/src/components/shared/icon';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import {
  Briefcase,
  Download,
  FileCode2,
  FileSearch,
  FileText,
  Globe,
  GraduationCap,
  Layout,
  Palette,
  Sparkles,
  TrendingUp,
  Upload,
  Users,
  Wand2,
} from 'lucide-react';
import Link from 'next/link';

/* ─── Mocks ──────────────────────────────────────────── */

function PresentationEditorMock() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden text-[12px]">
      <div className="flex items-center gap-x-1.5 border-b border-white/10 px-4 py-3 bg-white/5">
        <span className="size-2.5 rounded-full bg-red-500/70" />
        <span className="size-2.5 rounded-full bg-yellow-500/70" />
        <span className="size-2.5 rounded-full bg-green-500/70" />
        <span className="ml-3 text-[11px] text-white/30">Nexus AI — Q3 Investor Deck</span>
        <span className="ml-auto text-[10px] text-white/20">12 slides</span>
      </div>
      <div className="flex gap-3 p-3">
        {/* Thumbnails */}
        <div className="w-[70px] shrink-0 space-y-2">
          {[
            { n: 1, active: true },
            { n: 2, active: false },
            { n: 3, active: false },
            { n: 4, active: false },
          ].map(s => (
            <div
              key={s.n}
              className={`rounded-lg p-1.5 ${s.active ? 'ring-1 ring-white/40 bg-white/15' : 'bg-white/5'}`}
            >
              <div
                className={`aspect-[16/10] rounded flex items-center justify-center ${
                  s.active
                    ? 'bg-gradient-to-br from-[#000C60] to-[#217bfe]/40'
                    : 'bg-white/8'
                }`}
              >
                <span className="text-[8px] text-white/30">{s.n}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Main slide */}
        <div className="flex-1 space-y-2">
          <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-[#000C60] via-[#217bfe]/20 to-[#ac87eb]/20 border border-white/10 p-4 flex flex-col justify-between">
            <div className="space-y-1">
              <p className="text-[8px] uppercase tracking-widest text-white/30">Q3 2025 · Investor Presentation</p>
              <p className="text-white font-bold text-[15px] leading-tight">AI-Powered Growth</p>
              <p className="text-white/50 text-[10px]">From 0 to 2M users in 18 months</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { v: '2M+', l: 'Users' },
                { v: '$12M', l: 'ARR' },
                { v: '94%', l: 'Retention' },
              ].map(m => (
                <div key={m.l} className="rounded-lg bg-white/10 p-2 text-center">
                  <p className="text-white font-bold text-[11px]">{m.v}</p>
                  <p className="text-white/40 text-[8px]">{m.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-2 rounded-lg bg-white/8 border border-white/10 px-3 py-2">
            <Sparkles className="size-3 text-[#ac87eb] shrink-0" />
            <span className="text-[10px] text-white/50">AI is formatting slide 5 of 12…</span>
            <div className="ml-auto h-1 w-20 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-[42%] rounded-full" style={{ background: 'var(--color-gradient-logo)' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BeautifyMock() {
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden">
      <div className="border-b border-stroke-3 bg-background-13 px-4 py-3 flex items-center gap-x-2">
        <Wand2 className="size-4 text-secondary/40" />
        <span className="text-[13px] font-medium text-secondary">AI-Beautify Slide</span>
        <span className="ml-auto rounded-full bg-green-100 border border-green-200/60 text-green-700 text-[10px] font-semibold px-2 py-0.5">
          Done
        </span>
      </div>
      <div className="p-4 grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <p className="text-[10px] font-semibold text-secondary/40 uppercase tracking-wider">Before</p>
          <div className="aspect-[4/3] rounded-xl bg-white border border-stroke-3 p-3 flex flex-col gap-2">
            <div className="h-2 w-24 bg-secondary/15 rounded" />
            <div className="h-1.5 w-32 bg-secondary/8 rounded" />
            <div className="h-1.5 w-28 bg-secondary/8 rounded" />
            <div className="h-1.5 w-20 bg-secondary/8 rounded" />
            <div className="flex-1" />
          </div>
        </div>
        <div className="space-y-1.5">
          <p className="text-[10px] font-semibold text-[#217bfe] uppercase tracking-wider">After</p>
          <div className="aspect-[4/3] rounded-xl overflow-hidden border border-[#217bfe]/20 bg-gradient-to-br from-[#000C60] to-[#217bfe]/30 p-3 flex flex-col gap-2">
            <div className="h-2 w-24 bg-white/50 rounded" />
            <div className="h-1.5 w-32 bg-white/25 rounded" />
            <div className="h-1.5 w-28 bg-white/20 rounded" />
            <div className="flex-1" />
            <div className="grid grid-cols-3 gap-1">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-6 rounded bg-white/15" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 pb-4 space-y-2">
        {[
          'Professional colour palette applied',
          'Typography hierarchy set automatically',
          'Layout and spacing optimised',
        ].map(t => (
          <div key={t} className="flex items-center gap-x-2 text-[11px] text-secondary/60">
            <span className="size-1.5 rounded-full bg-green-400 shrink-0" />
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

function ExportMock() {
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden">
      <div className="border-b border-stroke-3 bg-background-13 px-4 py-3 flex items-center gap-x-2">
        <Download className="size-4 text-secondary/40" />
        <span className="text-[13px] font-medium text-secondary">Export your presentation</span>
      </div>
      <div className="p-4 space-y-4">
        <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-[#000C60] to-[#217bfe]/30 border border-stroke-3 flex flex-col items-center justify-center gap-2">
          <p className="text-white font-bold text-[13px]">Q3 Market Report</p>
          <p className="text-white/40 text-[10px]">12 slides · 2.4 MB</p>
        </div>
        <div className="space-y-2">
          {[
            { label: 'Download PowerPoint (.pptx)', primary: true },
            { label: 'Download PDF', primary: false },
            { label: 'Copy shareable link', primary: false },
          ].map(opt => (
            <div
              key={opt.label}
              className={`w-full flex items-center gap-x-3 rounded-xl px-3 py-2.5 text-[12px] font-medium border cursor-default ${
                opt.primary
                  ? 'border-secondary bg-secondary text-white'
                  : 'border-stroke-3 bg-background-13 text-secondary/70'
              }`}
            >
              {opt.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InputFormatsMock() {
  const formats = [
    { label: 'Pasted text', icon: FileText, color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: 'annual-report.pdf', icon: FileSearch, color: 'text-red-500', bg: 'bg-red-50' },
    { label: 'brief.docx', icon: FileText, color: 'text-indigo-500', bg: 'bg-indigo-50' },
    { label: 'slides.md', icon: FileCode2, color: 'text-purple-500', bg: 'bg-purple-50' },
  ];
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden">
      <div className="border-b border-stroke-3 bg-background-13 px-4 py-3 flex items-center gap-x-2">
        <Upload className="size-4 text-secondary/40" />
        <span className="text-[13px] font-medium text-secondary">Create from any format</span>
      </div>
      <div className="p-4 space-y-3">
        {formats.map(f => {
          const Icon = f.icon;
          return (
            <div
              key={f.label}
              className="flex items-center gap-x-3 rounded-xl border border-stroke-3 bg-background-13 px-3 py-2.5"
            >
              <div className={`${f.bg} size-8 rounded-lg flex items-center justify-center shrink-0`}>
                <Icon className={`size-4 ${f.color}`} />
              </div>
              <p className="flex-1 text-[12px] text-secondary/70 truncate">{f.label}</p>
              <span className="text-[10px] text-secondary/25">→</span>
              <div className="flex gap-x-1">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-5 h-4 rounded bg-secondary/10 border border-stroke-3" />
                ))}
                <span className="text-[9px] text-secondary/30 self-end ml-0.5">+9</span>
              </div>
            </div>
          );
        })}
        <div
          className="flex items-center justify-center gap-x-1.5 rounded-xl px-4 py-2.5 text-[12px] font-semibold text-white"
          style={{ background: 'var(--color-gradient-logo)' }}
        >
          <Sparkles className="size-3.5" />
          Generating 12 slides…
        </div>
      </div>
    </div>
  );
}

/* ─── Data ───────────────────────────────────────────── */

const conversionTypes = [
  {
    icon: FileText,
    title: 'Text to Presentation',
    body: 'Type or paste any text — a brief, bullet points or a full essay — and get a structured, designed presentation in seconds.',
    accent: '#217bfe',
    bg: 'bg-blue-50',
  },
  {
    icon: FileText,
    title: 'Word to Presentation',
    body: 'Upload a .docx file. Nexus AI reads the headings, body and formatting and maps it into clean, polished slides automatically.',
    accent: '#4c7df0',
    bg: 'bg-indigo-50',
  },
  {
    icon: FileSearch,
    title: 'PDF to Presentation',
    body: 'Turn any PDF — a research paper, report or brief — into a deck with the key points preserved and properly structured.',
    accent: '#ee4d5d',
    bg: 'bg-rose-50',
  },
  {
    icon: FileCode2,
    title: 'Markdown to Presentation',
    body: 'Paste Markdown with headings, bullet points and code blocks and get a properly formatted presentation in one click.',
    accent: '#ac87eb',
    bg: 'bg-purple-50',
  },
  {
    icon: Globe,
    title: 'URL to Presentation',
    body: 'Give Nexus AI a URL — a blog post, product page or article — and it fetches and transforms the content into slides.',
    accent: '#078efb',
    bg: 'bg-sky-50',
  },
  {
    icon: Wand2,
    title: 'AI-Beautify Slide',
    body: 'Already have plain slides? Paste them in and let AI upgrade the design — better layouts, professional colours and refined typography.',
    accent: '#f59e0b',
    bg: 'bg-amber-50',
  },
];

const personas = [
  {
    icon: TrendingUp,
    label: 'Sales',
    headline: 'Personalised pitch decks for every prospect',
    body: 'Generate tailored proposals and pitch decks from a brief. Close more deals without spending hours in slide editors.',
    accent: '#217bfe',
    bg: 'bg-blue-50',
    items: ['Prospect-specific decks from a brief', 'Sales figures auto-formatted', 'Consistent brand across every pitch', 'Export to PowerPoint or share a link'],
  },
  {
    icon: Layout,
    label: 'Marketing',
    headline: 'Campaign briefs and reports at scale',
    body: 'Turn campaign data, reports and briefs into polished presentations. Keep stakeholders aligned with decks that are always current.',
    accent: '#ac87eb',
    bg: 'bg-purple-50',
    items: ['Reports from data and text', 'Campaign decks in minutes', 'Consistent brand and templates', 'Reuse master decks for updates'],
  },
  {
    icon: Briefcase,
    label: 'Founders',
    headline: 'Investor decks when you need them',
    body: 'Generate a structured, designed investor pitch from your notes or brief. Focus on the story, not the slide formatting.',
    accent: '#078efb',
    bg: 'bg-sky-50',
    items: ['Investor deck from a one-pager', 'Clear narrative structure', 'Professional design out of the box', 'Update any section in seconds'],
  },
  {
    icon: GraduationCap,
    label: 'Students',
    headline: 'Turn notes and essays into slides',
    body: 'Paste lecture notes, an essay or a PDF and get a presentation ready to submit or present. No design work required.',
    accent: '#ee4d5d',
    bg: 'bg-rose-50',
    items: ['Essay or notes → slides instantly', 'Proper headings and structure', 'Academic slide formatting', 'Export in any format'],
  },
  {
    icon: Users,
    label: 'Consultants',
    headline: 'Client deliverables at scale',
    body: 'Produce polished client decks from reports or briefs. Apply brand guidelines automatically and deliver faster than ever.',
    accent: '#4c7df0',
    bg: 'bg-indigo-50',
    items: ['Client-specific branding applied', 'Deliverables from reports or data', 'Consistent quality across projects', 'Reuse and adapt existing decks'],
  },
];

/* ─── Main component ─────────────────────────────────── */

const AiPresentationMaker = () => {
  return (
    <>
      {/* ══ 1. HERO ══════════════════════════════════════ */}
      <section className="bg-secondary overflow-hidden pt-[160px] pb-0">
        <div className="main-container">
          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6 pb-14">
              <RevealAnimation delay={0.1}>
                <span
                  className="inline-flex items-center gap-x-2 rounded-full px-4 py-1.5 text-[13px] font-semibold text-white"
                  style={{ background: 'rgba(255,255,255,0.12)' }}
                >
                  <Layout className="size-3.5" />
                  AI Presentation Maker
                </span>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h1 className="text-white leading-[1.1]">
                  Beautiful slides,{' '}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                  >
                    in seconds.
                  </span>
                </h1>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-white/60 text-lg leading-relaxed">
                  Turn text, PDFs, Word docs, Markdown, URLs and plain slides into
                  polished presentations. Export to PowerPoint, share a link, or
                  let AI beautify what you already have.
                </p>
              </TextReveal>
              <RevealAnimation delay={0.4} asChild={false} className="flex flex-wrap gap-3">
                <Link href="https://app.mynexusai.com/signup" target="_blank" rel="noopener noreferrer">
                  <ButtonPrimary textClassName="text-center text-nowrap">
                    Start free
                  </ButtonPrimary>
                </Link>
                <Link href="/pricing">
                  <ButtonWhite textClassName="text-center text-nowrap">
                    View pricing
                  </ButtonWhite>
                </Link>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.4} asChild={false} className="pb-0">
              <PresentationEditorMock />
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ══ 2. STATS ═════════════════════════════════════ */}
      <section className="border-b border-stroke-3 bg-white">
        <div className="main-container">
          <div className="grid grid-cols-3 divide-x divide-stroke-3">
            {[
              { stat: '6',        label: 'Input formats supported' },
              { stat: '50+',      label: 'Professional templates' },
              { stat: '1 click',  label: 'Export to PowerPoint' },
            ].map(item => (
              <div key={item.label} className="flex flex-col items-center justify-center py-8 text-center px-4">
                <p className="text-secondary font-bold" style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)' }}>
                  {item.stat}
                </p>
                <p className="text-secondary/50 text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. CONVERSION TYPES ══════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-5 text-center mb-14">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Input formats</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2 className="text-secondary">Turn anything into slides</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-background-14/60 mx-auto max-w-[520px] text-lg leading-relaxed">
                Nexus AI reads your content in whatever form it arrives and structures
                it into a presentation with clear flow, strong design and ready-to-use slides.
              </p>
            </TextReveal>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {conversionTypes.map((ct, i) => {
              const Icon = ct.icon;
              return (
                <RevealAnimation
                  key={ct.title}
                  delay={0.1 * (i + 1)}
                  asChild={false}
                  className="rounded-2xl border border-stroke-3 bg-white p-6 space-y-4"
                >
                  <div
                    className={`${ct.bg} flex size-11 items-center justify-center rounded-xl`}
                  >
                    <Icon style={{ color: ct.accent }} className="size-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-6 text-secondary">{ct.title}</h3>
                    <p className="text-[14px] text-secondary/60 leading-relaxed">{ct.body}</p>
                  </div>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ 4. INPUT FORMATS — FEATURE SECTION ══════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Multi-format input</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">From your content to slides — no reformatting</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  Paste text, upload a Word doc or PDF, drop in a Markdown file, or give
                  Nexus AI a URL. It reads the content, identifies the key points and
                  structures them into a clear, well-designed deck — automatically.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'Accepts text, PDF, DOCX, Markdown, and URLs',
                    'Identifies headings, key points and structure automatically',
                    'Preserves data tables, bullet points and code blocks',
                    'No manual copy-pasting or reformatting required',
                    'Multiple files combined into one coherent deck',
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
            <RevealAnimation delay={0.3} asChild={false}>
              <InputFormatsMock />
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ══ 5. AI-BEAUTIFY ═══════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <RevealAnimation delay={0.2} asChild={false} className="order-2 lg:order-1">
              <BeautifyMock />
            </RevealAnimation>
            <div className="order-1 lg:order-2 space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>AI-Beautify Slide</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Plain slides, transformed instantly</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  Already have slides but they look flat or inconsistent? Paste them into
                  Nexus AI and let the AI redesign them — applying a professional colour
                  palette, setting a clear typographic hierarchy and optimising every layout
                  without touching your content.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'Upgrades any plain or inconsistent slide deck',
                    'Applies a professional colour palette automatically',
                    'Sets typography hierarchy across all slides',
                    'Adds visual structure: dividers, data callouts, icons',
                    'Your content stays intact — only the design changes',
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

      {/* ══ 6. HOW IT WORKS ══════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-5 text-center mb-12">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>How it works</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2 className="text-secondary">From idea to deck in three steps</h2>
            </TextReveal>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              {
                step: '01',
                icon: Upload,
                title: 'Input',
                body: 'Type a brief, paste text, upload a document, drop in a URL, or paste your existing slides.',
                accent: '#217bfe',
                bg: 'bg-blue-50',
              },
              {
                step: '02',
                icon: Sparkles,
                title: 'Generate',
                body: 'Nexus AI structures the content, applies a professional design and creates a complete, formatted deck.',
                accent: '#ac87eb',
                bg: 'bg-purple-50',
              },
              {
                step: '03',
                icon: Download,
                title: 'Export',
                body: 'Download as PowerPoint (.pptx) or PDF, copy a shareable link, or embed the presentation anywhere.',
                accent: '#078efb',
                bg: 'bg-sky-50',
              },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <RevealAnimation
                  key={s.step}
                  delay={0.15 * (i + 1)}
                  asChild={false}
                  className="relative border border-stroke-3 rounded-2xl bg-white p-6 space-y-4"
                >
                  <span className="absolute top-4 right-4 text-[40px] font-black text-secondary/5 leading-none select-none">
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

      {/* ══ 7. EXPORT ════════════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Export</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">PowerPoint, PDF, link — one click each</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  Export directly to PowerPoint (.pptx) and keep editing in the tool
                  your team already uses. Download as PDF for documents that need
                  to stay fixed. Or share a link for live presentations and feedback.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'Download as editable PowerPoint (.pptx)',
                    'Export as PDF — fixed format, ready to share',
                    'Copy a shareable link for live presentations',
                    'Embed in Notion, Confluence or any website',
                    'No watermarks on any paid plan',
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
            <RevealAnimation delay={0.3} asChild={false}>
              <ExportMock />
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ══ 8. DESIGN & TEMPLATES ════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-5 text-center mb-12">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Templates &amp; design</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2 className="text-secondary">Professional design, no designer required</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-background-14/60 mx-auto max-w-[520px] text-lg leading-relaxed">
                Choose from 50+ professionally designed templates across Business,
                Marketing, Education, Pitch Deck and Creative styles. Every layout
                adapts automatically to your content.
              </p>
            </TextReveal>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Business',  accent: '#217bfe', bg: 'bg-blue-50',   icon: Briefcase },
              { label: 'Pitch Deck', accent: '#ac87eb', bg: 'bg-purple-50', icon: TrendingUp },
              { label: 'Education', accent: '#078efb', bg: 'bg-sky-50',    icon: GraduationCap },
              { label: 'Creative',  accent: '#ee4d5d', bg: 'bg-rose-50',   icon: Palette },
            ].map((t, i) => {
              const Icon = t.icon;
              return (
                <RevealAnimation
                  key={t.label}
                  delay={0.1 * (i + 1)}
                  asChild={false}
                  className="rounded-2xl border border-stroke-3 bg-white p-6 space-y-4"
                >
                  <div className={`${t.bg} flex size-10 items-center justify-center rounded-xl`}>
                    <Icon style={{ color: t.accent }} className="size-4.5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-6 text-secondary">{t.label}</h3>
                    <p className="text-[13px] text-secondary/60 leading-relaxed">
                      Professionally designed layouts for {t.label.toLowerCase()} presentations.
                    </p>
                  </div>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ 9. PERSONAS ══════════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-12">
            <div className="space-y-5 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Who it is for</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">For everyone who presents</h2>
              </TextReveal>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {personas.map((p, i) => {
                const Icon = p.icon;
                return (
                  <RevealAnimation
                    key={p.label}
                    delay={0.1 * (i + 1)}
                    asChild={false}
                    className="border border-stroke-3 rounded-2xl bg-white p-6 space-y-4"
                  >
                    <div className={`${p.bg} flex size-11 items-center justify-center rounded-xl`}>
                      <Icon style={{ color: p.accent }} className="size-5" />
                    </div>
                    <div className="space-y-2">
                      <div className={`inline-flex rounded-xl px-2.5 py-1 ${p.bg}`}>
                        <span className="text-[12px] font-semibold" style={{ color: p.accent }}>
                          {p.label}
                        </span>
                      </div>
                      <h3 className="text-heading-6 text-secondary">{p.headline}</h3>
                      <p className="text-[13px] text-secondary/60 leading-relaxed">{p.body}</p>
                    </div>
                    <ul className="space-y-1.5">
                      {p.items.map(item => (
                        <li key={item} className="flex items-center gap-x-2">
                          <span
                            className="size-1.5 rounded-full shrink-0"
                            style={{ background: p.accent }}
                          />
                          <span className="text-[12px] text-secondary/65">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </RevealAnimation>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 10. PRICING ══════════════════════════════════ */}
      <PricingTeaser />
    </>
  );
};

export default AiPresentationMaker;
