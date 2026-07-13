import { MobileMenuData } from '../interface/interface';

export const mobileMenuData: MobileMenuData[] = [
  {
    id: 'products',
    title: 'Products',
    submenu: [
      { id: 'all-products', label: 'All Products', href: '/products' },
      { id: 'chat', label: 'Chat', href: '/products/chat' },
      { id: 'all-features', label: 'All Features', href: '/features' },
      { id: 'ai-file-chat', label: 'AI File Chat', href: '/features/ai-file-chat' },
      { id: 'academic-research', label: 'Academic Research', href: '/features/academic-research' },
      { id: 'ai-essay-writer', label: 'AI Essay Writer', href: '/features/essay-writer' },
      { id: 'artifacts', label: 'Artifacts', href: '/features/artifacts' },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing',
    href: '/pricing',
    submenu: [],
  },
  {
    id: 'about',
    title: 'About',
    href: '/about',
    submenu: [],
  },
  {
    id: 'solutions',
    title: 'Solutions',
    submenu: [
      { id: 'all-solutions', label: 'All Solutions', href: '/solutions' },
      { id: 'for-businesses', label: 'For Businesses', href: '/solutions/for-businesses' },
      { id: 'for-creators', label: 'For Creators', href: '/solutions/for-creators' },
      { id: 'for-enterprise', label: 'For Enterprise', href: '/solutions/for-enterprise' },
      { id: 'for-students', label: 'For Students', href: '/solutions/for-students' },
      { id: 'for-teams', label: 'For Teams', href: '/solutions/for-teams' },
      { id: 'education', label: 'Education', href: '/solutions/education' },
      { id: 'financial-services', label: 'Financial Services', href: '/solutions/financial-services' },
      { id: 'legal', label: 'Legal', href: '/solutions/legal' },
      { id: 'marketing', label: 'Marketing', href: '/solutions/marketing' },
      { id: 'technology', label: 'Technology', href: '/solutions/technology' },
      { id: 'healthcare', label: 'Healthcare', href: '/solutions/healthcare' },
    ],
  },
  {
    id: 'resources',
    title: 'Resources',
    submenu: [
      { id: 'downloads', label: 'Downloads', href: '/downloads' },
      { id: 'blog', label: 'Blog', href: '/blog' },
      { id: 'reviews', label: 'Reviews', href: '/reviews' },
      { id: 'affiliate-program', label: 'Affiliate Program', href: '/affiliates' },
      { id: 'privacy-policy', label: 'Privacy Policy', href: '/legal/privacy-policy' },
      { id: 'terms-of-service', label: 'Terms of Service', href: '/legal/terms-of-service' },
      { id: 'help-centre', label: 'Help Centre', href: '/help' },
      { id: 'brand', label: 'Brand', href: '/brand' },
    ],
  },
  {
    id: 'login',
    title: 'Login',
    href: '/login',
    submenu: [],
  },
];
