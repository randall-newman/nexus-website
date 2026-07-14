import PricingTeaser from '@/src/components/home/pricing-teaser';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import {
  BookOpen,
  Brain,
  Briefcase,
  CheckCircle,
  EyeOff,
  GraduationCap,
  History,
  Lock,
  Microscope,
  Pencil,
  RefreshCw,
  Shield,
  Sliders,
  Trash2,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

/* ─── Hero mock ──────────────────────────────────────── */
function HeroMemoryMock() {
  const tags = ['PhD · Neuroscience', 'Python & PyTorch', 'British English', 'Chapter 3 active'];
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden text-[12px]">
      {/* Chrome */}
      <div className="flex items-center gap-x-1.5 border-b border-white/10 px-4 py-3 bg-white/5">
        <span className="size-2.5 rounded-full bg-red-500/70" />
        <span className="size-2.5 rounded-full bg-yellow-500/70" />
        <span className="size-2.5 rounded-full bg-green-500/70" />
        <span className="ml-3 text-[11px] text-white/30">Nexus AI · Chat</span>
        <span className="ml-auto flex items-center gap-x-1 text-[10px] text-[#4c7df0]/80">
          <Brain className="size-3" />
          5 memories active
        </span>
      </div>
      {/* Memory context pills */}
      <div className="flex items-center gap-x-2 overflow-x-auto border-b border-white/8 bg-[#4c7df0]/8 px-4 py-2">
        <Brain className="size-3 shrink-0 text-[#4c7df0]" />
        {tags.map((t) => (
          <span
            key={t}
            className="shrink-0 rounded-full border border-[#4c7df0]/30 bg-[#4c7df0]/15 px-2.5 py-0.5 text-[10px] text-[#8ab0f5]"
          >
            {t}
          </span>
        ))}
      </div>
      {/* Chat */}
      <div className="space-y-3 p-4">
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-xl rounded-br-sm bg-white/15 px-3 py-2 leading-relaxed text-white/80">
            Help me write an abstract for my latest chapter.
          </div>
        </div>
        <div className="space-y-2 rounded-xl border border-white/10 bg-white/8 p-3 leading-relaxed text-white/65">
          <p>
            Here&apos;s a draft abstract for{' '}
            <span className="text-[#8ab0f5]">Chapter 3</span> of your neuroscience PhD:
          </p>
          <p className="border-l-2 border-[#4c7df0]/40 pl-2.5 text-[11px] text-white/50 italic">
            &ldquo;This chapter examines mechanisms of neural plasticity under sustained cognitive load,
            extending the theoretical framework developed in Chapter 2…&rdquo;
          </p>
          <p className="text-[10px] text-white/30">Written in British English · 148 words · Academic register</p>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-xl rounded-br-sm bg-white/15 px-3 py-2 leading-relaxed text-white/80">
            Slightly more formal please.
          </div>
        </div>
        <div className="flex items-center gap-x-1 pl-1">
          <span className="size-1.5 animate-bounce rounded-full bg-white/40" style={{ animationDelay: '0ms' }} />
          <span className="size-1.5 animate-bounce rounded-full bg-white/40" style={{ animationDelay: '150ms' }} />
          <span className="size-1.5 animate-bounce rounded-full bg-white/40" style={{ animationDelay: '300ms' }} />
          <span className="ml-2 text-[10px] text-white/30">Adjusting tone…</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Memory list mock ───────────────────────────────── */
function MemoryListMock() {
  const memories = [
    { category: 'Background', text: 'PhD in neuroscience at UCL, supervised by Prof. Michelle Carter', color: 'text-blue-400' },
    { category: 'Writing style', text: 'Prefers bullet-point summaries and clear section headings', color: 'text-purple-400' },
    { category: 'Active project', text: 'Currently writing Chapter 3 on neural plasticity', color: 'text-green-400' },
    { category: 'Tools', text: 'Works in Python, PyTorch, and Jupyter Notebooks', color: 'text-orange-400' },
    { category: 'Language', text: 'Prefers British English spelling throughout all outputs', color: 'text-pink-400' },
  ];
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden text-[12px]">
      <div className="flex items-center gap-x-2 border-b border-stroke-3 bg-background-13 px-4 py-3">
        <Brain className="size-3.5 text-secondary/50" />
        <span className="text-[11px] font-medium text-secondary/70">Your Memories</span>
        <span className="ml-auto text-[10px] text-secondary/35">5 total</span>
      </div>
      <div className="divide-y divide-stroke-3">
        {memories.map((m, i) => (
          <div key={i} className="flex items-start gap-x-3 px-4 py-3 hover:bg-background-13/50">
            <div className="min-w-0 flex-1">
              <p className={`mb-1 text-[10px] font-semibold uppercase tracking-wider ${m.color}`}>{m.category}</p>
              <p className="leading-relaxed text-secondary/70">{m.text}</p>
            </div>
            <div className="flex shrink-0 items-center gap-x-2 mt-0.5">
              <Pencil className="size-3 cursor-pointer text-secondary/25 hover:text-secondary/50" />
              <Trash2 className="size-3 cursor-pointer text-secondary/25 hover:text-red-400" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-stroke-3 bg-background-13/50 px-4 py-3">
        <span className="text-[10px] text-secondary/35">Memory ON · Updating automatically</span>
        <span className="cursor-pointer text-[10px] font-medium text-[#4c7df0]">+ Add manually</span>
      </div>
    </div>
  );
}

/* ─── Project scope mock ─────────────────────────────── */
function ProjectScopeMock() {
  const projects = [
    { emoji: '🎓', name: 'PhD Research', memories: 8, desc: 'Academic context, thesis progress, writing preferences', active: true },
    { emoji: '💼', name: 'Client Work — Acme Co.', memories: 5, desc: 'Brand voice, product specs, stakeholder names', active: true },
    { emoji: '📔', name: 'Personal Journal', memories: 3, desc: 'Writing tone, recurring themes, personal goals', active: true },
  ];
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden text-[12px]">
      <div className="flex items-center gap-x-2 border-b border-stroke-3 bg-background-13 px-4 py-3">
        <Shield className="size-3.5 text-secondary/50" />
        <span className="text-[11px] font-medium text-secondary/70">Project Memory — Isolated per folder</span>
      </div>
      <div className="divide-y divide-stroke-3">
        {projects.map((p) => (
          <div key={p.name} className="flex items-start gap-x-3 px-4 py-3.5">
            <span className="text-xl shrink-0 mt-0.5">{p.emoji}</span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-x-2">
                <p className="font-semibold text-secondary">{p.name}</p>
                <span className="rounded-full bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.5 text-[9px] font-medium text-emerald-600">
                  {p.memories} memories
                </span>
              </div>
              <p className="mt-0.5 text-[11px] text-secondary/45">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-stroke-3 bg-background-13/50 px-4 py-3">
        <p className="text-[10px] text-secondary/40">
          Memory is <strong className="text-secondary/60">fully isolated</strong> between folders. Context from PhD Research never appears in Client Work.
        </p>
      </div>
    </div>
  );
}

/* ─── How it works steps ─────────────────────────────── */
const steps = [
  {
    n: '01',
    icon: Brain,
    title: 'It learns as you work',
    body: 'As you chat, Nexus AI quietly picks up preferences, project context, writing style, and important facts. No manual setup needed.',
  },
  {
    n: '02',
    icon: History,
    title: 'Context is always ready',
    body: 'Your next session starts informed. Nexus AI knows who you are, what you\'re working on, and how you like to work — before you say a word.',
  },
  {
    n: '03',
    icon: Sliders,
    title: 'You stay in control',
    body: 'View every memory, edit any detail, delete anything, or add facts manually. Your memory, your rules.',
  },
];

/* ─── Capabilities grid ──────────────────────────────── */
const capabilities = [
  {
    icon: RefreshCw,
    title: 'Persists across sessions',
    body: 'Memory does not reset when you close a tab or log out. Context carries forward indefinitely.',
  },
  {
    icon: Shield,
    title: 'Isolated per project',
    body: 'Each folder has its own memory. Nothing from your client work bleeds into your personal projects.',
  },
  {
    icon: Pencil,
    title: 'Fully editable',
    body: 'View the exact text stored about you. Edit inaccuracies, remove outdated facts, or add your own.',
  },
  {
    icon: Zap,
    title: 'Responses shaped by context',
    body: 'Tone, format, level of detail — Nexus AI adapts every output to what it knows about you.',
  },
  {
    icon: Brain,
    title: 'Learns what matters',
    body: 'Memory focuses on recurring facts, preferences and goals — not every word you type.',
  },
  {
    icon: Lock,
    title: 'Never used for training',
    body: 'Your memories are yours. They are not used to train AI models or shared with any other user.',
  },
];

/* ─── Personas ─────────────────────────────────────────── */
const personas = [
  {
    icon: GraduationCap,
    role: 'Students',
    headline: 'Stop re-explaining your course every session',
    points: [
      'Course details and assignment briefs remembered automatically',
      'Writing style learned from your first few essays',
      'Reference style and word counts stored per module',
      'Picks up where you left off, mid-essay or mid-research',
    ],
  },
  {
    icon: Microscope,
    role: 'Researchers',
    headline: 'Your research context, always present',
    points: [
      'Research area, methodology and supervisor details stored',
      'Citation style and journal preferences applied automatically',
      'Cross-chapter continuity for long-form academic writing',
      'Terminology and field-specific conventions remembered',
    ],
  },
  {
    icon: Briefcase,
    role: 'Professionals',
    headline: 'Client context without the briefing doc',
    points: [
      'Client names, preferences and project history retained',
      'Brand voice and communication style applied per project',
      'Meeting cadence and stakeholder details on hand',
      'Switch between clients without losing context for either',
    ],
  },
  {
    icon: BookOpen,
    role: 'Writers & Creators',
    headline: 'Your voice, your world, always consistent',
    points: [
      'Narrative universe, characters and lore stored per project',
      'Tone and style learned from your existing work',
      'Series continuity maintained across drafts',
      'Feedback preferences applied without re-stating them',
    ],
  },
];

/* ─── FAQ items ─────────────────────────────────────── */
export const aiMemoryFaqItems = [
  {
    value: 'what-does-it-remember',
    question: 'What does Nexus AI Memory remember?',
    answer:
      'Nexus AI Memory stores facts, preferences, and context that you share across your conversations — things like your role, current projects, writing style, preferred tools, and communication preferences. It focuses on information that is genuinely useful to recall in future sessions, not a verbatim transcript of every message.',
  },
  {
    value: 'how-to-view-edit',
    question: 'How do I view or edit my memories?',
    answer:
      'Go to Settings → Memory in your Nexus AI account. You will see a list of everything stored about you, categorised by type. You can edit any entry, delete individual memories, or clear all memories at once. You can also add facts manually that you want Nexus AI to know.',
  },
  {
    value: 'isolated-per-project',
    question: 'Is memory shared between my projects or folders?',
    answer:
      'No. Memory is fully isolated per folder. Context from your PhD research folder never appears in your client work folder. This is intentional — it keeps sensitive or unrelated information from bleeding across projects.',
  },
  {
    value: 'training',
    question: 'Are my memories used to train AI models?',
    answer:
      'No. Your memories are stored solely to personalise your own experience. They are never used to train Nexus AI models, shared with other users, or accessed by Verbosec staff except where required to investigate a reported issue.',
  },
  {
    value: 'turn-off',
    question: 'Can I turn Memory off?',
    answer:
      'Yes. You can disable Memory globally from Settings → Memory, which stops Nexus AI from saving new memories and from using existing ones. You can also use Incognito Chat for individual conversations that you do not want Memory to influence or record.',
  },
  {
    value: 'incognito',
    question: 'What is Incognito Chat?',
    answer:
      'Incognito Chat is a conversation mode where Memory is completely inactive — nothing from the session is saved to your Memory, and existing memories are not applied. It is ideal for sensitive topics, experimental work, or when you want a fresh start without your usual context.',
  },
  {
    value: 'plans',
    question: 'Is Memory available on all plans?',
    answer:
      'Memory is available on the Premium and Ultimate plans. Free plan users can explore Nexus AI Chat but persistent Memory requires an upgrade. You can view our plans on the Pricing page.',
  },
  {
    value: 'delete-account',
    question: 'What happens to my memories if I delete my account?',
    answer:
      'All memories are permanently deleted when your account is closed, in line with our Privacy Policy. We do not retain memory data after account deletion beyond the standard 90-day backup window.',
  },
];

/* ─── Main component ─────────────────────────────────── */
const AiMemory = () => {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-secondary overflow-hidden pt-[160px] pb-0">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-14 pb-0 lg:gap-x-12">
            {/* Left */}
            <div className="col-span-12 space-y-8 lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary className="border-white/20 bg-white/10 text-white/80">
                  AI Memory
                </BadgePrimary>
              </RevealAnimation>
              <div className="space-y-5">
                <TextReveal delay={0.2}>
                  <h1 className="text-white">
                    An AI that{' '}
                    <span
                      className="bg-clip-text text-transparent"
                      style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                    >
                      actually knows you
                    </span>
                  </h1>
                </TextReveal>
                <TextReveal delay={0.3}>
                  <p className="max-w-[500px] text-white/60">
                    Nexus AI Memory learns your preferences, projects, and working style across every
                    conversation. No more repeating yourself. Context is always ready before you ask.
                  </p>
                </TextReveal>
              </div>
              <RevealAnimation delay={0.4} asChild={false} className="flex flex-wrap gap-3">
                <Link href="/signup">
                  <ButtonPrimary textClassName="text-nowrap">Try it free</ButtonPrimary>
                </Link>
                <Link href="/products/chat">
                  <ButtonWhite textClassName="text-nowrap">See Nexus AI Chat</ButtonWhite>
                </Link>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <p className="text-[13px] text-white/35">
                  Memory is built into{' '}
                  <Link href="/products/chat" className="text-white/55 underline underline-offset-2">
                    Nexus AI Chat
                  </Link>{' '}
                  — no separate setup needed.
                </p>
              </RevealAnimation>
            </div>
            {/* Right — mock */}
            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.3} direction="right" offset={60}>
                <HeroMemoryMock />
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="border-b border-stroke-3 bg-white py-10">
        <div className="main-container">
          <RevealAnimation
            delay={0.1}
            asChild={false}
            className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-center"
          >
            {[
              { stat: 'Persistent', label: 'Survives every session' },
              { stat: 'Isolated', label: 'Per folder, no bleed-over' },
              { stat: 'Editable', label: 'Full view and control' },
              { stat: 'Private', label: 'Never used for training' },
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
              <h2>Learn once, remember always</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="mx-auto max-w-[480px] text-secondary/60">
                Memory works quietly in the background. The more you use Nexus AI, the more useful it becomes.
              </p>
            </TextReveal>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {steps.map((step, i) => (
              <RevealAnimation key={step.n} delay={0.1 + i * 0.1} direction="up" offset={40}>
                <div className="h-full space-y-4 rounded-2xl border border-stroke-3 bg-white p-6">
                  <div className="flex items-center gap-x-3">
                    <span className="font-mono text-[11px] font-bold text-secondary/25">{step.n}</span>
                    <span className="flex size-8 items-center justify-center rounded-xl bg-secondary/6">
                      <step.icon className="size-4 text-secondary" />
                    </span>
                  </div>
                  <h3 className="text-[17px] font-semibold leading-snug text-secondary">{step.title}</h3>
                  <p className="leading-relaxed text-tagline-3 text-secondary/60">{step.body}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ── Memory list deep-dive ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-16">
            {/* Visual */}
            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.2} direction="left" offset={50}>
                <MemoryListMock />
              </RevealAnimation>
            </div>
            {/* Text */}
            <div className="col-span-12 space-y-6 lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Full Transparency</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>See exactly what it knows about you</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="max-w-[480px] text-secondary/60">
                  Unlike most AI systems, Nexus AI Memory is not a black box. Every stored memory is
                  visible in your settings. You see the exact text, can edit any detail, remove anything
                  inaccurate, or add facts yourself.
                </p>
              </TextReveal>
              <RevealAnimation delay={0.4} asChild={false} className="space-y-3">
                {[
                  'Read every memory stored about you',
                  'Edit inaccurate or outdated entries instantly',
                  'Delete individual memories or clear all at once',
                  'Add facts manually that you want Nexus AI to know',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-x-2.5">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-secondary" />
                    <span className="text-tagline-2 text-secondary/80">{point}</span>
                  </div>
                ))}
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ── Project isolation deep-dive ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-16">
            {/* Text */}
            <div className="col-span-12 space-y-6 lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Project Isolation</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Separate memory for every project</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="max-w-[480px] text-secondary/60">
                  Your PhD research and your client work should never mix. Memory in Nexus AI is scoped
                  to each folder — context stays exactly where it belongs. Switch between projects
                  without any risk of information bleeding across.
                </p>
              </TextReveal>
              <RevealAnimation delay={0.4} asChild={false} className="space-y-3">
                {[
                  'One memory space per folder, completely isolated',
                  'Client details never surface in personal projects',
                  'Confidential work stays confidential',
                  'Unlimited folders — one per client, project, or subject',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-x-2.5">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-secondary" />
                    <span className="text-tagline-2 text-secondary/80">{point}</span>
                  </div>
                ))}
              </RevealAnimation>
            </div>
            {/* Visual */}
            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.2} direction="right" offset={50}>
                <ProjectScopeMock />
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities grid ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container space-y-14">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>What Memory does</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Built to fit the way you actually work</h2>
            </TextReveal>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <RevealAnimation key={cap.title} delay={0.05 + i * 0.07} direction="up" offset={30}>
                <div className="h-full space-y-4 rounded-2xl border border-stroke-3 bg-white p-6">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-secondary/6">
                    <cap.icon className="size-5 text-secondary" />
                  </span>
                  <h3 className="text-[16px] font-semibold leading-snug text-secondary">{cap.title}</h3>
                  <p className="text-tagline-3 text-secondary/60 leading-relaxed">{cap.body}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ── Personas ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container space-y-14">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Who benefits most</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Memory that adapts to how you work</h2>
            </TextReveal>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {personas.map((p, i) => (
              <RevealAnimation key={p.role} delay={0.1 + i * 0.08} direction="up" offset={40}>
                <div className="h-full space-y-4 rounded-2xl border border-stroke-3 bg-white p-6">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-secondary/6">
                    <p.icon className="size-5 text-secondary" />
                  </div>
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

      {/* ── Incognito callout ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <RevealAnimation
            delay={0.1}
            asChild={false}
            className="grid grid-cols-12 items-center gap-y-8 overflow-hidden rounded-3xl border border-stroke-3 bg-white px-8 py-10 md:px-12 lg:gap-x-14"
          >
            <div className="col-span-12 space-y-5 lg:col-span-7">
              <div className="flex items-center gap-x-2.5">
                <span className="flex size-10 items-center justify-center rounded-xl bg-secondary/6">
                  <EyeOff className="size-5 text-secondary" />
                </span>
                <BadgePrimary>Incognito Chat</BadgePrimary>
              </div>
              <TextReveal delay={0.2}>
                <h2>Want a blank slate? Use Incognito.</h2>
              </TextReveal>
              <p className="max-w-[460px] text-secondary/60">
                Incognito Chat disables Memory for the entire session — nothing you say is saved,
                and existing memories are not applied. Perfect for sensitive work, experimental
                ideas, or conversations you want to keep completely separate.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                {[
                  { icon: Lock, text: 'Session not saved to Memory' },
                  { icon: Shield, text: 'Existing memories not applied' },
                  { icon: EyeOff, text: 'No trace left in your context' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-x-2">
                    <Icon className="size-4 text-secondary/40" />
                    <span className="text-[13px] text-secondary/60">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="rounded-2xl border border-stroke-3 bg-background-13 p-5 space-y-3 text-[12px]">
                <div className="flex items-center gap-x-2 pb-2 border-b border-stroke-3">
                  <EyeOff className="size-3.5 text-secondary/40" />
                  <span className="font-medium text-secondary/60">Incognito session</span>
                  <span className="ml-auto rounded-full bg-secondary/8 px-2 py-0.5 text-[10px] text-secondary/40">
                    Memory OFF
                  </span>
                </div>
                <p className="text-secondary/50 leading-relaxed">
                  This conversation is not connected to your Memory. Nothing said here will be
                  saved or influence future sessions.
                </p>
                <div className="flex items-center gap-x-2 pt-1">
                  <div className="size-2 rounded-full bg-secondary/20" />
                  <span className="text-[10px] text-secondary/35">Session ends when you close this tab</span>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* ── Part of Chat callout ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <RevealAnimation
            delay={0.1}
            asChild={false}
            className="rounded-3xl bg-secondary px-8 py-12 text-center space-y-6 md:px-14 md:py-16"
          >
            <div className="flex items-center justify-center gap-x-2">
              <Brain className="size-5 text-white/40" />
              <span className="text-[12px] font-semibold uppercase tracking-widest text-white/40">
                Built into Nexus AI Chat
              </span>
            </div>
            <TextReveal delay={0.2}>
              <h2 className="text-white">
                Memory is part of{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                >
                  everything you do
                </span>
              </h2>
            </TextReveal>
            <p className="mx-auto max-w-[520px] text-white/60">
              Memory enhances Chat, Research, File Chat, and every other mode inside Nexus AI. You
              do not need to enable anything — it is on by default the moment you start using it.
            </p>
            <Link href="/signup">
              <ButtonPrimary className="mx-auto w-fit!">Start free — no card needed</ButtonPrimary>
            </Link>
          </RevealAnimation>
        </div>
      </section>

      {/* ── Pricing ── */}
      <PricingTeaser />
    </>
  );
};

export default AiMemory;
