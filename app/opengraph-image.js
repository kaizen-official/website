import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "Prime Meridian Systems — Enabling Intelligent Growth for Bharat's Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const RINGS = [
  { d: 620, c: "#a9e4ff" },
  { d: 500, c: "#aef3d3" },
  { d: 380, c: "#e9fbc1" },
  { d: 260, c: "#d9deff" },
];

export default async function OpengraphImage() {
  const logoData = await readFile(
    join(process.cwd(), "public/logo-horizontal.png")
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

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
            padding: "32px 48px",
            borderRadius: 24,
          }}
        >
          <img
            src={logoSrc}
            width={560}
            height={129}
            alt=""
            style={{ objectFit: "contain" }}
          />
          <div style={{ fontSize: 27, color: "#6b6b6b", marginTop: 20 }}>
            AI-native systems &amp; operational intelligence
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
          ENABLING INTELLIGENT GROWTH
        </div>
      </div>
    ),
    { ...size }
  );
}
