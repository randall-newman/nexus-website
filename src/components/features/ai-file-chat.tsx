import PricingTeaser from '@/src/components/home/pricing-teaser';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  CheckCircle,
  FileText,
  FolderOpen,
  GraduationCap,
  Highlighter,
  Layers,
  MessageSquare,
  Scale,
  Search,
  TrendingUp,
  Upload,
} from 'lucide-react';
import Link from 'next/link';

/* ─── Hero file chat mock ────────────────────────────── */
function HeroFileMock() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden text-[12px]">
      {/* Chrome bar */}
      <div className="flex items-center gap-x-1.5 border-b border-white/10 px-4 py-3 bg-white/5">
        <span className="size-2.5 rounded-full bg-red-500/70" />
        <span className="size-2.5 rounded-full bg-yellow-500/70" />
        <span className="size-2.5 rounded-full bg-green-500/70" />
        <span className="ml-3 text-[11px] text-white/30">Nexus AI: File Chat</span>
        <span className="ml-auto flex items-center gap-x-1 text-[10px] text-white/20">
          <span className="size-1.5 rounded-full bg-green-400" />
          3 files loaded
        </span>
      </div>
      {/* File tabs */}
      <div className="flex items-center gap-x-2 border-b border-white/10 px-4 py-2 bg-white/3 overflow-x-auto">
        {[
          { name: 'Q4_Report.pdf', color: 'text-red-400', active: true },
          { name: 'Market_Analysis.xlsx', color: 'text-green-400', active: false },
          { name: 'Strategy_2025.pptx', color: 'text-orange-400', active: false },
        ].map((f) => (
          <span
            key={f.name}
            className={`flex items-center gap-x-1 rounded-md px-2 py-1 text-[10px] shrink-0 ${f.active ? 'bg-white/15 text-white/80' : 'text-white/30'}`}
          >
            <FileText className={`size-3 ${f.color}`} />
            {f.name}
          </span>
        ))}
      </div>
      {/* Chat body */}
      <div className="p-4 space-y-3">
        {/* User question */}
        <div className="flex justify-end">
          <div className="bg-white/15 text-white/80 rounded-xl rounded-br-sm px-3 py-2 max-w-[85%] leading-relaxed">
            What were the three biggest risks called out in the Q4 report?
          </div>
        </div>
        {/* AI answer with citations */}
        <div className="rounded-xl bg-white/8 border border-white/10 p-3 space-y-2 leading-relaxed text-white/65">
          <p>
            The Q4 report (p. 14)
            <span className="inline-flex items-center rounded bg-[#4c7df0]/30 border border-[#4c7df0]/40 px-1 text-[9px] text-[#8ab0f5] font-semibold mx-0.5">[p.14]</span>
            identifies three primary risks:
          </p>
          <ol className="list-decimal list-inside space-y-1 text-[11px]">
            <li>
              <span className="bg-[#217bfe]/20 text-[#8ab0f5] rounded px-0.5">Supply chain concentration</span>: 62% of key components from a single region
              <span className="inline-flex items-center rounded bg-[#ac87eb]/30 border border-[#ac87eb]/40 px-1 text-[9px] text-[#c4a8f0] font-semibold ml-0.5">[p.22]</span>
            </li>
            <li>Pending EU regulatory review expected Q2 2025
              <span className="inline-flex items-center rounded bg-[#ee4d5d]/30 border border-[#ee4d5d]/40 px-1 text-[9px] text-[#f08090] font-semibold ml-0.5">[p.31]</span>
            </li>
            <li>Client concentration: top 3 clients represent 47% of revenue</li>
          </ol>
        </div>
        {/* Second user question */}
        <div className="flex justify-end">
          <div className="bg-white/15 text-white/80 rounded-xl rounded-br-sm px-3 py-2 max-w-[85%] leading-relaxed">
            How does this compare to last quarter's market analysis?
          </div>
        </div>
        {/* Typing indicator */}
        <div className="flex items-center gap-x-1 pl-1">
          <span className="size-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="size-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="size-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '300ms' }} />
          <span className="ml-2 text-[10px] text-white/30">Nexus AI is reading across both files…</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Multi-file mock ─────────────────────────────────── */
