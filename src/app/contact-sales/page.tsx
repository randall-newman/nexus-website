import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ContactSalesForm } from '@/src/components/contact-sales/contact-sales-form';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Building2, Clock, Mail, ShieldCheck, Users, Zap } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  ...generateMetadata(
    'Contact Sales | Nexus AI',
    'Talk to our sales team about Teams, Business, Education and Enterprise plans. Get a custom quote and dedicated onboarding.',
    '/contact-sales'
  ),
};

const reasons = [
  { icon: Users, title: 'Teams and Business', description: 'Deploy Nexus AI across your whole team with shared Folders, central billing and admin controls.' },
  { icon: Building2, title: 'Enterprise', description: 'Custom contracts, SSO, audit logs, security review and a dedicated support contact.' },
  { icon: ShieldCheck, title: 'Education', description: 'Annual institutional licences for universities, colleges and schools with Nexus AI Academic for every student.' },
  { icon: Zap, title: 'Custom integrations', description: 'API access, custom data controls and integrations tailored to your existing stack.' },
];

export default function ContactSalesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-14 lg:gap-x-14">
            <div className="col-span-12 space-y-6 lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Sales</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h1>Talk to our sales team</h1>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-tagline-1 text-secondary/60 max-w-[480px]">
                  Tell us about your team or organisation and we will put together a plan that fits. Most teams are up and running within 48 hours.
                </p>
              </TextReveal>

              <RevealAnimation delay={0.4} asChild={false} className="space-y-4 pt-2">
                {reasons.map((r) => (
                  <div key={r.title} className="flex items-start gap-3">
                    <div className="bg-primary-50 flex size-9 shrink-0 items-center justify-center rounded-lg">
                      <r.icon className="text-primary-500 size-4.5" />
                    </div>
                    <div>
                      <p className="text-tagline-1 text-secondary font-medium">{r.title}</p>
                      <p className="text-tagline-2 text-secondary/60">{r.description}</p>
                    </div>
                  </div>
                ))}
              </RevealAnimation>

              <RevealAnimation delay={0.5} asChild={false} className="flex items-center gap-3 pt-2 border-stroke-3 rounded-xl border bg-white p-4">
                <Clock className="text-secondary/40 size-5 shrink-0" />
                <div>
                  <p className="text-tagline-2 text-secondary font-medium">Typical response time</p>
                  <p className="text-tagline-3 text-secondary/60">Within 24 hours on business days</p>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation
              delay={0.3}
              asChild={false}
              className="border-stroke-3 col-span-12 rounded-2xl border bg-white p-8 lg:col-span-6"
            >
              <h2 className="text-heading-6 text-secondary mb-6">Tell us about your needs</h2>
              <ContactSalesForm />

              <div className="mt-6 border-t border-[#e2e8f2] pt-6 flex items-center gap-2">
                <Mail className="text-secondary/40 size-4 shrink-0" />
                <p className="text-sm text-secondary/60">
                  Or email us directly at{' '}
                  <a href="mailto:sales@mynexusai.com" className="text-[#7458e8] hover:underline font-medium">
                    sales@mynexusai.com
                  </a>
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="pt-20 pb-20">
        <div className="main-container">
          <RevealAnimation delay={0.1} asChild={false} className="text-center">
            <p className="text-tagline-2 text-secondary/50">
              Trusted by teams at leading organisations.{' '}
              <Link href="/about" className="text-[#7458e8] hover:underline">Learn about Nexus AI</Link>
            </p>
          </RevealAnimation>
        </div>
      </section>
    </>
  );
}
