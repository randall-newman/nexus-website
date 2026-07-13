import AiPresentationMaker from '@/src/components/features/ai-presentation-maker';
import AiPresentationMakerFaq, {
  aiPresentationMakerFaqItems,
} from '@/src/components/features/ai-presentation-maker-faq';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd, faqPageJsonLd, productJsonLd } from '@/src/utils/structured-data';
import type { Metadata } from 'next';

const PAGE_TITLE = 'AI Presentation Maker — Text, PDF, Word and Markdown to Slides | Nexus AI';
const PAGE_DESCRIPTION =
  'Turn text, PDFs, Word documents, Markdown and URLs into polished presentations in seconds. Export to PowerPoint, share a link or let AI beautify your existing slides. No design skills required.';

export const metadata: Metadata = {
  ...generateMetadata(PAGE_TITLE, PAGE_DESCRIPTION, '/features/presentation'),
  keywords: [
    'AI presentation maker',
    'text to presentation',
    'PDF to slides',
    'Word to presentation',
    'Markdown to slides',
    'AI slide generator',
    'PowerPoint AI',
    'AI deck builder',
    'Gamma alternative',
    'Beautiful.ai alternative',
    'Tome alternative',
    'Nexus AI presentations',
  ],
};

const AiPresentationMakerPage = () => {
  const faqPlain = aiPresentationMakerFaqItems.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Features', path: '/features' },
          { name: 'AI Presentation Maker', path: '/features/presentation' },
        ])}
      />
      <JsonLd
        data={productJsonLd({
          name: 'Nexus AI Presentation Maker',
          description: PAGE_DESCRIPTION,
          url: '/features/presentation',
          lowPrice: '0',
          highPrice: '100',
        })}
      />
      <JsonLd data={faqPageJsonLd(faqPlain)} />
      <AiPresentationMaker />
      <AiPresentationMakerFaq />
      <CTA />
    </>
  );
};

export default AiPresentationMakerPage;
