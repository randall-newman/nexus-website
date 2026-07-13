import ChatbotProduct from '@/src/components/products/chatbot';
import ChatbotFaq, { chatbotFaqItems } from '@/src/components/products/chatbot-faq';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd, faqPageJsonLd, productJsonLd } from '@/src/utils/structured-data';
import type { Metadata } from 'next';

const PAGE_TITLE = 'AI Chatbot — Train, Deploy and Automate Customer Support | Nexus AI';
const PAGE_DESCRIPTION =
  'Build and deploy an AI chatbot trained on your content in minutes, no code required. Automate up to 80% of customer queries across your website, WhatsApp, Facebook Messenger, Instagram, Telegram and Slack. Lead capture, analytics and seamless human handoff included.';

export const metadata: Metadata = {
  ...generateMetadata(PAGE_TITLE, PAGE_DESCRIPTION, '/products/chatbot'),
  keywords: [
    'AI chatbot',
    'customer service chatbot',
    'WhatsApp chatbot',
    'Facebook Messenger chatbot',
    'no-code chatbot',
    'chatbot builder',
    'AI support agent',
    'chatbase alternative',
    'chatbot.com alternative',
    'Nexus AI Chatbot',
    'website chatbot',
    'automated customer support',
  ],
};

const ChatbotPage = () => {
  const faqPlain = chatbotFaqItems.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Products', path: '/products' },
          { name: 'Chatbot', path: '/products/chatbot' },
        ])}
      />
      <JsonLd
        data={productJsonLd({
          name: 'Nexus AI Chatbot',
          description: PAGE_DESCRIPTION,
          url: '/products/chatbot',
          lowPrice: '29',
          highPrice: '199',
        })}
      />
      <JsonLd data={faqPageJsonLd(faqPlain)} />
      <ChatbotProduct />
      <ChatbotFaq />
      <CTA />
    </>
  );
};

export default ChatbotPage;
