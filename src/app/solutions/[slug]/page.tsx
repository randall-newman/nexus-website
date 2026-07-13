import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { solutionsData } from '@/src/data/solutions';
import SolutionDetailPage from '@/src/components/solutions/solution-detail-page';
import { generateMetadata as gen } from '@/src/utils/generateMetaData';

interface Props {
  params: Promise<{ slug: string }>;
}

const solutionMap = Object.fromEntries(solutionsData.map((s) => [s.slug, s]));

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
