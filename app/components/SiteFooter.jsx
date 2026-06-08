import Link from "next/link";
import Wordmark from "./Wordmark";

const COLS = [
  {
    title: "Company",
    links: [
      ["About us", "/about"],
      ["Why we win", "/why-we-win"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Offerings",
    links: [
      ["AI Native Business Systems", "/offerings"],
      ["Meridian Build", "/offerings"],
      ["Meridian Process", "/offerings"],
      ["Operational Intelligence Layer", "/offerings"],
    ],
  },
  {
    title: "Capabilities",
    links: [
      ["Forward deployed engineering", "/about"],
      ["IoT & hardware integration", "/offerings"],
      ["Predictive analytics", "/offerings"],
      ["ERP intelligence layer", "/offerings"],
    ],
  },
  {
    title: "Elsewhere",
    links: [
      ["X / Twitter", "https://x.com/primemeridian"],
      ["LinkedIn", "https://www.linkedin.com/company/prime-meridian-systems"],
      ["Email", "mailto:contact@primemeridiansystems.in"],
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-night text-white">
      <div className="mx-auto max-w-336 px-5 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2">
            <Link href="/" aria-label="Prime Meridian Systems - home">
              <Wordmark invert className="h-15" />
            </Link>
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-white/55">
              AI-native systems and intelligence platforms that help
              Bharat&apos;s businesses operate and grow more intelligently.
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
                    {href.startsWith("/") ? (
                      <Link
                        href={href}
                        className="text-[0.92rem] text-white/65 transition-colors hover:text-white"
                      >
                        {label}
                      </Link>
                    ) : (
                      <a
                        href={href}
                        className="text-[0.92rem] text-white/65 transition-colors hover:text-white"
                      >
                        {label}
                      </a>
                    )}
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
            <a
              href="#"
              className="font-mono text-xs text-white/40 transition-colors hover:text-white/70"
            >
              Privacy
            </a>
            <a
              href="#"
              className="font-mono text-xs text-white/40 transition-colors hover:text-white/70"
            >
              Terms
            </a>
            <a
              href="#"
              className="font-mono text-xs text-white/40 transition-colors hover:text-white/70"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
