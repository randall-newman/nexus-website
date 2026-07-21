'use client';

import PricingTeaser from '@/src/components/home/pricing-teaser';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import { cn } from '@/src/utils/cn';
import {
  BookOpen,
  Briefcase,
  Clock,
  Code2,
  FileSearch,
  Film,
  GraduationCap,
  Layers,
  MessageSquare,
  PenLine,
  Repeat2,
  Sparkles,
  Users,
  Wand2,
  X,
  type LucideIcon,
} from 'lucide-react';
import { skillsFaqItems } from '@/src/components/skills/skills-faq-data';
import Link from 'next/link';
import { useState } from 'react';

/* ─── Hero mock ─────────────────────────────────────────── */
function HeroSkillsMock() {
  const skills = [
    { name: 'Brand Voice', dot: 'bg-[#4c7df0]', active: true },
    { name: 'Code Reviewer', dot: 'bg-green-500', active: false },
    { name: 'Meeting Notes', dot: 'bg-green-500', active: false },
    { name: 'OKR Writer', dot: 'bg-green-500', active: false },
    { name: 'Data Analyst', dot: 'bg-yellow-400', active: false },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-[12px]">
      {/* Title bar */}
      <div className="flex items-center gap-x-1.5 border-b border-white/10 bg-white/5 px-4 py-3">
        <span className="size-2.5 rounded-full bg-red-500/70" />
        <span className="size-2.5 rounded-full bg-yellow-500/70" />
        <span className="size-2.5 rounded-full bg-green-500/70" />
        <span className="ml-3 text-[11px] text-white/30">Nexus AI · Skills</span>
        <span className="ml-auto text-[10px] text-white/25">5 of 12 active</span>
      </div>

      {/* Two-column split */}
      <div className="flex">
        {/* Left: skills list */}
        <div className="w-36 shrink-0 space-y-0.5 border-r border-white/10 p-2">
          {skills.map((s) => (
            <div
              key={s.name}
              className={`flex items-center gap-x-2 rounded-lg px-2.5 py-2 ${
                s.active ? 'bg-white/15' : ''
              }`}
            >
              <span className={`size-1.5 shrink-0 rounded-full ${s.dot}`} />
              <span
                className={`text-[10px] font-medium ${
                  s.active ? 'text-white' : 'text-white/35'
                }`}
              >
                {s.name}
              </span>
            </div>
          ))}
          <div className="mt-2 cursor-pointer rounded-lg border border-dashed border-white/15 px-2.5 py-2 text-center text-[10px] text-white/25">
            + New skill
          </div>
        </div>

        {/* Right: skill detail */}
        <div className="flex-1 space-y-3 p-4">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold text-white/70">Brand Voice Writer</p>
            <span className="flex items-center gap-x-1 text-[9px] text-green-400">
              <span className="size-1.5 rounded-full bg-green-400" />
              Active
            </span>
          </div>
          <div>
            <p className="mb-1 text-[9px] uppercase tracking-wider text-white/25">Instructions</p>
            <div className="min-h-[68px] rounded-lg border border-[#4c7df0]/40 bg-[#4c7df0]/8 px-3 py-2.5 text-[10px] leading-relaxed text-white/55">
              Always write in our brand tone: confident but approachable. Avoid corporate jargon.
              Use active voice. Headlines must be benefit-led, not feature-led.
            </div>
          </div>
          <div>
            <p className="mb-1.5 text-[9px] uppercase tracking-wider text-white/25">Applied to</p>
            <div className="flex flex-wrap gap-1">
              {['Chat', 'Essay Writer', 'Artifacts'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/8 px-2 py-0.5 text-[9px] text-white/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: live preview */}
      <div className="border-t border-white/10 bg-white/3 px-4 py-3">
        <p className="mb-2 text-[9px] uppercase tracking-wider text-white/25">Skill in action</p>
        <div className="space-y-1.5 rounded-lg border border-white/10 bg-white/5 p-3 text-[10px]">
          <p className="text-white/35">
            You → Write a tagline for our project management tool
          </p>
          <div className="flex items-start gap-x-2">
            <span className="shrink-0 text-white/25">AI →</span>
            <p className="font-semibold text-white/80">&ldquo;Work less. Ship more.&rdquo;</p>
          </div>
          <p className="text-[9px] text-[#8ab0f5]">
            ✓ Benefit-led · no jargon · under 5 words — skill applied
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Comparison mock ───────────────────────────────────── */
function ComparisonMock() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {/* Without */}
      <div className="space-y-3 rounded-2xl border border-stroke-3 bg-white p-5">
        <div className="flex items-center gap-x-2">
          <div className="flex size-6 items-center justify-center rounded-full bg-secondary/8">
            <X className="size-3 text-secondary/40" />
          </div>
          <p className="text-[12px] font-semibold text-secondary/50">Without skills</p>
        </div>
        <div className="space-y-2 rounded-lg bg-background-13 p-3 text-[11px]">
          <div className="flex items-start gap-x-2">
            <span className="shrink-0 text-secondary/40">You</span>
            <p className="text-secondary/65">
              Write a tagline for our project management tool
            </p>
          </div>
          <div className="h-px bg-stroke-3" />
          <div className="flex items-start gap-x-2">
            <span className="shrink-0 text-secondary/40">AI</span>
            <p className="text-secondary/65">&ldquo;Stay Organized, Stay Ahead&rdquo;</p>
          </div>
        </div>
        <p className="text-[11px] text-secondary/40">
          Generic. Could be any brand. Nexus AI has no way to know your style.
        </p>
      </div>

      {/* With Brand Voice skill */}
      <div className="space-y-3 rounded-2xl border border-[#217bfe]/30 bg-[#217bfe]/5 p-5">
        <div className="flex items-center gap-x-2">
          <div className="flex size-6 items-center justify-center rounded-full bg-[#217bfe]/15">
            <Wand2 className="size-3 text-[#217bfe]" />
          </div>
          <p className="text-[12px] font-semibold text-secondary">With Brand Voice skill</p>
        </div>
        <div className="mb-1 flex items-center gap-x-1.5 rounded-lg border border-[#217bfe]/25 bg-[#217bfe]/10 px-2.5 py-1.5 text-[10px]">
          <span className="size-1.5 rounded-full bg-[#217bfe]" />
          <span className="font-medium text-[#217bfe]">Brand Voice Writer</span>
          <span className="ml-auto text-secondary/35">active</span>
        </div>
        <div className="space-y-2 rounded-lg border border-[#217bfe]/15 bg-white p-3 text-[11px]">
          <div className="flex items-start gap-x-2">
            <span className="shrink-0 text-secondary/40">You</span>
            <p className="text-secondary/65">
              Write a tagline for our project management tool
            </p>
          </div>
          <div className="h-px bg-stroke-3" />
          <div className="flex items-start gap-x-2">
            <span className="shrink-0 text-secondary/40">AI</span>
            <p className="font-semibold text-secondary">&ldquo;Work less. Ship more.&rdquo;</p>
          </div>
        </div>
        <p className="text-[11px] text-secondary/60">
          Benefit-led, under 5 words, no jargon — exactly your rules, applied automatically.
        </p>
      </div>
    </div>
  );
}

/* ─── Skills directory data ─────────────────────────────── */
type SkillEntry = {
  name: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  bg: string;
};

type SkillCategory = {
  id: string;
  label: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  border: string;
  skills: SkillEntry[];
};

const skillCategories: SkillCategory[] = [
  {
    id: 'writing',
    label: 'Writing & Content',
    icon: PenLine,
    color: '#217bfe',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    skills: [
      {
        name: 'Brand Voice Writer',
        desc: 'Apply your brand tone, style, and vocabulary to every piece of content — automatically.',
        icon: PenLine,
        color: '#217bfe',
        bg: 'bg-blue-50',
      },
      {
        name: 'Blog Post Formatter',
        desc: 'Structure posts with H2s every 300 words, bullet lists for steps, and a benefit-led intro.',
        icon: PenLine,
        color: '#4c7df0',
        bg: 'bg-indigo-50',
      },
      {
        name: 'Email Templates',
        desc: "Write emails in your org's approved tone with standard greeting, structure, and sign-off.",
        icon: PenLine,
        color: '#0ea5e9',
        bg: 'bg-sky-50',
      },
      {
        name: 'Social Media Toolkit',
        desc: 'Format posts per platform: Twitter punchy under 240 chars, LinkedIn 150–200 words, Instagram caption with 3 hashtags.',
        icon: PenLine,
        color: '#8b5cf6',
        bg: 'bg-violet-50',
      },
      {
        name: 'Press Release Writer',
        desc: 'Follow your PR format: dateline, lede, supporting quotes, boilerplate, and media contact section.',
        icon: PenLine,
        color: '#06b6d4',
        bg: 'bg-cyan-50',
      },
    ],
  },
  {
    id: 'code',
    label: 'Code & Development',
    icon: Code2,
    color: '#10b981',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    skills: [
      {
        name: 'Code Reviewer',
        desc: 'Flag security vulnerabilities first, then performance, then style. Explain every suggestion.',
        icon: Code2,
        color: '#10b981',
        bg: 'bg-emerald-50',
      },
      {
        name: 'Commit Message Writer',
        desc: "Follow Conventional Commits: feat:, fix:, docs:, refactor: — present tense, 72-char body limit.",
        icon: Code2,
        color: '#22c55e',
        bg: 'bg-green-50',
      },
      {
        name: 'Test Generator',
        desc: 'Write Jest tests: one describe per function, one test per behaviour, cover happy path and error states.',
        icon: Code2,
        color: '#84cc16',
        bg: 'bg-lime-50',
      },
      {
        name: 'API Documenter',
        desc: 'Document endpoints following OpenAPI spec with request/response examples and error codes.',
        icon: Code2,
        color: '#0891b2',
        bg: 'bg-cyan-50',
      },
      {
        name: 'Type Safety Enforcer',
        desc: "TypeScript strictly: no 'any', explicit return types on all functions, Zod for external data validation.",
        icon: Code2,
        color: '#6366f1',
        bg: 'bg-indigo-50',
      },
    ],
  },
  {
    id: 'research',
    label: 'Research & Analysis',
    icon: FileSearch,
    color: '#ac87eb',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    skills: [
      {
        name: 'Paper Reviewer',
        desc: 'For any academic paper: summarise methodology, sample size, key findings, limitations, and citations.',
        icon: FileSearch,
        color: '#ac87eb',
        bg: 'bg-purple-50',
      },
      {
        name: 'Competitor Intelligence',
        desc: 'Analyse rivals across: pricing model, feature set, positioning, weaknesses, and recent moves.',
        icon: FileSearch,
        color: '#8b5cf6',
        bg: 'bg-violet-50',
      },
      {
        name: 'Data Analyst',
        desc: 'Always pair data with context: what changed, why it likely changed, and what action it implies.',
        icon: FileSearch,
        color: '#0ea5e9',
        bg: 'bg-sky-50',
      },
      {
        name: 'Market Research',
        desc: 'Structure findings: executive summary → methodology → key insights → implications → next steps.',
        icon: FileSearch,
        color: '#7c3aed',
        bg: 'bg-violet-50',
      },
    ],
  },
  {
    id: 'business',
    label: 'Business & Operations',
    icon: Briefcase,
    color: '#ee4d5d',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    skills: [
      {
        name: 'Meeting Notes',
        desc: 'Format every meeting: attendees → decisions (numbered) → action items with owner and deadline.',
        icon: Briefcase,
        color: '#ee4d5d',
        bg: 'bg-rose-50',
      },
      {
        name: 'OKR Writer',
        desc: 'Write in Google OKR format: one ambitious objective + three measurable key results with targets.',
        icon: Briefcase,
        color: '#f43f5e',
        bg: 'bg-pink-50',
      },
      {
        name: 'Project Brief',
        desc: 'Every brief must include: objective, success metrics, scope, out-of-scope, timeline, and owner.',
        icon: Briefcase,
        color: '#f59e0b',
        bg: 'bg-amber-50',
      },
      {
        name: 'Business Report',
        desc: 'Structure reports: executive summary (1 paragraph) → context → analysis → recommendation → next steps.',
        icon: Briefcase,
        color: '#ef4444',
        bg: 'bg-red-50',
      },
    ],
  },
  {
    id: 'productivity',
    label: 'Personal Productivity',
    icon: Clock,
    color: '#f59e0b',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    skills: [
      {
        name: 'Daily Planner',
        desc: 'Sort tasks: deep-focus (AM), meetings (midday), admin (PM). Always include one "big rock" per day.',
        icon: Clock,
        color: '#f59e0b',
        bg: 'bg-amber-50',
      },
      {
        name: 'Learning Notes',
        desc: 'Summarise: key concepts → real-world examples → connections to existing knowledge → open questions.',
        icon: Clock,
        color: '#f97316',
        bg: 'bg-orange-50',
      },
      {
        name: 'Project Retrospective',
        desc: 'End every review with: what went well, what I would change, one thing I will carry forward.',
        icon: Clock,
        color: '#d97706',
        bg: 'bg-yellow-50',
      },
    ],
  },
  {
    id: 'creative',
    label: 'Creative',
    icon: Sparkles,
    color: '#8b5cf6',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
    skills: [
      {
        name: 'Design Brief Writer',
        desc: 'Every creative brief: visual style, mood keywords, dimensions, colour constraints, delivery format.',
        icon: Sparkles,
        color: '#8b5cf6',
        bg: 'bg-violet-50',
      },
      {
        name: 'Naming Workshop',
        desc: 'Generate 10 names: 3 descriptive, 3 metaphorical, 2 invented/portmanteau, 2 abstract.',
        icon: Sparkles,
        color: '#a855f7',
        bg: 'bg-purple-50',
      },
      {
        name: 'Story Outliner',
        desc: 'Structure narratives: hook (one paragraph) → rising tension → climax → resolution → takeaway.',
        icon: Sparkles,
        color: '#7c3aed',
        bg: 'bg-violet-50',
      },
    ],
  },
];

/* ─── Steps ─────────────────────────────────────────────── */
const steps = [
  {
    n: '01',
    title: 'Name it',
    body: "Give your skill a clear name like 'Brand Voice Writer' or 'Code Reviewer'. This is what shows in your skills list and what Nexus AI uses to decide when to activate it.",
  },
  {
    n: '02',
    title: 'Write the instructions',
    body: 'Describe your process, rules, and preferences in plain English — exactly as you would brief a new team member. No code, no prompt engineering, no templates required.',
  },
  {
    n: '03',
    title: 'Apply everywhere',
    body: 'Choose which Nexus AI products activate this skill: Chat, Essay Writer, Creative Studio, Artifacts, or all of them. From that point forward, it fires automatically.',
  },
];

/* ─── Integrations ──────────────────────────────────────── */
const integrations = [
  {
    product: 'Chat',
    icon: MessageSquare,
    color: '#217bfe',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    headline: 'Every conversation follows your rules',
    desc: 'Active skills apply automatically to all Nexus AI Chat sessions. You never have to re-explain your preferences.',
    flow: ['You ask a question', 'Skills activate silently', 'On-brand, on-process reply'],
  },
  {
    product: 'Essay Writer',
    icon: PenLine,
    color: '#ac87eb',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    headline: 'Your academic style, built into every draft',
    desc: "Writing and citation skills shape tone, format, and referencing across every essay — matching your institution's requirements without repetition.",
    flow: ['Start a draft', 'Citation skill fires', 'Correctly formatted references'],
  },
  {
    product: 'Creative Studio',
    icon: Sparkles,
    color: '#f59e0b',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    headline: 'Creative direction, every generation',
    desc: 'Image and audio generation skills carry your brand palette, mood guidelines, and quality standards into every creative output.',
    flow: ['Generate image', 'Brand skill applies', 'On-brand result, every time'],
  },
  {
    product: 'Artifacts',
    icon: Layers,
    color: '#10b981',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    headline: 'Consistent outputs across all deliverables',
    desc: 'Output structure skills ensure every report, brief, and document Nexus AI produces follows your exact template and naming conventions.',
    flow: ['Create artifact', 'Output skill runs', 'Your format, automatically'],
  },
];

/* ─── Personas ──────────────────────────────────────────── */
const personas = [
  {
    icon: Users,
    role: 'Teams',
    headline: 'One voice, zero alignment calls',
    color: '#217bfe',
    points: [
      'Shared brand and style skills for the whole org',
      'Consistent output across every team member',
      'Onboard new hires — skills transfer your SOPs instantly',
      'Skills Manager controls which are available to whom',
    ],
  },
  {
    icon: Briefcase,
    role: 'Professionals',
    headline: 'Your process, automated at scale',
    color: '#ac87eb',
    points: [
      'Report and brief structures applied every time',
      'Client-specific tone skills per account',
      'Compliance and format rules enforced automatically',
      'Switch between clients by switching active skills',
    ],
  },
  {
    icon: GraduationCap,
    role: 'Students',
    headline: 'Academic conventions, never forgotten',
    color: '#ee4d5d',
    points: [
      'Citation style applied to every essay automatically',
      'Word limits and structure enforced per assignment',
      'Reference and note-taking format skills',
      'Switch skills between courses with one click',
    ],
  },
  {
    icon: Code2,
    role: 'Developers',
    headline: 'Code standards on every suggestion',
    color: '#10b981',
    points: [
      'Commit message format, enforced on every commit',
      'Team-wide code style and review checklist',
      "Testing framework conventions applied to every 'write tests' request",
      'Switch between project-specific skill sets',
    ],
  },
];

export { skillsFaqItems };

/* ─── Main component ─────────────────────────────────────── */
const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('writing');

  const currentCategory =
    skillCategories.find((c) => c.id === activeCategory) ?? skillCategories[0];

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-secondary pt-[160px] pb-0">
        <div
          className="pointer-events-none absolute -top-20 left-1/2 size-[600px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
          aria-hidden
          style={{ background: 'radial-gradient(circle, #217bfe 0%, transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute -bottom-40 right-10 size-[400px] rounded-full opacity-15 blur-3xl"
          aria-hidden
          style={{ background: 'radial-gradient(circle, #ac87eb 0%, transparent 70%)' }}
        />

        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-14 lg:gap-x-12">
            {/* Text */}
            <div className="col-span-12 space-y-8 lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary className="border-white/20 bg-white/10 text-white/80">
                  Skills
                </BadgePrimary>
              </RevealAnimation>
              <div className="space-y-5">
                <TextReveal delay={0.2}>
                  <h1 className="text-white">
                    Teach Nexus AI{' '}
                    <span
                      className="bg-clip-text text-transparent"
                      style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                    >
                      how you work
                    </span>
                  </h1>
                </TextReveal>
                <TextReveal delay={0.3}>
                  <p className="max-w-[500px] text-white/60">
                    Write your process once in plain English. Nexus AI applies it automatically
                    across every chat, essay, image, and document — without you ever having to
                    explain it again.
                  </p>
                </TextReveal>
              </div>
              <RevealAnimation delay={0.4} asChild={false} className="flex flex-wrap gap-3">
                <Link href="/upgrade/premium">
                  <ButtonPrimary textClassName="text-nowrap">Start building skills</ButtonPrimary>
                </Link>
                <Link href="/pricing">
                  <ButtonWhite textClassName="text-nowrap">See plans</ButtonWhite>
                </Link>
              </RevealAnimation>
            </div>

            {/* Mock */}
            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.5} direction="right" offset={60}>
                <HeroSkillsMock />
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ── Value props strip ── */}
      <section className="border-b border-stroke-3 py-10">
        <div className="main-container">
          <RevealAnimation
            delay={0.1}
            asChild={false}
            className="grid grid-cols-1 gap-6 sm:grid-cols-3"
          >
            {[
              {
                icon: Repeat2,
                title: 'Write once, run forever',
                body: 'Define your process once. Nexus AI applies it automatically across every relevant chat, doc, and project.',
              },
              {
                icon: PenLine,
                title: 'Plain English rules',
                body: 'No code, no prompt engineering. Write your skill the same way you would brief a new team member.',
              },
              {
                icon: Wand2,
                title: 'Stack and combine',
                body: 'Activate multiple skills at once. Brand Voice + Code Reviewer + Meeting Notes all run together without conflict.',
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-x-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary/5">
                  <item.icon className="size-5 text-secondary/60" />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-secondary">{item.title}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-secondary/55">{item.body}</p>
                </div>
              </div>
            ))}
          </RevealAnimation>
        </div>
      </section>

      {/* ── How to create a skill ── */}
      <section className="pt-20 md:pt-25 lg:pt-32">
        <div className="main-container">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Creating a skill</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Three steps, plain English, done</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="mx-auto max-w-[480px] text-secondary/55">
                  No templates, no configuration files. If you can describe how you work to a
                  colleague, you can build a skill.
                </p>
              </TextReveal>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {steps.map((step, i) => (
                <RevealAnimation key={step.n} delay={0.1 * (i + 1)} asChild={false}>
                  <div className="space-y-4 rounded-2xl border border-stroke-3 bg-white p-6">
                    <span className="block text-[40px] font-bold leading-none text-stroke-3">
                      {step.n}
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-[16px] font-semibold text-secondary">{step.title}</h3>
                      <p className="text-[13px] leading-relaxed text-secondary/60">{step.body}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison: with vs without ── */}
      <section className="pt-20 md:pt-25 lg:pt-32">
        <div className="main-container">
          <div className="space-y-10">
            <div className="space-y-4 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>The difference</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Same prompt. Completely different result.</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="mx-auto max-w-[480px] text-secondary/55">
                  Without a skill, Nexus AI gives a reasonable generic answer. With one active,
                  it gives your answer — every time.
                </p>
              </TextReveal>
            </div>
            <RevealAnimation delay={0.2} asChild={false}>
              <ComparisonMock />
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ── Skills directory ── */}
      <section className="pt-20 md:pt-25 lg:pt-32">
        <div className="main-container">
          <div className="space-y-10">
            <div className="space-y-4 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Skills directory</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Start from a template or build your own</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="mx-auto max-w-[500px] text-secondary/55">
                  Over 20 ready-made skill templates across writing, development, research,
                  business, productivity, and creative work. Use as-is or customise to your exact
                  workflow.
                </p>
              </TextReveal>
            </div>

            {/* Category tabs */}
            <RevealAnimation
              delay={0.1}
              asChild={false}
              className="flex flex-wrap items-center justify-center gap-2"
            >
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    'flex items-center gap-x-1.5 rounded-full border px-4 py-2 text-[13px] font-medium transition-all',
                    activeCategory === cat.id
                      ? 'border-secondary bg-secondary text-white shadow-sm'
                      : 'border-stroke-3 bg-white text-secondary/60 hover:border-secondary/30 hover:text-secondary'
                  )}
                >
                  <cat.icon className="size-3.5" />
                  {cat.label}
                </button>
              ))}
            </RevealAnimation>

            {/* Skills grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {currentCategory.skills.map((skill, i) => (
                <RevealAnimation key={skill.name} delay={0.06 * (i + 1)} asChild={false}>
                  <div className="group space-y-3 rounded-2xl border border-stroke-3 bg-white p-5 transition-shadow hover:shadow-sm">
                    <div className={`flex size-10 items-center justify-center rounded-xl ${skill.bg}`}>
                      <skill.icon className="size-5" style={{ color: skill.color }} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-[14px] font-semibold text-secondary">{skill.name}</h3>
                      <p className="text-[12px] leading-relaxed text-secondary/55">{skill.desc}</p>
                    </div>
                    <span
                      className="inline-flex cursor-pointer items-center gap-x-1 text-[12px] font-semibold transition-colors"
                      style={{ color: currentCategory.color }}
                    >
                      Use this template
                    </span>
                  </div>
                </RevealAnimation>
              ))}

              {/* "Build your own" card */}
              <RevealAnimation
                delay={0.06 * (currentCategory.skills.length + 1)}
                asChild={false}
              >
                <Link
                  href="/upgrade/premium"
                  className="group flex flex-col items-center justify-center gap-y-3 rounded-2xl border-2 border-dashed border-stroke-3 bg-transparent p-5 text-center transition-all hover:border-secondary/30 hover:bg-white"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-secondary/5">
                    <Wand2 className="size-5 text-secondary/40" />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-secondary/60 group-hover:text-secondary">
                      Build your own
                    </p>
                    <p className="mt-0.5 text-[12px] text-secondary/40">
                      Write any skill from scratch
                    </p>
                  </div>
                </Link>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ── Better Together ── */}
      <section className="pt-20 md:pt-25 lg:pt-32">
        <div className="main-container">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Works everywhere</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Skills run across every Nexus AI product</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="mx-auto max-w-[480px] text-secondary/55">
                  Activate a skill once. It follows you into Chat, Essay Writer, Creative Studio,
                  and Artifacts — no re-configuration required.
                </p>
              </TextReveal>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {integrations.map((item, i) => (
                <RevealAnimation key={item.product} delay={0.1 * (i + 1)} asChild={false}>
                  <div className={`space-y-4 rounded-2xl border ${item.border} bg-white p-6`}>
                    <div className="flex items-center gap-x-3">
                      <div className={`flex size-9 items-center justify-center rounded-xl ${item.bg}`}>
                        <item.icon className="size-4" style={{ color: item.color }} />
                      </div>
                      <p className="text-[14px] font-semibold text-secondary">{item.product}</p>
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold text-secondary leading-snug">
                        {item.headline}
                      </p>
                      <p className="mt-2 text-[13px] leading-relaxed text-secondary/55">
                        {item.desc}
                      </p>
                    </div>
                    {/* Flow arrows */}
                    <div className="flex items-center gap-x-1.5 overflow-x-auto">
                      {item.flow.map((step, j) => (
                        <div key={step} className="flex shrink-0 items-center gap-x-1.5">
                          <span
                            className="rounded-full border px-2.5 py-1 text-[11px] font-medium"
                            style={{
                              color: item.color,
                              borderColor: `${item.color}30`,
                              background: `${item.color}10`,
                            }}
                          >
                            {step}
                          </span>
                          {j < item.flow.length - 1 && (
                            <span className="text-[11px] text-secondary/25">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Personas ── */}
      <section className="pt-20 md:pt-25 lg:pt-32">
        <div className="main-container">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Who uses Skills</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Built for any workflow, any team size</h2>
              </TextReveal>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {personas.map((persona, i) => (
                <RevealAnimation key={persona.role} delay={0.1 * (i + 1)} asChild={false}>
                  <div className="space-y-4 rounded-2xl border border-stroke-3 bg-white p-6">
                    <div
                      className="flex size-10 items-center justify-center rounded-xl"
                      style={{ background: `${persona.color}18` }}
                    >
                      <persona.icon className="size-5" style={{ color: persona.color }} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-secondary/40">
                        {persona.role}
                      </p>
                      <h3 className="text-[15px] font-semibold leading-snug text-secondary">
                        {persona.headline}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {persona.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-x-2">
                          <span
                            className="mt-1.5 size-1.5 shrink-0 rounded-full"
                            style={{ background: persona.color }}
                          />
                          <span className="text-[12px] leading-relaxed text-secondary/60">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing context ── */}
      <section className="pt-20 md:pt-25 lg:pt-32">
        <div className="main-container">
          <div className="space-y-10">
            <div className="space-y-4 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Pricing</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Skills unlock on Premium</h2>
              </TextReveal>
            </div>

            <RevealAnimation
              delay={0.2}
              asChild={false}
              className="grid gap-4 sm:grid-cols-3 max-w-[720px] mx-auto"
            >
              {[
                {
                  plan: 'Free',
                  skills: '—',
                  note: 'Not available',
                  cta: null,
                  highlight: false,
                },
                {
                  plan: 'Premium',
                  skills: '50 Skills',
                  note: 'Full skill builder, all 6 categories, apply to any product',
                  cta: { label: 'Start with Premium', href: '/upgrade/premium' },
                  highlight: true,
                },
                {
                  plan: 'Ultimate',
                  skills: 'Unlimited Skills',
                  note: 'Everything in Premium + team skill sharing and Skills Manager',
                  cta: { label: 'Get Ultimate', href: '/upgrade/ultimate' },
                  highlight: false,
                },
              ].map((tier) => (
                <div
                  key={tier.plan}
                  className={cn(
                    'space-y-4 rounded-2xl border p-6',
                    tier.highlight
                      ? 'border-secondary bg-secondary text-white'
                      : 'border-stroke-3 bg-white'
                  )}
                >
                  <p
                    className={`text-[12px] font-semibold uppercase tracking-wider ${tier.highlight ? 'text-white/50' : 'text-secondary/40'}`}
                  >
                    {tier.plan}
                  </p>
                  <p
                    className={`text-[22px] font-bold leading-tight ${tier.highlight ? 'text-white' : 'text-secondary'}`}
                  >
                    {tier.skills}
                  </p>
                  <p
                    className={`text-[12px] leading-relaxed ${tier.highlight ? 'text-white/60' : 'text-secondary/50'}`}
                  >
                    {tier.note}
                  </p>
                  {tier.cta && (
                    <Link href={tier.cta.href}>
                      {tier.highlight ? (
                        <ButtonPrimary className="w-full!" textClassName="text-center w-full justify-center">
                          {tier.cta.label}
                        </ButtonPrimary>
                      ) : (
                        <ButtonWhite className="w-full!" textClassName="text-center w-full justify-center">
                          {tier.cta.label}
                        </ButtonWhite>
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ── Pricing teaser ── */}
      <PricingTeaser />
    </>
  );
};

export default SkillsPage;
