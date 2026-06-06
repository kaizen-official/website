import Reveal from "./Reveal";

// Why now - adoption is high, operational software is not (deck slide 07).
const ADOPTION = [
  { n: "94%", label: "Internet usage among Indian MSMEs", src: "RIS MSME Digitalisation Report" },
  { n: "87%", label: "Digital payments adoption among MSMEs", src: "Ministry of MSME · 2024–25" },
  { n: "12%", label: "ERP adoption across Indian MSMEs", src: "SIDBI MSME Sector Report" },
  { n: "13%", label: "CRM adoption across Indian MSMEs", src: "SIDBI MSME Sector Report" },
];

// The opportunity - TAM/SAM/SOM and the Year-4 scenario (deck slide 11).
const MARKET = [
  { n: "7,29,909", label: "TAM · MSMEs above ₹5 Cr turnover" },
  { n: "2,91,964", label: "SAM · manufacturing, retail, logistics, services" },
  { n: "2,500", label: "SOM · realistic capture over 48 months" },
  { n: "₹45 Cr", label: "ARR run-rate · Year-4 scenario" },
];

export default function Market() {
  return (
    <section
      id="market"
      className="scroll-mt-28 px-5 py-20 md:py-28"
    >
      <div className="mx-auto max-w-336">
        <Reveal className="mb-12 max-w-3xl">
          <p className="mono-label mb-4">07 · Why now</p>
          <h2 className="display text-balance text-4xl md:text-5xl">
            India&apos;s first large-scale operational digitization cycle.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            The infrastructure for operational digitization now exists. MSMEs are
            online and transacting digitally - but their operations still aren&apos;t.
          </p>
        </Reveal>

        {/* adoption gap */}
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {ADOPTION.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 60}
              className="flex flex-col bg-surface p-6 md:p-7"
            >
              <span className="display text-4xl md:text-5xl">{s.n}</span>
              <span className="mt-3 text-[0.92rem] leading-snug text-ink-2">
                {s.label}
              </span>
              <span className="mt-auto pt-4 font-mono text-[0.65rem] uppercase tracking-widest text-faint">
                {s.src}
              </span>
            </Reveal>
          ))}
        </div>

        {/* the opportunity */}
        <Reveal className="mt-5 overflow-hidden rounded-2xl bg-night p-7 md:p-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <p className="mono-label text-white/50!">11 · The opportunity</p>
            <p className="max-w-md text-sm text-white/55">
              Operational software for the upper-tier Indian MSME - large,
              under-digitized, operationally complex firms with real paying capacity.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {MARKET.map((m) => (
              <div key={m.label}>
                <div className="display text-3xl text-white md:text-4xl">{m.n}</div>
                <div className="mt-2 text-[0.85rem] leading-snug text-white/55">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* traction note */}
        <Reveal className="mt-5 flex flex-col items-start gap-4 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between md:p-7">
          <p className="text-[0.97rem] text-ink-2">
            <span className="font-semibold">Live today.</span> Real-estate ERP deployed,
            chemical ERP onboarding - ₹2.97L implementation revenue recognized, MRR
            commissioning from July.
          </p>
          <span className="shrink-0 rounded-full border border-line-strong px-3.5 py-1.5 font-mono text-xs text-ink">
            08 · Traction
          </span>
        </Reveal>
      </div>
    </section>
  );
}
