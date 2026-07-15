import type { HelpCategory } from './types';

export const helpCategories: HelpCategory[] = [
  {
    slug: 'getting-started',
    title: 'Getting Started',
    description: 'Create your account and learn the basics of Nexus AI.',
    icon: '🚀',
  },
  {
    slug: 'account-billing',
    title: 'Account & Billing',
    description: 'Manage your plan, payment, and account settings.',
    icon: '💳',
  },
  {
    slug: 'ai-chat',
    title: 'AI Chat',
    description: 'Tips for better conversations, file chat, and AI Memory.',
    icon: '💬',
  },
  {
    slug: 'creative-studio',
    title: 'Creative Studio',
    description: 'Generate images, audio, and video with AI.',
    icon: '🎨',
  },
  {
    slug: 'writing-tools',
    title: 'Writing Tools',
    description: 'Essay Writer, Academic Research, Plagiarism Checker, and Artifacts.',
    icon: '✍️',
  },
  {
    slug: 'skills',
    title: 'Skills',
    description: 'Create reusable AI instructions tailored to how you work.',
    icon: '⚡',
  },
  {
    slug: 'connectors',
    title: 'Connectors',
    description: 'Link Nexus AI to your apps, and build or submit your own connector.',
    icon: '🔌',
  },
  {
    slug: 'privacy-security',
    title: 'Privacy & Security',
    description: 'Data handling, account security, and your rights.',
    icon: '🔒',
  },
  {
    slug: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Fix common issues and get in touch with our support team.',
    icon: '🔧',
  },
];

export const categoryMap = Object.fromEntries(helpCategories.map((c) => [c.slug, c]));
