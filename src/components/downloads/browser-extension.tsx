import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import {
  CheckCircle,
  ExternalLink,
  FileText,
  Globe,
  Highlighter,
  MessageSquare,
  PenLine,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

/* ─── Browser config ─────────────────────────────────── */
const browsers = [
  {
    id: 'chrome',
    name: 'Chrome',
    icon: '/images/browsers/chrome.svg',
    store: 'Chrome Web Store',
    storeUrl: 'https://chromewebstore.google.com',
    color: '#4285F4',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200/60',
    tagColor: 'text-[#4285F4]',
    version: '120+',
    badge: 'Most popular',
    badgeColor: 'bg-[#4285F4]/10 text-[#4285F4] border-[#4285F4]/20',
  },
  {
    id: 'edge',
    name: 'Edge',
    icon: '/images/browsers/microsoftedge.svg',
    store: 'Microsoft Edge Add-ons',
    storeUrl: 'https://microsoftedge.microsoft.com/addons',
    color: '#0078D4',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200/60',
    tagColor: 'text-[#0078D4]',
    version: '105+',
    badge: 'Microsoft verified',
    badgeColor: 'bg-[#0078D4]/10 text-[#0078D4] border-[#0078D4]/20',
  },
  {
    id: 'opera',
    name: 'Opera',
    icon: '/images/browsers/opera.svg',
    store: 'Opera Add-ons',
    storeUrl: 'https://addons.opera.com',
    color: '#FF1B2D',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200/60',
    tagColor: 'text-[#FF1B2D]',
    version: '90+',
    badge: 'Opera verified',
    badgeColor: 'bg-[#FF1B2D]/10 text-[#FF1B2D] border-[#FF1B2D]/20',
  },
];

/* ─── Hero extension sidebar mock ───────────────────── */
function HeroExtensionMock() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden text-[12px]">
      {/* Browser chrome */}
      <div className="flex items-center gap-x-1.5 border-b border-white/10 px-3 py-2.5 bg-white/5">
        <span className="size-2.5 rounded-full bg-red-500/70" />
        <span className="size-2.5 rounded-full bg-yellow-500/70" />
        <span className="size-2.5 rounded-full bg-green-500/70" />
        {/* URL bar */}
        <div className="ml-3 flex flex-1 items-center gap-x-2 rounded-md bg-white/8 border border-white/10 px-2.5 py-1">
          <Globe className="size-3 text-white/30 shrink-0" />
          <span className="text-[10px] text-white/30 truncate">techcrunch.com/2025/nexus-ai-raises-200m</span>
        </div>
        {/* Extension icon */}
        <div className="ml-2 flex size-6 shrink-0 items-center justify-center rounded bg-white/10 border border-white/10">
          <Sparkles className="size-3 text-[#ac87eb]" />
        </div>
      </div>
      <div className="flex" style={{ minHeight: 320 }}>
        {/* Webpage content */}
        <div className="flex-1 p-4 space-y-2 overflow-hidden">
          <div className="h-4 w-4/5 rounded bg-white/20" />
          <div className="h-2 w-full rounded bg-white/10" />
          <div className="h-2 w-5/6 rounded bg-white/10" />
          {/* Highlighted text */}
          <div className="my-2 rounded bg-[#ac87eb]/25 border border-[#ac87eb]/30 px-2 py-1.5 space-y-1">
            <div className="h-2 w-full rounded bg-[#ac87eb]/40" />
            <div className="h-2 w-4/5 rounded bg-[#ac87eb]/40" />
            <div className="h-2 w-full rounded bg-[#ac87eb]/40" />
          </div>
          {/* Right-click context menu */}
          <div className="ml-4 rounded-lg bg-white/10 border border-white/15 overflow-hidden w-40">
            <div className="px-3 py-1.5 flex items-center gap-x-2 bg-[#4c7df0]/20 border-b border-white/10">
              <Sparkles className="size-3 text-[#8ab0f5]" />
              <span className="text-[10px] text-[#8ab0f5] font-semibold">Ask Nexus AI</span>
            </div>
            {['Explain this', 'Summarise', 'Fact-check'].map((opt) => (
              <div key={opt} className="px-3 py-1.5 text-[10px] text-white/40 hover:bg-white/5">{opt}</div>
            ))}
          </div>
          <div className="h-2 w-3/4 rounded bg-white/10" />
          <div className="h-2 w-full rounded bg-white/10" />
          <div className="h-2 w-2/3 rounded bg-white/10" />
        </div>
        {/* Nexus AI sidebar panel */}
        <div className="w-52 shrink-0 border-l border-white/10 flex flex-col bg-white/3">
          <div className="flex items-center gap-x-1.5 border-b border-white/10 px-3 py-2.5 bg-white/5">
            <Sparkles className="size-3 text-[#ac87eb]" />
            <span className="text-[10px] font-semibold text-white/60">Nexus AI</span>
            <span className="ml-auto text-[9px] text-white/25">nexusai.com</span>
          </div>
          <div className="flex-1 p-3 space-y-2.5">
            <div className="rounded-lg bg-white/8 border border-white/10 p-2 text-[10px] text-white/50 leading-relaxed">
              Explain the key takeaway from the highlighted text
            </div>
            <div className="rounded-lg bg-[#4c7df0]/20 border border-[#4c7df0]/30 p-2 text-[10px] text-white/65 leading-relaxed">
              Nexus AI raised a $200M Series C at a $2B valuation — double its previous round. The key driver is enterprise contract growth, up 340% YoY.
            </div>
            {/* Action chips */}
            <div className="flex flex-wrap gap-1">
              {['Summarise page', 'Find key facts', 'Translate'].map((chip) => (
                <span key={chip} className="rounded-full bg-white/8 border border-white/10 px-2 py-0.5 text-[9px] text-white/40">{chip}</span>
              ))}
            </div>
            {/* Input */}
            <div className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1.5 flex items-center gap-x-2">
              <span className="flex-1 text-[10px] text-white/25">Ask anything about this page…</span>
              <Sparkles className="size-3 text-white/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── How it works in 3 steps ────────────────────────── */
function InstallSteps({ browserId }: { browserId: string }) {
  const browser = browsers.find((b) => b.id === browserId) ?? browsers[0];
  const steps = [
    { n: '1', label: `Go to the ${browser.store}`, sub: 'Click the install button below' },
    { n: '2', label: `Click "Add to ${browser.name}"`, sub: 'Takes under 10 seconds' },
    { n: '3', label: 'Sign in with Nexus AI', sub: 'Use your existing account' },
  ];
  return (
    <div className="flex flex-col gap-y-3 sm:flex-row sm:gap-x-4">
      {steps.map((s, i) => (
        <div key={s.n} className="flex flex-1 items-start gap-x-3">
          <span
            className="flex size-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
            style={{ background: browser.color }}
          >
            {s.n}
          </span>
          <div>
            <p className="text-[13px] font-semibold text-secondary">{s.label}</p>
            <p className="text-[12px] text-secondary/50">{s.sub}</p>
          </div>
          {i < steps.length - 1 && (
            <div className="hidden sm:block mt-3 flex-none w-6 border-t border-dashed border-stroke-3" />
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Feature deep-dive mock: Page summariser ─────────── */
function SummariseMock() {
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden text-[12px]">
      <div className="flex items-center gap-x-1.5 border-b border-stroke-3 px-4 py-3 bg-background-13">
        <FileText className="size-3.5 text-secondary/40" />
        <span className="text-[11px] text-secondary/60 font-medium">Page summary</span>
        <span className="ml-auto text-[10px] text-secondary/30">hbr.org/2025/ai-adoption</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="rounded-lg bg-background-13 px-3 py-2 text-[11px] text-secondary/60">
          Summarise this article for me
        </div>
        <div className="space-y-2 text-[11px] text-secondary/70 leading-relaxed">
          <p><span className="font-semibold text-secondary">Main argument:</span> Companies adopting AI in workflows see 38% productivity gains on average, but only 12% have moved past pilot programmes.</p>
          <div className="space-y-1.5 border-t border-stroke-3 pt-2">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-secondary/30">Key points</p>
            {['Adoption is bottlenecked by change management, not technology', 'SMBs outpacing enterprises in speed of deployment', 'ROI is highest in writing, research, and data tasks'].map((pt) => (
              <div key={pt} className="flex items-start gap-x-2">
                <CheckCircle className="size-3 text-secondary/40 shrink-0 mt-0.5" />
                <span className="text-secondary/60">{pt}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-x-2">
          <button className="flex-1 rounded-lg border border-stroke-3 bg-background-13 py-1.5 text-[10px] text-secondary/50">Copy summary</button>
          <button className="flex-1 rounded-lg bg-secondary text-white py-1.5 text-[10px]">Open in Chat</button>
        </div>
      </div>
    </div>
  );
}

/* ─── Feature deep-dive mock: Highlight and ask ──────── */
function HighlightMock() {
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden text-[12px]">
      <div className="flex items-center gap-x-1.5 border-b border-stroke-3 px-4 py-3 bg-background-13">
        <Highlighter className="size-3.5 text-secondary/40" />
        <span className="text-[11px] text-secondary/60 font-medium">Highlight and ask</span>
      </div>
      <div className="p-4 space-y-3">
        {/* Webpage snippet */}
        <div className="rounded-lg border border-stroke-3 p-3 text-[11px] text-secondary/60 leading-relaxed space-y-1">
          <p>The Federal Reserve&apos;s decision to hold rates at 5.25-5.5% reflects concerns about</p>
          <p className="bg-yellow-100/80 border-l-2 border-yellow-400 pl-1.5 text-secondary/80 rounded-r font-medium">
            persistent core inflation averaging 3.2% over the last six months
          </p>
          <p>despite cooling headline figures driven by energy prices.</p>
        </div>
        {/* Popup */}
        <div className="rounded-xl border border-stroke-3 bg-background-13 p-3 space-y-2">
          <p className="text-[10px] font-semibold text-secondary/40">You asked about the selected text:</p>
          <p className="text-secondary/70">What does "core inflation" exclude and why does it matter here?</p>
          <div className="rounded-lg bg-white border border-stroke-3 p-2.5 text-secondary/65 leading-relaxed">
            Core inflation strips out food and energy prices — both highly volatile. The Fed watches core because it better reflects underlying demand-driven price pressure. At 3.2%, core remains well above the 2% target, justifying the hold.
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Feature deep-dive mock: Write anywhere ─────────── */
function WriteAnywhereMock() {
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden text-[12px]">
      <div className="flex items-center gap-x-1.5 border-b border-stroke-3 px-4 py-3 bg-background-13">
        <PenLine className="size-3.5 text-secondary/40" />
        <span className="text-[11px] text-secondary/60 font-medium">Write anywhere</span>
        <span className="ml-auto text-[10px] text-secondary/30">gmail.com</span>
      </div>
      <div className="p-4 space-y-3">
        {/* Email compose */}
        <div className="rounded-lg border border-stroke-3 p-3 space-y-2">
          <div className="flex items-center gap-x-2 border-b border-stroke-3 pb-2 text-[10px] text-secondary/40">
            <span className="font-medium text-secondary/60">To:</span>
            <span>sarah@company.com</span>
          </div>
          <div className="flex items-center gap-x-2 border-b border-stroke-3 pb-2 text-[10px] text-secondary/40">
            <span className="font-medium text-secondary/60">Subject:</span>
            <span className="text-secondary/70">Q3 model review — follow-up</span>
          </div>
          <div className="min-h-[60px] text-[11px] text-secondary/65 leading-relaxed">
            Hi Sarah, thanks for your time on the call earlier. As discussed, I&apos;ve updated the growth assumptions for Q3 to reflect the revised guidance...
          </div>
          {/* Nexus AI inline toolbar */}
          <div className="flex items-center gap-x-1.5 border-t border-stroke-3 pt-2">
            <Sparkles className="size-3 text-[#ac87eb]" />
            <span className="text-[10px] text-secondary/40">Nexus AI:</span>
            {['Improve tone', 'Make shorter', 'Add bullet points'].map((a) => (
              <button key={a} className="rounded-full bg-secondary/5 border border-stroke-3 px-2 py-0.5 text-[9px] text-secondary/55">{a}</button>
            ))}
          </div>
        </div>
        <p className="text-[11px] text-secondary/50">Works in Gmail, Outlook, LinkedIn, Notion, and any text field on the web.</p>
      </div>
    </div>
  );
}

/* ─── Extension features ─────────────────────────────── */
const features = [
  {
    icon: FileText,
    title: 'Summarise any page',
    body: 'Click the extension icon and get a bullet-point summary of any article, report, or documentation page — in seconds.',
  },
  {
    icon: Highlighter,
    title: 'Highlight and ask',
    body: 'Select any text on a webpage, right-click, and ask Nexus AI to explain, translate, fact-check, or expand on it.',
  },
  {
    icon: PenLine,
    title: 'Write anywhere on the web',
    body: "Nexus AI appears inside any text field on the web — emails, forms, LinkedIn, Notion. Improve, shorten, or rewrite with one click.",
  },
  {
    icon: Search,
    title: 'Research while you browse',
    body: 'Ask questions about the page you are on, cross-reference it with your notes, or compare it to another source — all from the sidebar.',
  },
  {
    icon: MessageSquare,
    title: 'Persistent sidebar chat',
    body: 'The Nexus AI sidebar stays open as you navigate between tabs. Your conversation continues even when the page changes.',
  },
  {
    icon: Zap,
    title: 'Quick actions with keyboard shortcut',
    body: 'Open Nexus AI in any tab with a keyboard shortcut. Ask a question and dismiss the panel without touching your mouse.',
  },
];

/* ─── FAQ items ─────────────────────────────────────── */
export const browserExtensionFaqItems = [
  {
    value: 'browsers',
    question: 'Which browsers are supported?',
    answer:
      'The Nexus AI browser extension is available for Google Chrome, Microsoft Edge, and Opera. All three are available from their respective browser extension stores. Firefox and Safari support is on the roadmap.',
  },
  {
    value: 'free',
    question: 'Is the browser extension free?',
    answer:
      'Yes, the browser extension is free to install. Core features — page summarisation, highlight and ask, and basic sidebar chat — are available on the free plan. Pro and Team plans unlock advanced features including unlimited chat, voice input, and writing assistance in any text field.',
  },
  {
    value: 'what-it-does',
    question: 'What can the extension do on any website?',
    answer:
      'The extension adds a Nexus AI sidebar to any webpage. From the sidebar you can summarise the page, highlight text and ask questions about it, write or improve content in any text field, research topics without switching tabs, and continue a conversation across page navigations.',
  },
  {
    value: 'all-sites',
    question: 'Does it work on every website?',
    answer:
      'The extension works on most public websites. Some websites with strict Content Security Policies (CSPs) may limit sidebar functionality. The extension fully works on Gmail, Outlook Web, LinkedIn, Notion, GitHub, Google Docs, and most news and documentation sites.',
  },
  {
    value: 'vs-desktop',
    question: 'How is the extension different from the desktop app?',
    answer:
      'The browser extension brings Nexus AI to any webpage — it is contextually aware of what you are reading and can interact with text fields across the web. The desktop app provides a standalone workspace with Artifacts, file uploads, Creative Studio, and multi-window support. Many users use both together.',
  },
  {
    value: 'data',
    question: 'Does the extension read all my browsing data?',
    answer:
      'No. The extension only reads the content of the active tab when you explicitly ask it to (for example, when you click "Summarise page" or highlight text). It does not monitor your browsing history, send background data, or access private browsing (Incognito/InPrivate) windows unless you grant that permission explicitly.',
  },
  {
    value: 'sync',
    question: 'Does the extension sync with my Nexus AI account?',
    answer:
      'Yes. Sign in with your Nexus AI account and your conversations, plan limits, and settings sync automatically. Conversations you start in the extension appear in your Nexus AI Chat history and vice versa.',
  },
  {
    value: 'enterprise',
    question: 'Can enterprise teams deploy the extension centrally?',
    answer:
      'Yes. Enterprise customers can deploy the Nexus AI browser extension through Chrome Browser Cloud Management, Microsoft Intune (for Edge), or Opera Enterprise. Central deployment supports pre-configured sign-in and policy enforcement. Contact us to discuss enterprise rollout.',
  },
];

/* ─── Main component ─────────────────────────────────── */
const BrowserExtension = () => {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-secondary overflow-hidden pt-[160px] pb-0">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-14 lg:gap-x-12">
            {/* Left */}
            <div className="col-span-12 space-y-8 lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary className="border-white/20 bg-white/10 text-white/80">
                  Browser Extension
                </BadgePrimary>
              </RevealAnimation>
              <div className="space-y-5">
                <TextReveal delay={0.2}>
                  <h1 className="text-white">
                    Nexus AI in{' '}
                    <span
                      className="bg-clip-text text-transparent"
                      style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                    >
                      every tab
                    </span>
                  </h1>
                </TextReveal>
                <TextReveal delay={0.3}>
                  <p className="text-white/60 max-w-[500px]">
                    Summarise any page, highlight text and ask questions, write in any text field,
                    and research while you browse — without switching windows. Available for Chrome,
                    Edge, and Opera.
                  </p>
                </TextReveal>
              </div>
              {/* Browser install buttons */}
              <RevealAnimation delay={0.4} asChild={false} className="flex flex-col gap-y-3 sm:flex-row sm:flex-wrap sm:gap-3">
                {browsers.map((b) => (
                  <Link key={b.id} href={b.storeUrl} target="_blank" rel="noopener noreferrer">
                    <button className="flex w-full items-center gap-x-3 rounded-xl border border-white/15 bg-white/8 px-4 py-3 text-left transition-colors hover:bg-white/12 sm:w-auto">
                      <Image src={b.icon} alt={b.name} width={22} height={22} unoptimized />
                      <span className="flex flex-col">
                        <span className="text-[11px] text-white/40">Add to</span>
                        <span className="text-[13px] font-semibold text-white">{b.name}</span>
                      </span>
                      <ExternalLink className="ml-auto size-3.5 text-white/25 sm:hidden lg:block" />
                    </button>
                  </Link>
                ))}
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <p className="text-[13px] text-white/30">
                  Free to install · Chrome, Edge, Opera · Sign in with your Nexus AI account
                </p>
              </RevealAnimation>
            </div>
            {/* Right — extension mock */}
            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.3} direction="right" offset={60}>
                <HeroExtensionMock />
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-white py-10 border-b border-stroke-3">
        <div className="main-container">
          <RevealAnimation
            delay={0.1}
            asChild={false}
            className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-center"
          >
            {[
              { stat: '3', label: 'Browsers supported' },
              { stat: 'Free', label: 'To install' },
              { stat: 'Any page', label: 'Works everywhere' },
              { stat: '<1 min', label: 'To install' },
            ].map(({ stat, label }) => (
              <div key={label} className="space-y-1">
                <p className="text-2xl font-bold text-secondary">{stat}</p>
                <p className="text-tagline-3 text-secondary/50">{label}</p>
              </div>
            ))}
          </RevealAnimation>
        </div>
      </section>

      {/* ── Browser install cards ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container space-y-10">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Install</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Choose your browser</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-secondary/60 mx-auto max-w-[480px]">
                All three extensions are identical in features. Pick your browser and you will be
                up and running in under a minute.
              </p>
            </TextReveal>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {browsers.map((b, i) => (
              <RevealAnimation key={b.id} delay={0.1 + i * 0.08} direction="up" offset={35}>
                <div className={`rounded-2xl border p-6 space-y-5 h-full ${b.bgColor} ${b.borderColor}`}>
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <Image src={b.icon} alt={b.name} width={40} height={40} unoptimized />
                    <span className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold ${b.badgeColor}`}>
                      {b.badge}
                    </span>
                  </div>
                  {/* Info */}
                  <div className="space-y-1">
                    <h3 className="text-[18px] font-semibold text-secondary">{b.name}</h3>
                    <p className="text-[12px] text-secondary/50">{b.store}</p>
                    <p className="text-[12px] text-secondary/40">Requires version {b.version}</p>
                  </div>
                  {/* Checklist */}
                  <ul className="space-y-2">
                    {['Free to install', 'Syncs with Nexus AI account', 'Auto-updates'].map((pt) => (
                      <li key={pt} className="flex items-center gap-x-2 text-[12px] text-secondary/70">
                        <CheckCircle className="size-3.5 shrink-0" style={{ color: b.color }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  {/* CTA */}
                  <Link href={b.storeUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <button
                      className="flex w-full items-center justify-center gap-x-2 rounded-xl py-3 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                      style={{ background: b.color }}
                    >
                      <ExternalLink className="size-3.5" />
                      Add to {b.name}
                    </button>
                  </Link>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to install ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container space-y-10">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>How to install</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Up and running in three steps</h2>
            </TextReveal>
          </div>
          <RevealAnimation delay={0.3} asChild={false} className="mx-auto max-w-[800px] space-y-8">
            {browsers.map((b) => (
              <div key={b.id} className="rounded-2xl border border-stroke-3 bg-white p-6 space-y-4">
                <div className="flex items-center gap-x-3">
                  <Image src={b.icon} alt={b.name} width={24} height={24} unoptimized />
                  <p className="text-[14px] font-semibold text-secondary">{b.name}</p>
                </div>
                <InstallSteps browserId={b.id} />
              </div>
            ))}
          </RevealAnimation>
        </div>
      </section>

      {/* ── Feature: Summarise ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-16">
            <div className="col-span-12 space-y-6 lg:col-span-5">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Page Summariser</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Understand any page in seconds</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-secondary/60 max-w-[440px]">
                  Click the extension icon and Nexus AI reads the full page — article, report, docs,
                  research paper — and returns a structured summary with the main argument, key
                  points, and any notable caveats.
                </p>
              </TextReveal>
              <RevealAnimation delay={0.4} asChild={false} className="space-y-3">
                {[
                  'Works on articles, papers, docs, and reports',
                  'Bullet-point summary with key takeaways',
                  'One-click copy or continue in full Chat',
                  'Multilingual — summarise pages in any language',
                ].map((pt) => (
                  <div key={pt} className="flex items-start gap-x-2.5">
                    <CheckCircle className="size-4 text-secondary shrink-0 mt-0.5" />
                    <span className="text-tagline-2 text-secondary/80">{pt}</span>
                  </div>
                ))}
              </RevealAnimation>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <RevealAnimation delay={0.3} direction="right" offset={50}>
                <SummariseMock />
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature: Highlight ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-16">
            <div className="col-span-12 lg:col-span-7">
              <RevealAnimation delay={0.2} direction="left" offset={50}>
                <HighlightMock />
              </RevealAnimation>
            </div>
            <div className="col-span-12 space-y-6 lg:col-span-5">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Highlight and Ask</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Ask about exactly what you are reading</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-secondary/60 max-w-[440px]">
                  Select any text on any webpage. Right-click and choose Ask Nexus AI — or use the
                  keyboard shortcut. Nexus AI answers with full context of the selection and the
                  surrounding page.
                </p>
              </TextReveal>
              <RevealAnimation delay={0.4} asChild={false} className="space-y-3">
                {[
                  'Explain a term, concept, or claim',
                  'Translate a highlighted sentence',
                  'Fact-check a specific statement',
                  'Expand on a topic with more detail',
                ].map((pt) => (
                  <div key={pt} className="flex items-start gap-x-2.5">
                    <CheckCircle className="size-4 text-secondary shrink-0 mt-0.5" />
                    <span className="text-tagline-2 text-secondary/80">{pt}</span>
                  </div>
                ))}
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature: Write anywhere ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-16">
            <div className="col-span-12 space-y-6 lg:col-span-5">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Write Anywhere</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>AI writing inside every text field</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-secondary/60 max-w-[440px]">
                  Nexus AI detects text fields across the web and adds an inline toolbar. Improve
                  tone, shorten, expand, or rewrite — directly inside Gmail, LinkedIn, Notion,
                  GitHub, or any web form.
                </p>
              </TextReveal>
              <RevealAnimation delay={0.4} asChild={false} className="space-y-3">
                {[
                  'Gmail, Outlook Web, LinkedIn, Notion, GitHub',
                  'Improve tone, shorten, expand, or translate',
                  'Writes in the style of your previous messages',
                  'Works in any web-based text input',
                ].map((pt) => (
                  <div key={pt} className="flex items-start gap-x-2.5">
                    <CheckCircle className="size-4 text-secondary shrink-0 mt-0.5" />
                    <span className="text-tagline-2 text-secondary/80">{pt}</span>
                  </div>
                ))}
              </RevealAnimation>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <RevealAnimation delay={0.3} direction="right" offset={50}>
                <WriteAnywhereMock />
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ── All features grid ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container space-y-14">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>All Features</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Everything you get with the extension</h2>
            </TextReveal>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <RevealAnimation key={f.title} delay={0.08 + i * 0.07} direction="up" offset={35}>
                <div className="rounded-2xl border border-stroke-3 bg-white p-6 space-y-4 h-full">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-secondary/6">
                    <f.icon className="size-5 text-secondary" />
                  </div>
                  <h3 className="text-[17px] font-semibold text-secondary leading-snug">{f.title}</h3>
                  <p className="text-tagline-3 text-secondary/60 leading-relaxed">{f.body}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ── Security callout ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <RevealAnimation
            delay={0.1}
            asChild={false}
            className="rounded-3xl border border-stroke-3 bg-white px-8 py-10 md:px-14"
          >
            <div className="grid grid-cols-12 items-center gap-y-8 lg:gap-x-16">
              <div className="col-span-12 lg:col-span-2">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-secondary/6 mx-auto lg:mx-0">
                  <ShieldCheck className="size-7 text-secondary" />
                </div>
              </div>
              <div className="col-span-12 space-y-3 text-center lg:col-span-7 lg:text-left">
                <h3 className="text-[20px] font-semibold text-secondary">
                  Your browsing data stays private
                </h3>
                <p className="text-secondary/60 max-w-[520px] mx-auto lg:mx-0">
                  Nexus AI only reads page content when you explicitly ask it to. It does not monitor
                  browsing history or access private windows. All data is encrypted in transit. Nothing
                  is used to train AI models.
                </p>
              </div>
              <div className="col-span-12 flex justify-center lg:col-span-3 lg:justify-end">
                <Link href="/legal/privacy-policy">
                  <ButtonWhite textClassName="text-nowrap">Read our Privacy Policy</ButtonWhite>
                </Link>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* ── Bottom install CTA ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <RevealAnimation
            delay={0.1}
            asChild={false}
            className="bg-secondary rounded-3xl px-8 py-12 md:px-14 md:py-16 text-center space-y-8"
          >
            <div className="space-y-4">
              <TextReveal delay={0.2}>
                <h2 className="text-white">
                  Install in{' '}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                  >
                    under a minute
                  </span>
                </h2>
              </TextReveal>
              <p className="text-white/60 mx-auto max-w-[460px]">
                Free to install. Available for Chrome, Edge, and Opera. Sign in with your Nexus AI
                account and start using it immediately.
              </p>
            </div>
            <RevealAnimation delay={0.3} asChild={false} className="flex flex-wrap items-center justify-center gap-3">
              {browsers.map((b) => (
                <Link key={b.id} href={b.storeUrl} target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center gap-x-2.5 rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-white/15">
                    <Image src={b.icon} alt={b.name} width={20} height={20} unoptimized />
                    Add to {b.name}
                    <ExternalLink className="size-3.5 text-white/40" />
                  </button>
                </Link>
              ))}
            </RevealAnimation>
            <p className="text-[12px] text-white/30">
              Also available on{' '}
              <Link href="/downloads" className="text-white/50 underline underline-offset-2">
                Desktop and Mobile
              </Link>
            </p>
          </RevealAnimation>
        </div>
      </section>
    </>
  );
};

export default BrowserExtension;
