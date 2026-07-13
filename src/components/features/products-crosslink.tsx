import RevealAnimation from '@/src/components/animation/reveal-animation';
import { ButtonWhite } from '@/src/components/shared/ui/button';
import Link from 'next/link';

const ProductsCrosslink = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <RevealAnimation
          delay={0.1}
          asChild={false}
          className="mx-auto flex w-full max-w-[680px] flex-col items-center gap-y-4 rounded-2xl bg-white p-8 text-center"
        >
          <p className="text-tagline-2 text-secondary/80">
            Features describes what you can do. <strong>Products</strong> describes how Nexus AI
            is organised: Chat, Creative Studio, Code and Artifacts.
          </p>
          <Link href="/products">
            <ButtonWhite
              className="mx-auto w-[80%]! md:w-fit!"
              textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
            >
              See Products
            </ButtonWhite>
          </Link>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ProductsCrosslink;
