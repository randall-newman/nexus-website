import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { Check } from 'lucide-react';

/* ─── Types ─────────────────────────────────────────── */

type CellValue = boolean | string;

type TableRow = {
  label: string;
  free: CellValue;
  premium: CellValue;
  ultimate: CellValue;
};

type TableSection = {
  title: string;
  rows: TableRow[];
};

/* ─── Data ───────────────────────────────────────────── */

const tableData: TableSection[] = [
  {
    title: 'AI & Chat',
    rows: [
      { label: 'Daily chat messages',       free: 'Limited',          premium: 'Unlimited',         ultimate: 'Unlimited' },
      { label: 'AI model quality',          free: 'Standard',         premium: 'Advanced',           ultimate: 'Frontier' },
      { label: 'Research Mode',             free: false,              premium: '100 queries/month',  ultimate: 'Unlimited' },
      { label: 'File Chat',                 free: 'Limited',          premium: true,                 ultimate: true },
      { label: 'File uploads',              free: '2 files (5 MB)',   premium: 'Unlimited (25 MB)',  ultimate: 'Unlimited (100 MB)' },
      { label: 'Folders',                   free: '3',                premium: 'Unlimited',          ultimate: 'Unlimited' },
      { label: 'Expanded memory',           free: false,              premium: true,                 ultimate: true },
      { label: 'Voice mode',                free: false,              premium: true,                 ultimate: true },
    ],
  },
  {
    title: 'Writing & Research',
    rows: [
      { label: 'Nexus AI Academic',         free: false,              premium: 'Full access',        ultimate: 'Unlimited' },
      { label: 'AI Essay Writer',           free: false,              premium: true,                 ultimate: true },
      { label: 'Citation generator',        free: false,              premium: true,                 ultimate: true },
      { label: 'Plagiarism checker',        free: false,              premium: true,                 ultimate: true },
      { label: 'Literature review',         free: false,              premium: true,                 ultimate: true },
    ],
  },
  {
    title: 'Creative Studio',
    rows: [
      { label: 'Creative Studio credits',   free: false,              premium: '100/month',          ultimate: '750/month' },
      { label: 'AI Image Generator',        free: false,              premium: true,                 ultimate: true },
      { label: 'Advanced image generation', free: false,              premium: false,                ultimate: true },
      { label: 'AI Audio Generator',        free: false,              premium: true,                 ultimate: true },
      { label: 'AI Video Generator',        free: false,              premium: false,                ultimate: '50 videos/month' },
    ],
  },
  {
    title: 'Code & Canvas',
    rows: [
      { label: 'Code generation & review',  free: false,              premium: true,                 ultimate: true },
      { label: 'CLI integration',           free: false,              premium: true,                 ultimate: true },
      { label: 'Canvas / Artifacts',        free: 'Preview',          premium: '200 Artifacts',      ultimate: 'Unlimited' },
      { label: 'Skills',                    free: false,              premium: '50 Skills',          ultimate: 'Unlimited' },
    ],
  },
  {
    title: 'Platform',
    rows: [
      { label: 'Watermark-free exports',    free: false,              premium: true,                 ultimate: true },
      { label: 'AI Presentation Maker',     free: false,              premium: true,                 ultimate: true },
      { label: 'Meeting Notes',             free: 'Add-on',           premium: 'Add-on',             ultimate: 'Add-on' },
      { label: 'AI Chatbot',                free: 'Add-on',           premium: 'Add-on',             ultimate: 'Add-on' },
    ],
  },
  {
    title: 'Support',
    rows: [
      { label: 'Support type',              free: 'Community',        premium: 'Standard',           ultimate: 'Priority' },
      { label: 'Early feature access',      free: false,              premium: false,                ultimate: true },
    ],
  },
];

/* ─── Cell renderer ──────────────────────────────────── */

function Cell({ value, dark }: { value: CellValue; dark?: boolean }) {
  const baseText = dark ? 'text-white/80' : 'text-secondary/70';

  if (value === true) {
    return (
      <div className="flex justify-center">
        <div
          className="flex size-5 items-center justify-center rounded-full"
          style={{ background: 'var(--color-gradient-logo)' }}
        >
          <Check className="size-2.5 text-white stroke-[3]" />
        </div>
      </div>
    );
  }

  if (value === false) {
    return (
      <span className={`block text-center text-base font-medium select-none ${dark ? 'text-white/20' : 'text-secondary/20'}`}>
        —
      </span>
    );
  }

  return (
    <span className={`text-[13px] ${baseText} text-center block leading-snug`}>
      {value}
    </span>
  );
}

/* ─── Main component ─────────────────────────────────── */

const PricingFeatureTable = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-10 lg:space-y-12">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Everything included</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2 className="text-secondary">Compare plans in full</h2>
            </TextReveal>
          </div>

          <RevealAnimation delay={0.3} asChild={false}>
            <div className="overflow-x-auto rounded-2xl border border-stroke-3 bg-white">
              <table className="w-full min-w-[600px] border-collapse">
                {/* Column headers */}
                <thead>
                  <tr>
                    <th className="w-[40%] border-b border-stroke-3 px-6 py-5 text-left">
                      <span className="text-[13px] font-semibold text-secondary/40 uppercase tracking-wider">
                        Feature
                      </span>
                    </th>
                    {[
                      { name: 'Free',     dark: false },
                      { name: 'Premium',  dark: true  },
                      { name: 'Ultimate', dark: false },
                    ].map(col => (
                      <th
                        key={col.name}
                        className={`w-[20%] border-b border-stroke-3 px-4 py-5 text-center ${
                          col.dark ? 'bg-secondary rounded-t-lg' : ''
                        }`}
                      >
                        <span className={`text-[14px] font-semibold ${col.dark ? 'text-white' : 'text-secondary'}`}>
                          {col.name}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {tableData.map((section, si) => (
                    <>
                      {/* Section header */}
                      <tr key={`section-${section.title}`}>
                        <td
                          colSpan={4}
                          className={`px-6 py-3 ${si > 0 ? 'border-t border-stroke-3' : ''} bg-background-13`}
                        >
                          <span className="text-[12px] font-semibold uppercase tracking-wider text-secondary/50">
                            {section.title}
                          </span>
                        </td>
                      </tr>

                      {/* Feature rows */}
                      {section.rows.map((row, ri) => (
                        <tr
                          key={`${section.title}-${row.label}`}
                          className={ri < section.rows.length - 1 ? 'border-b border-stroke-3/50' : ''}
                        >
                          <td className="px-6 py-4">
                            <span className="text-[13px] text-secondary/70 leading-snug">{row.label}</span>
                          </td>
                          <td className="px-4 py-4 text-center">
                            <Cell value={row.free} />
                          </td>
                          <td className="bg-secondary/5 px-4 py-4 text-center">
                            <Cell value={row.premium} />
                          </td>
                          <td className="px-4 py-4 text-center">
                            <Cell value={row.ultimate} />
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </RevealAnimation>

          {/* Note below table */}
          <RevealAnimation
            delay={0.4}
            asChild={false}
            className="text-center"
          >
            <p className="text-[13px] text-secondary/40">
              All plans include unlimited access to Nexus AI on web, desktop and mobile.
              Meeting Notes and Chatbot are available as add-ons on all plans.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default PricingFeatureTable;
