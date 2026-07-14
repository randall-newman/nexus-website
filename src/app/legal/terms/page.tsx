import TermsOfService from '@/src/components/legal/terms-of-service';
import { JsonLd } from '@/src/components/shared/json-ld';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd } from '@/src/utils/structured-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'Terms of Service | Nexus AI',
    'The terms that govern your use of Nexus AI.',
    '/legal/terms'
  ),
};

const TermsOfServicePage = () => {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Terms of Service', path: '/legal/terms' },
        ])}
      />
      <TermsOfService />
    </>
  );
};

export default TermsOfServicePage;
