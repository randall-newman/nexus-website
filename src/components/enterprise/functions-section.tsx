'use client';

import { useState } from 'react';
import {
  BarChart2,
  BookOpen,
  Briefcase,
  Code2,
  Cog,
  DollarSign,
  Scale,
  Shield,
  TrendingUp,
  Users,
} from 'lucide-react';

const functions = [
  {
    label: 'Engineering',
    icon: Code2,
    tasks: [
      { title: 'Convert requirements into specifications', body: 'Turn product briefs and stakeholder notes into detailed technical specs, edge-case analysis, and acceptance criteria.' },
      { title: 'Review code and surface vulnerabilities', body: 'Catch bugs, security issues, and anti-patterns across pull requests before they reach production.' },
      { title: 'Design system architecture', body: 'Reason through trade-offs in service design, data modelling, and infrastructure choices with a senior-level technical partner.' },
      { title: 'Debug errors and trace root causes', body: 'Paste an error, a stack trace, or a log snippet and get a structured diagnosis with candidate fixes.' },
      { title: 'Write and maintain technical documentation', body: 'Generate API docs, runbooks, and onboarding guides from existing code or a brief description of the system.' },
      { title: 'Generate test cases across any framework', body: 'Produce unit, integration, and end-to-end tests for new and existing code in Jest, Pytest, Playwright, and more.' },
    ],
  },
  {
    label: 'Marketing',
    icon: TrendingUp,
    tasks: [
      { title: 'Interpret market trends and competitive signals', body: 'Synthesise industry reports, competitor announcements, and customer feedback into concise strategic briefings.' },
      { title: 'Brainstorm and develop campaign strategies', body: 'Generate campaign concepts, positioning angles, and creative territories from a product brief or audience description.' },
      { title: 'Draft copy across channels and formats', body: 'Write email sequences, landing page copy, social posts, and ad creative that stays on-brand at any scale.' },
      { title: 'Build audience personas from research', body: 'Turn raw interview transcripts, survey data, and usage analytics into structured persona profiles.' },
      { title: 'Create performance reports from raw data', body: 'Paste in metrics and get a written commentary, key insights, and recommended next steps ready to share.' },
    ],
  },
  {
    label: 'Sales',
    icon: Briefcase,
    tasks: [
      { title: 'Research accounts before every call', body: 'Surface company news, job postings, and product signals that indicate buying intent or expansion opportunity.' },
      { title: 'Analyse relationship status and deal history', body: 'Identify patterns across your book of business and surface accounts at risk of churn or ready to expand.' },
      { title: 'Generate personalised talking points', body: 'Create account-specific outreach and discovery questions based on the prospect\'s industry, size, and recent news.' },
      { title: 'Draft outreach and follow-up sequences', body: 'Write and refine emails, LinkedIn messages, and follow-ups that match each stage of the sales cycle.' },
      { title: 'Summarise call recordings and extract next steps', body: 'Turn meeting transcripts into structured summaries with clear action items, risks, and next steps for CRM entry.' },
    ],
  },
  {
    label: 'Product Management',
    icon: BarChart2,
    tasks: [
      { title: 'Turn feedback into structured feature briefs', body: 'Cluster and synthesise user feedback, support tickets, and sales notes into prioritised feature briefs.' },
      { title: 'Write product requirements documents', body: 'Produce clear PRDs from a conversation, covering user stories, success metrics, and open questions.' },
      { title: 'Prioritise backlogs with reasoning and trade-offs', body: 'Evaluate competing feature requests using frameworks like RICE or ICE and explain the reasoning behind each ranking.' },
      { title: 'Summarise user research into themes', body: 'Condense interview recordings, usability test sessions, and NPS verbatims into the patterns that matter.' },
      { title: 'Draft release notes and product updates', body: 'Write internal and external-facing release notes that translate technical changes into customer language.' },
    ],
  },
  {
    label: 'Human Resources',
    icon: Users,
    tasks: [
      { title: 'Write and refine job descriptions', body: 'Produce clear, inclusive job descriptions for any role — tailored to level, team, and the skills that actually matter.' },
      { title: 'Summarise candidate notes and signals', body: 'Aggregate interview feedback across panel members and surface key hiring signals for faster calibration.' },
      { title: 'Draft policies, handbooks, and guides', body: 'Write and update HR policies, employee handbooks, and onboarding materials for any team or region.' },
      { title: 'Answer employee questions on demand', body: 'Let employees get fast, accurate answers about benefits, policies, and procedures without waiting for HR.' },
      { title: 'Generate performance review frameworks', body: 'Create rubrics, review templates, and coaching prompts aligned to role levels and company values.' },
    ],
  },
  {
    label: 'Security',
    icon: Shield,
    tasks: [
      { title: 'Review code for vulnerabilities', body: 'Identify SQL injection, XSS, auth flaws, and other OWASP top-10 vulnerabilities with suggested remediation.' },
      { title: 'Draft incident response playbooks', body: 'Build runbooks and response playbooks for common incident types — from phishing to infrastructure breach.' },
      { title: 'Analyse audit logs for anomalous patterns', body: 'Summarise large log exports, surface unusual access patterns, and generate a structured anomaly report.' },
      { title: 'Write security policies and awareness content', body: 'Produce acceptable use policies, data handling standards, and security awareness training materials.' },
      { title: 'Summarise threat intelligence reports', body: 'Turn lengthy CVE advisories and threat intelligence feeds into prioritised, actionable summaries for your team.' },
    ],
  },
  {
    label: 'Legal',
    icon: Scale,
    tasks: [
      { title: 'Review contracts and flag unusual clauses', body: 'Mark up NDAs, MSAs, and vendor agreements, highlighting non-standard terms and missing protections.' },
      { title: 'Draft standard agreements from scratch', body: 'Generate first drafts of NDAs, SLAs, and data processing agreements — ready for counsel to refine.' },
      { title: 'Summarise case law and regulatory guidance', body: 'Distil lengthy legal texts into concise summaries of the obligations and risks that matter to your business.' },
      { title: 'Answer routine internal legal questions', body: 'Give employees fast answers on standard questions — IP ownership, export controls, acceptable use — at any hour.' },
      { title: 'Prepare due diligence checklists', body: 'Build structured due diligence frameworks for M&A, vendor onboarding, and partnership reviews.' },
    ],
  },
  {
    label: 'Finance',
    icon: DollarSign,
    tasks: [
      { title: 'Analyse financial statements and surface trends', body: 'Identify revenue drivers, cost anomalies, and period-over-period movements in raw financial data.' },
      { title: 'Build scenario models and sensitivities', body: 'Construct narrative descriptions and structured tables for bull, base, and bear scenarios from your assumptions.' },
      { title: 'Summarise earnings calls and investor reports', body: 'Turn lengthy transcripts into executive-ready summaries highlighting guidance, risks, and analyst concerns.' },
      { title: 'Draft board presentations and commentary', body: 'Write the narrative layer for board decks — headings, insights, and strategic framing — from raw numbers.' },
      { title: 'Automate routine reporting', body: 'Generate recurring management reports, variance analyses, and KPI summaries from structured data exports.' },
    ],
  },
  {
    label: 'Operations',
    icon: Cog,
    tasks: [
      { title: 'Write and maintain standard operating procedures', body: 'Document workflows, processes, and escalation paths in clear, step-by-step SOPs that stay up to date.' },
      { title: 'Summarise meetings and extract action items', body: 'Turn meeting notes or transcripts into crisp summaries with clearly assigned action items and owners.' },
      { title: 'Draft vendor RFPs and evaluation frameworks', body: 'Write RFP documents, scoring rubrics, and vendor comparison matrices for any procurement process.' },
      { title: 'Map and document internal processes', body: 'Describe a process in plain language and get a structured workflow with decision points and handoffs.' },
      { title: 'Create project status reports', body: 'Generate concise project updates from raw task lists, blockers, and milestone data — ready to share.' },
    ],
  },
  {
    label: 'Research',
    icon: BookOpen,
    tasks: [
      { title: 'Synthesise literature across multiple sources', body: 'Upload papers, reports, or briefs and get a structured literature review with key themes and contradictions.' },
      { title: 'Generate competitive intelligence reports', body: 'Distil publicly available information about competitors into a structured analysis of positioning, gaps, and signals.' },
      { title: 'Produce executive summaries with citations', body: 'Turn long-form research into concise summaries where every claim links back to its source.' },
      { title: 'Build knowledge bases from internal documents', body: 'Organise and synthesise internal research archives, making institutional knowledge searchable and reusable.' },
      { title: 'Draft research proposals and methodology sections', body: 'Outline research questions, hypotheses, and methodology frameworks ready for internal or external review.' },
    ],
  },
];

