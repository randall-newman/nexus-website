import PrivacyPolicy from '@/src/components/legal/privacy-policy';
import { JsonLd } from '@/src/components/shared/json-ld';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd } from '@/src/utils/structured-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'Privacy Policy | Nexus AI',
    'Read how Nexus AI collects, uses and protects your data.',
    '/legal/privacy'
  ),
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/legal/privacy' },
        ])}
      />
      <PrivacyPolicy />
    </>
  );
};

export default PrivacyPolicyPage;
