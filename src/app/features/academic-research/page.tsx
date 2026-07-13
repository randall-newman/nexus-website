import AcademicResearch from '@/src/components/features/academic-research';
import AcademicResearchFaq, {
  academicResearchFaqItems,
} from '@/src/components/features/academic-research-faq';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd, faqPageJsonLd, productJsonLd } from '@/src/utils/structured-data';
import type { Metadata } from 'next';

const PAGE_TITLE = 'AI Academic Research — Citations, Literature Review and Plagiarism Checker | Nexus AI';
const PAGE_DESCRIPTION =
  'Upload your papers, search 200M+ academic sources in real time and get cited summaries, literature reviews and essay drafts with every claim sourced. APA, MLA, Chicago, Harvard and more citation styles. Plagiarism checker included.';

export const metadata: Metadata = {
  ...generateMetadata(PAGE_TITLE, PAGE_DESCRIPTION, '/features/academic-research'),
  keywords: [
    'AI academic research',
    'AI citation generator',
    'AI plagiarism checker',
    'AI literature review',
    'AI essay writer with citations',
    'research paper AI',
    'APA citation generator',
    'MLA citation generator',
    'Paperpal alternative',
    'Jenni AI alternative',
    'academic writing AI',
    'Nexus AI academic',
  ],
};

const AcademicResearchPage = () => {
  const faqPlain = academicResearchFaqItems.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Features', path: '/features' },
          { name: 'Academic Research', path: '/features/academic-research' },
        ])}
      />
      <JsonLd
        data={productJsonLd({
          name: 'Nexus AI Academic Research',
          description: PAGE_DESCRIPTION,
          url: '/features/academic-research',
          lowPrice: '0',
          highPrice: '100',
        })}
      />
      <JsonLd data={faqPageJsonLd(faqPlain)} />
      <AcademicResearch />
      <AcademicResearchFaq />
      <CTA />
    </>
  );
};

export default AcademicResearchPage;
