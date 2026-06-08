"use client";

import Prism from "../Prism";
import Reveal from "../Reveal";
import { HeroChip } from "../PageHero";

export default function WhyWeWinHero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-32 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-bg"
      >
        <div className="absolute inset-0">
          <Prism
            animationType="rotate"
            bloom={0.85}
            colorFrequency={0.9}
            glow={0.8}
            height={3.5}
            baseWidth={5.5}
            hueShift={0.35}
            noise={0.32}
            offset={{ x: 0, y: 40 }}
            scale={4.1}
            suspendWhenOffscreen
            timeScale={0.45}
          />
        </div>
        <div className="iris-grain absolute inset-0 opacity-35" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #f4f4f2 0%, #f4f4f2 14%, rgba(244,244,242,0.92) 28%, rgba(244,244,242,0.45) 48%, transparent 68%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 72% 58% at 50% 46%, rgba(244,244,242,0.72) 0%, transparent 66%)",
          }}
        />
      </div>

      <Reveal as="p" delay={20} className="mono-label mb-5">
        Why we win
      </Reveal>

      <Reveal
        as="h1"
        delay={60}
        className="display text-balance text-muted text-[2.5rem] leading-none sm:text-6xl md:text-[4.2rem] lg:text-[4.8rem]"
      >
        Every software generates data.
        <br />
        <span className="text-black">Very few generate intelligence.</span>
      </Reveal>

      <Reveal
        as="p"
        delay={140}
        className="mt-7 max-w-3xl text-balance text-lg leading-relaxed text-muted md:text-xl"
      >
        We bridge that gap - turning operational data into actionable
        intelligence that drives efficiency, performance, and growth.
      </Reveal>

      <Reveal
        delay={220}
        className="mt-10 flex flex-wrap items-center justify-center gap-3"
      >
        <HeroChip>Data</HeroChip>
        <HeroChip>Intelligence</HeroChip>
        <HeroChip>Growth</HeroChip>
      </Reveal>
    </section>
  );
}
