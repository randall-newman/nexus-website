import PlatformHero from '@/src/components/downloads/platform-hero';
import WindowsDetails from '@/src/components/downloads/windows-details';
import WindowsFaq, { windowsFaqItems } from '@/src/components/downloads/windows-faq';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd, faqPageJsonLd } from '@/src/utils/structured-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'Nexus AI for Windows | Download',
    'Download Nexus AI for Windows. One AI workspace for chat, research, documents and creative work, right on your desktop.',
    '/downloads/windows'
  ),
};

const WindowsDownloadPage = () => {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Downloads', path: '/downloads' },
          { name: 'Windows', path: '/downloads/windows' },
        ])}
      />
      <PlatformHero
        badge="Windows"
        title="Nexus AI for Windows"
        description="One AI workspace for chat, research, documents and creative work, right on your desktop."
        ctaLabel="Download for Windows"
        versionNote="Windows 10 and 11 supported"
        requirements={[
          { label: 'OS', value: 'Windows 10+' },
          { label: 'RAM', value: '8 GB+' },
          { label: 'Storage', value: '500 MB' },
          { label: 'Arch', value: '64-bit' },
        ]}
      />
      <JsonLd data={faqPageJsonLd(windowsFaqItems)} />
      <WindowsDetails />
      <WindowsFaq />
      <CTA />
    </>
  );
};

export default WindowsDownloadPage;
