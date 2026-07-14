'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { CheckIcon } from '@/src/components/shared/icon';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import {
  BookOpen,
  Code2,
  FileText,
  FlaskConical,
  FolderOpen,
  GraduationCap,
  Image as ImageIcon,
  Layers,
  Megaphone,
  MessageCircle,
  Palette,
  Presentation,
  Rocket,
  Search,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import americanRedCrossLogo from '@/public/images/icons/American-Red-Cross.svg';
import deloitteLogo from '@/public/images/icons/Deloitte.svg';
import microsoftLogo from '@/public/images/icons/Microsoft.svg';
import pfizerLogo from '@/public/images/icons/Pfizer.svg';
import synechronLogo from '@/public/images/icons/synechron.png';
import vodafoneLogo from '@/public/images/icons/Vodafone.svg';
import Image, { type StaticImageData } from 'next/image';

/* ─── Mini previews ─────────────────────────────────── */

function ChatPreview() {
  return (
    <div className="space-y-2 rounded-xl border border-stroke-3 bg-white p-3 text-[11px]">
      <div className="flex justify-end">
        <div className="max-w-[75%] rounded-2xl rounded-br-sm bg-secondary px-3 py-1.5 text-white">
          Summarise the key risks in this contract
        </div>
      </div>
      <div className="flex gap-x-1.5">
        <div className="flex size-4 shrink-0 items-center justify-center rounded-full bg-secondary">
          <Sparkles className="size-2.5 text-white" />
        </div>
        <div className="max-w-[80%] rounded-2xl rounded-bl-sm border border-stroke-3 bg-background-13 px-3 py-1.5 leading-relaxed text-secondary/65">
          Three risks stand out: auto-renewal (p.4), uncapped liability (p.9), 30-day termination (p.12).
        </div>
      </div>
      <div className="mt-1 flex items-center gap-x-1.5 rounded-lg border border-dashed border-stroke-3 bg-background-13 px-2.5 py-1.5">
        <FileText className="size-3 text-red-400 shrink-0" />
        <span className="flex-1 text-secondary/40">Contract_v3.pdf</span>
        <Search className="size-3 text-[#ac87eb]" />
        <span className="text-[#ac87eb] text-[10px] font-medium">Research Mode</span>
      </div>
    </div>
  );
}

function CreativePreview() {
  return (
    <div className="space-y-2 rounded-xl border border-stroke-3 bg-white p-3 text-[11px]">
      <div className="flex items-center gap-x-1.5 rounded-lg border border-stroke-3 bg-background-13 px-2.5 py-1.5">
        <Sparkles className="size-3 text-[#ac87eb] shrink-0" />
        <span className="text-secondary/50 flex-1">A hero image in navy and violet, minimal style</span>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        <div className="aspect-square rounded-lg bg-gradient-to-br from-[#000c60] to-[#4c7df0]" />
        <div className="aspect-square rounded-lg bg-gradient-to-br from-[#7458E8] to-[#ee6a99]" />
        <div className="aspect-square rounded-lg bg-gradient-to-br from-[#217bfe] to-[#7458E8]" />
      </div>
      <div className="flex items-center gap-x-1.5 rounded-lg bg-background-13 px-2.5 py-1.5">
        <Presentation className="size-3 text-[#217bfe] shrink-0" />
        <span className="text-secondary/50">Pitch deck — 12 slides generated</span>
        <span className="ml-auto rounded-full bg-green-50 border border-green-200/60 px-1.5 text-[9px] font-medium text-green-600">Done</span>
      </div>
    </div>
  );
}

function CodePreview() {
  return (
    <div className="overflow-hidden rounded-xl bg-secondary p-3 font-mono text-[10px] leading-relaxed">
      <div className="mb-2 flex items-center gap-x-1.5">
        <span className="size-2 rounded-full bg-red-500/70" />
        <span className="size-2 rounded-full bg-yellow-500/70" />
        <span className="size-2 rounded-full bg-green-500/70" />
        <span className="ml-2 text-[9px] text-white/30">generate.ts</span>
      </div>
      <div className="space-y-0.5">
        <p><span className="text-[#7458E8]">async function</span> <span className="text-[#4c7df0]">generateReport</span><span className="text-white/50">(data) {'{'}</span></p>
        <p className="pl-3"><span className="text-[#ac87eb]">const</span> <span className="text-white/70"> result</span><span className="text-white/40"> = await</span></p>
        <p className="pl-5 text-white/50">nexusAI.analyze(data);</p>
        <p className="pl-3 text-[#4ade80]">// ✓ No issues found</p>
        <p className="pl-3"><span className="text-[#ac87eb]">return</span> <span className="text-white/70"> format(result);</span></p>
        <p className="text-white/50">{'}'}</p>
      </div>
    </div>
  );
}

function ArtifactsPreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-stroke-3 bg-white">
      <div className="flex items-center gap-x-1.5 border-b border-stroke-3 bg-background-13 px-3 py-2">
        <span className="size-2 rounded-full bg-red-400/70" />
        <span className="size-2 rounded-full bg-yellow-400/70" />
        <span className="size-2 rounded-full bg-green-400/70" />
        <span className="flex-1 text-center text-[10px] text-secondary/35">Q3 Report.artifact</span>
      </div>
      <div className="space-y-1.5 p-3">
        <div className="h-2.5 w-3/5 rounded bg-secondary/75" />
        <div className="h-1.5 w-full rounded bg-secondary/15" />
        <div className="h-1.5 w-4/5 rounded bg-secondary/15" />
        <div className="my-2 h-12 rounded-lg border border-stroke-3 bg-gradient-to-br from-[#000c60]/8 to-[#7458E8]/8" />
        <div className="h-1.5 w-full rounded bg-secondary/10" />
        <div className="h-1.5 w-2/3 rounded bg-secondary/10" />
        <div className="mt-2 flex gap-x-1.5">
          {['Export PDF', 'Share link', 'Publish'].map(label => (
            <span key={label} className="rounded-full border border-stroke-3 bg-background-13 px-2 py-0.5 text-[9px] text-secondary/50">{label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Product data ──────────────────────────────────── */

const products = [
  {
    id: 'chat',
    name: 'Nexus AI Chat',
    tagline: 'Research, write and chat across any document',
    description: 'Three chat modes in one workspace. General Chat for everyday tasks, Research Mode for cited multi-source answers, and File Chat to talk directly to your documents.',
    href: '/products/chat',
    icon: MessageCircle,
    accent: '#217bfe',
    bg: 'bg-blue-50',
    features: [
      'General Chat, Research Mode, File Chat',
      'Cited answers across web, academic and news sources',
      'Upload PDFs, DOCX, XLSX, images and more',
      'Persistent Folders with full context',
      'Unlimited chat on Premium and above',
    ],
    preview: ChatPreview,
  },
  {
    id: 'creative-studio',
    name: 'Creative Studio',
    tagline: 'Images, slides, audio and video from a single prompt',
    description: 'Turn ideas into polished creative assets. Generate images, build presentation decks, produce audio clips and create short videos, all from one creative workspace.',
    href: '/products/creative-studio',
    icon: ImageIcon,
    accent: '#ac87eb',
    bg: 'bg-purple-50',
    features: [
      'AI image generation with style control (Paid plans)',
      'AI presentation maker with 100+ templates',
      'Audio and voice generation (Paid plans)',
      'AI video generation (Ultimate plan)',
      '100 credits/month on Premium, 750 on Ultimate',
    ],
    preview: CreativePreview,
  },
  {
    id: 'code',
    name: 'Nexus AI Code',
    tagline: 'Generate, review and ship code faster with AI',
    description: 'A full coding companion: write new code, review existing code for bugs and performance, and run AI workflows directly from your terminal via the CLI.',
    href: '/products/code',
    icon: Code2,
    accent: '#4ade80',
    bg: 'bg-green-50',
    features: [
      'Code generation in 30+ languages',
      'Bug detection and code review',
      'CLI integration for terminal workflows',
      'Explain, refactor and document code',
      'Works inside your existing Folders',
    ],
    preview: CodePreview,
  },
  {
    id: 'artifacts',
    name: 'Artifacts',
    tagline: 'The shared canvas where every product finishes its work',
    description: 'Artifacts is the output layer of Nexus AI. Chats, research, generated images and code all land here, giving you a clean canvas to edit, arrange and export finished work.',
    href: '/features/artifacts',
    icon: Layers,
    accent: '#f07aaa',
    bg: 'bg-pink-50',
    features: [
      'Shared across Chat, Creative Studio and Code',
      'Rich document editing and layout',
      'Export to PDF, DOCX and more',
      'No watermarks on Premium and above',
      '200 Artifacts on Premium, unlimited on Ultimate',
    ],
    preview: ArtifactsPreview,
  },
];

/* ─── Platform benefit pillars ──────────────────────── */

const platform = [
  {
    icon: FolderOpen,
    title: 'One set of Folders',
    body: 'Every conversation, file, image and artifact from every product lives in the same Folder. Switch between Chat, Code and Creative Studio without losing your context.',
    accent: '#217bfe',
    bg: 'bg-blue-50',
  },
  {
    icon: Zap,
    title: 'One credit system',
    body: 'A single monthly credit allowance works across all products. No separate subscriptions per tool. Use what you need, where you need it.',
    accent: '#7458E8',
    bg: 'bg-purple-50',
  },
  {
    icon: Layers,
    title: 'Shared Artifacts canvas',
    body: 'Output from every product lands in the same Artifact. Research becomes a document. Code becomes a deliverable. Images become a slide. All in one place.',
    accent: '#f07aaa',
    bg: 'bg-pink-50',
  },
];

/* ─── Logos data ────────────────────────────────────── */

const logos: { src: StaticImageData; alt: string }[] = [
  { src: americanRedCrossLogo, alt: 'American Red Cross' },
  { src: deloitteLogo,         alt: 'Deloitte' },
  { src: microsoftLogo,        alt: 'Microsoft' },
  { src: vodafoneLogo,         alt: 'Vodafone' },
  { src: synechronLogo,        alt: 'Synechron' },
  { src: pfizerLogo,           alt: 'Pfizer' },
];

/* ─── Personas data ─────────────────────────────────── */

const personas = [
  { label: 'Students',    desc: 'Research papers, essays and study notes with cited AI assistance.',         icon: GraduationCap, accent: '#217bfe', bg: 'bg-blue-50' },
  { label: 'Researchers', desc: 'Multi-source literature reviews, PDF analysis and structured summaries.',   icon: FlaskConical,  accent: '#ac87eb', bg: 'bg-purple-50' },
  { label: 'Creators',    desc: 'Images, videos, decks and branded content at creative scale.',              icon: Palette,       accent: '#f07aaa', bg: 'bg-pink-50' },
  { label: 'Developers',  desc: 'Code generation, review, CLI integration and pair programming.',            icon: Code2,         accent: '#4ade80', bg: 'bg-green-50' },
  { label: 'Founders',    desc: 'Pitch decks, market research, investor memos and product copy.',            icon: Rocket,        accent: '#ee4d5d', bg: 'bg-rose-50' },
  { label: 'Teams',       desc: 'Shared Folders, collaborative research and AI-drafted deliverables.',       icon: Users,         accent: '#4c7df0', bg: 'bg-indigo-50' },
  { label: 'Educators',   desc: 'Lesson plans, explainers, quizzes and translated learning materials.',      icon: BookOpen,      accent: '#078efb', bg: 'bg-sky-50' },
  { label: 'Marketers',   desc: 'Campaign briefs, ad copy, social content and SEO research.',                icon: Megaphone,     accent: '#f97316', bg: 'bg-orange-50' },
];

/* ─── Main component ────────────────────────────────── */

const Pillars = () => {
  return (
    <>
      {/* ══ 1. HERO ══════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-[160px] pb-10">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div
            className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.06] blur-3xl"
            style={{ background: 'var(--color-gradient-logo)' }}
          />
        </div>

        <div className="main-container relative">
          <div className="mx-auto max-w-[800px] space-y-6 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Products</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h1 className="text-secondary leading-[1.1]">
                One platform.{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                >
                  Every kind of work.
                </span>
              </h1>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="mx-auto max-w-[560px] text-lg text-background-14/60 leading-relaxed">
                Chat, Creative Studio, Code and Artifacts. Four products built from the ground up to
                work together in one unified workspace.
              </p>
            </TextReveal>
            <RevealAnimation delay={0.4} asChild={false} className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/signup">
                <ButtonPrimary textClassName="text-nowrap">Try for Free</ButtonPrimary>
              </Link>
              <Link href="/pricing">
                <ButtonWhite textClassName="text-nowrap">View pricing</ButtonWhite>
              </Link>
            </RevealAnimation>
          </div>

          {/* Client logos marquee */}
          <RevealAnimation delay={0.5} asChild={false} className="mt-16 space-y-6">
            <p className="text-tagline-new text-background-14/60 text-center text-[13px]">
              Trusted by students, startups, universities, NGOs and big corporations across the world
            </p>
            <div
              className="relative w-full overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              }}
            >
              <div className="animate-marquee flex w-max items-center" style={{ animationDuration: '28s' }}>
                {[...logos, ...logos].map((logo, index) => (
                  <div
                    key={`${logo.alt}-${index}`}
                    className="flex w-[170px] shrink-0 items-center justify-center px-6"
                  >
                    <Image src={logo.src} alt={logo.alt} className="h-8 w-auto max-w-[110px]" />
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* ══ 2. PRODUCT SHOWCASE ══════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-32">
        <div className="main-container space-y-6">
          {products.map((product, i) => {
            const Icon = product.icon;
            const Preview = product.preview;
            const isEven = i % 2 === 1;

            return (
              <RevealAnimation
                key={product.id}
                delay={0.1}
                offset={60}
                asChild={false}
                className="grid grid-cols-1 items-center gap-10 overflow-hidden rounded-[24px] border border-stroke-3 bg-white p-8 md:grid-cols-2 md:gap-14 md:p-12"
              >
                {/* Text */}
                <div className={`space-y-6 ${isEven ? 'md:order-2' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-x-3">
                      <div className={`${product.bg} flex size-11 items-center justify-center rounded-xl`}>
                        <Icon className="size-5" style={{ color: product.accent }} />
                      </div>
                      <span className="text-[13px] font-semibold text-secondary/40 uppercase tracking-wider">
                        {product.name}
                      </span>
                    </div>
                    <h2 className="text-secondary leading-[1.2]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                      {product.tagline}
                    </h2>
                    <p className="text-background-14/60 leading-relaxed">{product.description}</p>
                  </div>

                  <ul className="space-y-2.5">
                    {product.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-x-2.5">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-stroke-3 p-0.5">
                          <CheckIcon className="stroke-secondary size-3" />
                        </span>
                        <span className="text-[14px] text-secondary/70 leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={product.href}>
                    <ButtonWhite textClassName="text-nowrap">
                      Explore {product.name}
                    </ButtonWhite>
                  </Link>
                </div>

                {/* Preview */}
                <div className={isEven ? 'md:order-1' : ''}>
                  <Preview />
                </div>
              </RevealAnimation>
            );
          })}
        </div>
      </section>

      {/* ══ 3. PLATFORM UNIFIED STORY ════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-32">
        <div className="main-container">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>One platform</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Every product. One workspace.</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="mx-auto max-w-[500px] text-background-14/60 leading-relaxed">
                  Nexus AI is not four separate tools bolted together. Every product shares the same
                  foundation — so everything you do stays connected.
                </p>
              </TextReveal>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {platform.map((item, i) => {
                const Icon = item.icon;
                return (
                  <RevealAnimation
                    key={item.title}
                    delay={0.1 + i * 0.1}
                    asChild={false}
                    className="rounded-2xl border border-stroke-3 bg-white p-8 space-y-4"
                  >
                    <div className={`${item.bg} flex size-12 items-center justify-center rounded-xl`}>
                      <Icon className="size-6" style={{ color: item.accent }} />
                    </div>
                    <h3 className="text-heading-6 text-secondary">{item.title}</h3>
                    <p className="text-background-14/60 leading-relaxed text-[15px]">{item.body}</p>
                  </RevealAnimation>
                );
              })}
            </div>

            {/* Cross-product feature highlight */}
            <RevealAnimation
              delay={0.2}
              asChild={false}
              className="relative overflow-hidden rounded-[24px] bg-secondary px-8 py-12 md:px-14 md:py-16"
            >
              {/* Glow blobs */}
              <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full blur-3xl" style={{ background: '#217bfe', opacity: 0.3 }} aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-16 right-1/4 h-56 w-56 rounded-full blur-3xl" style={{ background: '#7458E8', opacity: 0.25 }} aria-hidden="true" />

              <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
                <div className="space-y-4">
                  <h3
                    className="text-white font-bold leading-[1.2]"
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                  >
                    Research in Chat. Design in Creative Studio. Export in Artifacts.
                    <span
                      className="block bg-clip-text text-transparent mt-1"
                      style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                    >
                      All in one session.
                    </span>
                  </h3>
                  <p className="text-white/60 leading-relaxed max-w-[480px]">
                    Start by researching a topic in Chat. Hand it off to Creative Studio to build the deck.
                    Review and edit in Artifacts. Share the link. Zero context switching, zero file juggling.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: MessageCircle, label: 'Chat', sub: 'Research & write', color: '#217bfe' },
                    { icon: ImageIcon,     label: 'Creative Studio', sub: 'Design & create', color: '#ac87eb' },
                    { icon: Code2,         label: 'Code', sub: 'Build & review', color: '#4ade80' },
                    { icon: Layers,        label: 'Artifacts', sub: 'Edit & export', color: '#f07aaa' },
                  ].map(({ icon: Icon2, label, sub, color }) => (
                    <div key={label} className="flex items-center gap-x-3 rounded-xl bg-white/8 p-4">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white/10">
                        <Icon2 className="size-4" style={{ color }} />
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold text-white">{label}</p>
                        <p className="text-[11px] text-white/45">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ══ 4. WHO IT'S FOR ══════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-32">
        <div className="main-container">
          <div className="space-y-10">
            <div className="space-y-4 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Who it is for</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Built for everyone who does real work</h2>
              </TextReveal>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {personas.map((persona, i) => {
                const Icon = persona.icon;
                return (
                  <RevealAnimation
                    key={persona.label}
                    delay={0.05 * (i + 1)}
                    asChild={false}
                    className="rounded-2xl border border-stroke-3 bg-white p-5 space-y-3"
                  >
                    <div className={`${persona.bg} flex size-10 items-center justify-center rounded-xl`}>
                      <Icon className="size-5" style={{ color: persona.accent }} />
                    </div>
                    <h3 className="text-[15px] font-semibold text-secondary">{persona.label}</h3>
                    <p className="text-[13px] text-secondary/55 leading-relaxed">{persona.desc}</p>
                  </RevealAnimation>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pillars;
