'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BadgePrimary } from '@/src/components/shared/ui/badge';

const SECTIONS = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'information-we-collect', label: 'Information We Collect' },
  { id: 'how-we-use', label: 'How We Use It' },
  { id: 'how-we-share', label: 'How We Share It' },
  { id: 'ai-data-practices', label: 'AI Data Practices' },
  { id: 'cookies', label: 'Cookies & Tracking' },
  { id: 'data-retention', label: 'Data Retention' },
  { id: 'your-rights', label: 'Your Rights & Choices' },
  { id: 'international-transfers', label: 'International Transfers' },
  { id: 'childrens-privacy', label: "Children's Privacy" },
  { id: 'security', label: 'Security' },
  { id: 'policy-changes', label: 'Policy Changes' },
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

export default function PrivacyPolicy() {
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
          <h1>Privacy Policy</h1>
          <p className="text-tagline-2 text-secondary/50">Last updated: 13 July 2026</p>
          <p className="text-tagline-2 text-secondary/60 max-w-[480px] mx-auto">
            We collect what we need to run Nexus AI. We never sell your data, and you stay in control at every step.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex gap-12 xl:gap-20 items-start">
          <SideNav active={activeSection} />

          {/* Content */}
          <div className="min-w-0 flex-1">

            <div className="service-details-markdown space-y-14">

              {/* ── 1. Introduction ── */}
              <section id="introduction" className="scroll-mt-28">
                <SectionHeading>Introduction</SectionHeading>
                <p>
                  Nexus AI is operated by <strong>Verbosec, Inc.</strong>, a corporation incorporated in the
                  State of Delaware, United States. This Privacy Policy explains how we collect, use, share and
                  protect personal information when you use Nexus AI across our website (mynexusai.com), iOS
                  app, Android app, Chrome Extension, and any other platform on which Nexus AI is available
                  (collectively, the &ldquo;Service&rdquo;).
                </p>
                <p>
                  By using the Service, you agree to the collection and use of information in accordance with
                  this policy. If you do not agree, please discontinue use of the Service.
                </p>
                <p>
                  For questions about this policy, contact us at{' '}
                  <a href="mailto:support@mynexusai.com" className="text-primary-500 hover:underline">
                    support@mynexusai.com
                  </a>.
                </p>
              </section>

              {/* ── 2. Information We Collect ── */}
              <section id="information-we-collect" className="scroll-mt-28">
                <SectionHeading>Information We Collect</SectionHeading>
                <p>We collect information in the following categories:</p>

                <p><strong>Account information.</strong> When you register, we collect your name, email
                address, and password (stored hashed). If you sign up via Google or Apple, we receive
                the name and email address associated with that account.</p>

                <p><strong>Content you create or provide.</strong> This includes chat messages, prompts and
                AI responses, documents and essays you write, images and media you generate, files you upload
                for AI File Chat, and any other content you produce or submit through the Service.</p>

                <p><strong>Usage and interaction data.</strong> We collect information about how you use the
                Service — features accessed, pages visited, time spent, clicks, searches, and error events.
                This helps us understand what&apos;s working and what needs improvement.</p>

                <p><strong>Device and technical data.</strong> We automatically receive your IP address,
                browser type and version, operating system, device identifiers, approximate location (derived
                from IP), and referral URLs when you access the Service.</p>

                <p><strong>Payment information.</strong> Payments are processed by third-party providers
                (such as Stripe). We do not store your full card number, CVV, or bank account details. We
                retain billing information such as your name, billing address, last four card digits, and
                transaction history for accounting and tax purposes.</p>

                <p><strong>Communications.</strong> If you contact our support team or submit feedback, we
                retain those messages to resolve your issue and improve our service.</p>
              </section>

              {/* ── 3. How We Use It ── */}
              <section id="how-we-use" className="scroll-mt-28">
                <SectionHeading>How We Use Your Information</SectionHeading>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide, operate, and maintain the Service across all platforms.</li>
                  <li>Process payments, manage subscriptions, and send receipts.</li>
                  <li>Personalise your experience — for example, remembering your preferences and AI Memory settings.</li>
                  <li>Detect and prevent fraud, abuse, and security incidents.</li>
                  <li>Send transactional messages such as password resets, billing alerts, and account notifications.</li>
                  <li>Send product news and feature announcements (you can unsubscribe at any time).</li>
                  <li>Analyse usage patterns to improve existing features and develop new ones.</li>
                  <li>Comply with legal obligations and enforce our{' '}
                    <Link href="/legal/terms" className="text-primary-500 hover:underline">Terms of Service</Link>{' '}
                    and{' '}
                    <Link href="/legal/usage-policy" className="text-primary-500 hover:underline">Usage Policy</Link>.
                  </li>
                  <li>Respond to legal requests from courts, regulators, or law enforcement where required.</li>
                </ul>
                <p>
                  We do not use your personal data for automated decision-making that produces legal or
                  similarly significant effects without human review.
                </p>
              </section>

              {/* ── 4. How We Share It ── */}
              <section id="how-we-share" className="scroll-mt-28">
                <SectionHeading>How We Share Your Information</SectionHeading>
                <p>We do not sell personal data. We may share it only in the following circumstances:</p>

                <p><strong>Service providers.</strong> We share data with trusted third parties that help us
                operate the Service — including cloud infrastructure providers, payment processors, email
                delivery services, and analytics platforms. These vendors are contractually bound to use data
                only to perform services on our behalf and to maintain appropriate security measures.</p>

                <p><strong>Business transfers.</strong> If Verbosec is involved in a merger, acquisition,
                financing, or sale of assets, your information may be transferred as part of that transaction.
                We will notify you before your data is subject to a different privacy policy.</p>

                <p><strong>Legal requirements.</strong> We may disclose your data when required to do so by
                law, court order, or valid government request, or when we believe in good faith that disclosure
                is necessary to protect the rights, property, or safety of Verbosec, our users, or the public.</p>

                <p><strong>With your consent.</strong> We may share your data for any other purpose with
                your explicit prior consent.</p>

                <p><strong>Aggregated or anonymised data.</strong> We may share anonymised, aggregated
                statistics (e.g. &ldquo;500,000 active users&rdquo;) that cannot reasonably identify any
                individual.</p>
              </section>

              {/* ── 5. AI Data Practices ── */}
              <section id="ai-data-practices" className="scroll-mt-28">
                <SectionHeading>AI-Specific Data Practices</SectionHeading>
                <p>
                  Because Nexus AI is an AI product, we want to be especially transparent about how your
                  interactions with the AI are handled.
                </p>

                <p><strong>Training opt-out (default off).</strong> Your chat messages, prompts, and AI
                responses are <em>not</em> used to train or fine-tune AI models by default. You can
                choose to opt in to training usage in your account settings. Opting in helps us improve
                the quality and relevance of Nexus AI over time.</p>

                <p><strong>Uploaded files.</strong> Files you upload for AI File Chat are processed
                exclusively to generate your requested response. They are stored encrypted and are not
                shared with other users. You can delete uploaded files at any time from your account.</p>

                <p><strong>AI Memory.</strong> If you use the Memory feature, Nexus AI stores
                information you instruct it to remember (such as preferences, facts about your projects,
                or recurring instructions). Memory is scoped to your account or to specific folders
                depending on your settings. You can view, edit, or clear your Memory at any time. Memory
                data is not used to train models.</p>

                <p>
                  For a detailed technical explanation of how we handle your data within the AI pipeline,
                  see our Help Centre article:{' '}
                  <Link href="/help/how-we-handle-your-data" className="text-primary-500 hover:underline">
                    How we handle your data
                  </Link>.
                </p>
              </section>

              {/* ── 6. Cookies ── */}
              <section id="cookies" className="scroll-mt-28">
                <SectionHeading>Cookies &amp; Tracking</SectionHeading>
                <p>We use cookies and similar tracking technologies to operate and improve the Service:</p>
                <ul>
                  <li><strong>Essential cookies</strong> — required for login sessions, security tokens, and core functionality. These cannot be disabled.</li>
                  <li><strong>Preference cookies</strong> — remember your settings, such as language and theme, so you don&apos;t have to re-enter them each visit.</li>
                  <li><strong>Analytics cookies</strong> — help us understand how users navigate the Service, which pages are most visited, and where errors occur. We use this to make the product better.</li>
                  <li><strong>Marketing cookies</strong> — used to measure the effectiveness of our advertising campaigns. We only serve ads on our own site and third-party platforms where you have opted in to targeting.</li>
                </ul>
                <p>
                  You can adjust your cookie preferences at any time by clicking{' '}
                  <strong>Your Privacy Choices</strong> in the footer of our website. You can also
                  control cookies through your browser settings, though disabling essential cookies
                  may prevent some features from working correctly.
                </p>
              </section>

              {/* ── 7. Data Retention ── */}
              <section id="data-retention" className="scroll-mt-28">
                <SectionHeading>Data Retention</SectionHeading>
                <p>We retain your data for as long as your account is active and for a reasonable period
                afterwards to comply with our legal obligations.</p>
                <ul>
                  <li><strong>Account and content data</strong> — retained while your account is active. After deletion, we retain it for up to 90 days in our backup systems before permanent removal.</li>
                  <li><strong>Billing records</strong> — retained for up to 7 years to meet accounting, tax, and regulatory requirements.</li>
                  <li><strong>Support communications</strong> — retained for up to 3 years to help us resolve recurring issues and improve support quality.</li>
                  <li><strong>Aggregated analytics</strong> — retained indefinitely in anonymised form, as no individual can be identified from this data.</li>
                </ul>
                <p>
                  To delete your account and associated data before the retention period ends, follow the
                  steps in our Help Centre:{' '}
                  <Link href="/help/delete-your-account" className="text-primary-500 hover:underline">
                    Delete your account
                  </Link>.
                  You can also contact us at{' '}
                  <a href="mailto:support@mynexusai.com" className="text-primary-500 hover:underline">
                    support@mynexusai.com
                  </a>{' '}
                  to request early deletion.
                </p>
              </section>

              {/* ── 8. Your Rights ── */}
              <section id="your-rights" className="scroll-mt-28">
                <SectionHeading>Your Rights &amp; Choices</SectionHeading>
                <p>You have the following rights regarding your personal data:</p>
                <ul>
                  <li><strong>Access</strong> — request a copy of the personal data we hold about you.</li>
                  <li><strong>Correction</strong> — ask us to correct inaccurate or incomplete information.</li>
                  <li><strong>Deletion</strong> — request that we delete your personal data, subject to our retention obligations.</li>
                  <li><strong>Export / Portability</strong> — download your content and data in a machine-readable format from your account settings.</li>
                  <li><strong>Marketing opt-out</strong> — unsubscribe from promotional emails at any time via the unsubscribe link in our emails or in your account notification settings.</li>
                </ul>

                <p><strong>EEA and UK residents (GDPR).</strong> In addition to the rights above, you have
                the right to restrict or object to certain processing, withdraw consent where processing
                is consent-based, and lodge a complaint with your local data protection supervisory
                authority.</p>

                <p><strong>California residents (CCPA / CPRA).</strong> You have the right to know what
                categories of personal information we collect and why, the right to delete your information,
                the right to correct inaccurate information, and the right to opt out of the &ldquo;sale&rdquo;
                or &ldquo;sharing&rdquo; of personal information (we do not sell or share personal data for
                cross-context behavioural advertising).</p>

                <p>
                  To exercise any of these rights, email us at{' '}
                  <a href="mailto:support@mynexusai.com" className="text-primary-500 hover:underline">
                    support@mynexusai.com
                  </a>{' '}
                  with the subject line &ldquo;Privacy Request.&rdquo; We will respond within 30 days (or
                  within the timeframe required by applicable law).
                </p>
              </section>

              {/* ── 9. International Transfers ── */}
              <section id="international-transfers" className="scroll-mt-28">
                <SectionHeading>International Transfers</SectionHeading>
                <p>
                  Verbosec, Inc. is based in the United States. If you are accessing the Service from
                  outside the US — including from the European Economic Area (EEA), the United Kingdom, or
                  elsewhere — your personal data will be transferred to and processed in the United States.
                </p>
                <p>
                  For transfers from the EEA or UK to the United States, we rely on the European
                  Commission&apos;s Standard Contractual Clauses (SCCs) and, where applicable, adequacy
                  decisions. These safeguards ensure that your data receives protection equivalent to that
                  required under GDPR.
                </p>
                <p>
                  For more information about the safeguards we use, or to request a copy of the relevant
                  documentation, contact us at{' '}
                  <a href="mailto:info@verbosec.com" className="text-primary-500 hover:underline">
                    info@verbosec.com
                  </a>.
                </p>
              </section>

              {/* ── 10. Children's Privacy ── */}
              <section id="childrens-privacy" className="scroll-mt-28">
                <SectionHeading>Children&apos;s Privacy</SectionHeading>
                <p>
                  Nexus AI is not directed at children under 13 years of age, and we do not knowingly collect
                  personal information from anyone under 13. If you are between 13 and 18, you may only use
                  the Service with parental or guardian consent.
                </p>
                <p>
                  If we learn that we have inadvertently collected personal information from a child under 13,
                  we will delete it promptly. If you believe we may have information from or about a child
                  under 13, please contact us at{' '}
                  <a href="mailto:support@mynexusai.com" className="text-primary-500 hover:underline">
                    support@mynexusai.com
                  </a>.
                </p>
              </section>

              {/* ── 11. Security ── */}
              <section id="security" className="scroll-mt-28">
                <SectionHeading>Security</SectionHeading>
                <p>
                  We take the security of your personal data seriously and implement a range of technical
                  and organisational measures to protect it, including:
                </p>
                <ul>
                  <li>Encryption of data at rest and in transit using industry-standard protocols (AES-256, TLS 1.2+).</li>
                  <li>Strict access controls — Verbosec employees can only access user data on a need-to-know basis, and such access is logged.</li>
                  <li>Regular security testing and vulnerability assessments of our infrastructure and applications.</li>
                  <li>Incident response procedures to detect, contain, and notify users of any data breach.</li>
                </ul>
                <p>
                  No method of electronic storage or transmission is 100% secure. If you suspect a security
                  vulnerability or believe your account has been compromised, please contact us immediately
                  at{' '}
                  <a href="mailto:support@mynexusai.com" className="text-primary-500 hover:underline">
                    support@mynexusai.com
                  </a>.
                </p>
              </section>

              {/* ── 12. Policy Changes ── */}
              <section id="policy-changes" className="scroll-mt-28">
                <SectionHeading>Changes to This Policy</SectionHeading>
                <p>
                  We may update this Privacy Policy from time to time. When we make material changes, we
                  will notify you by email or via a prominent notice within the Service at least 14 days
                  before the changes take effect.
                </p>
                <p>
                  Your continued use of the Service after the effective date of any update constitutes
                  your acceptance of the revised policy. If you do not agree with the changes, you may
                  delete your account before they take effect.
                </p>
                <p>
                  The &ldquo;last updated&rdquo; date at the top of this page reflects when the policy
                  was most recently revised. We encourage you to review this page periodically.
                </p>
              </section>

              {/* ── 13. Contact ── */}
              <section id="contact" className="scroll-mt-28">
                <SectionHeading>Contact Us</SectionHeading>
                <p>
                  If you have questions, concerns, or requests regarding this Privacy Policy or your personal
                  data, please contact us:
                </p>
                <ul>
                  <li>
                    <strong>Email (support):</strong>{' '}
                    <a href="mailto:support@mynexusai.com" className="text-primary-500 hover:underline">
                      support@mynexusai.com
                    </a>
                  </li>
                  <li>
                    <strong>Email (general / legal):</strong>{' '}
                    <a href="mailto:info@verbosec.com" className="text-primary-500 hover:underline">
                      info@verbosec.com
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
                  EEA and UK residents who are not satisfied with our response have the right to lodge a
                  complaint with their local data protection supervisory authority. In the UK this is the
                  Information Commissioner&apos;s Office (ICO); in Ireland it is the Data Protection
                  Commission (DPC).
                </p>
              </section>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
