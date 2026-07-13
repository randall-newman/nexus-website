import AiEssayWriter from '@/src/components/features/ai-essay-writer';
import AiEssayWriterFaq, {
  aiEssayWriterFaqItems,
} from '@/src/components/features/ai-essay-writer-faq';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd, faqPageJsonLd, productJsonLd } from '@/src/utils/structured-data';
import type { Metadata } from 'next';

const PAGE_TITLE = 'AI Essay Writer — Outline, Draft, Cite and Check Originality | Nexus AI';
const PAGE_DESCRIPTION =
  'Write essays faster with AI that generates an outline, writes a cited draft and checks originality — all in one workspace. Supports 12 essay types including argumentative, persuasive, analytical and research papers. APA, MLA, Chicago, Harvard and more.';

export const metadata: Metadata = {
  ...generateMetadata(PAGE_TITLE, PAGE_DESCRIPTION, '/features/essay-writer'),
  keywords: [
    'AI essay writer',
    'essay writer AI',
    'AI essay generator',
    'free essay writer AI',
    'argumentative essay AI',
    'essay with citations AI',
    'AI essay outline generator',
    'essay checker AI',
    'plagiarism free essay writer',
    'Jenni AI alternative',
    'Manus essay writer alternative',
    'academic essay AI',
    'Nexus AI essay writer',
  ],
};

const AiEssayWriterPage = () => {
  const faqPlain = aiEssayWriterFaqItems.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Features', path: '/features' },
          { name: 'AI Essay Writer', path: '/features/essay-writer' },
        ])}
      />
      <JsonLd
        data={productJsonLd({
          name: 'Nexus AI Essay Writer',
          description: PAGE_DESCRIPTION,
          url: '/features/essay-writer',
          lowPrice: '0',
          highPrice: '100',
        })}
      />
      <JsonLd data={faqPageJsonLd(faqPlain)} />
      <AiEssayWriter />
      <AiEssayWriterFaq />
      <CTA />
    </>
  );
};

export default AiEssayWriterPage;
