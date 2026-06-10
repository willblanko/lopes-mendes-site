# Page Topology — mottafernandes.com.br

## Page Layout
- Single-page scroll with anchor links
- Fixed/sticky navbar overlays all content (z-index above everything)
- No scroll container wrapper — uses native browser scroll
- AOS (Animate on Scroll) library for entrance animations
- Swiper.js for team carousel

## Sections (top to bottom)

| # | ID | Name | Bg Color | Interaction |
|---|-----|------|----------|-------------|
| 1 | `#menu` | Navbar | rgb(0,37,45) / transparent on scroll | sticky, shrinks on scroll |
| 2 | `#intro-home` | Hero | rgb(0,37,45) | static + AOS entrance |
| 3 | `#quem-somos` | About / Quem Somos | white | AOS entrance |
| 4 | `#nosso-time` | Team / Nosso Time | rgb(0,37,45) | Swiper carousel, click-driven |
| 5 | `#area-atuacao` | Practice Areas | white | AOS entrance, 2-col grid |
| 6 | `#blog-novidades` | News / Blog | white | static |
| 7 | `#contato` | Work With Us / Contato | rgb(0,35,42) | contact form |
| 8 | `#footer` | Footer | white | static |
| 9 | footer-bottom | Footer Bottom Bar | white | static |

## Z-index Layers
1. Navbar — top layer (sticky, z-index ~100)
2. Page sections — normal flow
3. Decorative SVG shapes — positioned, behind content

## Dependencies
- Navbar must be built first as it overlays all sections
- Team section depends on Swiper carousel component
- AOS class `aos-init aos-animate` triggers entrance animations on scroll

## Navigation Links
- Quem somos → `#quem-somos`
- Advogados → `/equipe/`
- Áreas de atuação → `#area-atuacao`
- ESG → dedicated page
- Notícias → `/blog/`
- Contato → `#contato`
- Fale Conosco → dedicated page
- PT → language selector (dropdown)
