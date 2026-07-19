import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import {
  CheckCircle2,
  FileText,
  Globe,
  Link2,
  MessageSquareText,
  Search as SearchIcon,
  Sparkles,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    Icon: MessageSquareText,
    title: 'Ask in plain language',
    text: 'No keyword games. Ask the question the way you would ask a colleague, and add follow-ups that keep the full context of the conversation.',
  },
  {
    Icon: Globe,
    title: 'Nexus AI searches the live web',
    text: 'Search runs at the moment you ask. It finds the most relevant current pages, reads them and weighs the evidence, not just the headlines.',
  },
  {
    Icon: Link2,
    title: 'Get one answer, fully sourced',
    text: 'You get a direct answer with a citation on every claim. Open any source to verify it, then send the answer straight into your document.',
  },
];

const benefits = [
  {
    Icon: Zap,
    title: 'Real-time, not last year',
    text: 'AI models stop learning at a training cutoff. Search does not: today’s news, current prices, fresh statistics and new research are all in reach the moment they are published.',
  },
  {
    Icon: Link2,
    title: 'A source on every claim',
    text: 'Answers cite the pages they draw from, inline. If a claim cannot be sourced, Nexus AI says so instead of guessing, so you can rely on what you read.',
  },
  {
    Icon: FileText,
    title: 'Search that finishes work',
    text: 'A search engine hands you links. Nexus AI hands you material: findings flow directly into the essay, report or deck you are writing, citations included.',
  },
];

const useCases = [
  {
    title: 'Students & researchers',
    text: 'Find current, citable sources for essays and papers, then let Academic Research format the citations in APA, MLA or Chicago.',
  },
  {
    title: 'Professionals',
    text: 'Market sizes, competitor moves, regulation changes: get the current number with the source, not a two-year-old estimate.',
  },
  {
    title: 'Writers & creators',
    text: 'Fact-check drafts against the live web before you publish, and pull fresh examples and statistics into your content.',
  },
  {
    title: 'Teams',
    text: 'Shared Folders keep sourced research in one place, so decisions trace back to evidence instead of a screenshot of a chat.',
  },
];

