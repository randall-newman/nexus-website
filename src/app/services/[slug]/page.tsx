import ServiceDetailsMarkdown from '@/src/components/service-details/service-details-markdown';
import WhyUse from '@/src/components/service-details/why-use';
import CTA from '@/src/components/shared/cta';
import { ServiceData } from '@/src/interface/interface';
import { generateMetadata as buildMeta } from '@/src/utils/generateMetaData';
import getMarkDownContent from '@/src/utils/getMarkDownContent';
import getMarkDownData from '@/src/utils/getMarkDownData';
import type { Metadata } from 'next';

// All valid slugs are known at build time; anything else must be a real
// HTTP 404 (Next streams metadata, so notFound() thrown there arrives too
// late to change the status code and produced soft-404 200s).
export const dynamicParams = false;

export async function generateStaticParams() {
  const services = getMarkDownData<ServiceData>('src/data/services');
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const doc = getMarkDownContent('src/data/services/', slug);
  const data = doc.data as Partial<ServiceData>;
  const title = data.title
    ? `${data.title} | Nexus AI`
    : 'Service Details | Nexus AI';

  return { ...buildMeta(title), robots: { index: false, follow: false } };
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const doc = getMarkDownContent('src/data/services/', slug);

  return (
    <>
      <ServiceDetailsMarkdown content={doc.content} />
      <WhyUse />
      <CTA />
    </>
  );
};

export default Page;
