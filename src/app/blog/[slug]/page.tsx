import DetailsInfo from '@/src/components/blog-details/details-info';
import RelatedBlog from '@/src/components/blog-details/related-blog';
import { JsonLd } from '@/src/components/shared/json-ld';
import CTA from '@/src/components/shared/cta';
import { BlogPost } from '@/src/interface/interface';
import { generateMetadata as buildMeta } from '@/src/utils/generateMetaData';
import getMarkDownContent from '@/src/utils/getMarkDownContent';
import getMarkDownData from '@/src/utils/getMarkDownData';
import { articleJsonLd, breadcrumbJsonLd } from '@/src/utils/structured-data';
import type { Metadata } from 'next';

// All valid slugs are known at build time; anything else must be a real
// HTTP 404 (Next streams metadata, so notFound() thrown there arrives too
// late to change the status code and produced soft-404 200s).
export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getMarkDownData<BlogPost>('src/data/blog', false, 'order');
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const doc = getMarkDownContent('src/data/blog/', slug);
  const data = doc.data as Partial<BlogPost>;
  const title = data.title ? `${data.title} - Blog | Nexus AI` : 'Blog Details | Nexus AI';

  return buildMeta(title, data.excerpt, `/blog/${slug}`, data.image);
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const doc = getMarkDownContent('src/data/blog/', slug);
  const data = doc.data as Partial<BlogPost>;

  return (
    <>
      {data.title && data.excerpt && data.image && data.dateTime && data.authorName ? (
        <JsonLd
          data={articleJsonLd({
            title: data.title,
            description: data.excerpt,
            url: `/blog/${slug}`,
            imageUrl: data.image,
            datePublished: data.dateTime,
            authorName: data.authorName,
          })}
        />
      ) : null}
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: data.title ?? 'Post', path: `/blog/${slug}` },
        ])}
      />
      <DetailsInfo data={data} content={doc.content} />
      <RelatedBlog currentSlug={slug} />
      <CTA />
    </>
  );
};

export default Page;
