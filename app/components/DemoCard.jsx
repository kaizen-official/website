"use client";

import { useState } from "react";
import Pill from "./Pill";
import Reveal from "./Reveal";

// The Prime Meridian stack - five layers on one operational core.
const LAYERS = {
  Coordination: {
    code: "L01",
    name: "Operational Coordination",
    blurb: "WhatsApp-first coordination across people, vendors and field ops.",
    items: [
      "WhatsApp workflows",
      "Approvals",
      "Dispatch",
      "Vendor coordination",
      "Field operations",
    ],
    note: "the layer between people and execution",
  },
  Workflow: {
    code: "L02",
    name: "Workflow Engine",
    blurb: "The engine that runs procurement, inventory and production.",
    items: [
      "Procurement flows",
      "Inventory workflows",
      "Escalation systems",
      "Production workflows",
    ],
    note: "orchestrates execution, not records",
  },
  "ERP Core": {
    code: "L03",
    name: "ERP Core",
    blurb: "The system of record - inventory through to compliance.",
    items: ["Inventory", "Billing", "Receivables", "Payroll", "Compliance"],
    note: "one source of operational truth",
  },
  CRM: {
    code: "L04",
    name: "CRM & Customer Operations",
    blurb: "Quotation-to-collection, without the leakage.",
    items: ["Quotations", "Collections", "Customer coordination", "Follow-ups"],
    note: "promised vs paid, finally reconciled",
  },
  Intelligence: {
    code: "L05",
    name: "Intelligence Layer",
    blurb: "Live operational truth and AI-assisted decisions.",
    items: [
      "Operational analytics",
      "Live dashboards",
      "Exception detection",
      "AI-assisted operations",
    ],
    note: "exceptions caught before impact",
  },
};

export default function DemoCard() {
  const [mode, setMode] = useState("Coordination");
  const data = LAYERS[mode];

  return (
    <section id="platform" className="scroll-mt-28 px-5 py-16 md:py-24">
      <div className="mx-auto max-w-336">
        <Reveal className="mb-10 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mono-label mb-3">05 · The stack</p>
            <h2 className="display text-balance text-4xl md:text-5xl">
              The Prime Meridian stack
            </h2>
          </div>
          <p className="max-w-sm text-muted">
            A vertically standardized operational software stack for Indian MSMEs -
            five layers on one core.
          </p>
        </Reveal>

        <Reveal className="card overflow-hidden rounded-4xl!">
          <div className="grid grid-cols-1 lg:grid-cols-[20rem_1fr]">
            {/* layer selector */}
            <div className="flex flex-col gap-2 border-b border-line bg-surface-2 p-5 lg:border-b-0 lg:border-r lg:p-7">
              <p className="mono-label mb-2">Explore the layers</p>
              {Object.entries(LAYERS).map(([key, layer]) => {
                const active = key === mode;
                return (
                  <button
                    key={key}
                    onClick={() => setMode(key)}
                    className="group flex items-center justify-between rounded-2xl border px-4 py-3 text-left transition-colors"
                    style={{
                      borderColor: active ? "var(--ink)" : "var(--line)",
                      background: active ? "var(--ink)" : "var(--surface)",
                      color: active ? "#fff" : "var(--ink)",
                    }}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className="font-mono text-[0.7rem]"
                        style={{ color: active ? "rgba(255,255,255,0.6)" : "var(--faint)" }}
                      >
                        {layer.code}
                      </span>
                      <span className="font-medium">{key}</span>
                    </span>
                    <span
                      className="h-2 w-2 rounded-full transition-colors"
                      style={{ background: active ? "#fff" : "var(--line-strong)" }}
                    />
                  </button>
                );
              })}
              <p className="mt-3 text-sm leading-relaxed text-muted">{data.blurb}</p>
            </div>

            {/* console */}
            <div className="relative flex flex-col bg-night p-5 md:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-40 blur-3xl iris-orb" />
              <div className="mb-5 flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="ml-3 font-mono text-xs text-white/40">
                  meridian - {data.code.toLowerCase()}
                </span>
              </div>

              <div
                key={mode}
                className="flex-1 space-y-2.5 font-mono text-[0.82rem] leading-relaxed md:text-sm"
              >
                <div className="reveal flex gap-3" data-shown="true">
                  <span className="select-none text-white/25">$</span>
                  <span className="text-white">
                    meridian layer --show {mode.toLowerCase().replace(/ /g, "-")}
                  </span>
                </div>
                <div
                  className="reveal flex gap-3"
                  data-shown="true"
                  style={{ transitionDelay: "80ms" }}
                >
                  <span className="select-none text-white/25">›</span>
                  <span className="text-white/45">
                    loaded {data.code} · {data.name}
                  </span>
                </div>
                {data.items.map((item, i) => (
                  <div
                    key={item}
                    className="reveal flex gap-3"
                    data-shown="true"
                    style={{ transitionDelay: `${140 + i * 80}ms` }}
                  >
                    <span className="select-none text-emerald-300/70">+</span>
                    <span className="text-emerald-300">{item}</span>
                  </div>
                ))}
                <div
                  className="reveal flex gap-3"
                  data-shown="true"
                  style={{ transitionDelay: `${160 + data.items.length * 80}ms` }}
                >
                  <span className="select-none text-white/25">→</span>
                  <span className="text-white/80">{data.note}</span>
                </div>
              </div>

              <div className="mt-8">
                <Pill href="#demo" variant="on-dark" className="text-[0.9rem]!">
                  Book a demo
                </Pill>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
