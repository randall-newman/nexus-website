'use client';

import { Check, ChevronDown, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'nexus-cookie-consent';
const AUTO_ACCEPT_DELAY = 9000; // 9 seconds

export const OPEN_COOKIE_SETTINGS_EVENT = 'nexus:open-cookie-settings';

/* ─── Cookie categories ─────────────────────────────── */
const CATEGORIES = [
  {
    id: 'necessary',
    name: 'Strictly Necessary',
    description:
      'Required for the website to function. They are set in response to actions you take, such as setting privacy preferences, logging in or filling in forms. These cannot be switched off.',
    locked: true,
  },
  {
    id: 'analytics',
    name: 'Performance & Analytics',
    description:
      'Help us understand how visitors interact with our site by collecting anonymous usage data. They allow us to measure visits and traffic sources to improve performance.',
    locked: false,
  },
  {
    id: 'functional',
    name: 'Functional',
    description:
      'Enable enhanced functionality and personalisation — remembering your preferences, language and region. They may be set by us or by third-party providers whose services appear on our pages.',
    locked: false,
  },
  {
    id: 'marketing',
    name: 'Marketing & Targeting',
    description:
      'Set by advertising partners to build a profile of your interests and show relevant adverts on other sites. They work by uniquely identifying your browser and device.',
    locked: false,
  },
] as const;

type CategoryId = (typeof CATEGORIES)[number]['id'];

interface Consent {
  necessary: true;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

const DEFAULT_CONSENT: Consent = {
  necessary: true,
  analytics: false,
  functional: false,
  marketing: false,
};

const ALL_CONSENT: Consent = {
  necessary: true,
  analytics: true,
  functional: true,
  marketing: true,
};

function readStored(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Consent;
  } catch {
    return null;
  }
}

function writeStored(consent: Consent) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch { /* ignore */ }
}

/* ─── Toggle switch ─────────────────────────────────── */
function Toggle({
  enabled,
  locked,
  onChange,
}: {
  enabled: boolean;
  locked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      disabled={locked}
      onClick={() => !locked && onChange(!enabled)}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-all duration-200 focus-visible:outline-none ${
        locked
          ? 'cursor-not-allowed opacity-60'
          : 'cursor-pointer'
      } ${enabled ? 'bg-secondary' : 'bg-secondary/20'}`}
    >
      <span
        className={`inline-block size-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
      {locked && enabled && (
        <Check className="absolute right-1 size-2.5 text-white" />
      )}
    </button>
  );
}

