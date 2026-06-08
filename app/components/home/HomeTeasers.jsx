import Link from "next/link";
import ApproachFlow from "../ApproachFlow";
import SectionTeaser from "../SectionTeaser";
import Reveal from "../Reveal";
import { INTEGRATIONS, PRODUCTS, TEAM } from "@/lib/content";

export default function HomeTeasers() {
  return (
    <>
      <SectionTeaser
        id="about-preview"
        label="About us"
        title="AI-native engineers on the ground"
        description="A team of product engineers focused on solving real operational problems for Bharat's businesses — embedded where the work happens."
        href="/about"
        linkText="Meet the team"
      >
        <div className="card p-7 md:p-8">
          <p className="mono-label mb-4">Forward deployed engineering</p>
          <p className="display text-2xl leading-tight md:text-3xl">
            We don&apos;t build from a distance.
          </p>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
            Factories, offices, and operational sites — we learn your workflows
            firsthand before writing a line of code.
          </p>
          <div className="mt-6 flex gap-3">
            {TEAM.map((m) => (
              <div
                key={m.name}
                className="flex flex-1 flex-col rounded-2xl border border-line bg-surface-2 p-4"
              >
                <span className="font-mono text-xs text-faint">{m.role}</span>
                <span className="mt-1 font-semibold">{m.name}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionTeaser>

      <SectionTeaser
        id="offerings-preview"
        label="Our offerings"
        title="Two paths to intelligent operations"
        description="Full AI-native operating systems for businesses without mature software — or an intelligence layer that makes your existing ERP significantly smarter."
        href="/offerings"
        linkText="Explore offerings"
        dark
      >
        <div className="space-y-3">
          {PRODUCTS.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border border-night-line bg-night-2 p-5"
            >
              <p className="font-mono text-xs uppercase tracking-wide text-white/45">
                {p.tag}
              </p>
              <p className="mt-1 text-lg font-semibold text-white">{p.name}</p>
            </div>
          ))}
          <div className="rounded-2xl border border-dashed border-night-line p-5">
            <p className="font-mono text-xs uppercase tracking-wide text-white/45">
              + Intelligence layer
            </p>
            <p className="mt-2 text-sm text-white/60">
              SAP · Oracle · Tally · Odoo · Zoho · Custom
            </p>
          </div>
        </div>
      </SectionTeaser>

      <SectionTeaser
        id="why-we-win-preview"
        label="Why we win"
        title="Every software generates data. Very few generate intelligence."
        description="We bridge the gap — turning operational data into actionable intelligence that drives efficiency, performance, and growth."
        href="/why-we-win"
        linkText="See our approach"
      >
        <div className="card overflow-hidden p-5 md:p-6">
          <ApproachFlow compact />
        </div>
      </SectionTeaser>

      <section
        id="contact-preview"
        className="scroll-mt-28 border-t border-line px-5 py-20 md:py-28"
      >
        <div className="mx-auto max-w-336">
          <Reveal className="card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-10 lg:p-12">
                <p className="mono-label mb-4">Contact us</p>
                <h2 className="display text-balance text-3xl md:text-4xl">
                  Let&apos;s build intelligence into your operations.
                </h2>
                <p className="mt-4 text-muted">
                  Tell us about your business, your stack, and where you want to
                  grow. We&apos;ll take it from there — on the ground, with your
                  team.
                </p>
                <Link href="/contact" className="link-arrow mt-8 inline-flex">
                  Get in touch
                </Link>
              </div>
              <div className="flex flex-col justify-center border-t border-line bg-surface-2 p-8 md:p-10 lg:border-t-0 lg:border-l lg:p-12">
                <p className="font-mono text-xs uppercase tracking-wide text-faint">
                  Integrations we enhance
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {INTEGRATIONS.map((name) => (
                    <span
                      key={name}
                      className="rounded-full border border-line-strong bg-surface px-4 py-1.5 font-mono text-xs text-muted"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
