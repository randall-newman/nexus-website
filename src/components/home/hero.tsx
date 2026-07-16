'use client';

import bottomGradient from '@/public/images/bottom-gradient.svg';
import appLogo from '@/public/images/logo/logo.svg';
import avatar1 from '@/public/images/nexus-avatar-1.jpg';
import avatar2 from '@/public/images/nexus-avatar-2.jpg';
import avatar3 from '@/public/images/nexus-avatar-3.jpg';
import heroBg from '@/public/images/nexus-ai-hero.jpg';
import CounterNumberOnScroll from '@/src/components/animation/counter-number-on-scroll';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { ArrowUpIcon } from '@/src/components/shared/icon';
import { ButtonPrimary } from '@/src/components/shared/ui/button';
import AvatarItem from '@/src/components/shared/ui/avatar-reveal/avatar-item';
import AvatarReveal from '@/src/components/shared/ui/avatar-reveal/avatar-reveal';
import { cn } from '@/src/utils/cn';
import {
  AlignLeft,
  FileText,
  FolderOpen,
  MessageSquare,
  Sparkles,
  Paperclip,
  Mic,
  List,
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

const SparkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-4"
    aria-hidden
  >
    <path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" />
  </svg>
);

/* Hidden for now in favour of the Get Started CTA — kept for easy re-enable. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

const recentChats = [
  'Term paper: sleep & working memory',
  'Pitch deck for club fundraiser',
  'Summarize BIO-201 lecture notes',
];

const chatFolders = [
  { name: 'PhD Thesis', active: true },
  { name: 'Q3 Research', active: false },
  { name: 'Meeting Notes', active: false },
];

const AppScreenshot = () => (
  <div className="flex size-full flex-col overflow-hidden rounded-[20px] bg-white text-left shadow-[0_20px_60px_rgba(0,12,96,0.18)]">
    {/* macOS title bar */}
    <div className="flex h-10 shrink-0 items-center gap-2 border-b border-[#e8ecf2] bg-[#f5f6fa] px-4">
      <span className="size-3 rounded-full bg-[#ff5f57]" />
      <span className="size-3 rounded-full bg-[#ffbd2e]" />
      <span className="size-3 rounded-full bg-[#28c840]" />
      <span className="text-tagline-3 text-secondary/40 mx-auto">Nexus AI</span>
    </div>

    <div className="flex flex-1 overflow-hidden">
      {/* Sidebar — Nexus AI chat app */}
      <div className="hidden w-52 shrink-0 flex-col border-r border-[#e8ecf2] bg-[#f9fafb] md:flex">
        <div className="flex items-center gap-2 border-b border-[#e8ecf2] p-3">
          <Image src={appLogo} alt="Nexus AI logo" width={22} height={22} className="size-5.5" />
          <span className="text-tagline-3 text-secondary font-semibold">Nexus AI</span>
        </div>
        <div className="p-2">
          <div className="flex items-center justify-center gap-1.5 rounded-lg bg-[#7458e8] px-2 py-1.5">
            <PenLine className="size-3 text-white" />
            <span className="text-[10px] font-medium text-white">New chat</span>
          </div>
        </div>
        <div className="px-2">
          <p className="text-[10px] text-secondary/40 px-2 pt-1 pb-1 font-medium tracking-wide uppercase">Recents</p>
          {recentChats.map((c, i) => (
            <div key={c} className={cn('rounded-lg px-2 py-1.5', i === 0 ? 'bg-[#7458e8]/10' : '')}>
              <span className={cn('block truncate text-[11px]', i === 0 ? 'font-medium text-[#7458e8]' : 'text-secondary/70')}>{c}</span>
            </div>
          ))}
        </div>
        <div className="mt-1 px-2">
          <p className="text-[10px] text-secondary/40 px-2 pt-1 pb-1 font-medium tracking-wide uppercase">Folders</p>
          {chatFolders.map((f) => (
            <div key={f.name} className="flex items-center gap-2 rounded-lg px-2 py-1.5">
              <FolderOpen className="text-secondary/40 size-3.5" />
              <span className="text-[11px] text-secondary/70">{f.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-2 border-t border-[#e8ecf2] p-3">
          <div className="flex size-6 items-center justify-center rounded-full bg-[#7458e8] text-[9px] font-semibold text-white">S</div>
          <div>
            <p className="text-[10px] text-secondary font-medium">Sarah Mitchell</p>
            <p className="text-[9px] text-secondary/40">Premium</p>
          </div>
        </div>
      </div>

      {/* Chat panel */}
      <div className="flex min-w-0 flex-1 flex-col border-r border-[#e8ecf2]">
        <div className="flex h-9 shrink-0 items-center gap-2 border-b border-[#e8ecf2] px-3">
          <MessageSquare className="text-secondary/40 size-3.5" />
          <span className="truncate text-[11px] text-secondary/70 font-medium">Term paper: sleep &amp; working memory</span>
        </div>
        <div className="flex-1 space-y-3 overflow-y-auto p-3">
          <div className="flex justify-end">
            <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-[#7458e8] px-3 py-2">
              <p className="text-[10px] leading-relaxed text-white">
                Draft my psychology term paper on how sleep deprivation affects working memory in
                university students. Give it a proper outline and use real, cited studies.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#f4f2fe]">
              <Sparkles className="size-3 text-[#7458e8]" />
            </div>
            <div className="min-w-0 space-y-1.5">
              <div className="rounded-2xl rounded-tl-sm border border-[#e8ecf2] bg-white px-3 py-2">
                <p className="text-[10px] leading-relaxed text-secondary/80">
                  Done — I structured the paper into five sections and drafted it in the Artifact
                  with 18 verified sources. The strongest evidence comes from:
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  <span className="rounded-full bg-[#f4f2fe] px-1.5 py-0.5 text-[9px] text-[#7458e8]">Lo et al., 2016 · Sleep</span>
                  <span className="rounded-full bg-[#f4f2fe] px-1.5 py-0.5 text-[9px] text-[#7458e8]">Krause et al., 2017</span>
                </div>
              </div>
              <span className="text-[9px] text-secondary/40">18 sources · citations verified</span>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-[#7458e8] px-3 py-2">
              <p className="text-[10px] leading-relaxed text-white">
                Great. Expand the literature review and keep APA style.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#f4f2fe]">
              <Sparkles className="size-3 text-[#7458e8]" />
            </div>
            <div className="rounded-2xl rounded-tl-sm border border-[#e8ecf2] bg-white px-3 py-2">
              <p className="text-[10px] leading-relaxed text-secondary/80">
                Expanding section 2 now — adding acute vs. chronic deprivation and recovery-sleep
                findings<span className="ml-0.5 inline-block h-2.5 w-[1.5px] animate-pulse bg-[#7458e8] align-middle" />
              </p>
            </div>
          </div>
        </div>
        <div className="shrink-0 border-t border-[#e8ecf2] p-2.5">
          <div className="flex items-center gap-2 rounded-xl border border-[#e8ecf2] bg-[#f9fafb] px-2.5 py-1.5">
            <span className="flex-1 text-[10px] text-secondary/30">Reply to Nexus AI...</span>
            <div className="flex size-5 items-center justify-center rounded-full bg-[#7458e8]">
              <ArrowUpIcon className="size-2.5 fill-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Artifact panel with Word-style tools — unique to Nexus AI */}
      <div className="hidden w-[46%] shrink-0 flex-col lg:flex">
        <div className="flex h-9 shrink-0 items-center gap-1.5 border-b border-[#e8ecf2] bg-[#f9fafb] px-3">
          <FileText className="size-3.5 text-[#7458e8]" />
          <span className="text-[11px] text-secondary font-medium">Artifact</span>
          <span className="rounded-full bg-[#eafaf1] px-1.5 py-0.5 text-[8px] text-[#0e9f6e]">Word tools</span>
          <span className="ml-auto rounded-full bg-[#7458e8] px-2 py-0.5 text-[9px] font-medium text-white">Export .docx</span>
        </div>
        {/* Word-style ribbon */}
        <div className="flex shrink-0 items-center gap-1.5 border-b border-[#e8ecf2] px-3 py-1.5">
          <span className="flex items-center gap-1 rounded-md border border-[#e8ecf2] px-1.5 py-0.5 text-[9px] text-secondary/70">
            Times New Roman <span className="text-secondary/30">▾</span>
          </span>
          <span className="rounded-md border border-[#e8ecf2] px-1.5 py-0.5 text-[9px] text-secondary/70">12</span>
          <span className="mx-0.5 h-3.5 w-px bg-[#e8ecf2]" />
          <span className="relative flex size-5 items-center justify-center rounded bg-[#f4f2fe] text-[10px] font-bold text-[#7458e8]">
            B
            <span className="pointer-events-none absolute top-3 left-2.5 z-20"><UserCursor /></span>
          </span>
          <span className="flex size-5 items-center justify-center rounded text-[10px] italic text-secondary/60">I</span>
          <span className="flex size-5 items-center justify-center rounded text-[10px] text-secondary/60 underline">U</span>
          <span className="mx-0.5 h-3.5 w-px bg-[#e8ecf2]" />
          <AlignLeft className="text-secondary/60 size-3.5" />
          <List className="text-secondary/60 size-3.5" />
          <span className="mx-0.5 h-3.5 w-px bg-[#e8ecf2]" />
          <span className="rounded-md border border-[#e8ecf2] px-1.5 py-0.5 text-[9px] text-secondary/70">Heading 2 ▾</span>
        </div>
        {/* Document */}
        <div className="flex-1 overflow-y-auto bg-[#f9fafb] p-3">
          <div className="mx-auto min-h-full rounded-lg border border-[#e8ecf2] bg-white px-4 py-3.5 shadow-sm">
            <p className="text-center text-[12px] text-secondary font-semibold">
              Sleep Deprivation and Working Memory in University Students
            </p>
            <p className="mt-0.5 text-center text-[9px] text-secondary/50">
              PSYC 3410 · Cognitive Psychology · S. Mitchell
            </p>

            <p className="mt-2.5 text-[10px] font-semibold text-secondary">1. Introduction</p>
            <p className="mt-1 text-[10px] leading-relaxed text-secondary/80">
              University students routinely sleep less than the recommended eight hours, with a
              majority reporting under seven hours on weeknights
              <span className="mx-1 rounded-full bg-[#f4f2fe] px-1.5 py-0.5 text-[8px] font-medium text-[#7458e8]">Lund et al., 2010</span>
              . Because working memory underpins reasoning, comprehension and exam performance,
              understanding how sleep loss degrades it has direct academic consequences.
            </p>

            <p className="mt-2 text-[10px] font-semibold text-secondary">2. Literature Review</p>
            <p className="mt-1 text-[10px] leading-relaxed text-secondary/80">
              Restricting sleep to five hours across one week produced measurable declines in
              sustained attention and working-memory accuracy that did not fully recover after two
              nights of rest
              <span className="mx-1 rounded-full bg-[#f4f2fe] px-1.5 py-0.5 text-[8px] font-medium text-[#7458e8]">Lo et al., 2016</span>
              . Neuroimaging links these deficits to reduced prefrontal engagement
              <span className="mx-1 rounded-full bg-[#f4f2fe] px-1.5 py-0.5 text-[8px] font-medium text-[#7458e8]">Krause et al., 2017</span>
              .
            </p>
            <div className="mt-1.5 space-y-0.5 pl-3">
              <p className="text-[9.5px] text-secondary/70">2.1&nbsp;&nbsp;Acute versus chronic sleep restriction</p>
              <p className="text-[9.5px] text-secondary/70">2.2&nbsp;&nbsp;Effects on encoding and retrieval</p>
              <p className="text-[9.5px] text-secondary/70">
                2.3&nbsp;&nbsp;<span className="bg-[#7458e8]/10">Recovery sleep and daytime napping</span>
                <span className="ml-0.5 inline-block h-2.5 w-[1.5px] animate-pulse bg-[#7458e8] align-middle" />
              </p>
            </div>

            <p className="mt-2 text-[10px] font-semibold text-secondary">3. Methodology</p>
            <div className="mt-1 space-y-0.5 pl-3">
              <p className="text-[9.5px] text-secondary/70">3.1&nbsp;&nbsp;Participants: 64 undergraduates, ages 18–24</p>
              <p className="text-[9.5px] text-secondary/70">3.2&nbsp;&nbsp;Measures: n-back task, PSQI, sleep diaries</p>
              <p className="text-[9.5px] text-secondary/70">3.3&nbsp;&nbsp;Procedure: two-week actigraphy monitoring</p>
            </div>

            <p className="mt-2 text-[10px] font-semibold text-secondary/45">4. Results</p>
            <p className="mt-0.5 text-[10px] font-semibold text-secondary/45">5. Discussion</p>
          </div>
        </div>
        {/* Status bar */}
        <div className="flex shrink-0 items-center gap-2.5 border-t border-[#e8ecf2] px-3 py-1.5">
          <span className="text-[9px] text-secondary/40">Saved just now</span>
          <span className="text-[9px] text-secondary/40">2,431 words</span>
          <span className="text-[9px] text-secondary/40">APA 7</span>
          <span className="ml-auto rounded-full bg-[#eafaf1] px-1.5 py-0.5 text-[8px] text-[#0e9f6e]">Plagiarism: 0 issues</span>
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
                    resizes. Separate copy per device: shorter on mobile,
                    sentence-per-line on desktop. */}
                <RevealAnimation delay={0.2}>
                  <div>
                    <p className="text-tagline-1 md:text-tagline-new mx-auto max-w-[700px] lg:hidden">
                      Nexus AI is your all-in-one AI platform for writing, research, design, and
                      planning. Turn ideas into finished documents, decks, images, reports, and
                      more.
                    </p>
                    <p className="text-tagline-new mx-auto hidden max-w-[920px] lg:block">
                      Nexus AI is your all-in-one AI platform for writing, research, content
                      creation and planning. <br />
                      Generate polished documents, presentations, images, videos, code and reports
                      in minutes.
                    </p>
                  </div>
                </RevealAnimation>
              </div>

              <RevealAnimation delay={0.3} instant>
                <div className="flex justify-center pt-4 md:pt-6">
                  <Link href="/login" className="inline-block">
                    <ButtonPrimary
                      className="mx-auto md:w-fit!"
                      textClassName="text-center text-nowrap"
                    >
                      <span className="flex items-center gap-1.5">
                        <SparkIcon />
                        Get Started
                        <span className="ml-0.5 text-[0.75em] font-normal opacity-60">
                          It&apos;s free
                        </span>
                      </span>
                    </ButtonPrimary>
                  </Link>
                </div>
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
