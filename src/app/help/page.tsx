import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { helpCategories } from '@/src/data/help/categories';
import { helpArticles, popularSlugs } from '@/src/data/help/articles';
import HelpSearch from '@/src/components/help/help-search';

export const metadata: Metadata = {
  title: 'Help Centre',
  description:
    'Find answers to common questions about Nexus AI — getting started, billing, features, and troubleshooting.',
};

export default function HelpHomePage() {
  const popularArticles = popularSlugs
    .map((slug) => helpArticles.find((a) => a.slug === slug))
    .filter(Boolean) as typeof helpArticles;

  const articlesByCategory = Object.fromEntries(
    helpCategories.map((cat) => [
      cat.slug,
      helpArticles.filter((a) => a.category === cat.slug),
    ])
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-[#000C60] px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
            How can we help you?
          </h1>
          <p className="mb-8 text-base text-white/60">
            Search our help articles or browse by category below.
          </p>
          <HelpSearch
            placeholder="Search for answers..."
            size="lg"
            className="mx-auto max-w-xl"
          />
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-white/40">Popular:</span>
            {['Create account', 'Upgrade plan', 'Essay Writer', 'Generate images', 'Contact support'].map(
              (label) => (
                <Link
                  key={label}
                  href={`/help?q=${encodeURIComponent(label.toLowerCase())}`}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/70 transition-colors hover:bg-white/20 hover:text-white"
                >
                  {label}
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-xl font-semibold text-gray-900">Browse by category</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {helpCategories.map((cat) => {
              const count = articlesByCategory[cat.slug]?.length ?? 0;
              return (
                <Link
                  key={cat.slug}
                  href={`#category-${cat.slug}`}
                  className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                >
                  <span className="text-3xl leading-none">{cat.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-blue-700">
                      {cat.title}
                    </p>
                    <p className="mt-1 text-xs text-gray-500 leading-snug">{cat.description}</p>
                    <p className="mt-2 text-xs font-medium text-gray-400">
                      {count} article{count !== 1 ? 's' : ''}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-xl font-semibold text-gray-900">Popular articles</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {popularArticles.map((article) => {
              const cat = helpCategories.find((c) => c.slug === article.category);
              return (
                <Link
                  key={article.slug}
                  href={`/help/${article.slug}`}
                  className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-blue-200 hover:shadow-sm"
                >
                  <span className="text-xl leading-none mt-0.5">{cat?.icon ?? '📄'}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 group-hover:text-blue-700 truncate">
                      {article.title}
                    </p>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-1">{article.description}</p>
                    <div className="mt-2 flex items-center gap-3">
                      <span className="text-xs text-gray-400">{cat?.title}</span>
                      <span className="text-gray-200">·</span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock className="h-3 w-3" />
                        {article.readTime} min read
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-gray-300 group-hover:text-blue-400 transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Article Listings */}
      <section className="bg-gray-50 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl space-y-14">
          {helpCategories.map((cat) => {
            const articles = articlesByCategory[cat.slug] ?? [];
            return (
              <div key={cat.slug} id={`category-${cat.slug}`}>
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-2xl">{cat.icon}</span>
                  <h2 className="text-lg font-semibold text-gray-900">{cat.title}</h2>
                </div>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {articles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/help/${article.slug}`}
                      className="group flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-all hover:border-blue-200 hover:text-blue-700 hover:shadow-sm"
                    >
                      <span className="truncate">{article.title}</span>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-gray-300 group-hover:text-blue-400 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Still need help? */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-2xl text-center">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <p className="text-2xl mb-3">💬</p>
            <h2 className="text-lg font-semibold text-gray-900">
              Can&apos;t find what you&apos;re looking for?
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Our support team is happy to help with anything not covered here.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/help/contact-support"
                className="rounded-xl bg-[#000C60] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Contact Support
              </Link>
              <Link
                href="https://community.mynexusai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
              >
                Community Forum
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
