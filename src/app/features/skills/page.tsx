import SkillsPage from '@/src/components/skills/skills-page';
import SkillsFaq from '@/src/components/skills/skills-faq';
import { skillsFaqItems } from '@/src/components/skills/skills-faq-data';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd, faqPageJsonLd, productJsonLd } from '@/src/utils/structured-data';
import type { Metadata } from 'next';

const PAGE_TITLE = 'Skills — Teach Nexus AI How You Work | Nexus AI';
const PAGE_DESCRIPTION =
  'Create reusable skills in plain English and Nexus AI applies them automatically across Chat, Essay Writer, Creative Studio, and Artifacts. Brand voice, code standards, meeting formats, research frameworks — build once, use everywhere.';

export const metadata: Metadata = {
  ...generateMetadata(PAGE_TITLE, PAGE_DESCRIPTION, '/features/skills'),
  keywords: [
    'AI skills',
    'custom AI instructions',
    'AI workflow automation',
    'reusable AI prompts',
    'AI brand voice',
    'AI code reviewer',
    'AI meeting notes template',
    'AI custom behavior',
    'persistent AI instructions',
    'ChatGPT custom instructions alternative',
    'Claude skills alternative',
    'Nexus AI skills',
    'AI process automation',
    'AI style guide',
    'AI writing rules',
  ],
};

const SkillsRoute = () => {
  const faqPlain = skillsFaqItems.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Features', path: '/features' },
          { name: 'Skills', path: '/features/skills' },
        ])}
      />
      <JsonLd
        data={productJsonLd({
          name: 'Nexus AI Skills',
          description: PAGE_DESCRIPTION,
          url: '/features/skills',
          lowPrice: '20',
          highPrice: '100',
        })}
      />
      <JsonLd data={faqPageJsonLd(faqPlain)} />
      <SkillsPage />
      <SkillsFaq />
      <CTA />
    </>
  );
};

export default SkillsRoute;
