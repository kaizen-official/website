import Reveal from "./Reveal";

const PRODUCTS = [
  {
    tag: "AI-Native · Real Estate ERP",
    name: "Meridian Build",
    body: "An end-to-end operating system for real-estate developers - projects, sales, procurement and finance on one workflow layer.",
    features: [
      "End-to-end project management",
      "Sales & CRM workflows",
      "Procurement & inventory management",
      "Builder-specific, customizable workflows",
    ],
    grad: "linear-gradient(135deg, #bcd6ff, #cdc9ff 55%, #e4ccff)",
  },
  {
    tag: "AI-Native · Chemical Factory ERP",
    name: "Meridian Process",
    body: "A factory-wide intelligence platform for chemical manufacturers - production, materials and power unified in real time.",
    features: [
      "Production planning & execution",
      "Inventory & raw-material tracking",
      "IoT power monitoring & analytics",
      "AI anomaly detection & cost insights",
    ],
    grad: "linear-gradient(135deg, #ffd0e6, #ffd8c6 55%, #ffeacf)",
  },
];

export default function Solutions() {
  return (
    <section
      id="products"
      className="scroll-mt-28 border-t border-line bg-surface px-5 py-20 md:py-28"
    >
      <div className="mx-auto max-w-336">
        <Reveal className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mono-label mb-4">06 · Products</p>
            <h2 className="display text-balance text-4xl md:text-5xl">
              Two vertical ERPs. One core.
            </h2>
          </div>
          <p className="max-w-sm text-muted">
            Proving the embedding-to-productization model in real industry - two
            verticals on one operational platform.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {PRODUCTS.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 80}
              className="card card-hover group overflow-hidden"
            >
              <div
                className="relative h-44 overflow-hidden md:h-52"
                style={{ background: p.grad }}
              >
                <div className="pointer-events-none absolute left-1/2 top-[115%] h-168 w-2xl -translate-x-1/2 -translate-y-1/2 opacity-80">
                  <div className="aurora absolute inset-0 aurora-spin" />
                </div>
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(120% 80% at 50% -10%, rgba(255,255,255,0.55), transparent 60%)",
                  }}
                />
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink shadow-sm backdrop-blur-sm">
                  {p.tag}
                </span>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
                  {p.name}
                </h3>
                <p className="mt-3 max-w-md text-[0.97rem] leading-relaxed text-muted">
                  {p.body}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-[0.95rem] text-ink-2"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className="mt-0.5 h-4 w-4 shrink-0 text-ink"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 10.5l3.5 3.5L16 5.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#demo" className="link-arrow mt-7 text-sm">
                  Book a demo
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
