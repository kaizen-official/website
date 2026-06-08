import { AuroraBars } from "@/components/unlumen-ui/aurora-bars";
import Pill from "./Pill";
import Reveal from "./Reveal";

const HERO_AURORA_COLORS = [
  "#b8e8d4",
  "#ffd9a8",
  "#ffc4df",
  "#c4b8ff",
  "#a8c8ff",
  "#f4f4f250",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-28 text-center"
    >
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
        AI-native systems · Bharat
      </Reveal>

      <Reveal
        as="h1"
        delay={60}
        className="display text-balance text-[2.6rem] leading-[0.98] sm:text-6xl md:text-[4.6rem] lg:text-[5.4rem]"
      >
        Enabling Intelligent Growth
        <br />
        for Bharat&apos;s Businesses.
      </Reveal>

      <Reveal
        as="p"
        delay={140}
        className="mt-7 max-w-3xl text-balance text-lg leading-relaxed text-muted md:text-xl"
      >
        We build AI-native systems and intelligence platforms that help
        Bharat&apos;s businesses operate and grow more intelligently.
      </Reveal>

      <Reveal
        delay={220}
        className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
      >
        <Pill href="/offerings" variant="primary">
          Our offerings
        </Pill>
        <Pill href="/contact" variant="secondary">
          Contact us
        </Pill>
      </Reveal>
    </section>
  );
}
