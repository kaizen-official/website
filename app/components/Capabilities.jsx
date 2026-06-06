import Reveal from "./Reveal";

const MOATS = [
  {
    title: "Workflow depth",
    body: "We orchestrate execution, not records. Most ERPs digitize accounts - Prime Meridian runs dispatch, approvals, inventory and collections.",
    glyph: (
      <>
        <circle cx="16" cy="9" r="4" />
        <circle cx="8" cy="23" r="4" />
        <circle cx="24" cy="23" r="4" />
        <path d="M16 13v3m0 0l-6 4m6-4l6 4" />
      </>
    ),
  },
  {
    title: "Vertical specialization",
    body: "Built for industry-specific reality. Generic software breaks under operational variability - we ship per vertical, from chemical floors to real-estate approvals.",
    glyph: (
      <>
        <rect x="6" y="6" width="20" height="20" rx="4" />
        <path d="M12 13l-3 3 3 3M20 13l3 3-3 3" />
      </>
    ),
  },
  {
    title: "Implementation velocity",
    body: "MSMEs need weeks, not 12-month enterprise consulting cycles. Practical, low-disruption deployments make fast onboarding a moat of its own.",
    glyph: (
      <>
        <path d="M7 17l5 5 13-13" />
        <circle cx="16" cy="16" r="13" />
      </>
    ),
  },
  {
    title: "Switching costs",
    body: "Once embedded, switching is painful. Operational systems become deep infrastructure - and every deployment compounds reusable software leverage.",
    glyph: (
      <>
        <path d="M12 2l8 3v6c0 5-3.5 8-8 11-4.5-3-8-6-8-11V5l8-3z" />
        <path d="M11 15l-2-2m2 2l4-4" />
      </>
    ),
  },
];

export default function Capabilities() {
  return (
    <section id="approach" className="scroll-mt-28 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-336">
        <Reveal className="mb-12 max-w-2xl">
          <p className="mono-label mb-4">12 · Why we win</p>
          <h2 className="display text-balance text-4xl md:text-5xl">
            Our moat is operational embedding.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            The winner in this market will own workflows - not just records.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MOATS.map((m, i) => (
            <Reveal
              key={m.title}
              delay={i * 70}
              className="card card-hover flex flex-col p-6 md:p-7"
            >
              <span className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-surface-2">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-ink"
                  aria-hidden="true"
                >
                  {m.glyph}
                </svg>
              </span>
              <h3 className="text-xl font-semibold tracking-[-0.02em]">{m.title}</h3>
              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">
                {m.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
