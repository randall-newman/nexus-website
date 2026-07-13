import AiVideoGenerator from '@/src/components/features/ai-video-generator';
import AiVideoGeneratorFaq, {
  aiVideoGeneratorFaqItems,
} from '@/src/components/features/ai-video-generator-faq';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd, faqPageJsonLd, productJsonLd } from '@/src/utils/structured-data';
import type { Metadata } from 'next';

const PAGE_TITLE = 'AI Video Generator — Text to Video, Image to Video & AI Avatars | Nexus AI';
const PAGE_DESCRIPTION =
  'Generate cinematic video from a text prompt, animate any image, or build a full scene from a script. Add AI voiceover with Audio Generator, edit in Creative Studio, and export at 4K. Available on Nexus AI Ultimate plan.';

export const metadata: Metadata = {
  ...generateMetadata(PAGE_TITLE, PAGE_DESCRIPTION, '/features/video'),
  keywords: [
    'AI video generator',
    'text to video AI',
    'AI video maker',
    'image to video AI',
    'AI avatar video',
    'script to video AI',
    'cinematic AI video',
    'AI short-form video',
    'Suno video alternative',
    'Veed AI alternative',
    'InVideo alternative',
    'Higgsfield alternative',
    'Nexus AI video',
    'AI video from text',
    'AI video generation tool',
  ],
};

const AiVideoGeneratorPage = () => {
  const faqPlain = aiVideoGeneratorFaqItems.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Features', path: '/features' },
          { name: 'AI Video Generator', path: '/features/video' },
        ])}
      />
      <JsonLd
        data={productJsonLd({
          name: 'Nexus AI Video Generator',
          description: PAGE_DESCRIPTION,
          url: '/features/video',
          lowPrice: '100',
          highPrice: '100',
        })}
      />
      <JsonLd data={faqPageJsonLd(faqPlain)} />
      <AiVideoGenerator />
      <AiVideoGeneratorFaq />
      <CTA />
    </>
  );
};

export default AiVideoGeneratorPage;
