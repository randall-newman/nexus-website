'use client';

import mainLogo from '@/public/images/logo/main-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { AuthRightPanel } from './auth-right-panel';

const inputCls =
  'w-full rounded-xl border border-stroke-3 bg-white px-4 py-3 text-sm text-secondary placeholder:text-secondary/35 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-all duration-200';

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-[18px]" fill="none">
    <path d="M21.7541 12.2199C21.7541 11.4182 21.6878 10.8332 21.5441 10.2266H12.2031V13.8449H17.6861C17.5756 14.744 16.9786 16.0982 15.6521 17.0082L18.7915 19.3916C20.6708 17.6907 21.7541 15.1882 21.7541 12.2199Z" fill="#4285F4" />
    <path d="M12.2002 21.7514C14.8864 21.7514 17.1415 20.8847 18.7886 19.3897L15.6492 17.0063C14.8091 17.5805 13.6815 17.9813 12.2002 17.9813C9.56932 17.9813 7.33635 16.2805 6.54036 13.9297L3.3125 16.378C4.94853 19.563 8.30907 21.7514 12.2002 21.7514Z" fill="#34A853" />
    <path d="M6.53907 13.9306C6.20749 13.3239 6.20749 12.6739 6.52802 10.0739L3.3112 7.62555C2.63691 8.94723 2.25 10.4314 2.25 12.0023C2.25 13.5731 2.63691 15.0572 3.3112 16.3789L6.53907 13.9306Z" fill="#FBBC05" />
    <path d="M12.2003 6.01997C14.0685 6.01997 15.3286 6.8108 16.0472 7.47168L18.855 4.785C17.1306 3.21417 14.8865 2.25 12.2003 2.25C8.3091 2.25 4.94854 4.43832 3.3125 7.62329L6.52933 10.0717C7.33638 7.72083 9.56936 6.01997 12.2003 6.01997Z" fill="#EB4335" />
  </svg>
);

const Login = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    // login_hint must go in signIn's third argument (authorizationParams) —
    // extra keys in the second argument are not forwarded to the authorize URL.
    await signIn('verbosec-account', { callbackUrl: '/' }, { login_hint: email });
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* ── Left — form ──────────────────────────────────────────── */}
      <div className="flex flex-col bg-white px-6 py-8 sm:px-10 xl:px-16">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src={mainLogo} alt="Nexus AI" height={34} className="h-[34px] w-auto" />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-[13px] text-secondary/50 transition-colors hover:text-secondary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to site
          </Link>
        </div>

        {/* Form centred vertically */}
        <div className="mx-auto flex w-full max-w-[400px] flex-1 flex-col justify-center py-12">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-secondary">Welcome back</h1>
            <p className="mt-1.5 text-[14px] text-secondary/55">
              Log in to your Nexus AI account to continue.
            </p>
          </div>

          {/* Social buttons */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => signIn('verbosec-account', { callbackUrl: '/' })}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-stroke-3 bg-white px-4 py-3 text-sm font-medium text-secondary shadow-sm transition-all hover:border-secondary/20 hover:shadow-md"
            >
              <GoogleIcon />
              Continue with Google
            </button>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-stroke-3" />
            <span className="text-[12px] text-secondary/35">or continue with email</span>
            <div className="h-px flex-1 bg-stroke-3" />
          </div>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="email" className="block text-[13px] font-medium text-secondary/70">
                  Email address
                </label>
                <Link
                  href="/forgot-password"
                  className="text-[12px] text-primary-500 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                className={inputCls}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full rounded-xl bg-secondary py-3 text-sm font-semibold text-white transition-opacity hover:opacity-85 disabled:opacity-40"
            >
              {loading ? 'Redirecting...' : 'Continue'}
            </button>

            <p className="text-center text-[12px] text-secondary/40">
              You&apos;ll enter your password on the next step.
            </p>
          </form>

          <p className="mt-6 text-center text-[13px] text-secondary/50">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="font-semibold text-secondary hover:underline">
              Sign up free
            </Link>
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-[11px] text-secondary/30">
          By logging in you agree to our{' '}
          <Link href="/legal/terms" className="underline hover:text-secondary/60">
            Terms
          </Link>{' '}
          and{' '}
          <Link href="/legal/privacy" className="underline hover:text-secondary/60">
            Privacy Policy
          </Link>
          .
        </p>
      </div>

      {/* ── Right — upsell panel ───────────────────────────────── */}
      <AuthRightPanel />
    </div>
  );
};

export default Login;
