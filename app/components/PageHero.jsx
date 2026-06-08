import { AuroraBars } from "@/components/unlumen-ui/aurora-bars";
import Reveal from "./Reveal";

const HERO_AURORA_COLORS = [
  "#b8e8d4",
  "#ffd9a8",
  "#ffc4df",
  "#c4b8ff",
  "#a8c8ff",
  "#f4f4f250",
];

export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative flex min-h-[80svh] flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-32 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-bg"
      >
        <div className="absolute inset-x-0 bottom-0 h-[72%]">
          <AuroraBars
            background="transparent"
            barCount={30}
            barOpacity={1}
            blur={3}
            colors={HERO_AURORA_COLORS}
            gap={2}
            maxHeightRatio={1}
            minHeightRatio={0.3}
            speed={5.5}
            vignette={false}
          />
        </div>
        <div className="iris-grain absolute inset-0 opacity-40" />
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
        {eyebrow}
      </Reveal>

      <Reveal
        as="h1"
        delay={60}
        className="display text-balance text-[2.5rem] leading-none sm:text-6xl md:text-[4.2rem] lg:text-[4.8rem]"
      >
        {title}
      </Reveal>

      <Reveal
        as="p"
        delay={140}
        className="mt-7 max-w-3xl text-balance text-lg leading-relaxed text-muted md:text-xl"
      >
        {description}
      </Reveal>

      {children ? (
        <Reveal delay={220} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {children}
        </Reveal>
      ) : null}
    </section>
  );
}

export function HeroChip({ children }) {
  return (
    <span className="rounded-full border border-line-strong bg-surface/80 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.04em] text-muted backdrop-blur-sm">
      {children}
    </span>
  );
}
