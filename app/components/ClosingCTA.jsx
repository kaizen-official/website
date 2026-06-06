import Aurora from "./Aurora";
import Pill from "./Pill";
import Reveal from "./Reveal";

export default function ClosingCTA() {
  return (
    <section id="demo" className="scroll-mt-24 px-5 pb-8 pt-4">
      <div className="relative mx-auto max-w-[84rem] overflow-hidden rounded-[2.5rem] bg-night px-6 py-24 text-center md:py-32">
        {/* iridescent rings on dark */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[130vmin] w-[130vmin] -translate-x-1/2 -translate-y-1/2">
          <div className="iris-wash absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 !opacity-30" />
          <Aurora />
          <div className="iris-grain absolute inset-0 !opacity-[0.08]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(closest-side, rgba(10,10,10,0.82) 26%, rgba(10,10,10,0.38) 50%, transparent 72%)",
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
            Indian MSMEs — from operational embedding to infrastructure scale.
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
