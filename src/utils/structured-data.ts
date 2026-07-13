import { footerSocialLinks } from '@/src/data/footer-links';
import { DEFAULT_URL } from '@/src/utils/generateMetaData';

const SITE_URL = DEFAULT_URL.replace(/\/$/, '');

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_ID = `${SITE_URL}/#logo`;

export const organizationJsonLd = () => ({
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: 'Nexus AI',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    '@id': LOGO_ID,
    url: `${SITE_URL}/images/logo/nexus-ai-logo.png`,
    contentUrl: `${SITE_URL}/images/logo/nexus-ai-logo.png`,
    width: 1024,
    height: 197,
    caption: 'Nexus AI',
  },
  image: { '@id': LOGO_ID },
  sameAs: footerSocialLinks.map((link) => link.href),
  parentOrganization: {
    '@type': 'Organization',
    name: 'Verbosec',
  },
});

export const websiteJsonLd = () => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: 'Nexus AI',
  publisher: { '@id': ORGANIZATION_ID },
  inLanguage: 'en-US',
});

export const webPageJsonLd = (props: { url: string; name: string; description: string }) => {
  const pageId = `${SITE_URL}${props.url}#webpage`;

  return {
    '@type': 'WebPage',
    '@id': pageId,
    url: `${SITE_URL}${props.url}`,
    name: props.name,
    description: props.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORGANIZATION_ID },
    inLanguage: 'en-US',
  };
};

export const softwareApplicationJsonLd = () => ({
  '@type': 'SoftwareApplication',
  name: 'Nexus AI',
  url: SITE_URL,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, macOS, Windows, Linux, Android, iOS',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
});

export const productJsonLd = (props: {
  name: string;
  description: string;
  url: string;
  lowPrice?: string;
  highPrice?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: props.name,
  description: props.description,
  url: `${SITE_URL}${props.url}`,
  brand: {
    '@type': 'Brand',
    name: 'Nexus AI',
  },
  ...(props.lowPrice
    ? {
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'USD',
          lowPrice: props.lowPrice,
          highPrice: props.highPrice,
        },
      }
    : {}),
});

export const faqPageJsonLd = (items: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

export const articleJsonLd = (props: {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  datePublished: string;
  authorName: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: props.title,
  description: props.description,
  url: `${SITE_URL}${props.url}`,
  mainEntityOfPage: `${SITE_URL}${props.url}`,
  image: props.imageUrl.startsWith('http') ? props.imageUrl : `${SITE_URL}${props.imageUrl}`,
  datePublished: props.datePublished,
  dateModified: props.datePublished,
  author: {
    '@type': 'Person',
    name: props.authorName,
  },
  publisher: { '@id': ORGANIZATION_ID },
});

export const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

/**
 * A single interlinked @graph (Organization -> WebSite -> WebPage, plus
 * SoftwareApplication and FAQPage) instead of disconnected scripts, so crawlers
 * can resolve the same entity references the way Yoast's graph output does.
 */
export const homepageJsonLdGraph = (props: {
  name: string;
  description: string;
  faqItems?: { question: string; answer: string }[];
}) => ({
  '@context': 'https://schema.org',
  '@graph': [
    organizationJsonLd(),
    websiteJsonLd(),
    webPageJsonLd({ url: '/', name: props.name, description: props.description }),
    softwareApplicationJsonLd(),
    ...(props.faqItems?.length
      ? [
          {
            '@type': 'FAQPage',
            mainEntity: props.faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          },
        ]
      : []),
  ],
});
