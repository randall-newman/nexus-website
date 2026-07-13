import worldMap from '@/public/images/nexus-world-map.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import Image from 'next/image';

const flags = [
  { flag: '🇨🇦', label: 'Canada',       top: '28%', left: '17%', delay: '0s'   },
  { flag: '🇺🇸', label: 'USA',          top: '40%', left: '20%', delay: '0.3s' },
  { flag: '🇬🇧', label: 'UK',           top: '26%', left: '46%', delay: '0.6s' },
  { flag: '🇿🇦', label: 'South Africa', top: '74%', left: '52%', delay: '0.9s' },
  { flag: '🇮🇳', label: 'India',        top: '47%', left: '67%', delay: '1.2s' },
  { flag: '🇨🇳', label: 'China',        top: '35%', left: '75%', delay: '1.5s' },
  { flag: '🇦🇺', label: 'Australia',    top: '74%', left: '83%', delay: '1.8s' },
];

const WorldMap = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-10 lg:space-y-14">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Global</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Loved Around the World</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-background-14/60 mx-auto max-w-[450px]">
                Use Nexus AI whenever and wherever you are.
              </p>
            </TextReveal>
          </div>

          <RevealAnimation delay={0.3} asChild={false} className="relative mx-auto w-full max-w-[1100px]">
            <Image
              src={worldMap}
              alt="Nexus AI is used around the world"
              className="w-full object-contain"
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
            {flags.map((item) => (
              <span
                key={item.label}
                className="absolute flex flex-col items-center"
                style={{
                  top: item.top,
                  left: item.left,
                  transform: 'translate(-50%, -50%)',
                  animation: `flagBounce 2.2s ${item.delay} ease-in-out infinite`,
                }}
                role="img"
                aria-label={item.label}
              >
                <span className="text-2xl drop-shadow-md leading-none">{item.flag}</span>
                <span className="mt-0.5 hidden sm:block whitespace-nowrap rounded-full bg-white/80 px-1.5 py-0.5 text-[9px] font-medium text-secondary/60 shadow-sm backdrop-blur-sm leading-tight">
                  {item.label}
                </span>
              </span>
            ))}
            <style>{`
              @keyframes flagBounce {
                0%,100% { transform: translate(-50%,-50%) translateY(0); }
                50%      { transform: translate(-50%,-50%) translateY(-6px); }
              }
            `}</style>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
