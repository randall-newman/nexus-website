import Artifacts from '@/src/components/features/artifacts';
import ArtifactsFaq, { artifactsFaqItems } from '@/src/components/features/artifacts-faq';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd, faqPageJsonLd, productJsonLd } from '@/src/utils/structured-data';
import type { Metadata } from 'next';

const PAGE_TITLE = 'Artifacts — AI Canvas for Documents, Code, Websites and Slides | Nexus AI';
const PAGE_DESCRIPTION =
  'Artifacts is the live canvas inside Nexus AI where every AI output renders as a preview you can edit directly. Generate documents, code, websites, slides and diagrams — refine, version and export finished files. Similar to Canvas on Google Gemini and OpenAI.';

export const metadata: Metadata = {
  ...generateMetadata(PAGE_TITLE, PAGE_DESCRIPTION, '/features/artifacts'),
  keywords: [
    'AI artifacts',
    'AI canvas',
    'AI document editor',
    'AI code preview',
    'AI website generator',
    'Canvas AI alternative',
    'Google Gemini Canvas alternative',
    'AI slide creator',
    'AI diagram tool',
    'Nexus AI Artifacts',
    'edit AI output',
  ],
};

const ArtifactsPage = () => {
  const faqPlain = artifactsFaqItems.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Features', path: '/features' },
          { name: 'Artifacts', path: '/features/artifacts' },
        ])}
      />
      <JsonLd
        data={productJsonLd({
          name: 'Nexus AI Artifacts',
          description: PAGE_DESCRIPTION,
          url: '/features/artifacts',
          lowPrice: '0',
          highPrice: '100',
        })}
      />
      <JsonLd data={faqPageJsonLd(faqPlain)} />
      <Artifacts />
      <ArtifactsFaq />
      <CTA />
    </>
  );
};

export default ArtifactsPage;
