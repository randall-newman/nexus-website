import EnterprisePage from '@/src/components/enterprise/enterprise-page';
import { generateMetadata } from '@/src/utils/generateMetaData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'Enterprise | Nexus AI',
    'Nexus AI Enterprise gives large organisations SSO, audit logs, custom contracts, dedicated support, and GDPR-compliant data controls.',
    '/enterprise'
  ),
};

export default function Page() {
  return <EnterprisePage />;
}
