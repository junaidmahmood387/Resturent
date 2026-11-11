import { ImageResponse } from "next/og";

export const alt = "Solenne, hearth dining in the West Village";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0c0b09",
          color: "#f4efe6",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "flex-end",
          padding: 72,
          width: "100%",
        }}
      >
        <div style={{ color: "#c9844a", fontSize: 22, letterSpacing: 6 }}>WEST VILLAGE</div>
        <div style={{ fontSize: 92, marginTop: 16 }}>Solenne</div>
        <div style={{ fontSize: 32, marginTop: 12 }}>Dinner, held to the pace of the fire.</div>
      </div>
    ),
    { ...size },
  );
}
