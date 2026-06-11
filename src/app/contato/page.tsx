"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { RevealSection } from "@/components/RevealSection";
import { PhoneIcon, MailIcon, MapPinIcon, InstagramIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons";

const contactInfo = [
  { Icon: PhoneIcon, label: "Telefone", value: "21 3040-2875", href: "https://api.whatsapp.com/send?phone=552130402875" },
  { Icon: PhoneIcon, label: "Telefone", value: "21 3962-0841", href: "https://api.whatsapp.com/send?phone=552139620841" },
  { Icon: MailIcon, label: "E-mail", value: "contato@lopesmendes.adv.br", href: "mailto:contato@lopesmendes.adv.br" },
  { Icon: MapPinIcon, label: "Endereço", value: "Praça Floriano, 19 — 22º Andar\nCentro, Rio de Janeiro — RJ\nCEP 20031-924", href: "https://maps.app.goo.gl/aw1v9WG2tFKNaYbR6" },
];

const areas = [
  "Direito do Trabalho",
  "Direito Civil",
  "Direito Imobiliário",
  "Direito Previdenciário",
  "Direito Bancário",
  "Direito do Consumidor",
  "Direito Sucessório",
  "Direito Empresarial",
  "Outra área",
];

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
  fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px", color: "#555", display: "block", marginBottom: "6px",
};

