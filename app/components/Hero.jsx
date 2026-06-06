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
        <div className="absolute inset-x-0 bottom-0 h-[92%]">
          <AuroraBars
            background="transparent"
            barCount={30}
            barOpacity={1}
            blur={3}
            colors={HERO_AURORA_COLORS}
            gap={2}
            maxHeightRatio={0.94}
            minHeightRatio={0.42}
            speed={5.45}
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

      {/* news banner */}
      {/* <Reveal>
        <a
          href="#products"
          className="group mb-9 inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-surface/80 py-1.5 pl-2 pr-4 text-sm backdrop-blur-sm transition-colors hover:bg-surface"
        >
          <span className="rounded-full bg-ink px-2.5 py-0.5 text-xs font-medium text-white">
            Live
          </span>
          <span className="text-ink-2">
            Meridian Build &amp; Meridian Process - two vertical ERPs, one core
          </span>
          <span className="text-muted transition-transform duration-300 group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </Reveal> */}

      {/* <Reveal as="p" delay={40} className="mono-label mb-5">
        Operational Software · Bharat
      </Reveal> */}

      <Reveal
        as="h1"
        delay={60}
        className="display text-balance text-[3.1rem] leading-[0.95] sm:text-7xl md:text-[5.3rem] lg:text-[6.2rem]"
      >
        Structured growth
        <br />
        for Bharat&apos;s MSMEs.
      </Reveal>

      <Reveal
        as="p"
        delay={140}
        className="mt-7 max-w-3xl text-balance text-lg leading-relaxed text-muted md:text-xl"
      >
        Prime Meridian is the operational coordination layer for Indian MSMEs -
        people, workflows, inventory, dispatch and finance on one vertically
        standardized stack.
      </Reveal>

      <Reveal
        delay={220}
        className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
      >
        <Pill href="#demo" variant="primary">
          Book a demo
        </Pill>
        <Pill href="#platform" variant="secondary">
          See the stack
        </Pill>
      </Reveal>
    </section>
  );
}
