import chatbotHeroImg from '@/public/images/opai-img-138.jpg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import LiveCodeDemo from '@/src/components/home/live-code-demo';
import PricingTeaser from '@/src/components/home/pricing-teaser';
import CodeFaq from '@/src/components/products/code-faq';
import { CheckIcon } from '@/src/components/shared/icon';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import {
  faAndroid,
  faApple,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  BrainCircuit,
  Code2,
  GitPullRequest,
  Globe,
  MessageSquareCode,
  Shield,
  Terminal,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

/* ─── Language data ─────────────────────────────────── */
const languages = [
  { name: 'TypeScript', file: 'typescript' },
  { name: 'JavaScript', file: 'javascript' },
  { name: 'Python', file: 'python' },
  { name: 'Go', file: 'go' },
  { name: 'Rust', file: 'rust' },
  { name: 'Java', file: 'java' },
  { name: 'Kotlin', file: 'kotlin' },
  { name: 'Swift', file: 'swift' },
  { name: 'Next.js', file: 'nextjs' },
  { name: 'Flutter', file: 'flutter' },
  { name: 'Ruby', file: 'ruby' },
  { name: 'PHP', file: 'php' },
  { name: 'SQL', file: 'sql' },
  { name: 'Bash', file: 'bash' },
];

/* ─── Platform data ─────────────────────────────────── */
type PlatformIcon =
  | { type: 'lucide'; icon: React.ComponentType<{ className?: string }> }
  | { type: 'svg'; src: string }
  | { type: 'fa'; icon: typeof faGithub };

const platformBg: Record<string, string> = {
  Terminal:  'bg-gray-900',
  'VS Code': 'bg-[#007ACC]',
  JetBrains: 'bg-[#1f1f1f]',
  Web:       'bg-[#4c7df0]',
  GitHub:    'bg-gray-900',
  Android:   'bg-[#3ddc84]',
  iOS:       'bg-gray-900',
};

const platforms: { label: string; description: string; href: string; icon: PlatformIcon }[] = [
  {
    label: 'Terminal',
    description: 'Install via one command',
    href: '#install',
    icon: { type: 'lucide', icon: Terminal },
  },
  {
    label: 'VS Code',
    description: 'VS Code extension',
    href: '/downloads/browser-extension',
    icon: { type: 'svg', src: '/images/languages/vscode.svg' },
  },
  {
    label: 'JetBrains',
    description: 'IntelliJ, PyCharm + more',
    href: '/downloads',
    icon: { type: 'svg', src: '/images/languages/jetbrains.svg' },
  },
  {
    label: 'Web',
    description: 'Any browser, no install',
    href: 'https://app.mynexusai.com',
    icon: { type: 'lucide', icon: Globe },
  },
  {
    label: 'GitHub',
    description: 'PR review and CI',
    href: '/features/microsoft-365',
    icon: { type: 'fa', icon: faGithub },
  },
  {
    label: 'Android',
    description: 'Google Play',
    href: '/downloads/mobile',
    icon: { type: 'fa', icon: faAndroid },
  },
  {
    label: 'iOS',
    description: 'App Store',
    href: '/downloads/mobile',
    icon: { type: 'fa', icon: faApple },
  },
];

/* ─── Code review comments ──────────────────────────── */
const reviewComments = [
  {
    line: '23',
    severity: 'security',
    severityColor: 'text-red-500 bg-red-50 border-red-200',
    message:
      'No input validation on userId. A malformed UUID will crash the query and could expose an injection vector.',
    fix: 'Add z.string().uuid() validation before calling db.users.findOne().',
  },
  {
    line: '47',
    severity: 'performance',
    severityColor: 'text-amber-600 bg-amber-50 border-amber-200',
    message:
      'db.users.findOne() called inside a loop. This fires N database queries for N items.',
    fix: 'Extract to a single db.users.findMany({ id: { in: ids } }) before the loop.',
  },
  {
    line: '61',
    severity: 'suggestion',
    severityColor: 'text-blue-500 bg-blue-50 border-blue-200',
    message:
      'This function is now 87 lines. Splitting validation, fetch and transform into helpers will make it easier to test.',
    fix: 'validateRequest(), fetchUserData(), transformResponse(), each single-purpose.',
  },
];

/* ─── Agent steps ───────────────────────────────────── */
const agentSteps = [
  { label: 'Read user model schema and existing test suite', done: true },
  { label: 'Created Stripe customer on signup hook', done: true },
  { label: 'Added subscription_status column and migration', done: true },
  { label: 'Built /webhooks/stripe with retry and idempotency', done: true },
  { label: 'Wrote 14 unit tests, all passing', done: true },
  { label: 'Opened pull request with full description', done: true },
];

/* ─── Differentiators ───────────────────────────────── */
const differentiators = [
  {
    icon: MessageSquareCode,
    title: 'Shows its reasoning, not just the result',
    body: 'Every suggestion comes with an explanation of why: the bug it prevents, the edge case it handles, the performance gain it unlocks. You learn as you ship.',
  },
  {
    icon: Zap,
    title: 'One workspace. Code, docs, design.',
    body: 'No copying AI output between browser tabs. Your spec, your code, your docs and your tests live in the same Nexus AI workspace. Context travels with you.',
  },
  {
    icon: Shield,
    title: 'No plugin. No setup. Any machine.',
    body: 'Nexus AI Code runs in the browser and from your terminal. No IDE extension to install, no version to pin, no account per team member. Start in 30 seconds.',
  },
];

/* ─── Component ─────────────────────────────────────── */

function PlatformIconEl({ platform }: { platform: (typeof platforms)[0] }) {
  const bg = platformBg[platform.label] ?? 'bg-secondary';
  const { icon } = platform;

  if (icon.type === 'lucide') {
    const Icon = icon.icon;
    return (
      <div className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${bg}`}>
        <Icon className="size-7 text-white" />
      </div>
    );
  }
  if (icon.type === 'fa') {
    return (
      <div className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${bg}`}>
        <FontAwesomeIcon icon={icon.icon} className="size-7 text-white" />
      </div>
    );
  }
  return (
    <div className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${bg}`}>
      <img src={icon.src} alt="" className="size-8 object-contain" aria-hidden="true" />
    </div>
  );
}

const CodeProductPage = () => {
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
          <div className="mx-auto max-w-[760px] space-y-6 text-center">
            <RevealAnimation delay={0.1}>
              <span
                className="inline-flex items-center gap-x-2 rounded-full px-4 py-1.5 text-[13px] font-semibold text-secondary"
                style={{ background: 'rgba(0,12,96,0.08)' }}
              >
                <Code2 className="size-3.5" />
                Nexus AI Code
              </span>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h1 className="text-secondary leading-[1.1]">
                Code with an AI that{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                >
                  explains every change
                </span>
              </h1>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="mx-auto max-w-[560px] text-lg text-secondary/70 leading-relaxed">
                Nexus AI Code catches security gaps, logic errors and missing edge cases, with
                transparent reasoning on every suggestion. Generate, review, refactor and deploy
                from one workspace.
              </p>
            </TextReveal>
            <RevealAnimation delay={0.4} asChild={false} className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/signup">
                <ButtonPrimary textClassName="text-center text-nowrap">
                  Start coding free
                </ButtonPrimary>
              </Link>
              <Link href="/pricing">
                <ButtonWhite textClassName="text-center text-nowrap">
                  View pricing
                </ButtonWhite>
              </Link>
            </RevealAnimation>
          </div>

          {/* Code demo window */}
          <RevealAnimation
            delay={0.5}
            asChild={false}
            className="mx-auto mt-14 w-full max-w-[820px] overflow-hidden rounded-t-2xl border border-white/10 bg-secondary shadow-[0_-20px_80px_rgba(76,125,240,0.25)]"
          >
            <div className="flex items-center gap-x-1.5 border-b border-white/10 bg-white/5 px-4 py-3">
              <span className="size-2.5 rounded-full bg-red-500/70" />
              <span className="size-2.5 rounded-full bg-yellow-500/70" />
              <span className="size-2.5 rounded-full bg-green-500/70" />
              <span className="ml-3 text-[11px] text-white/30">Nexus AI Code</span>
              <span className="ml-auto text-[11px] text-white/20">src/api/dashboard.ts</span>
            </div>
            <LiveCodeDemo />
          </RevealAnimation>
        </div>
      </section>

      {/* ══ 2. STATS STRIP ═══════════════════════════════ */}
      <section className="border-b border-stroke-3 bg-white">
        <div className="main-container">
          <div className="grid grid-cols-3 divide-x divide-stroke-3">
            {[
              { stat: '14+', label: 'Languages supported' },
              { stat: '2-round', label: 'AI code review' },
              { stat: 'End-to-end', label: 'Code agents' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center justify-center py-8 text-center">
                <p className="text-secondary font-bold" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.25rem)' }}>
                  {item.stat}
                </p>
                <p className="text-secondary/50 text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. CAPABILITIES GRID ═════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-5 text-center mb-12">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Capabilities</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2 className="text-secondary">Everything a developer needs, in one chat</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-background-14/60 mx-auto max-w-[500px]">
                From a one-liner to an end-to-end feature. Nexus AI Code handles the full
                development workflow.
              </p>
            </TextReveal>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Code2,
                title: 'Code generation',
                description: 'Describe what you need, get production-ready code in your language and style.',
                bg: 'bg-blue-50', color: '#217bfe',
              },
              {
                icon: GitPullRequest,
                title: 'Code review',
                description: 'Deep review with reasoning: bugs, security gaps and edge cases, each with a fix.',
                bg: 'bg-purple-50', color: '#ac87eb',
              },
              {
                icon: BrainCircuit,
                title: 'Code agents',
                description: 'Hand off a feature request. The agent plans, writes, tests and opens a PR.',
                bg: 'bg-sky-50', color: '#078efb',
              },
              {
                icon: Terminal,
                title: 'CLI and terminal',
                description: 'Run Nexus AI from your terminal. Pipe errors in, get explanations out.',
                bg: 'bg-rose-50', color: '#ee4d5d',
              },
            ].map((cap, i) => {
              const Icon = cap.icon;
              return (
                <RevealAnimation
                  key={cap.title}
                  delay={0.1 * (i + 1)}
                  asChild={false}
                  className="border border-stroke-3 rounded-2xl bg-white p-6 space-y-4"
                >
                  <div className={`${cap.bg} flex size-11 items-center justify-center rounded-xl`}>
                    <Icon style={{ color: cap.color }} className="size-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-6 text-secondary">{cap.title}</h3>
                    <p className="text-[14px] text-secondary/60 leading-relaxed">{cap.description}</p>
                  </div>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ 4. CLI DEEP DIVE ═════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39" id="install">
        <div className="main-container">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text */}
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>CLI Workflow</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Stay in your terminal</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  Run Nexus AI directly from your command line. Pipe any command output into the
                  AI, get plain-English explanations for error messages, or generate a script
                  without opening a browser tab.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.35} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'Explain any build error with nexus explain',
                    'Review a file with nexus review src/auth.ts',
                    'Generate scripts from natural language prompts',
                    'Pipe logs or stack traces for instant analysis',
                    'Open a PR with nexus agent "add feature X"',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-x-2.5">
                      <span className="border-stroke-3 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border p-0.5">
                        <CheckIcon className="stroke-secondary size-3" />
                      </span>
                      <span className="text-secondary/75 text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealAnimation>

              {/* Install command */}
              <RevealAnimation delay={0.4} asChild={false} className="space-y-2">
                <p className="text-[13px] font-semibold text-secondary/50 uppercase tracking-wider">
                  Install in one command
                </p>
                <div className="flex items-center gap-x-3 overflow-x-auto rounded-xl bg-secondary px-4 py-3.5 font-mono text-[13px]">
                  <span className="text-green-400 shrink-0">$</span>
                  <code className="text-white/80 flex-1 select-all whitespace-nowrap">
                    curl -fsSL https://mynexusai.com/install.sh | bash
                  </code>
                </div>
                <p className="text-[12px] text-secondary/40">
                  macOS, Linux and Windows (WSL). Requires no root access.
                </p>
              </RevealAnimation>
            </div>

            {/* Terminal demo */}
            <RevealAnimation delay={0.3} asChild={false} className="rounded-2xl bg-secondary overflow-hidden">
              <div className="flex items-center gap-x-1.5 border-b border-white/10 px-4 py-3">
                <span className="size-2.5 rounded-full bg-red-500/70" />
                <span className="size-2.5 rounded-full bg-yellow-500/70" />
                <span className="size-2.5 rounded-full bg-green-500/70" />
                <span className="ml-3 text-[11px] text-white/30">Terminal</span>
              </div>
              <div className="p-5 font-mono text-[13px] space-y-5 leading-relaxed">
                <div>
                  <p className="text-green-400">$ nexus explain -- npm run build</p>
                  <p className="text-white/50 mt-2 text-[12px] leading-relaxed">
                    <span className="text-[#8ab0f5] font-medium">Nexus AI: </span>
                    Circular dependency between{' '}
                    <span className="text-white/70">auth.ts</span> and{' '}
                    <span className="text-white/70">session.ts</span>. Move the shared{' '}
                    <span className="text-white/70">UserSession</span> type into a{' '}
                    <span className="text-white/70">types.ts</span> file both modules can
                    import without creating a cycle.
                  </p>
                </div>
                <div>
                  <p className="text-green-400">$ nexus review src/middleware/auth.ts</p>
                  <p className="text-white/50 mt-2 text-[12px] leading-relaxed">
                    <span className="text-[#8ab0f5] font-medium">Nexus AI: </span>
                    Found 3 issues: 1 security, 1 performance, 1 suggestion.
                    Run <span className="text-white/70">nexus review --fix</span> to apply
                    safe auto-fixes.
                  </p>
                </div>
                <div>
                  <p className="text-green-400">
                    $ nexus agent &quot;add Stripe billing to the user model&quot;
                  </p>
                  <p className="text-white/50 mt-2 text-[12px] leading-relaxed">
                    <span className="text-[#8ab0f5] font-medium">Nexus AI: </span>
                    Planning&hellip; 6 steps identified. Writing code now.
                    Pull request will be opened when complete.
                  </p>
                </div>
                <div>
                  <p className="text-green-400">
                    $ nexus write &quot;bash script to batch-resize ./assets to 1200px&quot;
                  </p>
                  <p className="text-white/50 mt-2 text-[12px] leading-relaxed">
                    <span className="text-[#8ab0f5] font-medium">Nexus AI: </span>
                    Script generated using{' '}
                    <span className="text-white/70">sips</span> with a progress bar.
                    Originals backed up to{' '}
                    <span className="text-white/70">./assets/originals/</span>.
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ══ 5. CODE AGENTS DEEP DIVE ═════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Agent task card */}
            <RevealAnimation
              delay={0.2}
              asChild={false}
              className="order-2 lg:order-1 rounded-2xl border border-stroke-3 bg-white p-7 space-y-5"
            >
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-secondary/40">
                  Agent task
                </p>
                <p className="text-secondary font-medium text-[15px] leading-snug">
                  &ldquo;Add Stripe subscription billing to the existing user model. Include
                  webhook handling for failed payments.&rdquo;
                </p>
              </div>

              <div className="space-y-2.5">
                {agentSteps.map((step, i) => (
                  <div key={step.label} className="flex items-start gap-x-3">
                    <span
                      className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
                      style={{
                        background: '#22c55e',
                        color: 'white',
                      }}
                    >
                      &#10003;
                    </span>
                    <span className="text-[14px] text-secondary/80 leading-snug">{step.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-x-2 rounded-xl bg-green-50 border border-green-200/60 px-4 py-3">
                <span className="size-2 rounded-full bg-green-500 shrink-0" />
                <span className="text-[13px] text-green-700 font-medium">
                  Pull request opened &middot; 6 files changed &middot; 14 tests passing
                </span>
              </div>
            </RevealAnimation>

            {/* Text */}
            <div className="order-1 lg:order-2 space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Code Agents</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Multi-step tasks, handled start to finish</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  Code Agents break a larger task into steps, write the code, run checks and
                  iterate until the output meets your requirements. Hand off a feature request
                  and come back to a pull-ready branch.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.35}>
                <p className="text-background-14/60 leading-relaxed">
                  Agents understand your codebase context: they read existing schemas, follow your
                  naming conventions, match your test style and open pull requests with a written
                  summary of every decision they made along the way.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'Scaffold a new feature end-to-end from a prompt',
                    'Migrate a codebase to a new framework version',
                    'Write and run a full test suite autonomously',
                    'Open a pull request with a written description',
                    'Iterate until tests pass before handing back',
                  ].map((item) => (
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

      {/* ══ 6. CODE REVIEW DEEP DIVE ═════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text */}
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Code Review</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">A senior reviewer on every PR, automatically</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  Nexus AI Code reads your diff and returns a structured review: not linting
                  output, but the kind of comments a senior engineer would leave. Security issues,
                  performance anti-patterns, missing edge cases and refactor suggestions, each with
                  a plain-English explanation and a concrete fix.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'Flags security vulnerabilities with CVE context',
                    'Catches N+1 queries and performance anti-patterns',
                    'Suggests refactors for long-term maintainability',
                    'Shows its reasoning, not just the verdict',
                  ].map((item) => (
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

            {/* Review card */}
            <RevealAnimation delay={0.3} asChild={false} className="space-y-3">
              <div className="rounded-xl border border-stroke-3 bg-background-13 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <Code2 className="size-4 text-secondary/40" />
                  <span className="text-[13px] font-medium text-secondary">src/middleware/auth.ts</span>
                </div>
                <span className="text-[11px] text-secondary/40">3 comments</span>
              </div>
              {reviewComments.map((c) => (
                <div key={c.line} className="rounded-xl border border-stroke-3 bg-white p-4 space-y-2">
                  <div className="flex items-center gap-x-2">
                    <span className={`border rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${c.severityColor}`}>
                      {c.severity}
                    </span>
                    <span className="text-[11px] text-secondary/40">Line {c.line}</span>
                  </div>
                  <p className="text-[13px] text-secondary/70 leading-relaxed">{c.message}</p>
                  <div className="rounded-lg bg-green-50 border border-green-200/60 px-3 py-2">
                    <p className="text-[11px] text-green-700 font-medium leading-relaxed">
                      <span className="text-green-500 mr-1">Fix:</span>
                      {c.fix}
                    </p>
                  </div>
                </div>
              ))}
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ══ 7. USE FROM ANYWHERE ════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-12">
            <div className="space-y-5 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Platforms</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Use Nexus AI Code from anywhere</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-background-14/60 mx-auto max-w-[480px]">
                  Terminal, VS Code, JetBrains, the web, GitHub, Android or iOS. Nexus AI Code
                  follows you wherever you write code.
                </p>
              </TextReveal>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
              {platforms.map((platform, i) => (
                <RevealAnimation
                  key={platform.label}
                  delay={0.05 * (i + 1)}
                  asChild={false}
                >
                  <Link
                    href={platform.href}
                    className="flex flex-col items-center gap-y-3 rounded-2xl border border-stroke-3 bg-white p-5 text-center transition-shadow hover:shadow-md"
                  >
                    <PlatformIconEl platform={platform} />
                    <div>
                      <p className="text-[14px] font-semibold text-secondary">{platform.label}</p>
                      <p className="text-[12px] text-secondary/50 mt-0.5 leading-tight">{platform.description}</p>
                    </div>
                  </Link>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 8. LANGUAGES ══════════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-10">
            <div className="space-y-4 text-center">
              <TextReveal delay={0.1}>
                <h2 className="text-secondary">Works in every major language</h2>
              </TextReveal>
              <TextReveal delay={0.2}>
                <p className="text-background-14/60 mx-auto max-w-[440px]">
                  Idiomatic output in each, using the conventions and patterns your language
                  community expects.
                </p>
              </TextReveal>
            </div>
            <RevealAnimation
              delay={0.2}
              asChild={false}
              className="grid grid-cols-4 gap-4 sm:grid-cols-7"
            >
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex flex-col items-center gap-y-2 rounded-xl border border-stroke-3 bg-white p-3 text-center hover:border-secondary/20 transition-colors"
                >
                  <Image
                    src={`/images/languages/${lang.file}.svg`}
                    alt={lang.name}
                    width={36}
                    height={36}
                    className="object-contain"
                    unoptimized
                  />
                  <span className="text-[12px] font-medium text-secondary/70 leading-tight">
                    {lang.name}
                  </span>
                </div>
              ))}
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ══ 9. WHY NEXUS AI CODE ══════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-12">
            <div className="space-y-5 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Why Nexus AI Code</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Built different from the start</h2>
              </TextReveal>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {differentiators.map((d, i) => {
                const Icon = d.icon;
                return (
                  <RevealAnimation
                    key={d.title}
                    delay={0.1 * (i + 1)}
                    asChild={false}
                    className="bg-secondary rounded-2xl p-7 space-y-4"
                  >
                    <div className="flex size-11 items-center justify-center rounded-xl bg-white/10">
                      <Icon className="size-5 text-white" />
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
      <CodeFaq />
    </>
  );
};

export default CodeProductPage;
