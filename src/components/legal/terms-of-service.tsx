'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BadgePrimary } from '@/src/components/shared/ui/badge';

const SECTIONS = [
  { id: 'about', label: 'About Nexus AI' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'account', label: 'Account Registration' },
  { id: 'plans', label: 'Free & Paid Plans' },
  { id: 'billing', label: 'Subscriptions & Billing' },
  { id: 'cancellations', label: 'Cancellations & Refunds' },
  { id: 'acceptable-use', label: 'Acceptable Use' },
  { id: 'your-content', label: 'Content You Create' },
  { id: 'our-ip', label: 'Our Intellectual Property' },
  { id: 'privacy', label: 'Privacy & Cookies' },
  { id: 'third-party', label: 'Third-Party Services' },
  { id: 'disclaimers', label: 'Disclaimers' },
  { id: 'liability', label: 'Limitation of Liability' },
  { id: 'indemnification', label: 'Indemnification' },
  { id: 'changes', label: 'Policy Changes' },
  { id: 'termination', label: 'Termination' },
  { id: 'governing-law', label: 'Governing Law' },
  { id: 'general', label: 'General' },
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
          <ul
            className="space-y-0.5 overflow-y-auto pr-1"
            style={{ maxHeight: 'calc(100vh - 9rem)' }}
          >
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

export default function TermsOfService() {
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
          <h1>Terms of Service</h1>
          <p className="text-tagline-2 text-secondary/50">Last updated: 13 July 2026</p>
        </div>

        {/* Two-column layout */}
        <div className="flex gap-12 xl:gap-20 items-start">
          <SideNav active={activeSection} />

          {/* Content */}
          <div className="min-w-0 flex-1">

            <div className="service-details-markdown space-y-14">

              <section id="about" className="scroll-mt-28">
                <SectionHeading>1. About Verbosec and Nexus AI</SectionHeading>
                <p>
                  Nexus AI (&ldquo;the Service&rdquo;) is an AI-powered workspace for writing, research, design
                  and productivity. The Service is operated by <strong>Verbosec, Inc.</strong>, a corporation
                  incorporated in the State of Delaware, United States (&ldquo;Verbosec&rdquo;, &ldquo;we&rdquo;,
                  &ldquo;us&rdquo; or &ldquo;our&rdquo;). These Terms of Service (&ldquo;Terms&rdquo;) govern your
                  access to and use of Nexus AI across all platforms and surfaces on which it is made available,
                  including:
                </p>
                <ul>
                  <li>Our website at <strong>mynexusai.com</strong> and any associated subdomains.</li>
                  <li>The <strong>Nexus AI iOS app</strong> available on the Apple App Store.</li>
                  <li>The <strong>Nexus AI Android app</strong> available on the Google Play Store.</li>
                  <li>The <strong>Nexus AI Chrome Extension</strong> available on the Chrome Web Store, and any other browser extensions we publish.</li>
                  <li>Any desktop applications, API access, and other products or services we offer under the Nexus AI brand.</li>
                </ul>
                <p>
                  All of the above are collectively referred to in these Terms as the &ldquo;Service.&rdquo; By
                  downloading, installing or otherwise using any part of the Service you agree to be bound by
                  these Terms and our{' '}
                  <Link href="/legal/privacy" className="text-primary-500 hover:underline">Privacy Policy</Link>.
                  If you are using the Service on behalf of an organisation, you represent that you have authority
                  to bind that organisation to these Terms.
                </p>
                <p>
                  Where you access the Service through a third-party platform (such as the Apple App Store or Google
                  Play Store), additional terms imposed by that platform may also apply alongside these Terms. In the
                  event of a conflict between those platform terms and these Terms, these Terms will govern to the
                  extent permitted by the relevant platform&apos;s policies.
                </p>
              </section>

              <section id="eligibility" className="scroll-mt-28">
                <SectionHeading>2. Eligibility</SectionHeading>
                <p>
                  You must be at least 13 years old to use Nexus AI. If you are under 18, you may only use the
                  Service with the consent and supervision of a parent or legal guardian who agrees to these Terms
                  on your behalf. By using the Service, you represent and warrant that you meet these age
                  requirements and have the legal capacity to enter into a binding agreement.
                </p>
                <p>
                  The Service is not available where prohibited by applicable law. You are responsible for
                  ensuring that your use of the Service complies with the laws of your jurisdiction.
                </p>
              </section>

              <section id="account" className="scroll-mt-28">
                <SectionHeading>3. Account Registration</SectionHeading>
                <p>
                  To access most features of the Service you must create an account. When you register you agree to
                  provide accurate, current and complete information and to keep it up to date. You are responsible
                  for maintaining the confidentiality of your login credentials and for all activity that occurs
                  under your account.
                </p>
                <p>
                  You must notify us immediately at{' '}
                  <a href="mailto:support@mynexusai.com" className="text-primary-500 hover:underline">
                    support@mynexusai.com
                  </a>{' '}
                  if you become aware of any unauthorised access to or use of your account. We are not liable for
                  any loss or damage arising from your failure to keep your credentials secure.
                </p>
                <p>
                  You may not create an account on behalf of another person without their permission, or create
                  multiple accounts to circumvent restrictions applied to your account.
                </p>
              </section>

              <section id="plans" className="scroll-mt-28">
                <SectionHeading>4. Free and Paid Plans</SectionHeading>
                <p>
                  Nexus AI offers both a free tier and paid subscription plans (&ldquo;Premium&rdquo; and
                  &ldquo;Ultimate&rdquo;). The features available on each plan are described on our{' '}
                  <Link href="/pricing" className="text-primary-500 hover:underline">Pricing page</Link>.
                  We may change the features included in any plan with reasonable notice.
                </p>
                <p>
                  Free-tier usage is subject to usage limits that we may adjust at any time. Exceeding those limits
                  may result in temporary restrictions until your usage cycle resets.
                </p>
              </section>

              <section id="billing" className="scroll-mt-28">
                <SectionHeading>5. Subscriptions and Billing</SectionHeading>
                <p>
                  Paid subscriptions are billed in advance on a monthly or annual basis, depending on the plan you
                  select at checkout. By providing a payment method, you authorise us to charge the applicable fees
                  at the start of each billing period. All prices are listed exclusive of applicable taxes, which
                  will be added at checkout where required by law.
                </p>
                <p>
                  If a payment fails, we will make reasonable attempts to notify you and retry the charge. Continued
                  non-payment may result in suspension or downgrade of your account to the free tier.
                </p>
                <p>
                  We may change subscription prices with at least 30 days&apos; notice. Your continued use of a
                  paid plan after the price change takes effect constitutes acceptance of the new price.
                </p>
              </section>

              <section id="cancellations" className="scroll-mt-28">
                <SectionHeading>6. Cancellations and Refunds</SectionHeading>
                <p>
                  You may cancel your subscription at any time. Cancellation takes effect at the end of your
                  current billing period and you will retain access to paid features until that date. To cancel,
                  visit your account settings or follow the steps in our Help Centre article on{' '}
                  <Link href="/help/cancel-subscription" className="text-primary-500 hover:underline">
                    cancelling your subscription
                  </Link>.
                </p>
                <p>
                  All subscription payments are non-refundable. Cancelling stops future charges but does not
                  entitle you to a refund for the current or any previous billing period. The sole exception is
                  a confirmed billing error on our part. For full details, see our{' '}
                  <Link href="/legal/refunds" className="text-primary-500 hover:underline">
                    Refund Policy
                  </Link>.
                  If you have questions about a charge, contact us at{' '}
                  <a href="mailto:support@mynexusai.com" className="text-primary-500 hover:underline">
                    support@mynexusai.com
                  </a>.
                </p>
              </section>

              <section id="acceptable-use" className="scroll-mt-28">
                <SectionHeading>7. Acceptable Use</SectionHeading>
                <p>
                  You agree to use Nexus AI only for lawful purposes and in accordance with these Terms and our{' '}
                  <Link href="/legal/usage-policy" className="text-primary-500 hover:underline">
                    Usage Policy
                  </Link>. You must not use the Service to:
                </p>
                <ul>
                  <li>Generate or distribute content that is illegal, harmful, abusive, defamatory, or that infringes the rights of any third party.</li>
                  <li>Produce, distribute or facilitate child sexual abuse material or content that exploits minors in any way.</li>
                  <li>Impersonate any person or entity, or falsely represent your affiliation with any person or entity.</li>
                  <li>Conduct automated or bulk access to the Service outside of our designated Developer Platform or API.</li>
                  <li>Attempt to reverse-engineer, decompile, or derive source code from any part of the Service.</li>
                  <li>Introduce viruses, malware or other harmful code into the Service or use it to attack third-party systems.</li>
                  <li>Scrape, crawl or otherwise harvest data from the Service without our prior written consent.</li>
                  <li>Circumvent any access controls, rate limits or usage restrictions applied to your account.</li>
                </ul>
                <p>
                  We reserve the right to investigate suspected violations and to suspend or terminate accounts
                  where we determine, in our reasonable judgment, that these Terms or our Usage Policy have been
                  breached.
                </p>
              </section>

              <section id="your-content" className="scroll-mt-28">
                <SectionHeading>8. Content You Create</SectionHeading>
                <p>
                  You retain ownership of all content you create using Nexus AI, including documents, essays,
                  images, audio, video, code and other output (&ldquo;Your Content&rdquo;). We do not claim
                  any ownership rights over Your Content.
                </p>
                <p>
                  By using the Service you grant Verbosec a limited, non-exclusive, royalty-free licence to
                  host, process and transmit Your Content solely to the extent necessary to provide the Service
                  to you. This licence does not extend to using Your Content to train AI models unless you
                  expressly opt in to such use.
                </p>
                <p>
                  You are solely responsible for the accuracy, legality and appropriateness of Your Content.
                  You represent and warrant that you have all rights necessary to submit any content you upload
                  to the Service, and that doing so does not infringe any third-party intellectual property,
                  privacy or other rights.
                </p>
              </section>

              <section id="our-ip" className="scroll-mt-28">
                <SectionHeading>9. Our Intellectual Property</SectionHeading>
                <p>
                  All rights in the Nexus AI platform, including its design, software, trademarks, logos and
                  underlying technology, are owned by or licensed to Verbosec, Inc. Nothing in these Terms
                  transfers any ownership of those rights to you. You may not use our trademarks or brand
                  assets without our prior written consent.
                </p>
                <p>
                  Feedback, suggestions or ideas you share with us about the Service may be used by Verbosec
                  without restriction or compensation to you.
                </p>
              </section>

              <section id="privacy" className="scroll-mt-28">
                <SectionHeading>10. Privacy and Cookies</SectionHeading>
                <p>
                  Our collection and use of personal data is governed by our{' '}
                  <Link href="/legal/privacy" className="text-primary-500 hover:underline">
                    Privacy Policy
                  </Link>, which is incorporated into these Terms by reference. By using the Service you agree
                  to the practices described in that policy.
                </p>
                <p>
                  We use cookies and similar technologies to operate and improve the Service. You can adjust
                  your cookie preferences at any time by clicking &ldquo;Your Privacy Choices&rdquo; in the
                  footer of our website.
                </p>
              </section>

              <section id="third-party" className="scroll-mt-28">
                <SectionHeading>11. Third-Party Services and Links</SectionHeading>
                <p>
                  The Service may integrate with or link to third-party services, websites or content that are
                  not operated by Verbosec. We have no control over, and assume no responsibility for, the
                  content, privacy policies or practices of any third-party services. We encourage you to
                  review the terms and privacy policies of any third-party services you access through Nexus AI.
                </p>
              </section>

              <section id="disclaimers" className="scroll-mt-28">
                <SectionHeading>12. Disclaimers</SectionHeading>
                <p>
                  THE SERVICE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS,
                  WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>
                <p>
                  AI-generated content may be inaccurate, incomplete or outdated. You are responsible for
                  reviewing and verifying any output before relying on it for professional, legal, medical,
                  financial or other important decisions. Nexus AI is a productivity tool, not a substitute
                  for professional advice.
                </p>
                <p>
                  We do not warrant that the Service will be uninterrupted, error-free or secure at all times,
                  or that any defects will be corrected. We may suspend access to the Service for maintenance,
                  updates or circumstances beyond our reasonable control.
                </p>
              </section>

              <section id="liability" className="scroll-mt-28">
                <SectionHeading>13. Limitation of Liability</SectionHeading>
                <p>
                  TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, VERBOSEC, INC. AND ITS OFFICERS,
                  DIRECTORS, EMPLOYEES, AGENTS AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT,
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE,
                  DATA OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE
                  THE SERVICE.
                </p>
                <p>
                  IN NO EVENT SHALL OUR TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR
                  RELATING TO THESE TERMS OR THE SERVICE EXCEED THE GREATER OF (A) THE TOTAL FEES PAID BY
                  YOU TO VERBOSEC IN THE TWELVE MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED US DOLLARS
                  (USD $100).
                </p>
                <p>
                  Some jurisdictions do not allow the exclusion or limitation of certain types of liability.
                  In such jurisdictions, our liability is limited to the fullest extent permitted by applicable
                  law.
                </p>
              </section>

              <section id="indemnification" className="scroll-mt-28">
                <SectionHeading>14. Indemnification</SectionHeading>
                <p>
                  You agree to defend, indemnify and hold harmless Verbosec, Inc. and its officers, directors,
                  employees, agents and affiliates from and against any claims, liabilities, damages, losses and
                  expenses, including reasonable legal fees, arising out of or in connection with: (a) your use
                  of the Service; (b) Your Content; (c) your violation of these Terms; or (d) your infringement
                  of any third-party rights.
                </p>
              </section>

              <section id="changes" className="scroll-mt-28">
                <SectionHeading>15. Changes to These Terms</SectionHeading>
                <p>
                  We may update these Terms from time to time. When we make material changes, we will notify
                  you by email or by posting a notice within the Service at least 14 days before the changes
                  take effect. Your continued use of the Service after the effective date of any update
                  constitutes your acceptance of the revised Terms.
                </p>
                <p>
                  If you do not agree to the updated Terms, you must stop using the Service before they take
                  effect and may cancel your subscription in accordance with Section 6 above.
                </p>
              </section>

              <section id="termination" className="scroll-mt-28">
                <SectionHeading>16. Termination</SectionHeading>
                <p>
                  You may close your account at any time by following the steps in our Help Centre article on{' '}
                  <Link href="/help/delete-your-account" className="text-primary-500 hover:underline">
                    deleting your account
                  </Link>.
                </p>
                <p>
                  We may suspend or terminate your access to the Service, with or without notice, if we
                  reasonably believe you have violated these Terms, our Usage Policy, or any applicable law.
                  On termination, your right to use the Service ceases immediately. Provisions of these Terms
                  that by their nature should survive termination — including Sections 8, 9, 12, 13, 14, 17
                  and 18 — will continue to apply.
                </p>
              </section>

              <section id="governing-law" className="scroll-mt-28">
                <SectionHeading>17. Governing Law and Dispute Resolution</SectionHeading>
                <p>
                  These Terms are governed by and construed in accordance with the laws of the State of
                  Delaware, United States, without regard to its conflict-of-law provisions. You agree that
                  any dispute arising out of or relating to these Terms or the Service shall be resolved
                  exclusively in the state or federal courts located in Delaware, and you consent to the
                  personal jurisdiction of those courts.
                </p>
                <p>
                  Before initiating any formal legal proceedings, we both agree to attempt to resolve disputes
                  in good faith through direct negotiation for at least 30 days.
                </p>
              </section>

              <section id="general" className="scroll-mt-28">
                <SectionHeading>18. General</SectionHeading>
                <p>
                  These Terms, together with our Privacy Policy, Refund Policy and Usage Policy, constitute
                  the entire agreement between you and Verbosec regarding the Service and supersede all prior
                  agreements and understandings. If any provision of these Terms is found to be unenforceable,
                  the remaining provisions will continue in full force and effect. Our failure to enforce any
                  right or provision of these Terms does not constitute a waiver of that right or provision.
                  You may not assign any of your rights under these Terms without our prior written consent.
                  We may assign our rights and obligations without restriction.
                </p>
              </section>

              <section id="contact" className="scroll-mt-28">
                <SectionHeading>19. Contact Us</SectionHeading>
                <p>For questions about these Terms or the Service, please contact us at:</p>
                <ul>
                  <li>
                    <strong>Email (support):</strong>{' '}
                    <a href="mailto:support@mynexusai.com" className="text-primary-500 hover:underline">
                      support@mynexusai.com
                    </a>
                  </li>
                  <li>
                    <strong>Email (general):</strong>{' '}
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
                  <li>
                    <strong>Company:</strong> Verbosec, Inc., a Delaware corporation.
                  </li>
                </ul>
              </section>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
