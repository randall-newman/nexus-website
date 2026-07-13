'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary } from '@/src/components/shared/ui/button';
import Link from 'next/link';
import { useState } from 'react';

const SEAT_PRICE = 30;
const MIN_SEATS = 2;
const MAX_SEATS = 20;

const SeatCalculator = () => {
  const [seats, setSeats] = useState(MIN_SEATS);

  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-10 lg:space-y-14">
          <div className="space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Team plan</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h1>One AI workspace for your whole team</h1>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-background-14/60 mx-auto max-w-[480px]">
                $30 per seat, per month. 2-seat minimum.
              </p>
            </TextReveal>
          </div>

          <RevealAnimation
            delay={0.4}
            asChild={false}
            className="mx-auto w-full max-w-[560px] rounded-2xl bg-white p-8"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <label htmlFor="seats" className="text-tagline-2 text-secondary font-medium">
                  Seats
                </label>
                <span className="text-heading-6 text-secondary">{seats}</span>
              </div>
              <input
                id="seats"
                type="range"
                min={MIN_SEATS}
                max={MAX_SEATS}
                value={seats}
                onChange={(e) => setSeats(Number(e.target.value))}
                className="w-full accent-secondary"
                aria-label="Number of seats"
              />
              <div className="flex items-center justify-between border-t border-stroke-3 pt-6">
                <p className="text-tagline-2 text-secondary/60">Estimated monthly cost</p>
                <h3 className="text-heading-5 text-secondary font-medium">
                  ${seats * SEAT_PRICE}
                  <span className="text-tagline-2 text-secondary/60 font-normal">/month</span>
                </h3>
              </div>
              <Link href="/signup" className="block">
                <ButtonPrimary className="w-full" textClassName="text-center flex-1 px-0! pr-8!">
                  Start a Team plan
                </ButtonPrimary>
              </Link>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default SeatCalculator;
