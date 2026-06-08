import { AuroraBars } from "@/components/unlumen-ui/aurora-bars";
import Reveal from "./Reveal";

const LIGHT_AURORA = [
  "#b8e8d4",
  "#ffd9a8",
  "#ffc4df",
  "#c4b8ff",
  "#a8c8ff",
  "#f4f4f250",
];

const DARK_AURORA = [
  "#bcd6ff",
  "#cdc9ff",
  "#e4ccff",
  "#ffd0e6",
  "#ffeacf",
  "#0a0a0a00",
];

export default function PageHero({
  label,
  title,
  description,
  tone = "light",
  compact = false,
}) {
  const dark = tone === "dark";
  const colors = dark ? DARK_AURORA : LIGHT_AURORA;

  return (
    <section
      className={`relative overflow-hidden px-5 text-center ${
        compact ? "pb-16 pt-32 md:pb-20 md:pt-36" : "pb-24 pt-32 md:pb-32 md:pt-40"
      } ${dark ? "bg-night text-white" : "bg-bg text-ink"}`}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className={`absolute inset-x-0 bottom-0 ${dark ? "h-full" : "h-[68%]"}`}
        >
          <AuroraBars
            background={dark ? "#0a0a0a" : "transparent"}
            barCount={dark ? 32 : 28}
            barOpacity={dark ? 0.9 : 1}
            blur={dark ? 8 : 3}
            colors={colors}
            gap={dark ? 3 : 2}
            maxHeightRatio={dark ? 0.88 : 0.92}
            minHeightRatio={dark ? 0.16 : 0.38}
            speed={dark ? 0.38 : 0.42}
            vignette={dark}
          />
        </div>
        <div
          className={`iris-grain absolute inset-0 ${dark ? "opacity-[0.08]" : "opacity-35"}`}
        />
        <div
          className="absolute inset-0"
          style={{
            background: dark
              ? "radial-gradient(ellipse 75% 60% at 50% 40%, rgba(10,10,10,0.75) 20%, rgba(10,10,10,0.3) 50%, transparent 74%)"
              : "linear-gradient(to bottom, #f4f4f2 0%, #f4f4f2 12%, rgba(244,244,242,0.9) 30%, transparent 62%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl">
        {label ? (
          <Reveal as="p" className={`mono-label mb-5 ${dark ? "text-white/50" : ""}`}>
            {label}
          </Reveal>
        ) : null}
        <Reveal
          as="h1"
          delay={40}
          className={`display text-balance ${
            compact
              ? "text-4xl sm:text-5xl md:text-6xl"
              : "text-[2.4rem] sm:text-6xl md:text-7xl lg:text-[4.5rem]"
          }`}
        >
          {title}
        </Reveal>
        {description ? (
          <Reveal
            as="p"
            delay={100}
            className={`mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed md:text-xl ${
              dark ? "text-white/65" : "text-muted"
            }`}
          >
            {description}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
