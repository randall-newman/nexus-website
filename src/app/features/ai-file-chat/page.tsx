import AiFileChat from '@/src/components/features/ai-file-chat';
import AiFileChatFaq, { aiFileChatFaqItems } from '@/src/components/features/ai-file-chat-faq';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd, faqPageJsonLd, productJsonLd } from '@/src/utils/structured-data';
import type { Metadata } from 'next';

const PAGE_TITLE = 'AI File Chat — Ask Any PDF, Word Doc or Spreadsheet | Nexus AI';
const PAGE_DESCRIPTION =
  'Upload PDFs, Word documents, Excel spreadsheets and presentations and ask questions in plain English. Get cited answers with exact page references. Chat across multiple files at once. Part of Nexus AI Chat.';

export const metadata: Metadata = {
  ...generateMetadata(PAGE_TITLE, PAGE_DESCRIPTION, '/features/ai-file-chat'),
  keywords: [
    'AI file chat',
    'chat with PDF',
    'AI PDF reader',
    'PDF question answering',
    'ask PDF questions',
    'chat with documents',
    'AI document chat',
    'ChatPDF alternative',
    'SciSpace alternative',
    'ChatDoc alternative',
    'multi-file AI chat',
    'PDF summariser AI',
    'document AI assistant',
    'Nexus AI file chat',
  ],
};

const AiFileChatPage = () => {
  const faqPlain = aiFileChatFaqItems.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Features', path: '/features' },
          { name: 'AI File Chat', path: '/features/ai-file-chat' },
        ])}
      />
      <JsonLd
        data={productJsonLd({
          name: 'Nexus AI File Chat',
          description: PAGE_DESCRIPTION,
          url: '/features/ai-file-chat',
          lowPrice: '0',
          highPrice: '100',
        })}
      />
      <JsonLd data={faqPageJsonLd(faqPlain)} />
      <AiFileChat />
      <AiFileChatFaq />
      <CTA />
    </>
  );
};

export default AiFileChatPage;
