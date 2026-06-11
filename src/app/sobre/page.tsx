import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Quem Somos | Lopes Mendes Advogados",
  description: "Conheça a história e os valores do Lopes Mendes Advogados — mais de uma década de atuação estratégica em Direito no Rio de Janeiro.",
};

const values = [
  { title: "Missão", text: "Oferecer assessoria jurídica de excelência, com estratégia personalizada para cada cliente, garantindo a proteção dos seus direitos e a realização dos seus objetivos." },
  { title: "Visão", text: "Ser reconhecido como referência em advocacia estratégica no Rio de Janeiro, pela qualidade técnica, comprometimento e relacionamento ético com nossos clientes." },
  { title: "Valores", text: "Ética, transparência, comprometimento, inovação jurídica e dedicação genuína a cada caso que nos é confiado." },
];

export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Quem somos"
          title="Mais de uma década construindo soluções jurídicas"
          subtitle="Conheça a história, os valores e as pessoas por trás do Lopes Mendes Advogados."
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Quem Somos" }]}
        />

        {/* Imagem full-width do escritório */}
        <div style={{ position: "relative", width: "100%", height: "520px", overflow: "hidden" }}>
          <Image
            src="/images/escritorio.jpg"
            alt="Escritório Lopes Mendes Advogados"
            fill
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
            priority
            sizes="100vw"
          />
        </div>

        {/* História */}
        <section style={{ backgroundColor: "#ffffff", padding: "96px 80px" }} className="sobre-historia">
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }} className="sobre-hist-grid">
            <div>
              <p className="gradient-text" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "20px" }}>
                Nossa história
              </p>
              <h2 style={{ fontSize: "36px", fontWeight: 300, color: "#003567", lineHeight: 1.25, marginBottom: "28px" }}>
                Fundado sobre princípios sólidos e visão estratégica
              </h2>
              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.85, marginBottom: "20px" }}>
                O Lopes Mendes Advogados foi fundado com a missão de transformar a advocacia em uma ferramenta de crescimento e segurança para empresas e pessoas físicas. Desde o início, apostamos em uma abordagem diferenciada: unir rigor técnico com comunicação clara e relação próxima com o cliente.
              </p>
              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.85, marginBottom: "20px" }}>
                Ao longo dos anos, construímos uma equipe multidisciplinar capaz de atender às mais diversas demandas jurídicas, sempre com foco em soluções que criam valor real para quem confia no nosso trabalho.
              </p>
              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.85 }}>
                Localizado na Praça Floriano, no coração do Centro do Rio de Janeiro, o escritório é hoje referência em advocacia estratégica, atendendo clientes em todo o Brasil.
              </p>
            </div>

            {/* Timeline */}
            <div>
              <p className="gradient-text" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "32px" }}>
                Linha do tempo
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {[
                  { year: "2012", event: "Fundação do escritório por Isaac Lopes e Marco Aurélio Mendes." },
                  { year: "2015", event: "Expansão da equipe e consolidação nas áreas trabalhista e civil." },
                  { year: "2018", event: "Inauguração da sede no 22º andar da Praça Floriano, 19." },
                  { year: "2021", event: "Lançamento do setor de Planejamento Patrimonial e Sucessório." },
                  { year: "2024", event: "Consolidação como referência em advocacia estratégica no RJ." },
                ].map((item, i, arr) => (
                  <div key={i} style={{ display: "flex", gap: "24px", paddingBottom: i < arr.length - 1 ? "28px" : "0" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "linear-gradient(135deg, #01A8DD, #004C90)", flexShrink: 0 }} />
                      {i < arr.length - 1 && <div style={{ width: "2px", flex: 1, background: "linear-gradient(180deg, #01A8DD 0%, rgba(1,168,221,0.1) 100%)", marginTop: "4px" }} />}
                    </div>
                    <div style={{ paddingTop: "0px" }}>
                      <span style={{ fontSize: "12px", fontWeight: 700, color: "#01A8DD", letterSpacing: "1px" }}>{item.year}</span>
                      <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.7, margin: "4px 0 0" }}>{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .sobre-historia { padding: 64px 24px !important; }
              .sobre-hist-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            }
          `}</style>
        </section>

        {/* Mission/Vision/Values */}
        <section style={{ backgroundColor: "#f7f8fa", padding: "96px 80px" }} className="sobre-valores">
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <p className="gradient-text" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>
                Identidade
              </p>
              <h2 style={{ fontSize: "36px", fontWeight: 300, color: "#003567", lineHeight: 1.2, margin: 0 }}>
                O que nos orienta
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }} className="valores-grid">
              {values.map((v, i) => (
                <div key={i} style={{ backgroundColor: "#003567", padding: "40px 36px", position: "relative", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/grafismo/diagonal-lines.svg" alt="" aria-hidden="true"
                    style={{ position: "absolute", top: 0, right: 0, height: "100%", width: "auto", opacity: 0.05, pointerEvents: "none" }} />
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ width: "40px", height: "3px", background: "linear-gradient(90deg, #01A8DD, #004C90)", marginBottom: "24px" }} />
                    <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", marginBottom: "16px" }}>{v.title}</h3>
                    <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: 1.75, margin: 0 }}>{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .sobre-valores { padding: 64px 24px !important; }
              .valores-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        {/* Prêmios e Reconhecimentos */}
        <section style={{ backgroundColor: "#ffffff", padding: "96px 80px" }} className="sobre-premios">
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ marginBottom: "56px" }}>
              <p className="gradient-text" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>
                Reconhecimento
              </p>
              <h2 style={{ fontSize: "36px", fontWeight: 300, color: "#003567", lineHeight: 1.2, margin: 0 }}>
                Prêmios e Reconhecimentos
              </h2>
            </div>

            {/* Placeholder grid — substituir pelos prêmios reais */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="premios-grid">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} style={{
                  border: "1px solid #e9ecf5",
                  borderRadius: "4px",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  backgroundColor: "#f7f8fa",
                }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "4px", backgroundColor: "#e0e7f0" }} />
                  <div style={{ height: "12px", borderRadius: "2px", backgroundColor: "#dde3ed", width: "60%" }} />
                  <div style={{ height: "10px", borderRadius: "2px", backgroundColor: "#edf0f5", width: "85%" }} />
                  <div style={{ height: "10px", borderRadius: "2px", backgroundColor: "#edf0f5", width: "70%" }} />
                </div>
              ))}
            </div>

            <p style={{ marginTop: "40px", fontSize: "13px", color: "#aaa", fontStyle: "italic", textAlign: "center" }}>
              Em breve — os prêmios e reconhecimentos serão adicionados aqui.
            </p>
          </div>

          <style>{`
            @media (max-width: 900px) {
              .sobre-premios { padding: 64px 24px !important; }
              .premios-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (max-width: 540px) {
              .premios-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>
      </main>
      <Footer />
    </>
  );
}
