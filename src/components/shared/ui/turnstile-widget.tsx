'use client';

import Script from 'next/script';

const SITEKEY = '0x4AAAAAAD13ABkFlVKSy2Z8';

interface TurnstileWidgetProps {
  theme?: 'light' | 'dark' | 'auto';
  className?: string;
}

export function TurnstileWidget({ theme = 'auto', className }: TurnstileWidgetProps) {
  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      />
      <div
        className={`cf-turnstile ${className ?? ''}`}
        data-sitekey={SITEKEY}
        data-action="turnstile-spin-v2"
        data-theme={theme}
      />
    </>
  );
}
