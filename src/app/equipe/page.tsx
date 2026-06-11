"use client";

import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { LinkedinIcon } from "@/components/icons";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Member {
  name: string;
  role: string;
  photo: string;
  oab: string;
  linkedin: string;
  areas: string[];
  bio: string;
  formation: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const members: Member[] = [
  {
    name: "Isaac Lopes",
    role: "Sócio Fundador",
    photo: "/images/team/Isaac_Lopes.png",
    oab: "OAB/RJ 45.892",
    linkedin: "https://www.linkedin.com/in/isaac-lopes-adv",
    areas: ["Direito do Trabalho", "Direito Empresarial"],
    bio: "Advogado fundador do escritório, com mais de 20 anos de experiência em contencioso trabalhista e consultoria empresarial estratégica. Atua em casos de alta complexidade envolvendo grandes grupos empresariais, negociações coletivas e reestruturações organizacionais.",
    formation: "Graduado pela UERJ. Especialista em Direito do Trabalho — FGV Rio.",
  },
  {
    name: "Marco Aurélio Mendes",
    role: "Sócio Fundador",
    photo: "/images/team/Marco_Aurelio_Mendes.png",
    oab: "OAB/RJ 48.201",
    linkedin: "https://www.linkedin.com/in/marco-aurelio-mendes-adv",
    areas: ["Direito Civil", "Direito Imobiliário"],
    bio: "Especialista em transações imobiliárias e litígios civis de alta complexidade. Possui vasta experiência em due diligence, contratos de alto valor e operações societárias no mercado imobiliário do Rio de Janeiro e São Paulo.",
    formation: "Graduado pela PUC-Rio. Especialista em Direito Civil e Processual Civil — UERJ.",
  },
  {
    name: "Alex Ribeiro",
    role: "Liderança Cível",
    photo: "/images/team/Alex_Ribeiro.png",
    oab: "OAB/RJ 112.450",
    linkedin: "https://www.linkedin.com/in/alex-ribeiro-civelrj",
    areas: ["Direito Civil", "Responsabilidade Civil"],
    bio: "Responsável pela coordenação da banca cível, com expertise em responsabilidade civil, contratos e litígios empresariais. Lidera uma equipe dedicada à solução estratégica de demandas de média e alta complexidade.",
    formation: "Graduado pela UFRJ. Pós-graduado em Direito Processual Civil — UERJ.",
  },
  {
    name: "Daniela de Holanda",
    role: "Advogada",
    photo: "/images/team/Daniela_Holanda.png",
    oab: "OAB/RJ 198.774",
    linkedin: "https://www.linkedin.com/in/daniela-holanda-adv",
    areas: ["Direito Civil", "Direito do Consumidor"],
    bio: "Atua nas áreas cível e consumerista, com foco em demandas que envolvem relações de consumo, indenizações e contratos. Tem histórico consistente de êxitos em ações de reparação de danos e revisão contratual.",
    formation: "Graduada pela PUC-Rio. Especialista em Direito do Consumidor — FGV.",
  },
  {
    name: "João Nascimento",
    role: "Advogado",
    photo: "/images/team/Joao_Nascimento.png",
    oab: "OAB/RJ 203.118",
    linkedin: "https://www.linkedin.com/in/joao-nascimento-advrj",
    areas: ["Direito Civil", "Direito Imobiliário"],
    bio: "Com sólida atuação em contratos civis e questões imobiliárias, representa clientes em ações possessórias, usucapião e regularização fundiária. Tem perfil consultivo e contencioso equilibrado.",
    formation: "Graduado pela UERJ. Especialista em Direito Imobiliário — IBMEC.",
  },
  {
    name: "Antônio Egito",
    role: "Advogado",
    photo: "/images/team/Antonio_Egito.png",
    oab: "OAB/RJ 215.663",
    linkedin: "https://www.linkedin.com/in/antonio-egito-adv",
    areas: ["Direito Civil", "Contratos"],
    bio: "Especializado em elaboração e revisão de contratos civis e empresariais. Assessora clientes pessoas físicas e jurídicas na prevenção de litígios e na estruturação de acordos com segurança jurídica.",
    formation: "Graduado pela Estácio de Sá. Pós-graduado em Direito Contratual — UERJ.",
  },
  {
    name: "Lyvia Duarte",
    role: "Advogada",
    photo: "/images/team/Lyvia_Duarte.png",
    oab: "OAB/RJ 221.890",
    linkedin: "https://www.linkedin.com/in/lyvia-duarte-adv",
    areas: ["Direito Civil", "Família e Sucessões"],
    bio: "Atua com sensibilidade e técnica nas áreas de família e sucessões, conduzindo processos de divórcio, guarda, inventário e planejamento patrimonial com foco no melhor interesse do cliente.",
    formation: "Graduada pela UFF. Especialista em Direito de Família e Sucessões — EMERJ.",
  },
  {
    name: "Vitória Rebello",
    role: "Advogada",
    photo: "/images/team/Vitoria_Rebello.png",
    oab: "OAB/RJ 234.502",
    linkedin: "https://www.linkedin.com/in/vitoria-rebello-adv",
    areas: ["Direito Civil", "Responsabilidade Civil"],
    bio: "Especializada em ações indenizatórias e responsabilidade civil médica, possui experiência em casos que envolvem erro médico, planos de saúde e dano moral. Comprometida com a defesa dos direitos dos clientes em todas as instâncias.",
    formation: "Graduada pela UFRJ. Pós-graduada em Responsabilidade Civil — FGV.",
  },
  {
    name: "Giovana Vasconcelos",
    role: "Estagiária",
    photo: "/images/team/Giovana_Vasconcelos.png",
    oab: "",
    linkedin: "https://www.linkedin.com/in/giovana-vasconcelos-dir",
    areas: ["Direito Civil"],
    bio: "Estagiária da área cível, em formação pela UERJ. Auxilia nas pesquisas jurídicas, elaboração de peças processuais e organização de dossiês. Demonstra dedicação e rápido aprendizado nas rotinas do escritório.",
    formation: "Graduanda em Direito — UERJ (previsão de conclusão: 2026).",
  },
  {
    name: "Raphael Pitta",
    role: "Advogado",
    photo: "/images/team/Raphael_Pitta.png",
    oab: "OAB/RJ 187.341",
    linkedin: "https://www.linkedin.com/in/raphael-pitta-adv",
    areas: ["Direito do Trabalho", "Contencioso Trabalhista"],
    bio: "Com ampla experiência em contencioso trabalhista, representa empresas de médio e grande porte em reclamações trabalhistas individuais e coletivas. Atua também em consultoria preventiva, auxiliando empresas na adequação às normas trabalhistas.",
    formation: "Graduado pela UFF. Especialista em Direito e Processo do Trabalho — PUC-Rio.",
  },
  {
    name: "Gustavo Feitoza",
    role: "Advogado",
    photo: "/images/team/Gustavo_Feitoza.png",
    oab: "OAB/RJ 194.887",
    linkedin: "https://www.linkedin.com/in/gustavo-feitoza-adv",
    areas: ["Direito do Trabalho", "Negociações Coletivas"],
    bio: "Especializado em negociações coletivas e relações sindicais, assessora empresas na elaboração e revisão de convenções e acordos coletivos. Atua também no contencioso trabalhista com foco em defesas em audiências e recursos.",
    formation: "Graduado pela UERJ. Especialista em Direito do Trabalho — FGV Rio.",
  },
  {
    name: "Alex Sander Muniz",
    role: "Advogado",
    photo: "/images/team/Alex_Sander_Muniz.png",
    oab: "OAB/RJ 201.556",
    linkedin: "https://www.linkedin.com/in/alex-sander-muniz-adv",
    areas: ["Direito do Trabalho", "Compliance Trabalhista"],
    bio: "Atua na interface entre compliance e direito trabalhista, auxiliando empresas a estruturar políticas internas, programas de conformidade e treinamentos. Conduz defesas em ações de assédio moral e discriminação.",
    formation: "Graduado pela Estácio de Sá. MBA em Gestão de Recursos Humanos e Compliance — IBMEC.",
  },
  {
    name: "Taiane Xavier",
    role: "Advogada",
    photo: "/images/team/Taiane_Xavier.png",
    oab: "OAB/RJ 218.903",
    linkedin: "https://www.linkedin.com/in/taiane-xavier-adv",
    areas: ["Direito do Trabalho", "Seguridade Social"],
    bio: "Especializada na interface entre direito do trabalho e seguridade social, com atuação em benefícios previdenciários, acidentes de trabalho e demandas de reintegração. Referência na equipe para casos de saúde e segurança ocupacional.",
    formation: "Graduada pela PUC-Rio. Especialista em Direito Previdenciário — UERJ.",
  },
  {
    name: "Maria Clara",
    role: "Estagiária",
    photo: "/images/team/Maria_Clara.png",
    oab: "",
    linkedin: "https://www.linkedin.com/in/maria-clara-dir",
    areas: ["Direito do Trabalho"],
    bio: "Estagiária da área trabalhista, em formação pela UFF. Apoia a equipe em pesquisa jurisprudencial, elaboração de peças e acompanhamento processual. Demonstra comprometimento e proatividade no dia a dia do escritório.",
    formation: "Graduanda em Direito — UFF (previsão de conclusão: 2027).",
  },
  {
    name: "Patricia Madeira",
    role: "Comercial",
    photo: "/images/team/Patricia_Madeira.png",
    oab: "",
    linkedin: "https://www.linkedin.com/in/patricia-madeira-comercial",
    areas: ["Relacionamento Comercial"],
    bio: "Responsável pelo relacionamento com clientes e prospecção de novos negócios. Com background em comunicação e gestão comercial, Patricia é o elo entre o escritório e seus clientes, garantindo excelência no atendimento e agilidade nas respostas.",
    formation: "Graduada em Comunicação Social — ESPM. Pós-graduada em Gestão Comercial — FGV.",
  },
  {
    name: "Luciano Arsenio",
    role: "Comercial",
    photo: "/images/team/Luciano_Arsenio.png",
    oab: "",
    linkedin: "https://www.linkedin.com/in/luciano-arsenio-biz",
    areas: ["Relacionamento Comercial"],
    bio: "Atua no desenvolvimento de parcerias estratégicas e na expansão da carteira de clientes do escritório. Com perfil consultivo, Luciano identifica oportunidades de negócio e assegura que cada cliente receba a solução jurídica mais adequada.",
    formation: "Graduado em Administração de Empresas — IBMEC. Especialista em Vendas B2B — FGV.",
  },
  {
    name: "Ana Albuquerque",
    role: "Administrativo",
    photo: "/images/team/Ana_Albuquerque.png",
    oab: "",
    linkedin: "https://www.linkedin.com/in/ana-albuquerque-adm",
    areas: ["Gestão Administrativa"],
    bio: "Coordena as operações administrativas do escritório, garantindo o funcionamento eficiente das rotinas internas. Responsável pela gestão de fornecedores, contratos de serviços e apoio à direção no planejamento operacional.",
    formation: "Graduada em Administração — UFF. Especialista em Gestão de Escritórios Jurídicos — FGV.",
  },
  {
    name: "Marcia Lameira",
    role: "Auxiliar Administrativo",
    photo: "/images/team/Marcia_Lameira.png",
    oab: "",
    linkedin: "https://www.linkedin.com/in/marcia-lameira",
    areas: ["Suporte Administrativo"],
    bio: "Presta suporte às atividades administrativas e financeiras do escritório, com atenção especial ao controle de documentos, atendimento e organização de arquivos. Peça fundamental no dia a dia operacional do Lopes Mendes.",
    formation: "Técnica em Secretariado — SENAC. Cursando Administração — Estácio de Sá.",
  },
  {
    name: "Renan Quintaneiro",
    role: "Controller",
    photo: "/images/team/Renan_Quintaneiro.png",
    oab: "",
    linkedin: "https://www.linkedin.com/in/renan-quintaneiro-controller",
    areas: ["Controladoria", "Financeiro"],
    bio: "Responsável pelo controle financeiro e gerencial do escritório. Atua no planejamento orçamentário, análise de indicadores e relatórios de gestão, auxiliando a diretoria na tomada de decisões estratégicas com base em dados.",
    formation: "Graduado em Ciências Contábeis — UERJ. Especialista em Controladoria e Finanças — FGV.",
  },
  {
    name: "Emily Carolina",
    role: "Auxiliar Jurídico",
    photo: "/images/team/Emily_Carolina.png",
    oab: "",
    linkedin: "https://www.linkedin.com/in/emily-carolina-jur",
    areas: ["Suporte Jurídico"],
    bio: "Presta suporte direto às equipes jurídicas no acompanhamento de processos, organização de prazos e comunicação com clientes. Sua atuação é fundamental para garantir a eficiência operacional das bancas cível e trabalhista.",
    formation: "Cursando Direito — PUC-Rio (previsão de conclusão: 2026).",
  },
  {
    name: "Willian Pereira",
    role: "Analista de TI",
    photo: "/images/team/Willian_Pereira.png",
    oab: "",
    linkedin: "https://www.linkedin.com/in/willian-pereira-ti",
    areas: ["Tecnologia da Informação"],
    bio: "Responsável pela infraestrutura tecnológica do escritório, atuando na gestão de sistemas jurídicos, segurança da informação e suporte aos usuários. Garante que as ferramentas digitais estejam sempre disponíveis e seguras para a equipe.",
    formation: "Graduado em Análise e Desenvolvimento de Sistemas — UNESA. Especialista em Segurança da Informação — FIAP.",
  },
  {
    name: "Luciana Martins",
    role: "Governança de Serviços Gerais",
    photo: "/images/team/Luciana_Martins.png",
    oab: "",
    linkedin: "https://www.linkedin.com/in/luciana-martins-facilities",
    areas: ["Serviços Gerais", "Facilities"],
    bio: "Coordena os serviços de infraestrutura e facilities do escritório, assegurando um ambiente de trabalho organizado, funcional e acolhedor. Sua dedicação é essencial para que toda a equipe opere com conforto e eficiência.",
    formation: "Técnica em Administração — SENAC. Cursando Gestão de Facilities — Estácio de Sá.",
  },
];

const CARD_WIDTH = 260;
const CARD_GAP = 24;
const STEP = CARD_WIDTH + CARD_GAP;
const N = members.length;

// ─── Bio Modal ────────────────────────────────────────────────────────────────

function BioModal({ member, onClose }: { member: Member; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 1000, backgroundColor: "rgba(0,0,0,0.75)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}
      onClick={onClose}
    >
      <div
        style={{ backgroundColor: "#fff", maxWidth: "720px", width: "100%", maxHeight: "90vh", overflow: "auto", display: "grid", gridTemplateColumns: "240px 1fr", position: "relative" }}
        onClick={(e) => e.stopPropagation()}
        className="bio-modal-inner"
      >
        {/* Close */}
        <button onClick={onClose}
          style={{ position: "absolute", top: "12px", right: "12px", width: "32px", height: "32px", border: "none", background: "rgba(0,0,0,0.18)", color: "#fff", borderRadius: "50%", cursor: "pointer", fontSize: "20px", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2, lineHeight: 1 }}
          aria-label="Fechar">×</button>

        {/* Photo */}
        <div style={{ position: "relative", minHeight: "360px", backgroundColor: "#e0e4ec", flexShrink: 0 }}>
          <Image src={member.photo} alt={member.name} fill style={{ objectFit: "cover", objectPosition: "top center" }} sizes="240px" />
        </div>

        {/* Info */}
        <div style={{ padding: "36px 32px", display: "flex", flexDirection: "column", gap: "18px" }}>
          <div>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#01A8DD" }}>
              {member.role}
            </span>
            <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#003567", margin: "6px 0 0", lineHeight: 1.2 }}>
              {member.name}
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "6px", flexWrap: "wrap" }}>
              {member.oab && (
                <p style={{ fontSize: "12px", color: "#aaa", margin: 0 }}>{member.oab}</p>
              )}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn de ${member.name}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "12px", color: "#0077B5", textDecoration: "none", fontWeight: 600, transition: "opacity 0.2s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.7"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
                >
                  <LinkedinIcon style={{ width: "14px", height: "14px" }} />
                  LinkedIn
                </a>
              )}
            </div>
          </div>

          <div style={{ width: "40px", height: "2px", backgroundColor: "#01A8DD" }} />

          <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.8, margin: 0 }}>{member.bio}</p>

          {member.areas.length > 0 && (
            <div>
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#003567", marginBottom: "10px" }}>
                Áreas de atuação
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {member.areas.map((a) => (
                  <span key={a} style={{ fontSize: "11px", fontWeight: 700, padding: "4px 12px", backgroundColor: "rgba(1,168,221,0.1)", color: "#004C90", borderRadius: "2px", letterSpacing: "0.3px" }}>
                    {a}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#003567", marginBottom: "8px" }}>
              Formação
            </p>
            <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.7, margin: 0 }}>{member.formation}</p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .bio-modal-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EquipePage() {
  const tripled = useMemo(() => [...members, ...members, ...members], []);

  const [index, setIndex] = useState(N);
  const [animated, setAnimated] = useState(true);
  const [activeMember, setActiveMember] = useState<Member | null>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartIndex = useRef(N);

  const offset = -index * STEP;

  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)));
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  function handleTransitionEnd() {
    if (index >= 2 * N) { setAnimated(false); setIndex((i) => i - N); }
    else if (index < N) { setAnimated(false); setIndex((i) => i + N); }
  }

  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => { setAnimated(true); setIndex((i) => i + 1); }, 3000);
  }, []);

  const stopAuto = useCallback(() => { if (autoRef.current) clearInterval(autoRef.current); }, []);

  useEffect(() => { startAuto(); return stopAuto; }, [startAuto, stopAuto]);
  useEffect(() => { if (activeMember) stopAuto(); else startAuto(); }, [activeMember, startAuto, stopAuto]);

  function prev() { stopAuto(); setAnimated(true); setIndex((i) => i - 1); startAuto(); }
  function next() { stopAuto(); setAnimated(true); setIndex((i) => i + 1); startAuto(); }

  function onPointerDown(e: React.PointerEvent) {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartIndex.current = index;
    stopAuto();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }
  function onPointerMove(e: React.PointerEvent) {
    if (!isDragging.current) return;
    setAnimated(false);
    setIndex(dragStartIndex.current + Math.round(-(e.clientX - dragStartX.current) / STEP));
  }
  function onPointerUp(e: React.PointerEvent) {
    if (!isDragging.current) return;
    isDragging.current = false;
    setAnimated(true);
    setIndex(dragStartIndex.current + Math.round(-(e.clientX - dragStartX.current) / STEP));
    startAuto();
  }

  return (
    <>
      <style>{`
        .carousel-section { background-color: #f7f8fa; padding: 60px 0 80px; overflow: hidden; }
        .carousel-header { padding: 0 80px; display: flex; align-items: center; justify-content: space-between; margin-bottom: 40px; }
        .carousel-title { font-size: 18px; font-weight: 700; color: #003567; font-family: Lato, sans-serif; border-left: 3px solid #01A8DD; padding-left: 14px; margin: 0; }
        .carousel-controls { display: flex; gap: 10px; }
        .carousel-btn { width: 42px; height: 42px; border-radius: 50%; border: 2px solid #003567; background: white; color: #003567; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 18px; transition: background 0.2s, color 0.2s; flex-shrink: 0; }
        .carousel-btn:hover { background: #003567; color: white; }
        .carousel-viewport { overflow: hidden; padding: 0 80px; cursor: grab; user-select: none; }
        .carousel-viewport:active { cursor: grabbing; }
        .carousel-track { display: flex; gap: ${CARD_GAP}px; will-change: transform; }
        .member-card { flex: 0 0 ${CARD_WIDTH}px; width: ${CARD_WIDTH}px; cursor: pointer; }
        .member-card-photo-wrap { position: relative; height: 340px; border-radius: 4px; overflow: hidden; background-color: #e0e4ec; }
        .member-card:hover .member-card-photo-img { transform: scale(1.04); }
        .member-card-photo-img { object-fit: cover; object-position: top center; transition: transform 0.4s ease; }
        .member-card-overlay { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,53,103,0.88) 0%, transparent 100%); padding: 48px 14px 14px; pointer-events: none; }
        .member-card-name { font-size: 15px; font-weight: 700; color: white; font-family: Lato, sans-serif; display: block; }
        .member-card-hint { font-size: 11px; color: rgba(255,255,255,0.6); font-family: Lato, sans-serif; margin-top: 2px; display: block; }
        .member-card-info { padding: 10px 0 0; }
        .member-card-role { font-size: 11px; font-weight: 700; color: #01A8DD; letter-spacing: 1px; text-transform: uppercase; font-family: Lato, sans-serif; }
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

        <div className="carousel-viewport" onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerLeave={onPointerUp}>
          <div
            className="carousel-track"
            style={{ transform: `translateX(${offset}px)`, transition: animated ? "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none" }}
            onTransitionEnd={handleTransitionEnd}
          >
            {tripled.map((m, i) => (
              <div key={i} className="member-card" onClick={() => setActiveMember(m)} role="button" tabIndex={0} aria-label={`Ver bio de ${m.name}`} onKeyDown={(e) => e.key === "Enter" && setActiveMember(m)}>
                <div className="member-card-photo-wrap">
                  <Image src={m.photo} alt={m.name} fill className="member-card-photo-img" sizes="260px" draggable={false} />
                  <div className="member-card-overlay">
                    <span className="member-card-name">{m.name}</span>
                    <span className="member-card-hint">clique para ver bio</span>
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

      {activeMember && <BioModal member={activeMember} onClose={() => setActiveMember(null)} />}

      <Footer />
    </>
  );
}
