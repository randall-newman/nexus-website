import MacDetails from '@/src/components/downloads/mac-details';
import MacFaq, { macFaqItems } from '@/src/components/downloads/mac-faq';
import PlatformHero from '@/src/components/downloads/platform-hero';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd, faqPageJsonLd } from '@/src/utils/structured-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'Nexus AI for Mac | Download',
    'Download Nexus AI for Mac. Native Apple Silicon support, menu bar quick access, and the full Nexus AI workspace on macOS.',
    '/downloads/mac'
  ),
};

const MacDownloadPage = () => {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Downloads', path: '/downloads' },
          { name: 'Mac', path: '/downloads/mac' },
        ])}
      />
      <PlatformHero
        badge="Mac"
        title="Nexus AI for Mac"
        description="Native Apple Silicon and Intel support, with the full Nexus AI workspace on your desktop."
        ctaLabel="Download for Mac"
        versionNote="Apple Silicon (M-series) and Intel builds available"
        requirements={[
          { label: 'OS', value: 'macOS 13+' },
          { label: 'Chip', value: 'Apple Silicon / Intel' },
          { label: 'RAM', value: '8 GB+' },
          { label: 'Storage', value: '500 MB' },
        ]}
      />
      <JsonLd data={faqPageJsonLd(macFaqItems)} />
      <MacDetails />
      <MacFaq />
      <CTA />
    </>
  );
};

export default MacDownloadPage;
