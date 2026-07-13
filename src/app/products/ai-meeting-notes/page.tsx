import AiMeetingNotes from '@/src/components/products/ai-meeting-notes';
import AiMeetingNotesFaq, {
  aiMeetingNotesFaqItems,
} from '@/src/components/products/ai-meeting-notes-faq';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd, faqPageJsonLd, productJsonLd } from '@/src/utils/structured-data';
import type { Metadata } from 'next';

const PAGE_TITLE =
  'Nexus AI Meeting Notes — Transcribe, Summarise and Search Every Meeting';
const PAGE_DESCRIPTION =
  'Nexus AI joins your Zoom, Google Meet or Teams call, transcribes every word, identifies every speaker, and delivers a structured summary with action items and a decision log — before the call ends. Searchable across your entire meeting history.';

export const metadata: Metadata = {
  ...generateMetadata(PAGE_TITLE, PAGE_DESCRIPTION, '/products/ai-meeting-notes'),
  keywords: [
    'AI meeting notes',
    'AI meeting assistant',
    'automatic meeting transcription',
    'meeting summary AI',
    'action items from meetings',
    'AI notetaker',
    'Zoom transcription AI',
    'Google Meet AI notes',
    'Teams AI meeting notes',
    'speaker identification AI',
    'meeting search AI',
    'read.ai alternative',
    'Fireflies alternative',
    'Otter.ai alternative',
    'Nexus AI meeting notes',
  ],
};

const AiMeetingNotesPage = () => {
  const faqPlain = aiMeetingNotesFaqItems.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Products', path: '/products' },
          { name: 'AI Meeting Notes', path: '/products/ai-meeting-notes' },
        ])}
      />
      <JsonLd
        data={productJsonLd({
          name: 'Nexus AI Meeting Notes',
          description: PAGE_DESCRIPTION,
          url: '/products/ai-meeting-notes',
          lowPrice: '0',
          highPrice: '100',
        })}
      />
      <JsonLd data={faqPageJsonLd(faqPlain)} />
      <AiMeetingNotes />
      <AiMeetingNotesFaq />
      <CTA />
    </>
  );
};

export default AiMeetingNotesPage;
