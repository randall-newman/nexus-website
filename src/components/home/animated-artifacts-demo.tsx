'use client';

import { Check, FileText, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

/* ─── Document content ─────────────────────────────── */
const ORIGINAL_PARA = 'We plan to go ahead with the product launch and hope it performs well in the market over the coming months.';
const REVISED_PARA  = 'We launch on October 15th, targeting 2,400 enterprise accounts in the first 30 days, with a dedicated success team for every new customer.';

const T_HIGHLIGHT = 800;
const T_THINK     = 900;
const T_CHAR      = 26;
const T_ACCEPT    = 700;
const T_EXPORT    = 500;
const T_READ      = 2200;
const T_RESET     = 800;

type Phase =
  | 'idle' | 'highlight' | 'suggesting' | 'typing-revision'
  | 'accepted' | 'exporting' | 'done' | 'resetting';

const exportFormats = [
  { label: 'PDF',  color: 'bg-red-50  border-red-200/60  text-red-500'  },
  { label: 'DOCX', color: 'bg-blue-50 border-blue-200/60 text-blue-600' },
  { label: 'PPTX', color: 'bg-orange-50 border-orange-200/60 text-orange-500' },
];

export default function AnimatedArtifactsDemo() {
  const [phase,    setPhase]    = useState<Phase>('idle');
  const [typed,    setTyped]    = useState('');
  const [exports,  setExports]  = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const at  = (ms: number, fn: () => void) => { timer.current = setTimeout(fn, ms); };
    const clear = () => { if (timer.current) clearTimeout(timer.current); };

    const typeText = (text: string, onDone: () => void) => {
      let i = 0;
      const tick = () => {
        i++; setTyped(text.slice(0, i));
        if (i < text.length) timer.current = setTimeout(tick, T_CHAR);
        else onDone();
      };
      tick();
    };

    const revealExports = (n: number) => {
      setExports(n);
      if (n < exportFormats.length) at(T_EXPORT, () => revealExports(n + 1));
      else { setPhase('done'); at(T_READ, () => { setPhase('resetting'); at(T_RESET, () => run()); }); }
    };

    const run = () => {
      setPhase('idle'); setTyped(''); setExports(0);
      at(600, () => {
        setPhase('highlight');
        at(T_HIGHLIGHT, () => {
          setPhase('suggesting');
          at(T_THINK, () => {
            setPhase('typing-revision');
            typeText(REVISED_PARA, () => {
              setPhase('accepted');
              at(T_ACCEPT, () => {
                setPhase('exporting');
                revealExports(0);
              });
            });
          });
        });
      });
    };

    run();
    return clear;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isHighlighting = ['highlight', 'suggesting'].includes(phase);
  const isTyping       = phase === 'typing-revision';
  const isAccepted     = ['accepted', 'exporting', 'done'].includes(phase);
  const showRevised    = isTyping || isAccepted;
  const showSuggestion = ['suggesting', 'typing-revision', 'accepted', 'exporting', 'done'].includes(phase);

  return (
    <div className="flex h-full flex-col gap-y-2 text-[11px]">
      {/* Doc chrome */}
      <div className="flex shrink-0 items-center gap-x-2 rounded-xl border border-stroke-3 bg-background-13 px-3 py-2">
        <FileText className="size-3.5 shrink-0 text-[#7458e8]" />
        <span className="font-medium text-secondary/70">Product Launch Brief v2</span>
        <span className="ml-auto text-[9px] text-secondary/30">Oct 2025 · Marketing</span>
      </div>

      <div className="flex min-h-0 flex-1 gap-x-2">
        {/* Document pane */}
        <div className="flex flex-1 flex-col gap-y-2 overflow-hidden rounded-xl border border-stroke-3 bg-white p-3">
          {/* Static heading + metadata */}
          <div className="space-y-1">
            <div className="h-3 w-[70%] rounded-full bg-secondary/80" />
            <div className="h-2 w-[45%] rounded-full bg-secondary/20" />
          </div>
          {/* Static body lines */}
          {[92, 85, 78, 88].map((w, i) => (
            <div key={i} className="h-2 rounded-full bg-secondary/10" style={{ width: `${w}%` }} />
          ))}

          {/* The editable paragraph */}
          <div className={`rounded-lg p-2 transition-all duration-500 ${isHighlighting ? 'bg-amber-50 border border-amber-200' : 'bg-transparent'}`}>
            {/* Original — shown struck through while typing or after accept */}
            {!isAccepted && (
              <p className={`leading-relaxed text-secondary/70 transition-all duration-300 ${isTyping ? 'line-through text-secondary/30' : ''}`}>
                {ORIGINAL_PARA}
              </p>
            )}
            {/* Revised — streams in */}
            {showRevised && (
              <p className={`leading-relaxed transition-colors duration-300 ${isAccepted ? 'text-green-700' : 'text-green-600'}`}>
                {isTyping ? typed : REVISED_PARA}
                {isTyping && (
                  <span className="inline-block w-[1.5px] h-[0.85em] bg-green-500 align-middle ml-px"
                    style={{ animation: 'blink 0.9s step-end infinite' }} />
                )}
              </p>
            )}
          </div>

          {/* More static lines below */}
          {[80, 65].map((w, i) => (
            <div key={i} className="h-2 rounded-full bg-secondary/10" style={{ width: `${w}%` }} />
          ))}
        </div>

        {/* AI panel */}
        <div className={`flex w-[120px] shrink-0 flex-col gap-y-2 transition-all duration-500 ${showSuggestion ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
          <div className="flex-1 rounded-xl border border-stroke-3 bg-[#f4f2fe] p-2.5 space-y-2">
            <div className="flex items-center gap-x-1 text-[9px] font-semibold text-[#7458e8]">
              <Sparkles className="size-3" />
              AI Edit
            </div>
            <p className="text-[9px] text-secondary/60 leading-relaxed">
              {phase === 'suggesting'
                ? 'This reads as vague. Rewriting with specifics...'
                : isTyping
                  ? 'Drafting sharper version...'
                  : 'Specifics added. Clearer and more compelling.'}
            </p>
            {isAccepted && (
              <div className="flex items-center gap-x-1 text-[9px] text-green-600 font-semibold">
                <Check className="size-2.5" /> Applied
              </div>
            )}
          </div>

          {/* Export formats */}
          <div className="space-y-1.5">
            <p className="text-[9px] text-secondary/40 font-medium px-0.5">Export as</p>
            {exportFormats.map((fmt, i) => (
              <div key={fmt.label}
                className={`flex items-center justify-center rounded-lg border px-2 py-1.5 text-[10px] font-semibold transition-all duration-300 ${fmt.color} ${i < exports ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                {fmt.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </div>
  );
}
