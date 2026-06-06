import Reveal from "./Reveal";

export default function Mission() {
  return (
    <section id="company" className="scroll-mt-24 px-5 py-24 md:py-36">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal as="p" className="mono-label mb-7">
          The core insight
        </Reveal>
        <Reveal
          as="p"
          delay={80}
          className="display text-balance text-3xl leading-[1.12] tracking-[-0.03em] sm:text-4xl md:text-[2.9rem]"
        >
          The problem is no longer digitization. The problem is{" "}
          <span className="relative inline-block">
            <span className="relative z-10">operational coordination</span>
            <span className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded iris-orb opacity-70" />
          </span>
          .
        </Reveal>
        <Reveal
          as="p"
          delay={160}
          className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted"
        >
          Indian MSMEs run on fragmented operational systems — every tool runs in
          isolation, with humans as the integration layer. Complexity scales faster
          than software adoption.
        </Reveal>
      </div>
    </section>
  );
}
