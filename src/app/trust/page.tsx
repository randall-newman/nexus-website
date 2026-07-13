import chatbotHeroImg from '@/public/images/opai-img-138.jpg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { CheckIcon } from '@/src/components/shared/icon';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { generateMetadata } from '@/src/utils/generateMetaData';
import {
  Activity,
  Database,
  Eye,
  FileText,
  Globe,
  Key,
  Lock,
  Mail,
  Server,
  Shield,
  ShieldCheck,
  Trash2,
  UserCheck,
  Users,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'Trust & Safety | Nexus AI',
    'How Nexus AI encrypts your data, complies with GDPR, protects your privacy, and earns SOC 2 Type II certification. Your data is never used to train AI models.',
    '/trust'
  ),
};

/* ─── Data ──────────────────────────────────────────────── */

const certBadges = [
  { label: 'SOC 2', sub: 'Type II Certified' },
  { label: 'GDPR', sub: 'Compliant by default' },
  { label: 'AES-256', sub: 'Encryption at rest' },
  { label: 'TLS 1.3', sub: 'Encryption in transit' },
  { label: '0', sub: 'Training on your data' },
  { label: 'ISO 27001', sub: 'In progress' },
];

const architecture = [
  {
    icon: Lock,
    domain: 'Data Protection',
    items: [
      'AES-256 encryption at rest for all stored data',
      'TLS 1.3 for all data in transit — older versions rejected',
      'HSM-managed encryption keys, rotated annually',
      'Per-object encryption for files, documents and recordings',
    ],
  },
  {
    icon: ShieldCheck,
    domain: 'Application Security',
    items: [
      'Annual third-party penetration testing',
      'Secure development lifecycle (SDLC) with mandatory security review',
      'All engineers complete secure coding training annually',
      'Dependency scanning on every build via automated tooling',
    ],
  },
  {
    icon: Server,
    domain: 'Infrastructure',
    items: [
      'Hosted on AWS with multi-availability-zone redundancy',
      'Anti-DDoS protection at the network edge',
      'Firewalls and IDS/IPS systems on all production subnets',
      'Business continuity and disaster recovery plans tested quarterly',
    ],
  },
  {
    icon: UserCheck,
    domain: 'Access Management',
    items: [
      'Least-privilege access enforced across all internal systems',
      'MFA required for all employee and admin access',
      'BYOD policy with mandatory device locking and remote-wipe',
      'Access reviews conducted quarterly — unused access revoked',
    ],
  },
  {
    icon: Eye,
    domain: 'Monitoring & Response',
    items: [
      'Security Operations Centre (SOC) with 24/7 alerting',
      'Data Loss Prevention (DLP) controls on all production data',
      'Incident response plan with defined SLAs by severity',
      'All security events logged and retained for 12 months',
    ],
  },
  {
    icon: Users,
    domain: 'Personnel & Governance',
    items: [
      'Background checks on all employees prior to hire',
      'Security awareness training at onboarding and annually',
      'Formal information security policy reviewed annually',
      'Risk management standard with documented risk register',
    ],
  },
];

const privacyItems = [
  'Nexus AI acts as data processor. You remain the data controller.',
  'A signed Data Processing Agreement (DPA) is available to all customers. Enterprise customers receive it as part of their contract.',
  'Standard Contractual Clauses (SCCs) govern all personal data transfers outside the EEA.',
  'Data Subject Access, Correction, and Deletion requests are honoured within 30 days.',
  'Request a copy of all personal data we hold at any time by emailing privacy@mynexusai.com.',
];

const trainingItems = [
  'Your data is never used to train Nexus AI models — on any plan, including free.',
  'Prompts, documents, generated outputs, and meeting transcripts are excluded from all training datasets.',
  'Aggregate anonymised usage metrics (e.g. feature adoption rates) may be used to improve the product. These contain no user content.',
  'This policy is contractually binding for Enterprise customers and reflected in our DPA.',
];

const deletionItems = [
  'Delete individual files, documents or meeting notes at any time from your workspace.',
  'Account deletion removes all stored content and personal data within 30 days.',
  'Backups containing your data are purged within 90 days of the original deletion.',
  'Meeting recordings are deleted from processing servers within 24 hours of transcription.',
  'To request immediate deletion, contact support@mynexusai.com.',
];

const dataProcessingItems = [
  'Your content is processed on our own infrastructure. Raw documents and messages are not sent to third-party AI providers without your explicit opt-in.',
  'Processing servers are located in the United States by default. Enterprise customers may select EU data residency.',
  'Uploaded files are retained until you delete them or close your account.',
];

const documents = [
  { icon: FileText, title: 'SOC 2 Type II Report', note: 'Available to Enterprise customers under NDA.' },
  { icon: FileText, title: 'Penetration Test Summary', note: 'Annual test by a third-party firm. Available on request.' },
  { icon: FileText, title: 'Information Security Policy', note: 'Available to Enterprise customers on request.' },
  { icon: FileText, title: 'Data Processing Agreement', note: 'Available to all customers. Request via privacy@mynexusai.com.' },
  { icon: FileText, title: 'Risk Management Standard', note: 'Available to Enterprise customers under NDA.' },
];

