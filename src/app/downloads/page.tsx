import Continuity from '@/src/components/downloads/continuity';
import DownloadsFaq, { downloadsFaqItems } from '@/src/components/downloads/downloads-faq';
import PlatformGrid from '@/src/components/downloads/platform-grid';
import WhyDownload from '@/src/components/downloads/why-download';
import { JsonLd } from '@/src/components/shared/json-ld';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd, faqPageJsonLd } from '@/src/utils/structured-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'Download Nexus AI | Desktop, Mobile and Browser',
    'Get Nexus AI on Mac, Windows, Linux, Android, iOS, or as a Chrome extension. One AI workspace, everywhere you work.',
    '/downloads'
  ),
};

const DownloadsPage = () => {
  const faqPlain = downloadsFaqItems.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Downloads', path: '/downloads' },
        ])}
      />
      <JsonLd data={faqPageJsonLd(faqPlain)} />
      <PlatformGrid />
      <WhyDownload />
      <DownloadsFaq />
      <Continuity />
    </>
  );
};

export default DownloadsPage;
