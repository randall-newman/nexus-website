import FeatureGrid from '@/src/components/features/feature-grid';
import FeaturesFaq from '@/src/components/features/features-faq';
import FeaturesSpotlight from '@/src/components/features/features-spotlight';
import Intro from '@/src/components/features/intro';
import ProductsCrosslink from '@/src/components/features/products-crosslink';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd } from '@/src/utils/structured-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'Nexus AI Features | Everything You Can Do',
    'From AI image, audio and video generation to academic research, file chat and meeting notes. Explore all 14 features across Nexus AI, organised by category.',
    '/features'
  ),
};

const FeaturesPage = () => {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Features', path: '/features' },
        ])}
      />
      <Intro />
      <FeaturesSpotlight />
      <FeatureGrid />
      <ProductsCrosslink />
      <FeaturesFaq />
      <CTA />
    </>
  );
};

export default FeaturesPage;
