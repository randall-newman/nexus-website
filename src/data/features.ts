export type FeatureAudience = 'Students' | 'Creators' | 'Professionals' | 'Teams';

export interface FeatureItem {
  title: string;
  description: string;
  href: string;
  theme: 'Research and writing' | 'Creative and media' | 'Productivity and memory' | 'Platform integrations';
  audiences: FeatureAudience[];
  iconClass: string;
  built: boolean;
}

export const features: FeatureItem[] = [
  {
    title: 'Academic Research',
    description: 'Research that turns into a finished, cited paper.',
    href: '/features/academic-research',
    theme: 'Research and writing',
    audiences: ['Students'],
    iconClass: 'ns-shape-1',
    built: true,
  },
  {
    title: 'AI Essay Writer',
    description: 'Essays that are actually yours, finished faster.',
    href: '/features/essay-writer',
    theme: 'Research and writing',
    audiences: ['Students'],
    iconClass: 'ns-shape-2',
    built: true,
  },
  {
    title: 'AI Plagiarism Checker',
    description: 'Check your work for originality before you submit it.',
    href: '/features/plagiarism-checker',
    theme: 'Research and writing',
    audiences: ['Students'],
    iconClass: 'ns-shape-3',
    built: true,
  },
  {
    title: 'AI Image Generator',
    description: 'Turn a description into an image.',
    href: '/features/image',
    theme: 'Creative and media',
    audiences: ['Creators'],
    iconClass: 'ns-shape-4',
    built: true,
  },
  {
    title: 'AI Audio Generator',
    description: 'Give your content a voice.',
    href: '/features/audio',
    theme: 'Creative and media',
    audiences: ['Creators'],
    iconClass: 'ns-shape-5',
    built: true,
  },
  {
    title: 'AI Video Generator',
    description: 'Turn words into cinematic video.',
    href: '/features/video',
    theme: 'Creative and media',
    audiences: ['Creators'],
    iconClass: 'ns-shape-6',
    built: true,
  },
  {
    title: 'AI Presentation / Slides',
    description: 'From idea to finished deck.',
    href: '/features/presentation',
    theme: 'Creative and media',
    audiences: ['Creators', 'Professionals'],
    iconClass: 'ns-shape-6',
    built: true,
  },
  {
    title: 'AI File Chat',
    description: 'Ask your documents anything.',
    href: '/features/ai-file-chat',
    theme: 'Productivity and memory',
    audiences: ['Professionals', 'Students'],
    iconClass: 'ns-shape-7',
    built: true,
  },
  {
    title: 'AI Note Taking / Meeting Notes',
    description: 'Never take meeting notes again.',
    href: '/products/ai-meeting-notes',
    theme: 'Productivity and memory',
    audiences: ['Professionals', 'Teams'],
    iconClass: 'ns-shape-8',
    built: true,
  },
  {
    title: 'AI Memory',
    description: 'An AI that remembers what you told it.',
    href: '/features/memory',
    theme: 'Productivity and memory',
    audiences: ['Professionals', 'Teams'],
    iconClass: 'ns-shape-9',
    built: true,
  },
  {
    title: 'Skills',
    description: 'Teach Nexus AI how you work, once.',
    href: '/features/skills',
    theme: 'Productivity and memory',
    audiences: ['Teams', 'Professionals'],
    iconClass: 'ns-shape-10',
    built: true,
  },
  {
    title: 'Artifacts',
    description: 'From generated to finished, without leaving Nexus AI.',
    href: '/features/artifacts',
    theme: 'Productivity and memory',
    audiences: ['Creators', 'Professionals'],
    iconClass: 'ns-shape-11',
    built: true,
  },
  {
    title: 'Nexus AI for Microsoft 365',
    description: 'Nexus AI, inside the Microsoft tools you already use.',
    href: '/features/microsoft-365',
    theme: 'Platform integrations',
    audiences: ['Professionals', 'Teams'],
    iconClass: 'ns-shape-12',
    built: true,
  },
  {
    title: 'Nexus AI for Chrome',
    description: 'The web, with Nexus AI built in.',
    href: '/downloads/browser-extension',
    theme: 'Platform integrations',
    audiences: ['Professionals', 'Students'],
    iconClass: 'ns-shape-13',
    built: true,
  },
];

export const featureThemes: FeatureItem['theme'][] = [
  'Research and writing',
  'Creative and media',
  'Productivity and memory',
  'Platform integrations',
];

export const featureAudiences: FeatureAudience[] = ['Students', 'Creators', 'Professionals', 'Teams'];
