"use client";

import FloatingLines from "../FloatingLines";
import BookDemoPill from "../BookDemoPill";
import Reveal from "../Reveal";
import { SITE } from "@/lib/content";

const LINE_GRADIENT = [
  "#0a0a0a",
  "#1e4f8a",
  "#4434a0",
  "#3daa88",
  "#9a5a18",
];

export default function ContactHero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-32 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-bg"
      >
        <div className="absolute inset-x-0 bottom-0 h-full">
          <FloatingLines
            animationSpeed={0.55}
            bendRadius={5}
            bendStrength={-0.5}
            enabledWaves={["top", "middle", "bottom"]}
            interactive={false}
            lineCount={[8, 12, 14]}
            lineDistance={[7, 5, 4]}
            linesGradient={LINE_GRADIENT}
            mixBlendMode="normal"
            parallax={false}
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
        Contact us
      </Reveal>

      <Reveal
        as="h1"
        delay={60}
        className="display text-balance text-[2.5rem] leading-none sm:text-6xl md:text-[4.2rem] lg:text-[4.8rem] max-w-3xl mx-auto"
      >
        Let&apos;s build intelligence into your operations
      </Reveal>

      <Reveal
        as="p"
        delay={140}
        className="mt-7 max-w-3xl text-balance text-lg leading-relaxed text-muted md:text-xl"
      >
        Tell us about your business, your stack, and where you want to grow.
        We&apos;ll take it from there - on the ground, with your team.
      </Reveal>

      <Reveal
        delay={220}
        className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
      >
        <BookDemoPill variant="primary" />
        <a
          href={`mailto:${SITE.email}`}
          className="font-mono text-sm text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
        >
          {SITE.email}
        </a>
      </Reveal>
    </section>
  );
}
