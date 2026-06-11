"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export function SobreSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ backgroundColor: "#ffffff", padding: "96px 80px" }} className="sobre-section">
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="sobre-grid">
        {/* Left: text — slides from left */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-40px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <p
            className="gradient-text"
            style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "20px" }}
          >
            Quem somos
          </p>
          <h2
            style={{ fontSize: "40px", fontWeight: 300, color: "#003567", lineHeight: 1.2, marginBottom: "24px", fontFamily: "'Lato', sans-serif" }}
          >
            Mais de uma década construindo soluções jurídicas sob medida
          </h2>
          <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.8, marginBottom: "16px" }}>
            O Lopes Mendes é um escritório de advocacia fundado com a missão de oferecer assessoria jurídica de alto nível para empresas e pessoas físicas que precisam agir com segurança em cenários complexos.
          </p>
          <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.8, marginBottom: "36px" }}>
            Localizado no coração do Centro do Rio de Janeiro, reunimos profissionais especializados em diversas áreas para garantir atendimento completo, estratégico e personalizado.
          </p>
          <Link
            href="/sobre"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#01A8DD", fontSize: "14px", fontWeight: 700, textDecoration: "none", letterSpacing: "0.3px" }}
            className="area-saiba-mais"
          >
            Conheça nossa história
            <ArrowRightIcon style={{ width: "16px", height: "16px" }} />
          </Link>
        </div>

        {/* Right: accent block — slides from right */}
        <div
          style={{
            position: "relative",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(40px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
          }}
        >
          <div
            style={{
              backgroundColor: "#003567",
              padding: "48px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/grafismo/spiral-curves.svg" alt="" aria-hidden="true"
              style={{ position: "absolute", top: 0, right: 0, height: "100%", width: "auto", opacity: 0.07, pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#01A8DD", marginBottom: "32px" }}>
                Nossos pilares
              </p>
              {[
                { title: "Estratégia", desc: "Planejamento jurídico alinhado com os objetivos do cliente." },
                { title: "Comprometimento", desc: "Dedicação total a cada caso, grande ou pequeno." },
                { title: "Transparência", desc: "Comunicação clara em cada etapa do processo." },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: i < 2 ? "28px" : "0", paddingBottom: i < 2 ? "28px" : "0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", marginBottom: "6px" }}>{item.title}</h3>
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Decorative line */}
          <div style={{ position: "absolute", top: "16px", left: "-16px", width: "4px", height: "60%", background: "linear-gradient(180deg, #01A8DD 0%, #004C90 100%)" }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sobre-section { padding: 64px 24px !important; }
          .sobre-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
