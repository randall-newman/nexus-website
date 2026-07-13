import MobileDetails from '@/src/components/downloads/mobile-details';
import PlatformHero from '@/src/components/downloads/platform-hero';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd, faqPageJsonLd } from '@/src/utils/structured-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'Nexus AI Mobile App | Android and iOS',
    'Download Nexus AI for Android and iOS. Chat, research and create on the go, with your Folders and history synced from desktop.',
    '/downloads/mobile'
  ),
};

const mobileFaqItems = [
  {
    question: 'What is the minimum OS version?',
    answer:
      'Recent versions of Android and iOS are supported; the app prompts you to update if needed.',
  },
  {
    question: 'Does the app work offline?',
    answer: 'You can read past conversations offline. Generating new responses needs a connection.',
  },
  {
    question: 'Does mobile usage share the same plan credits as desktop?',
    answer: 'Yes. Mobile and desktop draw from the same plan, so your usage is consistent everywhere.',
  },
];

const MobileDownloadPage = () => {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Downloads', path: '/downloads' },
          { name: 'Mobile', path: '/downloads/mobile' },
        ])}
      />
      <JsonLd data={faqPageJsonLd(mobileFaqItems)} />
      <PlatformHero
        badge="Mobile"
        title="Nexus AI in your pocket"
        description="Chat, research and create on the go, with your Folders and history synced from desktop."
        ctaLabel="Get the app"
        requirements={[
          { label: 'Android', value: '10+' },
          { label: 'iOS', value: '16+' },
          { label: 'Sync', value: 'Cross-device' },
          { label: 'Storage', value: '200 MB' },
        ]}
      />
      <MobileDetails />
      <CTA />
    </>
  );
};

export default MobileDownloadPage;
