"use client";
import * as React from "react";
import { useAnimationFrame } from "motion/react";

import { cn } from "@/lib/utils";

/** two sine waves per bar for organic movement */
function barHeight(index, total, time, minH, maxH) {
  const norm = index / (total - 1);
  const arch = Math.sin(norm * Math.PI);

  const phase1 = (index / total) * Math.PI * 2;
  const phase2 = (index / total) * Math.PI * 5.3;

  const wave =
    0.5 +
    0.25 * Math.sin(time * 1.1 + phase1) +
    0.25 * Math.sin(time * 0.7 + phase2);

  const blended = arch * 0.65 + wave * 0.35;

  return minH + blended * (maxH - minH);
}

function buildHeights(barCount, time, minH, maxH) {
  const heights = [];
  for (let i = 0; i < barCount; i += 1) {
    heights.push(barHeight(i, barCount, time, minH, maxH));
  }
  return heights;
}

function heightPercent(fraction) {
  const value = Math.round(fraction * 10000) / 100;
  return `${value.toFixed(2)}%`;
}

const DEFAULT_VIGNETTE =
  "radial-gradient(ellipse 90% 80% at 50% 100%, transparent 40%, #000000cc 100%)";

export function AuroraBars({
  barCount = 24,
  colors = ["#ffd6eb", "#ff9acb", "#ff5aa6", "#ff2d78", "#00000000"],
  maxHeightRatio = 0.99,
  minHeightRatio = 0.18,
  speed = 2.1,
  gap = 3,
  blur = 0,
  barOpacity = 0.85,
  background = "#000000",
  vignette = DEFAULT_VIGNETTE,
  className
}) {
  const animateRef = React.useRef(false);
  const timeRef = React.useRef(0);
  const [heights, setHeights] = React.useState(() =>
    buildHeights(barCount, 0, minHeightRatio, maxHeightRatio));

  React.useEffect(() => {
    animateRef.current = true;
  }, []);

  useAnimationFrame((_, delta) => {
    if (!animateRef.current) return;
    timeRef.current += (delta / 1000) * speed;
    setHeights(
      buildHeights(barCount, timeRef.current, minHeightRatio, maxHeightRatio)
    );
  });

  const gradientStop = colors
    .map((c, i) => `${c} ${Math.round((i / (colors.length - 1)) * 100)}%`)
    .join(", ");
  const gradient = `linear-gradient(to top, ${gradientStop})`;

  return (
    <div
      className={cn("relative h-full w-full overflow-hidden", className)}
      style={{ backgroundColor: background }}
    >
      <div className="absolute inset-0 flex items-end">
        {heights.map((heightFraction, i) => (
          <div
            key={i}
            className="flex-1"
            style={{
              height: "100%",
              display: "flex",
              alignItems: "flex-end",
              padding: `0 ${gap / 2}px`,
            }}
          >
            <div
              style={{
                width: "100%",
                height: heightPercent(heightFraction),
                backgroundImage: gradient,
                borderTopLeftRadius: "9999px",
                borderTopRightRadius: "9999px",
                filter: `blur(${blur}px)`,
                opacity: barOpacity,
              }}
            />
          </div>
        ))}
      </div>
      {vignette ? (
        <div
          className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: vignette }}
        />
      ) : null}
    </div>
  );
}
