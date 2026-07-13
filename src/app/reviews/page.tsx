import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'Customer Reviews | Nexus AI',
    'Read what students, marketers, developers, and researchers say about Nexus AI.',
    '/reviews'
  ),
};

const reviews = [
  {
    name: 'Amara Osei',
    role: 'PhD student, Linguistics',
    avatar: '/images/ns-avatar-1.jpg',
    rating: 5,
    review:
      'I uploaded fifteen papers and asked Nexus AI to synthesize the literature on code-switching. It pulled exact quotes, cited every source, and gave me a draft I could actually build on. Nothing else I have tried does this.',
  },
  {
    name: 'Tyler Marsh',
    role: 'Senior Frontend Engineer',
    avatar: '/images/ns-avatar-2.jpg',
    rating: 5,
    review:
      'The code review feature caught a race condition I missed in three manual passes. It explained exactly why it was a problem and gave me a patched version. Saved me from a very bad incident on a Friday afternoon.',
  },
  {
    name: 'Priya Nair',
    role: 'Content Marketing Manager',
    avatar: '/images/ns-avatar-3.jpg',
    rating: 5,
    review:
      'We went from drafting blog posts over two days to shipping them in a single morning. The AI keeps our brand voice consistent across every writer on the team. Our output has tripled and the quality is higher.',
  },
  {
    name: 'Jonas Weber',
    role: 'Freelance Designer',
    avatar: '/images/ns-avatar-4.jpg',
    rating: 5,
    review:
      'The image generator is shockingly good for client mood boards. I describe the vibe in plain English and get four options to choose from. Clients love it and I spend more time on actual design work.',
  },
  {
    name: 'Sofia Reyes',
    role: 'Undergraduate, Business',
    avatar: '/images/ns-avatar-5.jpg',
    rating: 5,
    review:
      'The plagiarism checker saved me so much stress before my dissertation submission. It flagged two sentences I had paraphrased too closely and showed me exactly what to fix. Clear conscience, full marks.',
  },
  {
    name: 'Marcus Thompson',
    role: 'Product Manager',
    avatar: '/images/ns-avatar-6.jpg',
    rating: 5,
    review:
      'Meeting notes used to take me thirty minutes after every call. Now I get a summary and action items waiting for me when the call ends. I have gotten back hours every week that I put into actual strategy.',
  },
  {
    name: 'Yuki Tanaka',
    role: 'Data Scientist',
    avatar: '/images/ns-avatar-7.jpg',
    rating: 5,
    review:
      'I use Nexus AI to translate complicated model outputs into plain English for stakeholder reports. It understands context, does not hallucinate numbers, and the final documents look professional every time.',
  },
  {
    name: 'Isabelle Fontaine',
    role: 'Startup Founder',
    avatar: '/images/ns-avatar-8.jpg',
    rating: 5,
    review:
      'We pitched investors last month using a deck Nexus AI built from our one-page brief. We got two term sheets. I am not saying the deck closed the deal, but it definitely did not hurt.',
  },
  {
    name: 'Daniel Abubakar',
    role: 'High school teacher',
    avatar: '/images/ns-avatar-9.jpg',
    rating: 5,
    review:
      'I use it to draft lesson plans and differentiated materials for different reading levels. What used to take a Sunday afternoon now takes twenty minutes. I use the time I save on actual feedback for my students.',
  },
  {
    name: 'Rachel Kim',
    role: 'UX Researcher',
    avatar: '/images/ns-avatar-10.jpg',
    rating: 5,
    review:
      'Nexus AI reads through my interview transcripts and pulls themes and quotes I can use in reports. It is not replacing my analysis, but it cuts the grunt work down dramatically. My stakeholders get insights faster.',
  },
  {
    name: 'Ben Okafor',
    role: 'DevOps Engineer',
    avatar: '/images/ns-avatar-11.jpg',
    rating: 5,
    review:
      'The CLI integration is the feature I did not know I needed. I can pipe error output directly into Nexus AI, get an explanation and a fix, and keep my flow entirely in the terminal. It is faster than searching Stack Overflow.',
  },
  {
    name: 'Leila Ahmadi',
    role: 'Academic researcher, Economics',
    avatar: '/images/ns-avatar-12.jpg',
    rating: 5,
    review:
      'I uploaded my dataset documentation and asked Nexus AI to draft the methods section of my paper. It cited the right variables, used the correct statistical terminology, and was more precise than my first draft.',
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-x-1">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" className="shrink-0">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

export default function ReviewsPage() {
  return (
    <>
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Reviews</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h1>Loved by writers, researchers, and developers</h1>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-background-14/60 mx-auto max-w-[560px]">
                Nexus AI is used by students finishing dissertations, marketers hitting deadlines,
                engineers shipping code, and researchers turning papers into insights. Here is what
                they say.
              </p>
            </TextReveal>
          </div>

          <RevealAnimation
            delay={0.4}
            asChild={false}
            className="mx-auto mt-10 flex w-fit items-center gap-x-6"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <Image
                  key={n}
                  src={`/images/ns-avatar-${n}.jpg`}
                  alt="Nexus AI user"
                  width={36}
                  height={36}
                  className="size-9 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div>
              <StarRating count={5} />
              <p className="text-tagline-3 text-secondary/60 mt-0.5">Rated 4.9 / 5 by 2,400+ users</p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {reviews.map((review, index) => (
              <RevealAnimation
                key={review.name}
                delay={0.05 * (index + 1)}
                asChild={false}
                className="border-stroke-3 mb-5 break-inside-avoid rounded-2xl border bg-white p-6 space-y-4"
              >
                <div className="flex items-center gap-x-3">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={44}
                    height={44}
                    className="size-11 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <p className="text-tagline-2 text-secondary font-semibold">{review.name}</p>
                    <p className="text-tagline-3 text-secondary/50">{review.role}</p>
                  </div>
                </div>
                <StarRating count={review.rating} />
                <p className="text-tagline-2 text-secondary/70 leading-relaxed">
                  &ldquo;{review.review}&rdquo;
                </p>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <RevealAnimation
            delay={0.1}
            asChild={false}
            className="border-stroke-3 mx-auto flex w-full max-w-[680px] flex-col items-center gap-y-4 rounded-2xl border bg-white p-8 text-center"
          >
            <h2>Join over 2,400 users who ship work faster</h2>
            <p className="text-tagline-2 text-secondary/60">
              Start for free. No credit card required. Upgrade when you need more.
            </p>
          </RevealAnimation>
        </div>
      </section>

      <CTA />
    </>
  );
}
