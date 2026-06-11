"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HamburgerIcon, CloseIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Quem somos", href: "/sobre" },
  { label: "Áreas de atuação", href: "/areas-atuacao" },
  { label: "Nossa Equipe", href: "/equipe" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

function LopesmendesLogo({ white = true }: { white?: boolean }) {
  const color = white ? "#ffffff" : "#121212";
  return (
    <div style={{ lineHeight: 1 }}>
      <div
        style={{
          fontFamily: "'Godber', 'Lato', sans-serif",
          fontWeight: 400,
          fontSize: "26px",
          color,
          letterSpacing: "-0.3px",
        }}
      >
        lopesmendes
        <sup style={{ fontSize: "12px", verticalAlign: "super", lineHeight: 0 }}>®</sup>
      </div>
      <div
        style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 400,
          fontSize: "8px",
          letterSpacing: "4px",
          color: white ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.5)",
          textTransform: "uppercase" as const,
          marginTop: "2px",
        }}
      >
        ADVOGADOS
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] flex items-center justify-between transition-all duration-300",
        )}
        style={{
          backgroundColor: "#003567",
          paddingLeft: "80px",
          paddingRight: "80px",
          paddingTop: scrolled ? "10px" : "18px",
          paddingBottom: scrolled ? "10px" : "18px",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.25)" : "none",
        }}
      >
        <Link href="/" aria-label="Lopes Mendes Advogados — página inicial">
          <LopesmendesLogo white />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link-hover"
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "13px",
                fontWeight: 400,
                fontFamily: "'Lato', sans-serif",
                letterSpacing: "0.3px",
                textDecoration: "none",
                whiteSpace: "nowrap" as const,
              }}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="https://api.whatsapp.com/send?phone=552130402875"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#01A8DD",
              color: "#ffffff",
              fontSize: "12px",
              fontWeight: 700,
              fontFamily: "'Lato', sans-serif",
              letterSpacing: "0.5px",
              textDecoration: "none",
              padding: "8px 20px",
              whiteSpace: "nowrap" as const,
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#0197c7"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#01A8DD"; }}
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex md:hidden items-center justify-center bg-transparent border-0 p-1 cursor-pointer"
          style={{ color: "#ffffff" }}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? (
            <CloseIcon style={{ width: "24px", height: "24px" }} />
          ) : (
            <HamburgerIcon style={{ width: "24px", height: "24px" }} />
          )}
        </button>
      </header>

      {/* Mobile overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className={cn(
          "fixed inset-0 z-[99] flex flex-col md:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        style={{ backgroundColor: "#003567" }}
      >
        <div style={{ height: scrolled ? "55px" : "77px", transition: "height 0.3s ease" }} />
        <nav className="flex flex-col items-center justify-center flex-1 gap-7" aria-label="Navegação mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: 400,
                fontFamily: "'Lato', sans-serif",
                letterSpacing: "0.5px",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://api.whatsapp.com/send?phone=552130402875"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#01A8DD",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: 700,
              fontFamily: "'Lato', sans-serif",
              letterSpacing: "0.5px",
              padding: "12px 32px",
              textDecoration: "none",
              marginTop: "8px",
            }}
          >
            WhatsApp
          </a>
        </nav>
      </div>

      <style>{`
        @media (max-width: 768px) {
          header { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </>
  );
}
