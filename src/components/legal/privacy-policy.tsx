import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <section className="pt-20 pb-20 md:pt-25 md:pb-25 lg:pt-39 lg:pb-39">
      <div className="main-container">
        <div className="mx-auto w-full max-w-[850px] space-y-10">
          <div className="space-y-5 text-center">
            <RevealAnimation delay={0.1} className="flex justify-center">
              <BadgePrimary>Legal</BadgePrimary>
            </RevealAnimation>
            <h1>Privacy Policy</h1>
            <p className="text-tagline-2 text-secondary/50">Last updated: June 2026</p>
          </div>

          <RevealAnimation
            delay={0.2}
            asChild={false}
            className="border-stroke-3 rounded-2xl border bg-white p-6 md:p-8"
          >
            <p className="text-tagline-1 text-secondary/80 font-medium">In short</p>
            <p className="text-tagline-2 text-secondary/70 mt-2">
              We collect what we need to run Nexus AI — your account details, the content you
              create or upload, and basic usage data. We don&apos;t sell your data. You can
              access, export or delete it at any time, and your uploaded files and Memory are
              never used to train models unless you opt in.
            </p>
          </RevealAnimation>

          <div className="service-details-markdown">
            <h2>Data we collect</h2>
            <p>
              Account information (name, email, billing details), content you create or upload
              (chats, files, generated documents and images), and usage data (device, browser,
              approximate location and product interactions).
            </p>

            <h2>Why we collect it</h2>
            <p>
              To provide and improve Nexus AI, process payments, respond to support requests,
              secure your account, and meet legal obligations.
            </p>

            <h2>Third-party sharing</h2>
            <p>
              We share data with infrastructure and payment processors strictly to operate Nexus
              AI. We do not sell personal data to third parties.
            </p>

            <h2>Retention</h2>
            <p>
              We retain account and content data for as long as your account is active, and for a
              limited period after deletion to satisfy legal and operational requirements.
            </p>

            <h2>Your rights</h2>
            <p>
              You can access, export or delete your data from your account settings at any time.
              Residents of the EU/EEA and California have additional rights under GDPR and CCPA,
              including the right to object to or restrict certain processing.
            </p>

            <h2>AI-specific data handling</h2>
            <p>
              Files you upload and conversations you have are used to generate your responses and
              are not used to train our underlying models unless you explicitly opt in. AI Memory
              data is stored per Folder or account, depending on your settings, and can be viewed
              or cleared at any time from your account.
            </p>

            <h2>Contact us</h2>
            <p>
              For privacy requests or questions, contact us through{' '}
              <Link href="/contact" className="text-secondary underline">
                our contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
