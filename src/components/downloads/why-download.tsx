import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';

const reasons = [
  { title: 'Faster', description: 'No browser tab overhead, just the workspace.' },
  { title: 'Offline drafts', description: 'Keep writing even when your connection drops.' },
  { title: 'System shortcuts', description: 'Summon Nexus AI with a keyboard shortcut.' },
  { title: 'Notifications', description: "Know the moment a long task or Meeting Notes finish." },
];

const WhyDownload = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-10 lg:space-y-14">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Why download the app</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Faster than the browser</h2>
            </TextReveal>
          </div>

          <div className="grid grid-cols-12 gap-y-5 md:gap-4">
            {reasons.map((reason, index) => (
              <RevealAnimation
                key={reason.title}
                delay={0.1 * (index + 1)}
                asChild={false}
                className="col-span-12 space-y-1.5 rounded-2xl bg-white p-6 md:col-span-3"
              >
                <h3 className="text-heading-6">{reason.title}</h3>
                <p className="text-tagline-2 text-secondary/60">{reason.description}</p>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDownload;
