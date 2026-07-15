'use client';

import bottomGradient from '@/public/images/bottom-gradient.svg';
import avatar1 from '@/public/images/nexus-avatar-1.jpg';
import avatar2 from '@/public/images/nexus-avatar-2.jpg';
import avatar3 from '@/public/images/nexus-avatar-3.jpg';
import heroBg from '@/public/images/nexus-ai-hero.jpg';
import leftElement from '@/public/images/ns-img-27.svg';
import CounterNumberOnScroll from '@/src/components/animation/counter-number-on-scroll';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { ArrowUpIcon } from '@/src/components/shared/icon';
import AvatarItem from '@/src/components/shared/ui/avatar-reveal/avatar-item';
import AvatarReveal from '@/src/components/shared/ui/avatar-reveal/avatar-reveal';
import { useSlightlyMoveOnMouseMove } from '@/src/hooks/use-slightly-move-on-mouse-move';
import { cn } from '@/src/utils/cn';
import {
  BookOpen,
  FileText,
  FolderOpen,
  MessageSquare,
  Sparkles,
  Paperclip,
  Mic,
  Lock,
  X,
  PenLine,
  Search,
  ImageIcon,
  Code2,
} from 'lucide-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useCallback, useEffect } from 'react';

const SUGGESTIONS = [
  { label: 'Write something', icon: PenLine,   starter: 'Write a ' },
  { label: 'Research a topic', icon: Search,    starter: 'Research and summarise ' },
  { label: 'Generate an image', icon: ImageIcon, starter: 'Generate an image of ' },
  { label: 'Write code',       icon: Code2,     starter: 'Write code to ' },
];

/* Rotating headline word — the kinds of work Nexus AI finishes for you. */
const ROTATING_WORDS = [
  'Work',
  'Assignments',
  'Essays',
  'Videos',
  'Presentations',
  'Research',
  'Reports',
  'Code',
  'Designs',
  'Summaries',
];

function RotatingWord() {
  const [idx, setIdx] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setLeaving(true);
      setTimeout(() => {
        setIdx((i) => (i + 1) % ROTATING_WORDS.length);
        setLeaving(false);
      }, 250);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className={cn(
        'inline-block bg-(image:--color-gradient-logo) bg-clip-text text-transparent transition-all duration-250 ease-out',
        leaving ? '-translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
      )}
    >
      {ROTATING_WORDS[idx]}
    </span>
  );
}

/* Rotating use-case placeholders — shows people what Nexus AI can do. */
const PLACEHOLDER_EXAMPLES = [
  'Write an academic paper with citations...',
  'Summarize this 80-page PDF into key takeaways...',
  'Design a pitch deck for my product launch...',
  'Debug my code and explain what was wrong...',
  'Research a topic and draft a cited report...',
];

