import RefundPolicy from '@/src/components/legal/refund-policy';
import { JsonLd } from '@/src/components/shared/json-ld';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd } from '@/src/utils/structured-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'Refund Policy | Nexus AI',
    'Nexus AI subscriptions are non-refundable. Cancel anytime to stop future charges.',
    '/legal/refunds'
  ),
};

const RefundPolicyPage = () => {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Refund Policy', path: '/legal/refunds' },
        ])}
      />
      <RefundPolicy />
    </>
  );
};

export default RefundPolicyPage;
