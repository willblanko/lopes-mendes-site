# NewsSection (Blog / Notícias) Specification

## Overview
- **Target file:** `src/components/NewsSection.tsx`
- **Interaction model:** static

## DOM Structure
- White background section
- Section ID: `blog-novidades`
- Top: section header with "Blog" label and "Acompanhe as novidades" heading + "Ir para o blog" link
- Below: asymmetric 2-column layout
  - Left column (~55%): one featured large article (date, title, excerpt, "Continuar lendo")
  - Right column (~45%): stack of 2-3 smaller article links (date, category, title, separator bar)

## Computed Styles

### Section container
- backgroundColor: white
- paddingTop: 80px
- paddingBottom: 80px
- paddingLeft: 80px
- paddingRight: 80px

### Section header
- marginBottom: 64px

#### Eyebrow / category label
- Apply gradient-text
- fontSize: 11px
- fontWeight: 600
- letterSpacing: 3px
- textTransform: uppercase
- content: "Blog"
- marginBottom: 12px

#### Section heading ("Acompanhe as ")+"novidades" bold
- fontSize: 32px
- fontWeight: 300 (regular) for "Acompanhe as "
- fontWeight: 700 (bold) for "novidades"  
- color: rgb(23, 24, 30)
- display: inline (on same line)

#### "Ir para o blog" link
- float/position: right or flex justify-end
- color: #28348a
- fontSize: 13px
- fontWeight: 600
- display: flex; alignItems: center; gap: 6px

### Content grid
- display: grid
- gridTemplateColumns: 1.2fr 1fr (or 55% 45%)
- gap: 80px
- borderTop: 1px solid rgb(233, 236, 245)
- paddingTop: 40px

### Featured article (left column)

#### Date
- fontSize: 12px
- fontWeight: 400
- color: rgb(102, 102, 102)
- marginBottom: 16px
- content: "19 de Jul, 2024 • 15:23"

#### Title (h2)
- fontSize: 22px
- fontWeight: 600
- color: rgb(23, 24, 30)
- lineHeight: 1.3
- marginBottom: 16px

#### Excerpt (p)
- fontSize: 14px
- color: rgb(102, 102, 102)
- lineHeight: 1.6
- marginBottom: 24px

#### "Continuar lendo" link
- color: #28348a
- fontSize: 13px
- fontWeight: 600
- display: flex; alignItems: center; gap: 6px
- ChevronRight icon

### Compact articles (right column — stack of 2-3)
Each compact article:

#### Date + category row
- fontSize: 12px
- color: rgb(102, 102, 102)
- display: flex; gap: 8px; alignItems: center
- Category tag (e.g. "NOTÍCIAS"): color: #28348a; fontWeight: 600; fontSize: 11px; textTransform: uppercase

#### Title
- fontSize: 17px
- fontWeight: 600
- color: rgb(23, 24, 30)
- lineHeight: 1.3
- marginBottom: 8px

#### Separator line
- width: 32px
- height: 3px
- backgroundColor: #28348a
- marginTop: 16px
- marginBottom: 24px

## News Data (verbatim from site)

### Featured article
- date: "19 de Jul, 2024 • 15:23"
- title: "Luis Roux e Fernando Lobo no Leaders League"
- excerpt: "Os sócios Luis Roux Azevedo e Fernando Lobo foram recomendados na área de Bankruptcy, categoria Valuable Practice, na 6ª Edição do guia Brazil's Best Counsel, publicado pelo Leaders League!"
- link text: "Continuar lendo"
- href: "#"

### Compact article 2
- date: "04 de Jul, 2024 • 17:08"
- title: "Nova Declaração Fiscal"
- href: "#"

### Compact article 3
- date: "16 de Mai, 2024 • 14:44"
- category: "NOTÍCIAS"
- title: "Mais um importante reconhecimento de nosso escritório na Revista Análise Editorial"
- href: "#"

### Compact article 4
- date: "22 de Abr, 2024 • 18:36"
- title: "Indicações Dr. Eduardo Cristelo e MFA no Advanced Air Mobility Awards"
- href: "#"

## Assets
- Articles icon: `/images/icons/icon-artigos.svg`

## Responsive Behavior
- **Desktop (1440px):** 2-column asymmetric layout
- **Tablet (768px):** May stack to single column
- **Mobile (390px):** Single column, featured article on top
- **Breakpoint:** ~768px
