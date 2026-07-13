'use client';

import { Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const PROMPT = 'Create a 10-slide investor deck on Q3 growth, on-brand.';
const T_CHAR = 26;
const T_GEN  = 2000;
const T_SLIDE = 320;
const T_READ  = 2400;
const T_RESET = 700;

/* Each slide: label, dominant bg color, accent, layout hint */
const SLIDES = [
  { label: 'Title',    bg: 'bg-[#000c60]', accent: '#7458e8', text: 'Q3 Growth Report', sub: '2025 Investor Update',   dark: true  },
  { label: 'Revenue',  bg: 'bg-white',     accent: '#7458e8', text: 'Revenue',           sub: '+38% YoY',              dark: false },
  { label: 'Product',  bg: 'bg-[#f4f2fe]', accent: '#f65c9c', text: 'New Features',      sub: '6 shipped this quarter',dark: false },
  { label: 'Metrics',  bg: 'bg-white',     accent: '#4c7df0', text: 'Key Metrics',        sub: 'NPS · CAC · LTV',       dark: false },
  { label: 'Team',     bg: 'bg-[#000c60]', accent: '#fdad02', text: 'The Team',           sub: '42 people across 3 hubs',dark: true },
  { label: 'Next',     bg: 'bg-[#7458e8]', accent: '#fff',    text: "What's Next",        sub: 'Q4 Targets',            dark: true  },
];

type Phase = 'idle' | 'typing' | 'generating' | 'building' | 'done' | 'resetting';

export default function AnimatedCreativeDemo() {
  const [phase,     setPhase]     = useState<Phase>('idle');
  const [typed,     setTyped]     = useState('');
  const [progress,  setProgress]  = useState(0);
  const [visibleN,  setVisibleN]  = useState(0);
  const timer    = useRef<ReturnType<typeof setTimeout>  | null>(null);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const at = (ms: number, fn: () => void) => { timer.current = setTimeout(fn, ms); };
    const clear = () => {
      if (timer.current)    clearTimeout(timer.current);
      if (interval.current) clearInterval(interval.current);
    };

    const typeText = (onDone: () => void) => {
      let i = 0;
      const tick = () => {
        i++; setTyped(PROMPT.slice(0, i));
        if (i < PROMPT.length) timer.current = setTimeout(tick, T_CHAR);
        else onDone();
      };
      tick();
    };

    const animateProgress = (onDone: () => void) => {
      let p = 0;
      interval.current = setInterval(() => {
        p += 100 / (T_GEN / 50);
        setProgress(Math.min(p, 100));
        if (p >= 100) { clearInterval(interval.current!); onDone(); }
      }, 50);
    };

    const buildSlides = (n: number) => {
      setVisibleN(n);
      if (n < SLIDES.length) at(T_SLIDE, () => buildSlides(n + 1));
      else { setPhase('done'); at(T_READ, () => { setPhase('resetting'); at(T_RESET, () => run()); }); }
    };

    const run = () => {
      setPhase('idle'); setTyped(''); setProgress(0); setVisibleN(0);
      at(400, () => {
        setPhase('typing');
        typeText(() => {
          setPhase('generating');
          animateProgress(() => {
            setPhase('building');
            buildSlides(0);
          });
        });
      });
    };

    run();
    return clear;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex h-full flex-col gap-y-3">
      {/* Prompt bar */}
      <div className="border-stroke-3 flex shrink-0 items-center gap-x-2 rounded-xl border bg-white px-3 py-2.5">
        <Sparkles className="text-primary-500 size-3.5 shrink-0" />
        <span className="text-tagline-3 text-secondary/80 flex-1 min-h-[1.1em]">
          {typed}
          {phase === 'typing' && (
            <span className="inline-block w-[2px] h-[0.8em] bg-secondary/50 align-middle"
              style={{ animation: 'blink 0.9s step-end infinite' }} />
          )}
          {phase === 'idle' && <span className="text-secondary/25">Ask Creative Studio...</span>}
        </span>
      </div>

      {/* Generation progress bar */}
      {phase === 'generating' && (
        <div className="shrink-0 space-y-1.5">
          <div className="flex justify-between text-[10px] text-secondary/50">
            <span className="flex items-center gap-x-1.5">
              <span className="flex gap-x-0.5">
                {[0,1,2].map(i => (
                  <span key={i} className="size-1.5 rounded-full bg-primary-500"
                    style={{ animation: `bounceDot 1.1s ${i * 0.2}s ease-in-out infinite` }} />
                ))}
              </span>
              Generating deck...
            </span>
            <span className="font-medium">{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-background-13">
            <div className="h-full rounded-full transition-all duration-75"
              style={{ width: `${progress}%`, background: 'var(--color-gradient-logo)' }} />
          </div>
        </div>
      )}

      {/* Slide grid */}
      {(phase === 'building' || phase === 'done') && (
        <div className="min-h-0 flex-1 overflow-hidden">
          <div className="grid grid-cols-3 gap-1.5 h-full">
            {SLIDES.map((slide, i) => (
              <div
                key={slide.label}
                className={`${slide.bg} flex flex-col justify-between rounded-lg p-2 transition-all duration-400 overflow-hidden ${i < visibleN ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {/* Slide label */}
                <div className="flex items-center justify-between">
                  <span className={`text-[8px] font-semibold ${slide.dark ? 'text-white/50' : 'text-secondary/30'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={`text-[8px] ${slide.dark ? 'text-white/30' : 'text-secondary/20'}`}>
                    {slide.label}
                  </span>
                </div>

                {/* Slide content preview */}
                <div className="space-y-1">
                  {/* Accent bar */}
                  <div className="h-0.5 w-6 rounded-full" style={{ background: slide.accent }} />
                  {/* Title */}
                  <p className={`text-[9px] font-bold leading-tight ${slide.dark ? 'text-white' : 'text-secondary'}`}>
                    {slide.text}
                  </p>
                  {/* Sub */}
                  <p className={`text-[8px] leading-tight ${slide.dark ? 'text-white/50' : 'text-secondary/40'}`}>
                    {slide.sub}
                  </p>
                </div>

                {/* Mini chart / visual element */}
                {i === 1 && (
                  <div className="mt-1 flex items-end gap-x-0.5 h-5">
                    {[40, 60, 45, 80, 65, 95].map((h, j) => (
                      <div key={j} className="flex-1 rounded-t-sm opacity-70"
                        style={{ height: `${h}%`, background: slide.accent }} />
                    ))}
                  </div>
                )}
                {i === 3 && (
                  <div className="mt-1 flex gap-x-1">
                    {['NPS 72', 'CAC -12%', 'LTV +28%'].map(m => (
                      <span key={m} className="rounded text-[7px] px-1 py-0.5 font-medium"
                        style={{ background: `${slide.accent}20`, color: slide.accent }}>
                        {m}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Done line */}
      {phase === 'done' && (
        <div className="shrink-0 flex items-center gap-x-2 text-[10px] text-secondary/40">
          <Sparkles className="size-3 text-primary-500" />
          10 slides generated in 8.4s · on-brand
        </div>
      )}

      <style>{`
        @keyframes blink     { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes bounceDot { 0%,100%{transform:translateY(0);opacity:.5} 50%{transform:translateY(-3px);opacity:1} }
      `}</style>
    </div>
  );
}
