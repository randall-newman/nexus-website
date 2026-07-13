import BrowserExtension from '@/src/components/downloads/browser-extension';
import BrowserExtensionFaq, {
  browserExtensionFaqItems,
} from '@/src/components/downloads/browser-extension-faq';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd, faqPageJsonLd, productJsonLd } from '@/src/utils/structured-data';
import type { Metadata } from 'next';

const PAGE_TITLE = 'Nexus AI Browser Extension — Chrome, Edge and Opera | Download';
const PAGE_DESCRIPTION =
  'Install the Nexus AI browser extension for Chrome, Edge, or Opera. Summarise any webpage, highlight text and ask questions, write in any text field, and research while you browse — all from a persistent sidebar.';

export const metadata: Metadata = {
  ...generateMetadata(PAGE_TITLE, PAGE_DESCRIPTION, '/downloads/browser-extension'),
  keywords: [
    'Nexus AI browser extension',
    'AI browser extension',
    'Chrome AI extension',
    'Edge AI extension',
    'Opera AI extension',
    'AI sidebar browser',
    'summarise webpage AI',
    'AI writing assistant browser',
    'highlight and ask AI',
    'AI Chrome extension',
    'ChatGPT Chrome extension alternative',
  ],
};

const BrowserExtensionPage = () => {
  const faqPlain = browserExtensionFaqItems.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Downloads', path: '/downloads' },
          { name: 'Browser Extension', path: '/downloads/browser-extension' },
        ])}
      />
      <JsonLd
        data={productJsonLd({
          name: 'Nexus AI Browser Extension',
          description: PAGE_DESCRIPTION,
          url: '/downloads/browser-extension',
          lowPrice: '0',
          highPrice: '100',
        })}
      />
      <JsonLd data={faqPageJsonLd(faqPlain)} />
      <BrowserExtension />
      <BrowserExtensionFaq />
      <CTA />
    </>
  );
};

export default BrowserExtensionPage;
