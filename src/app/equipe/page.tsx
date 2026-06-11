"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Member {
  name: string;
  role: string;
  group: string;
  photo: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const teamGroups: { group: string; members: Member[] }[] = [
  {
    group: "Sócios",
    members: [
      { name: "Isaac Lopes", role: "Sócio Fundador", group: "Sócios", photo: "/images/team/Isaac_Lopes.png" },
      { name: "Marco Aurélio Mendes", role: "Sócio Fundador", group: "Sócios", photo: "/images/team/Marco_Aurelio_Mendes.png" },
    ],
  },
  {
    group: "Cível",
    members: [
      { name: "Alex Ribeiro", role: "Liderança Cível", group: "Cível", photo: "/images/team/Alex_Ribeiro.png" },
      { name: "Daniela de Holanda", role: "Advogada", group: "Cível", photo: "/images/team/Daniela_Holanda.png" },
      { name: "João Nascimento", role: "Advogado", group: "Cível", photo: "/images/team/Joao_Nascimento.png" },
      { name: "Antônio Egito", role: "Advogado", group: "Cível", photo: "/images/team/Antonio_Egito.png" },
      { name: "Lyvia Duarte", role: "Advogada", group: "Cível", photo: "/images/team/Lyvia_Duarte.png" },
      { name: "Vitória Rebello", role: "Advogada", group: "Cível", photo: "/images/team/Vitoria_Rebello.png" },
      { name: "Giovana Vasconcelos", role: "Estagiária", group: "Cível", photo: "/images/team/Giovana_Vasconcelos.png" },
    ],
  },
  {
    group: "Trabalhista",
    members: [
      { name: "Raphael Pitta", role: "Advogado", group: "Trabalhista", photo: "/images/team/Raphael_Pitta.png" },
      { name: "Gustavo Feitoza", role: "Advogado", group: "Trabalhista", photo: "/images/team/Gustavo_Feitoza.png" },
      { name: "Alex Sander Muniz", role: "Advogado", group: "Trabalhista", photo: "/images/team/Alex_Sander_Muniz.png" },
      { name: "Taiane Xavier", role: "Advogada", group: "Trabalhista", photo: "/images/team/Taiane_Xavier.png" },
      { name: "Maria Clara", role: "Estagiária", group: "Trabalhista", photo: "/images/team/Maria_Clara.png" },
    ],
  },
  {
    group: "Comercial",
    members: [
      { name: "Patricia Madeira", role: "Comercial", group: "Comercial", photo: "/images/team/Patricia_Madeira.png" },
      { name: "Luciano Arsenio", role: "Comercial", group: "Comercial", photo: "/images/team/Luciano_Arsenio.png" },
    ],
  },
  {
    group: "Administrativo",
    members: [
      { name: "Ana Albuquerque", role: "Administrativo", group: "Administrativo", photo: "/images/team/Ana_Albuquerque.png" },
      { name: "Marcia Lameira", role: "Auxiliar Administrativo", group: "Administrativo", photo: "/images/team/Marcia_Lameira.png" },
      { name: "Renan Quintaneiro", role: "Controller", group: "Administrativo", photo: "/images/team/Renan_Quintaneiro.png" },
      { name: "Emily Carolina", role: "Auxiliar Jurídico", group: "Administrativo", photo: "/images/team/Emily_Carolina.png" },
      { name: "Willian Pereira", role: "Analista de TI", group: "Administrativo", photo: "/images/team/Willian_Pereira.png" },
    ],
  },
  {
    group: "Serviços Gerais",
    members: [
      { name: "Luciana Martins", role: "Governança de Serviços Gerais", group: "Serviços Gerais", photo: "/images/team/Luciana_Martins.png" },
    ],
  },
];

const allMembers = teamGroups.flatMap((g) => g.members);
const groupNames = teamGroups.map((g) => g.group);

// ─── MemberCard ───────────────────────────────────────────────────────────────

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="member-card">
      <div className="member-card-photo-wrap">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="member-card-photo"
          sizes="(max-width: 540px) 50vw, (max-width: 900px) 33vw, (max-width: 1200px) 25vw, 20vw"
        />
        <div className="member-card-overlay">
          <span className="member-card-name">{member.name}</span>
        </div>
      </div>
      <div className="member-card-info">
        <span className="member-card-role">{member.role}</span>
      </div>
    </div>
  );
}

// ─── MemberGroup ──────────────────────────────────────────────────────────────

