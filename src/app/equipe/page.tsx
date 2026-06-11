"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

// ─── Data ─────────────────────────────────────────────────────────────────────

const members = [
  { name: "Isaac Lopes", role: "Sócio Fundador", photo: "/images/team/Isaac_Lopes.png" },
  { name: "Marco Aurélio Mendes", role: "Sócio Fundador", photo: "/images/team/Marco_Aurelio_Mendes.png" },
  { name: "Alex Ribeiro", role: "Liderança Cível", photo: "/images/team/Alex_Ribeiro.png" },
  { name: "Daniela de Holanda", role: "Advogada", photo: "/images/team/Daniela_Holanda.png" },
  { name: "João Nascimento", role: "Advogado", photo: "/images/team/Joao_Nascimento.png" },
  { name: "Antônio Egito", role: "Advogado", photo: "/images/team/Antonio_Egito.png" },
  { name: "Lyvia Duarte", role: "Advogada", photo: "/images/team/Lyvia_Duarte.png" },
  { name: "Vitória Rebello", role: "Advogada", photo: "/images/team/Vitoria_Rebello.png" },
  { name: "Giovana Vasconcelos", role: "Estagiária", photo: "/images/team/Giovana_Vasconcelos.png" },
  { name: "Raphael Pitta", role: "Advogado", photo: "/images/team/Raphael_Pitta.png" },
  { name: "Gustavo Feitoza", role: "Advogado", photo: "/images/team/Gustavo_Feitoza.png" },
  { name: "Alex Sander Muniz", role: "Advogado", photo: "/images/team/Alex_Sander_Muniz.png" },
  { name: "Taiane Xavier", role: "Advogada", photo: "/images/team/Taiane_Xavier.png" },
  { name: "Maria Clara", role: "Estagiária", photo: "/images/team/Maria_Clara.png" },
  { name: "Patricia Madeira", role: "Comercial", photo: "/images/team/Patricia_Madeira.png" },
  { name: "Luciano Arsenio", role: "Comercial", photo: "/images/team/Luciano_Arsenio.png" },
  { name: "Ana Albuquerque", role: "Administrativo", photo: "/images/team/Ana_Albuquerque.png" },
  { name: "Marcia Lameira", role: "Auxiliar Administrativo", photo: "/images/team/Marcia_Lameira.png" },
  { name: "Renan Quintaneiro", role: "Controller", photo: "/images/team/Renan_Quintaneiro.png" },
  { name: "Emily Carolina", role: "Auxiliar Jurídico", photo: "/images/team/Emily_Carolina.png" },
  { name: "Willian Pereira", role: "Analista de TI", photo: "/images/team/Willian_Pereira.png" },
  { name: "Luciana Martins", role: "Governança de Serviços Gerais", photo: "/images/team/Luciana_Martins.png" },
];

