import avatar1 from '@/public/images/ns-avatar-8.jpg';
import avatar2 from '@/public/images/ns-avatar-9.jpg';
import avatar3 from '@/public/images/ns-avatar-14.jpg';
import avatar4 from '@/public/images/ns-avatar-1.jpg';
import avatar5 from '@/public/images/ns-avatar-2.jpg';
import avatar6 from '@/public/images/ns-avatar-11.jpg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { StarIcon } from '@/src/components/shared/icon';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonWhite } from '@/src/components/shared/ui/button';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

const quotes: { quote: string; name: string; role: string; avatar: StaticImageData }[] = [
  {
    quote:
      'I uploaded a 40-page report and had a cited summary in minutes. AI File Chat is the feature I open every day.',
    name: 'Amara O.',
    role: 'Graduate student',
    avatar: avatar1,
  },
  {
    quote:
      'Artifacts is the difference. I generate a draft, then actually finish it without leaving Nexus AI.',
    name: 'Daniel R.',
    role: 'Marketing lead',
    avatar: avatar2,
  },
  {
    quote: 'Our team moved off three separate tools. One workspace, one bill, shared Folders.',
    name: 'Priya S.',
    role: 'Team of 6',
    avatar: avatar3,
  },
  {
    quote:
      "As a student, Nexus AI has been invaluable for my academic work. The automatic summarization and text analysis features have significantly boosted my productivity and understanding.",
    name: 'Olivia T.',
    role: 'Undergraduate student',
    avatar: avatar4,
  },
  {
    quote:
      "Nexus AI makes research effortless. Centralizing all my sources eliminates the frustration of switching between apps and losing track of valuable information.",
    name: 'Marcus B.',
    role: "Master's student",
    avatar: avatar5,
  },
  {
    quote:
      'The Code assistant saved me hours every week. I paste in a function, ask what it does, and get a clear explanation with suggested improvements. It feels like pair programming at any hour.',
    name: 'Jason K.',
    role: 'Software engineer',
    avatar: avatar6,
  },
];

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

          <div className="grid grid-cols-12 gap-y-5 md:gap-4">
            {quotes.map((item, index) => (
              <RevealAnimation
                key={item.name}
                delay={0.05 * (index + 1)}
                className="col-span-12 sm:col-span-6 lg:col-span-4"
              >
                <div className="flex h-full flex-col justify-between gap-y-6 rounded-2xl bg-white p-7">
                  <div className="flex gap-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="fill-primary-500 size-4" />
                    ))}
                  </div>
                  <p className="text-tagline-2 text-secondary/80">&ldquo;{item.quote}&rdquo;</p>
                  <div className="flex items-center gap-x-3">
                    <figure className="size-10 overflow-hidden rounded-full">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        className="size-full object-cover"
                      />
                    </figure>
                    <div>
                      <p className="text-tagline-2 text-secondary font-medium">{item.name}</p>
                      <p className="text-tagline-3 text-secondary/60">{item.role}</p>
                    </div>
                  </div>
                </div>
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
