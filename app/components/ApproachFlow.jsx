"use client";

import { useEffect, useRef, useState } from "react";
import { APPROACH_STEPS } from "@/lib/content";

function UnderstandIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-9 w-9" aria-hidden="true">
      <circle cx="11" cy="11" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="21" cy="11" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M6 26c0-4 3-6 5-6h10c2 0 5 2 5 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CaptureIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-9 w-9" aria-hidden="true">
      <ellipse cx="16" cy="8" rx="9" ry="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M7 8v14c0 1.7 4 3 9 3s9-1.3 9-3V8"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M7 15c0 1.7 4 3 9 3s9-1.3 9-3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function ConnectIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-9 w-9" aria-hidden="true">
      <circle cx="8" cy="16" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="24" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M11 15l8-5M11 17l8 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AnalyzeIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-9 w-9" aria-hidden="true">
      <path
        d="M16 5c-5 0-9 3.5-9 8 0 3 2 5.5 5 7v5h8v-5c3-1.5 5-4 5-7 0-4.5-4-8-9-8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M13 14h2M17 14h2M13 18h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ImproveIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-9 w-9" aria-hidden="true">
      <path
        d="M6 24V14M12 24V10M18 24V16M24 24V8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M6 12l6-4 6 3 8-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 5h4v4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ICONS = [
  UnderstandIcon,
  CaptureIcon,
  ConnectIcon,
  AnalyzeIcon,
  ImproveIcon,
];

function gridColumns(count) {
  const parts = [];
  for (let i = 0; i < count; i += 1) {
    parts.push("1fr");
    if (i < count - 1) parts.push("2.25rem");
  }
  return parts.join(" ");
}

function IconNode({ index, active, delay }) {
  const Icon = ICONS[index] ?? UnderstandIcon;

  return (
    <div className="approach-icon-slot relative h-20 w-20">
      <div
        aria-hidden="true"
        className={`approach-orb absolute inset-0 rounded-full ${
          active ? "approach-orb-active" : ""
        }`}
      />
      <div
        className="approach-icon-ring relative z-10 flex h-full w-full items-center justify-center rounded-full border border-line-strong bg-surface/95 text-ink"
        style={active ? { animationDelay: `${delay + 300}ms` } : undefined}
      >
        <Icon />
      </div>
    </div>
  );
}

function FlowArrow({ active, delay, vertical }) {
  return (
    <div
      aria-hidden="true"
      className={`approach-arrow flex items-center justify-center text-ink/30 ${
        vertical ? "h-10 lg:hidden" : "hidden h-20 lg:flex"
      } ${active ? "approach-arrow-active" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={`h-4 w-4 ${vertical ? "rotate-90" : ""}`}
      >
        <path
          d="M5 12h12M13 7l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="approach-arrow-path"
        />
      </svg>
    </div>
  );
}

export default function ApproachFlow({ className = "", compact = false }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const steps = compact ? APPROACH_STEPS.slice(0, 3) : APPROACH_STEPS;
  const columns = gridColumns(steps.length);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`approach-flow ${className}`}
      data-active={active}
      data-steps={steps.length}
    >
      {/* Desktop: icon track + text track */}
      <div className="approach-desktop hidden lg:block" role="list">
        <div
          className="approach-track relative grid"
          style={{ gridTemplateColumns: columns }}
        >
          <div
            aria-hidden="true"
            className={`approach-rail ${active ? "approach-rail-active" : ""}`}
          />
          {steps.map((step, i) => {
            const delay = i * 130;
            const nodes = [
              <div
                key={`icon-${step.title}`}
                className={`approach-step flex items-center justify-center ${
                  active ? "approach-step-active" : ""
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <IconNode index={i} active={active} delay={delay} />
              </div>,
            ];
            if (i < steps.length - 1) {
              nodes.push(
                <FlowArrow
                  key={`arrow-${step.title}`}
                  active={active}
                  delay={delay + 70}
                  vertical={false}
                />
              );
            }
            return nodes;
          })}
        </div>

        <div className="mt-5 grid" style={{ gridTemplateColumns: columns }}>
          {steps.map((step, i) => {
            const delay = i * 130;
            const nodes = [
              <div
                key={`copy-${step.title}`}
                role="listitem"
                className={`approach-step px-2 text-center ${
                  active ? "approach-step-active" : ""
                }`}
                style={{ transitionDelay: `${delay + 40}ms` }}
              >
                <h3 className="text-base font-semibold tracking-tight text-ink md:text-lg">
                  {i + 1}. {step.title}
                </h3>
                <p
                  className={`mx-auto mt-2 leading-relaxed text-muted ${
                    compact
                      ? "text-sm"
                      : "max-w-44 text-[0.92rem] md:max-w-48 md:text-[0.95rem]"
                  }`}
                >
                  {step.body}
                </p>
              </div>,
            ];
            if (i < steps.length - 1) {
              nodes.push(
                <div key={`gap-${step.title}`} aria-hidden="true" />
              );
            }
            return nodes;
          })}
        </div>
      </div>

      {/* Mobile: stacked */}
      <div
        role="list"
        aria-label="Our five-step approach"
        className="flex flex-col items-stretch lg:hidden"
      >
        {steps.map((step, i) => {
          const delay = i * 130;
          return (
            <div key={step.title}>
              <div
                role="listitem"
                className={`approach-step flex flex-col items-center text-center ${
                  active ? "approach-step-active" : ""
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <IconNode index={i} active={active} delay={delay} />
                <h3 className="mt-5 text-base font-semibold tracking-tight text-ink">
                  {i + 1}. {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
              {i < steps.length - 1 ? (
                <FlowArrow
                  active={active}
                  delay={delay + 70}
                  vertical
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
