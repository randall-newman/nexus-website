import Microsoft365 from '@/src/components/features/microsoft-365';
import Microsoft365Faq, {
  microsoft365FaqItems,
} from '@/src/components/features/microsoft-365-faq';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd, faqPageJsonLd, productJsonLd } from '@/src/utils/structured-data';
import type { Metadata } from 'next';

const PAGE_TITLE = 'Nexus AI for Microsoft 365 — AI in Word, Excel, PowerPoint and Teams';
const PAGE_DESCRIPTION =
  'Add Nexus AI to Word, Excel, PowerPoint, and Teams with one extension. Edit with tracked changes in Word, update Excel models without breaking formulas, generate slides in PowerPoint, and summarise Teams channels — all with one persistent AI conversation across every app.';

export const metadata: Metadata = {
  ...generateMetadata(PAGE_TITLE, PAGE_DESCRIPTION, '/features/microsoft-365'),
  keywords: [
    'AI for Microsoft 365',
    'AI for Word',
    'AI for Excel',
    'AI for PowerPoint',
    'AI for Teams',
    'Microsoft 365 AI assistant',
    'Copilot alternative',
    'Microsoft Word AI',
    'Microsoft Excel AI',
    'AI document editor',
    'AI spreadsheet assistant',
    'Nexus AI Microsoft 365',
    'AI for Office',
  ],
};

const Microsoft365Page = () => {
  const faqPlain = microsoft365FaqItems.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Features', path: '/features' },
          { name: 'Microsoft 365', path: '/features/microsoft-365' },
        ])}
      />
      <JsonLd
        data={productJsonLd({
          name: 'Nexus AI for Microsoft 365',
          description: PAGE_DESCRIPTION,
          url: '/features/microsoft-365',
          lowPrice: '0',
          highPrice: '100',
        })}
      />
      <JsonLd data={faqPageJsonLd(faqPlain)} />
      <Microsoft365 />
      <Microsoft365Faq />
      <CTA />
    </>
  );
};

export default Microsoft365Page;
