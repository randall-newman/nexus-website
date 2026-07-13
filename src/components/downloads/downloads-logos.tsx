import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonWhite } from '@/src/components/shared/ui/button';
import Link from 'next/link';

const logoAssets = [
  {
    title: 'Colour Logo',
    description: 'Navy wordmark with gradient icon. For use on white or light backgrounds.',
    file: '/images/logo/main-logo.svg',
    download: 'nexus-ai-logo-colour.svg',
    bg: 'bg-white border-stroke-3',
    preview: 'light',
  },
  {
    title: 'White Logo',
    description: 'White wordmark with gradient icon. For use on dark or coloured backgrounds.',
    file: '/images/logo/main-logo-white.svg',
    download: 'nexus-ai-logo-white.svg',
    bg: 'bg-secondary',
    preview: 'dark',
  },
  {
    title: 'Black Logo',
    description: 'Outline wordmark for single-colour print and light-grey backgrounds.',
    file: '/images/logo/main-logo-outline.svg',
    download: 'nexus-ai-logo-black.svg',
    bg: 'bg-background-13 border-stroke-3',
    preview: 'light',
  },
  {
    title: 'Icon Only',
    description: 'Gradient icon mark. Use when full wordmark is not needed.',
    file: '/images/logo/logo.svg',
    download: 'nexus-ai-icon.svg',
    bg: 'bg-white border-stroke-3',
    preview: 'icon',
  },
];

const DownloadsLogos = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-14">
          <div className="space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Brand assets</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Official Nexus AI logos</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-background-14/60 mx-auto max-w-[480px] leading-relaxed">
                Download the official logo files for use in press, marketing and product
                integrations. See our{' '}
                <Link href="/brand" className="text-secondary font-medium underline underline-offset-2">
                  Brand Guidelines
                </Link>{' '}
                for usage rules and colour references.
              </p>
            </TextReveal>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {logoAssets.map((asset, i) => (
              <RevealAnimation
                key={asset.title}
                delay={0.1 * (i + 1)}
                asChild={false}
                className="flex flex-col gap-y-4 rounded-2xl border border-stroke-3 bg-white overflow-hidden"
              >
                {/* Preview */}
                <div
                  className={`${asset.bg} border-b border-stroke-3 flex h-[120px] items-center justify-center p-6`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset.file}
                    alt={asset.title}
                    className={`max-h-10 object-contain ${asset.preview === 'icon' ? 'max-w-[40px]' : 'max-w-[140px]'}`}
                  />
                </div>

                {/* Info */}
                <div className="px-5 pb-5 space-y-3 flex-1 flex flex-col">
                  <div className="space-y-1 flex-1">
                    <h3 className="text-[14px] font-semibold text-secondary">{asset.title}</h3>
                    <p className="text-[12px] text-secondary/55 leading-relaxed">{asset.description}</p>
                  </div>
                  <a href={asset.file} download={asset.download}>
                    <ButtonWhite
                      className="w-full"
                      textClassName="text-center flex-1 px-0! pr-8! text-[13px]!"
                    >
                      Download SVG
                    </ButtonWhite>
                  </a>
                </div>
              </RevealAnimation>
            ))}
          </div>

          <RevealAnimation
            delay={0.5}
            asChild={false}
            className="mx-auto max-w-[600px] rounded-2xl border border-stroke-3 bg-white p-6 text-center space-y-2"
          >
            <p className="text-[14px] text-secondary/70">
              Need PNG versions, colour codes, or typography references?
            </p>
            <Link href="/brand" className="text-[14px] text-secondary font-medium underline underline-offset-2">
              View full Brand Guidelines →
            </Link>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default DownloadsLogos;
