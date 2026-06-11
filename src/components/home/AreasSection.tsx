"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

const areas = [
  { title: "Direito do Trabalho", desc: "Assessoria trabalhista preventiva e contenciosa para empresas e empregados.", slug: "direito-do-trabalho" },
  { title: "Direito Civil", desc: "Contratos, responsabilidade civil, litígios civis e assessoria geral.", slug: "direito-civil" },
  { title: "Direito Imobiliário", desc: "Transações, due diligence, incorporações e disputas imobiliárias.", slug: "direito-imobiliario" },
  { title: "Direito Previdenciário", desc: "Benefícios, aposentadoria, revisão de concessões e planejamento previdenciário.", slug: "direito-previdenciario" },
  { title: "Direito Bancário", desc: "Contratos financeiros, renegociações e defesa em cobranças bancárias.", slug: "direito-bancario" },
  { title: "Direito do Consumidor", desc: "Proteção e defesa dos direitos do consumidor em relações de consumo.", slug: "direito-do-consumidor" },
  { title: "Direito Sucessório", desc: "Planejamento sucessório, inventários, testamentos e partilha de bens.", slug: "direito-sucessorio" },
  { title: "Direito Empresarial", desc: "Constituição, contratos societários, M&A e gestão jurídica empresarial.", slug: "direito-empresarial" },
];

export function AreasSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ backgroundColor: "#f7f8fa", padding: "96px 80px" }} className="areas-section">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "56px", flexWrap: "wrap" as const, gap: "24px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div>
            <p className="gradient-text" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>
              Áreas de atuação
            </p>
            <h2 style={{ fontSize: "40px", fontWeight: 300, color: "#003567", lineHeight: 1.2, margin: 0, fontFamily: "'Lato', sans-serif" }}>
              Onde atuamos
            </h2>
          </div>
          <Link
            href="/areas-atuacao"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#01A8DD", fontSize: "13px", fontWeight: 700, textDecoration: "none", letterSpacing: "0.3px", whiteSpace: "nowrap" as const }}
            className="area-saiba-mais"
          >
            Ver todas as áreas
            <ArrowRightIcon style={{ width: "15px", height: "15px" }} />
          </Link>
        </div>

        {/* Grid — staggered cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px" }} className="areas-grid">
          {areas.map((area, i) => (
            <Link
              key={i}
              href="/areas-atuacao"
              style={{ textDecoration: "none" }}
            >
              <div
                className="lm-card-hover area-card-border"
                style={{
                  backgroundColor: "#ffffff",
                  padding: "32px 28px",
                  height: "100%",
                  borderBottom: "3px solid transparent",
                  transition: "border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: "12px",
                  // Stagger entrance
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(32px)",
                  // @ts-expect-error custom property
                  "--transition-delay": `${i * 60}ms`,
                }}
              >
                <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#01A8DD" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#003567", margin: 0, lineHeight: 1.3, fontFamily: "'Lato', sans-serif" }}>
                  {area.title}
                </h3>
                <p style={{ fontSize: "13px", color: "#777", lineHeight: 1.7, margin: 0, flex: 1 }}>
                  {area.desc}
                </p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: 700, color: "#01A8DD", marginTop: "8px" }} className="area-saiba-mais">
                  Saiba mais
                  <ArrowRightIcon style={{ width: "13px", height: "13px" }} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .area-card-border:hover { border-bottom-color: #01A8DD !important; }

        /* Stagger delays via nth-child */
        .areas-grid > a:nth-child(1) > div { transition-delay: 0ms !important; }
        .areas-grid > a:nth-child(2) > div { transition-delay: 60ms !important; }
        .areas-grid > a:nth-child(3) > div { transition-delay: 120ms !important; }
        .areas-grid > a:nth-child(4) > div { transition-delay: 180ms !important; }
        .areas-grid > a:nth-child(5) > div { transition-delay: 240ms !important; }
        .areas-grid > a:nth-child(6) > div { transition-delay: 300ms !important; }
        .areas-grid > a:nth-child(7) > div { transition-delay: 360ms !important; }
        .areas-grid > a:nth-child(8) > div { transition-delay: 420ms !important; }

        /* Override: hover transitions should be instant (no delay) */
        .areas-grid > a > div:hover {
          transition-delay: 0ms !important;
        }

        @media (max-width: 1024px) {
          .areas-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .areas-section { padding: 64px 24px !important; }
          .areas-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