function MultiFileMock() {
  const papers = [
    { title: 'Smith et al. (2024)', journal: 'Nature', finding: 'Effect size d=0.72', color: '#4c7df0' },
    { title: 'Kumar & Lee (2023)', journal: 'PubMed', finding: 'n=1,204 participants', color: '#ac87eb' },
    { title: 'Brown et al. (2024)', journal: 'NEJM', finding: 'OR 1.84 (1.2–2.6)', color: '#217bfe' },
    { title: 'Zhang & Wang (2023)', journal: 'Lancet', finding: 'Meta-analysis k=47', color: '#ee4d5d' },
  ];
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden text-[12px]">
      <div className="flex items-center gap-x-1.5 border-b border-stroke-3 px-4 py-3 bg-background-13">
        <Layers className="size-3.5 text-secondary/50" />
        <span className="text-[11px] text-secondary/60 font-medium">Comparing 4 research papers</span>
        <span className="ml-auto text-[10px] text-secondary/30">Cross-file mode</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="bg-secondary/5 rounded-lg px-3 py-2 text-secondary/70 leading-relaxed">
          "Summarise the key findings across all four papers and highlight where they agree or conflict."
        </div>
        <div className="space-y-2">
          {papers.map((p) => (
            <div key={p.title} className="flex items-start gap-x-2.5 rounded-lg border border-stroke-3 px-3 py-2">
              <span className="size-2 rounded-full mt-1.5 shrink-0" style={{ background: p.color }} />
              <div className="min-w-0">
                <p className="font-semibold text-secondary truncate">{p.title}</p>
                <p className="text-secondary/40 text-[10px]">{p.journal} · {p.finding}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-secondary/50 border-t border-stroke-3 pt-2">
          All four studies agree on a positive correlation. Smith et al. and Brown et al. conflict on effect magnitude. <span className="text-secondary font-medium">See p.8 vs p.3 for full comparison.</span>
        </p>
      </div>
    </div>
  );
}

/* ─── Citation highlight mock ────────────────────────── */
function CitationMock() {
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden text-[12px]">
      <div className="flex items-center gap-x-1.5 border-b border-stroke-3 px-4 py-3 bg-background-13">
        <FileText className="size-3.5 text-red-400" />
        <span className="text-[11px] text-secondary/70 font-medium">Annual_Report_2024.pdf</span>
        <span className="ml-auto text-[10px] text-secondary/30">Page 22 of 84</span>
      </div>
      <div className="p-4 space-y-3">
        {/* Simulated PDF page */}
        <div className="rounded-lg border border-stroke-3 p-3 space-y-2 font-mono text-[10px] text-secondary/60 leading-relaxed">
          <p>5.2 Supply Chain Dependencies</p>
          <p className="text-secondary/40">The group sources approximately 62% of its tier-1 components from manufacturers concentrated in a single geographic region. In the event of disruption…</p>
          <p className="bg-[#217bfe]/20 border-l-2 border-[#217bfe] pl-2 text-secondary/80 rounded-r">
            <span className="font-semibold text-[#217bfe]">▶ Answer source</span>: "supply chain concentration" risk is detailed here. Management estimates mitigation cost at $3.2M.
          </p>
          <p className="text-secondary/40">This concentration reflects both cost optimisation and historical supplier reliability (see Appendix B)…</p>
        </div>
        <div className="flex items-center gap-x-2 text-[11px]">
          <span className="flex items-center gap-x-1 rounded-full bg-[#217bfe]/10 border border-[#217bfe]/20 px-2.5 py-1 text-[#4c7df0]">
            <Highlighter className="size-3" />
            Source highlighted
          </span>
          <span className="text-secondary/40">· Page 22</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Folder persistence mock ────────────────────────── */
function FolderMock() {
  const folders = [
    { name: 'Q4 Finance Review', files: 6, updated: '2 days ago', color: 'text-blue-500' },
    { name: 'Legal: NDA Bundle', files: 4, updated: '1 week ago', color: 'text-purple-500' },
    { name: 'PhD Research Papers', files: 18, updated: 'Yesterday', color: 'text-green-500' },
    { name: 'Client Proposals', files: 9, updated: '3 days ago', color: 'text-orange-500' },
  ];
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden text-[12px]">
      <div className="flex items-center gap-x-1.5 border-b border-stroke-3 px-4 py-3 bg-background-13">
        <FolderOpen className="size-3.5 text-secondary/50" />
        <span className="text-[11px] text-secondary/60 font-medium">My Folders</span>
        <span className="ml-auto text-[10px] text-[#4c7df0] font-medium cursor-pointer">+ New folder</span>
      </div>
      <div className="divide-y divide-stroke-3">
        {folders.map((f) => (
          <div key={f.name} className="flex items-center gap-x-3 px-4 py-3 hover:bg-background-13/50">
            <FolderOpen className={`size-4 shrink-0 ${f.color}`} />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-secondary truncate">{f.name}</p>
              <p className="text-[10px] text-secondary/40">{f.files} files · Updated {f.updated}</p>
            </div>
            <MessageSquare className="size-3.5 text-secondary/30" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Supported file types ──────────────────────────── */
const fileTypes = [
  { ext: 'PDF', label: 'PDF Documents', desc: 'Native + scanned with OCR', color: 'bg-red-50 text-red-500 border-red-200/60' },
  { ext: 'DOCX', label: 'Word Documents', desc: 'All .docx and .doc files', color: 'bg-blue-50 text-blue-500 border-blue-200/60' },
  { ext: 'XLSX', label: 'Spreadsheets', desc: 'Excel, Google Sheets exports', color: 'bg-green-50 text-green-500 border-green-200/60' },
  { ext: 'PPTX', label: 'Presentations', desc: 'PowerPoint and slide decks', color: 'bg-orange-50 text-orange-500 border-orange-200/60' },
  { ext: 'CSV', label: 'CSV Files', desc: 'Tabular data and exports', color: 'bg-emerald-50 text-emerald-600 border-emerald-200/60' },
  { ext: 'TXT', label: 'Plain Text', desc: 'TXT, Markdown, RTF', color: 'bg-gray-50 text-gray-500 border-gray-200/60' },
  { ext: 'HTML', label: 'Web Pages', desc: 'Saved web content', color: 'bg-amber-50 text-amber-600 border-amber-200/60' },
  { ext: 'EPUB', label: 'eBooks', desc: 'EPUB and digital books', color: 'bg-violet-50 text-violet-500 border-violet-200/60' },
];

/* ─── How it works ──────────────────────────────────── */
const steps = [
  {
    n: '01',
    icon: Upload,
    title: 'Upload your files',
    body: 'Drag in a PDF, Word doc, spreadsheet, or presentation. Or paste a URL. Nexus AI reads the full document, every page.',
  },
  {
    n: '02',
    icon: Search,
    title: 'Ask in plain language',
    body: 'Type your question naturally: "What are the key risks?", "Summarise section 3", "Find every mention of the deadline."',
  },
  {
    n: '03',
    icon: Highlighter,
    title: 'Get answers with page sources',
    body: 'Every answer comes with a page reference and a highlighted passage in the original document so you can verify instantly.',
  },
  {
    n: '04',
    icon: ArrowRight,
    title: 'Export or continue in Chat',
    body: 'Copy cited answers into an essay, draft a summary in Artifacts, or send findings to a colleague, all without leaving Nexus AI.',
  },
];

/* ─── Personas ─────────────────────────────────────── */
const personas = [
  {
    icon: GraduationCap,
    role: 'Students',
    headline: 'Read smarter, not longer',
    points: ['Summarise long PDFs in minutes', 'Pull exact quotes for your essay', 'Chat across multiple textbook chapters', 'Get answers from uploaded lecture slides'],
  },
  {
    icon: BookOpen,
    role: 'Researchers',
    headline: 'Cross-reference 20 papers at once',
    points: ['Compare findings across sources', 'Track methodology differences', 'Export a cited literature summary', 'Spot conflicting evidence instantly'],
  },
  {
    icon: Scale,
    role: 'Legal Professionals',
    headline: 'Analyse contracts without reading every clause',
    points: ['Surface liability clauses across NDAs', 'Compare two contract versions', 'Ask what is missing vs a template', 'Cited page numbers for every finding'],
  },
  {
    icon: TrendingUp,
    role: 'Finance & Analysts',
    headline: 'Query reports like a database',
    points: ['Extract KPIs from annual reports', 'Cross-reference across quarters', 'Ask about footnotes and disclosures', 'Chat to CSV data directly'],
  },
];

/* ─── Export aiFileChatFaqItems for page JSON-LD ────── */
export const aiFileChatFaqItems = [
  {
    value: 'what-files',
    question: 'What file types does Nexus AI File Chat support?',
    answer:
      'Nexus AI supports PDF (native and scanned), Word (.docx), Excel (.xlsx), PowerPoint (.pptx), CSV, plain text, Markdown, HTML, and EPUB files. Scanned PDFs are processed using OCR so you can still ask questions even if the document is image-based.',
  },
  {
    value: 'scanned-pdf',
    question: 'Can it read scanned or image-based PDFs?',
    answer:
      'Yes. Scanned PDFs are processed with OCR (optical character recognition), which extracts the text before answering your questions. The quality of OCR depends on scan quality, but most clear scans work without issues.',
  },
  {
    value: 'multiple-files',
    question: 'Can I chat across multiple files at once?',
    answer:
      "Yes. You can upload several files to the same conversation and ask cross-file questions, for example \"How does this quarter's report compare to last quarter?\" or \"Find every mention of the penalty clause across all three contracts.\" Nexus AI reads all files and cites each source separately.",
  },
  {
    value: 'source-citations',
    question: 'Does Nexus AI show where an answer came from?',
    answer:
      'Every answer includes a page reference and highlights the exact passage in the original document. This makes it easy to verify the answer, copy the source for a citation, or jump straight to the relevant section.',
  },
  {
    value: 'folders',
    question: 'Do uploaded files stay available after the session?',
    answer:
      'Yes. Files live inside a Folder in Nexus AI Chat, not just a temporary upload. You can return to that Folder in future sessions and continue asking questions without re-uploading. You can also create multiple Folders to organise files by project or topic.',
  },
  {
    value: 'vs-chatpdf',
    question: 'How is Nexus AI different from ChatPDF or other document tools?',
    answer:
      'Most dedicated PDF chat tools are single-document only and lack integration with writing or creation tools. Nexus AI File Chat is built into the same product as Nexus AI Chat, Artifacts and Creative Studio, so you can go from questioning a document to drafting a report, creating a slide deck, or writing a cited essay without switching apps.',
  },
  {
    value: 'file-size',
    question: 'Is there a file size or page limit?',
    answer:
      'Upload limits scale with your plan. Free plan users can upload documents up to 10 MB. Pro and Team plans raise these limits significantly. Very long documents (e.g. a 1,000-page legal filing) may be processed in sections, and Nexus AI will note this in the chat.',
  },
  {
    value: 'privacy',
    question: 'Are my uploaded documents private?',
    answer:
      'Yes. Documents you upload are stored securely and used only to answer your questions. They are not used to train Nexus AI models. Pro and Team plans include additional data privacy controls and retention settings.',
  },
];

/* ─── Main component ────────────────────────────────── */
const AiFileChat = () => {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-secondary overflow-hidden pt-[160px] pb-0">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-14 pb-0 lg:gap-x-12 lg:pb-0">
            {/* Left */}
            <div className="col-span-12 space-y-8 lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary className="border-white/20 bg-white/10 text-white/80">
                  AI File Chat
                </BadgePrimary>
              </RevealAnimation>
              <div className="space-y-5">
                <TextReveal delay={0.2}>
                  <h1 className="text-white">
                    Ask any document,{' '}
                    <span
                      className="bg-clip-text text-transparent"
                      style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                    >
                      get cited answers
                    </span>
                  </h1>
                </TextReveal>
                <TextReveal delay={0.3}>
                  <p className="text-white/60 max-w-[500px]">
                    Upload PDFs, Word docs, spreadsheets and presentations. Ask questions in plain
                    English. Get answers with exact page references and highlighted passages, across
                    one file or twenty at once.
                  </p>
                </TextReveal>
              </div>
              <RevealAnimation delay={0.4} asChild={false} className="flex flex-wrap gap-3">
                <Link href="/signup">
                  <ButtonPrimary textClassName="text-nowrap">Start free</ButtonPrimary>
                </Link>
                <Link href="/products/chat">
                  <ButtonWhite textClassName="text-nowrap">See Nexus AI Chat</ButtonWhite>
                </Link>
              </RevealAnimation>
              {/* Trust note */}
              <RevealAnimation delay={0.5}>
                <p className="text-[13px] text-white/35">
                  File Chat is built into{' '}
                  <Link href="/products/chat" className="text-white/55 underline underline-offset-2">
                    Nexus AI Chat
                  </Link>
                  {' '}— no separate app needed.
                </p>
              </RevealAnimation>
            </div>
            {/* Right — live mock */}
            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.3} direction="right" offset={60}>
                <HeroFileMock />
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
              { stat: '8+', label: 'File formats supported' },
              { stat: 'OCR', label: 'Scanned PDF support' },
              { stat: 'Multi-file', label: 'Cross-document chat' },
              { stat: 'Page-level', label: 'Source citations' },
            ].map(({ stat, label }) => (
              <div key={label} className="space-y-1">
                <p className="text-2xl font-bold text-secondary">{stat}</p>
                <p className="text-tagline-3 text-secondary/50">{label}</p>
              </div>
            ))}
          </RevealAnimation>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container space-y-14">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>How it works</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>From upload to cited answer in seconds</h2>
            </TextReveal>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <RevealAnimation key={step.n} delay={0.1 + i * 0.08} direction="up" offset={40}>
                <div className="rounded-2xl border border-stroke-3 bg-white p-6 space-y-4 h-full">
                  <div className="flex items-center gap-x-3">
                    <span className="text-[11px] font-bold text-secondary/25 font-mono">{step.n}</span>
                    <span className="flex size-8 items-center justify-center rounded-xl bg-secondary/6">
                      <step.icon className="size-4 text-secondary" />
                    </span>
                  </div>
                  <h3 className="text-[17px] font-semibold text-secondary leading-snug">{step.title}</h3>
                  <p className="text-tagline-3 text-secondary/60 leading-relaxed">{step.body}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ── Supported file types ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container space-y-14">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Supported Formats</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Works with the files you already have</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-secondary/60 mx-auto max-w-[520px]">
                No conversion, no copy-paste. Upload directly and start asking.
              </p>
            </TextReveal>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {fileTypes.map((ft, i) => (
              <RevealAnimation key={ft.ext} delay={0.05 + i * 0.05} direction="up" offset={30}>
                <div className="rounded-2xl border border-stroke-3 bg-white p-5 space-y-3">
                  <span className={`inline-flex items-center rounded-lg border px-3 py-1 text-[11px] font-bold font-mono ${ft.color}`}>
                    {ft.ext}
                  </span>
                  <p className="font-semibold text-secondary text-[14px]">{ft.label}</p>
                  <p className="text-[12px] text-secondary/50">{ft.desc}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ── Multi-file chat ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-16">
            {/* Visual */}
            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.2} direction="left" offset={50}>
                <MultiFileMock />
              </RevealAnimation>
            </div>
            {/* Text */}
            <div className="col-span-12 space-y-6 lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Multi-File Chat</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Chat across multiple documents at once</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-secondary/60 max-w-[480px]">
                  Most document tools lock you to one file at a time. Nexus AI lets you load an entire
                  project (contracts, reports, papers) and ask questions that span all of them. Every
                  answer tells you which file and page it came from.
                </p>
              </TextReveal>
              <RevealAnimation delay={0.4} asChild={false} className="space-y-3">
                {[
                  'Compare two contract versions side by side',
                  'Synthesise findings from 20 research papers',
                  'Cross-reference this quarter vs last quarter',
                  'Find every mention of a term across a full folder',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-x-2.5">
                    <CheckCircle className="size-4 text-secondary shrink-0 mt-0.5" />
                    <span className="text-tagline-2 text-secondary/80">{point}</span>
                  </div>
                ))}
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ── Source citations ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-16">
            {/* Text */}
            <div className="col-span-12 space-y-6 lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Source Citations</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Every answer traced back to the page</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-secondary/60 max-w-[480px]">
                  Nexus AI does not paraphrase without attribution. Every claim in an answer links to
                  the exact page and passage in your document, highlighted so you can see it at a
                  glance. No hallucinated summaries, no mystery sources.
                </p>
              </TextReveal>
              <RevealAnimation delay={0.4} asChild={false} className="space-y-3">
                {[
                  'Inline page number references on every answer',
                  'Highlighted passage shown in the original document',
                  'Jump directly to the source with one click',
                  'Copy citation-ready quotes for essays or reports',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-x-2.5">
                    <CheckCircle className="size-4 text-secondary shrink-0 mt-0.5" />
                    <span className="text-tagline-2 text-secondary/80">{point}</span>
                  </div>
                ))}
              </RevealAnimation>
            </div>
            {/* Visual */}
            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.2} direction="right" offset={50}>
                <CitationMock />
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ── Folder persistence ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-16">
            {/* Visual */}
            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.2} direction="left" offset={50}>
                <FolderMock />
              </RevealAnimation>
            </div>
            {/* Text */}
            <div className="col-span-12 space-y-6 lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Folder Organisation</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Files stay, not a one-time upload</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-secondary/60 max-w-[480px]">
                  Every document you upload lives in a Folder inside Nexus AI Chat. Return to it
                  tomorrow, next week, or next quarter. Your files and conversation history are all
                  there. Organise by client, project, or subject.
                </p>
              </TextReveal>
              <RevealAnimation delay={0.4} asChild={false} className="space-y-3">
                {[
                  'Create folders per project or client',
                  'Chat history persists alongside your files',
                  'Share folders with teammates on Team plans',
                  'No re-uploading on every new session',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-x-2.5">
                    <CheckCircle className="size-4 text-secondary shrink-0 mt-0.5" />
                    <span className="text-tagline-2 text-secondary/80">{point}</span>
                  </div>
                ))}
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ── Personas ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container space-y-14">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Who uses AI File Chat</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Built for everyone who works with documents</h2>
            </TextReveal>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {personas.map((p, i) => (
              <RevealAnimation key={p.role} delay={0.1 + i * 0.08} direction="up" offset={40}>
                <div className="rounded-2xl border border-stroke-3 bg-white p-6 space-y-4 h-full">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-secondary/6">
                    <p.icon className="size-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary/40 mb-1">{p.role}</p>
                    <h3 className="text-[16px] font-semibold text-secondary leading-snug">{p.headline}</h3>
                  </div>
                  <ul className="space-y-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-x-2">
                        <CheckCircle className="size-3.5 text-secondary/50 shrink-0 mt-0.5" />
                        <span className="text-[12px] text-secondary/60">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ── Part of Nexus AI Chat callout ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <RevealAnimation
            delay={0.1}
            asChild={false}
            className="bg-secondary rounded-3xl px-8 py-12 md:px-14 md:py-16 text-center space-y-6"
          >
            <div className="flex items-center justify-center gap-x-2">
              <Briefcase className="size-5 text-white/40" />
              <span className="text-[12px] font-semibold uppercase tracking-widest text-white/40">Part of Nexus AI Chat</span>
            </div>
            <TextReveal delay={0.2}>
              <h2 className="text-white">
                File Chat is one mode inside{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                >
                  Nexus AI Chat
                </span>
              </h2>
            </TextReveal>
            <p className="text-white/60 mx-auto max-w-[520px]">
              You get General Chat, Research Mode and File Chat all in one product. Upload a
              document, get cited answers, then draft a report, all without switching apps.
            </p>
            <Link href="/products/chat">
              <ButtonPrimary className="mx-auto w-fit!">
                Explore Nexus AI Chat
              </ButtonPrimary>
            </Link>
          </RevealAnimation>
        </div>
      </section>

      {/* ── Pricing ── */}
      <PricingTeaser />
    </>
  );
};

export default AiFileChat;
