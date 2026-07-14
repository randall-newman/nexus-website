'use client';

import { TurnstileWidget } from '@/src/components/shared/ui/turnstile-widget';
import { ButtonPrimary } from '@/src/components/shared/ui/button';
import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const ContactForm = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      message: data.get('message'),
      'cf-turnstile-response': data.get('cf-turnstile-response'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json.error ?? 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="w-full space-y-3 rounded-xl border border-secondary/20 bg-white/60 px-6 py-10 text-center backdrop-blur-sm">
        <p className="text-heading-6 text-secondary">Message sent!</p>
        <p className="text-tagline-2 text-secondary/60">
          We&apos;ll get back to you as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-tagline-2 mt-2 underline text-secondary/50 hover:text-secondary"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="w-full space-y-6" onSubmit={handleSubmit}>
      <fieldset className="mb-6 space-y-2">
        <label htmlFor="name" className="text-tagline-2 text-secondary/90 inline-block font-normal">
          Your name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          className="text-secondary/90 placeholder:text-secondary/60 w-full rounded-md border border-secondary/20 px-4.5 py-3 focus-within:border-secondary/60 focus-within:outline-none"
          required
        />
      </fieldset>

      <fieldset className="mb-6 space-y-2">
        <label htmlFor="email" className="text-tagline-2 text-secondary/90 inline-block font-normal">
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="text-secondary/90 placeholder:text-secondary/60 w-full rounded-md border border-secondary/20 px-4.5 py-3 focus-within:border-secondary/60 focus-within:outline-none"
          required
        />
      </fieldset>

      <fieldset className="mb-4 space-y-2">
        <label htmlFor="message" className="text-tagline-2 text-secondary/90 inline-block font-normal">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          className="text-secondary/90 placeholder:text-secondary/60 h-45.5 w-full rounded-md border border-secondary/20 px-4.5 py-3 focus-within:border-secondary/60 focus-within:outline-none"
        />
      </fieldset>

      <fieldset className="mb-8 flex items-center justify-between gap-x-5">
        <label className="flex cursor-pointer items-center gap-1.5">
          <input type="checkbox" name="terms" required className="peer sr-only" />
          <span className="relative size-5 cursor-pointer rounded-[2px] border border-secondary/40 after:absolute after:top-1/2 after:left-1/2 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-[2px] after:bg-secondary/70 after:opacity-0 after:content-[''] peer-checked:border-secondary peer-checked:after:opacity-100" />
          <span className="text-tagline-3 text-secondary/60 peer-checked:text-secondary/90 select-none font-medium">
            I agree with the terms and privacy policy
          </span>
        </label>
      </fieldset>

      <TurnstileWidget theme="light" />

      {status === 'error' && (
        <p className="text-tagline-3 text-red-500">{errorMsg}</p>
      )}

      <div className="inline-block pt-4 md:pt-6">
        <ButtonPrimary
          type="submit"
          disabled={status === 'loading'}
          className="w-full md:w-auto"
          textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
        >
          {status === 'loading' ? 'Sending...' : 'Send message'}
        </ButtonPrimary>
      </div>
    </form>
  );
};

export default ContactForm;
