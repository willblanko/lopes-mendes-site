# AreasSection (Áreas de Atuação) Specification

## Overview
- **Target file:** `src/components/AreasSection.tsx`
- **Interaction model:** static grid, AOS entrances

## DOM Structure
- White background section
- Section ID: `area-atuacao`
- Top header row: section title left, "Ver todas as áreas" link right
- Below: 2-column grid of practice area cards
- Each card: top accent line, title, description, "Saiba mais" link

## Computed Styles

### Section container
- backgroundColor: white
- paddingTop: 80px
- paddingBottom: 80px
- paddingLeft: 80px
- paddingRight: 80px

### Section header
- display: flex
- justifyContent: space-between
- alignItems: center
- marginBottom: 48px

#### Section title ("ONDE ATUAMOS")
- Apply gradient-text
- fontSize: 11px
- fontWeight: 600
- letterSpacing: 3px
- textTransform: uppercase

#### "Ver todas as áreas" link
- color: #28348a
- fontSize: 13px
- fontWeight: 600
- textDecoration: none
- display: flex
- alignItems: center
- gap: 6px
- ChevronRight icon

### Grid container
- display: grid
- gridTemplateColumns: repeat(2, 1fr)
- gap: 0 (cards separated by border lines)
- borderTop: 1px solid rgb(233, 236, 245)

### Practice area card
- padding: 40px 40px 40px 0
- borderBottom: 1px solid rgb(233, 236, 245)
- borderRight: 1px solid rgb(233, 236, 245) (right column has no right border)
- paddingLeft: 40px

#### Top accent bar (above title)
- width: 32px
- height: 3px
- backgroundColor: #28348a
- marginBottom: 16px
- display: block

#### Card title (h2)
- fontFamily: Metropolis
- fontSize: 20px
- fontWeight: 600
- color: rgb(23, 24, 30) — #17181e
- marginBottom: 16px
- lineHeight: 1.3

#### Card description (p)
- fontFamily: Metropolis
- fontSize: 14px
- fontWeight: 400
- color: rgb(102, 102, 102)
- lineHeight: 1.6
- marginBottom: 24px
- display: -webkit-box
- -webkit-line-clamp: 4
- -webkit-box-orient: vertical
- overflow: hidden

#### "Saiba mais" link
- display: flex
- alignItems: center
- gap: 8px
- color: #28348a
- fontSize: 13px
- fontWeight: 600
- textDecoration: none
- Has `/images/icons/arrow-link.svg` or ChevronRight icon
- hover: gap increases to 12px (arrow moves right)

## Practice Areas Data (verbatim from site)
```
[
  { title: "Administrativo", description: "Assessoria em processos licitatórios, impugnação de certames, análise de editais e contratos administrativos de empreitada de obras públicas, de concessões, permissões e autorizações para a prestação de serviços públicos e uso de bens públicos.", href: "/areas-de-atuacao/administrativo/" },
  { title: "Aeronáutico", description: "Atuação nos temas relacionados à aviação civil, comercial e militar. Negociação e elaboração de contratos de compra e venda e financiamento de aeronaves, contratos de arrendamento. Importação e exportação de aeronaves. Questões regulatórias...", href: "/areas-de-atuacao/aeronautico/" },
  { title: "Ambiental", description: "Assessoria em processos para obtenção ou regularização de licenças e outorgas ambientais, cadastro, revisão de estudos e suporte em audiências públicas. Auditoria ambiental. Avaliação de passivos ambientais em processos de fusões e aquisições.", href: "/areas-de-atuacao/ambiental/" },
  { title: "Bancário/Mercado de Capitais", description: "Emissão pública e privada de títulos e valores mobiliários, nos mercados de capitais brasileiro e internacional, incluindo ofertas públicas iniciais e de follow-on, ofertas para aquisição e alienação de controle, emissões de debêntures e de notas promissórias...", href: "/areas-de-atuacao/bancario-mercado-de-capitais/" }
]
```
Only show 4 areas on home page (first 4). Show "Ver todas as áreas" link to full page.

## Assets
- Arrow icon: `/images/icons/arrow-link.svg`

## Responsive Behavior
- **Desktop (1440px):** 2-column grid, 4 cards (2×2)
- **Tablet (768px):** 2-column grid maintained
- **Mobile (390px):** 1-column grid, full width cards
- **Breakpoint:** ~600px
