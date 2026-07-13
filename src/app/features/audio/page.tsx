import AiAudioGenerator from '@/src/components/features/ai-audio-generator';
import AiAudioGeneratorFaq, {
  aiAudioGeneratorFaqItems,
} from '@/src/components/features/ai-audio-generator-faq';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd, faqPageJsonLd, productJsonLd } from '@/src/utils/structured-data';
import type { Metadata } from 'next';

const PAGE_TITLE = 'AI Audio Generator — Text to Speech, Voice Cloning & Music | Nexus AI';
const PAGE_DESCRIPTION =
  'Generate natural-sounding voiceovers, clone any voice from a 30-second sample, compose music from text prompts, and create sound effects — all inside Nexus AI Creative Studio. 500+ voices, 80+ languages, MP3 and WAV export.';

export const metadata: Metadata = {
  ...generateMetadata(PAGE_TITLE, PAGE_DESCRIPTION, '/features/audio'),
  keywords: [
    'AI audio generator',
    'text to speech AI',
    'AI voice generator',
    'AI voice cloning',
    'AI music generator',
    'AI sound effects generator',
    'AI voiceover generator',
    'AI podcast creator',
    'natural sounding text to speech',
    'ElevenLabs alternative',
    'Suno alternative',
    'Speechify alternative',
    'HeyGen voice alternative',
    'Nexus AI audio',
    'AI narration tool',
  ],
};

const AiAudioGeneratorPage = () => {
  const faqPlain = aiAudioGeneratorFaqItems.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Features', path: '/features' },
          { name: 'AI Audio Generator', path: '/features/audio' },
        ])}
      />
      <JsonLd
        data={productJsonLd({
          name: 'Nexus AI Audio Generator',
          description: PAGE_DESCRIPTION,
          url: '/features/audio',
          lowPrice: '20',
          highPrice: '100',
        })}
      />
      <JsonLd data={faqPageJsonLd(faqPlain)} />
      <AiAudioGenerator />
      <AiAudioGeneratorFaq />
      <CTA />
    </>
  );
};

export default AiAudioGeneratorPage;
