import Reveal from "../Reveal";
import SectionIntro from "../SectionIntro";
import BookDemoPill from "../BookDemoPill";
import {
  CONTACT_EXPECT,
  CONTACT_FAQ,
  CONTACT_FIT,
  CONTACT_PREP,
  CONTACT_PROCESS,
  SITE,
} from "@/lib/content";

export default function ContactPageContent() {
  return (
    <>
      <section className="border-b border-line px-5 py-24 md:py-28">
        <div className="mx-auto max-w-336">
          <SectionIntro
            label="Getting started"
            title="How we begin a partnership"
            description="Every engagement starts with understanding your operations - not pitching a product. Here is what the path from first message to on-site work typically looks like."
            align="center"
            className="mb-12"
          />
          <ol className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {CONTACT_PROCESS.map((step, i) => (
              <Reveal key={step.num} delay={i * 50}>
                <li className="card card-hover h-full p-7 md:p-8">
                  <p className="font-mono text-xs uppercase tracking-wide text-faint">
                    Step {step.num}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-2">
                    {step.body}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {step.detail}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line px-5 py-24 md:py-28">
        <div className="mx-auto max-w-336">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            <Reveal className="card p-8 md:p-10 lg:col-span-3">
              <p className="mono-label mb-4">Write to us</p>
              <h2 className="display text-balance text-3xl md:text-4xl">
                Tell us where you want to grow.
              </h2>
              <p className="mt-5 text-[0.98rem] leading-relaxed text-muted">
                Share your operations, software stack, and goals. We respond with
                a clear next step - whether that is a discovery visit, a
                technical assessment, or an honest redirect to a better fit.
              </p>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-muted">
                Email works best for a first conversation. Include as much
                context as you have - even a few sentences helps us prepare a
                useful reply.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <BookDemoPill variant="primary" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-mono text-sm text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
                  title={`Email ${SITE.name}`}
                >
                  {SITE.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={80} className="lg:col-span-2">
              <article className="card h-full bg-night p-8 text-black md:p-10">
                <p className="mono-label mb-4 text-black/45">
                  Include in your message
                </p>
                <p className="text-[0.98rem] leading-relaxed text-black/70">
                  The more context you share upfront, the more useful our first
                  reply will be.
                </p>
                <ul className="mt-6 space-y-3.5 border-t border-night-line pt-6">
                  {CONTACT_PREP.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[0.95rem] text-black/80"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black/60"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-line px-5 py-24 md:py-28">
        <div className="mx-auto max-w-336">
          <SectionIntro
            label="What to expect"
            title="A direct, operator-first conversation"
            description="We treat early conversations as discovery - not pipeline stages. Here is what you can count on when you reach out."
            className="mb-10"
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {CONTACT_EXPECT.map((item, i) => (
              <Reveal key={item.title} delay={i * 50}>
                <article className="card h-full p-7 md:p-8">
                  <h3 className="text-lg font-semibold tracking-tight">
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

      <section className="border-b border-line px-5 py-24 md:py-28">
        <div className="mx-auto max-w-336">
          <SectionIntro
            label="Fit"
            title="Who we partner with"
            description="Prime Meridian is built for Bharat's operationally complex businesses - where software should generate intelligence, not just records."
            className="mb-10"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {CONTACT_FIT.map((item, i) => (
              <Reveal key={item.title} delay={i * 40}>
                <article className="card card-hover h-full p-7 md:p-8">
                  <h3 className="text-lg font-semibold tracking-tight">
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

      <section className="px-5 py-24 md:py-28">
        <div className="mx-auto max-w-336">
          <SectionIntro
            label="FAQ"
            title="Common questions"
            description="Answers to what teams usually ask before a first conversation."
            align="center"
            className="mb-10"
          />
          <div className="space-y-3">
            {CONTACT_FAQ.map((item, i) => (
              <Reveal key={item.q} delay={i * 35}>
                <details className="card group p-6 md:p-7">
                  <summary
                    className="cursor-pointer list-none font-medium tracking-tight marker:content-none"
                    title="Expand answer"
                  >
                    <span className="flex items-center justify-between gap-4">
                      {item.q}
                      <span
                        aria-hidden="true"
                        className="shrink-0 text-faint transition-transform duration-300 group-open:rotate-45"
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
      </section>
    </>
  );
}
