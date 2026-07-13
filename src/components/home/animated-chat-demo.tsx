'use client';

import { FileText, MessageSquare, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

/* ─── timing ──────────────────────────────────────── */
const T_CHAR  = 22;
const T_THINK = 1500;
const T_READ  = 2400;
const T_RESET = 900;

/* ─── conversation content ─────────────────────────── */
const HISTORY = [
  {
    from: 'user',
    text: 'What are the key parties in this contract?',
  },
  {
    from: 'ai',
    text: 'The agreement is between Acme Corp (Licensor) and TechVenture Ltd (Licensee), effective January 2025.',
    sources: ['Page 1'],
  },
];

const USER_MSG_2    = 'Summarize the key risks and draft a reply flagging them for legal.';
const AI_RESPONSE_2 = 'Three risks stand out: an auto-renewal clause on page 4, an uncapped liability term on page 9, and a 30-day termination window on page 12. Reply drafted below.';

type Phase = 'idle' | 'typing-user' | 'thinking' | 'streaming' | 'done' | 'resetting';

export default function AnimatedChatDemo() {
  const [phase,     setPhase]     = useState<Phase>('idle');
  const [userTyped, setUserTyped] = useState('');
  const [aiTyped,   setAiTyped]   = useState('');
  const [dots,      setDots]      = useState('.');
  const timer    = useRef<ReturnType<typeof setTimeout>  | null>(null);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const at = (ms: number, fn: () => void) => { timer.current = setTimeout(fn, ms); };
    const clear = () => {
      if (timer.current)    clearTimeout(timer.current);
      if (interval.current) clearInterval(interval.current);
    };
    const startDots = () => {
      let n = 1;
      interval.current = setInterval(() => { n = (n % 3) + 1; setDots('.'.repeat(n)); }, 380);
    };
    const stopDots = () => { if (interval.current) clearInterval(interval.current); };
    const typeText = (full: string, setter: (v: string) => void, onDone: () => void) => {
      let i = 0;
      const tick = () => {
        i++; setter(full.slice(0, i));
        if (i < full.length) timer.current = setTimeout(tick, T_CHAR);
        else onDone();
      };
      tick();
    };

    const run = () => {
      setPhase('idle'); setUserTyped(''); setAiTyped('');
      at(700, () => {
        setPhase('typing-user');
        typeText(USER_MSG_2, setUserTyped, () => {
          setPhase('thinking'); startDots();
          at(T_THINK, () => {
            stopDots(); setPhase('streaming');
            typeText(AI_RESPONSE_2, setAiTyped, () => {
              setPhase('done');
              at(T_READ, () => { setPhase('resetting'); at(T_RESET, () => run()); });
            });
          });
        });
      });
    };

    run();
    return clear;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cursor = (
    <span className="inline-block ml-0.5 w-[2px] h-[0.85em] bg-secondary/50 align-middle"
      style={{ animation: 'blink 0.9s step-end infinite' }} />
  );

  return (
    <div className="flex flex-col gap-y-0 rounded-xl overflow-hidden border border-stroke-3">
      {/* ── Chat header ──────────────────────────────────── */}
      <div className="flex items-center gap-x-2 border-b border-stroke-3 bg-background-13 px-4 py-2.5">
        <div className="flex size-6 items-center justify-center rounded-full bg-primary-50">
          <Sparkles className="text-primary-500 size-3" />
        </div>
        <span className="text-tagline-3 text-secondary/70 font-medium">Legal Review</span>
        <span className="text-secondary/30 mx-1">·</span>
        <FileText className="size-3 text-secondary/40" />
        <span className="text-tagline-3 text-secondary/40">contract-draft-v3.pdf</span>
        <span className="ml-auto rounded-full bg-green-500/15 px-2 py-0.5 text-[10px] text-green-600 font-medium">
          File Chat
        </span>
      </div>

      {/* ── Message list ──────────────────────────────────── */}
      <div className="flex flex-col gap-y-3 bg-white px-4 pt-4 pb-3">

        {/* History — always visible */}
        {HISTORY.map((msg, i) => (
          <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'items-start gap-x-2'}`}>
            {msg.from === 'ai' && (
              <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-50 mt-0.5">
                <Sparkles className="text-primary-500 size-3" />
              </div>
            )}
            <div className={`rounded-2xl px-3 py-2 text-tagline-3 max-w-[82%] space-y-1.5 ${
              msg.from === 'user'
                ? 'bg-background-13 text-secondary rounded-tr-sm'
                : 'border border-stroke-3 bg-white text-secondary/80 rounded-tl-sm'
            }`}>
              <p className="leading-relaxed">{msg.text}</p>
              {msg.from === 'ai' && msg.sources && (
                <div className="flex items-center gap-x-1.5 pt-0.5 border-t border-stroke-3/50">
                  <span className="text-[9px] text-secondary/30">Source</span>
                  {msg.sources.map(s => (
                    <span key={s} className="bg-primary-50 text-primary-600 rounded px-1.5 py-0.5 text-[9px] font-medium">{s}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Divider between history and live exchange */}
        <div className="flex items-center gap-x-2 py-0.5">
          <div className="h-px flex-1 bg-stroke-3/50" />
          <span className="text-[9px] text-secondary/30 font-medium">New message</span>
          <div className="h-px flex-1 bg-stroke-3/50" />
        </div>

        {/* Live user message */}
        <div className={`flex justify-end transition-opacity duration-300 ${phase === 'idle' ? 'opacity-0' : 'opacity-100'}`}>
          <div className="bg-secondary text-white rounded-2xl rounded-tr-sm px-3 py-2 text-tagline-3 max-w-[82%]">
            {userTyped || ' '}
            {phase === 'typing-user' && cursor}
          </div>
        </div>

        {/* Live AI response */}
        {(phase === 'thinking' || phase === 'streaming' || phase === 'done') && (
          <div className="flex items-start gap-x-2">
            <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-50 mt-0.5">
              <Sparkles className="text-primary-500 size-3" />
            </div>
            <div className="border border-stroke-3 rounded-2xl rounded-tl-sm bg-white px-3 py-2.5 space-y-2 flex-1">
              {phase === 'thinking' && (
                <div className="flex items-center gap-x-1.5 text-tagline-3 text-secondary/50">
                  <span>Thinking</span>
                  <span className="flex gap-x-0.5">
                    {[0,1,2].map(i => (
                      <span key={i} className="size-1.5 rounded-full bg-secondary/25"
                        style={{ animation: `bounceDot 1.1s ${i * 0.18}s ease-in-out infinite` }} />
                    ))}
                  </span>
                </div>
              )}
              {(phase === 'streaming' || phase === 'done') && (
                <>
                  <p className="text-tagline-3 text-secondary/80 leading-relaxed">
                    {aiTyped}
                    {phase === 'streaming' && cursor}
                  </p>
                  {phase === 'done' && (
                    <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 pt-1.5 border-t border-stroke-3/50">
                      <span className="text-[9px] text-secondary/30">Sourced from</span>
                      {['Page 4', 'Page 9', 'Page 12'].map(p => (
                        <span key={p} className="bg-primary-50 text-primary-600 rounded px-1.5 py-0.5 text-[9px] font-medium">{p}</span>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ── Input bar ─────────────────────────────────────── */}
      <div className="border-t border-stroke-3 bg-white px-3 py-2">
        <div className="flex items-center gap-x-2 rounded-xl border border-stroke-3 bg-background-13 px-3 py-2">
          <span className="flex-1 text-tagline-3 text-secondary/30">Ask a follow-up...</span>
          <MessageSquare className="size-3.5 text-secondary/30" />
        </div>
      </div>

      <style>{`
        @keyframes bounceDot { 0%,100%{transform:translateY(0);opacity:.4} 50%{transform:translateY(-3px);opacity:1} }
        @keyframes blink     { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </div>
  );
}