/* Static mock of a cited live-web answer. */
const SearchDemo = () => (
  <div className="border-stroke-3 mx-auto w-full max-w-[760px] rounded-[20px] border bg-white text-left shadow-[0_20px_60px_rgba(0,12,96,0.12)]">
    <div className="flex items-center gap-2.5 border-b border-[#e8ecf2] px-5 py-3.5">
      <SearchIcon className="size-4 text-[#7458e8]" />
      <span className="text-tagline-2 text-secondary">
        What changed in the EU AI Act rollout this month?
      </span>
      <span className="ml-auto hidden rounded-full bg-[#f4f2fe] px-2 py-0.5 text-[10px] text-[#7458e8] sm:block">
        Live web
      </span>
    </div>
    <div className="space-y-3 px-5 py-4">
      <div className="flex items-start gap-2.5">
        <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#f4f2fe]">
          <Sparkles className="size-3.5 text-[#7458e8]" />
        </div>
        <div className="space-y-2.5">
          <p className="text-tagline-2 text-secondary/80 leading-relaxed">
            The obligations for general-purpose AI models took effect this month, and the
            Commission published its final guidance for providers
            <span className="mx-1 inline-block translate-y-[-1px] rounded-full bg-[#f4f2fe] px-1.5 py-0.5 text-[9px] font-medium text-[#7458e8]">
              europa.eu
            </span>
            . Several member states also confirmed their national enforcement bodies, with
            penalties phasing in from next quarter
            <span className="mx-1 inline-block translate-y-[-1px] rounded-full bg-[#f4f2fe] px-1.5 py-0.5 text-[9px] font-medium text-[#7458e8]">
              reuters.com
            </span>
            .
          </p>
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] text-secondary/40">Searched 24 sources in 1.2s</span>
            <span className="rounded-full bg-[#eafaf1] px-1.5 py-0.5 text-[9px] text-[#0e9f6e]">
              All claims cited
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Search = () => {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="pt-[150px] lp:pt-[200px]">
        <div className="main-container">
          <div className="mx-auto max-w-[820px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>AI Search</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h1 className="text-heading-4 sm:text-heading-3 md:text-heading-2 font-bold">
                Real-time answers from the live web, with sources
              </h1>
            </TextReveal>
            <RevealAnimation delay={0.3}>
              <p className="text-tagline-1 md:text-tagline-new text-secondary/60 mx-auto max-w-[640px]">
                Nexus AI Search reads the web at the moment you ask, gives you one direct
                answer with a citation on every claim, and feeds it straight into the work you
                are creating.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4} asChild={false} className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link href="/signup">
                <ButtonPrimary textClassName="text-center text-nowrap">
                  Try AI Search free
                </ButtonPrimary>
              </Link>
              <Link href="/features/academic-research">
                <ButtonWhite textClassName="text-center text-nowrap">
                  See Academic Research
                </ButtonWhite>
              </Link>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.5} asChild={false} className="mt-12">
            <SearchDemo />
          </RevealAnimation>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────── */}
      <section className="pt-20 md:pt-25 lg:pt-32">
        <div className="main-container">
          <div className="space-y-10 lg:space-y-14">
            <div className="space-y-3 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>How it works</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>From question to cited answer</h2>
              </TextReveal>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {steps.map((step, index) => (
                <RevealAnimation key={step.title} delay={0.15 + index * 0.1}>
                  <article className="border-stroke-3 h-full space-y-4 rounded-2xl border bg-white p-7">
                    <div className="flex items-center gap-x-3">
                      <span className="bg-secondary/5 border-stroke-3 flex size-11 items-center justify-center rounded-xl border">
                        <step.Icon className="stroke-secondary size-5" />
                      </span>
                      <span className="text-tagline-3 text-secondary/40 font-medium">
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 className="text-heading-6 text-secondary font-medium">{step.title}</h3>
                    <p className="text-tagline-2 text-secondary/70">{step.text}</p>
                  </article>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why it matters ───────────────────────────────────────── */}
      <section className="pt-20 md:pt-25 lg:pt-32">
        <div className="main-container">
          <div className="space-y-10 lg:space-y-14">
            <div className="space-y-3 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Why AI Search</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Beyond the training cutoff</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-background-14/60 mx-auto max-w-[560px]">
                  Chatbots answer from memory. Nexus AI Search answers from what the web says
                  right now, and shows its work.
                </p>
              </TextReveal>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {benefits.map((benefit, index) => (
                <RevealAnimation key={benefit.title} delay={0.15 + index * 0.1}>
                  <article className="border-stroke-3 h-full space-y-4 rounded-2xl border bg-white p-7">
                    <span className="bg-secondary/5 border-stroke-3 flex size-11 items-center justify-center rounded-xl border">
                      <benefit.Icon className="stroke-secondary size-5" />
                    </span>
                    <h3 className="text-heading-6 text-secondary font-medium">{benefit.title}</h3>
                    <p className="text-tagline-2 text-secondary/70">{benefit.text}</p>
                  </article>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── One search across everything ─────────────────────────── */}
      <section className="pt-20 md:pt-25 lg:pt-32">
        <div className="main-container">
          <RevealAnimation delay={0.1}>
            <div className="border-stroke-3 grid gap-8 rounded-2xl border bg-white p-8 md:p-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-4">
                <BadgePrimary>One search, every source</BadgePrimary>
                <h2 className="text-heading-5 md:text-heading-4">
                  The web, your files and your apps, together
                </h2>
                <p className="text-tagline-2 md:text-tagline-1 text-secondary/70">
                  Search does not stop at the open web. Combined with AI File Chat and
                  Connectors, one question can draw on live web results, your uploaded PDFs and
                  the tools you have connected, with each answer showing exactly where it came from.
                </p>
              </div>
              <ul className="space-y-3.5">
                {[
                  'Live web results with publication dates',
                  'Your uploaded PDFs, docs and spreadsheets via AI File Chat',
                  'Connected apps like Google Drive and Notion via Connectors',
                  'Follow-up questions that keep the full conversation context',
                  'Findings flow into essays, reports and decks with citations intact',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-x-3">
                    <CheckCircle2 className="stroke-primary-500 mt-0.5 size-5 shrink-0" />
                    <span className="text-tagline-2 text-secondary/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* ── Who it's for ─────────────────────────────────────────── */}
      <section className="pt-20 md:pt-25 lg:pt-32">
        <div className="main-container">
          <div className="space-y-10 lg:space-y-14">
            <div className="space-y-3 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Use cases</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Built for how you research</h2>
              </TextReveal>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {useCases.map((useCase, index) => (
                <RevealAnimation key={useCase.title} delay={0.1 + index * 0.08}>
                  <article className="border-stroke-3 h-full rounded-2xl border bg-white p-6">
                    <p className="text-tagline-1 text-secondary font-medium">{useCase.title}</p>
                    <p className="text-tagline-3 text-secondary/60 mt-1.5">{useCase.text}</p>
                  </article>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
