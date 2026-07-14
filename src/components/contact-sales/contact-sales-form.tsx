'use client';

import { TurnstileWidget } from '@/src/components/shared/ui/turnstile-widget';
import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const inputCls =
  'w-full rounded-xl border border-[#e2e8f2] bg-white px-4 py-3 text-sm text-[#0c1452] placeholder:text-[#94a0bc] focus:border-[#7458e8] focus:outline-none transition-colors duration-200';

export function ContactSalesForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');

    const data = new FormData(event.currentTarget);

    const payload = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      company: data.get('company'),
      teamSize: data.get('teamSize'),
      planInterest: data.get('planInterest'),
      message: data.get('message'),
      'cf-turnstile-response': data.get('cf-turnstile-response'),
    };

    try {
      const res = await fetch('/api/contact-sales', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('success');
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
      <div className="space-y-3 py-12 text-center">
        <p className="text-heading-6 text-secondary">Enquiry received!</p>
        <p className="text-sm text-secondary/60">
          Our sales team will be in touch within 24 hours on business days.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-[#0c1452]">First name</label>
          <input type="text" name="firstName" placeholder="Sarah" className={inputCls} required />
        </div>
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-[#0c1452]">Last name</label>
          <input type="text" name="lastName" placeholder="Mitchell" className={inputCls} required />
        </div>
      </div>
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-[#0c1452]">Work email</label>
        <input type="email" name="email" placeholder="sarah@company.com" className={inputCls} required />
      </div>
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-[#0c1452]">Company name</label>
        <input type="text" name="company" placeholder="Acme Corp" className={inputCls} required />
      </div>
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-[#0c1452]">Team size</label>
        <select name="teamSize" className={inputCls}>
          <option value="">Select team size</option>
          <option value="2-10">2 to 10 people</option>
          <option value="11-50">11 to 50 people</option>
          <option value="51-200">51 to 200 people</option>
          <option value="201-1000">201 to 1000 people</option>
          <option value="1000+">Over 1000 people</option>
        </select>
      </div>
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-[#0c1452]">Plan interest</label>
        <select name="planInterest" className={inputCls}>
          <option value="">What are you interested in?</option>
          <option value="teams">Teams ($30/seat/month)</option>
          <option value="business">Business ($50/seat/month)</option>
          <option value="education">Education (institutional)</option>
          <option value="enterprise">Enterprise (custom)</option>
        </select>
      </div>
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-[#0c1452]">Anything else?</label>
        <textarea
          name="message"
          placeholder="Tell us about your use case, timeline, or any specific requirements..."
          className={`${inputCls} min-h-[100px] resize-none`}
        />
      </div>

      <TurnstileWidget theme="light" />

      {status === 'error' && (
        <p className="text-sm text-red-500">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-xl bg-[#000c60] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#7458e8] disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending...' : 'Send enquiry'}
      </button>
    </form>
  );
}
