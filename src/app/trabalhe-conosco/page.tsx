"use client";

import { useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { RevealSection } from "@/components/RevealSection";
import { MailIcon } from "@/components/icons";

const areas = [
  "Direito do Trabalho",
  "Direito Civil",
  "Direito Imobiliário",
  "Direito Previdenciário",
  "Direito Bancário",
  "Direito do Consumidor",
  "Direito Sucessório",
  "Direito Empresarial",
  "Administrativo / Compliance",
  "Outra área",
];

const diferenciais = [
  "Ambiente colaborativo e orientado a resultados",
  "Casos complexos e de alto impacto",
  "Equipe multidisciplinar com vasta experiência",
  "Localização privilegiada no centro do Rio de Janeiro",
  "Oportunidades de crescimento e desenvolvimento profissional",
];

type Status = "idle" | "loading" | "success" | "error";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  border: "1px solid #ddd",
  backgroundColor: "#ffffff",
  fontSize: "14px",
  color: "#333",
  outline: "none",
  fontFamily: "'Lato', sans-serif",
  borderRadius: "0",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.5px",
  color: "#555",
  display: "block",
  marginBottom: "6px",
};

export default function TrabalheConoscoPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/trabalhe-conosco", {
        method: "POST",
        body: formData,
      });

      const data = await res.json() as { success?: boolean; error?: string };

      if (!res.ok || !data.success) {
        setErrorMsg(data.error ?? "Erro ao enviar candidatura. Tente novamente.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
      setFileName("");
    } catch {
      setErrorMsg("Erro de conexão. Verifique sua internet e tente novamente.");
      setStatus("error");
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "");
  }

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Carreiras"
          title="Trabalhe conosco"
          subtitle="Faça parte de um escritório comprometido com excelência jurídica e resultados reais para nossos clientes."
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Trabalhe Conosco" }]}
        />

        <section style={{ backgroundColor: "#ffffff", padding: "80px 80px" }} className="trabalhe-section">
          <div
            style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "80px" }}
            className="trabalhe-grid"
          >
            {/* Left: info */}
            <RevealSection from="left">
            <div>
              <p className="gradient-text" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "20px" }}>
                Por que a Lopes Mendes?
              </p>
              <h2 style={{ fontSize: "32px", fontWeight: 300, color: "#003567", lineHeight: 1.25, marginBottom: "24px" }}>
                Crescimento com propósito
              </h2>
              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.8, marginBottom: "36px" }}>
                Buscamos profissionais e estudantes de direito com perfil analítico, comprometimento ético e vontade de crescer em um ambiente exigente e estimulante.
              </p>

              <div style={{ marginBottom: "40px" }}>
                <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#01A8DD", marginBottom: "16px" }}>
                  O que oferecemos
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  {diferenciais.map((d) => (
                    <li key={d} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "14px", color: "#444", lineHeight: 1.5 }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#01A8DD", flexShrink: 0, marginTop: "6px" }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ padding: "24px", backgroundColor: "#f7f8fa", borderLeft: "3px solid #01A8DD" }}>
                <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#01A8DD", marginBottom: "12px" }}>
                  Candidatura espontânea
                </p>
                <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.7, margin: 0 }}>
                  Mesmo que não haja vagas abertas no momento, enviamos seu currículo ao RH e entramos em contato quando surgir uma oportunidade compatível com seu perfil.
                </p>
              </div>

              <div style={{ marginTop: "32px", display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "40px", height: "40px", backgroundColor: "rgba(1,168,221,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MailIcon style={{ width: "16px", height: "16px", color: "#01A8DD" }} />
                </div>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#01A8DD", marginBottom: "2px" }}>Dúvidas?</div>
                  <a href="mailto:contato@lopesmendes.adv.br" style={{ fontSize: "13px", color: "#444", textDecoration: "none" }}>
                    contato@lopesmendes.adv.br
                  </a>
                </div>
              </div>
            </div>
            </RevealSection>

            {/* Right: form */}
            <RevealSection from="right" delay={150}>
            <div>
              <div style={{ backgroundColor: "#f7f8fa", padding: "48px" }}>
                {status === "success" ? (
                  <div style={{ textAlign: "center", padding: "48px 0" }}>
                    <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "rgba(1,168,221,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#01A8DD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 style={{ fontSize: "22px", fontWeight: 400, color: "#003567", marginBottom: "12px" }}>Currículo enviado!</h3>
                    <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.7, marginBottom: "28px" }}>
                      Recebemos sua candidatura com sucesso. Nossa equipe irá avaliar seu perfil e entrará em contato em breve.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      style={{ backgroundColor: "#003567", color: "#fff", padding: "12px 28px", border: "none", fontSize: "14px", fontWeight: 700, fontFamily: "'Lato', sans-serif", cursor: "pointer" }}
                    >
                      Enviar outra candidatura
                    </button>
                  </div>
                ) : (
                  <>
                    <p className="gradient-text" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "20px" }}>
                      Envie seu currículo
                    </p>
                    <h3 style={{ fontSize: "24px", fontWeight: 300, color: "#003567", marginBottom: "32px" }}>
                      Preencha o formulário abaixo
                    </h3>

                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                      {/* Nome + Email */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="trabalhe-form-row">
                        <div>
                          <label style={labelStyle}>Nome completo <span style={{ color: "#e53935" }}>*</span></label>
                          <input
                            name="nome"
                            type="text"
                            placeholder="Seu nome"
                            required
                            style={inputStyle}
                            onFocus={(e) => { e.currentTarget.style.borderColor = "#01A8DD"; }}
                            onBlur={(e) => { e.currentTarget.style.borderColor = "#ddd"; }}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>E-mail <span style={{ color: "#e53935" }}>*</span></label>
                          <input
                            name="email"
                            type="email"
                            placeholder="seu@email.com"
                            required
                            style={inputStyle}
                            onFocus={(e) => { e.currentTarget.style.borderColor = "#01A8DD"; }}
                            onBlur={(e) => { e.currentTarget.style.borderColor = "#ddd"; }}
                          />
                        </div>
                      </div>

                      {/* Telefone + Área */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="trabalhe-form-row">
                        <div>
                          <label style={labelStyle}>Telefone / WhatsApp <span style={{ color: "#e53935" }}>*</span></label>
                          <input
                            name="telefone"
                            type="tel"
                            placeholder="(21) 00000-0000"
                            required
                            style={inputStyle}
                            onFocus={(e) => { e.currentTarget.style.borderColor = "#01A8DD"; }}
                            onBlur={(e) => { e.currentTarget.style.borderColor = "#ddd"; }}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>Área de interesse</label>
                          <select
                            name="area"
                            style={{ ...inputStyle, appearance: "none" }}
                            onFocus={(e) => { e.currentTarget.style.borderColor = "#01A8DD"; }}
                            onBlur={(e) => { e.currentTarget.style.borderColor = "#ddd"; }}
                          >
                            <option value="">Selecione uma área</option>
                            {areas.map((a) => <option key={a} value={a}>{a}</option>)}
                          </select>
                        </div>
                      </div>

                      {/* Apresentação */}
                      <div>
                        <label style={labelStyle}>Carta de apresentação <span style={{ color: "#aaa", fontWeight: 400 }}>(opcional)</span></label>
                        <textarea
                          name="apresentacao"
                          placeholder="Fale um pouco sobre você, sua trajetória e motivação..."
                          rows={4}
                          style={{ ...inputStyle, resize: "vertical" }}
                          onFocus={(e) => { e.currentTarget.style.borderColor = "#01A8DD"; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = "#ddd"; }}
                        />
                      </div>

                      {/* Currículo */}
                      <div>
                        <label style={labelStyle}>Currículo <span style={{ color: "#e53935" }}>*</span></label>
                        <div
                          onClick={() => fileInputRef.current?.click()}
                          style={{
                            width: "100%",
                            padding: "14px",
                            border: fileName ? "1px solid #01A8DD" : "2px dashed #ddd",
                            backgroundColor: "#ffffff",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            boxSizing: "border-box",
                            transition: "border-color 0.2s",
                          }}
                          onMouseEnter={(e) => { if (!fileName) e.currentTarget.style.borderColor = "#01A8DD"; }}
                          onMouseLeave={(e) => { if (!fileName) e.currentTarget.style.borderColor = "#ddd"; }}
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={fileName ? "#01A8DD" : "#aaa"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="12" y1="18" x2="12" y2="12" />
                            <line x1="9" y1="15" x2="15" y2="15" />
                          </svg>
                          <div>
                            <div style={{ fontSize: "13px", color: fileName ? "#333" : "#aaa", fontFamily: "'Lato', sans-serif" }}>
                              {fileName || "Clique para selecionar o arquivo"}
                            </div>
                            <div style={{ fontSize: "11px", color: "#bbb", marginTop: "2px", fontFamily: "'Lato', sans-serif" }}>
                              PDF, DOC ou DOCX — máx. 5 MB
                            </div>
                          </div>
                        </div>
                        <input
                          ref={fileInputRef}
                          name="curriculo"
                          type="file"
                          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          required
                          style={{ display: "none" }}
                          onChange={handleFileChange}
                        />
                      </div>

                      {/* Error message */}
                      {status === "error" && (
                        <div style={{ padding: "12px 16px", backgroundColor: "#fff5f5", border: "1px solid #fecaca", fontSize: "13px", color: "#dc2626" }}>
                          {errorMsg}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        style={{
                          backgroundColor: status === "loading" ? "#004C90" : "#003567",
                          color: "#ffffff",
                          padding: "14px 28px",
                          border: "none",
                          fontSize: "14px",
                          fontWeight: 700,
                          fontFamily: "'Lato', sans-serif",
                          letterSpacing: "0.5px",
                          cursor: status === "loading" ? "not-allowed" : "pointer",
                          alignSelf: "flex-start",
                          transition: "background-color 0.2s",
                          opacity: status === "loading" ? 0.8 : 1,
                        }}
                        onMouseEnter={(e) => { if (status !== "loading") e.currentTarget.style.backgroundColor = "#004C90"; }}
                        onMouseLeave={(e) => { if (status !== "loading") e.currentTarget.style.backgroundColor = "#003567"; }}
                      >
                        {status === "loading" ? "Enviando..." : "Enviar candidatura"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
            </RevealSection>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .trabalhe-section { padding: 48px 24px !important; }
              .trabalhe-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
              .trabalhe-form-row { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>
      </main>
      <Footer />
    </>
  );
}
