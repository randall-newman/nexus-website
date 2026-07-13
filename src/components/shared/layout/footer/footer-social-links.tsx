import { socialIconMap } from '@/src/components/shared/layout/footer/footer-social-icons';
import { footerSocialLinks } from '@/src/data/footer-links';

export const FooterSocialLinks = () => {
  return (
    <div className="flex items-center gap-2.5">
      {footerSocialLinks.map((item) => {
        const Icon = socialIconMap[item.icon];

        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border-stroke-3 text-secondary/60 hover:border-secondary hover:bg-secondary hover:text-white flex size-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-200"
          >
            <span className="sr-only">{item.label}</span>
            <Icon className="size-3.5" />
          </a>
        );
      })}
    </div>
  );
};
