import chrisAvatar from '@/public/images/nexus-reviewer-chris.jpg';
import davidAvatar from '@/public/images/nexus-reviewer-david.jpg';
import emirAvatar from '@/public/images/nexus-reviewer-emir.jpg';
import kateLargeAvatar from '@/public/images/nexus-reviewer-kate-lg.jpg';
import markAvatar from '@/public/images/nexus-reviewer-mark.jpg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { StarIcon } from '@/src/components/shared/icon';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonWhite } from '@/src/components/shared/ui/button';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

type Review = { quote: string; name: string; role: string; avatar: StaticImageData };

const featuredReview: Review = {
  quote:
    'I script, storyboard and design entire campaigns inside Nexus AI. What used to take my studio a week of production now comes together in an afternoon.',
  name: 'Kate M.',
  role: 'Creative director',
  avatar: kateLargeAvatar,
};

const reviews: Review[] = [
  {
    quote:
      'Honestly the only AI tool that survived my whole semester. Essays, summaries, presentations, all of it.',
    name: 'David L.',
    role: 'Med student',
    avatar: davidAvatar,
  },
  {
    quote:
      'The research mode is unreal. It reads the literature with me instead of hallucinating around it.',
    name: 'Emir E.',
    role: 'Behavioural scientist',
    avatar: emirAvatar,
  },
  {
    quote:
      'Feels like a second brain. I draft lectures, slides and feedback in a fraction of the time.',
    name: 'Mark T.',
    role: 'University lecturer',
    avatar: markAvatar,
  },
  {
    quote:
      'I pitch decks for a living. Nexus AI gets me from blank page to a solid draft before my coffee cools.',
    name: 'Chris B.',
    role: 'Startup founder',
    avatar: chrisAvatar,
  },
];

const Stars = ({ className = 'size-3.5' }: { className?: string }) => (
  <div className="flex shrink-0 gap-x-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <StarIcon key={i} className={`fill-primary-500 ${className}`} />
    ))}
  </div>
);

const TestimonialTeaser = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-10 lg:space-y-14">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Reviews</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Don&apos;t take our word for it</h2>
            </TextReveal>
          </div>

          <div className="grid grid-cols-12 gap-4">
            {/* Featured review: large tile with a tall portrait */}
            <RevealAnimation delay={0.1} className="col-span-12 lg:col-span-6 lg:row-span-2">
              <div className="relative h-full">
                {/* Soft brand-gradient glow behind the featured tile */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-3 rounded-[28px] bg-(image:--color-gradient-logo) opacity-25 blur-2xl"
                />
                {/* Gradient frame */}
                <div className="relative h-full rounded-[20px] bg-(image:--color-gradient-logo) p-[2px]">
                  <article className="relative flex h-full flex-col items-center gap-6 overflow-hidden rounded-[18px] bg-white p-7 sm:flex-row md:p-9">
                    {/* Decorative quote mark */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -top-7 right-4 bg-(image:--color-gradient-logo) bg-clip-text text-[140px] leading-none font-bold text-transparent opacity-20 select-none"
                    >
                      &rdquo;
                    </span>
                    <figure className="w-36 shrink-0 overflow-hidden rounded-2xl sm:w-40 lg:w-44">
                      <Image
                        src={featuredReview.avatar}
                        alt={`Portrait of ${featuredReview.name}, ${featuredReview.role}, who reviewed Nexus AI`}
                        className="h-auto w-full object-cover"
                      />
                    </figure>
                    <div className="space-y-4 text-center sm:text-left">
                      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-(image:--color-gradient-logo) px-3 py-1 text-[11px] font-semibold text-white">
                        <StarIcon className="size-3 fill-white" />
                        Featured review
                      </span>
                      <p className="text-tagline-1 md:text-heading-6 text-secondary/85 font-normal">
                        &ldquo;{featuredReview.quote}&rdquo;
                      </p>
                      <div className="flex items-center justify-center gap-x-3 sm:justify-start">
                        <div>
                          <p className="text-tagline-1 text-secondary font-medium">
                            {featuredReview.name}
                          </p>
                          <p className="text-tagline-3 text-secondary/60">{featuredReview.role}</p>
                        </div>
                        <Stars className="size-4" />
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </RevealAnimation>

            {/* Supporting reviews: 2x2 next to the featured tile */}
            {reviews.map((review, index) => (
              <RevealAnimation
                key={review.name}
                delay={0.15 + 0.08 * index}
                className="col-span-12 sm:col-span-6 lg:col-span-3"
              >
                <article className="border-stroke-3 flex h-full flex-col gap-y-4 rounded-2xl border bg-white p-6">
                  <div className="flex items-center gap-x-3">
                    <figure className="size-10 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={review.avatar}
                        alt={`Portrait of ${review.name}, ${review.role}, who reviewed Nexus AI`}
                        className="size-full object-cover"
                      />
                    </figure>
                    <div className="min-w-0">
                      <p className="text-tagline-2 text-secondary truncate font-medium">
                        {review.name}
                      </p>
                      <p className="text-tagline-3 text-secondary/60 truncate">{review.role}</p>
                    </div>
                    <div className="ml-auto">
                      <Stars />
                    </div>
                  </div>
                  <p className="text-tagline-2 text-secondary/80">&ldquo;{review.quote}&rdquo;</p>
                </article>
              </RevealAnimation>
            ))}
          </div>

          <RevealAnimation delay={0.5} className="flex justify-center">
            <Link href="/reviews">
              <ButtonWhite
                className="mx-auto w-[80%]! md:w-fit!"
                textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
              >
                Read more reviews
              </ButtonWhite>
            </Link>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default TestimonialTeaser;
