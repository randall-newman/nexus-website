import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonWhite } from '@/src/components/shared/ui/button';
import cloudArt from '@/public/images/opai-img-137.jpg';
import waveArt from '@/public/images/opai-img-138.jpg';
import slideTemplate1 from '@/public/images/nexus-slide-template-1.png';
import slideTemplate2 from '@/public/images/nexus-slide-template-2.png';
import slideTemplate3 from '@/public/images/nexus-slide-template-3.png';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

/* ── Per-tool preview mocks (pure CSS, animate on card hover) ────── */

const AcademicPreview = () => (
  <div className="relative size-full bg-[#f4f2fe] p-5">
    <div className="mx-auto h-full max-w-[240px] rounded-t-lg bg-white p-4 shadow-[0_8px_30px_rgba(0,12,96,0.10)] transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:rotate-[0.5deg]">
      <div className="mx-auto h-2 w-3/4 rounded bg-[#241d55]/80" />
      <div className="mt-1.5 mx-auto h-1.5 w-1/2 rounded bg-[#241d55]/20" />
      <div className="mt-3 space-y-1.5">
        <div className="h-1.5 w-full rounded bg-[#241d55]/15" />
        <div className="flex items-center gap-1">
          <div className="h-1.5 flex-1 rounded bg-[#241d55]/15" />
          <span className="rounded-full bg-[#7458e8]/15 px-1.5 text-[8px] font-medium text-[#7458e8]">
            Chen, 2025
          </span>
        </div>
        <div className="h-1.5 w-5/6 rounded bg-[#241d55]/15" />
        <div className="flex items-center gap-1">
          <div className="h-1.5 w-1/3 rounded bg-[#241d55]/15" />
          <span className="rounded-full bg-[#7458e8]/15 px-1.5 text-[8px] font-medium text-[#7458e8]">
            Lo et al., 2016
          </span>
          <div className="h-1.5 flex-1 rounded bg-[#241d55]/15" />
        </div>
        <div className="h-1.5 w-4/6 rounded bg-[#241d55]/15" />
      </div>
      <div className="mt-3 flex items-center gap-1.5">
        <span className="rounded-full bg-[#eafaf1] px-1.5 py-0.5 text-[8px] text-[#0e9f6e]">
          Plagiarism: 0 issues
        </span>
        <span className="rounded-full bg-[#f4f2fe] px-1.5 py-0.5 text-[8px] text-[#7458e8]">APA 7</span>
      </div>
    </div>
  </div>
);

const ImagePreview = () => (
  <div className="relative size-full bg-[#fdf1f7] p-5">
    <div className="mx-auto flex max-w-[250px] items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-sm">
      <Sparkles className="size-3 shrink-0 text-[#f65c9c]" />
      <span className="truncate text-[10px] text-[#241d55]/70">Pastel clouds at sunset, dreamlike</span>
    </div>
    <div className="mx-auto mt-3 grid max-w-[250px] grid-cols-3 gap-1.5">
      <div className="relative col-span-2 row-span-2 h-[104px] overflow-hidden rounded-lg transition-transform duration-500 group-hover:scale-[1.03]">
        <Image
          src={cloudArt}
          alt="AI generated artwork of pastel clouds at sunset"
          fill
          className="object-cover"
          sizes="170px"
        />
      </div>
      <div className="relative h-[48px] overflow-hidden rounded-lg transition-transform duration-500 group-hover:scale-105">
        <Image
          src={waveArt}
          alt="AI generated abstract landscape of flowing colour waves"
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>
      <div className="h-[48px] rounded-lg bg-[linear-gradient(135deg,#fdad02_0%,#fa682f_60%,#f65c9c_100%)] transition-transform delay-75 duration-500 group-hover:scale-105" />
    </div>
  </div>
);

const slideTemplates = [slideTemplate1, slideTemplate2, slideTemplate3];

