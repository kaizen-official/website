"use client";

import Plasma from "../Plasma";
import Reveal from "../Reveal";
import { HeroChip } from "../PageHero";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-32 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-bg"
      >
        <div className="absolute inset-x-0 bottom-0 h-full">
          <Plasma
            color="#c4b8ff"
            direction="forward"
            mouseInteractive={false}
            opacity={0.75}
            scale={1.15}
            speed={1.55}
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
              "radial-gradient(ellipse 72% 58% at 50% 46%, rgba(244,244,242,0.7) 0%, transparent 66%)",
          }}
        />
      </div>

      <Reveal as="p" delay={20} className="mono-label mb-5">
        About us
      </Reveal>

      <Reveal
        as="h1"
        delay={60}
        className="display text-balance text-[2.5rem] leading-none sm:text-6xl md:text-[4.2rem] lg:text-[4.8rem]"
      >
        AI-native engineers,
        <br />
        embedded on the ground.
      </Reveal>

      <Reveal
        as="p"
        delay={140}
        className="mt-7 max-w-3xl text-balance text-lg leading-relaxed text-muted md:text-xl"
      >
        We solve real operational problems for Bharat&apos;s businesses by working
        where the work actually happens - your factories, sites, and offices.
      </Reveal>

      <Reveal
        delay={220}
        className="mt-10 flex flex-wrap items-center justify-center gap-3"
      >
        <HeroChip>Forward-deployed</HeroChip>
        <HeroChip>AI-native</HeroChip>
        <HeroChip>Bharat-first</HeroChip>
      </Reveal>
    </section>
  );
}
