import AiPlagiarismChecker from '@/src/components/features/ai-plagiarism-checker';
import AiPlagiarismCheckerFaq, {
  aiPlagiarismCheckerFaqItems,
} from '@/src/components/features/ai-plagiarism-checker-faq';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd, faqPageJsonLd, productJsonLd } from '@/src/utils/structured-data';
import type { Metadata } from 'next';

const PAGE_TITLE = 'AI Plagiarism Checker — Sentence-Level Originality Report | Nexus AI';
const PAGE_DESCRIPTION =
  'Scan your essay, research paper, or article against 99B+ web pages and 200M+ academic papers. Get a sentence-level originality score with AI writing detection, inline rewriting, and auto citation suggestions — in under 15 seconds.';

export const metadata: Metadata = {
  ...generateMetadata(PAGE_TITLE, PAGE_DESCRIPTION, '/features/plagiarism-checker'),
  keywords: [
    'AI plagiarism checker',
    'plagiarism detector',
    'originality checker',
    'plagiarism checker for students',
    'AI content detector',
    'academic plagiarism checker',
    'plagiarism checker for essays',
    'sentence-level plagiarism detection',
    'AI writing detector',
    'ChatGPT plagiarism checker',
    'Grammarly plagiarism checker alternative',
    'Turnitin alternative',
    'Paperpal alternative',
    'Quillbot plagiarism checker alternative',
    'Nexus AI plagiarism checker',
  ],
};

const AiPlagiarismCheckerPage = () => {
  const faqPlain = aiPlagiarismCheckerFaqItems.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Features', path: '/features' },
          { name: 'AI Plagiarism Checker', path: '/features/plagiarism-checker' },
        ])}
      />
      <JsonLd
        data={productJsonLd({
          name: 'Nexus AI Plagiarism Checker',
          description: PAGE_DESCRIPTION,
          url: '/features/plagiarism-checker',
          lowPrice: '20',
          highPrice: '100',
        })}
      />
      <JsonLd data={faqPageJsonLd(faqPlain)} />
      <AiPlagiarismChecker />
      <AiPlagiarismCheckerFaq />
      <CTA />
    </>
  );
};

export default AiPlagiarismCheckerPage;
