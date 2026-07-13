import type { Metadata } from 'next';
import HelpHeader from '@/src/components/help/help-header';
import HelpFooter from '@/src/components/help/help-footer';

export const metadata: Metadata = {
  title: {
    template: '%s | Nexus AI Help Centre',
    default: 'Nexus AI Help Centre',
  },
  description:
    'Find answers to common questions, browse guides, and get help with Nexus AI features.',
};

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <HelpHeader />
      <main className="flex-1">{children}</main>
      <HelpFooter />
    </div>
  );
}
