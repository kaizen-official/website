import Reveal from "../Reveal";
import Pill from "../Pill";
import { CONTACT_FAQ, SITE } from "@/lib/content";

const EXPECT = [
  "A conversation about your operations — not a sales script",
  "Honest guidance on whether you need a full system or an intelligence layer",
  "A path to forward-deployed discovery if there is a fit",
];

export default function ContactPageContent() {
  return (
    <div className="px-5 py-24">
      <div className="mx-auto max-w-336">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <Reveal className="card p-8 md:p-10 lg:col-span-3">
            <p className="mono-label mb-4">Get in touch</p>
            <h2 className="display text-3xl md:text-4xl">
              Tell us where you want to grow.
            </h2>
            <p className="mt-4 text-muted">
              Share your operations, software stack, and goals. We&apos;ll
              respond with a clear next step — whether that&apos;s a discovery
              visit, a technical assessment, or an honest redirect.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Pill href={`mailto:${SITE.email}`} variant="primary">
                Book a demo
              </Pill>
              <a
                href={`mailto:${SITE.email}`}
                className="text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
              >
                {SITE.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={80} className="card bg-night p-8 text-black md:p-10 lg:col-span-2">
            <p className="mono-label mb-4 text-white/45">What to expect</p>
            <ul className="space-y-4">
              {EXPECT.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[0.95rem] text-black"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-16">
          <Reveal>
            <p className="mono-label mb-8">Common questions</p>
          </Reveal>
          <div className="space-y-3">
            {CONTACT_FAQ.map((item, i) => (
              <Reveal key={item.q} delay={i * 40}>
                <details className="card group p-6 md:p-7">
                  <summary className="cursor-pointer list-none font-medium tracking-tight marker:content-none">
                    <span className="flex items-center justify-between gap-4">
                      {item.q}
                      <span
                        aria-hidden="true"
                        className="text-faint transition-transform duration-300 group-open:rotate-45"
                      >
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
