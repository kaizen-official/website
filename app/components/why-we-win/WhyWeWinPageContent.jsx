import ApproachFlow from "../ApproachFlow";
import ClosingCTA from "../ClosingCTA";
import Reveal from "../Reveal";
import SectionIntro from "../SectionIntro";
import PipelineStages from "./PipelineStages";
import {
  WHY_WE_WIN_CONTRASTS,
  WHY_WE_WIN_OUTCOMES,
} from "@/lib/content";

export default function WhyWeWinPageContent() {
  return (
    <>
      <section className="border-b border-line px-5 py-24 md:py-28">
        <div className="mx-auto max-w-336">
          <SectionIntro
            label="The model"
            title="Data → Intelligence → Growth"
            description="Operational software generates enormous volumes of data. The businesses that win are the ones that turn it into continuous, actionable intelligence."
            align="center"
            className="mb-4"
          />
          <PipelineStages />
        </div>
      </section>

      <section className="border-b border-line px-5 py-24 md:py-28">
        <div className="mx-auto max-w-336">
          <SectionIntro
            label="The gap"
            title="Most stacks record. Few learn."
            description="Digitization solved data entry. Intelligence is still missing - buried in silos, delayed in reports, and disconnected from the people who run the work."
          />

          <Reveal>
            <div className="card overflow-hidden">
              <div className="grid grid-cols-1 border-b border-line sm:grid-cols-2">
                <div className="border-b border-line bg-surface-2 px-6 py-4 sm:border-b-0 sm:border-r">
                  <p className="mono-label text-faint">Typical stack</p>
                </div>
                <div className="bg-surface px-6 py-4">
                  <p className="mono-label">With Prime Meridian</p>
                </div>
              </div>
              <ul>
                {WHY_WE_WIN_CONTRASTS.map((row, i) => (
                  <li
                    key={row.old}
                    className={`grid grid-cols-1 sm:grid-cols-2 ${
                      i < WHY_WE_WIN_CONTRASTS.length - 1
                        ? "border-b border-line"
                        : ""
                    }`}
                  >
                    <p className="border-b border-line bg-surface-2 px-6 py-5 text-[0.95rem] text-faint line-through decoration-line-strong sm:border-b-0 sm:border-r">
                      {row.old}
                    </p>
                    <p className="px-6 py-5 text-[0.98rem] font-medium leading-snug">
                      {row.next}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line px-5 py-24 md:py-28">
        <div className="mx-auto max-w-336">
          <SectionIntro
            label="Our approach"
            title="From understanding to intelligent growth"
            description="We work closely with business leaders and teams to understand operations, connect data, and deliver intelligence that continuously drives improvement."
            align="center"
            className="mb-14"
          />
          <ApproachFlow />
        </div>
      </section>

      <section className="px-5 py-24 md:py-28">
        <div className="mx-auto max-w-336">
          <SectionIntro
            label="What changes"
            title="Intelligence you can act on"
            description="When data flows into a unified intelligence layer, the impact shows up in daily operations - not just quarterly reviews."
            className="mb-10"
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {WHY_WE_WIN_OUTCOMES.map((item, i) => (
              <Reveal key={item.title} delay={i * 50}>
                <article className="card card-hover h-full p-7 md:p-8">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
