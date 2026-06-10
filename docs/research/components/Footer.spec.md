# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** static

## DOM Structure
- Section ID: `footer`
- Two parts:
  1. **Main footer** (white bg): logo + social icons left, 3-column nav links right
  2. **Footer bottom bar** (white bg, top border): 3 office locations + copyright bar

## Computed Styles

### Main footer container
- backgroundColor: white
- paddingTop: 64px
- paddingBottom: 64px
- paddingLeft: 80px
- paddingRight: 80px
- display: flex
- gap: 80px
- borderBottom: 1px solid rgb(233, 236, 245)

### Left side (logo + social)
- display: flex
- flexDirection: column
- alignItems: flex-start
- gap: 24px
- width: ~30%

#### Footer logo
- Image: `/images/footer/logo.png`
- height: ~70px
- width: auto
- Shows full color "MOTTA FERNANDES ADVOGADOS 70 ANOS" logo

#### Social icons row
- display: flex
- gap: 12px

##### Social icon button (Instagram / LinkedIn)
- width: 40px
- height: 40px
- border: 1px solid rgb(233, 236, 245)
- borderRadius: 50%
- display: flex
- alignItems: center
- justifyContent: center
- color: rgb(23, 24, 30)
- hover: backgroundColor: rgb(233, 236, 245)
- Instagram link: `https://www.instagram.com/mottafernandes/`
- LinkedIn link: `https://www.linkedin.com/company/motta-fernandes-advogados/`
- Icons: use InstagramIcon and LinkedInIcon from icons.tsx

### Right side (nav columns)
- display: flex
- gap: 80px
- flex: 1

#### Nav column links
- fontFamily: Metropolis
- fontSize: 14px
- fontWeight: 400
- color: rgb(59, 62, 67)
- textDecoration: none
- display: block
- marginBottom: 20px
- hover: color: #28348a

**Column 1:**
- Quem somos
- ESG
- Fale Conosco

**Column 2:**
- Advogados
- Notícias
- PT (language selector with dropdown)

**Column 3:**
- Áreas de atuação
- Contato
- Compliance e Privacidade/LGPD

#### Language selector "PT"
- display: flex
- alignItems: center
- gap: 6px
- color: rgb(59, 62, 67)
- cursor: pointer
- Has ChevronDownIcon

### Scroll-to-top button (floating right)
- position: absolute OR float: right
- width: 44px
- height: 44px
- border: 1px solid rgb(233, 236, 245)
- borderRadius: 50%
- display: flex
- alignItems: center
- justifyContent: center
- color: rgb(23, 24, 30)
- cursor: pointer
- Image: `/images/footer/arrow-top.svg` or ChevronUpIcon
- onClick: window.scrollTo({ top: 0, behavior: 'smooth' })

---

## Footer Bottom Bar

### Offices row
- display: grid
- gridTemplateColumns: repeat(3, 1fr)
- gap: 40px
- paddingTop: 48px
- paddingBottom: 32px
- paddingLeft: 80px
- paddingRight: 80px
- borderTop: 1px solid rgb(233, 236, 245)

#### Each office block
- display: flex
- gap: 16px

##### Location pin icon
- Use LocationPinIcon from icons.tsx
- color: #28348a
- width: 20px
- flexShrink: 0

##### Office text
City name (h3):
- fontSize: 16px
- fontWeight: 600
- color: rgb(23, 24, 30)
- letterSpacing: 2px
- marginBottom: 8px

Address lines:
- fontSize: 13px
- color: rgb(102, 102, 102)
- lineHeight: 1.6

Phone:
- fontSize: 13px
- fontWeight: 600
- color: rgb(23, 24, 30)
- marginTop: 8px

### Copyright bar
- display: flex
- justifyContent: space-between
- alignItems: center
- paddingTop: 16px
- paddingBottom: 24px
- paddingLeft: 80px
- paddingRight: 80px
- borderTop: 1px solid rgb(233, 236, 245)

#### Copyright text
- fontSize: 12px
- color: rgb(102, 102, 102)
- content: "© Motta Fernandes 2024 – Todos os direitos reservados."

#### Policies link
- fontSize: 12px
- color: rgb(102, 102, 102)
- content: "Nossas políticas: Compliance e Privacidade/LGPD."
- href: "#"

#### "Desenvolvido por" row
- fontSize: 12px
- color: rgb(102, 102, 102)
- display: flex; alignItems: center; gap: 8px
- Novadata logo: `/images/footer/novadata.png`
- Road logo: `/images/footer/road.png`
- Both ~60px wide images

## Text Content (verbatim)

### Office Locations
**Rio de Janeiro**
Av. Almirante Barroso, 52 – 13º andar
20031-000 – Rio de Janeiro – RJ, Brasil
+55 21 2533.2200

**São Paulo**
Rua Fidêncio Ramos, 213 – 1º andar
04551-010 – São Paulo – SP, Brasil
+55 11 2192.9300

**Brasília**
SHIS QL 8 Conjunto 2, casa 01
71620-225 Lago Sul – Brasília – DF, Brasil
+55 61 4042.8200

### Copyright
© Motta Fernandes 2024 – Todos os direitos reservados.
Nossas políticas: Compliance e Privacidade/LGPD.
Desenvolvido por: [Novadata logo] | [Road logo]

## Assets
- Footer logo: `/images/footer/logo.png`
- Instagram: `/images/footer/instagram.svg`
- LinkedIn: `/images/footer/linkedin.svg`
- Arrow top: `/images/footer/arrow-top.svg`
- Novadata: `/images/footer/novadata.png`
- Road: `/images/footer/road.png`

## Responsive Behavior
- **Desktop (1440px):** 2-column main footer, 3-column offices
- **Tablet (768px):** Logo stacks above nav, offices may be 2-column
- **Mobile (390px):** All single column, offices stack vertically
- **Breakpoint:** ~768px
