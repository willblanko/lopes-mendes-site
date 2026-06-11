import Link from "next/link";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
  className?: string;
}

export function PageHero({ eyebrow, title, subtitle, breadcrumb, className = "" }: PageHeroProps) {
  return (
    <section
      className={`page-hero ${className}`}
      style={{
        backgroundColor: "#003567",
        paddingTop: "140px",
        paddingBottom: "64px",
        paddingLeft: "80px",
        paddingRight: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Diagonal lines grafismo background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/grafismo/diagonal-lines.svg"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: "auto",
          opacity: 0.06,
          pointerEvents: "none",
        }}
      />

      {eyebrow && (
        <p
          className="gradient-text"
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          {eyebrow}
        </p>
      )}

      <h1
        style={{
          fontSize: "48px",
          fontWeight: 300,
          color: "white",
          lineHeight: 1.15,
          maxWidth: "600px",
          margin: 0,
          fontFamily: "'Lato', sans-serif",
        }}
      >
        {title}
      </h1>

      {subtitle && (
        <p
          style={{
            fontSize: "16px",
            color: "rgba(255,255,255,0.6)",
            marginTop: "16px",
            maxWidth: "520px",
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>
      )}

      {breadcrumb && breadcrumb.length > 0 && (
        <nav aria-label="Breadcrumb" style={{ marginTop: "32px" }}>
          <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: "8px", alignItems: "center", fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>
            {breadcrumb.map((item, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {i > 0 && <span aria-hidden="true">/</span>}
                {item.href ? (
                  <Link href={item.href} className="breadcrumb-link">
                    {item.label}
                  </Link>
                ) : (
                  <span style={{ color: "rgba(255,255,255,0.8)" }}>{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      <style>{`
        .breadcrumb-link { color: rgba(255,255,255,0.5); text-decoration: none; transition: color 0.2s; }
        .breadcrumb-link:hover { color: #01A8DD; }
        @media (max-width: 768px) {
          .page-hero { padding: 120px 24px 48px !important; }
          .page-hero h1 { font-size: 32px !important; }
        }
      `}</style>
    </section>
  );
}