/* ─── Shared checklist component ────────────────────────── */
function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-x-2">
          <span className="border-stroke-3 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border p-0.5">
            <CheckIcon className="stroke-secondary size-3" />
          </span>
          <span className="text-tagline-2 text-secondary/80">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ─── Page ───────────────────────────────────────────────── */
export default function TrustPage() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-[160px] pb-0">
        <figure className="absolute inset-0" aria-hidden="true">
          <Image
            src={chatbotHeroImg}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </figure>
        <div className="main-container relative z-10">
          <div className="mx-auto max-w-[780px] space-y-6 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Trust & Safety</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h1 className="text-secondary leading-[1.1]">
                Security is our{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                >
                  foundation
                </span>
                , not a feature
              </h1>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="mx-auto max-w-[580px] text-lg text-secondary/70 leading-relaxed">
                Security, privacy, and reliability are embedded into every layer of how we
                build and operate Nexus AI — from product design through to employee practices.
              </p>
            </TextReveal>
          </div>

          {/* Certification badges */}
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 pb-16">
            {certBadges.map((badge, i) => (
              <RevealAnimation
                key={badge.label}
                delay={0.08 * (i + 1)}
                asChild={false}
                className="border-stroke-3 rounded-2xl border bg-white/90 backdrop-blur-sm p-5 text-center"
              >
                <p className="text-heading-5 text-secondary font-bold">{badge.label}</p>
                <p className="text-tagline-3 text-secondary/50 mt-1">{badge.sub}</p>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECURITY ARCHITECTURE ═════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-5 text-center mb-14">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Security architecture</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Six layers of protection, end to end</h2>
            </TextReveal>
            <RevealAnimation delay={0.3}>
              <p className="text-tagline-1 text-secondary/60 mx-auto max-w-[520px]">
                Every domain — from the network edge to individual employee practices — has
                dedicated controls reviewed and tested on a continuous basis.
              </p>
            </RevealAnimation>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {architecture.map((domain, i) => (
              <RevealAnimation
                key={domain.domain}
                delay={0.1 * (i + 1)}
                asChild={false}
                className="border-stroke-3 rounded-2xl border bg-white p-6 space-y-4"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary-50">
                  <domain.icon className="size-5 text-primary-500" />
                </div>
                <h3 className="text-heading-6 text-secondary">{domain.domain}</h3>
                <ul className="space-y-2">
                  {domain.items.map((item) => (
                    <li key={item} className="flex items-start gap-x-2">
                      <span className="border-stroke-3 mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full border p-0.5">
                        <CheckIcon className="stroke-secondary size-2.5" />
                      </span>
                      <span className="text-tagline-3 text-secondary/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DATA PROTECTION & PRIVACY ═════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-12 gap-y-8 lg:gap-x-10">

            {/* Data processing */}
            <RevealAnimation
              delay={0.1}
              asChild={false}
              className="col-span-12 lg:col-span-6 border-stroke-3 rounded-2xl border bg-white p-6 md:p-8 space-y-5"
            >
              <div className="flex items-center gap-x-3">
                <div className="flex size-9 items-center justify-center rounded-xl bg-primary-50">
                  <Database className="size-4.5 text-primary-500" />
                </div>
                <h2 className="text-heading-5 text-secondary">Data processing</h2>
              </div>
              <Checklist items={dataProcessingItems} />
            </RevealAnimation>

            {/* GDPR */}
            <RevealAnimation
              delay={0.2}
              asChild={false}
              className="col-span-12 lg:col-span-6 border-stroke-3 rounded-2xl border bg-white p-6 md:p-8 space-y-5"
            >
              <div className="flex items-center gap-x-3">
                <div className="flex size-9 items-center justify-center rounded-xl bg-primary-50">
                  <Globe className="size-4.5 text-primary-500" />
                </div>
                <h2 className="text-heading-5 text-secondary">GDPR compliance</h2>
              </div>
              <Checklist items={privacyItems} />
            </RevealAnimation>

            {/* Model training */}
            <RevealAnimation
              delay={0.3}
              asChild={false}
              className="col-span-12 lg:col-span-6 border-stroke-3 rounded-2xl border bg-white p-6 md:p-8 space-y-5"
            >
              <div className="flex items-center gap-x-3">
                <div className="flex size-9 items-center justify-center rounded-xl bg-primary-50">
                  <Zap className="size-4.5 text-primary-500" />
                </div>
                <h2 className="text-heading-5 text-secondary">Model training policy</h2>
              </div>
              <div className="rounded-xl border border-primary-100 bg-primary-50/40 px-4 py-3">
                <p className="text-tagline-2 text-secondary font-semibold">
                  Your data is never used to train Nexus AI models.
                </p>
              </div>
              <Checklist items={trainingItems} />
            </RevealAnimation>

            {/* Data deletion */}
            <RevealAnimation
              delay={0.4}
              asChild={false}
              className="col-span-12 lg:col-span-6 border-stroke-3 rounded-2xl border bg-white p-6 md:p-8 space-y-5"
            >
              <div className="flex items-center gap-x-3">
                <div className="flex size-9 items-center justify-center rounded-xl bg-primary-50">
                  <Trash2 className="size-4.5 text-primary-500" />
                </div>
                <h2 className="text-heading-5 text-secondary">Data deletion</h2>
              </div>
              <Checklist items={deletionItems} />
            </RevealAnimation>

          </div>
        </div>
      </section>

      {/* ══ DOCUMENTS & CERTIFICATIONS ════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-12 gap-y-10 lg:gap-x-14">
            <div className="col-span-12 space-y-5 lg:col-span-5">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Certifications</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Audited by independent third parties</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-tagline-1 text-secondary/60">
                  Our security programme is independently verified through annual audits.
                  Enterprise customers can request documentation under NDA. All other customers
                  can request our DPA at any time.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} asChild={false} className="space-y-3">
                {[
                  { icon: Shield, label: 'SOC 2 Type II', note: 'Certified. Report available to enterprise customers.' },
                  { icon: Activity, label: 'Penetration testing', note: 'Annual third-party test. Summary available on request.' },
                  { icon: Key, label: 'ISO 27001', note: 'Certification in progress.' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-x-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-50">
                      <item.icon className="size-4 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-tagline-2 text-secondary font-medium">{item.label}</p>
                      <p className="text-tagline-3 text-secondary/50">{item.note}</p>
                    </div>
                  </div>
                ))}
              </RevealAnimation>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <RevealAnimation
                delay={0.3}
                asChild={false}
                className="border-stroke-3 rounded-2xl border bg-white overflow-hidden"
              >
                <div className="border-b border-stroke-3 bg-background-13 px-6 py-4">
                  <p className="text-tagline-2 font-medium text-secondary">Available documents</p>
                  <p className="text-tagline-3 text-secondary/50">Request via enterprise@mynexusai.com or privacy@mynexusai.com</p>
                </div>
                <div className="divide-y divide-stroke-3/60">
                  {documents.map((doc) => (
                    <div key={doc.title} className="flex items-center gap-x-4 px-6 py-4">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-background-13">
                        <doc.icon className="size-4 text-secondary/40" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-tagline-2 font-medium text-secondary">{doc.title}</p>
                        <p className="text-tagline-3 text-secondary/50">{doc.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ══ RESPONSIBLE DISCLOSURE ════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <RevealAnimation
            delay={0.1}
            asChild={false}
            className="border-stroke-3 rounded-2xl border bg-white p-6 md:p-10"
          >
            <div className="grid grid-cols-12 gap-y-6 lg:gap-x-14 items-center">
              <div className="col-span-12 lg:col-span-7 space-y-4">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary-50">
                  <Shield className="size-5 text-primary-500" />
                </div>
                <h2 className="text-heading-5 text-secondary">Responsible disclosure</h2>
                <p className="text-tagline-2 text-secondary/60">
                  We operate a responsible disclosure programme. If you discover a vulnerability
                  in Nexus AI, please report it to our security team directly. We will acknowledge
                  receipt within 24 hours and keep you updated on our response.
                </p>
                <p className="text-tagline-2 text-secondary/60">
                  We ask that you do not publicly disclose the issue until we have had a
                  reasonable opportunity to investigate and remediate it.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-5 space-y-3">
                {[
                  { icon: Mail, label: 'Security vulnerabilities', email: 'security@mynexusai.com' },
                  { icon: Mail, label: 'Privacy requests', email: 'privacy@mynexusai.com' },
                  { icon: Mail, label: 'Enterprise security reviews', email: 'enterprise@mynexusai.com' },
                ].map((contact) => (
                  <div key={contact.email} className="flex items-center gap-x-3 rounded-xl border border-stroke-3 bg-background-13 px-4 py-3">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white">
                      <contact.icon className="size-3.5 text-secondary/40" />
                    </div>
                    <div>
                      <p className="text-tagline-3 text-secondary/50">{contact.label}</p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-tagline-2 text-secondary font-medium hover:text-primary-500 transition-colors"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* ══ ENTERPRISE CTA ════════════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <RevealAnimation
            delay={0.1}
            asChild={false}
            className="bg-secondary rounded-3xl px-8 py-14 text-center space-y-5"
          >
            <TextReveal delay={0.2}>
              <h2 className="text-white">Need a full security review?</h2>
            </TextReveal>
            <RevealAnimation delay={0.3}>
              <p className="text-white/60 mx-auto max-w-[480px] text-lg leading-relaxed">
                Enterprise customers can request our SOC 2 report, penetration test summary,
                DPA, and a dedicated security review with our engineering team.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <Link
                href="/contact-sales"
                className="inline-flex items-center gap-x-2 rounded-full bg-white px-6 py-3 text-tagline-1 font-semibold text-secondary transition-colors hover:bg-white/90"
              >
                Talk to our enterprise team
              </Link>
            </RevealAnimation>
          </RevealAnimation>
        </div>
      </section>

      {/* Bottom spacer */}
      <div className="pb-24" />
    </>
  );
}
