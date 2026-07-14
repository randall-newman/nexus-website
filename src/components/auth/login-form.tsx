'use client';

import AuthOrDivider from '@/src/components/auth/auth-or-divider';
import SocialButtons from '@/src/components/auth/social-buttons';
import { TurnstileWidget } from '@/src/components/shared/ui/turnstile-widget';
import { ButtonWhite } from '@/src/components/shared/ui/button';
import { useState } from 'react';
import Link from 'next/link';

type Status = 'idle' | 'loading' | 'success' | 'error';

const inputClassName =
  'w-full rounded-md border border-stroke-3/25 bg-transparent px-4.5 py-3 text-white/90 placeholder:text-white/55 focus:outline-none';

const LoginForm = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');

    const data = new FormData(event.currentTarget);

    const payload = {
      email: data.get('email'),
      password: data.get('password'),
      'cf-turnstile-response': data.get('cf-turnstile-response'),
    };

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json.error ?? 'Login failed. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  }

  return (
    <form
      className="bg-background-7 flex flex-col items-center gap-8 rounded-lg px-8 py-6 backdrop-blur-[60px] md:py-8"
      onSubmit={handleSubmit}
    >
      <div className="flex w-full flex-col gap-8">
        <div className="flex flex-col gap-4">
          <fieldset className="space-y-2">
            <label htmlFor="login-email" className="text-tagline-2 block text-white/90">
              Your email
            </label>
            <input
              type="email"
              id="login-email"
              name="email"
              placeholder="Email address"
              className={inputClassName}
              required
              aria-label="Your email"
            />
          </fieldset>

          <fieldset className="space-y-2">
            <label htmlFor="login-password" className="text-tagline-2 block text-white/90">
              Password
            </label>
            <input
              type="password"
              id="login-password"
              name="password"
              placeholder="At least 8 characters"
              className={inputClassName}
              required
              minLength={8}
              aria-label="Password"
            />
          </fieldset>
        </div>

        <TurnstileWidget theme="dark" />

        {status === 'error' && (
          <p className="text-tagline-3 -mt-4 text-red-400">{errorMsg}</p>
        )}

        <ButtonWhite
          type="submit"
          disabled={status === 'loading'}
          className="w-full md:w-auto"
          textClassName="text-center text-nowrap flex-1 px-0! mr-8!"
        >
          {status === 'loading' ? 'Logging in...' : 'Login'}
        </ButtonWhite>

        <AuthOrDivider />

        <SocialButtons />
      </div>

      <p className="text-tagline-3 text-center text-white/90">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="text-white/70 underline">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
