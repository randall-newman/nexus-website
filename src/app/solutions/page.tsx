import type { Metadata } from 'next';
import SolutionsPage from '@/src/components/solutions/solutions-page';
import { generateMetadata as gen } from '@/src/utils/generateMetaData';

export const metadata: Metadata = {
  ...gen(
    'Solutions — Nexus AI for Every Team & Industry',
    'Discover how Nexus AI helps businesses, students, creators, legal teams, marketers, educators, and more achieve better outcomes with AI.',
    '/solutions'
  ),
  keywords: [
    'AI for business', 'AI for education', 'AI for legal', 'AI for healthcare',
    'AI for marketing', 'AI for students', 'enterprise AI', 'AI productivity',
    'Nexus AI solutions',
  ],
};

export default function SolutionsRoute() {
  return <SolutionsPage />;
}
