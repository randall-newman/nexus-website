import Connectors from '@/src/components/features/connectors';
import ConnectorsFaq, { connectorsFaqItems } from '@/src/components/features/connectors-faq';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd, faqPageJsonLd, productJsonLd } from '@/src/utils/structured-data';
import type { Metadata } from 'next';

const PAGE_TITLE = 'Connectors — Link Nexus AI to Your Apps & Data | Nexus AI';
const PAGE_DESCRIPTION =
  'Connect Nexus AI to Gmail, Google Drive, Notion, GitHub, Slack and 70+ other tools. Search your files, query your data and take real actions, powered by the open Model Context Protocol.';

export const metadata: Metadata = {
  ...generateMetadata(PAGE_TITLE, PAGE_DESCRIPTION, '/features/connectors'),
  keywords: [
    'Nexus AI connectors',
    'AI integrations',
    'MCP connectors',
    'Model Context Protocol',
    'connect AI to Google Drive',
    'connect AI to Notion',
    'AI app integrations',
    'MCP server directory',
  ],
};

const ConnectorsPage = () => {
  const faqPlain = connectorsFaqItems.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Features', path: '/features' },
          { name: 'Connectors', path: '/features/connectors' },
        ])}
      />
      <JsonLd
        data={productJsonLd({
          name: 'Nexus AI Connectors',
          description: PAGE_DESCRIPTION,
          url: '/features/connectors',
          lowPrice: '20',
          highPrice: '100',
        })}
      />
      <JsonLd data={faqPageJsonLd(faqPlain)} />
      <Connectors />
      <ConnectorsFaq />
      <CTA />
    </>
  );
};

export default ConnectorsPage;
