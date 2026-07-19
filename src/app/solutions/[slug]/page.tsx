import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { solutionsData } from '@/src/data/solutions';
import SolutionDetailPage from '@/src/components/solutions/solution-detail-page';
import { generateMetadata as gen } from '@/src/utils/generateMetaData';

interface Props {
  params: Promise<{ slug: string }>;
}

const solutionMap = Object.fromEntries(solutionsData.map((s) => [s.slug, s]));

// All valid slugs are known at build time; anything else must be a real
// HTTP 404 (Next streams metadata, so notFound() thrown there arrives too
// late to change the status code and produced soft-404 200s).
export const dynamicParams = false;

export function generateStaticParams() {
  return solutionsData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sol = solutionMap[slug];
  if (!sol) return {};
  return {
    ...gen(
      `${sol.name} — Nexus AI Solutions`,
      sol.description,
      `/solutions/${slug}`
    ),
  };
}

export default async function SolutionSlugPage({ params }: Props) {
  const { slug } = await params;
  const solution = solutionMap[slug];
  if (!solution) notFound();
  return <SolutionDetailPage solution={solution} />;
}
