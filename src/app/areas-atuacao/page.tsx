import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { RevealSection } from "@/components/RevealSection";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Áreas de Atuação | Lopes Mendes Advogados",
  description: "Conheça todas as áreas de atuação do Lopes Mendes Advogados: Trabalhista, Civil, Imobiliário, Previdenciário, Bancário, Consumidor, Sucessório e Empresarial.",
};

const areas = [
  {
    num: "01",
    title: "Direito do Trabalho",
    desc: "Assessoria trabalhista preventiva e contenciosa para empresas e empregados. Atuamos em processos na Justiça do Trabalho, auditorias trabalhistas, elaboração de contratos e negociações sindicais.",
    services: ["Reclamações trabalhistas", "Auditorias e compliance trabalhista", "Contratos de trabalho", "Negociações coletivas", "Rescisões e acordos"],
  },
  {
    num: "02",
    title: "Direito Civil",
    desc: "Contratos, responsabilidade civil, litígios civis e assessoria geral. Da redação de contratos à resolução de disputas, protegemos seus interesses em todas as relações civis.",
    services: ["Contratos em geral", "Responsabilidade civil", "Cobranças e execuções", "Ações de indenização", "Revisão de contratos"],
  },
  {
    num: "03",
    title: "Direito Imobiliário",
    desc: "Transações, due diligence, incorporações e disputas imobiliárias. Atendemos incorporadoras, construtoras, investidores e pessoas físicas em todas as etapas do negócio imobiliário.",
    services: ["Compra e venda de imóveis", "Due diligence imobiliária", "Locações e despejo", "Regularização de imóveis", "Incorporações e loteamentos"],
  },
  {
    num: "04",
    title: "Direito Previdenciário",
    desc: "Benefícios, aposentadoria, revisão de concessões e planejamento previdenciário. Orientamos você na conquista e manutenção dos seus direitos previdenciários.",
    services: ["Aposentadoria por tempo/idade/invalidez", "Benefício por incapacidade", "Revisão de benefícios", "Pensão por morte", "Planejamento previdenciário"],
  },
  {
    num: "05",
    title: "Direito Bancário",
    desc: "Contratos financeiros, renegociações e defesa em cobranças bancárias. Combatemos abusos e protegemos seus direitos frente às instituições financeiras.",
    services: ["Revisão de contratos bancários", "Defesa em cobranças", "Renegociação de dívidas", "Inscrição indevida em cadastros", "Ações contra bancos"],
  },
  {
    num: "06",
    title: "Direito do Consumidor",
    desc: "Proteção e defesa dos direitos do consumidor em relações de consumo, com foco em ações contra fornecedores abusivos, defeitos em produtos e serviços.",
    services: ["Produto/serviço com defeito", "Propaganda enganosa", "Cobrança indevida", "Negativação indevida", "Cancelamento de serviços"],
  },
  {
    num: "07",
    title: "Direito Sucessório",
    desc: "Planejamento sucessório, inventários, testamentos e partilha de bens. Protegemos o patrimônio da sua família e garantimos uma transição segura e ordenada.",
    services: ["Inventário judicial e extrajudicial", "Testamentos", "Planejamento sucessório", "Partilha de bens", "Doação com reserva de usufruto"],
  },
  {
    num: "08",
    title: "Direito Empresarial",
    desc: "Constituição, contratos societários, M&A e gestão jurídica empresarial. Somos parceiros do seu negócio em todas as fases, do início até operações complexas.",
    services: ["Abertura e estruturação de empresas", "Contratos empresariais", "M&A e due diligence", "Recuperação judicial", "Compliance e governança"],
  },
];

export default function AreasAtuacaoPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Áreas de atuação"
          title="Onde atuamos"
          subtitle="Oito áreas especializadas para cobrir todas as suas necessidades jurídicas com profundidade técnica e dedicação."
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Áreas de Atuação" }]}
        />

        {/* Areas list */}
        <section style={{ backgroundColor: "#ffffff", padding: "80px 80px" }} className="areas-list">
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            {areas.map((area, i) => (
              <RevealSection key={area.num} threshold={0.08}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr auto",
                    gap: "40px",
                    alignItems: "start",
                    padding: "48px 0",
                    borderBottom: i < areas.length - 1 ? "1px solid #e8e8e8" : "none",
                  }}
                  className="area-row"
                >
                  <div className="gradient-text" style={{ fontSize: "36px", fontWeight: 700, lineHeight: 1 }}>
                    {area.num}
                  </div>
                  <div>
                    <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#003567", margin: "0 0 16px", lineHeight: 1.2 }}>
                      {area.title}
                    </h2>
                    <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.8, margin: "0 0 24px", maxWidth: "600px" }}>
                      {area.desc}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px" }}>
                      {area.services.map((s) => (
                        <span key={s} style={{ fontSize: "12px", fontWeight: 400, padding: "5px 12px", border: "1px solid #e8e8e8", color: "#555", borderRadius: "2px" }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/contato"
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "transparent", color: "#01A8DD", fontSize: "13px", fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" as const, paddingTop: "6px" }}
                    className="area-saiba-mais"
                  >
                    Consultar
                    <ArrowRightIcon style={{ width: "14px", height: "14px" }} />
                  </Link>
                </div>
              </RevealSection>
            ))}
          </div>

          <style>{`
            @media (max-width: 768px) {
              .areas-list { padding: 48px 24px !important; }
              .area-row { grid-template-columns: 1fr !important; gap: 16px !important; }
            }
          `}</style>
        </section>

        {/* CTA */}
        <RevealSection as="section" style={{ backgroundColor: "#003567", padding: "64px 80px", position: "relative", overflow: "hidden" }} className="areas-cta">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/grafismo/diagonal-lines.svg" alt="" aria-hidden="true"
            style={{ position: "absolute", top: 0, right: 0, height: "100%", width: "auto", opacity: 0.06, pointerEvents: "none" }} />
          <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "32px", fontWeight: 300, color: "#ffffff", marginBottom: "20px" }}>
              Pronto para dar o próximo passo?
            </h2>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.65)", marginBottom: "36px" }}>
              Entre em contato com nossa equipe e descubra como podemos ajudá-lo.
            </p>
            <Link
              href="/contato"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#01A8DD", color: "#ffffff", padding: "14px 32px", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}
            >
              Fale com um advogado
              <ArrowRightIcon style={{ width: "16px", height: "16px" }} />
            </Link>
          </div>
          <style>{`
            .areas-cta { padding: 48px 24px !important; }
          `}</style>
        </RevealSection>
      </main>
      <Footer />
    </>
  );
}
