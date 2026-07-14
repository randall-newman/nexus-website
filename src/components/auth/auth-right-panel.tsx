import Image from 'next/image';
import sarahAvatar from '@/public/images/testimonials/sarah-k.png';
import { Check, Sparkles, Star } from 'lucide-react';

const FEATURES = [
  'Unlimited AI Chat with the latest models',
  'Essay Writer, Research and Plagiarism tools',
  'Creative Studio for images, audio and video',
  'AI File Chat: ask any document anything',
  'Skills: reusable AI instructions for your workflow',
];

const TESTIMONIAL = {
  quote:
    'Nexus AI has transformed how I work. I finish in hours what used to take days. The research and writing tools are unlike anything else.',
  name: 'Sarah K.',
  role: 'PhD Researcher',
};

function SpinningGlobe() {
  return (
    <>
      <style>{`
        @keyframes worldmap-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <div className="flex flex-col items-center gap-2">
        {/* Globe circle */}
        <div className="relative h-[88px] w-[88px] overflow-hidden rounded-full border border-white/25 bg-[#061240]">
          {/* scrolling world map — two copies for seamless loop */}
          <div
            className="absolute inset-y-0 left-0 flex items-center"
            style={{
              width: '200%',
              animation: 'worldmap-scroll 14s linear infinite',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/world-map-flat.png"
              alt=""
              className="h-full w-1/2 object-cover opacity-70"
              style={{ filter: 'brightness(2) invert(0)' }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/world-map-flat.png"
              alt=""
              className="h-full w-1/2 object-cover opacity-70"
              style={{ filter: 'brightness(2) invert(0)' }}
            />
          </div>

          {/* sphere vignette — darkens edges to simulate curvature */}
          <div
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, transparent 38%, rgba(0,12,96,0.55) 65%, rgba(0,6,50,0.85) 100%)',
            }}
          />

          {/* subtle blue tint overlay */}
          <div
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{ background: 'rgba(76,125,240,0.18)' }}
          />
        </div>

        <p className="text-xl font-bold text-white">500K+</p>
        <p className="text-[11px] text-white/45 whitespace-nowrap">Active users</p>
      </div>
    </>
  );
}

export function AuthRightPanel() {
  return (
    <div className="relative hidden min-h-screen flex-col overflow-hidden bg-secondary px-12 py-12 lg:flex xl:px-20">
      {/* ambient glows */}
      <div
        className="pointer-events-none absolute -top-40 -left-20 h-[500px] w-[500px] rounded-full opacity-30 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #7458E8 0%, #4C7DF0 100%)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-20 h-[400px] w-[400px] rounded-full opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #4C7DF0 0%, #7458E8 100%)' }}
      />

      {/* Main content */}
      <div className="relative z-10 my-auto py-12">

        {/* Headline */}
        <div className="mb-12">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5">
            <Sparkles className="h-3.5 w-3.5 stroke-white/70" />
            <span className="text-[12px] font-medium text-white/70">Your all-in-one AI workspace</span>
          </div>
          <h2 className="text-4xl font-bold leading-tight text-white xl:text-5xl">
            Write, research, and create.
            <br />
            Faster than ever before.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/50">
            Everything you need to do your best work, powered by the world&apos;s most capable AI models.
          </p>
        </div>

        {/* Feature list on left, spinning globe + stat on right */}
        <div className="mb-12 flex items-center gap-8">

          {/* Feature list */}
          <ul className="flex-1 space-y-4">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                  <Check className="h-3 w-3 stroke-emerald-400" strokeWidth={2.5} />
                </span>
                <span className="text-[14px] text-white/70">{f}</span>
              </li>
            ))}
          </ul>

          {/* Globe + stat — right side */}
          <div className="shrink-0">
            <SpinningGlobe />
          </div>

        </div>

        {/* Testimonial */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 stroke-amber-400" />
                ))}
              </div>
              <p className="text-[14px] leading-relaxed text-white/70 italic">
                &ldquo;{TESTIMONIAL.quote}&rdquo;
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-center gap-2 text-center">
              <Image
                src={sarahAvatar}
                alt={TESTIMONIAL.name}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-[12px] font-semibold text-white">{TESTIMONIAL.name}</p>
                <p className="text-[11px] text-white/45">{TESTIMONIAL.role}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
