import PricingTeaser from '@/src/components/home/pricing-teaser';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import {
  AlertTriangle,
  BookMarked,
  BookOpen,
  CheckCircle2,
  Download,
  FileSearch,
  FileText,
  Globe,
  GraduationCap,
  Languages,
  Lock,
  Microscope,
  PenLine,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

/* ─── Hero mock ─────────────────────────────────────────── */
function HeroPlagiarismMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-[12px]">
      {/* Title bar */}
      <div className="flex items-center gap-x-1.5 border-b border-white/10 bg-white/5 px-4 py-3">
        <span className="size-2.5 rounded-full bg-red-500/70" />
        <span className="size-2.5 rounded-full bg-yellow-500/70" />
        <span className="size-2.5 rounded-full bg-green-500/70" />
        <span className="ml-3 text-[11px] text-white/30">Nexus AI · Plagiarism Checker</span>
        <span className="ml-auto flex items-center gap-x-1 text-[10px]">
          <CheckCircle2 className="size-3 text-green-400" />
          <span className="text-white/30">Check complete</span>
        </span>
      </div>

      {/* Main content */}
      <div className="flex gap-x-4 p-4">
        {/* Document text */}
        <div className="min-w-0 flex-1 space-y-2">
          <p className="mb-2 text-[9px] uppercase tracking-wider text-white/30">Your document</p>
          <div className="rounded-lg px-3 py-2 text-[10px] leading-relaxed text-white/40">
            Artificial intelligence has transformed the modern workplace, enabling automation of
            repetitive tasks and improving decision-making across industries.
          </div>
          <div className="rounded-lg border border-yellow-400/30 bg-yellow-400/15 px-3 py-2 text-[10px] leading-relaxed text-white/75">
            Remote work has been shown to increase productivity by 13% in various studies
            conducted at major universities.
            <div className="mt-1.5 flex items-center justify-between">
              <span className="text-[9px] text-yellow-400/80">Stanford University · 94% match</span>
              <span className="cursor-pointer rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[8px] text-white/45">
                Fix ↗
              </span>
            </div>
          </div>
          <div className="rounded-lg px-3 py-2 text-[10px] leading-relaxed text-white/40">
            Companies that adopt AI tools report significant reductions in operational costs while
            simultaneously improving output quality.
          </div>
        </div>

        {/* Score panel */}
        <div className="flex w-28 shrink-0 flex-col items-center gap-y-3">
          <div className="relative flex size-20 items-center justify-center">
            <svg className="absolute inset-0 size-full" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="34" stroke="rgba(255,255,255,0.1)" strokeWidth="7" fill="none" />
              <circle
                cx="40"
                cy="40"
                r="34"
                stroke="#22c55e"
                strokeWidth="7"
                fill="none"
                strokeDasharray="213.6"
                strokeDashoffset="26"
                strokeLinecap="round"
                transform="rotate(-90 40 40)"
              />
            </svg>
            <div className="z-10 text-center">
              <p className="text-[17px] font-bold text-white">87%</p>
              <p className="text-[8px] text-white/40">Original</p>
            </div>
          </div>

          <div className="w-full space-y-1.5">
            {[
              { label: 'Internet', pct: 9, bar: 45, color: 'bg-yellow-400' },
              { label: 'Academic', pct: 4, bar: 20, color: 'bg-orange-400' },
              { label: 'AI signals', pct: 0, bar: 0, color: 'bg-blue-400' },
            ].map((row) => (
              <div key={row.label}>
                <div className="mb-0.5 flex items-center justify-between">
                  <span className="text-[9px] text-white/35">{row.label}</span>
                  <span className="text-[9px] text-white/50">{row.pct}%</span>
                </div>
                <div className="h-1 rounded-full bg-white/10">
                  <div className={`h-1 rounded-full ${row.color}`} style={{ width: `${row.bar}%` }} />
                </div>
              </div>
            ))}
          </div>

          <span className="rounded-full border border-green-400/30 bg-green-400/15 px-2.5 py-0.5 text-[9px] text-green-400">
            ✓ Excellent
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between border-t border-white/10 bg-white/3 px-4 py-2">
        <span className="text-[10px] text-white/30">1 flagged · checked in 4.1s</span>
        <span className="flex cursor-pointer items-center gap-x-1 rounded-full border border-white/15 bg-white/8 px-2.5 py-1 text-[10px] text-white/45">
          <Download className="size-3" />
          Export PDF
        </span>
      </div>
    </div>
  );
}

