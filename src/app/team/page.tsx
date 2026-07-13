import CoreValues from '@/src/components/team/core-values';
import OurTeam from '@/src/components/team/our-team';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'Team | Nexus AI',
  robots: { index: false, follow: false },
};

const Page = () => {
  return (
    <>
      <OurTeam />
      <CoreValues />
      <CTA />
    </>
  );
};

export default Page;
