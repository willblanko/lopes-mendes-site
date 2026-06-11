"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export function HeroSection() {
  return (
    <section
      style={{
        backgroundColor: "#003567",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grafismo diagonal-lines — right side */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/grafismo/diagonal-lines.svg"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: "auto",
          opacity: 0.07,
          pointerEvents: "none",
        }}
      />

      {/* Grafismo chevron-arrows — bottom right accent */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/grafismo/chevron-arrows.svg"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-80px",
          right: "5%",
          height: "60%",
          width: "auto",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          paddingLeft: "80px",
          paddingRight: "80px",
          paddingTop: "120px",
          paddingBottom: "80px",
          maxWidth: "1200px",
          position: "relative",
          zIndex: 1,
        }}
        className="hero-content"
      >
        {/* Eyebrow */}
        <p
          className="gradient-text"
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          Advocacia estratégica no Rio de Janeiro
        </p>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(36px, 5.5vw, 72px)",
            fontWeight: 300,
            color: "#ffffff",
            lineHeight: 1.1,
            maxWidth: "700px",
            margin: "0 0 24px",
            fontFamily: "'Lato', sans-serif",
          }}
        >
          Destravamos futuros com{" "}
          <span className="gradient-text" style={{ fontWeight: 700 }}>
            estratégia jurídica
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "18px",
            color: "rgba(255,255,255,0.65)",
            maxWidth: "540px",
            lineHeight: 1.75,
            margin: "0 0 48px",
            fontWeight: 300,
          }}
        >
          Assessoria completa para empresas e famílias que precisam de
          clareza jurídica para tomar decisões com confiança.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" as const }}>
          <Link
            href="/contato"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#01A8DD",
              color: "#ffffff",
              padding: "14px 28px",
              fontSize: "14px",
              fontWeight: 700,
              fontFamily: "'Lato', sans-serif",
              letterSpacing: "0.5px",
              textDecoration: "none",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#0197c7"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#01A8DD"; }}
          >
            Fale com um advogado
            <ArrowRightIcon style={{ width: "16px", height: "16px" }} />
          </Link>
          <Link
            href="/areas-atuacao"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "transparent",
              color: "rgba(255,255,255,0.85)",
              padding: "13px 28px",
              fontSize: "14px",
              fontWeight: 400,
              fontFamily: "'Lato', sans-serif",
              letterSpacing: "0.5px",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.3)",
              transition: "border-color 0.2s ease, color 0.2s ease",
            }}
            onMouseEnter={(e) => { const t = e.currentTarget as HTMLAnchorElement; t.style.borderColor = "#01A8DD"; t.style.color = "#01A8DD"; }}
            onMouseLeave={(e) => { const t = e.currentTarget as HTMLAnchorElement; t.style.borderColor = "rgba(255,255,255,0.3)"; t.style.color = "rgba(255,255,255,0.85)"; }}
          >
            Nossas áreas
          </Link>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            marginTop: "80px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          <div style={{ width: "1px", height: "40px", background: "rgba(255,255,255,0.2)" }} />
          <span style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" }}>
            Scroll
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-content {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
