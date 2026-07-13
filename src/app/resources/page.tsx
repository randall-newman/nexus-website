import { generateMetadata } from '@/src/utils/generateMetaData';
import CTA from '@/src/components/shared/cta';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary } from '@/src/components/shared/ui/button';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata('Resources | Nexus AI', 'Guides, tutorials and resources for Nexus AI.', '/resources'),
};

export default function Page() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40">
        <div className="main-container text-center space-y-6">
          <BadgePrimary>Coming Soon</BadgePrimary>
          <h1 className="mx-auto max-w-[640px]">Resources</h1>
          <p className="text-tagline-1 text-secondary/60 mx-auto max-w-[480px]">
            Guides, tutorials and resources for Nexus AI. This page is being built. Check back soon.
          </p>
          <Link href="/contact">
            <ButtonPrimary className="mx-auto md:w-fit!" textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!">
              Contact us to learn more
            </ButtonPrimary>
          </Link>
        </div>
      </section>
      <CTA />
    </>
  );
}
