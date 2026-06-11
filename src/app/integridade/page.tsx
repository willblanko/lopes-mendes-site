"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { RevealSection } from "@/components/RevealSection";
import { MailIcon } from "@/components/icons";

// ─── Tabs ─────────────────────────────────────────────────────────────────────

type Tab = "formulario" | "etica" | "privacidade";

const tabs: { id: Tab; label: string }[] = [
  { id: "formulario", label: "Canal de Integridade" },
  { id: "etica", label: "Código de Ética" },
  { id: "privacidade", label: "Política de Privacidade" },
];

// ─── Shared styles ────────────────────────────────────────────────────────────

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "12px 14px", border: "1px solid #ddd",
  backgroundColor: "#ffffff", fontSize: "14px", color: "#333",
  outline: "none", fontFamily: "'Lato', sans-serif",
  borderRadius: "0", boxSizing: "border-box", transition: "border-color 0.2s",
};
const labelStyle: React.CSSProperties = {
  fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px",
  color: "#555", display: "block", marginBottom: "6px",
};

function focus(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderColor = "#01A8DD";
}
function blur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderColor = "#ddd";
}

// ─── Formulário ───────────────────────────────────────────────────────────────

function FormularioTab() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "", anonimo: false });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function change(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.mensagem.trim()) return;
    setStatus("sending"); setErrorMsg("");
    try {
      const res = await fetch("/api/integridade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) { setErrorMsg(data.error || "Erro ao enviar."); setStatus("error"); }
      else { setStatus("success"); setForm({ nome: "", email: "", mensagem: "", anonimo: false }); }
    } catch { setErrorMsg("Erro de conexão. Tente novamente."); setStatus("error"); }
  }

  if (status === "success") {
    return (
      <div style={{ padding: "48px", backgroundColor: "#f7f8fa", border: "1px solid #e8e8e8", textAlign: "center", maxWidth: "640px" }}>
        <div style={{ fontSize: "40px", marginBottom: "16px" }}>✓</div>
        <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#003567", marginBottom: "8px" }}>Mensagem enviada com sigilo</h3>
        <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.7, margin: "0 0 24px" }}>
          Sua mensagem foi encaminhada ao Gerente de Integridade. Todas as comunicações são tratadas com confidencialidade.
        </p>
        <button onClick={() => setStatus("idle")}
          style={{ background: "none", border: "1px solid #003567", color: "#003567", padding: "10px 24px", cursor: "pointer", fontSize: "13px", fontFamily: "'Lato', sans-serif" }}>
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "640px" }}>
      <div style={{ backgroundColor: "#f7f8fa", padding: "8px 16px", borderLeft: "3px solid #01A8DD", marginBottom: "32px" }}>
        <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.7, margin: "10px 0" }}>
          Utilize este canal para reportar situações relacionadas a ética, conformidade, conflito de interesses ou qualquer preocupação sobre a conduta do escritório.
          Você pode enviar sua mensagem de forma anônima — sua identidade não será investigada ou revelada.
        </p>
      </div>

      <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "14px", backgroundColor: "#fff", border: "1px solid #ddd", cursor: "pointer" }}
          onClick={() => setForm((p) => ({ ...p, anonimo: !p.anonimo }))}>
          <input type="checkbox" id="anonimo" name="anonimo" checked={form.anonimo} onChange={change}
            style={{ width: "16px", height: "16px", cursor: "pointer", accentColor: "#003567" }} />
          <label htmlFor="anonimo" style={{ fontSize: "14px", color: "#333", cursor: "pointer", userSelect: "none" }}>
            Enviar mensagem de forma <strong>anônima</strong>
          </label>
        </div>

        {!form.anonimo && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="integ-form-row">
            <div>
              <label style={labelStyle}>Nome (opcional)</label>
              <input name="nome" type="text" placeholder="Seu nome" value={form.nome}
                onChange={change} onFocus={focus} onBlur={blur} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>E-mail para resposta (opcional)</label>
              <input name="email" type="email" placeholder="seu@email.com" value={form.email}
                onChange={change} onFocus={focus} onBlur={blur} style={inputStyle} />
            </div>
          </div>
        )}

        <div>
          <label style={labelStyle}>Mensagem *</label>
          <textarea name="mensagem" rows={7} required placeholder="Descreva a situação com o máximo de detalhes possível..." value={form.mensagem}
            onChange={change} onFocus={focus} onBlur={blur}
            style={{ ...inputStyle, resize: "vertical" as const }} />
        </div>

        {status === "error" && (
          <p style={{ fontSize: "13px", color: "#c0392b", margin: 0, padding: "10px 14px", backgroundColor: "#fdf2f0", border: "1px solid #f5c6c0" }}>
            {errorMsg}
          </p>
        )}

        <button type="submit" disabled={status === "sending"}
          style={{ backgroundColor: status === "sending" ? "#7a9cc0" : "#003567", color: "#ffffff", padding: "14px 32px", border: "none", fontSize: "14px", fontWeight: 700, fontFamily: "'Lato', sans-serif", cursor: status === "sending" ? "not-allowed" : "pointer", alignSelf: "flex-start", transition: "background-color 0.2s" }}
          onMouseEnter={(e) => { if (status !== "sending") (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#004C90"; }}
          onMouseLeave={(e) => { if (status !== "sending") (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#003567"; }}>
          {status === "sending" ? "Enviando..." : "Enviar mensagem"}
        </button>
      </form>
    </div>
  );
}

// ─── Código de Ética ──────────────────────────────────────────────────────────

function EticaTab() {
  return (
    <div style={{ maxWidth: "800px" }} className="prose-content">
      <Section title="Apresentação">
        O Lopes Mendes Advogados é um escritório fundado sobre princípios sólidos de ética, transparência e comprometimento com a justiça. Este Código de Ética e Integridade consolida os valores e as normas de conduta que orientam todos os nossos colaboradores, advogados, parceiros e prestadores de serviços.
        <br /><br />
        Nosso compromisso com a integridade não é apenas uma exigência regulatória — é parte essencial de quem somos e da maneira como prestamos serviços jurídicos de excelência.
      </Section>

      <Section title="1. Nossos Valores Fundamentais">
        <strong>Ética:</strong> Agimos com honestidade, integridade e respeito em todas as nossas relações profissionais e pessoais.<br /><br />
        <strong>Transparência:</strong> Comunicamos com clareza nossas posições, limitações e eventuais conflitos de interesse aos nossos clientes e parceiros.<br /><br />
        <strong>Comprometimento:</strong> Dedicamo-nos integralmente a cada causa que nos é confiada, buscando sempre os melhores resultados dentro dos limites da lei.<br /><br />
        <strong>Confidencialidade:</strong> Protegemos com rigor todas as informações que nos são confiadas por clientes, sem exceção.<br /><br />
        <strong>Respeito:</strong> Valorizamos a dignidade de todas as pessoas, sem discriminação de qualquer natureza.
      </Section>

      <Section title="2. Relacionamento com Clientes">
        • Os advogados e colaboradores do Lopes Mendes devem atender os clientes com cordialidade, eficiência e total transparência sobre o andamento dos processos e honorários.<br /><br />
        • É vedada qualquer forma de promessa de resultado judicial ou administrativo.<br /><br />
        • Todo conflito de interesses deve ser identificado e comunicado ao cliente antes do início da representação.<br /><br />
        • O sigilo profissional é inviolável e persiste após o encerramento do mandato.
      </Section>

      <Section title="3. Relacionamento entre Colaboradores">
        • O escritório promove um ambiente de trabalho inclusivo, respeitoso e livre de qualquer forma de assédio moral ou sexual.<br /><br />
        • Toda forma de discriminação por gênero, raça, religião, orientação sexual, deficiência ou qualquer outra característica pessoal é expressamente proibida.<br /><br />
        • Encorajamos o trabalho colaborativo, o compartilhamento de conhecimento e o respeito às opiniões divergentes.<br /><br />
        • A liderança do escritório deve servir de exemplo em conduta ética e profissional.
      </Section>

      <Section title="4. Conflito de Interesses">
        Entendemos por conflito de interesses qualquer situação em que interesses pessoais, familiares ou financeiros possam interferir — ou aparentar interferir — no exercício imparcial das funções profissionais.<br /><br />
        • Todo colaborador deve comunicar imediatamente ao Gerente de Integridade qualquer situação que possa configurar conflito de interesses.<br /><br />
        • É vedado representar partes com interesses opostos no mesmo processo ou matéria jurídica.<br /><br />
        • Presentes e benefícios de terceiros acima do valor de R$ 100,00 devem ser reportados e, em regra, recusados.
      </Section>

      <Section title="5. Confidencialidade e Proteção de Dados">
        • Todos os colaboradores têm obrigação permanente de manter o sigilo sobre informações confidenciais dos clientes, mesmo após o encerramento do vínculo profissional.<br /><br />
        • O uso, compartilhamento ou divulgação de informações confidenciais para fins pessoais ou em benefício de terceiros é expressamente proibido.<br /><br />
        • O tratamento de dados pessoais observa integralmente a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018) e as normas internas de privacidade.
      </Section>

      <Section title="6. Conduta Profissional e Compliance">
        • É obrigatório o cumprimento integral das normas do Estatuto da OAB, do Código de Ética e Disciplina da OAB e da legislação vigente.<br /><br />
        • Atos de corrupção, suborno, fraude ou lavagem de dinheiro são absolutamente vedados e sujeitos a medidas disciplinares severas, além das sanções legais aplicáveis.<br /><br />
        • O escritório adota políticas de Prevenção à Lavagem de Dinheiro (PLD) e realiza a devida diligência sobre clientes e operações.<br /><br />
        • Qualquer ato ilícito ou antiético do qual o colaborador tome conhecimento deve ser comunicado através do nosso Canal de Integridade.
      </Section>

      <Section title="7. Canal de Denúncias e Não Retaliação">
        O escritório disponibiliza um Canal de Integridade para que colaboradores, clientes e parceiros possam reportar violações a este Código de forma confidencial ou anônima.<br /><br />
        • Todas as comunicações recebidas serão investigadas com seriedade e imparcialidade.<br /><br />
        • É expressamente proibida qualquer forma de retaliação contra quem reporte, de boa-fé, uma preocupação ou violação ética.<br /><br />
        • Para acionar o canal: utilize o formulário nesta página ou escreva diretamente para <strong>compliance@lopesmendes.adv.br</strong>.
      </Section>

      <Section title="8. Sanções e Medidas Disciplinares">
        O descumprimento deste Código poderá acarretar medidas disciplinares proporcionais à gravidade da infração, incluindo advertência, suspensão ou desligamento, além das sanções cíveis, penais e disciplinares previstas em lei.
      </Section>

      <style>{`
        .prose-content p, .prose-content br { line-height: 1.8; }
      `}</style>
    </div>
  );
}

// ─── Política de Privacidade ──────────────────────────────────────────────────

function PrivacidadeTab() {
  return (
    <div style={{ maxWidth: "800px" }}>
      <p style={{ fontSize: "13px", color: "#888", marginBottom: "32px" }}>
        Última atualização: junho de 2026 · Vigência: a partir de junho de 2026
      </p>

      <Section title="1. Quem Somos">
        O Lopes Mendes Advogados (CNPJ 30.116.262/0001-87), com sede na Praça Floriano, 19 — 22º Andar, Centro, Rio de Janeiro/RJ, CEP 20031-924, é o controlador dos dados pessoais tratados no âmbito desta Política de Privacidade.<br /><br />
        Nosso Encarregado de Proteção de Dados (DPO) pode ser contatado pelo e-mail <strong>privacidade@lopesmendes.adv.br</strong>.
      </Section>

      <Section title="2. Dados Pessoais que Coletamos">
        Coletamos dados pessoais nas seguintes situações:<br /><br />
        <strong>a) Clientes e potenciais clientes:</strong> nome, CPF/CNPJ, endereço, e-mail, telefone, dados financeiros e patrimoniais, documentos de identificação e informações processuais necessárias à prestação dos serviços jurídicos contratados.<br /><br />
        <strong>b) Visitantes do site:</strong> dados de navegação (endereço IP, páginas acessadas, tempo de sessão), coletados automaticamente por cookies e tecnologias similares.<br /><br />
        <strong>c) Candidatos (Trabalhe Conosco):</strong> nome, e-mail, telefone, currículo e demais informações fornecidas voluntariamente no processo seletivo.<br /><br />
        <strong>d) Formulários de contato e integridade:</strong> nome (quando fornecido), e-mail e conteúdo da mensagem.
      </Section>

      <Section title="3. Finalidade e Base Legal do Tratamento">
        Tratamos dados pessoais com as seguintes finalidades e bases legais (art. 7º da LGPD):<br /><br />
        • <strong>Execução de contrato</strong> — para prestar os serviços jurídicos contratados pelo cliente;<br />
        • <strong>Cumprimento de obrigação legal ou regulatória</strong> — para atender exigências do Conselho Federal da OAB, da Receita Federal, do COAF e demais órgãos reguladores;<br />
        • <strong>Legítimo interesse</strong> — para responder dúvidas e solicitações enviadas por formulários, gestão interna e melhoria dos nossos serviços;<br />
        • <strong>Consentimento</strong> — para envio de comunicações de marketing, quando o titular assim autorizar expressamente.
      </Section>

      <Section title="4. Compartilhamento de Dados">
        Não vendemos, alugamos ou cedemos dados pessoais a terceiros para fins comerciais. Podemos compartilhar dados nas seguintes situações:<br /><br />
        • <strong>Prestadores de serviços</strong> (processadores de dados) que atuam em nosso nome, como provedores de e-mail, sistemas de gestão e serviços de armazenamento em nuvem, sempre sob contrato com obrigações equivalentes de proteção;<br />
        • <strong>Autoridades públicas e órgãos reguladores</strong>, quando exigido por lei, decisão judicial ou regulação da OAB;<br />
        • <strong>Terceiros em processos judiciais</strong>, na medida estritamente necessária para a defesa dos interesses do cliente.
      </Section>

      <Section title="5. Transferência Internacional de Dados">
        Quando aplicável, a transferência de dados pessoais para o exterior observa os mecanismos previstos na LGPD, incluindo a adoção de cláusulas contratuais padrão ou a verificação de que o país de destino oferece grau de proteção adequado.
      </Section>

      <Section title="6. Prazo de Retenção dos Dados">
        Mantemos os dados pessoais pelo tempo necessário para as finalidades descritas nesta Política, observando os seguintes critérios:<br /><br />
        • <strong>Dados de clientes:</strong> enquanto durar a relação jurídica e pelo prazo prescricional aplicável à matéria objeto do mandato (em regra, até 10 anos após o encerramento);<br />
        • <strong>Dados de candidatos:</strong> até 2 anos após o encerramento do processo seletivo, para fins de eventuais novas oportunidades (salvo revogação do consentimento);<br />
        • <strong>Logs e dados de navegação:</strong> até 6 meses, conforme o Marco Civil da Internet (Lei nº 12.965/2014);<br />
        • <strong>Dados de formulários de contato:</strong> até 2 anos ou até o cumprimento da finalidade, o que ocorrer primeiro.
      </Section>

      <Section title="7. Seus Direitos como Titular">
        Nos termos do art. 18 da LGPD, você tem os seguintes direitos:<br /><br />
        • <strong>Confirmação e acesso:</strong> saber se tratamos seus dados e obter cópia;<br />
        • <strong>Correção:</strong> solicitar a retificação de dados incompletos, inexatos ou desatualizados;<br />
        • <strong>Anonimização, bloqueio ou eliminação:</strong> de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD;<br />
        • <strong>Portabilidade:</strong> receber seus dados em formato estruturado e interoperável;<br />
        • <strong>Revogação do consentimento:</strong> a qualquer momento, para os tratamentos baseados em consentimento;<br />
        • <strong>Oposição:</strong> ao tratamento realizado com fundamento em outras bases legais, nas hipóteses previstas em lei;<br />
        • <strong>Informação sobre compartilhamento:</strong> saber com quais entidades públicas ou privadas seus dados são compartilhados.<br /><br />
        Para exercer seus direitos, entre em contato pelo e-mail <strong>privacidade@lopesmendes.adv.br</strong>. Responderemos em até 15 dias úteis.
      </Section>

      <Section title="8. Cookies e Tecnologias Similares">
        Nosso site utiliza cookies para funcionamento básico (sessão), análise de desempenho e melhoria da experiência do usuário. Você pode configurar seu navegador para recusar cookies, embora isso possa limitar determinadas funcionalidades do site.<br /><br />
        Não utilizamos cookies para fins publicitários ou rastreamento entre sites de terceiros.
      </Section>

      <Section title="9. Segurança da Informação">
        Adotamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição indevida. Entre as medidas implementadas destacam-se: controles de acesso por perfil, criptografia em trânsito (TLS), política de senhas e backups periódicos.<br /><br />
        Em caso de incidente de segurança com potencial impacto aos titulares, notificaremos a Autoridade Nacional de Proteção de Dados (ANPD) e, quando aplicável, os próprios titulares, nos prazos previstos na regulamentação.
      </Section>

      <Section title="10. Dados de Menores de Idade">
        Nossos serviços não são destinados a menores de 18 anos. Não coletamos intencionalmente dados pessoais de crianças ou adolescentes. Caso identifiquemos tal situação, os dados serão eliminados imediatamente, salvo exigência legal em contrário.
      </Section>

      <Section title="11. Contato com o Encarregado (DPO)">
        Para exercer seus direitos, esclarecer dúvidas ou reportar preocupações relacionadas ao tratamento de dados pessoais, entre em contato com nosso Encarregado de Proteção de Dados:<br /><br />
        <strong>E-mail:</strong> privacidade@lopesmendes.adv.br<br />
        <strong>Endereço:</strong> Praça Floriano, 19 — 22º Andar, Centro, Rio de Janeiro — RJ, CEP 20031-924
      </Section>

      <Section title="12. Alterações nesta Política">
        Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou na legislação aplicável. A versão mais recente estará sempre disponível nesta página, com indicação da data da última atualização. Em caso de alterações relevantes, notificaremos os titulares pelos canais de contato disponíveis.
      </Section>

      <Section title="13. Legislação Aplicável e Foro">
        Esta Política é regida pela legislação brasileira, em especial pela Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Para dirimir eventuais controvérsias, fica eleito o foro da Comarca do Rio de Janeiro — RJ.
      </Section>
    </div>
  );
}

