"use client";

import { useEffect, useRef, useState } from "react";

export function ManifestoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    function onScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        // move the background at 40% of scroll speed (parallax factor)
        setOffsetY(rect.top * -0.4);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "120px 80px",
      }}
      className="manifesto-section"
    >
      {/* Parallax background photo */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "-20%",
          backgroundImage: "url('/images/escritorio.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${offsetY}px)`,
          willChange: "transform",
        }}
      />

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(0,20,60,0.88) 0%, rgba(0,53,103,0.82) 100%)",
        }}
      />

      {/* Grafismo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/grafismo/spiral-curves.svg" alt="" aria-hidden="true"
        style={{ position: "absolute", top: "50%", right: "-10%", transform: `translateY(calc(-50% + ${offsetY * 0.2}px))`, height: "120%", width: "auto", opacity: 0.06, pointerEvents: "none" }} />

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
          .manifesto-section { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
