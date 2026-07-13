import CreativeStudio from '@/src/components/products/creative-studio';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd, productJsonLd } from '@/src/utils/structured-data';
import type { Metadata } from 'next';

const PAGE_TITLE = 'Creative Studio — AI Images, Slides, Video, Audio and Wireframes | Nexus AI';
const PAGE_DESCRIPTION =
  'Generate images, presentation slides, documents, short-form video, voiceovers and UI wireframes from a single prompt. Connect your Brand Kit and every output is on-brand from the first generation.';

export const metadata: Metadata = {
  ...generateMetadata(PAGE_TITLE, PAGE_DESCRIPTION, '/products/creative-studio'),
  keywords: [
    'AI image generator',
    'AI slide maker',
    'AI presentation generator',
    'AI video generator',
    'AI audio voiceover',
    'AI wireframe tool',
    'brand kit AI',
    'Canva alternative AI',
    'Nexus AI Creative Studio',
  ],
};

const CreativeStudioPage = () => {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Products', path: '/products' },
          { name: 'Creative Studio', path: '/products/creative-studio' },
        ])}
      />
      <JsonLd
        data={productJsonLd({
          name: 'Nexus AI Creative Studio',
          description: PAGE_DESCRIPTION,
          url: '/products/creative-studio',
          lowPrice: '0',
          highPrice: '100',
        })}
      />
      <CreativeStudio />
      <CTA />
    </>
  );
};

export default CreativeStudioPage;
