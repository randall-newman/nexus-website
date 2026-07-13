import PricingTeaser from '@/src/components/home/pricing-teaser';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { CheckIcon } from '@/src/components/shared/icon';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import {
  BookOpen,
  CheckCircle,
  FileSearch,
  FileText,
  GraduationCap,
  Link2,
  Quote,
  Search,
  Sparkles,
  Users,
} from 'lucide-react';
import Link from 'next/link';

/* ─── Hero research demo ────────────────────────────── */
function HeroResearchMock() {
  const sources = [
    { name: 'Nature',   color: '#4c7df0' },
    { name: 'PubMed',  color: '#ac87eb' },
    { name: 'Science', color: '#217bfe' },
    { name: 'Lancet',  color: '#ee4d5d' },
    { name: 'NEJM',    color: '#078efb' },
  ];
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden text-[12px]">
      {/* Chrome */}
      <div className="flex items-center gap-x-1.5 border-b border-white/10 px-4 py-3 bg-white/5">
        <span className="size-2.5 rounded-full bg-red-500/70" />
        <span className="size-2.5 rounded-full bg-yellow-500/70" />
        <span className="size-2.5 rounded-full bg-green-500/70" />
        <span className="ml-3 text-[11px] text-white/30">Nexus AI Academic Research</span>
        <span className="ml-auto text-[10px] text-white/20">Research Mode</span>
      </div>
      <div className="p-4 space-y-3">
        {/* Query */}
        <div className="flex justify-end">
          <div className="bg-white/15 text-white/80 rounded-xl rounded-br-sm px-3 py-2 max-w-[85%] leading-relaxed">
            What does the latest research say about sleep deprivation and cognitive performance?
          </div>
        </div>
        {/* Sources */}
        <div className="flex flex-wrap gap-1.5 pl-1">
          {sources.map(s => (
            <span key={s.name} className="flex items-center gap-x-1 rounded-full bg-white/10 border border-white/10 px-2.5 py-1 text-[10px]">
              <span className="size-1.5 rounded-full" style={{ background: s.color }} />
              <span className="text-white/60">{s.name}</span>
            </span>
          ))}
        </div>
        {/* Answer */}
        <div className="rounded-xl bg-white/8 border border-white/10 p-3 space-y-2 leading-relaxed text-white/65">
          <p>
            A systematic review of 47 studies (Zhang et al., 2024)
            <span className="inline-flex items-center rounded bg-[#4c7df0]/30 border border-[#4c7df0]/40 px-1 text-[9px] text-[#8ab0f5] font-semibold mx-0.5">[1]</span>
            found that adults sleeping fewer than 6 hours showed a 23% reduction in cognitive performance scores. Neuroimaging studies confirm reduced prefrontal cortex activation
            <span className="inline-flex items-center rounded bg-[#ac87eb]/30 border border-[#ac87eb]/40 px-1 text-[9px] text-[#c4a8f0] font-semibold mx-0.5">[2]</span>
            . Walker &amp; Stickgold (2023)
            <span className="inline-flex items-center rounded bg-[#217bfe]/30 border border-[#217bfe]/40 px-1 text-[9px] text-[#8ab0f5] font-semibold mx-0.5">[3]</span>
            describe the consolidation-retrieval model, where REM sleep is critical for memory formation.
          </p>
        </div>
        {/* Citations */}
        <div className="space-y-1 text-[10px] text-white/40 border-t border-white/10 pt-2">
          <p>[1] Zhang et al. (2024). <em>Nature</em>, 32(4), 112-128.</p>
          <p>[2] Kumar &amp; Lee (2023). <em>PubMed Central</em>.</p>
          <p>[3] Walker &amp; Stickgold (2023). <em>Science</em>, 381(6), 998-1002.</p>
        </div>
      </div>
    </div>
  );
}