/* ─── Inline fix mock ──────────────────────────────────── */
function FixMock() {
  return (
    <div className="space-y-4 rounded-2xl border border-stroke-3 bg-white p-5 md:p-6">
      <div className="flex items-center gap-x-2">
        <span className="size-2 rounded-full bg-yellow-400" />
        <p className="text-[11px] font-semibold uppercase tracking-wider text-secondary/40">Flagged sentence</p>
      </div>
      <div className="rounded-xl border border-yellow-200 bg-yellow-50 px-4 py-3 text-[13px] leading-relaxed text-secondary/80">
        &ldquo;Remote work has been shown to increase productivity by 13% in various studies.&rdquo;
      </div>

      <div className="flex items-center gap-x-2">
        <span className="size-2 rounded-full bg-secondary/20" />
        <p className="text-[11px] font-semibold uppercase tracking-wider text-secondary/40">Matched source</p>
      </div>
      <div className="rounded-xl bg-background-13 px-4 py-3 text-[12px] text-secondary/60">
        Bloom, N. et al. (2015). Does Working from Home Work?{' '}
        <em>Quarterly Journal of Economics.</em> Stanford GSB · 94% match
      </div>

      <div className="flex items-center gap-x-2">
        <Sparkles className="size-3.5 shrink-0" style={{ color: 'var(--color-gradient-logo)' }} />
        <p className="text-[11px] font-semibold uppercase tracking-wider text-secondary/40">Nexus AI rewrite</p>
      </div>
      <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-[13px] leading-relaxed text-secondary/80">
        &ldquo;A landmark Stanford study found a 13% productivity gain among remote call-centre
        workers (Bloom et al., 2015) — a result since replicated across broader knowledge-work
        contexts.&rdquo;
      </div>

      <p className="text-[11px] text-secondary/40">
        Your originality score updates live as you apply suggestions.
      </p>
    </div>
  );
}