export default function ContatoPage() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", area: "", mensagem: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function focusBorder(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    e.currentTarget.style.borderColor = "#01A8DD";
  }
  function blurBorder(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    e.currentTarget.style.borderColor = "#ddd";
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.nome || !form.email || !form.mensagem) return;
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Erro ao enviar. Tente novamente.");
        setStatus("error");
      } else {
        setStatus("success");
        setForm({ nome: "", email: "", telefone: "", area: "", mensagem: "" });
      }
    } catch {
      setErrorMsg("Erro de conexão. Tente novamente.");
      setStatus("error");
    }
  }

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Contato"
          title="Vamos conversar"
          subtitle="Entre em contato com nossa equipe. Respondemos em até 24 horas úteis."
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Contato" }]}
        />

        <section style={{ backgroundColor: "#ffffff", padding: "80px 80px" }} className="contato-section">
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "80px" }} className="contato-grid">

            {/* Left: contact info */}
            <RevealSection from="left">
            <div>
              <p className="gradient-text" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "20px" }}>
                Informações
              </p>
              <h2 style={{ fontSize: "32px", fontWeight: 300, color: "#003567", lineHeight: 1.25, marginBottom: "40px" }}>
                Estamos prontos para ajudar
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginBottom: "48px" }}>
                {contactInfo.map(({ Icon, label, value, href }) => (
                  <a key={href} href={href} target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{ display: "flex", gap: "16px", alignItems: "flex-start", textDecoration: "none", color: "inherit" }}>
                    <div style={{ width: "44px", height: "44px", backgroundColor: "rgba(1,168,221,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon style={{ width: "18px", height: "18px", color: "#01A8DD" }} />
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#01A8DD", marginBottom: "4px" }}>{label}</div>
                      <div style={{ fontSize: "14px", color: "#444", lineHeight: 1.6, whiteSpace: "pre-line" as const }}>{value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div style={{ padding: "24px", backgroundColor: "#f7f8fa", borderLeft: "3px solid #01A8DD" }}>
                <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#01A8DD", marginBottom: "12px" }}>
                  Horário de atendimento
                </p>
                <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.7, margin: 0 }}>
                  Segunda a Sexta: 9h às 18h<br />
                  Sábados e feriados: consulte disponibilidade
                </p>
              </div>

              <div style={{ marginTop: "32px" }}>
                <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#999", marginBottom: "16px" }}>
                  Redes sociais
                </p>
                <div style={{ display: "flex", gap: "12px" }}>
                  {[
                    { href: "https://www.instagram.com/lopesmendesadv/", Icon: InstagramIcon, label: "Instagram" },
                    { href: "https://www.linkedin.com/company/lopesmendesadv/", Icon: LinkedinIcon, label: "LinkedIn" },
                    { href: "https://api.whatsapp.com/send?phone=552130402875", Icon: WhatsappIcon, label: "WhatsApp 1" },
                    { href: "https://api.whatsapp.com/send?phone=552139620841", Icon: WhatsappIcon, label: "WhatsApp 2" },
                  ].map(({ href, Icon, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      style={{ width: "40px", height: "40px", border: "1px solid #e8e8e8", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", color: "#555", transition: "border-color 0.2s, color 0.2s" }}
                      onMouseEnter={(e) => { const t = e.currentTarget; t.style.borderColor = "#01A8DD"; t.style.color = "#01A8DD"; }}
                      onMouseLeave={(e) => { const t = e.currentTarget; t.style.borderColor = "#e8e8e8"; t.style.color = "#555"; }}>
                      <Icon style={{ width: "16px", height: "16px" }} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            </RevealSection>

            {/* Right: form */}
            <RevealSection from="right" delay={150}>
            <div>
              <div style={{ backgroundColor: "#f7f8fa", padding: "48px" }}>
                <p className="gradient-text" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "20px" }}>
                  Envie sua mensagem
                </p>
                <h3 style={{ fontSize: "24px", fontWeight: 300, color: "#003567", marginBottom: "32px" }}>
                  Preencha o formulário abaixo
                </h3>

                {status === "success" ? (
                  <div style={{ padding: "32px", backgroundColor: "#fff", border: "1px solid #e8e8e8", borderLeft: "3px solid #01A8DD", textAlign: "center" }}>
                    <div style={{ fontSize: "32px", marginBottom: "16px" }}>✓</div>
                    <p style={{ fontSize: "16px", fontWeight: 700, color: "#003567", marginBottom: "8px" }}>Mensagem enviada!</p>
                    <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>Respondemos em até 24 horas úteis.</p>
                    <button onClick={() => setStatus("idle")}
                      style={{ marginTop: "24px", background: "none", border: "1px solid #003567", color: "#003567", padding: "10px 24px", cursor: "pointer", fontSize: "13px", fontFamily: "'Lato', sans-serif" }}>
                      Enviar outra mensagem
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                      <div>
                        <label style={labelStyle}>Nome completo *</label>
                        <input name="nome" type="text" placeholder="Seu nome" required value={form.nome}
                          onChange={handleChange} onFocus={focusBorder} onBlur={blurBorder} style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>E-mail *</label>
                        <input name="email" type="email" placeholder="seu@email.com" required value={form.email}
                          onChange={handleChange} onFocus={focusBorder} onBlur={blurBorder} style={inputStyle} />
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                      <div>
                        <label style={labelStyle}>Telefone / WhatsApp</label>
                        <input name="telefone" type="tel" placeholder="(21) 00000-0000" value={form.telefone}
                          onChange={handleChange} onFocus={focusBorder} onBlur={blurBorder} style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Área de interesse</label>
                        <select name="area" value={form.area} onChange={handleChange} onFocus={focusBorder} onBlur={blurBorder}
                          style={{ ...inputStyle, appearance: "none" as const }}>
                          <option value="">Selecione uma área</option>
                          {areas.map((a) => <option key={a} value={a}>{a}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>Mensagem *</label>
                      <textarea name="mensagem" placeholder="Descreva brevemente sua situação ou dúvida..." rows={5}
                        required value={form.mensagem} onChange={handleChange} onFocus={focusBorder} onBlur={blurBorder}
                        style={{ ...inputStyle, resize: "vertical" as const }} />
                    </div>

                    {status === "error" && (
                      <p style={{ fontSize: "13px", color: "#c0392b", margin: 0, padding: "10px 14px", backgroundColor: "#fdf2f0", border: "1px solid #f5c6c0" }}>
                        {errorMsg}
                      </p>
                    )}

                    <button type="submit" disabled={status === "sending"}
                      style={{
                        backgroundColor: status === "sending" ? "#7a9cc0" : "#003567",
                        color: "#ffffff", padding: "14px 28px", border: "none", fontSize: "14px",
                        fontWeight: 700, fontFamily: "'Lato', sans-serif", letterSpacing: "0.5px",
                        cursor: status === "sending" ? "not-allowed" : "pointer",
                        alignSelf: "flex-start", transition: "background-color 0.2s",
                      }}
                      onMouseEnter={(e) => { if (status !== "sending") (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#004C90"; }}
                      onMouseLeave={(e) => { if (status !== "sending") (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#003567"; }}>
                      {status === "sending" ? "Enviando..." : "Enviar mensagem"}
                    </button>
                  </form>
                )}
              </div>
            </div>
            </RevealSection>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .contato-section { padding: 48px 24px !important; }
              .contato-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
              .form-row { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>
      </main>
      <Footer />
    </>
  );
}
