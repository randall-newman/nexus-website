import AiPlagiarismChecker from '@/src/components/features/ai-plagiarism-checker';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'AI Plagiarism Checker | Nexus AI',
    'Get a sentence-level originality report before you submit. Nexus AI checks against web sources, academic databases, and AI-generated content signals.',
    '/features/ai-plagiarism-checker'
  ),
};

const AiPlagiarismCheckerPage = () => {
  return (
    <>
      <AiPlagiarismChecker />
      <CTA />
    </>
  );
};

export default AiPlagiarismCheckerPage;
