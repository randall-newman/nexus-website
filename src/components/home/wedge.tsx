import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { cn } from '@/src/utils/cn';
import { BarChart3, Check, Code2, Download, FileSearch, FileText, FileType2, PenLine, Sparkles, ShieldCheck, Users2 } from 'lucide-react';
import Link from 'next/link';

const weeklyTasks = [40, 65, 50, 80, 60, 90, 70];
const weeklyDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

const PlagiarismDemo = () => (
  <div className="space-y-4">
    {/* Score ring */}
    <div className="flex items-center gap-x-5">
      <div className="relative shrink-0">
        <svg width="80" height="80" viewBox="0 0 80 80">
          {/* Track */}
          <circle cx="40" cy="40" r="32" fill="none" stroke="var(--color-stroke-3)" strokeWidth="8" />
          {/* Score arc: 98% of circumference ≈ 197.2 */}
          <circle cx="40" cy="40" r="32" fill="none" stroke="var(--color-primary-500)" strokeWidth="8"
            strokeDasharray="197.2 201.1" strokeDashoffset="50.3" strokeLinecap="round"
            transform="rotate(-90 40 40)" />
          <circle cx="40" cy="40" r="24" fill="white" />
          <text x="40" y="44" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--color-secondary)">98%</text>
        </svg>
      </div>
      <div className="space-y-2 flex-1">
        <div className="flex items-center gap-x-2">
          <ShieldCheck className="size-4 text-green-500" />
          <p className="text-tagline-1 text-secondary font-semibold">Originality score</p>
        </div>
        <div className="space-y-1.5">
          <div className="flex justify-between text-tagline-3 text-secondary/60">
            <span>Original content</span><span className="font-medium text-secondary">98%</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-background-13">
            <div className="h-full rounded-full bg-primary-500" style={{ width: '98%' }} />
          </div>
          <div className="flex justify-between text-tagline-3 text-secondary/60">
            <span>Matched sources</span><span className="font-medium text-secondary">2%</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-background-13">
            <div className="h-full rounded-full bg-amber-400" style={{ width: '2%' }} />
          </div>
        </div>
      </div>
    </div>

    {/* Matches — both cited */}
    <div className="border-stroke-3 rounded-xl border bg-background-13 p-3 space-y-2">
      <p className="text-tagline-3 text-secondary/50 font-medium">2 matches detected</p>
      {[
        { src: 'Smith et al., 2023', pct: '1.3%', cited: true },
        { src: 'Johnson, 2022 – J. Research', pct: '0.7%', cited: true },
      ].map(m => (
        <div key={m.src} className="flex items-center gap-x-2">
          <Check className="size-3 text-green-500 shrink-0" />
          <span className="text-tagline-3 text-secondary/70 flex-1">{m.src}</span>
          <span className="text-[10px] bg-green-50 text-green-600 rounded-full px-2 py-0.5">cited · {m.pct}</span>
        </div>
      ))}
    </div>
  </div>
);

const CollaborationDemo = () => (
  <div className="border-stroke-3 space-y-3 rounded-xl border bg-white p-4">
    {[100, 85, 70].map((width, index) => (
      <div key={index} className="bg-background-13 h-2 rounded-full" style={{ width: `${width}%` }} />
    ))}
    <div className="flex flex-wrap gap-2 pt-1">
      <span className="text-tagline-3 rounded-full bg-blue-500/15 px-2.5 py-1 text-blue-600">
        Sam is editing
      </span>
      <span className="text-tagline-3 rounded-full bg-green-500/15 px-2.5 py-1 text-green-600">
        Priya commented
      </span>
    </div>
  </div>
);

const reportBars = [
  { day: 'M', value: 55, color: 'var(--color-primary-500)' },
  { day: 'T', value: 80, color: 'var(--color-blue-bright)' },
  { day: 'W', value: 45, color: 'var(--color-primary-500)' },
  { day: 'T', value: 92, color: 'var(--color-blue-bright)' },
  { day: 'F', value: 68, color: 'var(--color-accent-magenta)' },
  { day: 'S', value: 38, color: 'var(--color-primary-500)' },
  { day: 'S', value: 25, color: 'var(--color-blue-bright)' },
];

