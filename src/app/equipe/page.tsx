"use client";

import { useRef, useState, useEffect, useCallback, useMemo } from "react";
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
const N = members.length;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EquipePage() {
  // Triple the array so we can loop in both directions
  const tripled = useMemo(() => [...members, ...members, ...members], []);

  // Start in the middle copy
  const [index, setIndex] = useState(N);
  const [animated, setAnimated] = useState(true);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartIndex = useRef(N);

  const offset = -index * STEP;

  // After a no-animation jump, re-enable animation in next frame
  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnimated(true))
      );
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  // Normalise index back to the middle copy after animation completes
  function handleTransitionEnd() {
    if (index >= 2 * N) {
      setAnimated(false);
      setIndex((i) => i - N);
    } else if (index < N) {
      setAnimated(false);
      setIndex((i) => i + N);
    }
  }

  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setAnimated(true);
      setIndex((i) => i + 1);
    }, 3000);
  }, []);

  const stopAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
  }, []);

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, [startAuto, stopAuto]);

  function prev() {
    stopAuto();
    setAnimated(true);
    setIndex((i) => i - 1);
    startAuto();
  }

  function next() {
    stopAuto();
    setAnimated(true);
    setIndex((i) => i + 1);
    startAuto();
  }

  // ── Drag support ──
  function onPointerDown(e: React.PointerEvent) {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartIndex.current = index;
    stopAuto();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!isDragging.current) return;
    const delta = e.clientX - dragStartX.current;
    const moved = Math.round(-delta / STEP);
    setAnimated(false);
    setIndex(dragStartIndex.current + moved);
  }

  function onPointerUp(e: React.PointerEvent) {
    if (!isDragging.current) return;
    isDragging.current = false;
    const delta = e.clientX - dragStartX.current;
    const moved = Math.round(-delta / STEP);
    setAnimated(true);
    setIndex(dragStartIndex.current + moved);
    startAuto();
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
            className="carousel-track"
            style={{
              transform: `translateX(${offset}px)`,
              transition: animated ? "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {tripled.map((m, i) => (
              <div key={i} className="member-card">
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
