import Pillars from '@/src/components/products/pillars';
import ProductsFaq from '@/src/components/products/products-faq';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { breadcrumbJsonLd, productJsonLd } from '@/src/utils/structured-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'Nexus AI Products | Chat, Creative Studio, Code, Artifacts',
    'Explore the Nexus AI product family: Chat, Creative Studio, Code and Artifacts. One platform, four products, one unified workspace.',
    '/products'
  ),
};

const ProductsPage = () => {
  return (
    <>
      <JsonLd
        data={productJsonLd({
          name: 'Nexus AI Products',
          description: 'Chat, Creative Studio, Code and Artifacts — the four pillars of Nexus AI.',
          url: '/products',
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Products', path: '/products' },
        ])}
      />
      <Pillars />
      <ProductsFaq />
      <CTA />
    </>
  );
};

export default ProductsPage;