// ─── Section helper ───────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "40px" }}>
      <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#003567", borderLeft: "3px solid #01A8DD", paddingLeft: "14px", marginBottom: "16px", fontFamily: "'Lato', sans-serif" }}>
        {title}
      </h3>
      <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.85, margin: 0 }}>{children}</p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function IntegridadePage() {
  const [activeTab, setActiveTab] = useState<Tab>("formulario");

  return (
    <>
      <style>{`
        .integ-tab-bar {
          background: white;
          border-bottom: 1px solid #e9ecf5;
          padding: 0 80px;
          display: flex;
          gap: 0;
          overflow-x: auto;
        }
        .integ-tab {
          padding: 18px 24px;
          font-size: 13px;
          font-weight: 600;
          font-family: Lato, sans-serif;
          border: none;
          background: none;
          cursor: pointer;
          border-bottom: 3px solid transparent;
          white-space: nowrap;
          transition: color 0.2s, border-color 0.2s;
          color: #666;
        }
        .integ-tab:hover { color: #003567; }
        .integ-tab-active { color: #003567; border-bottom-color: #01A8DD; }
        .integ-content { background: white; padding: 60px 80px; }
        .integ-channels {
          background: #f7f8fa;
          padding: 56px 80px;
          border-top: 1px solid #e9ecf5;
        }
        .integ-channel-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 900px;
        }
        .integ-channel-card {
          background: #003567;
          padding: 32px;
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 768px) {
          .integ-tab-bar { padding: 0 24px; }
          .integ-content { padding: 40px 24px; }
          .integ-channels { padding: 40px 24px; }
          .integ-channel-grid { grid-template-columns: 1fr !important; }
          .integ-form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Navbar />

      <PageHero
        eyebrow="Integridade"
        title="Ética, transparência e conformidade"
        subtitle="Canal de comunicação, código de ética e política de privacidade do Lopes Mendes Advogados."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Integridade" }]}
      />

      {/* Tab bar */}
      <div className="integ-tab-bar">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={`integ-tab ${activeTab === t.id ? "integ-tab-active" : ""}`}
            onClick={() => setActiveTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="integ-content">
        <RevealSection key={activeTab}>
          {activeTab === "formulario" && <FormularioTab />}
          {activeTab === "etica" && <EticaTab />}
          {activeTab === "privacidade" && <PrivacidadeTab />}
        </RevealSection>
      </div>

      {/* Canais diretos */}
      <div className="integ-channels">
        <div style={{ maxWidth: "900px" }}>
          <RevealSection>
            <p className="gradient-text" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>
              Canais diretos
            </p>
            <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#003567", marginBottom: "32px" }}>
              Fale diretamente com nossa equipe
            </h2>
          </RevealSection>

          <div className="integ-channel-grid">
            {/* DPO */}
            <RevealSection from="left">
            <div className="integ-channel-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/grafismo/diagonal-lines.svg" alt="" aria-hidden="true"
                style={{ position: "absolute", top: 0, right: 0, height: "100%", width: "auto", opacity: 0.06, pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ width: "40px", height: "3px", background: "linear-gradient(90deg, #01A8DD, #004C90)", marginBottom: "20px" }} />
                <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#01A8DD", marginBottom: "8px" }}>
                  Proteção de Dados
                </p>
                <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>
                  Encarregado de Proteção de Dados
                </h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: "20px" }}>
                  Para exercer seus direitos como titular de dados pessoais, esclarecer dúvidas sobre nossa Política de Privacidade ou reportar incidentes de segurança.
                </p>
                <a href="mailto:privacidade@lopesmendes.adv.br"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#01A8DD", fontSize: "13px", fontWeight: 700, textDecoration: "none" }}>
                  <MailIcon style={{ width: "15px", height: "15px" }} />
                  privacidade@lopesmendes.adv.br
                </a>
              </div>
            </div>
            </RevealSection>

            {/* Gerente de Integridade */}
            <RevealSection from="right" delay={100}>
            <div className="integ-channel-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/grafismo/diagonal-lines.svg" alt="" aria-hidden="true"
                style={{ position: "absolute", top: 0, right: 0, height: "100%", width: "auto", opacity: 0.06, pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ width: "40px", height: "3px", background: "linear-gradient(90deg, #01A8DD, #004C90)", marginBottom: "20px" }} />
                <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#01A8DD", marginBottom: "8px" }}>
                  Compliance
                </p>
                <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>
                  Gerente de Integridade
                </h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: "20px" }}>
                  Para reportar questões éticas, conflitos de interesse, suspeitas de irregularidades ou qualquer preocupação relacionada à conduta e conformidade do escritório.
                </p>
                <a href="mailto:compliance@lopesmendes.adv.br"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#01A8DD", fontSize: "13px", fontWeight: 700, textDecoration: "none" }}>
                  <MailIcon style={{ width: "15px", height: "15px" }} />
                  compliance@lopesmendes.adv.br
                </a>
              </div>
            </div>
            </RevealSection>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
