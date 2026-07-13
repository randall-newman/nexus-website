import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgePrimary } from '@/src/components/shared/ui/badge';

const TermsOfService = () => {
  return (
    <section className="pt-20 pb-20 md:pt-25 md:pb-25 lg:pt-39 lg:pb-39">
      <div className="main-container">
        <div className="mx-auto w-full max-w-[850px] space-y-10">
          <div className="space-y-5 text-center">
            <RevealAnimation delay={0.1} className="flex justify-center">
              <BadgePrimary>Legal</BadgePrimary>
            </RevealAnimation>
            <h1>Terms of Service</h1>
            <p className="text-tagline-2 text-secondary/50">Last updated: June 2026</p>
          </div>

          <div className="service-details-markdown">
            <h2>Account eligibility</h2>
            <p>
              You must be able to form a binding contract to use Nexus AI, and you are responsible
              for keeping your account credentials secure.
            </p>

            <h2>Acceptable use</h2>
            <p>
              You agree to use Nexus AI in line with our Usage Policy, which covers prohibited
              content and restrictions on automated or bulk usage outside the Developer Platform.
            </p>

            <h2>Subscription and billing</h2>
            <p>
              Paid plans renew automatically at the start of each billing cycle until cancelled.
              Refund eligibility for monthly, annual and add-on purchases is set out in our Refund
              Policy.
            </p>

            <h2>Who owns what you create</h2>
            <p>
              You own the content you create with Nexus AI, including documents, images, slides
              and code generated through your account, subject to the rights of any third-party
              material you upload. We do not claim ownership over your output.
            </p>

            <h2>Termination</h2>
            <p>
              You may cancel at any time. We may suspend or terminate accounts that violate these
              terms or our Usage Policy, with notice where reasonably possible.
            </p>

            <h2>Liability</h2>
            <p>
              Nexus AI is provided on an &ldquo;as is&rdquo; basis. To the extent permitted by law,
              our liability for any claim is limited to the amount you paid us in the twelve
              months before the claim arose.
            </p>

            <h2>Governing law</h2>
            <p>
              Disputes are resolved under the governing law stated in your order confirmation or
              account agreement, and the parties agree to attempt good-faith resolution before
              pursuing formal proceedings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
