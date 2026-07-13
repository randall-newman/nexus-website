import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

const HOMEPAGE_TITLE = 'Nexus AI | The AI Workspace That Finishes Your Work';
const HOMEPAGE_DESCRIPTION =
  'Nexus AI is your all-in-one AI workspace for writing, research, chat, and creative work. Use AI File Chat, Academic Research, AI Essay Writer and Artifacts to turn ideas into finished documents, decks, images and code.';

export const metadata: Metadata = {
  ...generateMetadata(HOMEPAGE_TITLE, HOMEPAGE_DESCRIPTION, '/'),
};

import Audience from '@/src/components/home/audience';
import DownloadsStrip from '@/src/components/home/downloads-strip';
import FAQ, { faqItems } from '@/src/components/home/faq';
import Hero from '@/src/components/home/hero';
import Pillars from '@/src/components/home/pillars';
import PricingTeaser from '@/src/components/home/pricing-teaser';
import Security from '@/src/components/home/security';
import TestimonialTeaser from '@/src/components/home/testimonial-teaser';
import TrustedBy from '@/src/components/home/trusted-by';
import Wedge from '@/src/components/home/wedge';
import WorldMap from '@/src/components/home/world-map';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { homepageJsonLdGraph } from '@/src/utils/structured-data';

const Page = () => {
  return (
    <>
      <JsonLd
        data={homepageJsonLdGraph({
          name: HOMEPAGE_TITLE,
          description: HOMEPAGE_DESCRIPTION,
          faqItems,
        })}
      />
      <Hero />
      <TrustedBy />
      <Pillars />
      <Wedge />
      <Audience />
      <Security />
      <DownloadsStrip />
      <PricingTeaser />
      <WorldMap />
      <TestimonialTeaser />
      <FAQ />
      <CTA />
    </>
  );
};

export default Page;
