'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BadgePrimary } from '@/src/components/shared/ui/badge';

const SECTIONS = [
  { id: 'our-policy', label: 'Our Policy' },
  { id: 'cancellations', label: 'Cancellations' },
  { id: 'billing-errors', label: 'Billing Errors' },
  { id: 'changes', label: 'Changes to This Policy' },
  { id: 'contact', label: 'Contact Us' },
];

function SideNav({ active }: { active: string }) {
  return (
    <aside className="hidden lg:block w-[220px] xl:w-[240px] shrink-0">
      <div className="sticky top-28">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-secondary/35">
          On this page
        </p>
        <nav>
          <ul className="space-y-0.5">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`group flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] transition-all duration-150 ${
                    active === s.id
                      ? 'bg-secondary/[0.06] font-medium text-secondary'
                      : 'text-secondary/45 hover:bg-secondary/[0.04] hover:text-secondary/80'
                  }`}
                >
                  <span
                    className={`h-4 w-[2px] rounded-full transition-all duration-150 shrink-0 ${
                      active === s.id ? 'bg-secondary' : 'bg-transparent group-hover:bg-secondary/20'
                    }`}
                  />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-secondary/40">
      {children}
    </p>
  );
}

export default function RefundPolicy() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);

  useEffect(() => {
    const intersecting = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            intersecting.add(entry.target.id);
          } else {
            intersecting.delete(entry.target.id);
          }
        }
        const first = SECTIONS.find((s) => intersecting.has(s.id));
        if (first) setActiveSection(first.id);
      },
      { rootMargin: '0px 0px -60% 0px', threshold: 0 }
    );

    for (const { id } of SECTIONS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-20 pb-20 md:pt-25 md:pb-25 lg:pt-39 lg:pb-39">
      <div className="main-container">

        {/* Page header */}
        <div className="mx-auto mb-14 max-w-[640px] space-y-4 text-center md:mb-20">
          <div className="flex justify-center">
            <BadgePrimary>Legal</BadgePrimary>
          </div>
          <h1>Refund Policy</h1>
          <p className="text-tagline-2 text-secondary/50">Last updated: 13 July 2026</p>
        </div>

        {/* Two-column layout */}
        <div className="flex gap-12 xl:gap-20 items-start">
          <SideNav active={activeSection} />

          {/* Content */}
          <div className="min-w-0 flex-1">
            <div className="service-details-markdown space-y-14">

              <section id="our-policy" className="scroll-mt-28">
                <SectionHeading>Our Policy</SectionHeading>
                <p>
                  All payments for Nexus AI subscriptions — monthly or annual — are <strong>non-refundable</strong>.
                  Once a subscription is purchased, we do not issue refunds or credits for the current billing
                  period, including for partially used periods, unused features, or dissatisfaction with the
                  Service.
                </p>
                <p>
                  This applies to all paid plans, including Premium and Ultimate, whether billed monthly or
                  annually. By completing a purchase, you acknowledge and agree to this policy.
                </p>
                <p>
                  If you are unsure whether Nexus AI is right for you, we encourage you to try our{' '}
                  <Link href="/pricing" className="text-primary-500 hover:underline">Free plan</Link> before
                  upgrading. The free tier gives you full access to the core experience with no credit card
                  required.
                </p>
              </section>

              <section id="cancellations" className="scroll-mt-28">
                <SectionHeading>Cancellations</SectionHeading>
                <p>
                  You may cancel your subscription at any time. Cancellation stops future charges — it does
                  not entitle you to a refund for the current period. When you cancel:
                </p>
                <ul>
                  <li>Your access to paid features continues until the end of your current billing period.</li>
                  <li>At the end of the period, your account reverts to the Free plan automatically.</li>
                  <li>Your data — chats, files, Artifacts, and Skills — is not deleted and remains accessible.</li>
                  <li>No further charges are made after cancellation.</li>
                </ul>
                <p>
                  To cancel, go to <strong>Settings → Billing → Cancel subscription</strong> in your account.
                  For step-by-step instructions, see our Help Centre article:{' '}
                  <Link href="/help/cancel-subscription" className="text-primary-500 hover:underline">
                    Cancel your subscription
                  </Link>.
                </p>
              </section>

              <section id="billing-errors" className="scroll-mt-28">
                <SectionHeading>Billing Errors</SectionHeading>
                <p>
                  We make exceptions for genuine billing errors. If you believe you were charged incorrectly —
                  for example, as a result of a duplicate charge, a technical error on our end, or an
                  unauthorised transaction — please contact our support team within <strong>14 days</strong> of
                  the charge:
                </p>
                <ul>
                  <li>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:support@mynexusai.com" className="text-primary-500 hover:underline">
                      support@mynexusai.com
                    </a>
                  </li>
                </ul>
                <p>
                  Include your account email address and a brief description of the issue. We will investigate
                  and, where an error is confirmed, issue a full refund to your original payment method within
                  5&ndash;10 business days. Refunds are issued in the same currency as the original charge.
                </p>
                <p>
                  Billing disputes raised directly with your bank or card issuer (chargebacks) may affect your
                  account standing. We strongly encourage you to contact us first so we can resolve the issue
                  quickly.
                </p>
              </section>

              <section id="changes" className="scroll-mt-28">
                <SectionHeading>Changes to This Policy</SectionHeading>
                <p>
                  We may update this policy from time to time. Changes will be posted on this page with an
                  updated date. Continued use of the Service after changes take effect constitutes acceptance
                  of the revised policy.
                </p>
              </section>

              <section id="contact" className="scroll-mt-28">
                <SectionHeading>Contact Us</SectionHeading>
                <p>For billing questions or to report an error, reach us at:</p>
                <ul>
                  <li>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:support@mynexusai.com" className="text-primary-500 hover:underline">
                      support@mynexusai.com
                    </a>
                  </li>
                  <li>
                    <strong>Help Centre:</strong>{' '}
                    <Link href="/help" className="text-primary-500 hover:underline">
                      help.nexusai.com
                    </Link>
                  </li>
                  <li><strong>Company:</strong> Verbosec, Inc., a Delaware corporation.</li>
                </ul>
                <p>
                  For information on cancelling your plan, see our{' '}
                  <Link href="/legal/terms" className="text-primary-500 hover:underline">Terms of Service</Link>.
                </p>
              </section>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
