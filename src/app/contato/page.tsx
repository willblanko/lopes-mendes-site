"use client";

import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { PhoneIcon, MailIcon, MapPinIcon, InstagramIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons";

// Note: metadata must be in a separate server component when using "use client"
// Keeping page as client for form interactivity

const contactInfo = [
  { Icon: PhoneIcon, label: "Telefone", value: "21 3040-2875", href: "tel:+552130402875" },
  { Icon: MailIcon, label: "E-mail", value: "contato@lopesmendes.adv.br", href: "mailto:contato@lopesmendes.adv.br" },
  { Icon: MapPinIcon, label: "Endereço", value: "Praça Floriano, 19 — 22º Andar\nCentro, Rio de Janeiro — RJ\nCEP 20031-924", href: "https://maps.google.com/?q=Praça+Floriano+19+Rio+de+Janeiro" },
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

export default function ContatoPage() {
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
            <div>
              <p className="gradient-text" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "20px" }}>
                Informações
              </p>
              <h2 style={{ fontSize: "32px", fontWeight: 300, color: "#003567", lineHeight: 1.25, marginBottom: "40px" }}>
                Estamos prontos para ajudar
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginBottom: "48px" }}>
                {contactInfo.map(({ Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{ display: "flex", gap: "16px", alignItems: "flex-start", textDecoration: "none", color: "inherit" }}
                  >
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

              {/* Horário */}
              <div style={{ padding: "24px", backgroundColor: "#f7f8fa", borderLeft: "3px solid #01A8DD" }}>
                <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#01A8DD", marginBottom: "12px" }}>
                  Horário de atendimento
                </p>
                <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.7, margin: 0 }}>
                  Segunda a Sexta: 9h às 18h<br />
                  Sábados e feriados: consulte disponibilidade
                </p>
              </div>

              {/* Social */}
              <div style={{ marginTop: "32px" }}>
                <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#999", marginBottom: "16px" }}>
                  Redes sociais
                </p>
                <div style={{ display: "flex", gap: "12px" }}>
                  {[
                    { href: "https://www.instagram.com/lopesmendesadv/", Icon: InstagramIcon, label: "Instagram" },
                    { href: "https://www.linkedin.com/company/lopesmendesadv/", Icon: LinkedinIcon, label: "LinkedIn" },
                    { href: "https://api.whatsapp.com/send?phone=552130402875", Icon: WhatsappIcon, label: "WhatsApp" },
                  ].map(({ href, Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      style={{
                        width: "40px", height: "40px",
                        border: "1px solid #e8e8e8",
                        borderRadius: "4px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "#555",
                        transition: "border-color 0.2s, color 0.2s",
                      }}
                      onMouseEnter={(e) => { const t = e.currentTarget as HTMLAnchorElement; t.style.borderColor = "#01A8DD"; t.style.color = "#01A8DD"; }}
                      onMouseLeave={(e) => { const t = e.currentTarget as HTMLAnchorElement; t.style.borderColor = "#e8e8e8"; t.style.color = "#555"; }}
                    >
                      <Icon style={{ width: "16px", height: "16px" }} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <div style={{ backgroundColor: "#f7f8fa", padding: "48px" }}>
                <p className="gradient-text" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "20px" }}>
                  Envie sua mensagem
                </p>
                <h3 style={{ fontSize: "24px", fontWeight: 300, color: "#003567", marginBottom: "32px" }}>
                  Preencha o formulário abaixo
                </h3>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  style={{ display: "flex", flexDirection: "column", gap: "20px" }}
                >
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                    {[
                      { label: "Nome completo", placeholder: "Seu nome", type: "text", required: true },
                      { label: "E-mail", placeholder: "seu@email.com", type: "email", required: true },
                    ].map(({ label, placeholder, type, required }) => (
                      <div key={label}>
                        <label style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px", color: "#555", display: "block", marginBottom: "6px" }}>{label}</label>
                        <input
                          type={type}
                          placeholder={placeholder}
                          required={required}
                          style={{
                            width: "100%",
                            padding: "12px 14px",
                            border: "1px solid #ddd",
                            backgroundColor: "#ffffff",
                            fontSize: "14px",
                            color: "#333",
                            outline: "none",
                            fontFamily: "'Lato', sans-serif",
                            borderRadius: "0",
                            boxSizing: "border-box" as const,
                            transition: "border-color 0.2s",
                          }}
                          onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#01A8DD"; }}
                          onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#ddd"; }}
                        />
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                    <div>
                      <label style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px", color: "#555", display: "block", marginBottom: "6px" }}>Telefone / WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="(21) 00000-0000"
                        style={{ width: "100%", padding: "12px 14px", border: "1px solid #ddd", backgroundColor: "#ffffff", fontSize: "14px", color: "#333", outline: "none", fontFamily: "'Lato', sans-serif", borderRadius: "0", boxSizing: "border-box" as const, transition: "border-color 0.2s" }}
                        onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#01A8DD"; }}
                        onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#ddd"; }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px", color: "#555", display: "block", marginBottom: "6px" }}>Área de interesse</label>
                      <select
                        style={{ width: "100%", padding: "12px 14px", border: "1px solid #ddd", backgroundColor: "#ffffff", fontSize: "14px", color: "#333", outline: "none", fontFamily: "'Lato', sans-serif", borderRadius: "0", boxSizing: "border-box" as const, appearance: "none" as const, transition: "border-color 0.2s" }}
                        onFocus={(e) => { (e.currentTarget as HTMLSelectElement).style.borderColor = "#01A8DD"; }}
                        onBlur={(e) => { (e.currentTarget as HTMLSelectElement).style.borderColor = "#ddd"; }}
                      >
                        <option value="">Selecione uma área</option>
                        {areas.map((a) => <option key={a} value={a}>{a}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px", color: "#555", display: "block", marginBottom: "6px" }}>Mensagem</label>
                    <textarea
                      placeholder="Descreva brevemente sua situação ou dúvida..."
                      rows={5}
                      style={{ width: "100%", padding: "12px 14px", border: "1px solid #ddd", backgroundColor: "#ffffff", fontSize: "14px", color: "#333", outline: "none", fontFamily: "'Lato', sans-serif", borderRadius: "0", boxSizing: "border-box" as const, resize: "vertical" as const, transition: "border-color 0.2s" }}
                      onFocus={(e) => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = "#01A8DD"; }}
                      onBlur={(e) => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = "#ddd"; }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#003567",
                      color: "#ffffff",
                      padding: "14px 28px",
                      border: "none",
                      fontSize: "14px",
                      fontWeight: 700,
                      fontFamily: "'Lato', sans-serif",
                      letterSpacing: "0.5px",
                      cursor: "pointer",
                      alignSelf: "flex-start",
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#004C90"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#003567"; }}
                  >
                    Enviar mensagem
                  </button>
                </form>
              </div>
            </div>
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
