'use client';

import { Check, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

/* ─── timing ─────────────────────────────────────────── */
const T_CHAR     = 36;
const T_THINK    = 2400;
const T_THOUGHT  = 1500;
const T_READ     = 1800;
const T_ACCEPT   = 650;
const T_ACCEPTED = 1000;
const T_SUMMARY  = 2200;
const T_RESET    = 900;

/* ─── scenario: building a web app dashboard fetch ─── */
const FILENAME = 'src/api/dashboard.ts';

const STATIC_HEADER = [
  "import { cache }  from '@/lib/cache';",
  "import { db }     from '@/lib/db';",
  "",
];

const ROUND_1 = {
  thinkTime : '2.8s',
  insight   : "TTL is hardcoded to 300s. Should come from the user's subscription tier.",
  remove    : "  const ttl = 300",
  add       : "  const ttl = getConfig(user.plan).cacheTtl",
  ctx_before: ['', 'export async function fetchDashboard(user: User) {',
               "  const key = `dash:${user.id}`"],
  ctx_after : ['  const cached = await cache.get(key)',
               '  if (cached) return cached',
               '  const data = await db.query.dashboard({ id: user.id })',
               '  await cache.set(key, data, ttl)',
               '  return data', '}'],
};

const ROUND_2 = {
  thinkTime : '1.6s',
  insight   : "No null check on user. A missing session will crash the cache key template literal.",
  remove    : 'export async function fetchDashboard(user: User) {',
  add       : 'export async function fetchDashboard(user: User | null) {\n  if (!user) throw new Error("Unauthenticated");',
  ctx_before: [''],
  ctx_after : [
    "  const key = `dash:${user.id}`",
    "  const ttl = getConfig(user.plan).cacheTtl",
    '  const cached = await cache.get(key)',
    '  if (cached) return cached',
    '  return await db.query.dashboard({ id: user.id })',
    '}',
  ],
};

type Phase =
  | 'thinking-1' | 'thought-1' | 'typing-1' | 'done-1' | 'accepting-1' | 'accepted-1'
  | 'thinking-2' | 'thought-2' | 'typing-2' | 'done-2' | 'accepting-2' | 'accepted-2'
  | 'summary' | 'resetting';

export default function LiveCodeDemo() {
  const [phase, setPhase] = useState<Phase>('thinking-1');
  const [typed, setTyped] = useState('');
  const [dots,  setDots]  = useState('.');
  const timer    = useRef<ReturnType<typeof setTimeout>  | null>(null);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const at = (ms: number, fn: () => void) => { timer.current = setTimeout(fn, ms); };
    const clearAll = () => {
      if (timer.current)    clearTimeout(timer.current);
      if (interval.current) clearInterval(interval.current);
    };

    const startDots = () => {
      let n = 1;
      interval.current = setInterval(() => { n = (n % 3) + 1; setDots('.'.repeat(n)); }, 400);
    };
    const stopDots = () => { if (interval.current) clearInterval(interval.current); };

    const typeText = (text: string, onDone: () => void) => {
      let i = 0;
      const tick = () => {
        i++; setTyped(text.slice(0, i));
        if (i < text.length) timer.current = setTimeout(tick, T_CHAR);
        else onDone();
      };
      tick();
    };

    const run = () => {
      setPhase('thinking-1'); setTyped('');
      startDots();
      at(T_THINK, () => {
        stopDots(); setPhase('thought-1');
        at(T_THOUGHT, () => {
          setPhase('typing-1');
          typeText(ROUND_1.add, () => {
            setPhase('done-1');
            at(T_READ, () => {
              setPhase('accepting-1');
              at(T_ACCEPT, () => {
                setPhase('accepted-1');
                at(T_ACCEPTED, () => {
                  setPhase('thinking-2'); setTyped('');
                  startDots();
                  at(T_THINK - 600, () => {
                    stopDots(); setPhase('thought-2');
                    at(T_THOUGHT, () => {
                      setPhase('typing-2');
                      typeText(ROUND_2.add, () => {
                        setPhase('done-2');
                        at(T_READ, () => {
                          setPhase('accepting-2');
                          at(T_ACCEPT, () => {
                            setPhase('accepted-2');
                            at(T_ACCEPTED, () => {
                              setPhase('summary');
                              at(T_SUMMARY, () => { setPhase('resetting'); at(T_RESET, () => { setTyped(''); run(); }); });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    };

    run();
    return clearAll;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const r1AcceptedOnward = ['accepted-1','thinking-2','thought-2','typing-2','done-2','accepting-2','accepted-2','summary'].includes(phase);
  const r2AcceptedOnward = ['accepted-2','summary'].includes(phase);
  const r1Active  = ['typing-1','done-1','accepting-1'].includes(phase);
  const r2Active  = ['typing-2','done-2','accepting-2'].includes(phase);
  const isThink1  = phase === 'thinking-1';
  const isThought1 = phase === 'thought-1';
  const isThink2  = phase === 'thinking-2';
  const isThought2 = phase === 'thought-2';
  const isSummary = phase === 'summary';

  const r1addText = r1AcceptedOnward ? ROUND_1.add : (r1Active ? typed : '');
  const r2addText = r2AcceptedOnward ? ROUND_2.add : (r2Active ? typed : '');

  return (
    <div className="rounded-xl overflow-hidden font-mono text-[11px]">
      {/* ── Editor chrome ───────────────────────────────── */}
      <div className="bg-secondary">
        {/* Title bar */}
        <div className="flex items-center gap-x-1.5 border-b border-white/10 px-3 py-2">
          <span className="size-2 rounded-full bg-red-500/80" />
          <span className="size-2 rounded-full bg-yellow-500/80" />
          <span className="size-2 rounded-full bg-green-500/80" />
          <span className="ml-3 text-white/40 text-[10px]">{FILENAME}</span>
        </div>

        {/* ── Inline AI thinking strip ──────────────────── */}
        <div className={`px-3 py-2 border-b border-white/10 min-h-[36px] flex items-center transition-all duration-300 ${(isThink1 || isThink2) ? 'bg-white/5' : 'bg-transparent'}`}>
          {(isThink1 || isThink2) && (
            <div className="flex items-center gap-x-2 text-[#8ab0f5]">
              <span className="flex gap-x-1">
                {[0,1,2].map(i => (
                  <span key={i} className="size-1.5 rounded-full bg-[#4c7df0]"
                    style={{ animation: `bounceDot 1.2s ${i * 0.2}s ease-in-out infinite` }} />
                ))}
              </span>
              <span>Nexus AI thinking{dots}</span>
            </div>
          )}
          {(isThought1 || (r1Active && !isThought2)) && (
            <div className="text-[10px] text-[#4c7df0] flex items-center gap-x-1.5">
              <span className="text-green-400 text-xs">✓</span>
              Thought for {ROUND_1.thinkTime}
              <span className="text-white/30 mx-1">·</span>
              <span className="text-white/40">{ROUND_1.insight}</span>
            </div>
          )}
          {(isThought2 || r2Active) && (
            <div className="text-[10px] text-[#4c7df0] flex items-center gap-x-1.5">
              <span className="text-green-400 text-xs">✓</span>
              Thought for {ROUND_2.thinkTime}
              <span className="text-white/30 mx-1">·</span>
              <span className="text-white/40">{ROUND_2.insight}</span>
            </div>
          )}
          {r1AcceptedOnward && !isThink2 && !isThought2 && !r2Active && !r2AcceptedOnward && !isSummary && (
            <div className="text-[10px] text-green-400/80">✓ Fix 1 accepted, applying next suggestion</div>
          )}
          {(r2AcceptedOnward || isSummary) && (
            <div className="text-[10px] flex items-center gap-x-2">
              <span className="text-green-400">✓ 2 improvements applied</span>
              {isSummary && <span className="text-[#7458e8] font-medium ml-1">· Code review complete</span>}
            </div>
          )}
        </div>

        {/* ── Code area ─────────────────────────────────── */}
        <div className="p-3 space-y-px leading-5">
          {STATIC_HEADER.map((l, i) => (
            <div key={i} className={l === '' ? 'h-2' : 'text-[#8ab0f5]/60 px-1'}>{l}</div>
          ))}

          {/* Round 2 region (function signature) */}
          {ROUND_2.ctx_before.map((l, i) => <div key={`r2b${i}`} className={l === '' ? 'h-2' : 'text-white/60 px-1'}>{l}</div>)}
          {!r2AcceptedOnward && (
            <div className={`px-1 rounded transition-all duration-300 ${r2Active ? 'bg-red-500/12 text-red-400 line-through' : 'text-white/60'}`}>
              {r2Active ? '- ' : '  '}{ROUND_2.remove}
            </div>
          )}
          {(r2Active || r2AcceptedOnward) && ROUND_2.add.split('\n').map((ln, i) => (
            <div key={`r2a${i}`} className={`px-1 rounded ${r2AcceptedOnward ? 'bg-green-500/18 text-green-300' : 'bg-green-500/12 text-green-400'}`}>
              {'+ '}{ln}
              {r2Active && phase === 'typing-2' && i === r2addText.split('\n').length - 1 && (
                <span className="inline-block w-[1.5px] h-[0.85em] bg-green-400 align-middle ml-px" style={{ animation: 'blink 0.9s step-end infinite' }} />
              )}
            </div>
          ))}

          {/* Round 1 region (TTL line) */}
          {ROUND_1.ctx_before.map((l, i) => <div key={`r1b${i}`} className={l === '' ? 'h-1' : 'text-white/60 px-1'}>{l}</div>)}
          {!r1AcceptedOnward && (
            <div className={`px-1 rounded transition-all duration-300 ${r1Active ? 'bg-red-500/12 text-red-400 line-through' : 'text-white/60'}`}>
              {r1Active ? '- ' : '  '}{ROUND_1.remove}
            </div>
          )}
          {(r1Active || r1AcceptedOnward) && (
            <div className={`px-1 rounded ${r1AcceptedOnward ? 'bg-green-500/18 text-green-300' : 'bg-green-500/12 text-green-400'}`}>
              {'+ '}{r1addText}
              {r1Active && phase === 'typing-1' && (
                <span className="inline-block w-[1.5px] h-[0.85em] bg-green-400 align-middle ml-px" style={{ animation: 'blink 0.9s step-end infinite' }} />
              )}
            </div>
          )}

          {ROUND_1.ctx_after.map((l, i) => <div key={`r1a${i}`} className="text-white/60 px-1">{l}</div>)}
        </div>
      </div>

      {/* ── Accept / Reject bar ────────────────────────── */}
      <div className="bg-white border-t border-stroke-3 px-3 py-2.5 flex items-center gap-x-2 flex-wrap gap-y-1">
        <span className={`flex items-center gap-x-1 rounded-full px-3 py-1 text-tagline-3 transition-all duration-200 cursor-default ${
          (phase === 'accepting-1' || phase === 'accepting-2')
            ? 'bg-green-500 text-white scale-105 shadow-md'
            : (r1AcceptedOnward || r2AcceptedOnward)
              ? 'bg-green-500/15 text-green-600'
              : 'bg-primary-50 text-secondary'
        }`}>
          <Check className="size-3" />
          {r2AcceptedOnward || isSummary ? '2 accepted' : r1AcceptedOnward ? '1 accepted' : 'Accept change'}
        </span>
        <span className={`bg-background-13 text-secondary/50 flex items-center gap-x-1 rounded-full px-3 py-1 text-tagline-3 cursor-default transition-opacity duration-300 ${isSummary ? 'opacity-20' : ''}`}>
          <X className="size-3" /> Reject
        </span>
        <span className="ml-auto text-[10px] text-secondary/30">
          {r2AcceptedOnward || isSummary ? '2 / 2 fixes' : r1AcceptedOnward ? '1 / 2 fixes' : '0 / 2 fixes'}
        </span>
      </div>

      <style>{`
        @keyframes bounceDot { 0%,100%{transform:translateY(0);opacity:.5} 50%{transform:translateY(-3px);opacity:1} }
        @keyframes blink     { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </div>
  );
}
