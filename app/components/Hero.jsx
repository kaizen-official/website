import Aurora from "./Aurora";
import Pill from "./Pill";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-28 text-center"
    >
      {/* holographic ring field */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[170vmin] w-[170vmin] -translate-x-1/2 -translate-y-1/2">
        {/* soft colour atmosphere */}
        <div className="iris-wash absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2" />
        {/* concentric rings */}
        <Aurora />
        {/* fine grain to remove banding */}
        <div className="iris-grain absolute inset-0" />
        {/* legibility fade so text stays crisp over the rings */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(closest-side, rgba(244,244,242,0.9) 22%, rgba(244,244,242,0.45) 44%, transparent 68%)",
          }}
        />
      </div>

      {/* news banner */}
      <Reveal>
        <a
          href="#products"
          className="group mb-9 inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-surface/80 py-1.5 pl-2 pr-4 text-sm backdrop-blur-sm transition-colors hover:bg-surface"
        >
          <span className="rounded-full bg-ink px-2.5 py-0.5 text-xs font-medium text-white">
            Live
          </span>
          <span className="text-ink-2">
            Meridian Build &amp; Meridian Process — two vertical ERPs, one core
          </span>
          <span className="text-muted transition-transform duration-300 group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </Reveal>

      <Reveal as="p" delay={40} className="mono-label mb-5">
        Operational Software · Bharat
      </Reveal>

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
        className="mt-7 max-w-2xl text-balance text-lg leading-relaxed text-muted md:text-xl"
      >
        Prime Meridian is the operational coordination layer for Indian MSMEs —
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
