"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";

const team = [
  { name: "Raphael Pitta", role: "Advogado Sênior", area: "Trabalhista", img: "/images/team/Raphael_Pitta.png" },
  { name: "Alex Sander Muniz", role: "Advogado Sênior", area: "Trabalhista", img: "/images/team/Alex_Sander_Muniz.png" },
  { name: "Alex Ribeiro", role: "Advogado Sênior", area: "Cível", img: "/images/team/Alex_Ribeiro.png" },
  { name: "Daniela de Holanda", role: "Advogada Sênior", area: "Cível", img: "/images/team/Daniela_Holanda.png" },
];

export function EquipeSection() {
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
    <section ref={sectionRef} style={{ backgroundColor: "#ffffff", padding: "96px 80px" }} className="equipe-section">
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
              Nossa equipe
            </p>
            <h2 style={{ fontSize: "40px", fontWeight: 300, color: "#003567", lineHeight: 1.2, margin: 0, fontFamily: "'Lato', sans-serif" }}>
              Profissionais dedicados ao seu caso
            </h2>
          </div>
          <Link
            href="/equipe"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#01A8DD", fontSize: "13px", fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" as const }}
            className="area-saiba-mais"
          >
            Ver toda a equipe
            <ArrowRightIcon style={{ width: "15px", height: "15px" }} />
          </Link>
        </div>

        {/* Grid — staggered cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }} className="equipe-grid">
          {team.map((member, i) => (
            <div
              key={i}
              className="equipe-card"
              style={{
                cursor: "pointer",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease ${i * 100}ms, transform 0.7s ease ${i * 100}ms`,
              }}
            >
              <div className="equipe-photo-wrap" style={{ position: "relative", aspectRatio: "3/4", backgroundColor: "#e8e8e8", overflow: "hidden", marginBottom: "16px" }}>
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="equipe-photo-img"
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                {/* Gradient overlay — fades out on hover revealing photo */}
                <div
                  className="equipe-photo-overlay"
                  style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50%", background: "linear-gradient(to top, rgba(0,53,103,0.8) 0%, transparent 100%)" }}
                />
                {/* Hover: name plate slides up */}
                <div className="equipe-name-plate" style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  padding: "16px", zIndex: 2,
                }}>
                  <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#01A8DD" }}>
                    {member.role}
                  </div>
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#003567", margin: "0 0 4px", fontFamily: "'Lato', sans-serif" }}>
                  {member.name}
                </h3>
                <p style={{ fontSize: "13px", color: "#888", margin: 0 }}>{member.area}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Photo zoom on hover */
        .equipe-photo-img {
          transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }
        .equipe-card:hover .equipe-photo-img {
          transform: scale(1.06) !important;
        }

        /* Overlay darkens slightly more on hover */
        .equipe-photo-overlay {
          transition: opacity 0.4s ease;
        }
        .equipe-card:hover .equipe-photo-overlay {
          opacity: 0.7;
        }

        /* Card lift on hover */
        .equipe-card {
          transition-property: opacity, transform, box-shadow !important;
        }
        .equipe-card:hover {
          box-shadow: 0 16px 40px rgba(0, 53, 103, 0.15) !important;
        }

        @media (max-width: 1024px) {
          .equipe-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .equipe-section { padding: 64px 24px !important; }
          .equipe-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
