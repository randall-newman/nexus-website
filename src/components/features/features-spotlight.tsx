import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { CheckIcon } from '@/src/components/shared/icon';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonWhite } from '@/src/components/shared/ui/button';
import {
  BookOpen,
  FileSearch,
  FileText,
  Layers,
  Search,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

/* ─── Mini previews ─────────────────────────────────── */

function FileChatPreview() {
  return (
    <div className="space-y-2 rounded-2xl border border-stroke-3 bg-white p-4 text-[11px]">
      <div className="flex items-center gap-x-2 rounded-xl border border-stroke-3 bg-background-13 px-3 py-2">
        <FileText className="size-4 text-red-400 shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="font-medium text-secondary">2024 Annual Report.pdf</p>
          <p className="text-secondary/40 text-[9px]">48 pages · 2.4 MB</p>
        </div>
        <span className="rounded-full bg-green-50 border border-green-200/60 px-2 py-0.5 text-[9px] text-green-600 font-medium">Ready</span>
      </div>
      <div className="flex justify-end">
        <div className="max-w-[75%] rounded-2xl rounded-br-sm bg-secondary px-3 py-1.5 text-white">
          What was the revenue growth in Q3?
        </div>
      </div>
      <div className="flex gap-x-1.5">
        <div className="size-5 shrink-0 rounded-full bg-secondary flex items-center justify-center">
          <Sparkles className="size-3 text-white" />
        </div>
        <div className="rounded-2xl rounded-bl-sm border border-stroke-3 bg-background-13 px-3 py-1.5 max-w-[80%] space-y-1 leading-relaxed text-secondary/65">
          <p>Revenue grew 34% YoY, from $2.1B to $2.8B.</p>
          <span className="inline-block rounded bg-blue-50 border border-blue-200/50 px-1.5 py-0.5 text-[9px] text-blue-600 font-medium">Page 12</span>
        </div>
      </div>
    </div>
  );
}

function AcademicPreview() {
  const sources = [
    { name: 'Nature', color: '#4c7df0' },
    { name: 'PubMed', color: '#ac87eb' },
    { name: 'NEJM', color: '#ee4d5d' },
    { name: 'Lancet', color: '#078efb' },
  ];
  return (
    <div className="space-y-3 rounded-2xl border border-stroke-3 bg-white p-4 text-[11px]">
      <div className="flex items-center gap-x-2 rounded-xl border border-stroke-3 bg-background-13 px-3 py-2">
        <Search className="size-3.5 text-[#ac87eb] shrink-0" />
        <span className="text-secondary/60 flex-1">Latest findings on mRNA cancer vaccine trials</span>
      </div>
      <div className="space-y-1.5">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-secondary/40">Sources</p>
        <div className="flex flex-wrap gap-1.5">
          {sources.map((s) => (
            <span key={s.name} className="flex items-center gap-x-1 rounded-full border border-stroke-3 bg-background-13 px-2 py-0.5">
              <span className="size-1.5 rounded-full" style={{ background: s.color }} />
              <span className="font-medium text-secondary">{s.name}</span>
            </span>
          ))}
        </div>
      </div>
      <div className="rounded-xl bg-background-13 border border-stroke-3 p-3 leading-relaxed text-secondary/65 space-y-1.5">
        <p>A Phase 2 trial published in <span className="text-[#4c7df0] font-medium">Nature</span><span className="ml-1 inline-flex items-center rounded bg-blue-50 border border-blue-200/50 px-1 text-[9px] text-blue-600 font-medium">[1]</span> showed 44% reduction in recurrence.</p>
        <p>Moderna and Merck confirmed results across 157 patients<span className="ml-1 inline-flex items-center rounded bg-purple-50 border border-purple-200/50 px-1 text-[9px] text-purple-600 font-medium">[2]</span>.</p>
      </div>
    </div>
  );
}

function ArtifactsPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-stroke-3 bg-white">
      <div className="flex items-center gap-x-1.5 border-b border-stroke-3 bg-background-13 px-4 py-2.5">
        <span className="size-2 rounded-full bg-red-400/70" />
        <span className="size-2 rounded-full bg-yellow-400/70" />
        <span className="size-2 rounded-full bg-green-400/70" />
        <span className="flex-1 text-center text-[10px] text-secondary/35">Research Summary.artifact</span>
      </div>
      <div className="space-y-2.5 p-4">
        <div className="h-3 w-3/5 rounded bg-secondary/75" />
        <div className="space-y-1.5">
          <div className="h-1.5 w-full rounded bg-secondary/15" />
          <div className="h-1.5 w-4/5 rounded bg-secondary/15" />
          <div className="h-1.5 w-full rounded bg-secondary/15" />
        </div>
        <div className="my-1 h-14 rounded-xl border border-stroke-3 bg-gradient-to-br from-[#000c60]/8 to-[#7458E8]/8" />
        <div className="space-y-1.5">
          <div className="h-1.5 w-full rounded bg-secondary/10" />
          <div className="h-1.5 w-2/3 rounded bg-secondary/10" />
        </div>
        <div className="flex gap-x-2 pt-1">
          {['Export PDF', 'Share link'].map((label) => (
            <span key={label} className="rounded-full border border-stroke-3 bg-background-13 px-2.5 py-0.5 text-[10px] font-medium text-secondary/50">
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Spotlight data ────────────────────────────────── */

const spotlights = [
  {
    badge: 'Productivity & Memory',
    icon: FileSearch,
    color: '#ee4d5d',
    bg: 'bg-rose-50',
    title: 'AI File Chat',
    subtitle: 'Ask any document, spreadsheet or image a question',
    description: 'Upload any file and start asking questions. Nexus AI reads every page, table and image, then returns page-level citations on every answer. Works across PDFs, DOCX, XLSX, images and more.',
    features: [
      'PDF, DOCX, XLSX, PPTX, CSV, JPG, PNG and more',
      'Page-level and cell-level citations on every answer',
      'Upload multiple files and ask across all of them',
      'Keeps files in your Folder for future sessions',
    ],
    href: '/features/ai-file-chat',
    preview: FileChatPreview,
    reverse: false,
  },
  {
    badge: 'Research & Writing',
    icon: BookOpen,
    color: '#217bfe',
    bg: 'bg-blue-50',
    title: 'Academic Research',
    subtitle: 'Multi-source research with cited, structured answers',
    description: 'Research Mode searches across web, academic databases and real-time news sources in parallel. Every answer is structured and every claim is linked to a real source. No hallucinated citations.',
    features: [
      'Searches web, academic and news sources simultaneously',
      'Every claim linked to a verifiable citation',
      'Generates structured summaries and literature reviews',
      'Ask follow-up questions with full source context',
    ],
    href: '/features/academic-research',
    preview: AcademicPreview,
    reverse: true,
  },
  {
    badge: 'Productivity & Memory',
    icon: Layers,
    color: '#f07aaa',
    bg: 'bg-pink-50',
    title: 'Artifacts',
    subtitle: 'The shared canvas where every product finishes its work',
    description: 'Artifacts is the output layer of Nexus AI. Chat summaries, generated images and code all land here, giving you a rich canvas to edit, arrange, format and export, all without leaving Nexus AI.',
    features: [
      'Shared across Chat, Creative Studio and Code',
      'Rich document editing: headings, images, tables',
      'Export to PDF and DOCX with no watermark (Premium)',
      '200 Artifacts on Premium, unlimited on Ultimate',
    ],
    href: '/features/artifacts',
    preview: ArtifactsPreview,
    reverse: false,
  },
];

const FeaturesSpotlight = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-32">
      <div className="main-container">
        <div className="space-y-12 md:space-y-16">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Featured</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2 className="text-secondary">A closer look at three key features</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="mx-auto max-w-[480px] text-background-14/60 leading-relaxed">
                Three of the most-used features on the platform, each designed to take AI output
                the final mile into finished work.
              </p>
            </TextReveal>
          </div>

          {spotlights.map((spot, i) => {
            const Icon = spot.icon;
            const Preview = spot.preview;
            return (
              <RevealAnimation
                key={spot.title}
                delay={0.1}
                offset={60}
                asChild={false}
                className={`grid grid-cols-1 items-center gap-10 rounded-[24px] border border-stroke-3 bg-white p-8 md:grid-cols-2 md:gap-14 md:p-12`}
              >
                <div className={`space-y-6 ${spot.reverse ? 'md:order-2' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-x-3">
                      <div className={`${spot.bg} flex size-11 items-center justify-center rounded-xl`}>
                        <Icon className="size-5" style={{ color: spot.color }} />
                      </div>
                      <span className="text-[12px] font-semibold uppercase tracking-wider text-secondary/40">
                        {spot.badge}
                      </span>
                    </div>
                    <h3
                      className="text-secondary font-bold leading-[1.2]"
                      style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2rem)' }}
                    >
                      {spot.subtitle}
                    </h3>
                    <p className="text-background-14/60 leading-relaxed">{spot.description}</p>
                  </div>

                  <ul className="space-y-2.5">
                    {spot.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-x-2.5">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-stroke-3 p-0.5">
                          <CheckIcon className="stroke-secondary size-3" />
                        </span>
                        <span className="text-[14px] text-secondary/70 leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={spot.href}>
                    <ButtonWhite textClassName="text-nowrap">
                      Explore {spot.title}
                    </ButtonWhite>
                  </Link>
                </div>

                <div className={spot.reverse ? 'md:order-1' : ''}>
                  <Preview />
                </div>
              </RevealAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSpotlight;
