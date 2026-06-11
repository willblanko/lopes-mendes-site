import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Nossa Equipe | Lopes Mendes Advogados",
  description: "Conheça os profissionais do Lopes Mendes Advogados — advogados especializados dedicados a cada área de atuação do escritório.",
};

const partners = [
  {
    name: "Isaac Lopes",
    role: "Sócio Fundador",
    areas: ["Direito do Trabalho", "Direito Empresarial"],
    bio: "Advogado com mais de 15 anos de experiência, especializado em contencioso trabalhista empresarial e consultoria preventiva. Formado pela UERJ com pós-graduação em Direito do Trabalho.",
    img: "/images/team/isaac-lopes.png",
    oab: "OAB/RJ 123.456",
  },
  {
    name: "Marco Aurélio Mendes",
    role: "Sócio Fundador",
    areas: ["Direito Civil", "Direito Imobiliário"],
    bio: "Especialista em transações imobiliárias e litígios civis. Formado pela PUC-Rio com pós-graduação em Direito Civil e Processual Civil. Atua com due diligence e contratos de alto valor.",
    img: "/images/team/marco-mendes.png",
    oab: "OAB/RJ 234.567",
  },
];

const associates = [
  {
    name: "Emily Carolina",
    role: "Advogada Sênior",
    area: "Direito Previdenciário",
    img: "/images/team/emily-carolina.png",
    oab: "OAB/RJ 345.678",
  },
  {
    name: "Giovana",
    role: "Advogada",
    area: "Direito do Consumidor",
    img: "/images/team/giovana.png",
    oab: "OAB/RJ 456.789",
  },
  {
    name: "Maria Clara",
    role: "Advogada",
    area: "Direito Sucessório",
    img: "/images/team/maria-clara.png",
    oab: "OAB/RJ 567.890",
  },
  {
    name: "Willian Pereira",
    role: "Advogado",
    area: "Direito Bancário",
    img: "/images/team/willian-pereira.png",
    oab: "OAB/RJ 678.901",
  },
];

export default function EquipePage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Nossa equipe"
          title="Profissionais dedicados ao seu caso"
          subtitle="Conheça os advogados que compõem o Lopes Mendes — cada um especialista na sua área, todos comprometidos com o seu resultado."
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Nossa Equipe" }]}
        />

        {/* Sócios */}
        <section style={{ backgroundColor: "#ffffff", padding: "96px 80px" }} className="equipe-socios">
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p className="gradient-text" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>
              Liderança
            </p>
            <h2 style={{ fontSize: "36px", fontWeight: 300, color: "#003567", lineHeight: 1.2, marginBottom: "48px" }}>Sócios Fundadores</h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "40px" }} className="socios-grid">
              {partners.map((p) => (
                <div key={p.name} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "32px", alignItems: "start", backgroundColor: "#f7f8fa", padding: "32px" }} className="socio-card">
                  <div style={{ position: "relative", aspectRatio: "3/4", backgroundColor: "#e8e8e8", overflow: "hidden" }}>
                    <Image src={p.img} alt={p.name} fill style={{ objectFit: "cover" }} sizes="160px" />
                  </div>
                  <div>
                    <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#01A8DD", display: "block", marginBottom: "8px" }}>
                      {p.role}
                    </span>
                    <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#003567", margin: "0 0 4px" }}>{p.name}</h3>
                    <span style={{ fontSize: "12px", color: "#999", display: "block", marginBottom: "16px" }}>{p.oab}</span>
                    <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "6px", marginBottom: "16px" }}>
                      {p.areas.map((a) => (
                        <span key={a} style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.5px", padding: "4px 10px", backgroundColor: "rgba(1,168,221,0.1)", color: "#004C90", borderRadius: "2px" }}>
                          {a}
                        </span>
                      ))}
                    </div>
                    <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.75, margin: 0 }}>{p.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .equipe-socios { padding: 64px 24px !important; }
              .socios-grid { grid-template-columns: 1fr !important; }
              .socio-card { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        {/* Associados */}
        <section style={{ backgroundColor: "#f7f8fa", padding: "96px 80px" }} className="equipe-assoc">
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p className="gradient-text" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>
              Equipe
            </p>
            <h2 style={{ fontSize: "36px", fontWeight: 300, color: "#003567", lineHeight: 1.2, marginBottom: "48px" }}>Advogados Associados</h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }} className="assoc-grid">
              {associates.map((a) => (
                <div key={a.name} className="lm-card-hover" style={{ backgroundColor: "#ffffff" }}>
                  <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden", backgroundColor: "#e8e8e8" }}>
                    <Image src={a.img} alt={a.name} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 25vw" />
                  </div>
                  <div style={{ padding: "20px" }}>
                    <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#01A8DD", display: "block", marginBottom: "6px" }}>
                      {a.role}
                    </span>
                    <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#003567", margin: "0 0 4px" }}>{a.name}</h3>
                    <p style={{ fontSize: "13px", color: "#888", margin: "0 0 8px" }}>{a.area}</p>
                    <span style={{ fontSize: "11px", color: "#bbb" }}>{a.oab}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @media (max-width: 1024px) { .assoc-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 768px) {
              .equipe-assoc { padding: 64px 24px !important; }
              .assoc-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>
      </main>
      <Footer />
    </>
  );
}
