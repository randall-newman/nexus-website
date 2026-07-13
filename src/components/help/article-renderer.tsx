import type { Block } from '@/src/data/help/types';
import { AlertCircle, Info, Lightbulb } from 'lucide-react';

function Callout({ variant, text }: { variant: 'tip' | 'note' | 'warning'; text: string }) {
  const styles = {
    tip: {
      bg: 'bg-emerald-50 border-emerald-200',
      icon: <Lightbulb className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />,
      label: 'Tip',
      labelColor: 'text-emerald-700',
    },
    note: {
      bg: 'bg-blue-50 border-blue-200',
      icon: <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />,
      label: 'Note',
      labelColor: 'text-blue-700',
    },
    warning: {
      bg: 'bg-amber-50 border-amber-200',
      icon: <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />,
      label: 'Warning',
      labelColor: 'text-amber-700',
    },
  };

  const s = styles[variant];

  return (
    <div className={`flex gap-3 rounded-xl border p-4 ${s.bg}`}>
      {s.icon}
      <div>
        <span className={`text-sm font-semibold ${s.labelColor}`}>{s.label}: </span>
        <span className="text-sm text-gray-700">{text}</span>
      </div>
    </div>
  );
}

export default function ArticleRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5 text-gray-700">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'p':
            return (
              <p key={i} className="text-base leading-relaxed">
                {block.text}
              </p>
            );
          case 'h2':
            return (
              <h2
                key={i}
                id={block.text.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                className="text-xl font-semibold text-gray-900 pt-4 first:pt-0"
              >
                {block.text}
              </h2>
            );
          case 'h3':
            return (
              <h3 key={i} className="text-base font-semibold text-gray-900">
                {block.text}
              </h3>
            );
          case 'ul':
            return (
              <ul key={i} className="list-disc list-outside ml-5 space-y-1.5">
                {block.items.map((item, j) => (
                  <li key={j} className="text-base leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={i} className="list-decimal list-outside ml-5 space-y-1.5">
                {block.items.map((item, j) => (
                  <li key={j} className="text-base leading-relaxed">
                    {item}
                  </li>
                ))}
              </ol>
            );
          case 'callout':
            return <Callout key={i} variant={block.variant} text={block.text} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
