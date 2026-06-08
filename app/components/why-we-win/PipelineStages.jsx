"use client";

import { useEffect, useRef, useState } from "react";
import { PIPELINE_STAGES } from "@/lib/content";

export default function PipelineStages() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-label="Data to intelligence to growth"
      className={`relative pt-10 ${active ? "pipeline-active" : ""}`}
    >
      <div className="pipeline-track" aria-hidden="true">
        <div className="pipeline-fill" />
      </div>
      <ol className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
        {PIPELINE_STAGES.map((stage, i) => (
          <li
            key={stage.name}
            className="pipeline-node relative text-center"
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div aria-hidden="true" className="pipeline-dot mx-auto mb-6" />
            <p className="mono-label mb-2">{stage.name}</p>
            <h3 className="text-xl font-semibold tracking-tight">
              {stage.title}
            </h3>
            <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {stage.body}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
