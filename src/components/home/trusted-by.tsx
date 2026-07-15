import americanRedCrossLogo from '@/public/images/icons/American-Red-Cross.svg';
import comcastLogo from '@/public/images/icons/comcast-logo.svg';
import deloitteLogo from '@/public/images/icons/Deloitte.svg';
import foodpandaLogo from '@/public/images/icons/foodpanda-logo.svg';
import gartnerLogo from '@/public/images/icons/gartner-logo.svg';
import microsoftLogo from '@/public/images/icons/Microsoft.svg';
import pfizerLogo from '@/public/images/icons/Pfizer.svg';
import stanfordLogo from '@/public/images/icons/stanford-university-logo.png';
import synechronLogo from '@/public/images/icons/synechron.png';
import cambridgeLogo from '@/public/images/icons/university-of-cambridge-logo.png';
import verizonLogo from '@/public/images/icons/verizon-logo.svg';
import vodafoneLogo from '@/public/images/icons/Vodafone.svg';
import zomatoLogo from '@/public/images/icons/zomato-logo.svg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import Image, { type StaticImageData } from 'next/image';

/* heightClass compensates for marks with internal padding (PNG exports) or
   stacked/square shapes that read too small at the default h-8. */
const logos: { src: StaticImageData; alt: string; heightClass?: string }[] = [
  { src: americanRedCrossLogo, alt: 'American Red Cross logo' },
  { src: deloitteLogo, alt: 'Deloitte logo' },
  { src: microsoftLogo, alt: 'Microsoft logo' },
  { src: comcastLogo, alt: 'Comcast logo', heightClass: 'h-10' },
  { src: stanfordLogo, alt: 'Stanford University logo', heightClass: 'h-20' },
  { src: vodafoneLogo, alt: 'Vodafone logo' },
  { src: gartnerLogo, alt: 'Gartner logo' },
  { src: zomatoLogo, alt: 'Zomato logo' },
  { src: synechronLogo, alt: 'Synechron logo' },
  { src: cambridgeLogo, alt: 'University of Cambridge logo', heightClass: 'h-20' },
  { src: verizonLogo, alt: 'Verizon logo' },
  { src: foodpandaLogo, alt: 'Foodpanda logo' },
  { src: pfizerLogo, alt: 'Pfizer logo' },
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
          <div className="animate-marquee flex w-max items-center" style={{ animationDuration: '56s' }}>
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="flex w-[170px] shrink-0 items-center justify-center px-6"
              >
                {/* grayscale keeps mixed-color brand marks visually uniform */}
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className={`${logo.heightClass ?? 'h-8'} w-auto max-w-[130px] opacity-80 grayscale`}
                />
              </div>
            ))}
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default TrustedBy;
