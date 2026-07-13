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
    'Compare Nexus AI plans. Free, Premium ($20/month or $16/month billed annually), Ultimate ($100/month or $80/month billed annually), Teams ($30/seat/month) and more.',
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