export default function FunctionsSection() {
  const [active, setActive] = useState(0);
  const current = functions[active];

  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        {/* Header */}
        <div className="mb-12 space-y-4 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-primary-500">
            Use cases
          </p>
          <h2 className="text-secondary">Real work, across every function</h2>
          <p className="text-tagline-1 text-secondary/60 mx-auto max-w-[520px]">
            One platform, deployed organisation-wide. Every team has specific tasks Nexus AI
            can take on from day one.
          </p>
        </div>

        {/* Tab + content layout */}
        <div className="overflow-hidden rounded-3xl border border-stroke-3 bg-secondary">
          <div className="grid grid-cols-12">

            {/* Left: tab list */}
            <div className="col-span-12 flex gap-1 overflow-x-auto border-b border-white/10 px-4 py-3 scrollbar-none md:col-span-4 md:flex-col md:overflow-x-visible md:border-b-0 md:border-r md:px-3 md:py-4 lg:col-span-3">
              {functions.map((fn, i) => (
                <button
                  key={fn.label}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`flex shrink-0 items-center gap-x-2.5 rounded-xl px-3.5 py-2.5 text-left transition-colors md:w-full ${
                    active === i
                      ? 'bg-white/10 text-white'
                      : 'text-white/50 hover:bg-white/5 hover:text-white/80'
                  }`}
                >
                  <fn.icon className="size-4 shrink-0" />
                  <span className="text-[13px] font-medium whitespace-nowrap">{fn.label}</span>
                </button>
              ))}
            </div>

            {/* Right: task list */}
            <div className="col-span-12 p-6 md:col-span-8 md:p-8 lg:col-span-9">
              <div className="mb-6 flex items-center gap-x-3">
                <div className="flex size-9 items-center justify-center rounded-xl bg-white/10">
                  <current.icon className="size-4.5 text-white" />
                </div>
                <h3 className="text-heading-5 text-white">{current.label}</h3>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {current.tasks.map((task) => (
                  <div
                    key={task.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-2"
                  >
                    <p className="text-[13px] font-semibold text-white leading-snug">{task.title}</p>
                    <p className="text-[12px] text-white/50 leading-relaxed">{task.body}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