/* ─── Accordion category row ────────────────────────── */
function CategoryRow({
  cat,
  enabled,
  onChange,
}: {
  cat: (typeof CATEGORIES)[number];
  enabled: boolean;
  onChange: (v: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stroke-3 last:border-0">
      <div className="flex items-center gap-x-3 py-3.5">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex min-w-0 flex-1 items-center gap-x-2 text-left"
          aria-expanded={open}
        >
          <ChevronDown
            className={`size-4 shrink-0 text-secondary/40 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          />
          <span className="text-[14px] font-semibold text-secondary leading-tight">
            {cat.name}
          </span>
          {cat.locked && (
            <span className="ml-1 rounded-full bg-secondary/8 px-2 py-0.5 text-[11px] font-medium text-secondary/50">
              Always active
            </span>
          )}
        </button>
        <Toggle enabled={enabled} locked={cat.locked} onChange={onChange} />
      </div>
      {open && (
        <p className="pb-4 pl-6 pr-2 text-[13px] text-secondary/55 leading-relaxed">
          {cat.description}
        </p>
      )}
    </div>
  );
}

/* ─── Main component ────────────────────────────────── */
export function CookiesBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal,  setShowModal]  = useState(false);
  const [prefs,     setPrefs]      = useState<Consent>(DEFAULT_CONSENT);
  const [progress,  setProgress]   = useState(0);
  const timerRef   = useRef<ReturnType<typeof setInterval>  | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>   | null>(null);
  const interacted = useRef(false);

  /* ── On mount: check stored consent ── */
  useEffect(() => {
    const stored = readStored();
    if (!stored) setShowBanner(true);
    else setPrefs(stored);
  }, []);

  /* ── Listen for "open settings" event from footer link ── */
  useEffect(() => {
    const handler = () => {
      stopCountdown();
      setShowBanner(false);
      setShowModal(true);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, handler);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── Auto-accept countdown when banner is visible ── */
  const stopCountdown = useCallback(() => {
    if (timerRef.current)   clearInterval(timerRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    if (!showBanner) { stopCountdown(); return; }

    const tick = AUTO_ACCEPT_DELAY / 100;
    timerRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + 1, 100));
    }, tick);

    timeoutRef.current = setTimeout(() => {
      if (!interacted.current) acceptAll();
    }, AUTO_ACCEPT_DELAY);

    return stopCountdown;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showBanner]);

  /* ── Actions ── */
  const acceptAll = useCallback(() => {
    interacted.current = true;
    stopCountdown();
    writeStored(ALL_CONSENT);
    setPrefs(ALL_CONSENT);
    setShowBanner(false);
    setShowModal(false);
  }, [stopCountdown]);

  const savePrefs = useCallback(() => {
    interacted.current = true;
    stopCountdown();
    writeStored(prefs);
    setShowBanner(false);
    setShowModal(false);
  }, [prefs, stopCountdown]);

  const openModal = useCallback(() => {
    interacted.current = true;
    stopCountdown();
    setShowBanner(false);
    setShowModal(true);
  }, [stopCountdown]);

  const toggleCategory = (id: CategoryId, val: boolean) => {
    if (id === 'necessary') return;
    setPrefs((p) => ({ ...p, [id]: val }));
  };

  return (
    <>
      {/* ── Initial consent banner ── */}
      {showBanner && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-[9000] px-4 pb-4 sm:px-6 md:pb-5"
        >
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-stroke-3 bg-white shadow-[0_8px_40px_rgba(0,12,96,0.15)]">
            {/* Auto-accept progress bar */}
            <div className="h-0.5 w-full bg-stroke-3">
              <div
                className="h-full bg-secondary/30 transition-none"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:gap-6 sm:px-7 sm:py-5">
              <p className="flex-1 text-[14px] text-secondary/65 leading-relaxed">
                We use cookies to improve your experience, personalise content and analyse
                traffic. Accepting will happen automatically in a few seconds.
              </p>
              <div className="flex shrink-0 flex-wrap items-center gap-3">
                <button
                  onClick={openModal}
                  type="button"
                  className="rounded-full border border-stroke-3 px-5 py-2 text-[13px] font-medium text-secondary/70 transition-colors hover:border-secondary/25 hover:text-secondary"
                >
                  Manage preferences
                </button>
                <button
                  onClick={acceptAll}
                  type="button"
                  className="rounded-full px-6 py-2 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ background: 'var(--color-gradient-logo)' }}
                >
                  Accept all
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Cookie preferences modal ── */}
      {showModal && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[9001] bg-black/30 backdrop-blur-sm"
            onClick={savePrefs}
            aria-hidden="true"
          />

          {/* Modal */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Cookie preferences"
            className="fixed inset-x-0 bottom-0 z-[9002] flex items-end justify-center px-4 pb-4 sm:inset-0 sm:items-center sm:pb-0"
          >
            <div className="w-full max-w-[520px] overflow-hidden rounded-2xl border border-stroke-3 bg-white shadow-[0_20px_60px_rgba(0,12,96,0.2)]">
              {/* Header */}
              <div className="flex items-start justify-between border-b border-stroke-3 px-6 py-5">
                <div className="space-y-0.5">
                  <h2 className="text-[17px] font-bold text-secondary leading-tight">
                    Privacy preferences
                  </h2>
                  <p className="text-[13px] text-secondary/50 leading-relaxed">
                    Choose which cookies you allow. You can change these any time.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={savePrefs}
                  className="ml-4 flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary/6 text-secondary/50 transition-colors hover:bg-secondary/10 hover:text-secondary"
                  aria-label="Close"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* Categories */}
              <div className="max-h-[55vh] overflow-y-auto px-6 py-1 sm:max-h-[380px]">
                {CATEGORIES.map((cat) => (
                  <CategoryRow
                    key={cat.id}
                    cat={cat}
                    enabled={prefs[cat.id]}
                    onChange={(v) => toggleCategory(cat.id, v)}
                  />
                ))}
              </div>

              {/* Footer */}
              <div className="flex flex-col gap-2.5 border-t border-stroke-3 px-6 py-5 sm:flex-row">
                <button
                  onClick={savePrefs}
                  type="button"
                  className="flex-1 rounded-full border border-stroke-3 py-2.5 text-[14px] font-semibold text-secondary transition-colors hover:bg-secondary/5"
                >
                  Save my choices
                </button>
                <button
                  onClick={acceptAll}
                  type="button"
                  className="flex-1 rounded-full py-2.5 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ background: 'var(--color-gradient-logo)' }}
                >
                  Accept all
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
