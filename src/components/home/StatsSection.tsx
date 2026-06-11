"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Anos de experiência" },
  { value: 500, suffix: "+", label: "Clientes atendidos" },
  { value: 8, suffix: "", label: "Áreas de atuação" },
  { value: 98, suffix: "%", label: "Satisfação dos clientes" },
];

function CountUp({ target, suffix, started }: { target: number; suffix: string; started: boolean }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 1600;
    const steps = 60;
    const increment = target / steps;
    let step = 0;
    const id = setInterval(() => {
      step++;
      if (step >= steps) {
        setCurrent(target);
        clearInterval(id);
      } else {
        setCurrent(Math.floor(increment * step));
      }
    }, duration / steps);
    return () => clearInterval(id);
  }, [started, target]);

  return <>{current}{suffix}</>;
}

export function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: "linear-gradient(90deg, #01A8DD 0%, #004C90 100%)",
        padding: "64px 80px",
        position: "relative",
        overflow: "hidden",
      }}
      className="stats-section"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/grafismo/diagonal-lines.svg" alt="" aria-hidden="true"
        style={{ position: "absolute", top: 0, right: 0, height: "100%", width: "auto", opacity: 0.06, pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px", position: "relative", zIndex: 1 }} className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} style={{ textAlign: "center" as const }}>
            <div style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 700, color: "#ffffff", lineHeight: 1, marginBottom: "8px", fontFamily: "'Lato', sans-serif" }}>
              <CountUp target={stat.value} suffix={stat.suffix} started={started} />
            </div>
            <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", letterSpacing: "0.5px", fontWeight: 400 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-section { padding: 48px 24px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
