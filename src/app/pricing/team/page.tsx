import SeatCalculator from '@/src/components/pricing-team/seat-calculator';
import WhatsIncluded from '@/src/components/pricing-team/whats-included';
import WhoItsFor from '@/src/components/pricing-team/who-its-for';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd, productJsonLd } from '@/src/utils/structured-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'Nexus AI Team Pricing | $30 per Seat',
    'Nexus AI Team plan: $30 per seat per month, minimum 2 members. Shared Folders, team workspace and central billing for small teams.',
    '/pricing/team'
  ),
};

const PricingTeamPage = () => {
  return (
    <>
      <JsonLd
        data={productJsonLd({
          name: 'Nexus AI Team',
          description: 'Team plan for Nexus AI: $30 per seat per month, 2-seat minimum.',
          url: '/pricing/team',
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Pricing', path: '/pricing' },
          { name: 'Team', path: '/pricing/team' },
        ])}
      />
      <SeatCalculator />
      <WhatsIncluded />
      <WhoItsFor />
      <CTA />
    </>
  );
};

export default PricingTeamPage;
