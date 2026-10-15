import { ImageResponse } from "next/og";

export const alt = "Ulises Cortés, Ingeniero de Software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "linear-gradient(135deg,#09090B 55%,#3B1D8F)", color: "#F4F4F5" }}>
        <div style={{ fontSize: 96, fontWeight: 800 }}>Ulises Cortés</div>
        <div style={{ fontSize: 44, color: "#A78BFA", marginTop: 16 }}>Ingeniero de Software</div>
        <div style={{ fontSize: 30, color: "#A1A1AA", marginTop: 24 }}>Python · Next.js · Ciberseguridad</div>
      </div>
    ),
    size,
  );
}
