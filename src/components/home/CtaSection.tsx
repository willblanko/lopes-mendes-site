"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, PhoneIcon, MailIcon } from "@/components/icons";

export function CtaSection() {
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
    <section ref={sectionRef} style={{ backgroundColor: "#f7f8fa", padding: "96px 80px" }} className="cta-section">
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "80px", alignItems: "center" }} className="cta-grid">
        {/* Left — slides from left */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-32px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <p className="gradient-text" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "20px" }}>
            Entre em contato
          </p>
          <h2 style={{ fontSize: "40px", fontWeight: 300, color: "#003567", lineHeight: 1.2, marginBottom: "24px", fontFamily: "'Lato', sans-serif" }}>
            Vamos resolver o seu caso juntos
          </h2>
          <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.8, marginBottom: "40px" }}>
            Conte com uma equipe experiente e comprometida. Entre em contato para uma consulta inicial e descubra como podemos ajudá-lo.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" as const }}>
            <Link
              href="/contato"
              className="btn-dark-hover"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#003567", color: "#ffffff", padding: "14px 28px", fontSize: "14px", fontWeight: 700, textDecoration: "none", transition: "background-color 0.2s" }}
            >
              Enviar mensagem
              <ArrowRightIcon style={{ width: "16px", height: "16px" }} />
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=552130402875"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-blue-hover"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#01A8DD", color: "#ffffff", padding: "14px 28px", fontSize: "14px", fontWeight: 700, textDecoration: "none", transition: "background-color 0.2s" }}
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Right: contact cards — slide from right with stagger */}
        <div
          style={{
            display: "flex",
            flexDirection: "column" as const,
            gap: "24px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(32px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
          }}
        >
          {[
            { Icon: PhoneIcon, label: "Telefone", value: "21 3040-2875", href: "tel:+552130402875" },
            { Icon: MailIcon, label: "E-mail", value: "contato@lopesmendes.adv.br", href: "mailto:contato@lopesmendes.adv.br" },
          ].map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="contact-card-hover"
              style={{
                display: "flex", alignItems: "center", gap: "20px",
                padding: "24px 28px", backgroundColor: "#ffffff",
                textDecoration: "none",
                borderLeft: "4px solid #01A8DD",
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
              }}
            >
              <div style={{ width: "44px", height: "44px", backgroundColor: "rgba(1,168,221,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon style={{ width: "18px", height: "18px", color: "#01A8DD" }} />
              </div>
              <div>
                <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#01A8DD", marginBottom: "4px" }}>{label}</div>
                <div style={{ fontSize: "15px", fontWeight: 400, color: "#003567" }}>{value}</div>
              </div>
            </a>
          ))}
          <div
            className="contact-card-hover"
            style={{ padding: "24px 28px", backgroundColor: "#ffffff", borderLeft: "4px solid #004C90", transition: "box-shadow 0.2s ease, transform 0.2s ease" }}
          >
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#004C90", marginBottom: "8px" }}>Endereço</div>
            <div style={{ fontSize: "15px", color: "#003567", lineHeight: 1.6 }}>
              Praça Floriano, 19 — 22º Andar<br />
              Centro, Rio de Janeiro — RJ<br />
              CEP 20031-924
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .btn-dark-hover:hover { background-color: #004C90 !important; }
        .btn-blue-hover:hover { background-color: #0197c7 !important; }
        .contact-card-hover:hover {
          box-shadow: 0 4px 20px rgba(0,53,103,0.1) !important;
          transform: translateY(-2px) !important;
        }
        @media (max-width: 768px) {
          .cta-section { padding: 64px 24px !important; }
          .cta-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
