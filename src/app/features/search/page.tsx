import Search from '@/src/components/features/search';
import SearchFaq, { searchFaqItems } from '@/src/components/features/search-faq';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd, faqPageJsonLd, productJsonLd } from '@/src/utils/structured-data';
import type { Metadata } from 'next';

const PAGE_TITLE = 'AI Search: Real-Time Answers with Sources | Nexus AI';
const PAGE_DESCRIPTION =
  'Ask in plain language and Nexus AI searches the live web, reads the results and returns one direct answer with a citation on every claim. Real-time data, verifiable sources, and findings that flow straight into your documents.';

export const metadata: Metadata = {
  ...generateMetadata(PAGE_TITLE, PAGE_DESCRIPTION, '/features/search'),
  keywords: [
    'AI search',
    'AI answer engine',
    'AI search with sources',
    'real-time AI search',
    'AI web search',
    'cited AI answers',
    'AI search engine alternative',
    'search with citations',
  ],
};

const SearchPage = () => {
  const faqPlain = searchFaqItems.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Features', path: '/features' },
          { name: 'AI Search', path: '/features/search' },
        ])}
      />
      <JsonLd
        data={productJsonLd({
          name: 'Nexus AI Search',
          description: PAGE_DESCRIPTION,
          url: '/features/search',
          lowPrice: '0',
          highPrice: '100',
        })}
      />
      <JsonLd data={faqPageJsonLd(faqPlain)} />
      <Search />
      <SearchFaq />
      <CTA />
    </>
  );
};

export default SearchPage;
