import ChatFaq, { chatFaqItems } from '@/src/components/products/chat-faq';
import ChatProduct from '@/src/components/products/chat';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd, faqPageJsonLd, productJsonLd } from '@/src/utils/structured-data';
import type { Metadata } from 'next';

const PAGE_TITLE = 'Nexus AI Chat — General Chat, Research Mode and File Chat in One Place';
const PAGE_DESCRIPTION =
  'Ask anything, research with citations or chat with your documents. Nexus AI Chat combines General Chat, Research Mode and File Chat in one organised workspace. Every conversation saved in Folders so context never gets lost.';

export const metadata: Metadata = {
  ...generateMetadata(PAGE_TITLE, PAGE_DESCRIPTION, '/products/chat'),
  keywords: [
    'AI chat',
    'AI research assistant',
    'file chat AI',
    'AI document chat',
    'research mode AI',
    'chat with PDF',
    'AI writing assistant',
    'AI knowledge base',
    'Nexus AI Chat',
    'perplexity alternative',
    'ChatGPT alternative',
  ],
};

const ChatPage = () => {
  const faqPlain = chatFaqItems.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Products', path: '/products' },
          { name: 'Chat', path: '/products/chat' },
        ])}
      />
      <JsonLd
        data={productJsonLd({
          name: 'Nexus AI Chat',
          description: PAGE_DESCRIPTION,
          url: '/products/chat',
          lowPrice: '0',
          highPrice: '100',
        })}
      />
      <JsonLd data={faqPageJsonLd(faqPlain)} />
      <ChatProduct />
      <ChatFaq />
      <CTA />
    </>
  );
};

export default ChatPage;
