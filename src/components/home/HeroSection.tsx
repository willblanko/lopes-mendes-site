"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Trigger entrance animation after first paint
    const id = requestAnimationFrame(() => setMounted(true));

    function onScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const parallaxOffset = scrollY * 0.12;

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#003567",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grafismo diagonal-lines — parallax */}
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
          transform: `translateY(${parallaxOffset}px)`,
          willChange: "transform",
        }}
      />

      {/* Grafismo chevron-arrows — slower parallax */}
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
          transform: `translateY(${parallaxOffset * 0.6}px)`,
          willChange: "transform",
        }}
      />

      {/* Animated gradient orb — background accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "20%",
          right: "15%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(1,168,221,0.06) 0%, transparent 70%)",
          transform: `translateY(${parallaxOffset * 0.3}px)`,
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
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
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
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
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
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
          }}
        >
          Assessoria completa para empresas e famílias que precisam de
          clareza jurídica para tomar decisões com confiança.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap" as const,
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease 0.55s, transform 0.6s ease 0.55s",
          }}
        >
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
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.6s ease 0.8s",
          }}
        >
          <div className="scroll-line" style={{ width: "1px", height: "40px", background: "rgba(255,255,255,0.2)" }} />
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
        @keyframes scrollPulse {
          0%, 100% { transform: scaleY(1); opacity: 0.35; }
          50% { transform: scaleY(0.5); opacity: 0.7; }
        }
        .scroll-line {
          animation: scrollPulse 2s ease-in-out infinite;
          transform-origin: top center;
        }
      `}</style>
    </section>
  );
}
