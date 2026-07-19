import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { articleMap, helpArticles, getRelatedArticles } from '@/src/data/help/articles';
import { categoryMap } from '@/src/data/help/categories';
import ArticleRenderer from '@/src/components/help/article-renderer';
import ArticleFeedback from '@/src/components/help/article-feedback';

interface Props {
  params: Promise<{ slug: string }>;
}

// All valid slugs are known at build time; anything else must be a real
// HTTP 404 (Next streams metadata, so notFound() thrown there arrives too
// late to change the status code and produced soft-404 200s).
export const dynamicParams = false;

export async function generateStaticParams() {
  return helpArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articleMap[slug];
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articleMap[slug];
  if (!article) notFound();

  const category = categoryMap[article.category];
  const related = getRelatedArticles(article, 4);

  const h2Headings = article.content
    .filter((b): b is Extract<typeof b, { type: 'h2' }> => b.type === 'h2')
    .map((b) => b.text);

  const formattedDate = new Date(article.updatedAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-1.5 text-sm text-gray-500">
        <Link href="/help" className="hover:text-gray-900 transition-colors">
          Help Centre
        </Link>
        <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
        {category && (
          <>
            <span>{category.title}</span>
            <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
          </>
        )}
        <span className="text-gray-900 truncate max-w-[200px] sm:max-w-none">{article.title}</span>
      </nav>

      <div className="flex gap-10">
        {/* Main content */}
        <article className="min-w-0 flex-1">
          {/* Header */}
          <div className="mb-8">
            {category && (
              <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                {category.icon} {category.title}
              </span>
            )}
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{article.title}</h1>
            <p className="mt-2 text-base text-gray-500">{article.description}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {article.readTime} min read
              </span>
              <span>Updated {formattedDate}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="mb-8 h-px bg-gray-100" />

          {/* Article body */}
          <ArticleRenderer blocks={article.content} />

          {/* Feedback */}
          <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5">
            <ArticleFeedback />
          </div>

          {/* Back link */}
          <div className="mt-8">
            <Link
              href="/help"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Help Centre
            </Link>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="hidden w-60 shrink-0 xl:block">
          {/* Table of contents */}
          {h2Headings.length > 1 && (
            <div className="mb-8 rounded-xl border border-gray-200 bg-white p-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                In this article
              </p>
              <nav className="space-y-1.5">
                {h2Headings.map((heading) => (
                  <a
                    key={heading}
                    href={`#${heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className="block text-sm text-gray-600 transition-colors hover:text-blue-700 leading-snug"
                  >
                    {heading}
                  </a>
                ))}
              </nav>
            </div>
          )}

          {/* Related articles */}
          {related.length > 0 && (
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Related articles
              </p>
              <nav className="space-y-2">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/help/${rel.slug}`}
                    className="group flex items-center justify-between gap-2 text-sm text-gray-600 transition-colors hover:text-blue-700"
                  >
                    <span className="leading-snug">{rel.title}</span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-gray-300 group-hover:text-blue-400 transition-colors" />
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
