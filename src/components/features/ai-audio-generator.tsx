import PricingTeaser from '@/src/components/home/pricing-teaser';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import {
  Activity,
  BookOpen,
  CheckCircle,
  Code,
  Download,
  FileText,
  Globe,
  Headphones,
  Languages,
  MessageSquare,
  Mic,
  Music,
  Play,
  Radio,
  Repeat2,
  Sliders,
  Sparkles,
  Users,
  Volume2,
  Waves,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

/* ─── Shared waveform heights ────────────────────────── */
const waveHeights = [30,50,70,45,80,60,90,55,75,40,85,65,50,95,70,45,60,80,35,55,72,88,60,70,48,82,55,42,68,78,52,72,88,44,66,92,58,38,74,62,50,80,65,45];

/* ─── Hero audio mock ────────────────────────────────── */
function HeroAudioMock() {
  const voices = [
    { name: 'Aria', accent: 'American', active: true },
    { name: 'Marcus', accent: 'British', active: false },
    { name: 'Sophia', accent: 'Australian', active: false },
    { name: 'James', accent: 'Neutral', active: false },
  ];
  const played = 15;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden text-[12px]">
      {/* Title bar */}
      <div className="flex items-center gap-x-1.5 border-b border-white/10 px-4 py-3 bg-white/5">
        <span className="size-2.5 rounded-full bg-red-500/70" />
        <span className="size-2.5 rounded-full bg-yellow-500/70" />
        <span className="size-2.5 rounded-full bg-green-500/70" />
        <span className="ml-3 text-[11px] text-white/30">Nexus AI: Audio Generator</span>
        <span className="ml-auto flex items-center gap-x-1 text-[10px]">
          <span className="size-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/30">Ready</span>
        </span>
      </div>

      {/* Script input */}
      <div className="border-b border-white/10 px-4 py-3 bg-white/3">
        <p className="mb-1.5 text-[10px] uppercase tracking-wider text-white/30">Script</p>
        <div className="rounded-xl border border-white/10 bg-white/8 px-3 py-2.5 text-[11px] leading-relaxed text-white/60">
          Welcome to the future of work. With Nexus AI, every task becomes effortless — from writing to images, audio, and code, all in one place.
        </div>
      </div>

      {/* Voice selector */}
      <div className="border-b border-white/10 px-4 py-3 bg-white/3">
        <p className="mb-2 text-[10px] uppercase tracking-wider text-white/30">Voice</p>
        <div className="grid grid-cols-4 gap-1.5">
          {voices.map((v) => (
            <div
              key={v.name}
              className={`rounded-lg border px-2 py-2 text-center ${
                v.active
                  ? 'border-[#4c7df0]/60 bg-[#4c7df0]/15'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              <div className={`text-[11px] font-semibold ${v.active ? 'text-[#8ab0f5]' : 'text-white/50'}`}>
                {v.name}
              </div>
              <div className="text-[9px] text-white/25">{v.accent}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 border-b border-white/10 bg-white/3 px-4 py-2.5">
        {[
          { icon: Globe, label: 'English (US)' },
          { icon: Zap, label: 'Speed: 1.0×' },
          { icon: Sliders, label: 'Natural tone' },
        ].map((c) => (
          <span
            key={c.label}
            className="flex items-center gap-x-1 rounded-full border border-white/10 bg-white/8 px-2.5 py-1 text-[10px] text-white/45"
          >
            <c.icon className="size-3" />
            {c.label}
          </span>
        ))}
      </div>

      {/* Waveform playback */}
      <div className="px-4 py-4">
        <div className="flex items-center gap-x-3">
          <button className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#4c7df0]/40 bg-[#4c7df0]/30">
            <Play className="ml-0.5 size-3.5 text-[#8ab0f5]" />
          </button>
          <div className="flex h-9 flex-1 items-center gap-x-0.5">
            {waveHeights.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-full"
                style={{
                  height: `${h}%`,
                  background:
                    i < played
                      ? 'var(--color-gradient-logo)'
                      : 'rgba(255,255,255,0.15)',
                }}
              />
            ))}
          </div>
          <span className="shrink-0 font-mono text-[10px] text-white/30">0:14 / 0:32</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-white/10 bg-white/3 px-4 py-3">
        <div className="flex items-center gap-x-1.5">
          <span className="rounded-full border border-[#4c7df0]/30 bg-[#4c7df0]/20 px-2.5 py-1 text-[10px] font-semibold text-[#8ab0f5]">
            Generating…
          </span>
          <span className="text-[10px] text-white/25">MP3 · 128 kbps</span>
        </div>
        <span className="flex items-center gap-x-1 rounded-full bg-white/10 px-2.5 py-1 text-[10px] text-white/50">
          <Download className="size-3" /> Download
        </span>
      </div>
    </div>
  );
}

/* ─── Voice cloning mock ─────────────────────────────── */
function VoiceCloningMock() {
  const cloneSteps = [
    { label: 'Upload', done: true },
    { label: 'Analyse', done: true },
    { label: 'Train', done: false, active: true },
    { label: 'Ready', done: false },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-stroke-3 bg-white text-[12px]">
      <div className="flex items-center gap-x-1.5 border-b border-stroke-3 bg-background-13 px-4 py-3">
        <Mic className="size-3.5 text-secondary/50" />
        <span className="text-[11px] font-medium text-secondary/60">Voice Cloning Studio</span>
        <span className="ml-auto flex items-center gap-x-1 text-[10px] text-[#4c7df0]">
          <span className="size-1.5 rounded-full bg-[#4c7df0] animate-pulse" />
          Training…
        </span>
      </div>

      {/* Uploaded sample */}
      <div className="mx-4 mt-4 rounded-xl border border-stroke-3 bg-background-13 p-3">
        <div className="flex items-center gap-x-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-green-100">
            <Mic className="size-4 text-green-600" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[12px] font-semibold text-secondary">voice-sample.mp3</p>
            <p className="text-[10px] text-secondary/40">0:45 · Excellent quality</p>
          </div>
          <span className="shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-[9px] font-bold text-green-600">✓</span>
        </div>
        <div className="mt-2.5 flex h-5 items-center gap-x-0.5">
          {waveHeights.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-full bg-green-400/50"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      {/* Progress steps */}
      <div className="px-4 pt-4">
        <div className="flex items-start">
          {cloneSteps.map((s, i, arr) => (
            <div key={s.label} className="flex flex-1 flex-col items-center gap-y-1.5">
              <div className="flex w-full items-center">
                {i > 0 && (
                  <div className={`h-0.5 flex-1 ${arr[i - 1].done ? 'bg-green-400' : 'bg-stroke-3'}`} />
                )}
                <div
                  className={`flex size-5 shrink-0 items-center justify-center rounded-full text-[9px] font-bold ${
                    s.done
                      ? 'bg-green-500 text-white'
                      : (s as {active?: boolean}).active
                      ? 'animate-pulse bg-[#4c7df0] text-white'
                      : 'bg-stroke-3 text-secondary/30'
                  }`}
                >
                  {s.done ? '✓' : i + 1}
                </div>
                {i < arr.length - 1 && (
                  <div className={`h-0.5 flex-1 ${s.done ? 'bg-green-400' : 'bg-stroke-3'}`} />
                )}
              </div>
              <span
                className={`text-[9px] ${
                  (s as {active?: boolean}).active
                    ? 'font-semibold text-secondary'
                    : s.done
                    ? 'text-green-600'
                    : 'text-secondary/30'
                }`}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-4 pt-3 pb-2">
        <div className="h-1.5 overflow-hidden rounded-full bg-stroke-3">
          <div className="h-full w-2/3 rounded-full" style={{ background: 'var(--color-gradient-logo)' }} />
        </div>
        <p className="mt-1 text-[10px] text-secondary/40">67% complete · ~30 seconds remaining</p>
      </div>

      {/* Script preview */}
      <div className="border-t border-stroke-3 bg-background-13 px-4 py-3">
        <p className="mb-1.5 text-[10px] text-secondary/40">Test your clone:</p>
        <div className="rounded-lg border border-stroke-3 bg-white px-3 py-2 text-[11px] text-secondary/60">
          Hello, this is my AI voice clone. It sounds exactly like the original.
        </div>
      </div>
    </div>
  );
}

/* ─── "Where to access" mock ─────────────────────────── */
function AccessMock() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="space-y-3 rounded-2xl border border-stroke-3 bg-white p-5">
        <div className="flex items-center gap-x-2">
          <div className="flex size-8 items-center justify-center rounded-xl bg-[#4c7df0]/10">
            <MessageSquare className="size-4 text-[#4c7df0]" />
          </div>
          <p className="text-[14px] font-semibold text-secondary">Nexus AI Chat</p>
        </div>
        <div className="space-y-2 rounded-lg bg-background-13 p-3 text-[11px]">
          <p className="text-secondary/50">You →</p>
          <p className="text-secondary/80">Turn this paragraph into a 30-second voiceover, professional tone</p>
          <div className="h-px bg-stroke-3" />
          <p className="text-secondary/50">Nexus AI →</p>
          <div className="flex items-center gap-x-2 rounded-md border border-stroke-3 bg-white px-3 py-2">
            <button className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary">
              <Play className="ml-0.5 size-2.5 text-white" />
            </button>
            <div className="flex h-4 flex-1 items-center gap-x-0.5">
              {waveHeights.slice(0, 24).map((h, i) => (
                <div key={i} className="flex-1 rounded-full bg-secondary/20" style={{ height: `${h}%` }} />
              ))}
            </div>
            <span className="text-[9px] text-secondary/40">0:28</span>
          </div>
          <p className="text-[10px] text-secondary/40">Generated · MP3 · Professional voice</p>
        </div>
        <p className="text-[12px] text-secondary/50">Request audio mid-conversation and refine with follow-up prompts.</p>
      </div>
      <div className="space-y-3 rounded-2xl border border-stroke-3 bg-white p-5">
        <div className="flex items-center gap-x-2">
          <div className="flex size-8 items-center justify-center rounded-xl bg-[#ac87eb]/15">
            <Sparkles className="size-4 text-[#ac87eb]" />
          </div>
          <p className="text-[14px] font-semibold text-secondary">Creative Studio</p>
        </div>
        <div className="space-y-2 rounded-lg bg-background-13 p-3 text-[11px]">
          <div className="flex flex-wrap gap-1.5">
            {['Voice library', 'Batch export', 'Waveform editor', 'Clone manager'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#ac87eb]/20 bg-[#ac87eb]/15 px-2 py-0.5 text-[10px] text-[#8a60cc]"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="space-y-1.5 pt-1">
            {['Narration_v2.mp3', 'Podcast_ep1.mp3', 'Ad_voiceover.mp3'].map((f, i) => (
              <div key={f} className="flex items-center gap-x-2 rounded-md border border-stroke-3 bg-white px-2.5 py-1.5">
                <Volume2 className="size-3 shrink-0 text-secondary/40" />
                <span className="flex-1 text-[10px] text-secondary/70 truncate">{f}</span>
                <span className="text-[9px] text-secondary/30">{['0:32', '2:15', '0:30'][i]}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-[12px] text-secondary/50">Full voice workspace with batch runs, clones, and organized Folders.</p>
      </div>
    </div>
  );
}

/* ─── Audio showcase cards ───────────────────────────── */
const audioCards = [
  { type: 'Narration', icon: Volume2, prompt: 'Warm male voice narrating a deep sea documentary', duration: '0:32', lang: 'English', gradFrom: '#0c1452', gradTo: '#1e3a8a', waveColor: '#60a5fa' },
  { type: 'Music', icon: Music, prompt: 'Upbeat electronic track with synths for a tech product launch', duration: '1:20', lang: 'Instrumental', gradFrom: '#1e1b4b', gradTo: '#4c1d95', waveColor: '#a78bfa' },
  { type: 'Voice Clone', icon: Mic, prompt: 'Custom cloned voice delivering a product tutorial in Spanish', duration: '0:45', lang: 'Español', gradFrom: '#0f172a', gradTo: '#0e7490', waveColor: '#22d3ee' },
  { type: 'Podcast', icon: Radio, prompt: 'Two-host AI conversation on the future of work', duration: '2:15', lang: 'English', gradFrom: '#1a0533', gradTo: '#6d28d9', waveColor: '#c084fc' },
  { type: 'Sound FX', icon: Activity, prompt: 'Thunderstorm — heavy rain, rolling thunder, and lightning', duration: '0:20', lang: 'SFX', gradFrom: '#052e16', gradTo: '#065f46', waveColor: '#34d399' },
  { type: 'Voiceover', icon: Headphones, prompt: 'Energetic female voice for a 30-second fitness app commercial', duration: '0:30', lang: 'English', gradFrom: '#4c0519', gradTo: '#9f1239', waveColor: '#fb7185' },
  { type: 'Audiobook', icon: BookOpen, prompt: 'Rich dramatic storytelling for a fantasy novel', duration: '3:10', lang: 'English', gradFrom: '#1c1917', gradTo: '#78350f', waveColor: '#fbbf24' },
  { type: 'E-Learning', icon: FileText, prompt: 'Patient instructor explaining machine learning step by step', duration: '1:45', lang: 'English', gradFrom: '#0c1452', gradTo: '#155e75', waveColor: '#38bdf8' },
];

/* ─── Steps ──────────────────────────────────────────── */
const steps = [
  {
    n: '01',
    title: 'Write or paste your script',
    body: 'Type, paste, or upload any text. From a single sentence to a full article, Nexus AI handles any length.',
  },
  {
    n: '02',
    title: 'Choose your voice',
    body: 'Pick from 500+ AI voices across languages, accents, ages, and styles. Or clone your own voice from a 30-second sample.',
  },
  {
    n: '03',
    title: 'Set tone and delivery',
    body: 'Adjust speed, pitch, energy, and emotional style — globally or line by line. Match any brand or creative brief.',
  },
  {
    n: '04',
    title: 'Generate and export',
    body: 'Download MP3 or WAV, embed with a link, or pipe directly into Creative Studio. Your audio is yours to keep.',
  },
];

/* ─── Feature grid ───────────────────────────────────── */
const audioFeatures = [
  {
    icon: Volume2,
    title: 'Text to Speech',
    desc: 'Convert any written content into natural-sounding speech. Blogs, emails, scripts, legal docs — any text becomes audio instantly.',
    color: '#217bfe',
    bg: 'bg-blue-50',
  },
  {
    icon: Mic,
    title: 'Voice Cloning',
    desc: 'Upload 30 seconds of audio and Nexus AI trains a voice model that sounds exactly like the original. Use it on any script, in any language.',
    color: '#ac87eb',
    bg: 'bg-purple-50',
  },
  {
    icon: Music,
    title: 'Music Generation',
    desc: 'Describe a track — genre, mood, tempo, instrumentation — and get a full composition with melody, harmony, and beats.',
    color: '#f59e0b',
    bg: 'bg-amber-50',
  },
  {
    icon: Activity,
    title: 'Sound Effects',
    desc: 'Generate custom SFX from plain-language descriptions. Thunderstorms, office ambience, cinematic hits, UI sounds — anything.',
    color: '#10b981',
    bg: 'bg-emerald-50',
  },
  {
    icon: Radio,
    title: 'Podcast Creator',
    desc: 'Transform articles, notes, or briefs into podcast-style episodes with multiple host voices, intros, and natural conversation flow.',
    color: '#8b5cf6',
    bg: 'bg-violet-50',
  },
  {
    icon: Headphones,
    title: 'Voiceover Studio',
    desc: 'Professional-grade narration for explainer videos, ads, e-learning, and presentations. Studio output, no studio required.',
    color: '#ef4444',
    bg: 'bg-red-50',
  },
  {
    icon: Sliders,
    title: 'Emotion & Tone Control',
    desc: 'Specify mood, energy, pacing, and delivery style per line or for the whole script. Excited, calm, authoritative, warm — your choice.',
    color: '#4c7df0',
    bg: 'bg-indigo-50',
  },
  {
    icon: Languages,
    title: '80+ Languages',
    desc: 'Generate voice in over 80 languages with natural accent preservation. Voice clones carry across languages without re-recording.',
    color: '#06b6d4',
    bg: 'bg-cyan-50',
  },
  {
    icon: Users,
    title: 'Voice Library',
    desc: '500+ curated AI voices covering all genders, ages, accents, and styles — from professional narrators to character voices.',
    color: '#f43f5e',
    bg: 'bg-rose-50',
  },
  {
    icon: Waves,
    title: 'Waveform Editor',
    desc: 'Trim, split, arrange, and layer audio clips inside Creative Studio. Fine-tune timing without leaving Nexus AI.',
    color: '#0ea5e9',
    bg: 'bg-sky-50',
  },
  {
    icon: Repeat2,
    title: 'Batch Export',
    desc: 'Generate multiple audio files in a single run. Organize everything into Folders for campaigns, courses, or series.',
    color: '#84cc16',
    bg: 'bg-lime-50',
  },
  {
    icon: Code,
    title: 'API Access',
    desc: 'Integrate voice generation directly into your product or workflow via the Nexus AI API. TTS, cloning, and music — all available programmatically.',
    color: '#6366f1',
    bg: 'bg-indigo-50',
  },
];

/* ─── Voice types ────────────────────────────────────── */
const voiceTypes = [
  { name: 'Text to Speech', desc: 'Natural AI voices for any written content. Read anything aloud in seconds.', tags: ['Narration', 'Articles', 'Emails', 'Docs'], color: 'text-blue-600', bg: 'bg-blue-50 border-blue-100' },
  { name: 'Voice Clone', desc: 'Replicate any voice from a 30-second sample. Consistent across every script.', tags: ['Your voice', 'Brand voice', '30s sample', '80+ langs'], color: 'text-purple-600', bg: 'bg-purple-50 border-purple-100' },
  { name: 'Music & Beats', desc: 'Full compositions from a text prompt. Genre, mood, and tempo under your control.', tags: ['Pop', 'Electronic', 'Cinematic', 'Lo-fi'], color: 'text-amber-600', bg: 'bg-amber-50 border-amber-100' },
  { name: 'Sound Effects', desc: 'Custom SFX from plain-language descriptions. Ambient, one-shot, or looping.', tags: ['Ambient', 'UI sounds', 'Cinematic', 'Nature'], color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-100' },
  { name: 'Podcast Audio', desc: 'Multi-voice conversations and long-form narration with natural flow and pacing.', tags: ['Multi-host', 'Long-form', 'Intros', 'Ad reads'], color: 'text-violet-600', bg: 'bg-violet-50 border-violet-100' },
  { name: 'Voiceover', desc: 'Studio-grade audio for ads, e-learning, explainers, and video presentations.', tags: ['Commercial', 'Explainer', 'E-learning', 'Promo'], color: 'text-rose-600', bg: 'bg-rose-50 border-rose-100' },
];

/* ─── Personas ───────────────────────────────────────── */
const personas = [
  {
    role: 'Content Creators',
    headline: 'Voiceovers in minutes, not days',
    points: [
      'YouTube narration without a microphone',
      'TikTok and Reel voiceovers in any accent',
      'Podcast intros and ad reads on demand',
      'No voice talent invoices or retakes',
    ],
  },
  {
    role: 'Professionals',
    headline: 'Presentations that finally sound polished',
    points: [
      'E-learning modules with clear narration',
      'Explainer videos for clients and teams',
      'Multilingual training without re-recording',
      'Sales demos with consistent brand voice',
    ],
  },
  {
    role: 'Developers',
    headline: 'Voice into any product, one API call',
    points: [
      'TTS for apps, bots, and accessibility layers',
      'Voice agents with emotional intelligence',
      'Interactive audio for games and experiences',
      'Scalable voice output without infra overhead',
    ],
  },
  {
    role: 'Educators',
    headline: 'Teach in every language, no re-recording',
    points: [
      'Multilingual course audio from one script',
      'Lecture narration with adjustable pace',
      'Audio summaries of long readings',
      'Accessibility-first content by default',
    ],
  },
];

/* ─── FAQ items ─────────────────────────────────────── */
export const aiAudioGeneratorFaqItems = [
  {
    value: 'what-types',
    question: 'What types of audio can Nexus AI generate?',
    answer:
      'Nexus AI supports six audio modes: Text to Speech (natural voices for any written content), Voice Cloning (replicate a voice from a 30-second sample), Music Generation (full compositions from text prompts), Sound Effects (custom SFX from plain-language descriptions), Podcast Creator (multi-voice episodes from notes or articles), and Voiceover Studio (professional narration for video and media). All six modes are available inside Creative Studio on paid plans.',
  },
  {
    value: 'voice-cloning',
    question: 'How does voice cloning work?',
    answer:
      'Upload a clean audio sample — 30 seconds minimum, 2 minutes recommended for best results. Nexus AI analyses the vocal characteristics and trains a voice model that replicates the tone, cadence, accent, and timbre of the original. The cloned voice then reads any script you provide, in any of 80+ supported languages. Voice cloning requires explicit consent and is governed by the Nexus AI acceptable use policy. Available on Premium and Ultimate plans.',
  },
  {
    value: 'languages',
    question: 'How many languages does Nexus AI Audio support?',
    answer:
      'Nexus AI Audio supports over 80 languages, including English, Spanish, French, German, Portuguese, Mandarin, Japanese, Arabic, Hindi, and many more. Voice clones carry across languages without re-recording — the same voice model can narrate in Spanish, French, or Japanese while preserving the original speaker\'s character.',
  },
  {
    value: 'voices',
    question: 'How many AI voices are available in the library?',
    answer:
      'The Nexus AI voice library includes 500+ curated AI voices covering all genders, age ranges, accents, and delivery styles — from warm documentary narrators to energetic commercial voices, corporate presenters, and storytelling voices. Voice clones you create are added to your personal library and available in any Folder.',
  },
  {
    value: 'tone-control',
    question: 'Can I control the tone and emotion of generated audio?',
    answer:
      'Yes. Emotion and delivery settings can be applied globally (for the whole script) or line by line. You can specify mood (excited, calm, authoritative, warm), energy level (high, medium, low), speaking pace, and pitch. Advanced prompting in the script itself — such as [pause], [emphasis], or descriptive notes — also guides delivery.',
  },
  {
    value: 'commercial',
    question: 'Can I use generated audio commercially?',
    answer:
      'Yes. All audio you generate on a paid plan is fully yours to use commercially, including ads, YouTube videos, podcasts, e-learning courses, audiobooks, apps, and products. AI Audio Generator is available on Premium and Ultimate plans only. Free plan users can preview voices but cannot generate or export audio.',
  },
  {
    value: 'formats',
    question: 'What file formats does Nexus AI Audio export?',
    answer:
      'Audio exports are available in MP3 (128 kbps or 320 kbps) and WAV (16-bit or 24-bit). Podcast episodes and multi-track projects export as individually named files organized in your Folder. An embed link is also available for sharing directly from Nexus AI without downloading.',
  },
  {
    value: 'credits',
    question: 'How many audio credits are included in each plan?',
    answer:
      'AI Audio Generator is available on paid plans only. Premium includes 100 Creative Studio credits per month, shared across image generation, audio generation, and other creative features. Ultimate includes 750 credits per month and also unlocks AI Video generation. Credits reset on your billing date, and top-ups are available any time from your account dashboard.',
  },
];

/* ─── Main component ─────────────────────────────────── */
const AiAudioGenerator = () => {
  return (
    <>
      {/* ── Hero ── */}
      <section className="overflow-hidden bg-secondary pt-[160px] pb-0">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-14 lg:gap-x-12">
            <div className="col-span-12 space-y-8 lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary className="border-white/20 bg-white/10 text-white/80">
                  AI Audio Generator
                </BadgePrimary>
              </RevealAnimation>
              <div className="space-y-5">
                <TextReveal delay={0.2}>
                  <h1 className="text-white">
                    Give your content{' '}
                    <span
                      className="bg-clip-text text-transparent"
                      style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                    >
                      a voice
                    </span>
                  </h1>
                </TextReveal>
                <TextReveal delay={0.3}>
                  <p className="max-w-[500px] text-white/60">
                    Turn any text into natural speech, clone any voice, compose music, and create
                    sound effects — all from a single prompt. Available in Chat and Creative Studio
                    on paid plans.
                  </p>
                </TextReveal>
              </div>
              <RevealAnimation delay={0.4} asChild={false} className="flex flex-wrap gap-3">
                <Link href="/upgrade/premium">
                  <ButtonPrimary textClassName="text-nowrap">Start generating audio</ButtonPrimary>
                </Link>
                <Link href="/products">
                  <ButtonWhite textClassName="text-nowrap">Explore all products</ButtonWhite>
                </Link>
              </RevealAnimation>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.5} direction="right" offset={60}>
                <HeroAudioMock />
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ── Audio showcase marquee ── */}
      <section className="pt-16 md:pt-20">
        <style>{`
          @keyframes audio-scroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .audio-marquee-track {
            animation: audio-scroll 52s linear infinite;
          }
          .audio-marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background-13 to-transparent md:w-36" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background-13 to-transparent md:w-36" />
          <div className="audio-marquee-track flex w-max gap-3">
            {[...audioCards, ...audioCards].map((card, i) => {
              const CardIcon = card.icon;
              return (
                <div
                  key={`${card.type}-${i}`}
                  className="relative flex w-[210px] flex-shrink-0 flex-col overflow-hidden rounded-2xl md:w-[255px]"
                  style={{
                    background: `linear-gradient(150deg, ${card.gradFrom}, ${card.gradTo})`,
                  }}
                >
                  {/* Waveform area */}
                  <div className="flex h-[130px] items-center px-4 md:h-[160px]">
                    <div className="flex h-14 w-full items-center gap-x-0.5">
                      {waveHeights.map((h, j) => (
                        <div
                          key={j}
                          className="flex-1 rounded-full"
                          style={{ height: `${h}%`, background: card.waveColor, opacity: 0.7 }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Info area */}
                  <div className="flex flex-1 flex-col justify-between border-t border-white/10 p-4 pt-3">
                    <div className="mb-2 flex items-center gap-x-2">
                      <div
                        className="flex size-5 items-center justify-center rounded-full"
                        style={{ background: `${card.waveColor}25`, border: `1px solid ${card.waveColor}40` }}
                      >
                        <CardIcon className="size-3" style={{ color: card.waveColor }} />
                      </div>
                      <span
                        className="text-[10px] font-semibold uppercase tracking-wider"
                        style={{ color: card.waveColor }}
                      >
                        {card.type}
                      </span>
                    </div>
                    <p className="mb-3 text-[11px] leading-snug text-white/70">{card.prompt}</p>
                    <div className="flex items-center gap-x-2">
                      <span className="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[9px] text-white/50">
                        {card.duration}
                      </span>
                      <span className="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[9px] text-white/50">
                        {card.lang}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
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
              <h2>From script to studio-quality audio in four steps</h2>
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
              <h2>Everything you need to create professional audio</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="mx-auto max-w-[520px] text-secondary/60">
                From a single voiceover to a full podcast series. Nexus AI packs a complete audio
                production suite into one workspace — no plugins, no separate subscriptions.
              </p>
            </TextReveal>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audioFeatures.map((feat, i) => {
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

      {/* ── Voice types ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container space-y-14">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Audio Modes</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Six modes for every audio need</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="mx-auto max-w-[520px] text-secondary/60">
                Switch between audio modes with one click. The same Creative Studio credit pool
                covers everything — no separate tools for each type.
              </p>
            </TextReveal>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {voiceTypes.map((vt, i) => (
              <RevealAnimation key={vt.name} delay={0.04 + i * 0.05} direction="up" offset={30}>
                <div className={`h-full space-y-3 rounded-2xl border p-5 ${vt.bg}`}>
                  <p className={`text-[11px] font-bold uppercase tracking-widest ${vt.color}`}>
                    {vt.name}
                  </p>
                  <p className="text-[13px] leading-relaxed text-secondary/70">{vt.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {vt.tags.map((tag) => (
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

      {/* ── Voice cloning ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-16">
            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.2} direction="left" offset={50}>
                <VoiceCloningMock />
              </RevealAnimation>
            </div>
            <div className="col-span-12 space-y-8 lg:col-span-6">
              <div className="space-y-4">
                <RevealAnimation delay={0.1}>
                  <BadgePrimary>Voice Cloning</BadgePrimary>
                </RevealAnimation>
                <TextReveal delay={0.2}>
                  <h2>Clone any voice in 30 seconds</h2>
                </TextReveal>
                <TextReveal delay={0.3}>
                  <p className="max-w-[440px] text-secondary/60">
                    Upload a short audio sample and Nexus AI creates a voice model that captures the
                    speaker's unique tone, cadence, and accent. Use it on any script, in any language,
                    any time.
                  </p>
                </TextReveal>
              </div>
              <RevealAnimation delay={0.4} asChild={false} className="space-y-2.5">
                {[
                  '30-second sample for instant clone',
                  '2-minute sample for studio-grade accuracy',
                  'Carries across 80+ languages without re-recording',
                  'Consent verification built into every clone',
                  'Stored securely in your private voice library',
                ].map((pt) => (
                  <div key={pt} className="flex items-center gap-x-2.5">
                    <CheckCircle className="size-4 shrink-0 text-secondary" />
                    <span className="text-[14px] text-secondary/70">{pt}</span>
                  </div>
                ))}
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <Link href="/upgrade/premium">
                  <ButtonPrimary textClassName="text-nowrap">Clone your voice</ButtonPrimary>
                </Link>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ── Where to access ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container space-y-10">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Where to use it</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Available in Chat and Creative Studio</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="mx-auto max-w-[520px] text-secondary/60">
                Request audio on the fly in Chat, or manage full voice projects in Creative Studio.
                Both use the same underlying models — the difference is the workflow.
              </p>
            </TextReveal>
          </div>
          <RevealAnimation delay={0.3}>
            <AccessMock />
          </RevealAnimation>
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
              <h2>Built for every creator, team, and developer</h2>
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

      {/* ── Script tips callout ── */}
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
                  <h2 className="text-white">Scripts that generate great audio</h2>
                </TextReveal>
                <p className="text-white/60">
                  The quality of your prompt drives the quality of the output. Include these four
                  elements and get consistent, professional results every time.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { n: '1', label: 'Voice type', eg: '"professional narrator", "friendly host", "energetic presenter"' },
                    { n: '2', label: 'Tone & mood', eg: '"warm and calm", "urgent", "conversational", "authoritative"' },
                    { n: '3', label: 'Audience', eg: '"for a 35-year-old executive", "for beginners", "for children"' },
                    { n: '4', label: 'Purpose', eg: '"30-second ad", "e-learning module", "podcast intro"' },
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

export default AiAudioGenerator;
