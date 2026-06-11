export function ManifestoSection() {
  return (
    <section
      style={{
        backgroundColor: "#003567",
        padding: "96px 80px",
        position: "relative",
        overflow: "hidden",
      }}
      className="manifesto-section"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/grafismo/spiral-curves.svg" alt="" aria-hidden="true"
        style={{ position: "absolute", top: "50%", right: "-10%", transform: "translateY(-50%)", height: "120%", width: "auto", opacity: 0.05, pointerEvents: "none" }} />

      <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" as const }}>
        <p className="gradient-text" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "32px" }}>
          Nosso manifesto
        </p>
        <blockquote
          style={{
            fontSize: "clamp(22px, 3.5vw, 36px)",
            fontWeight: 300,
            color: "#ffffff",
            lineHeight: 1.5,
            margin: "0 0 40px",
            fontFamily: "'Lato', sans-serif",
            fontStyle: "italic",
          }}
        >
          "Acreditamos que o Direito deve ser uma ferramenta de avanço, não de paralisia. Cada caso é uma oportunidade de transformar incerteza em direção."
        </blockquote>
        <div style={{ width: "60px", height: "3px", background: "linear-gradient(90deg, #01A8DD 0%, #004C90 100%)", margin: "0 auto" }} />
        <p style={{ marginTop: "24px", fontSize: "14px", color: "rgba(255,255,255,0.5)", letterSpacing: "1px" }}>
          LOPES MENDES ADVOGADOS
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .manifesto-section { padding: 64px 24px !important; }
        }
      `}</style>
    </section>
  );
}