function MemberGroup({ title, members }: { title: string; members: Member[] }) {
  if (members.length === 0) return null;
  return (
    <div className="member-group">
      <h2 className="member-group-heading">{title}</h2>
      <div className="member-grid">
        {members.map((m) => (
          <MemberCard key={m.name} member={m} />
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EquipePage() {
  const [activeGroup, setActiveGroup] = useState<string>("all");
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMembers = useMemo(() => {
    return allMembers.filter((m) => {
      const matchesGroup = activeGroup === "all" || m.group === activeGroup;
      const matchesSearch =
        searchQuery === "" ||
        m.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesGroup && matchesSearch;
    });
  }, [activeGroup, searchQuery]);

  const visibleGroups = useMemo(() => {
    return activeGroup === "all"
      ? teamGroups
      : teamGroups.filter((g) => g.group === activeGroup);
  }, [activeGroup]);

  function handleSearch() {
    setSearchQuery(searchInput);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSearch();
  }

  function getGroupMembers(group: string) {
    return filteredMembers.filter((m) => m.group === group);
  }

  return (
    <>
      <style>{`
        /* ── Filter bar ───────────────────────────────── */
        .equipe-filter-bar {
          background-color: white;
          border-bottom: 1px solid #e9ecf5;
          padding: 20px 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .equipe-tabs {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }
        .equipe-tab {
          padding: 7px 18px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          transition: background-color 0.2s, color 0.2s;
          font-family: Lato, sans-serif;
          white-space: nowrap;
        }
        .equipe-tab-active {
          background-color: #003567;
          color: white;
        }
        .equipe-tab-inactive {
          background-color: transparent;
          color: #3b3e43;
        }
        .equipe-tab-inactive:hover {
          color: #003567;
          background-color: #f0f3fa;
        }
        .equipe-search-wrap {
          display: flex;
          align-items: center;
          border: 1px solid #c0c4d6;
          border-radius: 4px;
          overflow: hidden;
        }
        .equipe-search-input {
          border: none;
          outline: none;
          font-size: 13px;
          font-family: Lato, sans-serif;
          color: #3b3e43;
          background: transparent;
          width: 200px;
          padding: 8px 12px;
        }
        .equipe-search-input::placeholder {
          color: #a0a4b0;
        }
        .equipe-search-btn {
          border: none;
          background-color: #003567;
          color: white;
          width: 38px;
          height: 38px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background-color 0.2s;
          font-size: 16px;
        }
        .equipe-search-btn:hover {
          background-color: #004C90;
        }

        /* ── Grid section ─────────────────────────────── */
        .equipe-grid-section {
          background-color: #f7f8fa;
          padding: 60px 80px;
        }
        .member-group {
          margin-bottom: 64px;
        }
        .member-group:last-child {
          margin-bottom: 0;
        }
        .member-group-heading {
          font-size: 18px;
          font-weight: 700;
          color: #003567;
          border-left: 3px solid #01A8DD;
          padding-left: 14px;
          margin: 0 0 32px 0;
          font-family: Lato, sans-serif;
          letter-spacing: 0.5px;
        }
        .member-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        /* ── Member card ──────────────────────────────── */
        .member-card {
          display: block;
          color: inherit;
        }
        .member-card:hover .member-card-photo {
          transform: scale(1.04) !important;
        }
        .member-card-photo-wrap {
          position: relative;
          overflow: hidden;
          height: 340px;
          border-radius: 4px;
          background-color: #e8e8e8;
        }
        .member-card-photo {
          object-fit: cover;
          object-position: top center;
          transition: transform 0.4s ease !important;
        }
        .member-card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,53,103,0.88) 0%, transparent 100%);
          padding: 48px 14px 14px;
        }
        .member-card-name {
          font-size: 15px;
          font-weight: 700;
          color: white;
          font-family: Lato, sans-serif;
          display: block;
        }
        .member-card-info {
          padding: 10px 0 0;
        }
        .member-card-role {
          font-size: 11px;
          font-weight: 700;
          color: #01A8DD;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-family: Lato, sans-serif;
        }

        /* ── Empty state ──────────────────────────────── */
        .equipe-empty {
          padding: 80px;
          text-align: center;
          color: #7b7e83;
          font-size: 15px;
          font-family: Lato, sans-serif;
        }

        /* ── Responsive ───────────────────────────────── */
        @media (max-width: 1200px) {
          .member-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 900px) {
          .equipe-filter-bar { padding: 16px 24px; flex-direction: column; align-items: flex-start; }
          .equipe-grid-section { padding: 40px 24px; }
          .member-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .member-card-photo-wrap { height: 220px; }
          .equipe-search-wrap { width: 100%; }
          .equipe-search-input { width: 100%; }
        }
      `}</style>

      <Navbar />

      <PageHero
        eyebrow="Nossa equipe"
        title="Conheça os profissionais do Lopes Mendes"
        subtitle="Uma equipe dedicada, especializada e comprometida com os melhores resultados para nossos clientes."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Nossa Equipe" }]}
      />

      {/* Filter bar */}
      <div className="equipe-filter-bar">
        <div className="equipe-tabs">
          <button
            onClick={() => setActiveGroup("all")}
            className={`equipe-tab ${activeGroup === "all" ? "equipe-tab-active" : "equipe-tab-inactive"}`}
          >
            Todos
          </button>
          {groupNames.map((g) => (
            <button
              key={g}
              onClick={() => setActiveGroup(g)}
              className={`equipe-tab ${activeGroup === g ? "equipe-tab-active" : "equipe-tab-inactive"}`}
            >
              {g}
            </button>
          ))}
        </div>

        <div className="equipe-search-wrap">
          <input
            type="text"
            className="equipe-search-input"
            placeholder="Pesquisar por nome..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Pesquisar por nome"
          />
          <button
            className="equipe-search-btn"
            onClick={handleSearch}
            aria-label="Pesquisar"
          >
            🔍
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="equipe-grid-section">
        {filteredMembers.length === 0 ? (
          <p className="equipe-empty">Nenhum colaborador encontrado.</p>
        ) : (
          visibleGroups.map((g) => {
            const members = getGroupMembers(g.group);
            return members.length > 0 ? (
              <MemberGroup key={g.group} title={g.group} members={members} />
            ) : null;
          })
        )}
      </div>

      <Footer />
    </>
  );
}
