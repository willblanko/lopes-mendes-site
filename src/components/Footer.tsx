import Link from "next/link";
import { InstagramIcon, LinkedinIcon, WhatsappIcon, MailIcon, PhoneIcon, MapPinIcon } from "@/components/icons";

function LopesmendesLogoFooter() {
  return (
    <div style={{ lineHeight: 1 }}>
      <div style={{ fontFamily: "'Godber', 'Lato', sans-serif", fontWeight: 400, fontSize: "28px", color: "#ffffff", letterSpacing: "-0.3px" }}>
        lopesmendes
        <sup style={{ fontSize: "13px", verticalAlign: "super", lineHeight: 0 }}>®</sup>
      </div>
      <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 400, fontSize: "8px", letterSpacing: "4px", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", marginTop: "3px" }}>
        ADVOGADOS
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#003567", color: "#ffffff" }}>
      <div
        style={{ padding: "64px 80px 48px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.4fr", gap: "48px" }}
        className="footer-grid"
      >
        {/* Brand column */}
        <div>
          <Link href="/" style={{ textDecoration: "none", display: "inline-block", marginBottom: "24px" }}>
            <LopesmendesLogoFooter />
          </Link>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, maxWidth: "280px", marginBottom: "28px" }}>
            Estratégia jurídica para empresas e famílias que precisam decidir com segurança.
          </p>
          <div style={{ display: "flex", gap: "16px" }}>
            {[
              { href: "https://www.instagram.com/lopesmendesadv/", Icon: InstagramIcon, label: "Instagram" },
              { href: "https://www.linkedin.com/company/lopesmendesadv/", Icon: LinkedinIcon, label: "LinkedIn" },
              { href: "https://api.whatsapp.com/send?phone=552130402875", Icon: WhatsappIcon, label: "WhatsApp" },
            ].map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="footer-social-icon">
                <Icon style={{ width: "16px", height: "16px" }} />
              </a>
            ))}
          </div>
        </div>

        {/* Áreas */}
        <div>
          <h4 style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#01A8DD", marginBottom: "20px" }}>
            Áreas de Atuação
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            {["Direito do Trabalho", "Direito Civil", "Direito Imobiliário", "Direito Previdenciário", "Direito Bancário", "Direito do Consumidor", "Direito Sucessório"].map((area) => (
              <li key={area}>
                <Link href="/areas-atuacao" className="footer-nav-link">{area}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#01A8DD", marginBottom: "20px" }}>
            Escritório
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { label: "Quem somos", href: "/sobre" },
              { label: "Nossa Equipe", href: "/equipe" },
              { label: "Blog / Notícias", href: "/blog" },
              { label: "Contato", href: "/contato" },
              { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
            ].map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="footer-nav-link">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#01A8DD", marginBottom: "20px" }}>
            Fale Conosco
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <a href="https://maps.app.goo.gl/aw1v9WG2tFKNaYbR6" target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", gap: "10px", color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: "13px", lineHeight: 1.5, alignItems: "flex-start" }}>
              <MapPinIcon style={{ width: "15px", height: "15px", flexShrink: 0, marginTop: "1px", color: "#01A8DD" }} />
              Praça Floriano, 19 | 22º Andar<br />Centro | RJ | 20031-924
            </a>
            <a href="https://api.whatsapp.com/send?phone=552130402875" target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", gap: "10px", color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: "13px", alignItems: "center" }}>
              <PhoneIcon style={{ width: "15px", height: "15px", flexShrink: 0, color: "#01A8DD" }} />
              21 3040-2875
            </a>
            <a href="https://api.whatsapp.com/send?phone=552139620841" target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", gap: "10px", color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: "13px", alignItems: "center" }}>
              <PhoneIcon style={{ width: "15px", height: "15px", flexShrink: 0, color: "#01A8DD" }} />
              21 3962-0841
            </a>
            <a href="mailto:contato@lopesmendes.adv.br"
              style={{ display: "flex", gap: "10px", color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: "13px", alignItems: "center" }}>
              <MailIcon style={{ width: "15px", height: "15px", flexShrink: 0, color: "#01A8DD" }} />
              contato@lopesmendes.adv.br
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "20px 80px", display: "flex", justifyContent: "space-between", alignItems: "center" }} className="footer-bottom">
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", margin: 0 }}>
          © {new Date().getFullYear()} Lopes Mendes Advogados. CNPJ 30.116.262/0001-87
        </p>
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", margin: 0 }}>
          Todos os direitos reservados
        </p>
      </div>

      <style>{`
        .footer-nav-link { font-size: 13px; color: rgba(255,255,255,0.65); text-decoration: none; transition: color 0.2s; }
        .footer-nav-link:hover { color: #ffffff; }
        .footer-social-icon {
          width: 36px; height: 36px; border: 1px solid rgba(255,255,255,0.25); border-radius: 4px;
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.8); text-decoration: none; transition: border-color 0.2s, color 0.2s;
        }
        .footer-social-icon:hover { border-color: #01A8DD; color: #01A8DD; }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; padding: 40px 24px 32px !important; gap: 32px !important; }
          .footer-bottom { flex-direction: column; gap: 8px; padding: 16px 24px !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; padding: 48px 40px !important; }
        }
      `}</style>
    </footer>
  );
}