const pieSegments = [
  { label: 'Writing', pct: 45, color: 'var(--color-primary-500)' },
  { label: 'Research', pct: 30, color: 'var(--color-blue-bright)' },
  { label: 'Editing', pct: 25, color: 'var(--color-accent-magenta)' },
];

const ReportDemo = () => (
  <div className="border-stroke-3 space-y-5 rounded-xl border bg-white p-5">
    {/* Header */}
    <div className="flex items-start justify-between">
      <div>
        <p className="text-tagline-1 text-secondary font-semibold">Weekly Performance</p>
        <p className="text-tagline-3 text-secondary/40 mt-0.5">Oct 14 – Oct 20, 2025</p>
      </div>
      <span className="bg-green-50 text-green-600 rounded-full px-2.5 py-1 text-[11px] font-medium">
        +12% vs last week
      </span>
    </div>

    {/* Bar chart */}
    <div>
      <p className="text-tagline-3 text-secondary/50 mb-2 font-medium">Tasks completed</p>
      <div className="flex items-end gap-x-1.5 rounded-lg bg-[#f9fafb] p-3" style={{ height: '88px' }}>
        {reportBars.map((bar, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-y-1">
            <div
              className="w-full rounded-t-md transition-all duration-700"
              style={{ height: `${bar.value * 0.64}px`, background: bar.color, opacity: 0.85 }}
            />
            <span className="text-[10px] text-secondary/40 font-medium">{bar.day}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Stats row */}
    <div className="grid grid-cols-3 gap-2">
      {[
        { label: 'Tasks done', value: '47' },
        { label: 'Avg. score', value: '8.4' },
        { label: 'Streak', value: '12d' },
      ].map(s => (
        <div key={s.label} className="rounded-lg bg-[#f4f8fc] p-2.5 text-center">
          <p className="text-tagline-1 text-secondary font-bold">{s.value}</p>
          <p className="text-[10px] text-secondary/50">{s.label}</p>
        </div>
      ))}
    </div>

    {/* Pie chart + legend */}
    <div className="flex items-center gap-x-5">
      <div className="relative shrink-0">
        <svg width="56" height="56" viewBox="0 0 56 56">
          {/* Simple donut via stroke-dasharray */}
          <circle cx="28" cy="28" r="20" fill="none" stroke="var(--color-primary-500)" strokeWidth="8"
            strokeDasharray="56.5 125.6" strokeDashoffset="0" transform="rotate(-90 28 28)" />
          <circle cx="28" cy="28" r="20" fill="none" stroke="var(--color-blue-bright)" strokeWidth="8"
            strokeDasharray="37.7 125.6" strokeDashoffset="-56.5" transform="rotate(-90 28 28)" />
          <circle cx="28" cy="28" r="20" fill="none" stroke="var(--color-accent-magenta)" strokeWidth="8"
            strokeDasharray="31.4 125.6" strokeDashoffset="-94.2" transform="rotate(-90 28 28)" />
          <circle cx="28" cy="28" r="14" fill="white" />
        </svg>
      </div>
      <div className="space-y-1.5 text-left">
        {pieSegments.map(seg => (
          <p key={seg.label} className="text-tagline-3 text-secondary/70 flex items-center gap-x-1.5">
            <span className="size-2 shrink-0 rounded-full" style={{ background: seg.color }} />
            {seg.label}
            <span className="text-secondary/40 ml-auto">{seg.pct}%</span>
          </p>
        ))}
      </div>
    </div>
  </div>
);

const exportFormats = [
  { label: 'PDF',  Icon: FileText,  color: 'text-red-500',   bg: 'bg-red-50'   },
  { label: 'DOCX', Icon: FileType2, color: 'text-blue-600',  bg: 'bg-blue-50'  },
  { label: 'HTML', Icon: Code2,     color: 'text-orange-500',bg: 'bg-orange-50' },
];

const ExportDemo = () => (
  <div className="grid grid-cols-3 gap-2.5">
    {exportFormats.map(({ label, Icon, color, bg }) => (
      <div key={label}
        className="border-stroke-3 flex flex-col items-center gap-y-2 rounded-2xl border bg-white p-3 text-center">
        <div className={`size-10 rounded-xl ${bg} flex items-center justify-center`}>
          <Icon className={`size-5 ${color}`} />
        </div>
        <span className="text-tagline-3 text-secondary/70 font-medium">{label}</span>
        <span className="flex items-center gap-x-1 text-[10px] text-green-600">
          <Check className="size-2.5" /> Ready
        </span>
      </div>
    ))}
  </div>
);

const WritingDemo = () => (
  <div className="border-stroke-3 space-y-2 rounded-xl border bg-white p-4">
    <p className="text-tagline-2 text-secondary/80">
      The results show a{' '}
      <span className="border-b-2 border-dotted border-amber-500">significant</span> improvement
      across every region.
    </p>
    <div className="bg-background-13 flex items-start gap-x-1.5 rounded-lg p-2.5 text-tagline-3 text-secondary/60">
      <Sparkles className="mt-0.5 size-3.5 shrink-0" />
      Suggested: try &ldquo;measurable&rdquo; for a more precise claim.
    </div>
  </div>
);

const capabilities = [
  {
    title: 'Automatic Plagiarism Checker',
    headline: 'Catch issues before you submit',
    description:
      'Scan millions of online sources in seconds and catch duplicate or unoriginal content before it becomes a problem.',
    href: '/features/essay-writer',
    Icon: FileSearch,
    Demo: PlagiarismDemo,
  },
  {
    title: 'Team Collaboration',
    headline: 'Work on the same document, together',
    description:
      'Add teammates to your plan and share files, chats and documents in real time, instead of emailing versions back and forth.',
    href: '/pricing/team',
    Icon: Users2,
    Demo: CollaborationDemo,
  },
  {
    title: 'Reports and Documents Creation',
    headline: 'Turn raw numbers into a finished report',
    description:
      'Ask for a weekly report and get a formatted document with charts built in, ready to present, not a wall of text.',
    href: '/features/artifacts',
    Icon: BarChart3,
    Demo: ReportDemo,
  },
  {
    title: 'Seamless Export Options',
    headline: 'Export to the format you actually need',
    description:
      'Export your work to PDF, Word (.docx) or HTML with zero loss in formatting or structure.',
    href: '/features/artifacts',
    Icon: Download,
    Demo: ExportDemo,
  },
  {
    title: 'Smarter Writing Companion',
    headline: 'Write, edit and reference without leaving the page',
    description:
      'An intelligent writing assistant that helps you write, edit and reference with ease, right where you’re already working.',
    href: '/features/essay-writer',
    Icon: PenLine,
    Demo: WritingDemo,
  },
];

const Wedge = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-10 lg:space-y-18">
          <div className="space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>How it works</BadgePrimary>
            </RevealAnimation>
            <div className="space-y-3">
              <TextReveal delay={0.2}>
                <h2>What Nexus AI actually does for you</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-background-14/60 mx-auto max-w-[550px]">
                  Most AI tools stop at a chat reply. Here&rsquo;s what carrying the work all the
                  way through looks like.
                </p>
              </TextReveal>
            </div>
          </div>

          <div className="space-y-5 lg:space-y-8">
            {capabilities.map((item, index) => (
              <RevealAnimation
                key={item.title}
                delay={0.1 * (index + 1)}
                asChild={false}
                className="border-stroke-3 rounded-2xl border bg-white p-6 md:p-10"
              >
                <div className="flex flex-col gap-y-6 lg:flex-row lg:items-center lg:gap-x-14">
                  <div
                    className={cn(
                      'space-y-3 lg:w-1/2',
                      index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
                    )}
                  >
                    <span className="bg-secondary flex size-10 items-center justify-center rounded-xl">
                      <item.Icon className="size-4.5 text-white" />
                    </span>
                    <p className="text-tagline-3 text-secondary/40 font-medium tracking-wide uppercase">
                      {item.title}
                    </p>
                    <h3 className="text-heading-6 text-secondary">{item.headline}</h3>
                    <p className="text-tagline-2 text-secondary/60">{item.description}</p>
                    <Link
                      href={item.href}
                      className="text-secondary text-tagline-2 inline-flex items-center gap-x-1 underline"
                    >
                      Learn more
                    </Link>
                  </div>
                  <div
                    className={cn('lg:w-1/2', index % 2 === 1 ? 'lg:order-1' : 'lg:order-2')}
                  >
                    <item.Demo />
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wedge;
