import Wordmark from "./Wordmark";

const COLS = [
  {
    title: "Platform",
    links: [
      ["Operational Coordination", "#platform"],
      ["Workflow Engine", "#platform"],
      ["ERP Core", "#platform"],
      ["Intelligence Layer", "#platform"],
    ],
  },
  {
    title: "Products",
    links: [
      ["Meridian Build", "#products"],
      ["Meridian Process", "#products"],
      ["Why we win", "#approach"],
      ["Market", "#market"],
    ],
  },
  {
    title: "Company",
    links: [
      ["The opportunity", "#market"],
      ["Traction", "#market"],
      ["Investor brief", "https://deck.kaizen.org.in"],
      ["Contact", "#demo"],
    ],
  },
  {
    title: "Elsewhere",
    links: [
      ["X / Twitter", "https://x.com/primemeridian"],
      ["LinkedIn", "https://www.linkedin.com/company/prime-meridian-systems"],
      ["Email", "mailto:hello@primemeridian.in"],
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-night text-white">
      <div className="mx-auto max-w-[84rem] px-5 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2">
            <Wordmark invert className="h-6" />
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-white/55">
              The operational coordination layer for Bharat&apos;s MSMEs — enabling
              structured growth.
            </p>
            <p className="mt-6 font-mono text-xs tracking-wide text-white/35">
              Operational Software · Bharat
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-white/40">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[0.92rem] text-white/65 transition-colors hover:text-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-night-line pt-7 sm:flex-row sm:items-center">
          <p className="font-mono text-xs tracking-wide text-white/40">
            © 2026 Prime Meridian Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-mono text-xs text-white/40 transition-colors hover:text-white/70">
              Privacy
            </a>
            <a href="#" className="font-mono text-xs text-white/40 transition-colors hover:text-white/70">
              Terms
            </a>
            <a href="#" className="font-mono text-xs text-white/40 transition-colors hover:text-white/70">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
