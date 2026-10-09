import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0d0d0d",
        color: "#f5f3ee",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 28,
          letterSpacing: 6,
          color: "#f2b705",
          textTransform: "uppercase",
          marginBottom: 24,
        }}
      >
        Experiencia Origen
      </div>
      <div
        style={{
          fontSize: 64,
          fontWeight: 700,
          textTransform: "uppercase",
          textAlign: "center",
          maxWidth: 960,
          lineHeight: 1.15,
        }}
      >
        DEJA DE BLOQUEARTE CUANDO REALMENTE IMPORTA
      </div>
      <div style={{ fontSize: 28, color: "#b3b0a8", marginTop: 32 }}>
        Vive tu día de prueba en Lima · S/ 97
      </div>
    </div>,
    { ...size },
  );
}
