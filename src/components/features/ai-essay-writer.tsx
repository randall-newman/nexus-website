import PricingTeaser from '@/src/components/home/pricing-teaser';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { CheckIcon } from '@/src/components/shared/icon';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import {
  AlignLeft,
  BookOpen,
  CheckCircle,
  FileText,
  GraduationCap,
  Lightbulb,
  PenLine,
  Quote,
  Search,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

/* ─── Hero draft mockup ─────────────────────────────── */
function HeroDraftMock() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden text-[11px]">
      <div className="flex items-center gap-x-1.5 border-b border-white/10 bg-white/5 px-4 py-3">
        <span className="size-2.5 rounded-full bg-red-500/70" />
        <span className="size-2.5 rounded-full bg-yellow-500/70" />
        <span className="size-2.5 rounded-full bg-green-500/70" />
        <span className="ml-3 text-[11px] text-white/30">AI Essay Writer</span>
        <span className="ml-auto text-[10px] text-white/20">APA 7 · 1,200 words</span>
      </div>
      <div className="p-4 space-y-3">
        {/* Prompt */}
        <div className="flex gap-x-2">
          <div className="flex-1 rounded-xl bg-white/10 border border-white/10 px-3 py-2 text-white/50">
            Write an argumentative essay on the impact of remote work on productivity
          </div>
          <button type="button" className="shrink-0 rounded-xl px-3 py-2 text-[11px] font-semibold text-white" style={{ background: 'var(--color-gradient-logo)' }}>Write</button>
        </div>
        {/* Draft preview */}
        <div className="rounded-xl bg-white/8 border border-white/10 p-3 space-y-2.5 leading-relaxed text-white/65">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30">Introduction</p>
          <p>
            The global shift toward remote work, accelerated by the COVID-19 pandemic, has fundamentally reshaped modern labour practices. Studies indicate that 58% of workers who have the option to work remotely do so regularly
            <span className="inline-flex items-center rounded bg-[#4c7df0]/30 border border-[#4c7df0]/40 px-1 text-[9px] text-[#8ab0f5] font-semibold mx-0.5">[1]</span>
            . This essay argues that remote work, when supported by adequate infrastructure, significantly improves both employee productivity and organisational outcomes
            <span className="inline-flex items-center rounded bg-[#ac87eb]/30 border border-[#ac87eb]/40 px-1 text-[9px] text-[#c4a8f0] font-semibold mx-0.5">[2]</span>
            .
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30">Body: Argument 1</p>
          <p>
            Research by Stanford University found that remote workers demonstrated a 13% increase in productivity compared to their office-based peers
            <span className="inline-flex items-center rounded bg-[#217bfe]/30 border border-[#217bfe]/40 px-1 text-[9px] text-[#8ab0f5] font-semibold mx-0.5">[3]</span>
            . This gain is attributed primarily to fewer interruptions and the elimination of commute time...
          </p>
        </div>
        {/* References footer */}
        <div className="border-t border-white/10 pt-2 space-y-1 text-[9px] text-white/35">
          <p>[1] Gallup (2023). <em>State of the American Workplace</em>.</p>
          <p>[2] Bloom et al. (2022). <em>Journal of Labour Economics</em>.</p>
          <p>[3] Choudhury et al. (2023). <em>Stanford SIEPR Policy Brief</em>.</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Outline generator mockup ──────────────────────── */
function OutlineMock() {
  const outline = [
    {
      section: 'I. Introduction',
      items: ['Hook: Remote work adoption statistics', 'Background: Post-pandemic shift', 'Thesis statement'],
    },
    {
      section: 'II. Productivity benefits',
      items: ['Time saved from commuting', 'Fewer interruptions, deeper focus', 'Evidence: Stanford productivity study [1]'],
    },
    {
      section: 'III. Employee wellbeing',
      items: ['Work-life balance improvements', 'Reduced stress and burnout', 'Counterargument: isolation risks addressed'],
    },
    {
      section: 'IV. Required infrastructure',
      items: ['Technology and connectivity needs', 'Management practices', 'Communication tools'],
    },
    {
      section: 'V. Conclusion',
      items: ['Synthesis of key arguments', 'Policy recommendations', 'Implications for the future of work'],
    },
  ];
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden">
      <div className="border-b border-stroke-3 bg-background-13 px-4 py-3 flex items-center gap-x-2">
        <AlignLeft className="size-4 text-secondary/40" />
        <span className="text-[13px] font-medium text-secondary">Essay Outline</span>
        <span className="ml-auto text-[11px] text-secondary/40">5 sections · 1,200 words</span>
      </div>
      <div className="p-4 space-y-3 text-[12px]">
        {/* Thesis */}
        <div className="rounded-xl bg-[#f4f2fe] border border-[#ac87eb]/20 px-3 py-2.5">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[#7458e8] mb-1">Thesis</p>
          <p className="text-secondary/70 leading-relaxed">Remote work, when supported by proper infrastructure, significantly improves employee productivity and organisational outcomes.</p>
        </div>
        {/* Outline sections */}
        <div className="space-y-2">
          {outline.map((sec, i) => (
            <div key={sec.section} className={`rounded-xl border border-stroke-3 overflow-hidden ${i === 1 ? 'border-[#4c7df0]/30' : ''}`}>
              <div className={`flex items-center gap-x-2 px-3 py-2 ${i === 1 ? 'bg-blue-50' : 'bg-background-13'}`}>
                <span className="text-[10px] font-bold text-secondary/40 w-4">{String(i + 1)}</span>
                <p className={`text-[12px] font-semibold ${i === 1 ? 'text-[#217bfe]' : 'text-secondary'}`}>{sec.section}</p>
              </div>
              {i === 1 && (
                <div className="px-3 py-2 space-y-1">
                  {sec.items.map(item => (
                    <div key={item} className="flex items-start gap-x-2">
                      <span className="size-1 rounded-full bg-secondary/20 shrink-0 mt-1.5" />
                      <span className="text-[11px] text-secondary/60">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <button type="button" className="w-full rounded-xl py-2.5 text-[12px] font-semibold text-white" style={{ background: 'var(--color-gradient-logo)' }}>
          Write from this outline
        </button>
      </div>
    </div>
  );
}

/* ─── Essay checker mockup ──────────────────────────── */
function EssayCheckerMock() {
  const metrics = [
    { label: 'Argument strength',  score: 88, color: '#217bfe' },
    { label: 'Essay structure',    score: 92, color: '#ac87eb' },
    { label: 'Grammar & clarity',  score: 95, color: '#22c55e' },
    { label: 'Citation accuracy',  score: 84, color: '#078efb' },
    { label: 'Originality',        score: 97, color: '#ee4d5d' },
  ];
  const feedback = [
    { type: 'suggestion', color: 'text-amber-600 bg-amber-50 border-amber-200/60', text: 'Para 3: The counterargument on isolation is raised but not fully rebutted. Add one sentence citing evidence.' },
    { type: 'grammar',    color: 'text-blue-500 bg-blue-50 border-blue-200/60',    text: '"less interruptions" should be "fewer interruptions". Count noun requires "fewer".' },
    { type: 'strength',   color: 'text-green-600 bg-green-50 border-green-200/60', text: 'Strong thesis statement. The evidence in section II is well-chosen and properly cited.' },
  ];
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden">
      <div className="border-b border-stroke-3 bg-background-13 px-4 py-3 flex items-center gap-x-2">
        <CheckCircle className="size-4 text-secondary/40" />
        <span className="text-[13px] font-medium text-secondary">Essay Checker</span>
        <span className="ml-auto text-[11px] font-bold text-secondary">91 / 100</span>
      </div>
      <div className="p-4 space-y-4">
        {/* Score bars */}
        <div className="space-y-2.5">
          {metrics.map(m => (
            <div key={m.label}>
              <div className="flex justify-between mb-1 text-[11px]">
                <span className="text-secondary/65">{m.label}</span>
                <span className="font-semibold text-secondary">{m.score}</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-background-13">
                <div className="h-full rounded-full transition-all" style={{ width: `${m.score}%`, background: m.color }} />
              </div>
            </div>
          ))}
        </div>
        {/* Feedback items */}
        <div className="space-y-2">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-secondary/40">Feedback</p>
          {feedback.map(f => (
            <div key={f.text} className={`border rounded-lg px-3 py-2 text-[11px] leading-relaxed ${f.color}`}>
              <span className="font-semibold capitalize mr-1">{f.type}:</span>
              {f.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Essay types ────────────────────────────────────── */
const essayTypes = [
  { label: 'Argumentative',      desc: 'Build a clear position supported by evidence' },
  { label: 'Persuasive',         desc: 'Convince the reader with a compelling case'  },
  { label: 'Expository',         desc: 'Explain a topic clearly and objectively'      },
  { label: 'Narrative',          desc: 'Tell a story with structure and purpose'      },
  { label: 'Analytical',         desc: 'Break down a text, idea or event critically'  },
  { label: 'Compare and Contrast', desc: 'Examine similarities and differences'      },
  { label: 'Cause and Effect',   desc: 'Explore why events happen and what follows'   },
  { label: 'Critical Review',    desc: 'Evaluate a work, study or argument in depth'  },
  { label: 'Reflective',         desc: 'Examine your own experience and learning'     },
  { label: 'Research Paper',     desc: 'Structured academic paper with full citations' },
  { label: 'Literature Review',  desc: 'Synthesise evidence across multiple sources'  },
  { label: 'Lab Report',         desc: 'Structured scientific report with methodology' },
];

/* ─── Subjects ───────────────────────────────────────── */
const subjects = [
  { label: 'Humanities & Arts',        accent: '#217bfe', bg: 'bg-blue-50'    },
  { label: 'Social Sciences',          accent: '#ac87eb', bg: 'bg-purple-50'  },
  { label: 'Natural Sciences',         accent: '#22c55e', bg: 'bg-green-50'   },
  { label: 'Business & Economics',     accent: '#f59e0b', bg: 'bg-amber-50'   },
  { label: 'Law & Legal Studies',      accent: '#ee4d5d', bg: 'bg-rose-50'    },
  { label: 'Engineering & Technology', accent: '#078efb', bg: 'bg-sky-50'     },
  { label: 'Medicine & Health',        accent: '#f65c9c', bg: 'bg-pink-50'    },
  { label: 'Education',               accent: '#4c7df0', bg: 'bg-indigo-50'  },
];

/* ─── FAQ data ───────────────────────────────────────── */
export const aiEssayWriterFaqItems = [
  {
    value: 'plagiarism',
    question: 'Will using the AI Essay Writer count as plagiarism?',
    answer:
      'Nexus AI helps you structure arguments, research sources and generate cited drafts. It does not produce text you submit without reading it. The built-in plagiarism checker compares your final draft against 200M+ sources so you can confirm originality before submitting. Whether AI-assisted writing is permitted is governed by your institution\'s policies.',
  },
  {
    value: 'citations-automatic',
    question: 'Does it add citations automatically as I write?',
    answer:
      'Yes. When you write using sources you have uploaded or that Nexus AI found during Research Mode, citations are inserted inline in the style you choose (APA, MLA, Chicago, Harvard, Vancouver or IEEE). A full reference list is generated automatically.',
  },
  {
    value: 'essay-types',
    question: 'What types of essays can it write?',
    answer:
      'Nexus AI supports argumentative, persuasive, expository, narrative, analytical, compare-and-contrast, cause-and-effect, critical review, reflective, research papers, literature reviews and lab reports. It also adapts to any subject area from humanities and social sciences to STEM and law.',
  },
  {
    value: 'outline-first',
    question: 'Can it generate an outline before writing the full draft?',
    answer:
      'Yes. Nexus AI generates a structured outline covering the thesis statement, section headings and bullet-point arguments before writing. You can approve, adjust or reject the outline and then generate the full draft from the confirmed structure.',
  },
  {
    value: 'word-count',
    question: 'Can I specify the word count?',
    answer:
      'Yes. Set a target word count and Nexus AI distributes it proportionally across introduction, body paragraphs and conclusion while keeping the argument coherent. You can also request specific section lengths individually.',
  },
  {
    value: 'editing',
    question: 'Can I edit the draft after it is written?',
    answer:
      'Yes. Every essay draft opens in the Artifacts pane where you can edit any paragraph directly or ask the AI to rewrite a specific section in plain language ("make the conclusion stronger", "add a counterargument in paragraph three"). Each change is saved as a version you can restore.',
  },
  {
    value: 'tone-control',
    question: 'Can I control the writing style and tone?',
    answer:
      'Yes. Specify the academic level (undergraduate, postgraduate, PhD), the discipline, the required writing style (formal academic, semi-formal, persuasive) and the tone. Nexus AI also matches the vocabulary complexity and sentence length to the level you specify.',
  },
  {
    value: 'vs-academic-research',
    question: 'How does the Essay Writer relate to Academic Research?',
    answer:
      'They are part of the same workspace. Academic Research handles the sourcing: real-time database searches, multi-paper synthesis and citation generation. The Essay Writer handles the writing: outline, draft, argument structure and essay checker. Use them in sequence in the same Folder: research first, then write.',
  },
];

/* ─── Main component ─────────────────────────────────── */
const AiEssayWriter = () => {
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
                  <PenLine className="size-3.5" />
                  AI Essay Writer
                </span>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h1 className="text-white leading-[1.1]">
                  Essays that are actually yours.{' '}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                  >
                    Finished faster.
                  </span>
                </h1>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-white/60 text-lg leading-relaxed">
                  Nexus AI generates an outline, writes a cited draft and checks originality,
                  all in one workspace built for honest academic work, not a submit-as-is
                  shortcut.
                </p>
              </TextReveal>
              <RevealAnimation delay={0.4} asChild={false} className="flex flex-wrap gap-3">
                <Link href="https://app.mynexusai.com/signup" target="_blank" rel="noopener noreferrer">
                  <ButtonPrimary textClassName="text-center text-nowrap">
                    Write free
                  </ButtonPrimary>
                </Link>
                <Link href="/features/academic-research">
                  <ButtonWhite textClassName="text-center text-nowrap">
                    Explore Academic Research
                  </ButtonWhite>
                </Link>
              </RevealAnimation>
              {/* Quick trust stats */}
              <RevealAnimation delay={0.5} asChild={false} className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                {[
                  '12 essay types supported',
                  '8 citation styles',
                  'Plagiarism checker included',
                ].map(stat => (
                  <div key={stat} className="flex items-center gap-x-1.5 text-[13px] text-white/50">
                    <CheckCircle className="size-4 text-green-400 shrink-0" />
                    {stat}
                  </div>
                ))}
              </RevealAnimation>
            </div>
            {/* Draft mockup */}
            <RevealAnimation delay={0.4} asChild={false} className="pb-0">
              <HeroDraftMock />
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ══ 2. STATS STRIP ═══════════════════════════════ */}
      <section className="border-b border-stroke-3 bg-white">
        <div className="main-container">
          <div className="grid grid-cols-3 divide-x divide-stroke-3">
            {[
              { stat: '12',    label: 'Essay types supported' },
              { stat: '8+',   label: 'Citation styles' },
              { stat: '200M+', label: 'Plagiarism sources checked' },
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
              <h2 className="text-secondary">From blank page to finished essay in five steps</h2>
            </TextReveal>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { step: '01', icon: Lightbulb, title: 'Prompt',   body: 'Enter your essay topic, question or assignment brief.',             accent: '#217bfe', bg: 'bg-blue-50'   },
              { step: '02', icon: Search,    title: 'Research',  body: 'Nexus AI searches academic sources and uploads your reading list.', accent: '#ac87eb', bg: 'bg-purple-50' },
              { step: '03', icon: AlignLeft, title: 'Outline',   body: 'Review a structured outline with thesis, sections and arguments.',  accent: '#078efb', bg: 'bg-sky-50'    },
              { step: '04', icon: PenLine,   title: 'Draft',     body: 'Generate a full cited draft with inline references.',              accent: '#ee4d5d', bg: 'bg-rose-50'   },
              { step: '05', icon: ShieldCheck, title: 'Check',  body: 'Run the essay checker and plagiarism scan before submitting.',      accent: '#4c7df0', bg: 'bg-indigo-50' },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <RevealAnimation key={s.step} delay={0.1 * (i + 1)} asChild={false} className="border border-stroke-3 rounded-2xl bg-white p-6 space-y-4 relative">
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

      {/* ══ 4. OUTLINE GENERATOR ═════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Outline Generator</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Start with a structure, not a blank page</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  Before writing a single word, Nexus AI generates a full essay outline: thesis
                  statement, section headings and key arguments for each paragraph. Review it,
                  adjust it, then generate the full draft from the structure you approve.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'Thesis statement written from your topic or question',
                    'Five-section outline with argument bullets per section',
                    'Adjust any heading or argument before drafting',
                    'Word count distributed proportionally across sections',
                    'Works for all 12 essay types and every subject area',
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
              <OutlineMock />
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ══ 5. CITED DRAFTING ════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Visual: inline citation demo */}
            <RevealAnimation delay={0.2} asChild={false} className="order-2 lg:order-1">
              <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden">
                <div className="border-b border-stroke-3 bg-background-13 px-4 py-3 flex items-center gap-x-2">
                  <Quote className="size-4 text-secondary/40" />
                  <span className="text-[13px] font-medium text-secondary">Cited Draft</span>
                  <div className="ml-auto flex gap-x-1.5">
                    {['APA 7', 'MLA 9', 'Chicago', 'Harvard'].map((s, i) => (
                      <span key={s} className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${i === 0 ? 'bg-secondary text-white border-secondary' : 'border-stroke-3 text-secondary/40'}`}>{s}</span>
                    ))}
                  </div>
                </div>
                <div className="p-4 space-y-3 text-[12px] leading-relaxed text-secondary/70">
                  <p className="font-semibold text-secondary text-[13px]">Remote Work and Productivity: An Analysis</p>
                  <p>
                    The widespread adoption of remote work arrangements has prompted significant scholarly interest in their effects on employee output. Early research suggested modest productivity gains
                    <span className="inline-flex items-center rounded bg-blue-50 border border-blue-200/50 px-1 text-[9px] text-blue-600 font-semibold mx-0.5">[1]</span>
                    , however more recent longitudinal studies demonstrate that well-supported remote workers consistently outperform their office-based counterparts
                    <span className="inline-flex items-center rounded bg-purple-50 border border-purple-200/50 px-1 text-[9px] text-purple-600 font-semibold mx-0.5">[2]</span>
                    .
                  </p>
                  <p>
                    Bloom et al. (2022) conducted a randomised controlled trial across 1,600 employees, finding a 13% performance increase among remote workers
                    <span className="inline-flex items-center rounded bg-green-50 border border-green-200/50 px-1 text-[9px] text-green-600 font-semibold mx-0.5">[3]</span>
                    . The authors attribute this to reduced commute fatigue and a quieter working environment, though they note that results varied by role type.
                  </p>
                  <div className="border-t border-stroke-3 pt-3 space-y-1 text-[10px] text-secondary/40">
                    <p className="font-semibold text-secondary/50 uppercase tracking-wider text-[9px]">References</p>
                    <p>[1] Choudhury, P. et al. (2023). <em>Stanford SIEPR Policy Brief</em>.</p>
                    <p>[2] Gallup (2023). <em>State of the American Workplace</em>.</p>
                    <p>[3] Bloom, N. et al. (2022). <em>Journal of Labour Economics</em>, 40(2).</p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
            <div className="order-1 lg:order-2 space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Cited Drafting</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Citations inserted as the draft is written</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  Every claim in the draft is cited as it is written, not added manually at
                  the end. References are pulled from your uploaded papers or from real-time
                  academic database results, in the citation style your course requires.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'Inline citations written during draft generation',
                    'APA 7, MLA 9, Chicago, Harvard, Vancouver, IEEE',
                    'Sources drawn from uploads or live academic search',
                    'Full reference list generated automatically',
                    'Switch citation style with one click after drafting',
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

      {/* ══ 6. ESSAY CHECKER ═════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Essay Checker</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Check your argument, not just your grammar</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  Nexus AI checks five dimensions of your essay: argument strength, structure,
                  grammar and clarity, citation accuracy and originality. Each dimension is scored
                  and each issue is flagged with a specific, actionable suggestion rather than a vague
                  "improve this paragraph" note.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'Argument strength: does each paragraph support the thesis?',
                    'Structure: introduction, body and conclusion clarity',
                    'Grammar and clarity: style, wordiness, word choice',
                    'Citation accuracy: are references formatted correctly?',
                    'Originality score with match-by-match breakdown',
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
              <EssayCheckerMock />
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ══ 7. ESSAY TYPES ═══════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-12">
            <div className="space-y-5 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Essay types</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Every essay type your course assigns</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-background-14/60 mx-auto max-w-[480px]">
                  Nexus AI adapts its outline structure, argument approach and writing style to
                  the specific type of essay you need.
                </p>
              </TextReveal>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {essayTypes.map((type, i) => (
                <RevealAnimation
                  key={type.label}
                  delay={0.04 * (i + 1)}
                  asChild={false}
                  className="border border-stroke-3 rounded-2xl bg-white p-4 space-y-1.5"
                >
                  <p className="text-[13px] font-semibold text-secondary">{type.label}</p>
                  <p className="text-[11px] text-secondary/50 leading-tight">{type.desc}</p>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 8. SUBJECTS ══════════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-10">
            <div className="space-y-4 text-center">
              <TextReveal delay={0.1}>
                <h2 className="text-secondary">Across every subject area</h2>
              </TextReveal>
            </div>
            <RevealAnimation delay={0.2} asChild={false} className="flex flex-wrap gap-3 justify-center">
              {subjects.map(s => (
                <span
                  key={s.label}
                  className={`${s.bg} rounded-full px-4 py-2 text-[13px] font-semibold`}
                  style={{ color: s.accent }}
                >
                  {s.label}
                </span>
              ))}
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ══ 9. INTEGRITY CALLOUT ═════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <RevealAnimation
            delay={0.1}
            asChild={false}
            className="rounded-2xl bg-secondary p-8 md:p-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center"
          >
            <div className="space-y-4">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10">
                <ShieldCheck className="size-6 text-white" />
              </div>
              <h2 className="text-white">Built for honest academic work</h2>
              <p className="text-white/60 leading-relaxed">
                Nexus AI is designed to make you a better researcher and writer, not to produce
                text you submit without engaging with it. The built-in plagiarism checker and
                citation generator are there to help you submit work you can stand behind.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { icon: CheckCircle, text: 'Plagiarism checker runs against 200M+ academic sources' },
                { icon: Quote,       text: 'Every source cited in the style your institution requires' },
                { icon: FileText,    text: 'Every draft opens in Artifacts for your review before export' },
                { icon: BookOpen,    text: 'Part of the Academic Research workspace, not a standalone tool' },
              ].map(item => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-start gap-x-3">
                    <Icon className="size-5 text-white/50 shrink-0 mt-0.5" />
                    <span className="text-white/65 text-[15px] leading-relaxed">{item.text}</span>
                  </div>
                );
              })}
              <div className="pt-2">
                <Link href="/features/academic-research">
                  <ButtonWhite textClassName="text-nowrap">
                    Explore Academic Research
                  </ButtonWhite>
                </Link>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* ══ 10. PRICING ══════════════════════════════════ */}
      <PricingTeaser />
    </>
  );
};

export default AiEssayWriter;
