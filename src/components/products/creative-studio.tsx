import chatbotHeroImg from '@/public/images/opai-img-138.jpg';
import AnimatedCreativeDemo from '@/src/components/home/animated-creative-demo';
import Image from 'next/image';
import PricingTeaser from '@/src/components/home/pricing-teaser';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { CheckIcon } from '@/src/components/shared/icon';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import {
  Accordion,
  AccordionAction,
  AccordionContent,
  AccordionIcon,
  AccordionItem,
  AccordionTitle,
} from '@/src/components/shared/ui/accordion';
import {
  AudioLines,
  Brush,
  CheckCircle,
  FileText,
  Film,
  Image as ImageIcon,
  LayoutTemplate,
  Palette,
  PenLine,
  Presentation,
  Sliders,
  Sparkles,
  Type,
  Wand2,
} from 'lucide-react';
import Link from 'next/link';

/* ─── Output type grid ───────────────────────────────── */
const outputTypes = [
  { icon: ImageIcon,    label: 'AI Images',    description: 'Photorealistic, illustrated or abstract',   accent: '#217bfe', bg: 'bg-blue-50'   },
  { icon: Presentation, label: 'Slides',       description: 'Full decks from a single prompt',            accent: '#ac87eb', bg: 'bg-purple-50' },
  { icon: FileText,     label: 'Documents',    description: 'Reports, proposals and whitepapers',         accent: '#078efb', bg: 'bg-sky-50'    },
  { icon: Film,         label: 'Video',        description: 'Script-to-video in minutes',                 accent: '#ee4d5d', bg: 'bg-rose-50'   },
  { icon: AudioLines,   label: 'Audio',        description: 'Voiceovers and podcast scripts',             accent: '#f65c9c', bg: 'bg-pink-50'   },
  { icon: LayoutTemplate, label: 'Wireframes', description: 'Low-fi UI layouts from a brief',            accent: '#4c7df0', bg: 'bg-indigo-50' },
];

