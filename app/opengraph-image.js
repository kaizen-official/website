import { ImageResponse } from "next/og";

export const alt = "Prime Meridian Systems - AI Product Research Lab";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const RINGS = [
  { d: 620, c: "#a9e4ff" },
  { d: 500, c: "#aef3d3" },
  { d: 380, c: "#e9fbc1" },
  { d: 260, c: "#d9deff" },
];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f4f4f2",
          color: "#0a0a0a",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {RINGS.map((r) => (
          <div
            key={r.d}
            style={{
              position: "absolute",
              width: r.d,
              height: r.d,
              borderRadius: "50%",
              border: `22px solid ${r.c}`,
              opacity: 0.7,
            }}
          />
        ))}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 10,
            background: "#f4f4f2",
            padding: "24px 48px",
            borderRadius: 24,
          }}
        >
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -3 }}>
            prime meridian
          </div>
          <div style={{ fontSize: 27, color: "#6b6b6b", marginTop: 12 }}>
            Operational Software for Bharat&apos;s MSMEs
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 44,
            fontSize: 21,
            fontFamily: "monospace",
            color: "#9a9a9a",
            letterSpacing: 2,
          }}
        >
          ENABLING STRUCTURED GROWTH
        </div>
      </div>
    ),
    { ...size }
  );
}
