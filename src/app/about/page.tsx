import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'About | Nexus AI',
    'Nexus AI is built by Verbosec to give every person one AI workspace for research, writing, design and code — so work gets finished, not just started.',
    '/about'
  ),
};

import AboutHero from '@/src/components/about/hero';
import OurMission from '@/src/components/about/our-mission';
import AboutVision from '@/src/components/about/about-vision';
import AboutValues from '@/src/components/about/about-values';
import AboutDeclarations from '@/src/components/about/declarations';
import AboutCareers from '@/src/components/about/about-careers';
import CTA from '@/src/components/shared/cta';

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <OurMission />
      <AboutVision />
      <AboutValues />
      <AboutDeclarations />
      <AboutCareers />
      <CTA />
    </>
  );
};

export default AboutPage;