/* ─── Image style mockup ─────────────────────────────── */
function ImageGeneratorMock() {
  const styles = ['Photorealistic', 'Illustrated', 'Abstract', '3D Render', 'Flat design'];
  const aspects = ['1:1', '16:9', '9:16', '4:3'];
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden">
      <div className="border-b border-stroke-3 bg-background-13 px-4 py-3 flex items-center gap-x-2">
        <ImageIcon className="size-4 text-secondary/40" />
        <span className="text-[13px] font-medium text-secondary">AI Image Generator</span>
      </div>
      <div className="p-4 space-y-4">
        {/* Prompt */}
        <div className="flex gap-x-2">
          <div className="flex-1 rounded-xl border border-stroke-3 bg-background-13 px-3 py-2.5 text-[12px] text-secondary/50">
            A futuristic workspace with warm lighting, clean lines and a minimalist aesthetic
          </div>
          <button type="button" className="shrink-0 rounded-xl px-4 py-2.5 text-[12px] font-semibold text-white" style={{ background: 'var(--color-gradient-logo)' }}>
            Generate
          </button>
        </div>
        {/* Style pills */}
        <div className="flex flex-wrap gap-1.5">
          {styles.map((s, i) => (
            <span key={s} className={`rounded-full border px-3 py-1 text-[11px] font-medium cursor-default ${i === 0 ? 'bg-secondary text-white border-secondary' : 'border-stroke-3 text-secondary/50 bg-background-13'}`}>{s}</span>
          ))}
        </div>
        {/* Image grid */}
        <div className="grid grid-cols-2 gap-2">
          {[
            { gradient: 'from-blue-100 to-purple-100', label: 'Variant 1' },
            { gradient: 'from-amber-100 to-rose-100',  label: 'Variant 2' },
            { gradient: 'from-teal-100 to-blue-100',   label: 'Variant 3' },
            { gradient: 'from-violet-100 to-pink-100', label: 'Variant 4' },
          ].map(img => (
            <div key={img.label} className={`h-20 rounded-xl bg-gradient-to-br ${img.gradient} flex items-center justify-center relative`}>
              <ImageIcon className="size-6 text-secondary/20" />
              <span className="absolute bottom-1.5 right-2 text-[9px] text-secondary/30 font-medium">{img.label}</span>
            </div>
          ))}
        </div>
        {/* Aspect ratio */}
        <div className="flex items-center gap-x-2">
          <span className="text-[11px] text-secondary/40 font-medium">Aspect ratio:</span>
          {aspects.map((a, i) => (
            <span key={a} className={`rounded-lg border px-2.5 py-1 text-[11px] font-medium cursor-default ${i === 1 ? 'bg-secondary text-white border-secondary' : 'border-stroke-3 text-secondary/40'}`}>{a}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Slides mockup ──────────────────────────────────── */
function SlidesMock() {
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden">
      <div className="border-b border-stroke-3 bg-background-13 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <Presentation className="size-4 text-secondary/40" />
          <span className="text-[13px] font-medium text-secondary">AI Slides</span>
        </div>
        <div className="flex gap-x-2 text-[11px]">
          <span className="text-secondary/40">10 slides</span>
          <span className="text-secondary/20">·</span>
          <span className="text-[#4c7df0] font-medium cursor-default">Export PPTX</span>
        </div>
      </div>
      <div className="flex gap-x-3 p-4 overflow-x-auto">
        {[
          { bg: 'bg-[#000c60]', label: 'Cover',   content: 'Q3 Growth Report', dark: true  },
          { bg: 'bg-white',     label: 'Revenue', content: '+38% YoY',          dark: false },
          { bg: 'bg-[#f4f2fe]', label: 'Product', content: '6 features shipped',dark: false },
          { bg: 'bg-[#000c60]', label: 'Team',    content: '42 people',         dark: true  },
          { bg: 'bg-[#7458e8]', label: "What's Next", content: 'Q4 Targets',    dark: true  },
        ].map((slide, i) => (
          <div key={slide.label} className={`${slide.bg} shrink-0 w-28 h-20 rounded-lg flex flex-col justify-between p-2 border ${i === 0 ? 'border-[#4c7df0]' : 'border-transparent'}`}>
            <span className={`text-[8px] ${slide.dark ? 'text-white/30' : 'text-secondary/30'}`}>{String(i + 1).padStart(2,'0')} · {slide.label}</span>
            <span className={`text-[10px] font-semibold leading-tight ${slide.dark ? 'text-white' : 'text-secondary'}`}>{slide.content}</span>
          </div>
        ))}
        <div className="shrink-0 w-28 h-20 rounded-lg border border-dashed border-stroke-3 flex items-center justify-center text-secondary/25 text-[11px] cursor-default">+ Add</div>
      </div>
      <div className="border-t border-stroke-3 px-4 py-2.5 flex items-center gap-x-2 text-[11px]">
        <span className="rounded-lg bg-background-13 border border-stroke-3 px-2.5 py-1 text-secondary/50 cursor-default">Edit slide</span>
        <span className="rounded-lg bg-background-13 border border-stroke-3 px-2.5 py-1 text-secondary/50 cursor-default">Restyle</span>
        <span className="rounded-lg bg-background-13 border border-stroke-3 px-2.5 py-1 text-secondary/50 cursor-default">Speaker notes</span>
        <span className="ml-auto rounded-lg px-3 py-1 text-white text-[11px] font-semibold cursor-default" style={{ background: 'var(--color-gradient-logo)' }}>Export</span>
      </div>
    </div>
  );
}

/* ─── Brand Kit mockup ────────────────────────────────── */
function BrandKitMock() {
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden">
      <div className="border-b border-stroke-3 bg-background-13 px-4 py-3 flex items-center gap-x-2">
        <Palette className="size-4 text-secondary/40" />
        <span className="text-[13px] font-medium text-secondary">Brand Kit</span>
        <span className="ml-auto rounded-full bg-green-50 border border-green-200/60 px-2.5 py-0.5 text-[10px] text-green-600 font-medium">Active</span>
      </div>
      <div className="p-4 space-y-4">
        {/* Colors */}
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-secondary/40">Brand colours</p>
          <div className="flex gap-x-2">
            {[
              { color: '#000C60', label: 'Navy' },
              { color: '#4c7df0', label: 'Blue' },
              { color: '#ac87eb', label: 'Violet' },
              { color: '#ee4d5d', label: 'Coral' },
              { color: '#ffffff', label: 'White', border: true },
            ].map(c => (
              <div key={c.label} className="flex flex-col items-center gap-y-1">
                <div className={`size-8 rounded-lg ${c.border ? 'border border-stroke-3' : ''}`} style={{ background: c.color }} />
                <span className="text-[8px] text-secondary/40">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Fonts */}
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-secondary/40">Typography</p>
          <div className="flex gap-x-3">
            <div className="rounded-lg border border-stroke-3 bg-background-13 px-3 py-2 flex-1">
              <p className="text-[9px] text-secondary/40">Heading</p>
              <p className="text-[14px] font-bold text-secondary leading-tight">Onest</p>
            </div>
            <div className="rounded-lg border border-stroke-3 bg-background-13 px-3 py-2 flex-1">
              <p className="text-[9px] text-secondary/40">Body</p>
              <p className="text-[13px] text-secondary/70 leading-tight">Onest Regular</p>
            </div>
          </div>
        </div>
        {/* Logo */}
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-secondary/40">Logo</p>
          <div className="flex gap-x-2">
            {['Primary', 'Dark', 'White'].map(v => (
              <div key={v} className={`flex-1 rounded-lg border border-stroke-3 p-2.5 flex items-center justify-center ${v === 'White' ? 'bg-secondary' : 'bg-background-13'}`}>
                <span className={`text-[10px] font-bold ${v === 'White' ? 'text-white' : 'text-secondary'}`}>{v}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Apply toggle */}
        <div className="flex items-center justify-between rounded-xl bg-[#f4f2fe] border border-[#ac87eb]/20 px-3 py-2.5">
          <div>
            <p className="text-[12px] font-semibold text-secondary">Apply to all outputs</p>
            <p className="text-[10px] text-secondary/40 mt-0.5">Every asset uses your brand automatically</p>
          </div>
          <div className="w-9 h-5 rounded-full bg-secondary flex items-center justify-end pr-0.5">
            <div className="size-4 rounded-full bg-white shadow-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Video mockup ───────────────────────────────────── */
function VideoMock() {
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden">
      <div className="border-b border-stroke-3 bg-background-13 px-4 py-3 flex items-center gap-x-2">
        <Film className="size-4 text-secondary/40" />
        <span className="text-[13px] font-medium text-secondary">AI Video</span>
        <span className="ml-auto text-[11px] text-secondary/40">0:45 · 16:9 · 1080p</span>
      </div>
      <div className="p-4 space-y-3">
        {/* Video preview */}
        <div className="relative aspect-video rounded-xl bg-gradient-to-br from-secondary/90 to-[#4c7df0]/70 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="size-12 rounded-full bg-white/20 flex items-center justify-center cursor-default">
              <div className="size-0 border-y-[8px] border-y-transparent border-l-[14px] border-l-white ml-1" />
            </div>
          </div>
          <div className="absolute bottom-2 left-0 right-0 px-3">
            <div className="h-1 w-full rounded-full bg-white/20">
              <div className="h-full w-[35%] rounded-full bg-white" />
            </div>
            <div className="flex justify-between mt-1 text-[9px] text-white/50">
              <span>0:16</span><span>0:45</span>
            </div>
          </div>
        </div>
        {/* Scene list */}
        <div className="space-y-1.5">
          {[
            { scene: '01', label: 'Hook: Problem statement', dur: '0:08' },
            { scene: '02', label: 'Solution overview',         dur: '0:12' },
            { scene: '03', label: 'Key features walkthrough',  dur: '0:15' },
            { scene: '04', label: 'CTA and close',             dur: '0:10' },
          ].map(s => (
            <div key={s.scene} className={`flex items-center gap-x-2.5 rounded-lg px-2.5 py-1.5 ${s.scene === '02' ? 'bg-[#f4f2fe] border border-[#ac87eb]/20' : ''}`}>
              <span className="text-[10px] font-bold text-secondary/30 w-4">{s.scene}</span>
              <span className="flex-1 text-[12px] text-secondary/70">{s.label}</span>
              <span className="text-[10px] text-secondary/35">{s.dur}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Audio mockup ───────────────────────────────────── */
function AudioMock() {
  const voices = [
    { name: 'Aria',   tone: 'Warm · Professional', active: true  },
    { name: 'Marcus', tone: 'Deep · Authoritative', active: false },
    { name: 'Zoe',    tone: 'Bright · Friendly',   active: false },
  ];
  const bars = [3,5,8,6,9,7,10,8,6,9,5,7,8,6,4,9,7,5,8,6,9,7,5,4];
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden">
      <div className="border-b border-stroke-3 bg-background-13 px-4 py-3 flex items-center gap-x-2">
        <AudioLines className="size-4 text-secondary/40" />
        <span className="text-[13px] font-medium text-secondary">AI Audio</span>
      </div>
      <div className="p-4 space-y-4">
        {/* Waveform */}
        <div className="flex items-center gap-x-0.5 h-12 bg-background-13 rounded-xl px-3">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-full" style={{ height: `${h * 10}%`, background: i < 10 ? 'var(--color-gradient-logo)' : '#e2e8f2' }} />
          ))}
        </div>
        {/* Voices */}
        <div className="space-y-1.5">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-secondary/40">Voice persona</p>
          {voices.map(v => (
            <div key={v.name} className={`flex items-center gap-x-3 rounded-xl border px-3 py-2 cursor-default ${v.active ? 'border-secondary bg-secondary/5' : 'border-stroke-3'}`}>
              <div className={`size-8 rounded-full flex items-center justify-center text-[12px] font-bold ${v.active ? 'bg-secondary text-white' : 'bg-background-13 text-secondary/40'}`}>
                {v.name[0]}
              </div>
              <div className="flex-1">
                <p className={`text-[13px] font-semibold ${v.active ? 'text-secondary' : 'text-secondary/50'}`}>{v.name}</p>
                <p className="text-[10px] text-secondary/35">{v.tone}</p>
              </div>
              {v.active && <CheckCircle className="size-4 text-secondary shrink-0" />}
            </div>
          ))}
        </div>
        <div className="flex gap-x-2">
          <div className="flex-1 rounded-lg border border-stroke-3 bg-background-13 px-3 py-1.5 text-center">
            <p className="text-[10px] text-secondary/40">Pace</p>
            <p className="text-[12px] font-semibold text-secondary">Normal</p>
          </div>
          <div className="flex-1 rounded-lg border border-stroke-3 bg-background-13 px-3 py-1.5 text-center">
            <p className="text-[10px] text-secondary/40">Format</p>
            <p className="text-[12px] font-semibold text-secondary">MP3</p>
          </div>
          <button type="button" className="flex-1 rounded-lg py-1.5 text-[12px] font-semibold text-white" style={{ background: 'var(--color-gradient-logo)' }}>
            Export
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Wireframe mockup ────────────────────────────────── */
function WireframeMock() {
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden">
      <div className="border-b border-stroke-3 bg-background-13 px-4 py-3 flex items-center gap-x-2">
        <LayoutTemplate className="size-4 text-secondary/40" />
        <span className="text-[13px] font-medium text-secondary">Wireframe</span>
        <span className="ml-auto text-[11px] text-secondary/40">Mobile · Dashboard</span>
      </div>
      <div className="p-4">
        <div className="border border-stroke-3 rounded-xl overflow-hidden bg-background-13">
          {/* Status bar */}
          <div className="bg-secondary/8 px-3 py-1.5 flex items-center justify-between">
            <div className="h-1.5 w-8 rounded-full bg-secondary/20" />
            <div className="flex gap-x-1">
              {[1,2,3].map(i => <div key={i} className="h-1.5 w-1.5 rounded-full bg-secondary/20" />)}
            </div>
          </div>
          {/* Nav */}
          <div className="bg-white border-b border-stroke-3 px-3 py-2 flex items-center gap-x-2">
            <div className="size-4 rounded bg-secondary/15" />
            <div className="flex-1 h-1.5 rounded-full bg-secondary/10 max-w-[60%]" />
            <div className="size-5 rounded-full bg-secondary/15" />
          </div>
          {/* Content */}
          <div className="p-3 space-y-2">
            {/* Hero block */}
            <div className="h-16 rounded-lg bg-secondary/10 flex items-center justify-center">
              <div className="text-[9px] font-semibold text-secondary/30">HERO / BANNER</div>
            </div>
            {/* 2 col */}
            <div className="grid grid-cols-2 gap-1.5">
              {[1,2,3,4].map(i => (
                <div key={i} className="h-12 rounded-lg bg-secondary/8 flex items-center justify-center">
                  <div className="text-[8px] text-secondary/25">CARD {i}</div>
                </div>
              ))}
            </div>
            {/* List */}
            <div className="space-y-1">
              {[85, 70, 90].map((w, i) => (
                <div key={i} className="flex items-center gap-x-2">
                  <div className="size-3 rounded bg-secondary/15 shrink-0" />
                  <div className="h-1.5 rounded-full bg-secondary/10" style={{ width: `${w}%` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── FAQ data ───────────────────────────────────────── */
const faqItems = [
  {
    value: 'what-is-creative-studio',
    question: 'What is Creative Studio?',
    answer: 'Creative Studio is the AI-powered creative workspace inside Nexus AI. It generates images, presentation slides, long-form documents, short-form video, audio voiceovers, and UI wireframes from a prompt. All outputs stay on-brand when you connect a Brand Kit.',
  },
  {
    value: 'brand-kit',
    question: 'What is the Brand Kit and how does it work?',
    answer: 'The Brand Kit lets you define your brand colours, typography and logo. Once set, every asset Creative Studio generates, including images, slides and documents, automatically uses your brand palette and fonts. You set it once and every output is on-brand without extra prompting.',
  },
  {
    value: 'image-styles',
    question: 'What image styles can I generate?',
    answer: 'You can choose from photorealistic, illustrated, abstract, 3D render and flat design styles. You can also specify aspect ratios (1:1, 16:9, 9:16, 4:3) and batch-generate multiple variations from a single prompt to compare options.',
  },
  {
    value: 'slides-export',
    question: 'Can I export slides to PowerPoint or Google Slides?',
    answer: 'Yes. Slides generated in Creative Studio can be exported as PPTX (PowerPoint) files. Speaker notes are generated automatically for every slide. You can also edit any slide inline or ask the AI to rewrite a section before exporting.',
  },
  {
    value: 'video-length',
    question: 'How long can AI-generated videos be?',
    answer: 'Creative Studio is optimised for short-form video: explainers, social clips and product demos up to two minutes. The video is assembled from stock footage, motion graphics and an AI voiceover based on your script or bullet-point outline.',
  },
  {
    value: 'audio-voices',
    question: 'How many voice personas are available for audio?',
    answer: 'Creative Studio includes dozens of voice personas across different tones (warm, authoritative, friendly, energetic) and accents. You can adjust the speaking pace, emphasis and export as MP3 or WAV. Podcast episode scripts can also be generated from a topic brief.',
  },
  {
    value: 'credits',
    question: 'How does Creative Studio credit usage work?',
    answer: 'Creative Studio uses AI credits that are included in every plan. Premium includes 150 Creative Studio credits per month and Ultimate includes 750. Each image, slide deck, document, video clip or audio file consumes a set number of credits. Additional credits can be purchased as add-ons.',
  },
  {
    value: 'artifacts',
    question: 'How does Creative Studio relate to Artifacts?',
    answer: 'Every asset Creative Studio generates opens in the Artifacts panel, the live canvas where you can preview, edit and export your work. Slides appear slide-by-slide, images appear in a visual editor, and documents appear in a formatted text editor. You never have to copy output out of the chat.',
  },
];

/* ─── Main component ─────────────────────────────────── */
const CreativeStudio = () => {
  return (
    <>
      {/* ══ 1. HERO ══════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-[160px] pb-0">
        <figure className="absolute inset-0" aria-hidden="true">
          <Image
            src={chatbotHeroImg}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </figure>
        <div className="main-container relative z-10">
          <div className="mx-auto max-w-[800px] space-y-6 text-center">
            <RevealAnimation delay={0.1}>
              <span
                className="inline-flex items-center gap-x-2 rounded-full px-4 py-1.5 text-[13px] font-semibold text-secondary"
                style={{ background: 'rgba(0,12,96,0.08)' }}
              >
                <Sparkles className="size-3.5" />
                Creative Studio
              </span>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h1 className="text-secondary leading-[1.1]">
                Every creative format.{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                >
                  One workspace.
                </span>
              </h1>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="mx-auto max-w-[600px] text-lg text-secondary/70 leading-relaxed">
                Generate images, slides, documents, video, audio and wireframes from a single
                prompt. Connect your Brand Kit and every output is on-brand from the first
                generation.
              </p>
            </TextReveal>
            <RevealAnimation delay={0.4} asChild={false} className="flex flex-wrap items-center justify-center gap-3">
              <Link href="https://app.mynexusai.com/signup" target="_blank" rel="noopener noreferrer">
                <ButtonPrimary textClassName="text-center text-nowrap">
                  Start creating free
                </ButtonPrimary>
              </Link>
              <Link href="/pricing">
                <ButtonWhite textClassName="text-center text-nowrap">
                  View pricing
                </ButtonWhite>
              </Link>
            </RevealAnimation>
          </div>

          {/* Animated slides demo from homepage */}
          <RevealAnimation
            delay={0.5}
            asChild={false}
            className="mx-auto mt-14 w-full max-w-[820px] overflow-hidden rounded-t-2xl border border-white/10 bg-secondary shadow-[0_-20px_80px_rgba(76,125,240,0.25)] p-6"
          >
            <div className="flex items-center gap-x-1.5 border-b border-white/10 -mx-6 px-4 pb-3 mb-4">
              <span className="size-2.5 rounded-full bg-red-500/70" />
              <span className="size-2.5 rounded-full bg-yellow-500/70" />
              <span className="size-2.5 rounded-full bg-green-500/70" />
              <span className="ml-3 text-[11px] text-white/30">Nexus AI Creative Studio</span>
              <span className="ml-auto text-[10px] text-white/20">AI Slides · Generating&hellip;</span>
            </div>
            <div className="h-[320px]">
              <AnimatedCreativeDemo />
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* ══ 2. OUTPUT TYPES ══════════════════════════════ */}
      <section className="border-b border-stroke-3 bg-white">
        <div className="main-container">
          <div className="grid grid-cols-3 gap-0 divide-x divide-stroke-3 md:grid-cols-6">
            {outputTypes.map((type, i) => {
              const Icon = type.icon;
              return (
                <div key={type.label} className={`flex flex-col items-center gap-y-2 py-6 text-center px-2 ${i < 3 ? 'border-b border-stroke-3 md:border-b-0' : ''}`}>
                  <div className={`${type.bg} flex size-9 items-center justify-center rounded-xl`}>
                    <Icon style={{ color: type.accent }} className="size-4.5" />
                  </div>
                  <p className="text-[13px] font-semibold text-secondary">{type.label}</p>
                  <p className="text-[11px] text-secondary/45 leading-tight hidden sm:block">{type.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ 3. BRAND KIT ═════════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Brand Kit</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Set your brand once. Every output uses it.</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  Upload your logo, define your colour palette, and set your preferred typography.
                  Creative Studio applies your Brand Kit automatically to every image, slide deck,
                  document and video it generates. No prompt engineering required.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.35}>
                <p className="text-background-14/60 leading-relaxed">
                  Brand Kits are shared across your workspace, so everyone on your team produces
                  on-brand work without needing to know your hex codes.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'Upload your logo in SVG, PNG or AI format',
                    'Define primary, secondary and accent colours',
                    'Set heading and body font preferences',
                    'Shared across your entire team workspace',
                    'Overridable per project when needed',
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
              <BrandKitMock />
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ══ 4. AI IMAGE GENERATOR ════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <RevealAnimation delay={0.2} asChild={false} className="order-2 lg:order-1">
              <ImageGeneratorMock />
            </RevealAnimation>
            <div className="order-1 lg:order-2 space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>AI Image Generator</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Studio-quality visuals from a description</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  Describe what you need and Nexus AI generates four variations instantly.
                  Choose from photorealistic photography, editorial illustration, abstract art
                  or 3D render styles, in any aspect ratio for web, social or print.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'Photorealistic, illustrated, abstract and 3D styles',
                    'Square, landscape, portrait and widescreen outputs',
                    'Brand palette applied automatically via Brand Kit',
                    'Batch-generate four variations from one prompt',
                    'Download in PNG, JPG or SVG',
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

      {/* ══ 5. AI SLIDES ═════════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>AI Slides</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">From a single prompt to a finished deck</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  Type your topic and Nexus AI builds a structured, designed slide deck with
                  headlines, body copy, layout and speaker notes on every slide. Edit any slide
                  by typing, or ask the AI to rewrite a specific section in plain language.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'Full deck outline generated from a brief',
                    'On-brand layouts using your Brand Kit',
                    'Inline editing or AI rewrites per slide',
                    'Speaker notes auto-generated for every slide',
                    'Export to PowerPoint or PDF',
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
              <SlidesMock />
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ══ 6. AI VIDEO ══════════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <RevealAnimation delay={0.2} asChild={false} className="order-2 lg:order-1">
              <VideoMock />
            </RevealAnimation>
            <div className="order-1 lg:order-2 space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>AI Video</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Script to video in under five minutes</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  Paste a script or bullet-point outline and Nexus AI assembles a short-form
                  video with stock footage, motion graphics and a voiceover. No timeline editor,
                  no video production knowledge needed.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'Script or outline to video automatically',
                    'Stock footage and motion graphics included',
                    'AI voiceover in multiple accents and tones',
                    'Subtitles and captions auto-generated',
                    'Export as MP4 in 1080p or 4K',
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

      {/* ══ 7. AI AUDIO ══════════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>AI Audio</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Professional voiceovers from any text</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  Generate studio-quality narration from any text. Choose a voice persona that
                  fits your brand, adjust the pace and emphasis, and download a finished audio
                  file ready to use in a video, podcast or presentation.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'Dozens of voice personas across tones and accents',
                    'Adjustable pace, emphasis and pausing',
                    'MP3 and WAV export',
                    'Podcast episode scripts generated from a topic brief',
                    'Voiceover synced to video automatically',
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
              <AudioMock />
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ══ 8. WIREFRAMES ════════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <RevealAnimation delay={0.2} asChild={false} className="order-2 lg:order-1">
              <WireframeMock />
            </RevealAnimation>
            <div className="order-1 lg:order-2 space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Wireframes</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Low-fidelity UI layouts from a product brief</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  Describe a screen or user flow in plain language and Nexus AI draws a
                  low-fidelity wireframe. Use it for early-stage validation, user testing scripts
                  or a head start before handing off to a designer.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'Web and mobile layout wireframes',
                    'Multi-screen user flow diagrams',
                    'Annotations and labels included automatically',
                    'Export as SVG, PNG or Figma-ready format',
                    'Iterate in plain language ("add a sidebar")',
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

      {/* ══ 9. WHY CREATIVE STUDIO ═══════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-12">
            <div className="space-y-5 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Why Creative Studio</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">One place for every creative format</h2>
              </TextReveal>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {[
                {
                  icon: Palette,
                  title: 'On-brand from the first generation',
                  body: 'Brand Kit means you never have to specify your brand colours, fonts or logo in a prompt. Every asset is on-brand automatically.',
                  accent: '#217bfe', bg: 'bg-blue-50',
                },
                {
                  icon: Wand2,
                  title: 'Six formats, one subscription',
                  body: 'Images, slides, docs, video, audio and wireframes all included. No separate tools, no separate subscriptions, no copying between apps.',
                  accent: '#ac87eb', bg: 'bg-purple-50',
                },
                {
                  icon: PenLine,
                  title: 'Finished in Artifacts, not in a transcript',
                  body: 'Every output opens in the Artifacts canvas for live preview and inline editing. Export a real PPTX, MP4 or SVG, not pasted text.',
                  accent: '#ee4d5d', bg: 'bg-rose-50',
                },
              ].map((d, i) => {
                const Icon = d.icon;
                return (
                  <RevealAnimation key={d.title} delay={0.1 * (i + 1)} asChild={false} className="bg-secondary rounded-2xl p-7 space-y-4">
                    <div className={`${d.bg} flex size-11 items-center justify-center rounded-xl`}>
                      <Icon style={{ color: d.accent }} className="size-5" />
                    </div>
                    <h3 className="text-heading-6 text-white">{d.title}</h3>
                    <p className="text-white/55 leading-relaxed text-[15px]">{d.body}</p>
                  </RevealAnimation>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 10. PRICING ══════════════════════════════════ */}
      <PricingTeaser />

      {/* ══ 11. FAQ ══════════════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="flex flex-col items-start justify-center gap-y-6 overflow-hidden lg:flex-row lg:gap-x-18 lg:gap-y-0">
            <RevealAnimation delay={0.1} direction="left" offset={100} className="w-full lg:w-1/2">
              <div className="space-y-14 text-center lg:text-left">
                <div className="space-y-5">
                  <RevealAnimation delay={0.1}>
                    <BadgePrimary>Frequently Asked Questions</BadgePrimary>
                  </RevealAnimation>
                  <div className="space-y-3">
                    <TextReveal delay={0.2}>
                      <h2>Frequently asked questions</h2>
                    </TextReveal>
                    <TextReveal delay={0.3}>
                      <p className="text-background-14/60 mx-auto max-w-[450px] lg:mx-0">
                        Everything you need to know about Nexus AI Creative Studio.
                      </p>
                    </TextReveal>
                  </div>
                </div>
                <Link href="/contact" className="flex justify-center lg:justify-start">
                  <ButtonWhite
                    className="mx-auto w-[80%]! md:mx-0 md:w-fit!"
                    textClassName="text-center max-sm:flex-1 max-sm:px-0! max-sm:pr-8!"
                  >
                    Contact Us
                  </ButtonWhite>
                </Link>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2} direction="right" offset={100} className="w-full lg:w-1/2">
              <Accordion defaultOpen={faqItems[0].value} className="space-y-4" aria-label="Creative Studio FAQ">
                {faqItems.map((item) => (
                  <AccordionItem key={item.value} value={item.value} className="group rounded-[20px] bg-white px-4 md:px-6">
                    <AccordionAction
                      showIcon={false}
                      className="flex w-full cursor-pointer items-center justify-between gap-x-4 pt-6 transition-all duration-400 ease-in-out group-data-[state=closed]:pb-6 group-data-[state=open]:pb-4 md:pt-8 md:group-data-[state=closed]:pb-8"
                    >
                      <AccordionTitle>{item.question}</AccordionTitle>
                      <AccordionIcon className="shrink-0" />
                    </AccordionAction>
                    <AccordionContent contentClassName="text-tagline-3 sm:text-tagline-2 font-inter-tight cursor-text pb-8 text-left">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreativeStudio;