/* ─── Access mock ──────────────────────────────────────── */
function AccessMock() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {/* Essay Writer */}
      <div className="space-y-3 rounded-2xl border border-stroke-3 bg-white p-5">
        <div className="flex items-center gap-x-2">
          <div className="flex size-8 items-center justify-center rounded-xl bg-[#217bfe]/10">
            <PenLine className="size-4 text-[#217bfe]" />
          </div>
          <p className="text-[14px] font-semibold text-secondary">Essay Writer</p>
        </div>
        <div className="space-y-2 rounded-lg bg-background-13 p-3 text-[11px]">
          <p className="text-secondary/50">Your draft</p>
          <div className="rounded-lg border border-stroke-3 bg-white px-3 py-2.5 text-[11px] leading-relaxed text-secondary/70">
            ...remote work has been shown to increase productivity by 13% in various studies...
          </div>
          <div className="flex items-start gap-x-1.5 rounded-lg border border-yellow-200 bg-yellow-50 px-3 py-2 text-[10px] text-yellow-700">
            <AlertTriangle className="mt-0.5 size-3 shrink-0" />
            1 sentence flagged — click to review
          </div>
        </div>
        <p className="text-[12px] text-secondary/50">
          Check originality while you write — one click from inside Essay Writer.
        </p>
      </div>

      {/* Academic Research */}
      <div className="space-y-3 rounded-2xl border border-stroke-3 bg-white p-5">
        <div className="flex items-center gap-x-2">
          <div className="flex size-8 items-center justify-center rounded-xl bg-[#ac87eb]/15">
            <BookOpen className="size-4 text-[#ac87eb]" />
          </div>
          <p className="text-[14px] font-semibold text-secondary">Academic Research</p>
        </div>
        <div className="space-y-2 rounded-lg bg-background-13 p-3 text-[11px]">
          <p className="text-secondary/50">Research workflow</p>
          <div className="space-y-1.5 pt-0.5">
            {[
              { label: 'Find sources', done: true, active: false },
              { label: 'Draft with AI', done: true, active: false },
              { label: 'Check originality', done: false, active: true },
              { label: 'Submit', done: false, active: false },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center gap-x-2">
                <div
                  className={`flex size-5 shrink-0 items-center justify-center rounded-full text-[9px] font-semibold ${
                    step.done
                      ? 'bg-green-100 text-green-700'
                      : step.active
                      ? 'bg-[#ac87eb]/20 text-[#8a60cc]'
                      : 'border border-stroke-3 text-secondary/30'
                  }`}
                >
                  {step.done ? '✓' : i + 1}
                </div>
                <span
                  className={`text-[10px] ${
                    step.done
                      ? 'text-secondary/60'
                      : step.active
                      ? 'font-semibold text-secondary'
                      : 'text-secondary/30'
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-[12px] text-secondary/50">
          Built into the Academic Research workflow — runs automatically at step 3.
        </p>
      </div>
    </div>
  );
}

/* ─── Steps ─────────────────────────────────────────────── */
const steps = [
  {
    n: '01',
    title: 'Paste your text or upload a file',
    body: 'Type or paste directly, or upload PDF, DOCX, TXT, or RTF. No reformatting needed — Nexus AI reads your document as-is.',
  },
  {
    n: '02',
    title: 'Nexus AI scans the full database',
    body: 'Every sentence is matched against 99B+ web pages and 200M+ open-access academic papers. AI-generated content is flagged as a separate signal.',
  },
  {
    n: '03',
    title: 'Review and fix inline',
    body: 'Each flagged sentence links to its matched source. Click to rephrase with AI assistance, auto-generate a citation, or dismiss. Score updates live.',
  },
];

/* ─── Feature grid ──────────────────────────────────────── */
const plagiarismFeatures = [
  {
    icon: Globe,
    title: '99B+ web pages',
    desc: 'Continuously-crawled index of the public web, including news, blogs, forums, and static pages.',
    color: '#217bfe',
    bg: 'bg-blue-50',
  },
  {
    icon: BookOpen,
    title: '200M+ academic papers',
    desc: 'Open-access journals, preprints, research repositories, and institutional literature across every discipline.',
    color: '#ac87eb',
    bg: 'bg-purple-50',
  },
  {
    icon: FileSearch,
    title: 'Sentence-level scoring',
    desc: 'Every sentence is individually evaluated — not just a single document-level average. No risky passage goes unnoticed.',
    color: '#ee4d5d',
    bg: 'bg-rose-50',
  },
  {
    icon: Sparkles,
    title: 'AI writing detection',
    desc: 'ChatGPT, Claude, Gemini, and other AI-generated content is flagged as a separate probability signal alongside plagiarism matches.',
    color: '#f59e0b',
    bg: 'bg-amber-50',
  },
  {
    icon: Languages,
    title: '25+ languages',
    desc: 'Works on papers written in English, Spanish, French, German, Chinese, Arabic, Portuguese, and more.',
    color: '#06b6d4',
    bg: 'bg-cyan-50',
  },
  {
    icon: Zap,
    title: 'Results in under 15 seconds',
    desc: 'Full documents scanned and scored in seconds — faster than a manual citation review.',
    color: '#10b981',
    bg: 'bg-emerald-50',
  },
  {
    icon: BookMarked,
    title: 'Auto citation suggestions',
    desc: 'When a match is found, Nexus AI generates the correct citation in APA, MLA, or Chicago format automatically.',
    color: '#8b5cf6',
    bg: 'bg-violet-50',
  },
  {
    icon: FileText,
    title: 'Upload any format',
    desc: 'Paste text directly or upload PDF, DOCX, TXT, and RTF files. No copy-paste errors, no lost formatting.',
    color: '#4c7df0',
    bg: 'bg-indigo-50',
  },
  {
    icon: PenLine,
    title: 'Inline AI rewriting',
    desc: 'Click any flagged sentence to rephrase it in your own voice with AI assistance, without leaving the checker.',
    color: '#f43f5e',
    bg: 'bg-rose-50',
  },
  {
    icon: Download,
    title: 'PDF report export',
    desc: 'Download a full originality report with source links and score breakdown to attach to your submission.',
    color: '#0ea5e9',
    bg: 'bg-sky-50',
  },
  {
    icon: ShieldCheck,
    title: 'Zero data retention',
    desc: 'Your document is processed and immediately discarded — never stored, shared, or used to train AI models.',
    color: '#22c55e',
    bg: 'bg-green-50',
  },
  {
    icon: RefreshCw,
    title: 'Live re-checking',
    desc: 'Edit and re-run the check instantly. Watch your originality score improve in real time as you fix flagged sentences.',
    color: '#84cc16',
    bg: 'bg-lime-50',
  },
];

/* ─── Score ranges ──────────────────────────────────────── */
const scoreRanges = [
  {
    range: '0–10%',
    label: 'Excellent',
    barColor: 'bg-green-500',
    textColor: 'text-green-600',
    dotColor: 'bg-green-500',
    barWidth: '10%',
    note: 'Highly original work. Safe to submit as-is.',
  },
  {
    range: '11–25%',
    label: 'Good',
    barColor: 'bg-green-400',
    textColor: 'text-green-500',
    dotColor: 'bg-green-400',
    barWidth: '25%',
    note: 'Minor matches — likely properly quoted or cited passages.',
  },
  {
    range: '26–40%',
    label: 'Review needed',
    barColor: 'bg-yellow-400',
    textColor: 'text-yellow-600',
    dotColor: 'bg-yellow-400',
    barWidth: '40%',
    note: 'Significant overlap detected. Rephrase or cite flagged sections.',
  },
  {
    range: '41%+',
    label: 'High risk',
    barColor: 'bg-red-500',
    textColor: 'text-red-600',
    dotColor: 'bg-red-500',
    barWidth: '100%',
    note: 'Substantial similarity. Revise thoroughly before submitting.',
  },
];

/* ─── Personas ──────────────────────────────────────────── */
const personas = [
  {
    icon: GraduationCap,
    role: 'Students',
    headline: 'Submit with confidence, every assignment',
    color: '#217bfe',
    points: [
      'Check every draft before hitting submit',
      'Fix flagged sentences without switching tools',
      'Understand which citations you missed',
      'Build good academic habits from day one',
    ],
  },
  {
    icon: Microscope,
    role: 'Researchers',
    headline: 'Publish cleaner, get accepted faster',
    color: '#ac87eb',
    points: [
      'Pre-submission check against published literature',
      'Semantic detection catches accidental paraphrasing',
      'Works across every academic discipline',
      'Export report for journal submission packages',
    ],
  },
  {
    icon: UserCheck,
    role: 'Educators',
    headline: 'Spot issues before they become incidents',
    color: '#ee4d5d',
    points: [
      'Bulk scan batches of student submissions',
      'AI detection sits alongside plagiarism results',
      'PDF reports clearly document findings',
      'Runs in seconds per document',
    ],
  },
  {
    icon: FileText,
    role: 'Content Creators',
    headline: 'Publish original content every time',
    color: '#10b981',
    points: [
      'Check blog posts and articles before publishing',
      'Verify ghostwritten content is fully original',
      'Detect AI-written sections from freelancers',
      "Protect your brand's editorial integrity",
    ],
  },
];

/* ─── FAQ items ─────────────────────────────────────────── */
export const aiPlagiarismCheckerFaqItems = [
  {
    value: 'how-it-works',
    question: 'How does Nexus AI check for plagiarism?',
    answer:
      'Nexus AI compares every sentence in your document against 99 billion web pages and 200 million open-access academic papers using text-matching and semantic-similarity algorithms. Each sentence receives an individual similarity score, and flagged sentences link directly to the matched source so you can review them side by side and decide whether to rephrase, cite, or dismiss.',
  },
  {
    value: 'paraphrase',
    question: 'Does it detect paraphrased plagiarism?',
    answer:
      'Yes. Nexus AI uses semantic-similarity matching — not just exact-string matching — so it can identify paraphrased content where words have been changed but the structure or ideas remain substantially similar to a source. This catches patchwriting and light paraphrasing that traditional keyword-matching tools miss.',
  },
  {
    value: 'ai-detection',
    question: 'Can Nexus AI also detect AI-generated content?',
    answer:
      'Yes. AI writing detection is built into the same report as a clearly separate signal. Nexus AI flags sentences showing strong patterns of AI generation from ChatGPT, Claude, Gemini, and other models. Results are expressed as three probability bands — AI-written, Human-AI blend, and Human-written — rather than a binary yes/no, giving you a nuanced picture of your document\'s authorship.',
  },
  {
    value: 'accuracy',
    question: 'How accurate is the plagiarism checker?',
    answer:
      'Nexus AI benchmarks accuracy against the same broad databases used by leading academic integrity platforms. Sentence-level scoring significantly reduces the risk of missed matches compared to document-level percentage tools. No checker is 100% perfect — highly specialised sources may not yet be indexed, and sophisticated paraphrasing can sometimes evade detection — but Nexus AI gives you the most comprehensive picture available.',
  },
  {
    value: 'privacy',
    question: 'Is my document stored after the check?',
    answer:
      'No. Nexus AI does not retain, store, or share your document after the check completes. Your text is processed transiently and discarded the moment your result is delivered. We do not use your content to train AI models. This applies to all document types — essays, research papers, proprietary reports, and any other content you check.',
  },
  {
    value: 'formats',
    question: 'What file formats and word limits are supported?',
    answer:
      'You can paste text directly or upload PDF, DOCX, TXT, and RTF files. Premium plans support up to 25,000 words per check, with bulk document scanning and large-file support available on Ultimate and team plans.',
  },
  {
    value: 'fix-inline',
    question: 'Can I fix flagged sentences without leaving the checker?',
    answer:
      'Yes. Click any flagged sentence to open the Nexus AI inline rewriting assistant. Ask it to rephrase the sentence in your voice, generate a proper citation in APA, MLA, or Chicago format, or expand the idea differently. Your originality score updates live as you apply edits so you can watch your percentage improve in real time.',
  },
  {
    value: 'plan',
    question: 'Which plan includes the plagiarism checker?',
    answer:
      'The plagiarism checker is available on Premium and Ultimate plans. Premium includes higher word limits per scan, PDF report export, priority processing, and AI writing detection alongside plagiarism results. The checker integrates with Essay Writer and Academic Research on all paid plans.',
  },
];

/* ─── Main component ─────────────────────────────────────── */
const AiPlagiarismChecker = () => {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-secondary pt-[160px] pb-0">
        <div
          className="pointer-events-none absolute -top-20 left-1/2 size-[600px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
          aria-hidden
          style={{ background: 'radial-gradient(circle, #217bfe 0%, transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute -bottom-32 right-8 size-[400px] rounded-full opacity-15 blur-3xl"
          aria-hidden
          style={{ background: 'radial-gradient(circle, #ac87eb 0%, transparent 70%)' }}
        />

        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-14 lg:gap-x-12">
            <div className="col-span-12 space-y-8 lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary className="border-white/20 bg-white/10 text-white/80">
                  AI Plagiarism Checker
                </BadgePrimary>
              </RevealAnimation>
              <div className="space-y-5">
                <TextReveal delay={0.2}>
                  <h1 className="text-white">
                    Submit original work,{' '}
                    <span
                      className="bg-clip-text text-transparent"
                      style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                    >
                      every time
                    </span>
                  </h1>
                </TextReveal>
                <TextReveal delay={0.3}>
                  <p className="max-w-[500px] text-white/60">
                    Paste your text or upload a file and get a sentence-level originality report
                    in seconds. Scans 99B+ web pages and 200M+ academic papers — with AI writing
                    detection built in.
                  </p>
                </TextReveal>
              </div>
              <RevealAnimation delay={0.4} asChild={false} className="flex flex-wrap gap-3">
                <Link href="https://app.mynexusai.com/upgrade/premium">
                  <ButtonPrimary textClassName="text-nowrap">Start with Premium</ButtonPrimary>
                </Link>
                <Link href="/features/essay-writer">
                  <ButtonWhite textClassName="text-nowrap">See Essay Writer</ButtonWhite>
                </Link>
              </RevealAnimation>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.5} direction="right" offset={60}>
                <HeroPlagiarismMock />
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <section className="border-b border-stroke-3 py-10">
        <div className="main-container">
          <RevealAnimation
            delay={0.1}
            asChild={false}
            className="grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {[
              { stat: '99B+', label: 'Web pages indexed' },
              { stat: '200M+', label: 'Academic papers' },
              { stat: '25+', label: 'Languages supported' },
              { stat: '<15s', label: 'Time to results' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-y-1 text-center">
                <span className="text-[28px] font-bold text-secondary md:text-[32px]">
                  {item.stat}
                </span>
                <span className="text-tagline-2 text-secondary/50">{item.label}</span>
              </div>
            ))}
          </RevealAnimation>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="pt-20 md:pt-25 lg:pt-32">
        <div className="main-container">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>How it works</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Three steps to full originality</h2>
              </TextReveal>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {steps.map((step, i) => (
                <RevealAnimation key={step.n} delay={0.1 * (i + 1)} asChild={false}>
                  <div className="space-y-4 rounded-2xl border border-stroke-3 bg-white p-6">
                    <span className="block text-[40px] font-bold leading-none text-stroke-3">
                      {step.n}
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-[16px] font-semibold text-secondary">{step.title}</h3>
                      <p className="text-[13px] leading-relaxed text-secondary/60">{step.body}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Features grid ── */}
      <section className="pt-20 md:pt-25 lg:pt-32">
        <div className="main-container">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>What&apos;s inside</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Everything the check covers</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="mx-auto max-w-[520px] text-secondary/55">
                  One scan. Billions of sources. Sentence-by-sentence results with AI-powered
                  fixes built in.
                </p>
              </TextReveal>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {plagiarismFeatures.map((feat, i) => (
                <RevealAnimation key={feat.title} delay={0.04 * (i + 1)} asChild={false}>
                  <div className="space-y-3 rounded-2xl border border-stroke-3 bg-white p-5">
                    <div
                      className={`flex size-10 items-center justify-center rounded-xl ${feat.bg}`}
                    >
                      <feat.icon className="size-5" style={{ color: feat.color }} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-[14px] font-semibold text-secondary">{feat.title}</h3>
                      <p className="text-[12px] leading-relaxed text-secondary/55">{feat.desc}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Score guide ── */}
      <section className="pt-20 md:pt-25 lg:pt-32">
        <div className="main-container">
          <div className="grid grid-cols-12 gap-y-10 lg:gap-x-16">
            <div className="col-span-12 space-y-5 lg:col-span-5">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Originality score</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>What your score actually means</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="leading-relaxed text-secondary/60">
                  Nexus AI expresses originality as the percentage of your document that is
                  uniquely yours. The lower the similarity, the higher your originality. Every
                  institution sets its own threshold — here is how to read yours.
                </p>
              </RevealAnimation>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <RevealAnimation
                delay={0.3}
                asChild={false}
                className="space-y-6 rounded-2xl border border-stroke-3 bg-white p-6 md:p-8"
              >
                {scoreRanges.map((range) => (
                  <div key={range.range} className="space-y-2">
                    <div className="flex items-center gap-x-2">
                      <span className={`size-2.5 shrink-0 rounded-full ${range.dotColor}`} />
                      <span className={`text-[13px] font-semibold ${range.textColor}`}>
                        {range.range} — {range.label}
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-background-13">
                      <div
                        className={`h-2 rounded-full ${range.barColor}`}
                        style={{ width: range.barWidth }}
                      />
                    </div>
                    <p className="text-[12px] text-secondary/55">{range.note}</p>
                  </div>
                ))}
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI Detection ── */}
      <section className="pt-20 md:pt-25 lg:pt-32">
        <div className="main-container">
          <div className="grid grid-cols-12 gap-y-10 lg:gap-x-16">
            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation
                delay={0.2}
                asChild={false}
                className="space-y-5 rounded-2xl border border-stroke-3 bg-white p-6 md:p-8"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wider text-secondary/40">
                  AI Detection result
                </p>

                {[
                  { label: 'Human-written', pct: 74, barColor: 'bg-green-500', textColor: 'text-green-700' },
                  { label: 'Human-AI blend', pct: 20, barColor: 'bg-yellow-400', textColor: 'text-yellow-700' },
                  { label: 'AI-written', pct: 6, barColor: 'bg-red-400', textColor: 'text-red-700' },
                ].map((band) => (
                  <div key={band.label} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className={`text-[13px] font-medium ${band.textColor}`}>
                        {band.label}
                      </span>
                      <span className="text-[13px] text-secondary/60">{band.pct}%</span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-background-13">
                      <div
                        className={`h-2.5 rounded-full ${band.barColor}`}
                        style={{ width: `${band.pct}%` }}
                      />
                    </div>
                  </div>
                ))}

                <div className="rounded-xl border border-yellow-200 bg-yellow-50 px-4 py-3 text-[12px] text-yellow-700">
                  2 sentences show strong AI writing patterns. Click to review and rephrase in
                  your own voice.
                </div>
              </RevealAnimation>
            </div>

            <div className="col-span-12 space-y-5 lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Also detects AI writing</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Plagiarism and AI writing, one scan</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="leading-relaxed text-secondary/60">
                  Traditional plagiarism checkers stop at copy-paste matches. Nexus AI also
                  detects AI-generated content — ChatGPT, Claude, Gemini, and other models — as a
                  separate probability signal alongside your plagiarism results.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="leading-relaxed text-secondary/60">
                  Results are expressed as three bands — Human-written, Human-AI blend, and
                  AI-written — rather than a binary flag, giving you an honest, nuanced picture
                  of your document&apos;s authorship before you submit.
                </p>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fix inline ── */}
      <section className="pt-20 md:pt-25 lg:pt-32">
        <div className="main-container">
          <div className="grid grid-cols-12 gap-y-10 lg:gap-x-16">
            <div className="col-span-12 space-y-5 lg:col-span-5">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Inline rewriting</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Fix flagged sentences without leaving the checker</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="leading-relaxed text-secondary/60">
                  Click any flagged sentence to open Nexus AI&apos;s inline rewriting assistant.
                  Ask it to rephrase in your voice, auto-generate a proper citation, or expand
                  the idea differently. Your originality score updates live as you apply edits.
                </p>
              </RevealAnimation>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <RevealAnimation delay={0.3} direction="right" offset={60}>
                <FixMock />
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ── Where to access ── */}
      <section className="pt-20 md:pt-25 lg:pt-32">
        <div className="main-container">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Where to find it</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Already inside your writing workflow</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="mx-auto max-w-[480px] text-secondary/55">
                  Check originality from inside Essay Writer as you draft, or run a final
                  standalone check before you submit.
                </p>
              </TextReveal>
            </div>
            <RevealAnimation delay={0.2} asChild={false}>
              <AccessMock />
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ── Personas ── */}
      <section className="pt-20 md:pt-25 lg:pt-32">
        <div className="main-container">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Who uses it</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Built for anyone who publishes words</h2>
              </TextReveal>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {personas.map((persona, i) => (
                <RevealAnimation key={persona.role} delay={0.1 * (i + 1)} asChild={false}>
                  <div className="space-y-4 rounded-2xl border border-stroke-3 bg-white p-6">
                    <div
                      className="flex size-10 items-center justify-center rounded-xl"
                      style={{ background: `${persona.color}18` }}
                    >
                      <persona.icon className="size-5" style={{ color: persona.color }} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-secondary/40">
                        {persona.role}
                      </p>
                      <h3 className="text-[15px] font-semibold leading-snug text-secondary">
                        {persona.headline}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {persona.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-x-2">
                          <span
                            className="mt-1.5 size-1.5 shrink-0 rounded-full"
                            style={{ background: persona.color }}
                          />
                          <span className="text-[12px] leading-relaxed text-secondary/60">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Privacy callout ── */}
      <section className="pt-20 md:pt-25 lg:pt-32">
        <div className="main-container">
          <RevealAnimation
            delay={0.2}
            asChild={false}
            className="relative overflow-hidden rounded-3xl bg-secondary px-8 py-12 text-center md:px-14 md:py-16"
          >
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden
              style={{
                background:
                  'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(33,123,254,0.2) 0%, transparent 80%)',
              }}
            />
            <div className="relative z-10 space-y-6">
              <div className="flex justify-center">
                <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                  <Lock className="size-6 text-white/70" />
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-white">Your work stays yours</h2>
                <p className="mx-auto max-w-[560px] text-white/60">
                  Nexus AI does not store, share, or train AI models on any document you check.
                  Your text is processed transiently and discarded the moment your result is
                  delivered. Every check is private by design.
                </p>
              </div>
              <RevealAnimation
                delay={0.3}
                asChild={false}
                className="flex flex-wrap items-center justify-center gap-3"
              >
                {[
                  'Zero data retention',
                  'End-to-end processing',
                  'No AI training on your content',
                  'ISO-certified infrastructure',
                ].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[12px] font-medium text-white/60"
                  >
                    {badge}
                  </span>
                ))}
              </RevealAnimation>
              <div className="mt-2 flex justify-center">
                <Link href="https://app.mynexusai.com/upgrade/premium">
                  <ButtonWhite textClassName="text-nowrap">Start with Premium</ButtonWhite>
                </Link>
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

export default AiPlagiarismChecker;
