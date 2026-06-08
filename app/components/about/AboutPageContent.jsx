import Reveal from "../Reveal";
import SectionIntro from "../SectionIntro";
import Pill from "../Pill";
import TeamMemberCard from "./TeamMemberCard";
import { FDE_POINTS, TEAM } from "@/lib/content";

const PRINCIPLES = [
  {
    title: "Proximity over assumptions",
    body: "The best systems are built where the work happens - not from a conference room.",
  },
  {
    title: "Intelligence over digitization",
    body: "Recording data is table stakes. Turning it into decisions is the difference.",
  },
  {
    title: "Adoption over features",
    body: "Software your operators actually use beats a feature list nobody touches.",
  },
];

export default function AboutPageContent() {
  return (
    <div className="px-5 py-24">
      <div className="mx-auto max-w-336">
        <SectionIntro
          label="Who we are"
          title="A team of AI-native product engineers"
          description="Prime Meridian Systems is focused on solving real operational problems for Bharat's businesses - from factories and construction sites to enterprises running mature software stacks."
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
          <Reveal className="card flex flex-col justify-between p-8 md:p-10 lg:col-span-3">
            <div>
              <p className="mono-label mb-4">Forward deployed engineering</p>
              <h2 className="display text-balance text-3xl md:text-4xl">
                We don&apos;t build from a distance.
              </h2>
              <p className="mt-5 text-[0.98rem] leading-relaxed text-muted">
                Our team visits your factories, offices, and operational sites to
                understand workflows, challenges, and business realities
                firsthand.
              </p>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-muted">
                By working closely with your team on the ground, we identify
                bottlenecks faster, uncover opportunities earlier, and build AI
                native solutions that fit the way your business actually
                operates.
              </p>
            </div>
            <ul className="mt-8 space-y-3 border-t border-line pt-6">
              {FDE_POINTS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[0.95rem] text-ink-2"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={80}
            className="card bg-night p-8 text-black md:p-10 lg:col-span-2"
          >
            <p className="mono-label mb-4 text-white/45">The difference</p>
            <p className="text-[1.05rem] leading-relaxed ">
              Intelligence starts with proximity. We embed with your teams,
              observe how work actually moves, and translate that into systems
              your people will use.
            </p>
            <p className="mt-5 text-[1.05rem] leading-relaxed">
              Whether you need a full AI-native operating system or an
              intelligence layer on top of SAP, Tally, or custom software, our
              approach begins on your floor - with your data and your
              constraints.
            </p>
          </Reveal>
        </div>

        <div className="mt-20">
          <SectionIntro
            label="Leadership"
            title="Built by operators, for operators"
            className="mb-10"
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 60}>
                <TeamMemberCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <SectionIntro
            label="Principles"
            title="How we think about building"
            className="mb-10"
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 50}>
                <div className="card h-full p-7 md:p-8">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-20 text-center">
          <Pill href="/contact" variant="primary">
            Work with us
          </Pill>
        </Reveal>
      </div>
    </div>
  );
}
