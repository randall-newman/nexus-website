'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Search, ArrowRight, X } from 'lucide-react';
import Link from 'next/link';
import { helpArticles } from '@/src/data/help/articles';
import { helpCategories } from '@/src/data/help/categories';
import type { Article } from '@/src/data/help/types';
import { useRouter } from 'next/navigation';

const categoryTitles = Object.fromEntries(helpCategories.map((c) => [c.slug, c.title]));

function scoreArticle(article: Article, query: string): number {
  const q = query.toLowerCase();
  let score = 0;
  if (article.title.toLowerCase().includes(q)) score += 5;
  if (article.description.toLowerCase().includes(q)) score += 3;
  if (article.category.toLowerCase().replace(/-/g, ' ').includes(q)) score += 2;
  const titleWords = article.title.toLowerCase().split(/\s+/);
  const queryWords = q.split(/\s+/);
  const matchedWords = queryWords.filter((qw) => titleWords.some((tw) => tw.startsWith(qw)));
  score += matchedWords.length * 2;
  return score;
}

const POPULAR_SEARCHES = [
  'upgrade plan',
  'reset password',
  'generate images',
  'essay writer',
  'contact support',
];

interface Props {
  placeholder?: string;
  className?: string;
  size?: 'sm' | 'lg';
}

export default function HelpSearch({ placeholder = 'Search for answers...', className = '', size = 'sm' }: Props) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<Article[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const search = useCallback((q: string) => {
    if (!q.trim()) {
      setResults([]);
      return;
    }
    const scored = helpArticles
      .map((a) => ({ article: a, score: scoreArticle(a, q) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map(({ article }) => article);
    setResults(scored);
  }, []);

  useEffect(() => {
    search(query);
  }, [query, search]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (results.length > 0) {
      router.push(`/help/${results[0].slug}`);
      setIsOpen(false);
      setQuery('');
    }
  }

  function highlight(text: string, q: string) {
    if (!q.trim()) return text;
    const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-yellow-100 text-yellow-900 rounded px-0.5">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }

  const inputSizeClass = size === 'lg'
    ? 'h-14 pl-12 pr-12 text-base rounded-2xl'
    : 'h-10 pl-10 pr-10 text-sm rounded-xl';
  const iconSizeClass = size === 'lg' ? 'h-5 w-5 left-4' : 'h-4 w-4 left-3';

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <Search className={`absolute top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none ${iconSizeClass}`} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsOpen(true)}
            placeholder={placeholder}
            className={`w-full border border-gray-200 bg-white text-gray-900 shadow-sm outline-none transition-shadow placeholder:text-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 ${inputSizeClass}`}
            autoComplete="off"
          />
          {query && (
            <button
              type="button"
              onClick={() => { setQuery(''); inputRef.current?.focus(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </form>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
          {!query.trim() ? (
            <div className="p-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Popular searches
              </p>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCHES.map((s) => (
                  <button
                    key={s}
                    onClick={() => { setQuery(s); inputRef.current?.focus(); }}
                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-600 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="p-6 text-center text-sm text-gray-500">
              No results for &ldquo;{query}&rdquo;.{' '}
              <a href="/help/contact-support" className="text-blue-600 hover:underline">
                Contact support
              </a>
            </div>
          ) : (
            <div className="py-2">
              <p className="mb-1 px-4 text-xs font-semibold uppercase tracking-wider text-gray-400 pt-2">
                Results
              </p>
              {results.map((article) => (
                <Link
                  key={article.slug}
                  href={`/help/${article.slug}`}
                  onClick={() => { setIsOpen(false); setQuery(''); }}
                  className="flex items-start gap-3 px-4 py-3 transition-colors hover:bg-gray-50"
                >
                  <Search className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {highlight(article.title, query)}
                    </p>
                    <p className="text-xs text-gray-500">
                      {categoryTitles[article.category] ?? article.category}
                    </p>
                  </div>
                  <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-300" />
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
