"use client";

import Lightfall from "../Lightfall";
import Reveal from "../Reveal";
import { HeroChip } from "../PageHero";

export default function OfferingsHero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-32 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-bg"
      >
        <div className="absolute inset-x-0 bottom-0 h-full">
          <Lightfall
            density={0.75}
            glow={1.1}
            mouseInteraction={false}
            speed={0.55}
            streakCount={7}
            streakLength={1.05}
            streakWidth={1.05}
            twinkle={0.65}
            zoom={2.4}
          />
        </div>
        <div className="iris-grain absolute inset-0 opacity-35" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #f4f4f2 0%, #f4f4f2 4%, rgba(244,244,242,0.92) 18%, rgba(244,244,242,0.45) 48%, transparent 68%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 72% 58% at 50% 46%, rgba(244,244,242,0.7) 0%, transparent 66%)",
          }}
        />
      </div>

      <Reveal as="p" delay={20} className="mono-label mb-5">
        Our offerings
      </Reveal>

      <Reveal
        as="h1"
        delay={60}
        className="display text-balance text-[2.5rem] leading-none sm:text-6xl md:text-[4.2rem] lg:text-[4.8rem]"
      >
        Two paths to intelligent operations
      </Reveal>

      <Reveal
        as="p"
        delay={140}
        className="mt-7 max-w-3xl text-balance text-lg leading-relaxed text-muted md:text-xl"
      >
        Build a full AI-native operating system from the ground up - or add an
        intelligence layer that makes your existing software significantly
        smarter.
      </Reveal>

      <Reveal
        delay={220}
        className="mt-10 flex flex-wrap items-center justify-center gap-3"
      >
        <HeroChip>AI Native Systems</HeroChip>
        <HeroChip>Intelligence Layer</HeroChip>
        <HeroChip>IoT Integration</HeroChip>
      </Reveal>
    </section>
  );
}
