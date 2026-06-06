import Reveal from "./Reveal";

// What Indian MSMEs actually run on today - fragmented, manual, disconnected.
const TOOLS = [
  "Excel Sheets",
  "WhatsApp Approvals",
  "Tally Accounting",
  "Paper Approvals",
  "Phone Coordination",
  "Inventory Notebooks",
  "Receivables Follow-ups",
  "Dispatch Registers",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {TOOLS.map((t) => (
        <span key={t} className="flex items-center">
          <span className="whitespace-nowrap px-8 text-xl font-medium tracking-[-0.02em] text-ink/35 md:text-2xl">
            {t}
          </span>
          <span className="text-ink/15">·</span>
        </span>
      ))}
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section className="border-y border-line bg-surface py-12 md:py-16">
      <div className="mx-auto max-w-336 px-5">
        <Reveal as="p" className="mono-label mb-8 text-center">
          What Indian MSMEs run on today - fragmented, manual, disconnected
        </Reveal>
        <div className="marquee-mask flex overflow-hidden">
          <div className="marquee-track flex">
            <Row />
            <Row />
          </div>
        </div>
      </div>
    </section>
  );
}