const CARD_WIDTH = 260;
const CARD_GAP = 24;
const STEP = CARD_WIDTH + CARD_GAP;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EquipePage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef(0);
  const dragOffset = useRef(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const maxOffset = -(members.length * STEP - CARD_GAP);

  const clamp = useCallback((val: number) => Math.min(0, Math.max(maxOffset, val)), [maxOffset]);

  // auto-scroll
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setOffset((prev) => {
        const next = prev - STEP;
        return next < maxOffset ? 0 : next;
      });
    }, 3000);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [maxOffset]);

  function pauseAuto() {
    if (autoRef.current) clearInterval(autoRef.current);
  }
  function resumeAuto() {
    autoRef.current = setInterval(() => {
      setOffset((prev) => {
        const next = prev - STEP;
        return next < maxOffset ? 0 : next;
      });
    }, 3000);
  }

  function prev() {
    pauseAuto();
    setOffset((v) => clamp(v + STEP));
    resumeAuto();
  }
  function next() {
    pauseAuto();
    setOffset((v) => {
      const n = v - STEP;
      return n < maxOffset ? 0 : n;
    });
    resumeAuto();
  }

  // drag / touch
  function onPointerDown(e: React.PointerEvent) {
    setIsDragging(true);
    dragStart.current = e.clientX;
    dragOffset.current = offset;
    pauseAuto();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }
  function onPointerMove(e: React.PointerEvent) {
    if (!isDragging) return;
    const delta = e.clientX - dragStart.current;
    setOffset(clamp(dragOffset.current + delta));
  }
  function onPointerUp(e: React.PointerEvent) {
    if (!isDragging) return;
    setIsDragging(false);
    const delta = e.clientX - dragStart.current;
    // snap to nearest card
    const raw = dragOffset.current + delta;
    const snapped = Math.round(raw / STEP) * STEP;
    setOffset(clamp(snapped));
    resumeAuto();
  }

  return (
    <>
      <style>{`
        .carousel-section {
          background-color: #f7f8fa;
          padding: 60px 0 80px;
          overflow: hidden;
        }
        .carousel-header {
          padding: 0 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 40px;
        }
        .carousel-title {
          font-size: 18px;
          font-weight: 700;
          color: #003567;
          font-family: Lato, sans-serif;
          border-left: 3px solid #01A8DD;
          padding-left: 14px;
          margin: 0;
        }
        .carousel-controls {
          display: flex;
          gap: 10px;
        }
        .carousel-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 2px solid #003567;
          background: white;
          color: #003567;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: background 0.2s, color 0.2s;
          flex-shrink: 0;
        }
        .carousel-btn:hover {
          background: #003567;
          color: white;
        }
        .carousel-viewport {
          overflow: hidden;
          padding: 0 80px;
          cursor: grab;
          user-select: none;
        }
        .carousel-viewport:active {
          cursor: grabbing;
        }
        .carousel-track {
          display: flex;
          gap: ${CARD_GAP}px;
          will-change: transform;
        }
        .member-card {
          flex: 0 0 ${CARD_WIDTH}px;
          width: ${CARD_WIDTH}px;
        }
        .member-card-photo-wrap {
          position: relative;
          height: 340px;
          border-radius: 4px;
          overflow: hidden;
          background-color: #e0e4ec;
        }
        .member-card-photo {
          object-fit: cover;
          object-position: top center;
        }
        .member-card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,53,103,0.88) 0%, transparent 100%);
          padding: 48px 14px 14px;
          pointer-events: none;
        }
        .member-card-name {
          font-size: 15px;
          font-weight: 700;
          color: white;
          font-family: Lato, sans-serif;
          display: block;
        }
        .member-card-info {
          padding: 10px 0 0;
        }
        .member-card-role {
          font-size: 11px;
          font-weight: 700;
          color: #01A8DD;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-family: Lato, sans-serif;
        }

        @media (max-width: 900px) {
          .carousel-header { padding: 0 24px; }
          .carousel-viewport { padding: 0 24px; }
        }
      `}</style>

      <Navbar />

      <PageHero
        eyebrow="Nossa equipe"
        title="Conheça os profissionais do Lopes Mendes"
        subtitle="Uma equipe dedicada, especializada e comprometida com os melhores resultados para nossos clientes."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Nossa Equipe" }]}
      />

      <div className="carousel-section">
        <div className="carousel-header">
          <h2 className="carousel-title">Nossa Equipe</h2>
          <div className="carousel-controls">
            <button className="carousel-btn" onClick={prev} aria-label="Anterior">&#8592;</button>
            <button className="carousel-btn" onClick={next} aria-label="Próximo">&#8594;</button>
          </div>
        </div>

        <div
          className="carousel-viewport"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          <div
            ref={trackRef}
            className="carousel-track"
            style={{
              transform: `translateX(${offset}px)`,
              transition: isDragging ? "none" : "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            {members.map((m) => (
              <div key={m.name} className="member-card">
                <div className="member-card-photo-wrap">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    className="member-card-photo"
                    sizes="260px"
                    draggable={false}
                  />
                  <div className="member-card-overlay">
                    <span className="member-card-name">{m.name}</span>
                  </div>
                </div>
                <div className="member-card-info">
                  <span className="member-card-role">{m.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