function HeroPromptBox() {
  const { status } = useSession();
  const [prompt,       setPrompt]       = useState('');
  const [placeholderIdx, setPlaceholderIdx] = useState(0);

  /* cycle the placeholder while the box is empty */
  useEffect(() => {
    const id = setInterval(() => {
      setPlaceholderIdx((i) => (i + 1) % PLACEHOLDER_EXAMPLES.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);
  const [focused,      setFocused]      = useState(false);
  const [lockedHint,   setLockedHint]   = useState<'voice' | 'attach' | null>(null);
  const textareaRef  = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  /* auto-grow textarea */
  const grow = () => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = 'auto';
    ta.style.height = `${Math.min(ta.scrollHeight, 220)}px`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
    grow();
  };

  const handleSubmit = () => {
    const q = prompt.trim();
    if (!q) return;
    // Only signed-in users go straight to the app; everyone else logs in first.
    if (status !== 'authenticated') {
      window.location.href = '/login';
      return;
    }
    window.location.href = `https://app.mynexusai.com/c/new?prompt=${encodeURIComponent(q)}&submit=true`;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  /* close tooltip on outside click */
  useEffect(() => {
    if (!lockedHint) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setLockedHint(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [lockedHint]);

  const fillSuggestion = (starter: string) => {
    setPrompt(starter);
    textareaRef.current?.focus();
    setTimeout(grow, 0);
  };

  return (
    <div ref={containerRef} className="mx-auto w-full max-w-[680px]">
      {/* outer glow */}
      <div className="relative">
        <div
          aria-hidden
          className={cn(
            'pointer-events-none absolute -inset-3 rounded-[28px] blur-2xl transition-all duration-300',
            focused ? 'opacity-50 -inset-4' : 'opacity-30'
          )}
          style={{ backgroundImage: 'var(--color-gradient-hero)' }}
        />

        {/* card */}
        <div
          className={cn(
            'border-stroke-3 relative rounded-[20px] border bg-white transition-all duration-300',
            focused
              ? 'shadow-[0_16px_48px_rgba(0,12,96,0.18)]'
              : 'shadow-[0_8px_30px_rgba(0,12,96,0.10)]'
          )}
        >
          {/* textarea */}
          <textarea
            ref={textareaRef}
            value={prompt}
            rows={1}
            onChange={handleChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onKeyDown={handleKeyDown}
            placeholder={PLACEHOLDER_EXAMPLES[placeholderIdx]}
            className="text-secondary placeholder:text-secondary/40 block w-full resize-none bg-transparent px-5 pt-5 pb-3 text-[15px] leading-relaxed outline-none placeholder:overflow-hidden placeholder:text-ellipsis placeholder:whitespace-nowrap [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:bg-transparent"
            style={{ maxHeight: '220px', overflowY: 'auto', scrollbarWidth: 'none' }}
          />

          {/* bottom toolbar */}
          <div className="flex items-center justify-between px-4 pb-4 pt-1">
            <div className="relative flex items-center gap-1">
              {/* Attach */}
              <button
                type="button"
                aria-label="Attach file"
                onClick={() => setLockedHint(lockedHint === 'attach' ? null : 'attach')}
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-xl transition-colors duration-200',
                  lockedHint === 'attach'
                    ? 'bg-secondary/10 text-secondary'
                    : 'text-secondary/40 hover:bg-secondary/5 hover:text-secondary/60'
                )}
              >
                <Paperclip className="h-4.5 w-4.5" />
              </button>

              {/* Voice */}
              <button
                type="button"
                aria-label="Voice input"
                onClick={() => setLockedHint(lockedHint === 'voice' ? null : 'voice')}
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-xl transition-colors duration-200',
                  lockedHint === 'voice'
                    ? 'bg-secondary/10 text-secondary'
                    : 'text-secondary/40 hover:bg-secondary/5 hover:text-secondary/60'
                )}
              >
                <Mic className="h-4.5 w-4.5" />
              </button>

              {/* Login tooltip */}
              {lockedHint && (
                <div className="absolute bottom-full left-0 mb-2 z-10 w-[240px] rounded-2xl border border-stroke-3 bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
                  {/* arrow */}
                  <div className="absolute -bottom-1.5 left-5 h-3 w-3 rotate-45 border-b border-r border-stroke-3 bg-white" />
                  <button
                    type="button"
                    onClick={() => setLockedHint(null)}
                    className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full text-secondary/30 hover:text-secondary/60"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-secondary/5">
                    <Lock className="h-4 w-4 stroke-secondary" />
                  </div>
                  <p className="text-[13px] font-semibold text-secondary">
                    {lockedHint === 'voice' ? 'Voice input' : 'File attachments'}
                  </p>
                  <p className="mt-1 text-[12px] leading-relaxed text-secondary/55">
                    Sign in to unlock voice mode, file uploads, and all premium features.
                  </p>
                  <div className="mt-3 flex gap-2">
                    <Link
                      href="/signup"
                      className="flex-1 rounded-full bg-secondary py-1.5 text-center text-[12px] font-semibold text-white transition-opacity hover:opacity-85"
                    >
                      Sign up free
                    </Link>
                    <Link
                      href="/login"
                      className="flex-1 rounded-full border border-stroke-3 py-1.5 text-center text-[12px] font-medium text-secondary/70 transition-colors hover:text-secondary"
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* send */}
            <button
              type="button"
              onClick={handleSubmit}
              aria-label="Send prompt"
              disabled={!prompt.trim()}
              className={cn(
                'flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200',
                prompt.trim()
                  ? 'bg-secondary hover:bg-primary-500 shadow-sm'
                  : 'bg-secondary/15 cursor-not-allowed'
              )}
            >
              <ArrowUpIcon className={cn('size-4', prompt.trim() ? 'fill-white' : 'fill-secondary/40')} />
            </button>
          </div>
        </div>
      </div>

      {/* suggestion chips */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
        {SUGGESTIONS.map(({ label, icon: Icon, starter }) => (
          <button
            key={label}
            type="button"
            onClick={() => fillSuggestion(starter)}
            className="flex items-center gap-1.5 rounded-full border border-stroke-3 bg-white/80 px-3.5 py-1.5 text-[12px] font-medium text-secondary/60 shadow-sm backdrop-blur-sm transition-all hover:border-secondary/20 hover:bg-white hover:text-secondary"
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

const folders = [
  { name: 'Q3 Research', active: false },
  { name: 'Legal Review', active: true },
  { name: 'PhD Thesis', active: false },
  { name: 'Meeting Notes', active: false },
];

const AppScreenshot = () => (
  <div className="flex size-full flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_20px_60px_rgba(0,12,96,0.18)]">
    {/* macOS title bar */}
    <div className="flex h-10 shrink-0 items-center gap-2 border-b border-[#e8ecf2] bg-[#f5f6fa] px-4">
      <span className="size-3 rounded-full bg-[#ff5f57]" />
      <span className="size-3 rounded-full bg-[#ffbd2e]" />
      <span className="size-3 rounded-full bg-[#28c840]" />
      <span className="text-tagline-3 text-secondary/40 mx-auto">Nexus AI: Legal Review</span>
    </div>

    <div className="flex flex-1 overflow-hidden">
      {/* Sidebar */}
      <div className="hidden w-52 shrink-0 flex-col border-r border-[#e8ecf2] bg-[#f9fafb] md:flex">
        <div className="flex items-center gap-2.5 border-b border-[#e8ecf2] p-3">
          <div className="flex size-7 items-center justify-center rounded-full bg-[#7458e8] text-[10px] font-semibold text-white">
            S
          </div>
          <div>
            <p className="text-tagline-3 text-secondary font-medium">Sarah Mitchell</p>
            <p className="text-[10px] text-secondary/40">Premium</p>
          </div>
        </div>

        <div className="p-2">
          <p className="text-[10px] text-secondary/40 px-2 pb-1 pt-2 font-medium tracking-wide uppercase">
            Folders
          </p>
          {folders.map((f) => (
            <div
              key={f.name}
              className={cn(
                'flex items-center gap-2 rounded-lg px-2 py-1.5',
                f.active ? 'bg-[#7458e8]/10' : ''
              )}
            >
              <FolderOpen
                className={cn('size-3.5', f.active ? 'text-[#7458e8]' : 'text-secondary/40')}
              />
              <span
                className={cn(
                  'text-[11px]',
                  f.active ? 'text-[#7458e8] font-medium' : 'text-secondary/70'
                )}
              >
                {f.name}
              </span>
            </div>
          ))}
        </div>

        <div className="p-2 mt-2">
          <p className="text-[10px] text-secondary/40 px-2 pb-1 font-medium tracking-wide uppercase">
            Features
          </p>
          {[
            { icon: BookOpen, label: 'Academic' },
            { icon: FileText, label: 'Artifacts' },
            { icon: MessageSquare, label: 'File Chat' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 rounded-lg px-2 py-1.5">
              <Icon className="text-secondary/40 size-3.5" />
              <span className="text-[11px] text-secondary/70">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Chat header */}
        <div className="flex h-10 shrink-0 items-center gap-2 border-b border-[#e8ecf2] px-4">
          <MessageSquare className="text-secondary/40 size-4" />
          <span className="text-tagline-3 text-secondary/70 font-medium">
            Summarise risks in contract-draft-v3.pdf
          </span>
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-4 overflow-y-auto p-4">
          {/* User message */}
          <div className="flex justify-end">
            <div className="max-w-[72%] rounded-2xl rounded-tr-sm bg-[#7458e8] px-4 py-3">
              <p className="text-[11px] text-white">
                Summarise the key risks in this contract and flag anything that needs legal
                review before we sign.
              </p>
            </div>
          </div>

          {/* AI response */}
          <div className="flex items-start gap-2.5">
            <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#f4f2fe]">
              <Sparkles className="text-[#7458e8] size-3.5" />
            </div>
            <div className="max-w-[80%] space-y-2.5">
              <div className="rounded-2xl rounded-tl-sm border border-[#e8ecf2] bg-white px-4 py-3">
                <p className="text-[11px] text-secondary/80 leading-relaxed">
                  Three risks stand out in this contract:
                </p>
                <div className="mt-2 space-y-1.5">
                  {[
                    { label: 'Auto-renewal clause', page: 'p.4' },
                    { label: 'Uncapped liability term', page: 'p.9' },
                    { label: '30-day termination window', page: 'p.12' },
                  ].map((risk) => (
                    <div key={risk.label} className="flex items-center gap-2">
                      <span className="size-1.5 shrink-0 rounded-full bg-[#f65c9c]" />
                      <span className="text-[11px] text-secondary/80">{risk.label}</span>
                      <span className="text-[10px] text-secondary/40 ml-auto rounded-full bg-[#f4f2fe] px-1.5 py-0.5">
                        {risk.page}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-secondary/40">Sourced from contract-draft-v3.pdf</span>
                <span className="bg-[#f4f2fe] text-[#7458e8] rounded-full px-1.5 py-0.5 text-[9px]">
                  3 sources
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Input bar */}
        <div className="shrink-0 border-t border-[#e8ecf2] p-3">
          <div className="flex items-center gap-2 rounded-xl border border-[#e8ecf2] bg-[#f9fafb] px-3 py-2">
            <span className="text-[11px] text-secondary/30 flex-1">
              Ask a follow-up question...
            </span>
            <div className="flex size-6 items-center justify-center rounded-full bg-[#7458e8]">
              <ArrowUpIcon className="size-3 fill-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const UserCursor = () => (
  <div className="flex items-start gap-1">
    <svg
      width="18"
      height="22"
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M1 1L1 16L5 11.5L7.5 18L10 16L7.5 9.5L14 9.5Z"
        fill="#f65c9c"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
    <span className="whitespace-nowrap rounded-full bg-[#f65c9c] px-2.5 py-1 text-[11px] font-medium text-white shadow-sm">
      Sofia P.
    </span>
  </div>
);

type Heart = { id: number; x: number; size: number; color: string; dur: number };

const HEART_COLORS = ['#f65c9c', '#7458e8', '#fa682f', '#fdad02', '#4c7df0'];

const LovedBySentence = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const nextId = useRef(0);

  const spawnHearts = useCallback(() => {
    const batch: Heart[] = Array.from({ length: 7 }, () => ({
      id: nextId.current++,
      x: 5 + Math.random() * 90,
      size: 14 + Math.random() * 14,
      color: HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)],
      dur: 900 + Math.random() * 600,
    }));
    setHearts((prev) => [...prev, ...batch]);
    batch.forEach((h) => {
      setTimeout(() => {
        setHearts((prev) => prev.filter((p) => p.id !== h.id));
      }, h.dur + 200);
    });
  }, []);

  return (
    <span
      className="relative inline-block cursor-default select-none whitespace-nowrap"
      onMouseEnter={spawnHearts}
    >
      {hearts.map((h) => (
        <span
          key={h.id}
          className="pointer-events-none absolute bottom-full"
          style={{
            left: `${h.x}%`,
            fontSize: h.size,
            color: h.color,
            animation: `floatHeart ${h.dur}ms ease-out forwards`,
          }}
        >
          ♥
        </span>
      ))}
      <style>{`
        @keyframes floatHeart {
          0%   { transform: translateY(0) scale(0.5); opacity: 1; }
          60%  { opacity: 1; }
          100% { transform: translateY(-64px) scale(1.2); opacity: 0; }
        }
      `}</style>
      Loved by over <CounterNumberOnScroll value={500000} delay={0.4} />+ people
    </span>
  );
};

const Hero = () => {
  const rootRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLElement>(null);
  const rightRef = useRef<HTMLElement>(null);

  useSlightlyMoveOnMouseMove(rootRef, [
    { ref: leftRef, shift: 12 },
    { ref: rightRef, shift: 10 },
  ]);

  return (
    <section ref={rootRef} className="relative isolate overflow-hidden pt-[150px] lp:pt-[220px]">
      <Image
        src={heroBg}
        alt="Nexus AI"
        fill
        priority
        className="2k:h-[104%] absolute inset-0 z-0 size-full object-cover"
      />

      <div className="main-container relative z-10">
        <div className="space-y-9 text-center md:space-y-18">
          <div className="space-y-8 md:space-y-10 lp:space-y-[70px]">
            <div className="space-y-6">
              <div className="space-y-4">
                {/* RevealAnimation (not TextReveal): SplitText clones the DOM
                    at mount, which breaks the React-driven rotating word.
                    Size capped at heading-2 below 1440px so short laptop
                    viewports (1366×768, 1536×864) keep the full hero —
                    including the loved-by row — above the fold. */}
                <RevealAnimation delay={0.1}>
                  <h1 className="text-heading-4 sm:text-heading-3 md:text-heading-2 lp:text-heading-1 mx-auto max-w-[1150px] font-bold">
                    Ultimate AI That Finishes Your <RotatingWord />
                  </h1>
                </RevealAnimation>
                {/* RevealAnimation (not TextReveal): SplitText freezes line
                    breaks at mount, which re-wraps mid-sentence on mobile
                    resizes. This keeps the paragraph one natural text flow. */}
                <RevealAnimation delay={0.2}>
                  <p className="text-tagline-1 md:text-tagline-new mx-auto max-w-[700px] lg:max-w-[920px]">
                    Nexus AI is your all-in-one AI platform for writing, research, content creation
                    and planning. <br className="hidden lg:block" />
                    Generate polished documents, presentations, images, videos, code and reports in
                    minutes.
                  </p>
                </RevealAnimation>
              </div>

              <RevealAnimation delay={0.3} instant>
                <HeroPromptBox />
              </RevealAnimation>
            </div>

            <div className="mx-auto flex max-w-[320px] items-center justify-center gap-x-3">
              <AvatarReveal
                className="flex items-center justify-center -space-x-3.5"
                direction="left"
                offset={50}
                stagger={0.1}
                markers={false}
              >
                {[avatar1, avatar2, avatar3].map((avatar, index) => (
                  <div
                    key={avatar.src}
                    className="transition-transform duration-300 ease-out hover:-translate-y-1"
                  >
                    <AvatarItem className="outline-background-2 size-9 overflow-hidden rounded-full outline-2 md:size-11">
                      <Image
                        src={avatar}
                        alt={`avatar-${index + 1}`}
                        className="size-full rounded-full object-cover"
                      />
                    </AvatarItem>
                  </div>
                ))}
              </AvatarReveal>
              <RevealAnimation delay={0.3} direction="right" offset={50} instant>
                <p className="text-tagline-3 md:text-tagline-2 text-background-14/80 shrink-0">
                  <LovedBySentence />
                </p>
              </RevealAnimation>
            </div>
          </div>

          <RevealAnimation delay={0.4} instant>
            <figure className="h-[350px] w-full overflow-hidden rounded-[20px] backdrop-blur-[20px] md:h-[650px] xl:h-[825px]">
              <AppScreenshot />
            </figure>
          </RevealAnimation>
        </div>

        <figure
          ref={leftRef}
          className="absolute top-[57%] left-[2%] z-30 hidden h-14 will-change-transform md:block xl:top-[50%] xl:left-[-5%] 2xl:left-[-8%]"
        >
          <RevealAnimation delay={0.5} direction="left" offset={50}>
            <div className="size-full">
              <Image src={leftElement} alt="left-elements" className="size-full object-cover" />
            </div>
          </RevealAnimation>
        </figure>

        <figure
          ref={rightRef}
          className="absolute top-[59%] right-[8%] z-30 hidden will-change-transform md:block xl:top-[42%] xl:right-[-3%] 2xl:right-[-5%]"
        >
          <RevealAnimation delay={0.6} direction="right" offset={50}>
            <UserCursor />
          </RevealAnimation>
        </figure>
      </div>

      <RevealAnimation delay={0.5} instant>
        <figure className="absolute -bottom-1 left-0 z-20 h-[500px] w-full md:h-[600px] xl:h-[700px]">
          <Image src={bottomGradient} alt="bottom-gradient" className="size-full object-cover" />
        </figure>
      </RevealAnimation>
    </section>
  );
};

export default Hero;
