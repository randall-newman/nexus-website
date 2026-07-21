import BusinessCallout from '@/src/components/pricing/business-callout';
import FAQ, { pricingFaqItems } from '@/src/components/pricing/faq';
import PlanComparison from '@/src/components/pricing/plan-comparison';
import PricingFeatureTable from '@/src/components/pricing/pricing-feature-table';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd, faqPageJsonLd, productJsonLd } from '@/src/utils/structured-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'Pricing & Plans | Nexus AI',
    'Explore Nexus AI plans and pricing, from Free to Premium and Ultimate. Compare features and benefits across every tier to find the subscription that fits how you work.',
    '/pricing'
  ),
};

const PricingPage = () => {
  return (
    <>
      <JsonLd
        data={productJsonLd({
          name: 'Nexus AI',
          description: 'Free, Premium and Ultimate plans for the Nexus AI workspace.',
          url: '/pricing',
          lowPrice: '0',
          highPrice: '100',
        })}
      />
      <JsonLd data={faqPageJsonLd(pricingFaqItems)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Pricing', path: '/pricing' },
        ])}
      />
      <PlanComparison />
      <PricingFeatureTable />
      <BusinessCallout />
      <FAQ />
      <CTA />
    </>
  );
};

export default PricingPage;
