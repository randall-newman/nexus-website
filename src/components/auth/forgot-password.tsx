'use client';

import mainLogo from '@/public/images/logo/main-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, Mail } from 'lucide-react';
import { TurnstileWidget } from '@/src/components/shared/ui/turnstile-widget';
import { AuthRightPanel } from './auth-right-panel';

const inputCls =
  'w-full rounded-xl border border-stroke-3 bg-white px-4 py-3 text-sm text-secondary placeholder:text-secondary/35 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-all duration-200';

const ForgotPassword = () => {
  const [email, setEmail]     = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const q = email.trim();
    if (!q) return;

    setErrorMsg('');
    setLoading(true);

    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: q,
          'cf-turnstile-response': data.get('cf-turnstile-response'),
        }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json.error ?? 'Something went wrong. Please try again.');
        setLoading(false);
        return;
      }

      setSubmitted(true);
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setLoading(false);
    }
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left — form */}
      <div className="flex flex-col bg-white px-6 py-8 sm:px-10 xl:px-16">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src={mainLogo} alt="Nexus AI" height={34} className="h-[34px] w-auto" />
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-1.5 text-[13px] text-secondary/50 transition-colors hover:text-secondary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to login
          </Link>
        </div>

        {/* Form */}
        <div className="mx-auto flex w-full max-w-[400px] flex-1 flex-col justify-center py-12">
          {!submitted ? (
            <>
              <div className="mb-8">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-stroke-3 bg-secondary/5">
                  <Mail className="h-5 w-5 stroke-secondary" />
                </div>
                <h1 className="text-2xl font-bold text-secondary">Forgot your password?</h1>
                <p className="mt-1.5 text-[14px] text-secondary/55">
                  Enter your email and we will send you a link to reset your password.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-[13px] font-medium text-secondary/70">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={inputCls}
                    required
                  />
                </div>

                <TurnstileWidget theme="light" />

                {errorMsg && <p className="text-[13px] text-red-500">{errorMsg}</p>}

                <button
                  type="submit"
                  className="mt-2 w-full rounded-xl bg-secondary py-3 text-sm font-semibold text-white transition-opacity hover:opacity-85 disabled:opacity-40"
                  disabled={!email.trim() || loading}
                >
                  {loading ? 'Sending...' : 'Send reset link'}
                </button>
              </form>

              <p className="mt-6 text-center text-[13px] text-secondary/50">
                Remember your password?{' '}
                <Link href="/login" className="font-semibold text-secondary hover:underline">
                  Log in
                </Link>
              </p>
            </>
          ) : (
            <div className="text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-stroke-3 bg-emerald-50">
                <Mail className="h-6 w-6 stroke-emerald-500" />
              </div>
              <h2 className="text-xl font-bold text-secondary">Check your inbox</h2>
              <p className="mt-2 text-[14px] text-secondary/55">
                We sent a password reset link to{' '}
                <span className="font-medium text-secondary">{email}</span>.
              </p>
              <Link
                href="/login"
                className="mt-8 inline-block rounded-xl bg-secondary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-85"
              >
                Back to login
              </Link>
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-[11px] text-secondary/30">
          Need help?{' '}
          <Link href="/help" className="underline hover:text-secondary/60">
            Visit our Help Centre
          </Link>
          .
        </p>
      </div>

      {/* Right — upsell panel */}
      <AuthRightPanel />
    </div>
  );
};

export default ForgotPassword;
