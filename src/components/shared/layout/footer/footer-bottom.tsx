import verbosecLogo from '@/public/images/logo/verbosec-logo.svg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import Image from 'next/image';

export const FooterBottom = () => {
  return (
    <RevealAnimation delay={0.7} offset={10} start="top 105%">
      <div className="relative flex flex-col items-center justify-between gap-y-4 pt-[26px] pb-[42px] text-center sm:flex-row sm:text-left">
        <div className="bg-stroke-3 absolute top-0 right-0 left-0 mx-auto h-px origin-center" />
        <a
          href="https://verbosec.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-opacity duration-200 hover:opacity-100"
        >
          <Image src={verbosecLogo} alt="Verbosec" className="h-4 w-auto" />
        </a>
        <p className="text-tagline-1 text-secondary font-normal">
          &copy; <span>{new Date().getFullYear()}</span> Verbosec. All rights reserved.
        </p>
      </div>
    </RevealAnimation>
  );
};
