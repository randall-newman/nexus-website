import AiImageGenerator from '@/src/components/features/ai-image-generator';
import AiImageGeneratorFaq, {
  aiImageGeneratorFaqItems,
} from '@/src/components/features/ai-image-generator-faq';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd, faqPageJsonLd, productJsonLd } from '@/src/utils/structured-data';
import type { Metadata } from 'next';

const PAGE_TITLE = 'AI Image Generator — Text to Image in 10 Styles | Nexus AI';
const PAGE_DESCRIPTION =
  'Generate photorealistic, cinematic, illustration, anime, watercolor and 3D images from a text prompt. 4 variants per prompt, upscale to 4K, remove backgrounds and inpaint in seconds. Available in Nexus AI Chat and Creative Studio.';

export const metadata: Metadata = {
  ...generateMetadata(PAGE_TITLE, PAGE_DESCRIPTION, '/features/image'),
  keywords: [
    'AI image generator',
    'text to image AI',
    'AI image creator',
    'professional AI image generator',
    'AI art generator',
    'photorealistic AI image',
    'AI portrait generator',
    'AI image from text',
    'Midjourney alternative',
    'DALL-E alternative',
    'Gemini image generator alternative',
    'Canva AI image alternative',
    'Nexus AI image generator',
    'AI image upscaler',
  ],
};

const AiImageGeneratorPage = () => {
  const faqPlain = aiImageGeneratorFaqItems.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Features', path: '/features' },
          { name: 'AI Image Generator', path: '/features/image' },
        ])}
      />
      <JsonLd
        data={productJsonLd({
          name: 'Nexus AI Image Generator',
          description: PAGE_DESCRIPTION,
          url: '/features/image',
          lowPrice: '0',
          highPrice: '100',
        })}
      />
      <JsonLd data={faqPageJsonLd(faqPlain)} />
      <AiImageGenerator />
      <AiImageGeneratorFaq />
      <CTA />
    </>
  );
};

export default AiImageGeneratorPage;
