export interface FooterLinkItem {
  label: string;
  href: string;
  external?: boolean;
  privacyChoices?: boolean;
}

export interface FooterLinkColumn {
  title: string;
  links: FooterLinkItem[];
}

export const footerNavColumns: FooterLinkColumn[] = [
  {
    title: 'Products',
    links: [
      { label: 'Chat', href: '/products/chat' },
      { label: 'Creative Studio', href: '/products/creative-studio' },
      { label: 'Code', href: '/products/code' },
      { label: 'Chatbot', href: '/products/chatbot' },
      { label: 'Notes', href: '/products/ai-meeting-notes' },
    ],
  },
  {
    title: 'Pricing',
    links: [
      { label: 'Monthly Pricing', href: '/pricing' },
      { label: 'Annual Pricing', href: '/pricing' },
      { label: 'Usage Pricing', href: '/pricing/add-ons' },
      { label: 'Team Pricing', href: '/pricing/team' },
      { label: 'Meeting Notes', href: '/pricing/meeting-notes' },
      { label: 'Chatbot', href: '/pricing/chatbot' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Brand', href: '/brand' },
      { label: 'Newsroom', href: 'https://verbosec.com/newsroom', external: true },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: 'https://verbosec.com/careers', external: true },
      { label: 'Solutions', href: '/solutions' },
    ],
  },
  {
    title: 'Use Cases',
    links: [
      { label: 'Academic Research', href: '/features/academic-research' },
      { label: 'AI Image Generator', href: '/features/image' },
      { label: 'AI Plagiarism Checker', href: '/features/ai-plagiarism-checker' },
      { label: 'AI Audio Generator', href: '/features/audio' },
      { label: 'AI Presentation / Slides', href: '/features/presentation' },
      { label: 'AI Essay Writer', href: '/features/essay-writer' },
    ],
  },
  {
    title: 'Business',
    links: [
      { label: 'For Teams', href: '/team' },
      { label: 'Enterprise', href: '/enterprise' },
      { label: 'Team Pricing', href: '/pricing/team' },
      { label: 'Contact Sales', href: '/contact-sales' },
      { label: 'API Login', href: '/developers/console' },
      { label: 'Documentation', href: '/developers/docs' },
    ],
  },
  {
    title: 'Downloads',
    links: [
      { label: 'Mobile App', href: '/downloads/mobile' },
      { label: 'Linux', href: '/downloads/linux' },
      { label: 'Windows', href: '/downloads/windows' },
      { label: 'MacOS', href: '/downloads/mac' },
      { label: 'Browser Extension', href: '/downloads/browser-extension' },
      { label: 'Microsoft Extensions', href: '/features/microsoft-365' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Downloads', href: '/downloads' },
      { label: 'Affiliate Program', href: '/affiliates' },
      { label: 'Help Centre', href: '/help', external: true },
      { label: 'Feature Request', href: '#' },
      { label: 'Trust & Safety', href: '/trust' },
      { label: 'Reviews', href: '/reviews' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/legal/privacy' },
      { label: 'Terms of Service', href: '/legal/terms' },
      { label: 'Usage Policy', href: '/legal/usage-policy' },
      { label: 'Affiliate Policy', href: '/legal/affiliate-policy' },
      { label: 'Refund Policy', href: '/legal/refunds' },
      { label: 'Your Privacy Choices', href: '#', privacyChoices: true },
    ],
  },
];

export interface FooterSocialLink {
  label: string;
  href: string;
  icon: 'facebook' | 'instagram' | 'x' | 'tiktok' | 'linkedin' | 'spaces';
}

export const footerSocialLinks: FooterSocialLink[] = [
  { label: 'Facebook', href: 'https://facebook.com/nexusaiofficial', icon: 'facebook' },
  { label: 'Instagram', href: 'https://instagram.com/nexusaiofficial/', icon: 'instagram' },
  { label: 'X', href: 'https://x.com/mynexusai', icon: 'x' },
  { label: 'TikTok', href: 'https://tiktok.com/@nexusaiofficial', icon: 'tiktok' },
  { label: 'LinkedIn', href: 'https://linkedin.com/showcase/nexusaiofficial/', icon: 'linkedin' },
  { label: 'Spaces', href: 'https://spacesone.com/nexusai', icon: 'spaces' },
];
