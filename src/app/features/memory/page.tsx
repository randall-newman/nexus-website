import AiMemory from '@/src/components/features/ai-memory';
import AiMemoryFaq, { aiMemoryFaqItems } from '@/src/components/features/ai-memory-faq';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd, faqPageJsonLd, productJsonLd } from '@/src/utils/structured-data';
import type { Metadata } from 'next';

const PAGE_TITLE = 'AI Memory — Nexus AI Remembers Your Context Across Every Session';
const PAGE_DESCRIPTION =
  'Nexus AI Memory learns your preferences, projects, and working style so you never have to repeat yourself. Fully editable, isolated per project, and always under your control. Part of Nexus AI Chat.';

export const metadata: Metadata = {
  ...generateMetadata(PAGE_TITLE, PAGE_DESCRIPTION, '/features/memory'),
  keywords: [
    'AI memory',
    'AI that remembers',
    'persistent AI context',
    'AI personalisation',
    'AI preferences',
    'AI context across sessions',
    'Nexus AI memory',
    'AI assistant with memory',
    'ChatGPT memory alternative',
    'Claude memory alternative',
    'AI project memory',
    'AI that knows you',
  ],
};

const AiMemoryPage = () => {
  const faqPlain = aiMemoryFaqItems.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Features', path: '/features' },
          { name: 'AI Memory', path: '/features/memory' },
        ])}
      />
      <JsonLd
        data={productJsonLd({
          name: 'Nexus AI Memory',
          description: PAGE_DESCRIPTION,
          url: '/features/memory',
          lowPrice: '0',
          highPrice: '100',
        })}
      />
      <JsonLd data={faqPageJsonLd(faqPlain)} />
      <AiMemory />
      <AiMemoryFaq />
      <CTA />
    </>
  );
};

export default AiMemoryPage;
