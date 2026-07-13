import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';

const steps = [
  { step: '1', title: 'Download', description: 'Run the installer for Windows 10 or 11.' },
  { step: '2', title: 'Sign in', description: 'Use your existing Nexus AI account, or start free.' },
  { step: '3', title: 'Pin it', description: 'Pin Nexus AI to your taskbar for one-click access.' },
];

const WindowsDetails = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-10 lg:space-y-14">
          <div className="space-y-3 text-center">
            <TextReveal delay={0.1}>
              <h2>Three steps to install</h2>
            </TextReveal>
          </div>

          <div className="grid grid-cols-12 gap-y-5 md:gap-4">
            {steps.map((item, index) => (
              <RevealAnimation
                key={item.step}
                delay={0.1 * (index + 1)}
                asChild={false}
                className="col-span-12 space-y-1.5 rounded-2xl bg-white p-6 md:col-span-4"
              >
                <BadgePrimary>{item.step}</BadgePrimary>
                <h3 className="text-heading-6">{item.title}</h3>
                <p className="text-tagline-2 text-secondary/60">{item.description}</p>
              </RevealAnimation>
            ))}
          </div>

          <RevealAnimation
            delay={0.4}
            asChild={false}
            className="border-stroke-3 mx-auto max-w-[640px] rounded-2xl border bg-white p-6 text-center"
          >
            <p className="text-tagline-2 text-secondary/80">
              Using Word, Excel or PowerPoint? Nexus AI also works alongside Microsoft 365 with full
              integration details are coming to the Features section soon.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default WindowsDetails;
