import chatbotHeroImg from '@/public/images/opai-img-138.jpg';
import Image from 'next/image';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { CheckIcon } from '@/src/components/shared/icon';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import {
  faFacebookMessenger,
  faHubspot,
  faInstagram,
  faSalesforce,
  faShopify,
  faSlack,
  faTelegram,
  faWhatsapp,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  BarChart3,
  Bot,
  BrainCircuit,
  Globe,
  Mail,
  MessageCircle,
  Paintbrush,
  Settings2,
  Sparkles,
  UserCheck,
  Users,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

/* ─── Hero widgets ──────────────────────────────────── */
function HeroAdminPanel() {
  return (
    <div className="flex-1 border-r border-white/10 p-4 space-y-4 text-[12px]">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30">
        Knowledge base
      </p>
      {/* URL input */}
      <div className="flex gap-x-2">
        <div className="flex-1 rounded-lg bg-white/8 border border-white/10 px-2.5 py-1.5 text-white/40">
          https://yoursite.com
        </div>
        <button type="button" className="shrink-0 rounded-lg px-3 py-1.5 text-[11px] font-semibold text-white" style={{ background: 'var(--color-gradient-logo)' }}>
          Crawl
        </button>
      </div>
      {/* Training items */}
      <div className="space-y-2">
        {[
          { label: '124 pages crawled', done: true },
          { label: '3 PDF documents uploaded', done: true },
          { label: 'FAQ spreadsheet imported', done: true },
          { label: 'Syncing every 24 hours', done: true },
        ].map(item => (
          <div key={item.label} className="flex items-center gap-x-2">
            <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-green-500 text-[9px] text-white font-bold">&#10003;</span>
            <span className="text-white/55">{item.label}</span>
          </div>
        ))}
      </div>
      {/* Bot settings */}
      <div className="rounded-lg border border-white/10 bg-white/5 p-3 space-y-2">
        <div className="flex items-center gap-x-2">
          <div className="size-6 rounded-full flex items-center justify-center" style={{ background: 'var(--color-gradient-logo)' }}>
            <Sparkles className="size-3 text-white" />
          </div>
          <span className="text-white/70 font-medium">Nexus Support</span>
          <span className="ml-auto flex items-center gap-x-1 text-green-400 text-[10px]">
            <span className="size-1.5 rounded-full bg-green-400" />
            Online
          </span>
        </div>
        <p className="text-[10px] text-white/35">Friendly · Professional · Handles English + 80 languages</p>
      </div>
      <button type="button" className="w-full rounded-lg py-2 text-[12px] font-semibold text-secondary bg-white transition-opacity hover:opacity-90">
        Deploy chatbot
      </button>
    </div>
  );
}

function HeroWidgetPreview() {
  return (
    <div className="w-[200px] shrink-0 flex flex-col text-[11px]">
      {/* Widget header */}
      <div className="bg-secondary px-3 py-2.5 flex items-center gap-x-2">
        <div className="relative">
          <div className="size-7 rounded-full bg-white/20 flex items-center justify-center">
            <Sparkles className="size-3.5 text-white" />
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-green-400 border-2 border-secondary" />
        </div>
        <div>
          <p className="text-[11px] font-semibold text-white">Nexus Support</p>
          <p className="text-[9px] text-white/50">Always online</p>
        </div>
      </div>
      {/* Messages */}
      <div className="flex-1 bg-[#f8fafd] p-2.5 space-y-2.5 overflow-hidden">
        <div className="flex items-end gap-x-1.5">
          <div className="size-5 rounded-full bg-secondary flex items-center justify-center shrink-0">
            <Sparkles className="size-2.5 text-white" />
          </div>
          <div className="bg-white rounded-xl rounded-bl-sm border border-stroke-3 px-2.5 py-2 text-secondary/75 leading-relaxed text-[10px] max-w-[75%]">
            Hi! How can I help you today?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-secondary text-white rounded-xl rounded-br-sm px-2.5 py-2 text-[10px] max-w-[75%]">
            What is your refund policy?
          </div>
        </div>
        <div className="flex items-end gap-x-1.5">
          <div className="size-5 rounded-full bg-secondary flex items-center justify-center shrink-0">
            <Sparkles className="size-2.5 text-white" />
          </div>
          <div className="bg-white rounded-xl rounded-bl-sm border border-stroke-3 px-2.5 py-2 text-secondary/75 text-[10px] leading-relaxed max-w-[80%]">
            We offer a full 30-day refund. Would you like me to start the process?
          </div>
        </div>
        <div className="flex gap-x-1.5 pl-6.5 flex-wrap gap-y-1">
          {['Yes, start refund', 'More questions'].map(q => (
            <span key={q} className="border border-secondary/20 text-secondary rounded-full px-2 py-0.5 text-[9px] bg-white cursor-default">{q}</span>
          ))}
        </div>
      </div>
      {/* Input */}
      <div className="bg-white border-t border-stroke-3 px-2.5 py-2 flex items-center gap-x-1.5">
        <span className="flex-1 text-[10px] text-secondary/30">Type a message...</span>
        <button type="button" className="size-5 rounded-full bg-secondary flex items-center justify-center shrink-0">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4h6M4 1l3 3-3 3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  );
}

/* ─── Channel / integration data ────────────────────── */
const channels = [
  { label: 'Website', icon: Globe, color: '#217bfe', bg: 'bg-blue-50', description: 'Live chat widget on any page' },
  { label: 'WhatsApp', fa: faWhatsapp, color: '#25D366', bg: 'bg-green-50', description: 'WhatsApp Business API' },
  { label: 'Messenger', fa: faFacebookMessenger, color: '#0084ff', bg: 'bg-blue-50', description: 'Facebook Messenger' },
  { label: 'Instagram', fa: faInstagram, color: '#E4405F', bg: 'bg-pink-50', description: 'Instagram DMs' },
  { label: 'Telegram', fa: faTelegram, color: '#26A5E4', bg: 'bg-sky-50', description: 'Telegram bot' },
  { label: 'Slack', fa: faSlack, color: '#4A154B', bg: 'bg-purple-50', description: 'Slack workspace' },
  { label: 'Email', icon: Mail, color: '#ee4d5d', bg: 'bg-rose-50', description: 'Email inbox assistant' },
  { label: 'SMS', icon: MessageCircle, color: '#078efb', bg: 'bg-sky-50', description: 'Text messaging' },
];

const crmIntegrations = [
  { label: 'Salesforce', fa: faSalesforce, color: '#00A1E0' },
  { label: 'HubSpot',   fa: faHubspot,   color: '#FF7A59' },
  { label: 'Shopify',   fa: faShopify,   color: '#96bf48' },
  { label: 'WordPress', fa: faWordpress, color: '#21759B' },
  { label: 'Zendesk',   label2: 'ZD',   color: '#03363D', bg: '#03363D' },
  { label: 'Zapier',    label2: 'Za',   color: '#FF4A00', bg: '#FF4A00' },
];

/* ─── Industry cards ────────────────────────────────── */
const industries = [
  {
    icon: Users,
    label: 'E-commerce',
    body: 'Handle order tracking, returns, product questions and checkout support automatically. Recover abandoned carts with proactive chat.',
    accent: '#217bfe',
    bg: 'bg-blue-50',
    items: ['Order tracking and returns', 'Product recommendations', 'Abandoned cart recovery', 'Inventory queries'],
  },
  {
    icon: Settings2,
    label: 'SaaS',
    body: 'Guide new users through onboarding, answer billing questions and triage support tickets without hiring more agents.',
    accent: '#ac87eb',
    bg: 'bg-purple-50',
    items: ['In-app onboarding flows', 'Billing and plan questions', 'Feature documentation', 'Bug triage and routing'],
  },
  {
    icon: UserCheck,
    label: 'Healthcare',
    body: 'Answer general health FAQs, book appointments and handle pre-registration intake, all while staying compliant.',
    accent: '#ee4d5d',
    bg: 'bg-rose-50',
    items: ['Appointment booking', 'General FAQ and symptoms', 'Pre-registration forms', 'Insurance queries'],
  },
  {
    icon: BrainCircuit,
    label: 'Education',
    body: 'Help prospective students explore courses, complete enrolment forms and get answers without waiting for an admissions email.',
    accent: '#078efb',
    bg: 'bg-sky-50',
    items: ['Course and enrollment info', 'Application status', 'Fee and scholarship queries', 'Student support portal'],
  },
];

/* ─── Pricing ───────────────────────────────────────── */
const plans = [
  {
    name: 'Starter',
    price: 29,
    description: 'For small businesses getting started with AI support.',
    convos: '2,000 conversations/month',
    bots: '1 chatbot',
    highlights: ['Website widget', 'WhatsApp and Facebook', 'Basic analytics', 'Email support'],
    cta: 'Start free trial',
    href: '/signup',
    featured: false,
  },
  {
    name: 'Growth',
    price: 79,
    description: 'For growing teams needing multi-channel reach.',
    convos: '10,000 conversations/month',
    bots: '5 chatbots',
    highlights: ['All channels included', 'Lead capture and CRM sync', 'Advanced analytics', 'Human handoff', 'Priority support'],
    cta: 'Start free trial',
    href: '/signup',
    featured: true,
  },
  {
    name: 'Business',
    price: 199,
    description: 'For enterprises needing scale, white-label and SLA.',
    convos: 'Unlimited conversations',
    bots: 'Unlimited chatbots',
    highlights: ['Everything in Growth', 'White-label and custom domain', 'SSO and audit logs', 'SLA guarantee', 'Dedicated account manager'],
    cta: 'Contact sales',
    href: '/contact-sales',
    featured: false,
  },
];

/* ─── Analytics mock ────────────────────────────────── */
function AnalyticsMock() {
  const bars = [
    { label: 'Mon', h: 60 },
    { label: 'Tue', h: 80 },
    { label: 'Wed', h: 95 },
    { label: 'Thu', h: 70 },
    { label: 'Fri', h: 85 },
    { label: 'Sat', h: 45 },
    { label: 'Sun', h: 35 },
  ];
  const topics = [
    { label: 'Refund requests', pct: 34 },
    { label: 'Pricing questions', pct: 28 },
    { label: 'Order tracking', pct: 21 },
    { label: 'Account help', pct: 17 },
  ];
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden">
      <div className="border-b border-stroke-3 bg-background-13 px-4 py-3 flex items-center gap-x-2">
        <BarChart3 className="size-4 text-secondary/40" />
        <span className="text-[13px] font-medium text-secondary">Chatbot Analytics</span>
        <span className="ml-auto text-[11px] text-secondary/40">Last 7 days</span>
      </div>
      <div className="p-4 space-y-5">
        {/* KPI row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Conversations', value: '12,847' },
            { label: 'Resolved', value: '78%' },
            { label: 'Avg response', value: '1.2s' },
          ].map(kpi => (
            <div key={kpi.label} className="rounded-xl border border-stroke-3 bg-background-13 p-2.5 text-center">
              <p className="text-[16px] font-bold text-secondary">{kpi.value}</p>
              <p className="text-[10px] text-secondary/40 mt-0.5">{kpi.label}</p>
            </div>
          ))}
        </div>
        {/* Bar chart */}
        <div>
          <p className="text-[11px] font-semibold text-secondary/40 mb-2">Conversations by day</p>
          <div className="flex items-end gap-x-1.5 h-16">
            {bars.map(b => (
              <div key={b.label} className="flex-1 flex flex-col items-center gap-y-1">
                <div
                  className="w-full rounded-t-sm transition-all"
                  style={{ height: `${b.h}%`, background: 'var(--color-gradient-logo)', opacity: 0.85 }}
                />
                <span className="text-[8px] text-secondary/30">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Top topics */}
        <div>
          <p className="text-[11px] font-semibold text-secondary/40 mb-2">Top topics</p>
          <div className="space-y-2">
            {topics.map(t => (
              <div key={t.label}>
                <div className="flex justify-between text-[11px] mb-0.5">
                  <span className="text-secondary/65">{t.label}</span>
                  <span className="text-secondary/40 font-medium">{t.pct}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-background-13">
                  <div className="h-full rounded-full" style={{ width: `${t.pct}%`, background: 'var(--color-gradient-logo)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Human handoff mock ────────────────────────────── */
function HandoffMock() {
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden text-[11px]">
      <div className="border-b border-stroke-3 bg-background-13 px-4 py-3 flex items-center gap-x-2">
        <UserCheck className="size-4 text-secondary/40" />
        <span className="text-[13px] font-medium text-secondary">Live Handoff</span>
        <span className="ml-auto text-[11px] text-secondary/40">Acme Corp Chat</span>
      </div>
      <div className="p-3 space-y-2.5">
        {/* Bot conversation */}
        <div className="flex items-end gap-x-1.5">
          <div className="size-5 rounded-full bg-secondary flex items-center justify-center shrink-0">
            <Sparkles className="size-2.5 text-white" />
          </div>
          <div className="bg-background-13 rounded-xl rounded-bl-sm border border-stroke-3 px-2.5 py-2 max-w-[80%] text-secondary/70 leading-relaxed">
            I understand this is urgent. Let me connect you with a member of our team right now.
          </div>
        </div>
        {/* Handoff notice */}
        <div className="flex items-center gap-x-2 rounded-xl bg-amber-50 border border-amber-200/60 px-3 py-2">
          <span className="size-2 rounded-full bg-amber-400 shrink-0" />
          <p className="text-[10px] text-amber-700 font-medium">
            Transferring to Sarah (Support Lead) with full chat context
          </p>
        </div>
        {/* Human joins */}
        <div className="flex items-end gap-x-1.5">
          <div className="size-5 rounded-full bg-[#4c7df0] flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-[8px]">S</span>
          </div>
          <div className="bg-background-13 rounded-xl rounded-bl-sm border border-stroke-3 px-2.5 py-2 max-w-[80%] text-secondary/70 leading-relaxed">
            Hi, I'm Sarah. I can see your full conversation. Let me sort this out for you now.
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-secondary text-white rounded-xl rounded-br-sm px-2.5 py-2 max-w-[75%]">
            Thank you! Really appreciate the quick response.
          </div>
        </div>
        {/* Context tag */}
        <div className="rounded-lg bg-blue-50 border border-blue-200/50 px-3 py-2 text-[10px] text-blue-700">
          <span className="font-semibold">Full context passed:</span> 8 messages, customer tier (Premium), open ticket #4821
        </div>
      </div>
    </div>
  );
}

/* ─── Training sources mock ─────────────────────────── */
function TrainingMock() {
  const sources = [
    { label: 'Website', detail: 'yoursite.com', count: '124 pages', icon: Globe, color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: 'PDF Docs', detail: 'Help centre, FAQs, Policy', count: '3 files', icon: Bot, color: 'text-purple-500', bg: 'bg-purple-50' },
    { label: 'Spreadsheet', detail: 'product-faq.xlsx', count: '248 rows', icon: BrainCircuit, color: 'text-green-500', bg: 'bg-green-50' },
    { label: 'Live sync', detail: 'Updated every 24 hours', count: 'Auto', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50' },
  ];
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden">
      <div className="border-b border-stroke-3 bg-background-13 px-4 py-3 flex items-center justify-between">
        <span className="text-[13px] font-medium text-secondary">Knowledge base</span>
        <span className="rounded-full bg-green-50 border border-green-200/60 px-2.5 py-0.5 text-[10px] text-green-600 font-medium">Trained</span>
      </div>
      <div className="p-4 space-y-3">
        {sources.map(s => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="flex items-center gap-x-3 rounded-xl border border-stroke-3 p-3">
              <div className={`flex size-9 shrink-0 items-center justify-center rounded-xl ${s.bg}`}>
                <Icon className={`size-4 ${s.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold text-secondary">{s.label}</p>
                <p className="text-[11px] text-secondary/45 truncate">{s.detail}</p>
              </div>
              <span className="text-[11px] font-medium text-secondary/40 shrink-0">{s.count}</span>
            </div>
          );
        })}
        <div className="flex items-center gap-x-2 rounded-xl border border-dashed border-stroke-3 bg-background-13 p-3 cursor-pointer hover:bg-stroke-3/50 transition-colors">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white border border-stroke-3">
            <span className="text-lg text-secondary/30">+</span>
          </div>
          <span className="text-[13px] text-secondary/40">Add more sources</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Main page component ───────────────────────────── */
const ChatbotProduct = () => {
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
                <Bot className="size-3.5" />
                AI Chatbot
              </span>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h1 className="text-secondary leading-[1.1]">
                Your AI support agent{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                >
                  that never sleeps
                </span>
              </h1>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="mx-auto max-w-[580px] text-lg text-secondary/70 leading-relaxed">
                Train an AI chatbot on your content, deploy it across your website, WhatsApp,
                Facebook and more. No code required. Resolve up to 80% of customer
                queries automatically.
              </p>
            </TextReveal>
            <RevealAnimation delay={0.4} asChild={false} className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/signup">
                <ButtonPrimary textClassName="text-center text-nowrap">
                  Start free trial
                </ButtonPrimary>
              </Link>
              <Link href="/contact-sales">
                <ButtonWhite textClassName="text-center text-nowrap">
                  Book a demo
                </ButtonWhite>
              </Link>
            </RevealAnimation>
          </div>

          {/* Split hero visual */}
          <RevealAnimation
            delay={0.5}
            asChild={false}
            className="mx-auto mt-14 w-full max-w-[780px] overflow-hidden rounded-t-2xl border border-white/10 bg-secondary shadow-[0_-20px_80px_rgba(76,125,240,0.25)]"
          >
            <div className="flex items-center gap-x-1.5 border-b border-white/10 bg-white/5 px-4 py-3">
              <span className="size-2.5 rounded-full bg-red-500/70" />
              <span className="size-2.5 rounded-full bg-yellow-500/70" />
              <span className="size-2.5 rounded-full bg-green-500/70" />
              <span className="ml-3 text-[11px] text-white/30">Nexus AI Chatbot</span>
              <div className="ml-auto flex gap-x-3 text-[10px] text-white/25">
                <span>Dashboard</span>
                <span className="text-white/50 font-medium">Training</span>
                <span>Analytics</span>
              </div>
            </div>
            <div className="flex">
              <HeroAdminPanel />
              <HeroWidgetPreview />
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* ══ 2. STATS STRIP ═══════════════════════════════ */}
      <section className="border-b border-stroke-3 bg-white">
        <div className="main-container">
          <div className="grid grid-cols-3 divide-x divide-stroke-3">
            {[
              { stat: 'Up to 80%', label: 'Queries resolved automatically' },
              { stat: '8', label: 'Channels supported' },
              { stat: '5 min', label: 'Average setup time' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center justify-center py-8 text-center px-4">
                <p className="text-secondary font-bold" style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}>
                  {item.stat}
                </p>
                <p className="text-secondary/50 text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. HOW IT WORKS ══════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-5 text-center mb-12">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>How it works</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2 className="text-secondary">Live in three steps</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-background-14/60 mx-auto max-w-[480px]">
                No developers. No weeks of configuration. Paste your URL and your chatbot is
                ready in minutes.
              </p>
            </TextReveal>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                step: '01',
                icon: BrainCircuit,
                title: 'Train on your content',
                body: 'Paste your website URL and Nexus AI crawls every page. Upload PDFs, spreadsheets or FAQs. Connect a Google Drive or Notion workspace. The chatbot learns everything.',
                color: '#217bfe', bg: 'bg-blue-50',
              },
              {
                step: '02',
                icon: Paintbrush,
                title: 'Customize to your brand',
                body: 'Set the bot name, avatar and brand colors. Choose the tone: friendly, professional or formal. Define fallback messages, operating hours and when to escalate to a human.',
                color: '#ac87eb', bg: 'bg-purple-50',
              },
              {
                step: '03',
                icon: Zap,
                title: 'Deploy anywhere',
                body: 'Copy a single line of code to add the widget to any website. Connect WhatsApp, Facebook Messenger, Instagram, Telegram or Slack. Go live across all channels at once.',
                color: '#ee4d5d', bg: 'bg-rose-50',
              },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <RevealAnimation
                  key={s.step}
                  delay={0.1 * (i + 1)}
                  asChild={false}
                  className="border border-stroke-3 rounded-2xl bg-white p-7 space-y-4 relative"
                >
                  <span
                    className="absolute top-5 right-5 text-[42px] font-black leading-none select-none"
                    style={{ color: `${s.color}12` }}
                  >
                    {s.step}
                  </span>
                  <div className={`${s.bg} flex size-12 items-center justify-center rounded-2xl`}>
                    <Icon style={{ color: s.color }} className="size-6" />
                  </div>
                  <h3 className="text-heading-6 text-secondary">{s.title}</h3>
                  <p className="text-secondary/60 leading-relaxed text-[14px]">{s.body}</p>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ 4. CHANNELS & INTEGRATIONS ═══════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-12">
            <div className="space-y-5 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Integrations</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Meet customers wherever they are</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-background-14/60 mx-auto max-w-[500px]">
                  Deploy one chatbot across every channel your customers use. One setup,
                  all platforms, consistent experience everywhere.
                </p>
              </TextReveal>
            </div>

            {/* Channel grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
              {channels.map((ch, i) => (
                <RevealAnimation
                  key={ch.label}
                  delay={0.05 * (i + 1)}
                  asChild={false}
                  className="flex flex-col items-center gap-y-3 rounded-2xl border border-stroke-3 bg-white p-4 text-center"
                >
                  <div className={`flex size-12 items-center justify-center rounded-2xl ${ch.bg}`}>
                    {ch.fa ? (
                      <FontAwesomeIcon icon={ch.fa} style={{ color: ch.color }} className="size-6" />
                    ) : (
                      <ch.icon style={{ color: ch.color }} className="size-6" />
                    )}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-secondary">{ch.label}</p>
                    <p className="text-[10px] text-secondary/45 leading-tight mt-0.5">{ch.description}</p>
                  </div>
                </RevealAnimation>
              ))}
            </div>

            {/* CRM / tool integrations */}
            <RevealAnimation delay={0.2} asChild={false} className="rounded-2xl border border-stroke-3 bg-white p-6">
              <p className="text-[13px] font-semibold text-secondary/50 uppercase tracking-wider mb-4">
                CRM and tool integrations
              </p>
              <div className="flex flex-wrap gap-3">
                {crmIntegrations.map(crm => (
                  <div
                    key={crm.label}
                    className="flex items-center gap-x-2 rounded-full border border-stroke-3 bg-background-13 px-4 py-2"
                  >
                    {crm.fa ? (
                      <FontAwesomeIcon icon={crm.fa} style={{ color: crm.color }} className="size-4" />
                    ) : (
                      <span className="size-4 rounded flex items-center justify-center text-[9px] font-bold text-white shrink-0" style={{ background: crm.bg }}>
                        {crm.label2}
                      </span>
                    )}
                    <span className="text-[13px] font-medium text-secondary">{crm.label}</span>
                  </div>
                ))}
                <div className="flex items-center rounded-full border border-dashed border-stroke-3 bg-background-13 px-4 py-2">
                  <span className="text-[13px] text-secondary/40">+ many more via API</span>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ══ 5. SMART TRAINING ════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Smart Training</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Train once. Stay accurate forever.</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  Nexus AI learns from your existing content automatically. Paste a URL and it
                  reads your entire website. Upload a PDF and it absorbs every page. Connect a
                  Google Drive and it keeps itself up to date as your content changes.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'Crawls your website automatically from a single URL',
                    'Reads PDFs, DOCX, XLSX, CSV and text files',
                    'Connects to Google Drive, Notion and Confluence',
                    'Re-syncs automatically when content changes',
                    'Supports 80+ languages out of the box',
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
              <TrainingMock />
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ══ 6. ANALYTICS ═════════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <RevealAnimation delay={0.2} asChild={false} className="order-2 lg:order-1">
              <AnalyticsMock />
            </RevealAnimation>
            <div className="order-1 lg:order-2 space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Analytics</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Know exactly how your chatbot performs</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  Full visibility into every conversation: resolution rates, top topics, drop-off
                  points and customer satisfaction. Use the insights to improve your knowledge
                  base and reduce the queries that reach your human team.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'Live conversation logs with full history',
                    'Resolution rate and satisfaction scores',
                    'Top topics and unanswered questions',
                    'Channel breakdown and peak traffic times',
                    'Export reports as CSV or PDF',
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

      {/* ══ 7. HUMAN HANDOFF ═════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Human handoff</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Escalate seamlessly. No context lost.</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-background-14/60 leading-relaxed text-lg">
                  When a conversation needs a human, Nexus AI hands off instantly with the full
                  chat history, customer details and open ticket context. Your agent picks up
                  exactly where the bot left off.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false}>
                <ul className="space-y-3">
                  {[
                    'Rule-based and AI-triggered escalation',
                    'Full chat transcript passed to the human agent',
                    'Customer tier and account details included',
                    'Integrates with Zendesk, HubSpot and Salesforce',
                    'Queue management and agent availability routing',
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
              <HandoffMock />
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ══ 8. INDUSTRIES ════════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-12">
            <div className="space-y-5 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Industries</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Built for every business that talks to customers</h2>
              </TextReveal>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {industries.map((ind, i) => {
                const Icon = ind.icon;
                return (
                  <RevealAnimation
                    key={ind.label}
                    delay={0.1 * (i + 1)}
                    asChild={false}
                    className="border border-stroke-3 rounded-2xl bg-white p-6 space-y-4"
                  >
                    <div className={`${ind.bg} flex size-11 items-center justify-center rounded-xl`}>
                      <Icon style={{ color: ind.accent }} className="size-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-heading-6 text-secondary">{ind.label}</h3>
                      <p className="text-[13px] text-secondary/60 leading-relaxed">{ind.body}</p>
                    </div>
                    <ul className="space-y-1.5">
                      {ind.items.map(item => (
                        <li key={item} className="flex items-start gap-x-2">
                          <span className="mt-1.5 size-1.5 rounded-full shrink-0" style={{ background: ind.accent }} />
                          <span className="text-[12px] text-secondary/65">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </RevealAnimation>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 9. PRICING ═══════════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-12">
            <div className="space-y-5 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Pricing</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2 className="text-secondary">Start free. Scale when you grow.</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-background-14/60 mx-auto max-w-[440px]">
                  14-day free trial on all plans. No credit card required to start.
                </p>
              </TextReveal>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {plans.map((plan, i) => (
                <RevealAnimation
                  key={plan.name}
                  delay={0.1 * (i + 1)}
                  asChild={false}
                  className={`border rounded-2xl bg-white p-7 flex flex-col gap-y-6 ${plan.featured ? 'border-secondary shadow-lg' : 'border-stroke-3'}`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-heading-6 text-secondary">{plan.name}</h3>
                      {plan.featured && <BadgePrimary>Most popular</BadgePrimary>}
                    </div>
                    <div>
                      {typeof plan.price === 'number' ? (
                        <>
                          <span className="text-[2.25rem] font-bold text-secondary leading-none">${plan.price}</span>
                          <span className="text-secondary/50 text-[14px] ml-1">/month</span>
                        </>
                      ) : (
                        <span className="text-[2rem] font-bold text-secondary">Custom</span>
                      )}
                    </div>
                    <p className="text-[13px] text-secondary/55 leading-relaxed">{plan.description}</p>
                    <div className="rounded-xl bg-background-13 border border-stroke-3 px-3 py-2 space-y-1">
                      <p className="text-[12px] font-semibold text-secondary">{plan.convos}</p>
                      <p className="text-[12px] text-secondary/50">{plan.bots}</p>
                    </div>
                  </div>

                  <ul className="flex-1 space-y-2.5">
                    {plan.highlights.map(h => (
                      <li key={h} className="flex items-start gap-x-2">
                        <span className="border-stroke-3 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border p-0.5">
                          <CheckIcon className="stroke-secondary size-3" />
                        </span>
                        <span className="text-[13px] text-secondary/75">{h}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={plan.href} target={plan.href.startsWith('http') ? '_blank' : undefined} rel={plan.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="block">
                    {plan.featured ? (
                      <ButtonPrimary className="w-full" textClassName="text-center flex-1 px-0! pr-8!">
                        {plan.cta}
                      </ButtonPrimary>
                    ) : (
                      <ButtonWhite className="w-full" textClassName="text-center flex-1 px-0! pr-8!">
                        {plan.cta}
                      </ButtonWhite>
                    )}
                  </Link>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatbotProduct;
