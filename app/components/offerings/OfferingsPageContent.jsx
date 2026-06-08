import Reveal from "../Reveal";
import SectionIntro from "../SectionIntro";
import Pill from "../Pill";
import IntegrationLogos from "../IntegrationLogos";
import { INTELLIGENCE_CAPABILITIES, IOT, PRODUCTS } from "@/lib/content";

export default function OfferingsPageContent() {
  return (
    <div className="px-5 py-24">
      <div className="mx-auto max-w-336 space-y-20">
        <SectionIntro
          label="Service 01"
          title="AI Native Business Systems"
          description="For businesses without a mature operational software stack. We design and deploy custom AI-native operating systems tailored to your industry and workflows."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.name} delay={i * 60}>
              <article className="card card-hover flex h-full flex-col overflow-hidden">
                <div className="border-b border-line p-8 md:p-9">
                  <p className="font-mono text-xs uppercase tracking-wide text-muted">
                    {product.tag}
                  </p>
                  <h3 className="mt-2 display text-3xl">{product.name}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                    {product.body}
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-8 md:p-9">
                  <p className="text-[0.95rem] leading-relaxed text-ink-2">
                    {product.details}
                  </p>
                  <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                    {product.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <article className="card bg-surface-2 p-8 md:p-10">
            <p className="mono-label mb-3">Also included</p>
            <h3 className="display text-2xl md:text-3xl">{IOT.name}</h3>
            <p className="mt-4 max-w-3xl text-[0.98rem] leading-relaxed text-muted">
              {IOT.body}
            </p>
            <p className="mt-3 max-w-3xl text-[0.98rem] leading-relaxed text-ink-2">
              {IOT.details}
            </p>
          </article>
        </Reveal>

        <div className="border-t border-line pt-20">
          <SectionIntro
            label="Service 02"
            title="Operational Intelligence Layer"
            description="For businesses already using ERP, CRM, or industry software. We build an intelligence layer on top of your existing systems to make them significantly smarter."
          />
        </div>

        <Reveal>
          <article className="overflow-hidden rounded-3xl bg-night text-white">
            <div className="grid grid-cols-1 gap-px bg-night-line sm:grid-cols-2 lg:grid-cols-3">
              {INTELLIGENCE_CAPABILITIES.map((cap) => (
                <div key={cap.title} className="bg-night-2 p-7 md:p-8">
                  <h4 className="text-lg font-semibold">{cap.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {cap.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-night-line p-8 md:p-10">
              <p className="mono-label mb-5 text-white/45">
                Works with your existing systems
              </p>
              <div className="rounded-2xl bg-surface p-6 md:p-7">
                <IntegrationLogos />
              </div>
              <h3 className="display mt-10 text-balance text-3xl md:text-4xl">
                No replacement. Only intelligence.
              </h3>
              <p className="mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-white/60">
                We connect, analyze, and enhance your existing software to drive
                better decisions and performance - without ripping out systems
                your teams already depend on.
              </p>
            </div>
          </article>
        </Reveal>

        <Reveal className="text-center">
          <Pill href="/contact" variant="primary">
            Discuss your stack
          </Pill>
        </Reveal>
      </div>
    </div>
  );
}
