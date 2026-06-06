import { AuroraBars } from "@/components/unlumen-ui/aurora-bars";
import Pill from "./Pill";
import Reveal from "./Reveal";

const CTA_AURORA_COLORS = [
  "#bcd6ff",
  "#cdc9ff",
  "#e4ccff",
  "#ffd0e6",
  "#ffeacf",
  "#0a0a0a00",
];

export default function ClosingCTA() {
  return (
    <section id="demo" className="scroll-mt-24 px-5 pb-8 pt-4">
      <div className="relative mx-auto max-w-336 overflow-hidden rounded-[2.5rem] bg-night px-6 py-24 text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <AuroraBars
            background="#0a0a0a"
            barCount={32}
            blur={8}
            colors={CTA_AURORA_COLORS}
            gap={3}
            maxHeightRatio={1.25}
            minHeightRatio={0.14}
            speed={0.38}
          />
          <div className="iris-grain absolute inset-0 opacity-[0.08]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 75% 65% at 50% 42%, rgba(10,10,10,0.78) 22%, rgba(10,10,10,0.35) 48%, transparent 74%)",
            }}
          />
        </div>

        <div className="relative">
          <Reveal as="p" className="mono-label mb-6 text-white/50">
            14 · The vision
          </Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="display text-balance text-[2.6rem] leading-[1.02] text-white sm:text-6xl md:text-7xl"
          >
            The default operational
            <br className="hidden sm:block" /> stack for Bharat.
          </Reveal>
          <Reveal
            as="p"
            delay={120}
            className="mx-auto mt-6 max-w-xl text-balance text-lg text-white/65"
          >
            Building the operational coordination layer for operationally complex
            Indian MSMEs - from operational embedding to infrastructure scale.
          </Reveal>
          <Reveal
            delay={200}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Pill href="mailto:hello@primemeridian.in" variant="on-dark">
              Book a demo
            </Pill>
            <a
              href="mailto:hello@primemeridian.in"
              className="text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              hello@primemeridian.in
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
