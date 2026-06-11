import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Blog | Lopes Mendes Advogados",
  description: "Artigos, notícias e insights jurídicos do Lopes Mendes Advogados. Fique por dentro das principais mudanças legais que afetam você e sua empresa.",
};

const posts = [
  {
    category: "Direito do Trabalho",
    title: "O que muda na CLT com a Reforma Trabalhista: guia atualizado 2024",
    excerpt: "Entenda as principais mudanças trazidas pela reforma trabalhista e como elas afetam as relações de emprego nos dias de hoje.",
    date: "12 Mar 2024",
    readTime: "8 min",
    slug: "reforma-trabalhista-2024",
  },
  {
    category: "Direito Imobiliário",
    title: "Due diligence imobiliária: por que é indispensável antes de comprar um imóvel",
    excerpt: "A due diligence pode evitar problemas graves em transações imobiliárias. Saiba o que verificar antes de assinar qualquer contrato.",
    date: "5 Mar 2024",
    readTime: "6 min",
    slug: "due-diligence-imobiliaria",
  },
  {
    category: "Direito Previdenciário",
    title: "Reforma da Previdência: como calcular sua aposentadoria pelas novas regras",
    excerpt: "Um guia completo sobre as regras de transição e como planejar sua aposentadoria após a reforma da previdência de 2019.",
    date: "28 Fev 2024",
    readTime: "10 min",
    slug: "reforma-previdencia-calculo",
  },
  {
    category: "Direito Empresarial",
    title: "Holding familiar: proteção patrimonial e planejamento sucessório em um único instrumento",
    excerpt: "A constituição de uma holding familiar pode ser uma das melhores estratégias para proteger o patrimônio e facilitar a sucessão.",
    date: "20 Fev 2024",
    readTime: "7 min",
    slug: "holding-familiar",
  },
  {
    category: "Direito do Consumidor",
    title: "Negativação indevida: como agir e quais são seus direitos",
    excerpt: "Se você foi negativado de forma indevida, saiba quais são seus direitos e os passos para regularizar sua situação e buscar reparação.",
    date: "14 Fev 2024",
    readTime: "5 min",
    slug: "negativacao-indevida",
  },
  {
    category: "Direito Civil",
    title: "Contrato de gaveta: riscos e como se proteger",
    excerpt: "Os chamados contratos de gaveta são comuns em transações imobiliárias informais, mas apresentam riscos significativos para todas as partes.",
    date: "6 Fev 2024",
    readTime: "6 min",
    slug: "contrato-de-gaveta",
  },
];

const categories = ["Todos", "Direito do Trabalho", "Direito Civil", "Direito Imobiliário", "Direito Previdenciário", "Direito Empresarial", "Direito do Consumidor"];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Blog"
          title="Insights jurídicos para as suas decisões"
          subtitle="Artigos, análises e novidades do mundo jurídico escritos pelos especialistas do Lopes Mendes."
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        />

        <section style={{ backgroundColor: "#f7f8fa", padding: "80px 80px" }} className="blog-section">
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            {/* Category filter */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" as const, marginBottom: "48px" }}>
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  style={{
                    padding: "8px 16px",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: i === 0 ? "#003567" : "#ffffff",
                    color: i === 0 ? "#ffffff" : "#555",
                    borderRadius: "2px",
                    transition: "background-color 0.2s",
                    fontFamily: "'Lato', sans-serif",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Featured post */}
            <div style={{ backgroundColor: "#003567", padding: "48px", marginBottom: "32px", position: "relative", overflow: "hidden" }} className="featured-post">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/grafismo/diagonal-lines.svg" alt="" aria-hidden="true"
                style={{ position: "absolute", top: 0, right: 0, height: "100%", width: "auto", opacity: 0.06, pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 1, maxWidth: "680px" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#01A8DD", display: "block", marginBottom: "16px" }}>
                  {posts[0].category} — Destaque
                </span>
                <h2 style={{ fontSize: "28px", fontWeight: 700, color: "#ffffff", lineHeight: 1.3, margin: "0 0 16px" }}>{posts[0].title}</h2>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: 1.75, margin: "0 0 28px" }}>{posts[0].excerpt}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)" }}>{posts[0].date}</span>
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)" }}>{posts[0].readTime} de leitura</span>
                  <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#01A8DD", fontSize: "13px", fontWeight: 700, textDecoration: "none" }} className="area-saiba-mais">
                    Ler artigo <ArrowRightIcon style={{ width: "14px", height: "14px" }} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="blog-grid">
              {posts.slice(1).map((post) => (
                <article key={post.slug} className="lm-card-hover" style={{ backgroundColor: "#ffffff" }}>
                  <div style={{ padding: "28px" }}>
                    <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#01A8DD", display: "block", marginBottom: "12px" }}>
                      {post.category}
                    </span>
                    <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#003567", lineHeight: 1.35, margin: "0 0 12px" }}>{post.title}</h3>
                    <p style={{ fontSize: "13px", color: "#777", lineHeight: 1.75, margin: "0 0 20px" }}>{post.excerpt}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <span style={{ fontSize: "11px", color: "#bbb" }}>{post.date}</span>
                        <span style={{ fontSize: "11px", color: "#bbb", marginLeft: "12px" }}>{post.readTime}</span>
                      </div>
                      <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "#01A8DD", fontSize: "12px", fontWeight: 700, textDecoration: "none" }} className="area-saiba-mais">
                        Ler <ArrowRightIcon style={{ width: "12px", height: "12px" }} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <style>{`
            @media (max-width: 1024px) { .blog-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 768px) {
              .blog-section { padding: 48px 24px !important; }
              .blog-grid { grid-template-columns: 1fr !important; }
              .featured-post { padding: 32px 24px !important; }
            }
          `}</style>
        </section>
      </main>
      <Footer />
    </>
  );
}
