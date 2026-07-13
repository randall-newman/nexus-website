import CodeProductPage from '@/src/components/products/code';
import { codeFaqItems } from '@/src/components/products/code-faq';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd, faqPageJsonLd, productJsonLd } from '@/src/utils/structured-data';
import type { Metadata } from 'next';

const PAGE_TITLE = 'AI Code Assistant — Write, Review and Ship Faster | Nexus AI';
const PAGE_DESCRIPTION =
  'Nexus AI Code catches security gaps, logic errors and edge cases in your codebase, with transparent reasoning on every suggestion. Generate, review, refactor and deploy from one AI workspace. Supports TypeScript, Python, Go, Rust, Java and 10+ more languages.';

export const metadata: Metadata = {
  ...generateMetadata(PAGE_TITLE, PAGE_DESCRIPTION, '/products/code'),
  keywords: [
    'AI code assistant',
    'AI code review',
    'code generation AI',
    'AI coding tool',
    'code agents',
    'AI pair programmer',
    'TypeScript AI',
    'Python AI assistant',
    'GitHub Copilot alternative',
    'Nexus AI Code',
  ],
};

const CodePage = () => {
  const faqPlain = codeFaqItems.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Products', path: '/products' },
          { name: 'Code', path: '/products/code' },
        ])}
      />
      <JsonLd
        data={productJsonLd({
          name: 'Nexus AI Code',
          description: PAGE_DESCRIPTION,
          url: '/products/code',
          lowPrice: '0',
          highPrice: '100',
        })}
      />
      <JsonLd data={faqPageJsonLd(faqPlain)} />
      <CodeProductPage />
      <CTA />
    </>
  );
};

export default CodePage;
