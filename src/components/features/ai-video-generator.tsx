import PricingTeaser from '@/src/components/home/pricing-teaser';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import {
  Activity,
  BookOpen,
  Camera,
  CheckCircle,
  Code,
  Download,
  FileText,
  Film,
  Globe,
  Layers,
  MessageSquare,
  Mic,
  Monitor,
  Play,
  Sliders,
  Sparkles,
  Users,
  Video,
  Volume2,
  Wand2,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

/* ─── Hero video mock ─────────────────────────────────── */
function HeroVideoMock() {
  const styles = [
    { label: 'Cinematic', active: true },
    { label: 'Anime', active: false },
    { label: 'Photorealistic', active: false },
    { label: '3D Render', active: false },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden text-[12px]">
      {/* Title bar */}
      <div className="flex items-center gap-x-1.5 border-b border-white/10 px-4 py-3 bg-white/5">
        <span className="size-2.5 rounded-full bg-red-500/70" />
        <span className="size-2.5 rounded-full bg-yellow-500/70" />
        <span className="size-2.5 rounded-full bg-green-500/70" />
        <span className="ml-3 text-[11px] text-white/30">Nexus AI: Video Generator</span>
        <span className="ml-auto flex items-center gap-x-1 text-[10px]">
          <span className="size-1.5 rounded-full bg-[#4c7df0] animate-pulse" />
          <span className="text-white/30">Rendering…</span>
        </span>
      </div>

      {/* Prompt */}
      <div className="border-b border-white/10 px-4 py-3 bg-white/3">
        <p className="mb-1.5 text-[10px] uppercase tracking-wider text-white/30">Prompt</p>
        <div className="rounded-xl border border-white/10 bg-white/8 px-3 py-2.5 text-[11px] leading-relaxed text-white/60">
          Cinematic aerial shot of a futuristic city at golden hour, neon lights reflecting on wet glass streets, ultra-detailed 4K
        </div>
      </div>

      {/* Style + controls row */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 border-b border-white/10 bg-white/3 px-4 py-2.5">
        {styles.map((s) => (
          <span
            key={s.label}
            className={`rounded-full border px-2.5 py-1 text-[10px] ${
              s.active
                ? 'border-[#4c7df0]/50 bg-[#4c7df0]/20 text-[#8ab0f5]'
                : 'border-white/10 bg-white/5 text-white/35'
            }`}
          >
            {s.label}
          </span>
        ))}
        <span className="ml-auto rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-white/35">
          16:9 · 5s · 4K
        </span>
      </div>

      {/* Video preview */}
      <div className="p-3">
        <div className="relative w-full overflow-hidden rounded-xl aspect-video bg-black/40">
          <video
            src="/videos/ai-video-generator/video-4-mini.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Progress overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2.5">
            <div className="flex items-center gap-x-2">
              <button className="flex size-5 shrink-0 items-center justify-center rounded-full bg-white/20 border border-white/30">
                <Play className="ml-0.5 size-2.5 text-white" />
              </button>
              <div className="flex-1 h-1 rounded-full bg-white/20 overflow-hidden">
                <div className="h-full w-3/5 rounded-full bg-white/70" />
              </div>
              <span className="shrink-0 font-mono text-[9px] text-white/50">0:03 / 0:05</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer actions */}
      <div className="flex items-center justify-between border-t border-white/10 bg-white/3 px-4 py-3">
        <div className="flex items-center gap-x-1.5">
          <span className="rounded-full border border-[#4c7df0]/30 bg-[#4c7df0]/20 px-2.5 py-1 text-[10px] font-semibold text-[#8ab0f5]">
            4 variants ready
          </span>
        </div>
        <span className="flex items-center gap-x-1 rounded-full bg-white/10 px-2.5 py-1 text-[10px] text-white/50">
          <Download className="size-3" /> Export MP4
        </span>
      </div>
    </div>
  );
}

/* ─── Video showcase cards data ───────────────────────── */
const videoCards = [
  { src: '/videos/ai-video-generator/video-1.webm', style: 'Cinematic', prompt: 'Aerial city at golden hour, neon reflections on glass' },
  { src: '/videos/ai-video-generator/video-2.webm', style: 'Character', prompt: 'AI persona walking through a fashion editorial scene' },
  { src: '/videos/ai-video-generator/video-3.webm', style: 'Photorealistic', prompt: 'Close-up product reveal with dramatic lighting' },
  { src: '/videos/ai-video-generator/video-4-mini.mp4', style: 'Motion FX', prompt: 'Abstract particle explosion, slow-motion effect' },
  { src: '/videos/ai-video-generator/video-5.webm', style: 'Digital Art', prompt: 'Surreal landscape transformation, watercolour to 3D' },
  { src: '/videos/ai-video-generator/video-6.webm', style: 'Short-form', prompt: 'Energetic transition reel optimised for TikTok' },
  { src: '/videos/ai-video-generator/video-7.webm', style: 'Fashion', prompt: 'Slow-motion editorial — model walking a sunlit catwalk' },
  { src: '/videos/ai-video-generator/video-8.webm', style: 'Lifestyle', prompt: 'Golden-hour portrait sequence with natural motion blur' },
  { src: '/videos/ai-video-generator/video-9.webm', style: '3D Render', prompt: 'Product floating in a dark studio with glass reflections' },
];

/* ─── Steps ───────────────────────────────────────────── */
const steps = [
  {
    n: '01',
    title: 'Write your prompt',
    body: 'Describe your scene, camera movement, style, mood, and subject. The more specific your prompt, the more cinematic the result.',
  },
  {
    n: '02',
    title: 'Choose style and format',
    body: 'Select video style, aspect ratio (16:9, 9:16, 1:1), duration (up to 60s), and resolution. Nexus AI picks the best underlying model for your settings.',
  },
  {
    n: '03',
    title: 'Generate and refine',
    body: 'Get up to 4 video variants per prompt. Regenerate specific clips, extend scenes, add AI narration from Audio Generator, or send to Creative Studio for editing.',
  },
  {
    n: '04',
    title: 'Export and publish',
    body: 'Download MP4, save to Artifacts, or embed with a share link. Formats sized for YouTube, TikTok, Instagram, and presentations out of the box.',
  },
];

/* ─── Feature grid ────────────────────────────────────── */
const videoFeatures = [
  {
    icon: Film,
    title: 'Text to Video',
    desc: 'Describe any scene and Nexus AI generates a cinematic clip with motion, lighting, and depth. No footage, no crew, no editing experience needed.',
    color: '#217bfe',
    bg: 'bg-blue-50',
  },
  {
    icon: Wand2,
    title: 'Image to Video',
    desc: 'Upload any image — a product photo, illustration, or AI-generated artwork — and animate it with realistic motion, parallax, and depth.',
    color: '#ac87eb',
    bg: 'bg-purple-50',
  },
  {
    icon: FileText,
    title: 'Script to Full Video',
    desc: 'Paste a structured script with scene descriptions. Nexus AI generates each scene as a clip and assembles them into a complete narrative video.',
    color: '#f59e0b',
    bg: 'bg-amber-50',
  },
  {
    icon: Users,
    title: 'AI Avatar Video',
    desc: 'Generate a photorealistic AI presenter without a camera. Choose appearance, attire, and expression — your brand face, on demand.',
    color: '#10b981',
    bg: 'bg-emerald-50',
  },
  {
    icon: Camera,
    title: 'Camera Control',
    desc: 'Specify shot type (aerial, close-up, tracking), camera movement (pan, dolly, orbit), and focal length — cinematic direction from a single line of text.',
    color: '#4c7df0',
    bg: 'bg-indigo-50',
  },
  {
    icon: Sliders,
    title: 'Style Control',
    desc: 'Seven video styles: Cinematic, Photorealistic, Anime, 3D Render, Illustration, Watercolor, and Digital Art. Switch style with one click, same prompt.',
    color: '#6366f1',
    bg: 'bg-indigo-50',
  },
  {
    icon: Volume2,
    title: 'Audio Sync',
    desc: 'Pair any video with Audio Generator to add synchronized AI narration, background music, or sound effects — all from the same Creative Studio session.',
    color: '#8b5cf6',
    bg: 'bg-violet-50',
  },
  {
    icon: Monitor,
    title: 'Short-form Export',
    desc: '9:16 vertical video optimised for TikTok, Instagram Reels, and YouTube Shorts — generated directly in the right format, no manual cropping.',
    color: '#ef4444',
    bg: 'bg-red-50',
  },
  {
    icon: Layers,
    title: 'Captions & Subtitles',
    desc: 'Auto-generated captions in 40+ languages with full style control. Add hardcoded or soft subtitles ready for silent-scroll viewing.',
    color: '#06b6d4',
    bg: 'bg-cyan-50',
  },
  {
    icon: Activity,
    title: 'Multi-scene Projects',
    desc: 'Link individual clips into a full video sequence with matching style, pacing, and character consistency across every scene.',
    color: '#f43f5e',
    bg: 'bg-rose-50',
  },
  {
    icon: Zap,
    title: '4K Export',
    desc: 'Studio-quality 4K resolution export for broadcast, YouTube, and large-format display. Optimised file sizes without quality loss.',
    color: '#84cc16',
    bg: 'bg-lime-50',
  },
  {
    icon: Code,
    title: 'API Access',
    desc: 'Generate video programmatically via the Nexus AI API. Text-to-video, image-to-video, and avatar video all available for developers.',
    color: '#0ea5e9',
    bg: 'bg-sky-50',
  },
];

/* ─── Video modes (6) ─────────────────────────────────── */
const videoModes = [
  { name: 'Text to Video', desc: 'Describe a scene and get a cinematic clip with realistic motion.', tags: ['Prompt-driven', 'Any topic', '5–60s', 'Multi-variant'], color: 'text-blue-600', bg: 'bg-blue-50 border-blue-100' },
  { name: 'Image to Video', desc: 'Animate any image with parallax, motion, and depth effects.', tags: ['Photo upload', 'Product shots', 'AI images', 'Portrait motion'], color: 'text-purple-600', bg: 'bg-purple-50 border-purple-100' },
  { name: 'Script to Full Video', desc: 'Scene-by-scene generation from a structured script or outline.', tags: ['Multi-scene', 'Narrative', 'Long-form', 'Auto-assemble'], color: 'text-amber-600', bg: 'bg-amber-50 border-amber-100' },
  { name: 'AI Avatar', desc: 'Photorealistic AI presenter. No camera, no crew, no re-shoots.', tags: ['Talking head', 'Custom looks', 'Any language', 'No camera'], color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-100' },
  { name: 'Short-form (9:16)', desc: 'Vertical video sized and paced for TikTok, Reels, and Shorts.', tags: ['TikTok', 'Reels', 'Shorts', 'Instant export'], color: 'text-rose-600', bg: 'bg-rose-50 border-rose-100' },
  { name: 'Cinematic (21:9)', desc: 'Ultra-wide cinematic output with anamorphic lens character.', tags: ['Widescreen', 'Film look', 'Letterbox', '4K'], color: 'text-indigo-600', bg: 'bg-indigo-50 border-indigo-100' },
];

/* ─── Ecosystem integrations ──────────────────────────── */
const integrations = [
  {
    product: 'AI Audio Generator',
    icon: Volume2,
    color: '#4c7df0',
    bg: 'bg-[#4c7df0]/8',
    border: 'border-[#4c7df0]/20',
    headline: 'Video with a synchronized voice',
    desc: 'Generate your video, then send it directly to Audio Generator for an AI narration, music score, or sound effects layer that matches the on-screen mood and pacing.',
    flow: ['Generate video', 'Add AI narration', 'Sync and export'],
  },
  {
    product: 'Nexus AI Chat',
    icon: MessageSquare,
    color: '#8b5cf6',
    bg: 'bg-[#8b5cf6]/8',
    border: 'border-[#8b5cf6]/20',
    headline: 'Script first, then shoot',
    desc: 'Brief Chat on your topic — it writes a structured, scene-by-scene script. Paste that script into Video Generator and go from idea to draft in minutes, not hours.',
    flow: ['Chat writes script', 'Video Generator shoots it', 'Done in one session'],
  },
  {
    product: 'Creative Studio',
    icon: Sparkles,
    color: '#f59e0b',
    bg: 'bg-[#f59e0b]/8',
    border: 'border-[#f59e0b]/20',
    headline: 'Generate, then perfect',
    desc: 'Take raw AI video straight into Creative Studio to trim scenes, add captions, overlay brand colours and logos, merge with images, and export in every format your campaign needs.',
    flow: ['Generate video', 'Edit in Studio', 'Brand and export'],
  },
  {
    product: 'Artifacts',
    icon: FileText,
    color: '#10b981',
    bg: 'bg-[#10b981]/8',
    border: 'border-[#10b981]/20',
    headline: 'Publish without leaving Nexus AI',
    desc: 'Every finished video lands in Artifacts. Share a link, embed it on a website, or bundle the video alongside research, slides, and code — one URL for the whole project.',
    flow: ['Video saved to Artifacts', 'Share via link', 'Embed anywhere'],
  },
];

/* ─── Personas ────────────────────────────────────────── */
const personas = [
  {
    role: 'Content Creators',
    headline: 'Social-ready video without a camera',
    points: [
      'TikTok and Reels content in minutes',
      'No equipment, no setup, no editing suite',
      'AI persona for faceless channels',
      'Consistent style across every post',
    ],
  },
  {
    role: 'Marketers',
    headline: 'Campaign videos that ship on brief',
    points: [
      'Product demos and ads from a prompt',
      'Multiple variants for A/B testing',
      'On-brand without a production agency',
      'Repurpose one script across every format',
    ],
  },
  {
    role: 'Educators',
    headline: 'Explainer videos students actually watch',
    points: [
      'Animated explainers from lecture notes',
      'Multilingual captions auto-generated',
      'AI presenter without recording yourself',
      'Course videos at scale, not per lesson',
    ],
  },
  {
    role: 'Developers',
    headline: 'Video generation in your pipeline',
    points: [
      'Text-to-video via Nexus AI API',
      'Automated video for data-driven content',
      'Personalized video at scale',
      'Integrate with any existing workflow',
    ],
  },
];

/* ─── FAQ items ───────────────────────────────────────── */
export const aiVideoGeneratorFaqItems = [
  {
    value: 'what-types',
    question: 'What types of video can Nexus AI generate?',
    answer:
      'Nexus AI supports six video modes: Text to Video (generate any scene from a description), Image to Video (animate a still image with motion and depth), Script to Full Video (multi-scene generation from a structured script), AI Avatar Video (photorealistic AI presenter without a camera), Short-form 9:16 (TikTok, Reels, Shorts-ready), and Cinematic 21:9 (ultra-wide film-look output). All modes are available in Creative Studio on Ultimate plan.',
  },
  {
    value: 'length',
    question: 'How long can generated videos be?',
    answer:
      'Individual clips can be up to 60 seconds. Using Script to Full Video mode, you can chain multiple scenes into a complete video of any length. Avatar talking-head videos support up to 60 seconds per generation. There is no overall project length cap — each clip uses credits independently.',
  },
  {
    value: 'aspect-ratios',
    question: 'What aspect ratios are supported?',
    answer:
      'Nexus AI Video supports 16:9 (landscape, YouTube, presentations), 9:16 (vertical, TikTok, Reels, Shorts), 1:1 (square, Instagram feed), and 21:9 (cinematic widescreen). The aspect ratio is selected before generation and affects the underlying model composition — you cannot crop from one ratio to another after generation without quality loss.',
  },
  {
    value: 'audio',
    question: 'Can I add my own audio or narration to generated videos?',
    answer:
      'Yes. Nexus AI Video integrates directly with Audio Generator — generate your video, then immediately add an AI voiceover, background music, or sound effects that are automatically synced to the clip length. You can also upload your own audio file in Creative Studio and align it manually with the waveform editor.',
  },
  {
    value: 'resolution',
    question: 'What resolution does Nexus AI Video export at?',
    answer:
      'Standard export is 1080p (Full HD). 4K export is available on the Ultimate plan and applies to Cinematic and Text-to-Video modes. Short-form (9:16) exports at 1080×1920. All exports are MP4 with H.264 encoding for maximum compatibility across platforms and devices.',
  },
  {
    value: 'commercial',
    question: 'Is generated video commercially licensed?',
    answer:
      'Yes. All video you generate on the Ultimate plan is fully yours to use commercially — ads, YouTube videos, client deliverables, course content, product demos, and broadcast. AI Video Generator is available on the Ultimate plan only (50 videos per month included). Free and Premium plan users cannot access video generation.',
  },
  {
    value: 'avatar',
    question: 'How does AI Avatar video work?',
    answer:
      'Choose an AI avatar from the Nexus AI library (or generate a custom appearance with a text description), write or paste a script, and Nexus AI renders a talking-head video where the avatar delivers your script with natural lip-sync, expression, and eye contact. You can apply your brand colours and background, and add AI narration directly from Audio Generator.',
  },
  {
    value: 'credits',
    question: 'How many video credits are included, and which plan is needed?',
    answer:
      'AI Video Generator is available on the Ultimate plan only. Ultimate includes 750 Creative Studio credits per month and 50 AI videos per month. Video generation costs more credits per run than image or audio generation due to the compute involved. Credits are shared across all Creative Studio modes (images, audio, video). Top-ups are available any time from your account dashboard.',
  },
];

/* ─── Main component ──────────────────────────────────── */
const AiVideoGenerator = () => {
  return (
    <>
      {/* ── Hero ── */}
      <section className="overflow-hidden bg-secondary pt-[160px] pb-0">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-14 lg:gap-x-12">
            <div className="col-span-12 space-y-8 lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary className="border-white/20 bg-white/10 text-white/80">
                  AI Video Generator
                </BadgePrimary>
              </RevealAnimation>
              <div className="space-y-5">
                <TextReveal delay={0.2}>
                  <h1 className="text-white">
                    Turn words into{' '}
                    <span
                      className="bg-clip-text text-transparent"
                      style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                    >
                      cinematic video
                    </span>
                  </h1>
                </TextReveal>
                <TextReveal delay={0.3}>
                  <p className="max-w-[500px] text-white/60">
                    Generate studio-quality video from a text prompt, animate any image, or build
                    a full scene from a script — then add AI audio, edit in Creative Studio, and
                    publish anywhere. Available on Ultimate plan.
                  </p>
                </TextReveal>
              </div>
              <RevealAnimation delay={0.4} asChild={false} className="flex flex-wrap gap-3">
                <Link href="https://app.mynexusai.com/upgrade/ultimate">
                  <ButtonPrimary textClassName="text-nowrap">Start generating video</ButtonPrimary>
                </Link>
                <Link href="/products">
                  <ButtonWhite textClassName="text-nowrap">Explore all products</ButtonWhite>
                </Link>
              </RevealAnimation>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.5} direction="right" offset={60}>
                <HeroVideoMock />
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ── Video marquee ── */}
      <section className="pt-16 md:pt-20">
        <style>{`
          @keyframes video-scroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .video-marquee-track {
            animation: video-scroll 64s linear infinite;
          }
          .video-marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background-13 to-transparent md:w-36" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background-13 to-transparent md:w-36" />
          <div className="video-marquee-track flex w-max gap-3">
            {[...videoCards, ...videoCards].map((card, i) => (
              <div
                key={`${card.src}-${i}`}
                className="group relative flex-shrink-0 w-[175px] md:w-[220px] overflow-hidden rounded-2xl bg-black"
                style={{ aspectRatio: '9/16' }}
              >
                <video
                  src={card.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <span
                    className="mb-1.5 inline-block rounded-full border border-white/20 bg-white/15 px-2.5 py-0.5 text-[10px] font-medium text-white/80"
                  >
                    {card.style}
                  </span>
                  <p className="text-[11px] font-medium leading-snug text-white md:text-[12px]">
                    {card.prompt}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
              <h2>From prompt to publish-ready video in four steps</h2>
            </TextReveal>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <RevealAnimation key={step.n} delay={0.1 + i * 0.08} direction="up" offset={40}>
                <div className="h-full space-y-4 rounded-2xl border border-stroke-3 bg-white p-6">
                  <span className="font-mono text-[13px] font-bold text-secondary/20">{step.n}</span>
                  <h3 className="text-[17px] font-semibold leading-snug text-secondary">{step.title}</h3>
                  <p className="text-tagline-3 leading-relaxed text-secondary/60">{step.body}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features grid ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container space-y-14">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Powerful Features</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Everything you need to produce professional video</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="mx-auto max-w-[520px] text-secondary/60">
                From a single scene to a full campaign series. One workspace, every tool — no
                separate subscriptions, no switching apps.
              </p>
            </TextReveal>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {videoFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <RevealAnimation key={feat.title} delay={0.04 + i * 0.04} direction="up" offset={30}>
                  <div className="h-full space-y-4 rounded-2xl border border-stroke-3 bg-white p-5">
                    <div className={`${feat.bg} flex size-10 items-center justify-center rounded-xl`}>
                      <Icon className="size-5" style={{ color: feat.color }} />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-[15px] font-semibold leading-snug text-secondary">{feat.title}</h3>
                      <p className="text-[13px] leading-relaxed text-secondary/55">{feat.desc}</p>
                    </div>
                  </div>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Video modes ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container space-y-14">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Video Modes</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Six modes for every video need</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="mx-auto max-w-[520px] text-secondary/60">
                Switch modes without switching tools. Every mode draws from the same 750-credit
                Ultimate pool — no separate subscriptions per mode.
              </p>
            </TextReveal>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {videoModes.map((vm, i) => (
              <RevealAnimation key={vm.name} delay={0.04 + i * 0.05} direction="up" offset={30}>
                <div className={`h-full space-y-3 rounded-2xl border p-5 ${vm.bg}`}>
                  <p className={`text-[11px] font-bold uppercase tracking-widest ${vm.color}`}>
                    {vm.name}
                  </p>
                  <p className="text-[13px] leading-relaxed text-secondary/70">{vm.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {vm.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/80 bg-white/70 px-2 py-0.5 text-[10px] text-secondary/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ecosystem integrations ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container space-y-14">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Better Together</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Works with every part of Nexus AI</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="mx-auto max-w-[540px] text-secondary/60">
                Video Generator is one piece of a connected creative platform. Pair it with Chat,
                Audio Generator, Creative Studio, and Artifacts for end-to-end video production
                without ever leaving Nexus AI.
              </p>
            </TextReveal>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {integrations.map((intg, i) => {
              const Icon = intg.icon;
              return (
                <RevealAnimation key={intg.product} delay={0.1 + i * 0.08} direction="up" offset={35}>
                  <div className={`h-full rounded-2xl border ${intg.border} ${intg.bg} p-6 space-y-4`}>
                    <div className="flex items-center gap-x-3">
                      <div
                        className="flex size-9 shrink-0 items-center justify-center rounded-xl"
                        style={{ background: `${intg.color}18`, border: `1px solid ${intg.color}30` }}
                      >
                        <Icon className="size-4.5" style={{ color: intg.color }} />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary/40">
                          {intg.product}
                        </p>
                        <p className="text-[15px] font-semibold text-secondary leading-snug">{intg.headline}</p>
                      </div>
                    </div>
                    <p className="text-[13px] leading-relaxed text-secondary/60">{intg.desc}</p>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
                      {intg.flow.map((step, j) => (
                        <div key={step} className="flex items-center gap-x-2">
                          <span className="rounded-full border border-secondary/15 bg-white px-2.5 py-1 text-[11px] font-medium text-secondary/70">
                            {step}
                          </span>
                          {j < intg.flow.length - 1 && (
                            <span className="text-secondary/25 text-[10px]">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Personas ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container space-y-14">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Who uses it</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Built for creators, teams, and developers</h2>
            </TextReveal>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {personas.map((p, i) => (
              <RevealAnimation key={p.role} delay={0.1 + i * 0.08} direction="up" offset={40}>
                <div className="h-full space-y-4 rounded-2xl border border-stroke-3 bg-white p-6">
                  <div>
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-secondary/40">
                      {p.role}
                    </p>
                    <h3 className="text-[16px] font-semibold leading-snug text-secondary">{p.headline}</h3>
                  </div>
                  <ul className="space-y-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-x-2">
                        <CheckCircle className="mt-0.5 size-3.5 shrink-0 text-secondary/50" />
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

      {/* ── Prompt tips callout ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <RevealAnimation
            delay={0.1}
            asChild={false}
            className="rounded-3xl bg-secondary px-8 py-12 md:px-14 md:py-16"
          >
            <div className="grid grid-cols-12 items-center gap-y-10 lg:gap-x-16">
              <div className="col-span-12 space-y-4 lg:col-span-5">
                <TextReveal delay={0.1}>
                  <h2 className="text-white">Prompts that generate cinematic video</h2>
                </TextReveal>
                <p className="text-white/60">
                  Specific prompts produce specific results. Add these four elements to every
                  generation and you will consistently get studio-quality output.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { n: '1', label: 'Subject', eg: '"a lone astronaut walking on a red-dust planet"' },
                    { n: '2', label: 'Camera', eg: '"slow dolly forward", "aerial drone shot", "close-up"' },
                    { n: '3', label: 'Style', eg: '"cinematic", "anime", "photorealistic", "3D render"' },
                    { n: '4', label: 'Mood & light', eg: '"golden hour", "neon-lit rain", "overcast minimalist"' },
                  ].map((tip) => (
                    <div key={tip.n} className="space-y-2 rounded-2xl border border-white/10 bg-white/8 p-4">
                      <div className="flex items-center gap-x-2">
                        <span
                          className="flex size-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
                          style={{ background: 'var(--color-gradient-logo)' }}
                        >
                          {tip.n}
                        </span>
                        <span className="text-[13px] font-semibold text-white">{tip.label}</span>
                      </div>
                      <p className="text-[11px] italic leading-relaxed text-white/40">{tip.eg}</p>
                    </div>
                  ))}
                </div>
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

export default AiVideoGenerator;
