# QuemSomosSection Specification

## Overview
- **Target file:** `src/components/QuemSomosSection.tsx`
- **Interaction model:** static with AOS entrance animations

## DOM Structure
- White background section
- Section ID: `quem-somos`
- Two-column layout: text/list left (~55%), image right (~45%)
- Right column has stacked image with "+60 anos" badge overlay

## Computed Styles

### Section container
- backgroundColor: white (#ffffff)
- paddingTop: 100px
- paddingBottom: 100px
- paddingLeft: 80px
- paddingRight: 80px
- display: flex
- alignItems: center
- gap: 80px

### Left column

#### Eyebrow / section label ("QUEM SOMOS")
- fontFamily: Metropolis
- fontSize: 11px
- fontWeight: 600
- letterSpacing: 3px
- textTransform: uppercase
- Apply gradient-text class (same gradient as hero eyebrow)
- marginBottom: 32px

#### Bullet list
- listStyle: disc
- paddingLeft: 20px
- display: flex
- flexDirection: column
- gap: 8px

#### List items (li / p)
- fontFamily: Metropolis
- fontSize: 14px
- fontWeight: 400
- color: rgb(59, 62, 67) — #3b3e43
- lineHeight: 1.6

#### "Conheça nosso escritório" link
- display: flex
- alignItems: center
- gap: 8px
- color: #28348a (mf-blue) — matches primary blue
- fontSize: 13px
- fontWeight: 600
- textDecoration: none
- marginTop: 32px
- Has arrow icon: `/images/quem-somos/seta-link.svg`
- href: `/quem-somos/` or similar
- hover: color slightly lighter, arrow moves 3px right

### Right column

#### Image container
- position: relative
- width: 100%
- maxWidth: 500px

#### Main photo
- Image: `/images/quem-somos/IMG-1.webp`
- width: 100%
- height: auto
- display: block
- Shows branded pencils/stationery on a dark blue background

#### "+60 anos" badge overlay
- position: absolute
- bottom: -20px
- right: -20px (or bottom-right corner)
- backgroundColor: white
- padding: 20px 24px
- boxShadow: 0 4px 24px rgba(0,0,0,0.12)
- Contains:
  - "+60 anos" text: fontSize: 24px, fontWeight: 600, color: #28348a (blue)
  - "de nossa historia" text: fontSize: 13px, fontWeight: 400, color: #3b3e43
- Small logo icon: `/images/quem-somos/icon-card.svg` (small Motta Fernandes icon)

## States & Behaviors

### AOS entrance
- Left column text: fade-right
- Right image: fade-left
- Once: true

## Assets
- Main image: `/images/quem-somos/IMG-1.webp`
- Arrow: `/images/quem-somos/seta-link.svg`
- Badge icon: `/images/quem-somos/icon-card.svg`

## Text Content (verbatim)
Eyebrow: "QUEM SOMOS"
List items:
- Fundado em 1956.
- Escritórios localizados no Rio de Janeiro, em São Paulo e em Brasília.
- Ampla rede de escritórios correspondentes.
- Membro da TERRALEX.
- Membro da IBA – International BAR Association.
- Aproximadamente 60 advogados.
- Sócios diretamente envolvidos nas demandas dos clientes.
Link: "Conheça nosso escritório"
Badge: "+60 anos" / "de nossa historia"

## Responsive Behavior
- **Desktop (1440px):** 2-column, text left ~55%, image right
- **Tablet (768px):** columns stack, image below text
- **Mobile (390px):** single column, full-width image, badge repositioned
- **Breakpoint:** ~768px
