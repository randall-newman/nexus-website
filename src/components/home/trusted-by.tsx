import americanRedCrossLogo from '@/public/images/icons/American-Red-Cross.svg';
import deloitteLogo from '@/public/images/icons/Deloitte.svg';
import microsoftLogo from '@/public/images/icons/Microsoft.svg';
import pfizerLogo from '@/public/images/icons/Pfizer.svg';
import synechronLogo from '@/public/images/icons/synechron.png';
import vodafoneLogo from '@/public/images/icons/Vodafone.svg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import Image, { type StaticImageData } from 'next/image';

const logos: { src: StaticImageData; alt: string }[] = [
  { src: americanRedCrossLogo, alt: 'American Red Cross' },
  { src: deloitteLogo, alt: 'Deloitte' },
  { src: microsoftLogo, alt: 'Microsoft' },
  { src: vodafoneLogo, alt: 'Vodafone' },
  { src: synechronLogo, alt: 'Synechron' },
  { src: pfizerLogo, alt: 'Pfizer' },
];

const TrustedBy = () => {
  return (
    <section className="pt-14 md:pt-16 lg:pt-20">
      <RevealAnimation
        asChild={false}
        delay={0.1}
        offset={40}
        className="main-container space-y-8 lg:space-y-10"
      >
        <p className="text-tagline-new text-background-14/60 text-center">
          Trusted by students, startups, universities, NGOs and big corporations across the world
        </p>

        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="animate-marquee flex w-max items-center" style={{ animationDuration: '28s' }}>
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="flex w-[170px] shrink-0 items-center justify-center px-6"
              >
                <Image src={logo.src} alt={logo.alt} className="h-8 w-auto max-w-[110px]" />
              </div>
            ))}
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default TrustedBy;