/* ─── PDF Chat mock ─────────────────────────────────── */
function PdfChatMock() {
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden">
      <div className="border-b border-stroke-3 bg-background-13 px-4 py-3 flex items-center gap-x-2">
        <FileSearch className="size-4 text-secondary/40" />
        <span className="text-[13px] font-medium text-secondary">File Chat</span>
        <span className="ml-auto text-[11px] text-secondary/40">3 papers loaded</span>
      </div>
      <div className="p-3 space-y-2">
        {/* Loaded papers */}
        {[
          { name: 'Zhang_2024_Sleep_Cognition.pdf',   pages: '14 pages', color: 'text-red-400' },
          { name: 'Walker_Stickgold_2023.pdf',         pages: '9 pages',  color: 'text-blue-500' },
          { name: 'Kumar_Lee_2023_Neuroimaging.pdf',   pages: '22 pages', color: 'text-purple-500' },
        ].map(f => (
          <div key={f.name} className="flex items-center gap-x-2 rounded-lg bg-background-13 border border-stroke-3 px-3 py-2">
            <FileText className={`size-4 shrink-0 ${f.color}`} />
            <span className="text-[12px] text-secondary flex-1 truncate">{f.name}</span>
            <span className="text-[10px] text-secondary/35 shrink-0">{f.pages}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-stroke-3 p-3 space-y-2 text-[11px]">
        <div className="flex justify-end">
          <div className="bg-secondary text-white rounded-xl rounded-br-sm px-3 py-2 max-w-[80%] leading-relaxed">
            Do all three papers agree on the minimum sleep duration needed for optimal cognition?
          </div>
        </div>
        <div className="flex gap-x-1.5 items-end">
          <div className="size-5 rounded-full bg-secondary shrink-0 flex items-center justify-center">
            <Sparkles className="size-2.5 text-white" />
          </div>
          <div className="bg-background-13 rounded-xl rounded-bl-sm border border-stroke-3 px-3 py-2 max-w-[82%] text-secondary/70 leading-relaxed space-y-1.5">
            <p>All three papers identify 7-9 hours as optimal, but differ on methodology:</p>
            <div className="space-y-1">
              {[
                { label: 'Zhang [p.4]',   note: 'Cognitive tests across 47 studies' },
                { label: 'Walker [p.2]',  note: 'REM cycle measurement' },
                { label: 'Kumar [p.8]',   note: 'fMRI brain activity scans' },
              ].map(s => (
                <div key={s.label} className="flex gap-x-1.5">
                  <span className="font-semibold text-secondary/70 shrink-0">{s.label}:</span>
                  <span className="text-secondary/50">{s.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Literature review mock ────────────────────────── */
function LitReviewMock() {
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden">
      <div className="border-b border-stroke-3 bg-background-13 px-4 py-3 flex items-center gap-x-2">
        <BookOpen className="size-4 text-secondary/40" />
        <span className="text-[13px] font-medium text-secondary">Literature Review</span>
        <span className="ml-auto text-[11px] text-secondary/40">12 sources synthesised</span>
      </div>
      <div className="p-4 space-y-4 text-[12px]">
        {/* Section preview */}
        {[
          {
            heading: '2.1 Theoretical Framework',
            lines: [92, 85, 78, 88, 70],
            citations: ['[1]', '[3]', '[5]'],
          },
          {
            heading: '2.2 Prior Studies',
            lines: [80, 90, 75, 85],
            citations: ['[2]', '[4]', '[7]', '[9]'],
          },
          {
            heading: '2.3 Research Gaps',
            lines: [88, 72, 65],
            citations: ['[6]', '[11]'],
          },
        ].map((section, i) => (
          <div key={section.heading} className={`space-y-2 ${i > 0 ? 'border-t border-stroke-3 pt-3' : ''}`}>
            <div className="flex items-center gap-x-2">
              <p className="text-[12px] font-semibold text-secondary">{section.heading}</p>
              <div className="flex gap-x-1">
                {section.citations.map(c => (
                  <span key={c} className="rounded bg-blue-50 border border-blue-200/50 px-1 text-[9px] text-blue-600 font-semibold">{c}</span>
                ))}
              </div>
            </div>
            {section.lines.map((w, j) => (
              <div key={j} className="h-1.5 rounded-full bg-secondary/10" style={{ width: `${w}%` }} />
            ))}
          </div>
        ))}
        {/* Actions */}
        <div className="flex items-center gap-x-2 border-t border-stroke-3 pt-3">
          <span className="text-[10px] text-secondary/40 flex-1">12 of 12 sources cited</span>
          <span className="rounded-lg border border-stroke-3 px-2.5 py-1 text-[11px] text-secondary/50 cursor-default">Expand</span>
          <span className="rounded-lg px-2.5 py-1 text-[11px] text-white font-semibold cursor-default" style={{ background: 'var(--color-gradient-logo)' }}>Export DOCX</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Citation generator mock ───────────────────────── */
function CitationMock() {
  const styles = ['APA 7', 'MLA 9', 'Chicago', 'Harvard', 'Vancouver', 'IEEE', 'Oxford', 'AMA'];
  const outputs: Record<string, string> = {
    'APA 7':    'Zhang, L., Wang, M., & Chen, R. (2024). Sleep deprivation and prefrontal cortex activity. <em>Nature Neuroscience</em>, <em>32</em>(4), 112–128. https://doi.org/10.1038/nn.2024',
    'MLA 9':    'Zhang, Li, et al. "Sleep Deprivation and Prefrontal Cortex Activity." <em>Nature Neuroscience</em>, vol. 32, no. 4, 2024, pp. 112–128.',
    'Chicago':  'Zhang, Li, Ming Wang, and Rui Chen. "Sleep Deprivation and Prefrontal Cortex Activity." <em>Nature Neuroscience</em> 32, no. 4 (2024): 112–128.',
    'Harvard':  'Zhang, L., Wang, M. and Chen, R. (2024) "Sleep deprivation and prefrontal cortex activity," <em>Nature Neuroscience</em>, 32(4), pp. 112–128.',
  };
  const activeStyle = 'APA 7';
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden">
      <div className="border-b border-stroke-3 bg-background-13 px-4 py-3 flex items-center gap-x-2">
        <Quote className="size-4 text-secondary/40" />
        <span className="text-[13px] font-medium text-secondary">Citation Generator</span>
      </div>
      <div className="p-4 space-y-4">
        {/* Input */}
        <div className="rounded-xl border border-stroke-3 bg-background-13 px-3 py-2.5 text-[12px]">
          <p className="text-[10px] text-secondary/40 mb-1">Paper URL or DOI</p>
          <p className="text-secondary/60">doi.org/10.1038/nn.2024</p>
        </div>
        {/* Style selector */}
        <div className="flex flex-wrap gap-1.5">
          {styles.map(s => (
            <span key={s} className={`rounded-full border px-3 py-1 text-[11px] font-medium cursor-default ${s === activeStyle ? 'bg-secondary text-white border-secondary' : 'border-stroke-3 text-secondary/50 bg-background-13'}`}>{s}</span>
          ))}
        </div>
        {/* Output */}
        <div className="rounded-xl bg-[#f4f2fe] border border-[#ac87eb]/20 p-3 text-[12px] leading-relaxed text-secondary/70">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[#7458e8] mb-2">APA 7th Edition</p>
          <p dangerouslySetInnerHTML={{ __html: outputs[activeStyle] }} />
        </div>
        <div className="flex gap-x-2">
          <button type="button" className="flex-1 rounded-lg border border-stroke-3 py-2 text-[12px] font-medium text-secondary/60">Copy</button>
          <button type="button" className="flex-1 rounded-lg border border-stroke-3 py-2 text-[12px] font-medium text-secondary/60">Add to library</button>
          <button type="button" className="flex-1 rounded-lg py-2 text-[12px] font-semibold text-white" style={{ background: 'var(--color-gradient-logo)' }}>Insert</button>
        </div>
      </div>
    </div>
  );
}

/* ─── Plagiarism checker mock ───────────────────────── */
function PlagiarismMock() {
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden">
      <div className="border-b border-stroke-3 bg-background-13 px-4 py-3 flex items-center gap-x-2">
        <FileSearch className="size-4 text-secondary/40" />
        <span className="text-[13px] font-medium text-secondary">Plagiarism Checker</span>
        <span className="ml-auto text-[10px] text-secondary/40">Checking against 200M+ sources</span>
      </div>
      <div className="p-4 space-y-4">
        {/* Score ring */}
        <div className="flex items-center gap-x-5">
          <div className="relative shrink-0">
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="34" fill="none" stroke="#f0f4f8" strokeWidth="8" />
              <circle cx="40" cy="40" r="34" fill="none" stroke="#22c55e" strokeWidth="8"
                strokeDasharray="213.6" strokeDashoffset="17" strokeLinecap="round"
                transform="rotate(-90 40 40)" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[18px] font-black text-secondary leading-none">92%</span>
              <span className="text-[9px] text-secondary/40 leading-tight">Original</span>
            </div>
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-x-2">
              <span className="size-2 rounded-full bg-green-400 shrink-0" />
              <span className="text-[13px] text-secondary font-semibold">92% original content</span>
            </div>
            <div className="flex items-center gap-x-2">
              <span className="size-2 rounded-full bg-amber-400 shrink-0" />
              <span className="text-[13px] text-secondary/60">6% similar phrasing (cited)</span>
            </div>
            <div className="flex items-center gap-x-2">
              <span className="size-2 rounded-full bg-red-400 shrink-0" />
              <span className="text-[13px] text-secondary/60">2% matches found</span>
            </div>
          </div>
        </div>
        {/* Match detail */}
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-secondary/40">Matches found</p>
          {[
            { source: 'Zhang et al. (2024) · Nature', pct: '2%', status: 'Cited', statusColor: 'bg-green-50 text-green-600 border-green-200/60' },
            { source: 'Walker & Stickgold (2023) · Science', pct: '4%', status: 'Cited', statusColor: 'bg-green-50 text-green-600 border-green-200/60' },
            { source: 'WebMD article · webmd.com', pct: '1%', status: 'Review', statusColor: 'bg-amber-50 text-amber-600 border-amber-200/60' },
          ].map(m => (
            <div key={m.source} className="flex items-center gap-x-3 rounded-lg border border-stroke-3 bg-background-13 px-3 py-2">
              <span className="flex-1 text-[12px] text-secondary/65 truncate">{m.source}</span>
              <span className="text-[11px] font-medium text-secondary/40 shrink-0">{m.pct}</span>
              <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold shrink-0 ${m.statusColor}`}>{m.status}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-x-2 rounded-xl bg-green-50 border border-green-200/60 px-3 py-2.5">
          <CheckCircle className="size-4 text-green-500 shrink-0" />
          <p className="text-[12px] text-green-700 font-medium">All matches are properly cited. Safe to submit.</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Personas ───────────────────────────────────────── */
const personas = [
  {
    icon: GraduationCap,
    label: 'Undergraduates',
    headline: 'Essays and assignments with real citations',
    body: 'Research a topic, upload your reading list, get a cited draft, then check originality before you hand it in.',
    accent: '#217bfe', bg: 'bg-blue-50',
    items: ['Cited essay drafts', 'Lecture note summaries', 'Exam preparation', 'Plagiarism check before submission'],
  },
  {
    icon: Search,
    label: 'PhD Candidates',
    headline: 'Literature reviews across hundreds of papers',
    body: 'Upload your full reference library, ask cross-paper questions and generate structured literature review sections with every claim sourced.',
    accent: '#ac87eb', bg: 'bg-purple-50',
    items: ['Systematic literature review', 'Cross-paper synthesis', 'Thesis chapter drafting', 'Citation management'],
  },
  {
    icon: BookOpen,
    label: 'Researchers',
    headline: 'Rapid synthesis of multi-source evidence',
    body: 'Search academic databases in real time, compare findings across studies and generate a structured analysis with every source verifiable.',
    accent: '#ee4d5d', bg: 'bg-rose-50',
    items: ['Systematic reviews', 'Meta-analysis support', 'Grant proposal drafts', 'Real-time database search'],
  },
  {
    icon: Users,
    label: 'Educators',
    headline: 'Course material and lecture prep at speed',
    body: 'Build lecture notes, discussion questions and reading guides from academic sources. Every claim backed by a real reference.',
    accent: '#078efb', bg: 'bg-sky-50',
    items: ['Lecture notes from sources', 'Discussion question sets', 'Reading guide creation', 'Curriculum research'],
  },
];

/* ─── FAQ data ───────────────────────────────────────── */
export const academicResearchFaqItems = [
  {
    value: 'citation-styles',
    question: 'Which citation styles does Nexus AI support?',
    answer:
      'Nexus AI supports APA 7th Edition, MLA 9th Edition, Chicago, Turabian, Harvard, Vancouver, IEEE, Oxford, AMA and more. Citations are generated automatically from the sources you upload or from DOI and URL lookups.',
  },
  {
    value: 'upload-sources',
    question: 'Can I upload my own research papers and PDFs?',
    answer:
      'Yes. Upload any number of PDFs, journal articles or notes and Nexus AI reads across all of them. Ask questions, request summaries or generate cited paragraphs from your specific uploaded sources rather than the AI training data.',
  },
  {
    value: 'multiple-papers',
    question: 'Can it synthesise findings across multiple papers at once?',
    answer:
      'Yes. Upload five, ten or fifty papers and ask a single question. Nexus AI identifies where each paper agrees, where they differ and which paper the claim comes from, with page-level citations.',
  },
  {
    value: 'plagiarism-checker',
    question: 'How does the plagiarism checker work?',
    answer:
      'The plagiarism checker compares your submitted text against over 200 million academic and web sources. It identifies matching passages, shows the source and percentage match, and distinguishes between properly cited matches and uncited similarities that need review.',
  },
  {
    value: 'real-time-search',
    question: 'Does Nexus AI search live academic databases?',
    answer:
      'Yes. Research Mode searches academic databases, preprint servers and peer-reviewed journals in real time. It is not limited to training data. Results include recent publications, and every claim is linked to a live source.',
  },
  {
    value: 'academic-integrity',
    question: 'Does this compromise academic integrity?',
    answer:
      'Nexus AI is designed to support your research, not replace your thinking. It helps you find and organise sources, generate properly cited drafts and check originality. This is the same workflow as a well-structured literature review. How you use the output is governed by your institution\'s policies, which vary. We recommend using the built-in plagiarism checker before any submission.',
  },
  {
    value: 'literature-review',
    question: 'Can it write a literature review?',
    answer:
      'Yes. Upload your reference library and Nexus AI structures a literature review with themed sections (theoretical framework, prior studies, research gaps), with every paragraph citing specific papers. You can then edit inline or ask it to expand any section.',
  },
  {
    value: 'file-formats',
    question: 'What file formats can I upload?',
    answer:
      'PDF, DOCX, TXT, and Markdown files. You can also paste raw text or provide a URL or DOI and Nexus AI will fetch the source automatically. Multiple files can be uploaded to a single Folder and queried together.',
  },
];

/* ─── Main component ─────────────────────────────────── */
const AcademicResearch = () => {
  return (
    <>
      {/* ══ 1. HERO ══════════════════════════════════════ */}
      <section className="bg-secondary overflow-hidden pt-[160px] pb-0">
        <div className="main-container">
          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text */}
            <div className="space-y-6 pb-14">
              <RevealAnimation delay={0.1}>
                <span
                  className="inline-flex items-center gap-x-2 rounded-full px-4 py-1.5 text-[13px] font-semibold text-white"
                  style={{ background: 'rgba(255,255,255,0.12)' }}
                >
                  <GraduationCap className="size-3.5" />
                  AI Academic Research
                </span>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h1 className="text-white leading-[1.1]">
                  Research that{' '}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                  >
                    cites itself.
                  </span>
                </h1>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-white/60 text-lg leading-relaxed">
                  Upload your papers, search academic databases in real time and get cited
                  summaries, literature reviews and essay drafts, with every claim linked to
                  a source you can verify.
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

            {/* Research demo */}
            <RevealAnimation delay={0.4} asChild={false} className="pb-0">
              <HeroResearchMock />
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ══ 2. STATS ═════════════════════════════════════ */}
      <section className="border-b border-stroke-3 bg-white">
        <div className="main-container">
          <div className="grid grid-cols-3 divide-x divide-stroke-3">
            {[
              { stat: '200M+', label: 'Academic sources indexed' },
              { stat: '8+',    label: 'Citation styles supported' },
              { stat: '5.2 hrs', label: 'Saved per research paper' },
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

      {/* ══ 3. HOW IT WORKS ══════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-5 text-center mb-12">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>How it works</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2 className="text-secondary">From sources to submission in five steps</h2>
            </TextReveal>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { step: '01', icon: Search,    title: 'Search',   body: 'Search 200M+ academic sources in real time or upload your own papers.', accent: '#217bfe', bg: 'bg-blue-50' },
              { step: '02', icon: FileText,  title: 'Upload',   body: 'Add PDFs, articles and notes. Ask questions across all of them at once.', accent: '#ac87eb', bg: 'bg-purple-50' },
              { step: '03', icon: Quote,     title: 'Synthesise', body: 'Get cited summaries, literature reviews and essay paragraphs from your sources.', accent: '#078efb', bg: 'bg-sky-50' },
              { step: '04', icon: FileSearch, title: 'Check',   body: 'Run the plagiarism checker against 200M+ sources before submission.', accent: '#ee4d5d', bg: 'bg-rose-50' },
              { step: '05', icon: Link2,     title: 'Export',   body: 'Download your paper in DOCX or PDF with all citations formatted and complete.', accent: '#4c7df0', bg: 'bg-indigo-50' },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <RevealAnimation
                  key={s.step}
                  delay={0.1 * (i + 1)}
                  asChild={false}
                  className="border border-stroke-3 rounded-2xl bg-white p-6 space-y-4 relative"
                >
                  <span className="absolute top-4 right-4 text-[36px] font-black text-secondary/5 leading-none select-none">{s.step}</span>
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

      {/* ══ 4. PDF CHAT ══════════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>File Chat</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Ask questions across all your papers at once</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  Upload your full reading list and interrogate it in a single conversation.
                  Nexus AI identifies where papers agree, where they conflict and which specific
                  page the claim comes from.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'Upload PDFs, DOCX and text files to one Folder',
                    'Ask questions across all uploaded papers simultaneously',
                    'Page-level citations on every answer',
                    'Compare findings and identify contradictions',
                    'Unlimited uploads on Premium and above',
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
              <PdfChatMock />
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ══ 5. LITERATURE REVIEW ═════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <RevealAnimation delay={0.2} asChild={false} className="order-2 lg:order-1">
              <LitReviewMock />
            </RevealAnimation>
            <div className="order-1 lg:order-2 space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Literature Review</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">A structured review from your reference library</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  Upload your full reference list and Nexus AI organises a literature review with
                  themed sections (theoretical framework, prior studies, research gaps) with
                  every paragraph citing specific papers you uploaded.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'Thematic sections generated from your sources',
                    'Gaps and contradictions in the literature identified',
                    'Every claim sourced from your uploaded papers',
                    'Expand any section with a follow-up prompt',
                    'Export as DOCX ready for your document editor',
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

      {/* ══ 6. CITATION GENERATOR ════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Citation Generator</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Any style. Any source. One click.</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  Paste a URL, DOI or raw paper details and get a formatted citation instantly.
                  Switch between APA, MLA, Chicago, Harvard, Vancouver, IEEE and more without
                  reformatting manually.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'APA 7, MLA 9, Chicago, Harvard, Vancouver, IEEE, Oxford, AMA',
                    'Cite from URL, DOI or manual entry',
                    'Citations inserted inline as you write',
                    'Full reference list generated automatically',
                    'Citation library saved across your Folders',
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
              <CitationMock />
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ══ 7. PLAGIARISM CHECKER ════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <RevealAnimation delay={0.2} asChild={false} className="order-2 lg:order-1">
              <PlagiarismMock />
            </RevealAnimation>
            <div className="order-1 lg:order-2 space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Plagiarism Checker</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Check originality before you submit</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  Compare your paper against 200 million academic papers, journals and web
                  sources. See exactly which passages match, identify the source and confirm
                  whether each match is already properly cited or needs attention.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'Checked against 200M+ academic and web sources',
                    'Percentage originality score with breakdown',
                    'Match-level view showing exact source and page',
                    'Distinguishes cited vs uncited matches',
                    'AI-generated content detection included',
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

      {/* ══ 8. PERSONAS ══════════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-12">
            <div className="space-y-5 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Who it is for</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Built for everyone who reads to write</h2>
              </TextReveal>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
                        <span className="text-[12px] font-semibold" style={{ color: p.accent }}>{p.label}</span>
                      </div>
                      <h3 className="text-heading-6 text-secondary">{p.headline}</h3>
                      <p className="text-[13px] text-secondary/60 leading-relaxed">{p.body}</p>
                    </div>
                    <ul className="space-y-1.5">
                      {p.items.map(item => (
                        <li key={item} className="flex items-center gap-x-2">
                          <span className="size-1.5 rounded-full shrink-0" style={{ background: p.accent }} />
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

      {/* ══ 9. PRICING ═══════════════════════════════════ */}
      <PricingTeaser />
    </>
  );
};

export default AcademicResearch;
