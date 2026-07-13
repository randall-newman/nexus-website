import RevealAnimation from '@/src/components/animation/reveal-animation';
import { PrivacyChoicesButton } from '@/src/components/shared/privacy-choices-button';
import { footerNavColumns } from '@/src/data/footer-links';
import Link from 'next/link';

export const FooterLinkGroups = () => {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
      {footerNavColumns.map((column, columnIndex) => (
        <div key={column.title}>
          <RevealAnimation delay={0.1 + columnIndex * 0.05}>
            <div className="space-y-3">
              <p className="text-tagline-2 text-secondary font-bold tracking-wide uppercase">
                {column.title}
              </p>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    {link.privacyChoices ? (
                      <PrivacyChoicesButton />
                    ) : (
                      <Link
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="footer-link-v2"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
        </div>
      ))}
    </div>
  );
};
