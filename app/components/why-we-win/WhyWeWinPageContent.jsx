import ApproachFlow from "../ApproachFlow";
import Reveal from "../Reveal";
import SectionIntro from "../SectionIntro";
import Pill from "../Pill";
import { PIPELINE } from "@/lib/content";

const CONTRASTS = [
  {
    old: "Reports you read once a month",
    next: "Intelligence that updates as operations run",
  },
  {
    old: "Software built from a distance",
    next: "Systems shaped on your factory floor",
  },
  {
    old: "Data locked in siloed tools",
    next: "A unified layer that connects every signal",
  },
];

export default function WhyWeWinPageContent() {
  return (
    <div className="px-5 py-24">
      <div className="mx-auto max-w-336">
        <Reveal className="mb-16">
          <div
            aria-label="Data to intelligence to growth"
            className="flex flex-wrap items-center justify-center gap-3 md:gap-5"
          >
            {PIPELINE.map((stage, i) => (
              <div key={stage} className="flex items-center gap-3 md:gap-5">
                <span className="rounded-full border border-line-strong bg-surface px-6 py-3 font-mono text-sm font-medium md:text-base">
                  {stage}
                </span>
                {i < PIPELINE.length - 1 ? (
                  <span aria-hidden="true" className="text-2xl text-faint">
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-lg text-muted">
            Prime Meridian helps businesses bridge the gap — turning operational
            data into actionable intelligence that drives efficiency,
            performance, and growth.
          </p>
        </Reveal>

        <SectionIntro
          label="The shift"
          title="From recording operations to understanding them"
          description="Most business software was built to digitize paperwork. We build systems that learn from operations — and help you improve them continuously."
          align="center"
          className="mb-12"
        />

        <div className="mb-20 grid grid-cols-1 gap-4 md:grid-cols-3">
          {CONTRASTS.map((row, i) => (
            <Reveal key={row.old} delay={i * 50}>
              <div className="card h-full p-7 md:p-8">
                <p className="text-sm text-faint line-through decoration-line-strong">
                  {row.old}
                </p>
                <p className="mt-4 text-lg font-medium leading-snug">{row.next}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <SectionIntro
          label="Our approach"
          title="From understanding to intelligent growth"
          description="We work closely with business leaders and teams to understand operations, connect data, and deliver intelligence that continuously drives improvement."
          align="center"
          className="mb-14"
        />

        <ApproachFlow />

        <Reveal className="mt-20 text-center">
          <Pill href="/contact" variant="primary">
            Start the conversation
          </Pill>
        </Reveal>
      </div>
    </div>
  );
}