const PresentationPreview = () => (
  <div className="relative flex size-full items-center bg-[#eef3fe] p-5">
    <div className="relative mx-auto aspect-video w-full max-w-[290px] overflow-hidden rounded-lg shadow-[0_8px_30px_rgba(0,12,96,0.12)] transition-transform duration-500 group-hover:-translate-y-1">
      {slideTemplates.map((slide, i) => (
        <Image
          key={i}
          src={slide}
          alt={`AI generated presentation slide design ${i + 1}`}
          fill
          sizes="290px"
          className="rounded-lg object-cover opacity-0"
          style={{ animation: `slideCycle 9s linear infinite`, animationDelay: `${i * 3}s` }}
        />
      ))}
    </div>
    <style>{`
      @keyframes slideCycle {
        0% { opacity: 0; }
        5%, 33% { opacity: 1; }
        40%, 100% { opacity: 0; }
      }
    `}</style>
  </div>
);

const VideoPreview = () => (
  <div className="relative size-full bg-[#1a1440] p-5">
    <div className="relative mx-auto h-full max-w-[250px] overflow-hidden rounded-lg bg-[#241d55]">
      <video
        src="/videos/ai-video-generator/nexus-video-demo.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="AI generated video sample"
        className="absolute inset-0 size-full object-cover"
      />
      <span className="absolute top-2 right-2 rounded bg-black/40 px-1.5 py-0.5 text-[8px] text-white">
        0:42
      </span>
      <span className="absolute top-2 left-2 flex items-center gap-1 rounded bg-black/40 px-1.5 py-0.5 text-[8px] text-white">
        <Sparkles className="size-2.5" /> AI generated
      </span>
      <div className="absolute right-2 bottom-2 left-2">
        <div className="h-1 overflow-hidden rounded-full bg-white/25">
          <div className="h-full w-1/3 rounded-full bg-white transition-all duration-700 ease-out group-hover:w-2/3" />
        </div>
      </div>
    </div>
  </div>
);

/* ── Cards ───────────────────────────────────────────────────────── */

const tools = [
  {
    title: 'AI Academic Writer',
    description:
      'Write and research essays fast, with real academic citations in APA, MLA or Chicago and a plagiarism check before you submit.',
    href: '/features/academic-research',
    Preview: AcademicPreview,
  },
  {
    title: 'AI Image Generator',
    description:
      'Create something that has never been seen before. Bring your imagination to life with generative AI for stock images and art.',
    href: '/features/image',
    Preview: ImagePreview,
  },
  {
    title: 'AI Presentation Maker',
    description:
      'Turn a prompt or a document into a polished, presentation-ready deck in minutes, then export it straight to PowerPoint.',
    href: '/features/presentation',
    Preview: PresentationPreview,
  },
  {
    title: 'AI Video Generator',
    description:
      'Go from script to finished video with AI visuals, natural voiceover and captions, ready to publish anywhere.',
    href: '/features/video',
    Preview: VideoPreview,
  },
];

const PopularTools = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-10 lg:space-y-14">
          <div className="space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Popular Nexus AI Tools</BadgePrimary>
            </RevealAnimation>
            <div className="space-y-3">
              <TextReveal delay={0.2}>
                <h2>Say hello to AI that is built for every scenario</h2>
              </TextReveal>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {tools.map((tool, index) => (
              <RevealAnimation key={tool.title} delay={0.1 * (index + 1)}>
                <Link href={tool.href} className="group block h-full" aria-label={tool.title}>
                  <article className="border-stroke-3 flex h-full flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_50px_rgba(0,12,96,0.12)]">
                    <div className="h-[200px] shrink-0 overflow-hidden">
                      <tool.Preview />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-heading-6 text-secondary">{tool.title}</h3>
                      <p className="text-tagline-2 text-secondary/60 mt-2 flex-1">
                        {tool.description}
                      </p>
                      <span className="text-tagline-2 text-primary-500 mt-4 inline-flex items-center gap-1.5 font-medium">
                        Learn more
                        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </article>
                </Link>
              </RevealAnimation>
            ))}
          </div>

          <RevealAnimation delay={0.5} asChild={false} className="flex justify-center">
            <Link href="/signup" className="inline-block w-[80%] md:w-auto">
              <ButtonWhite
                className="w-full! md:w-fit!"
                textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
              >
                Try Nexus AI now
              </ButtonWhite>
            </Link>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default PopularTools;
