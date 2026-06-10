# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** static, AOS entrance animations

## DOM Structure
- Full-viewport-height section (100vh)
- Background: dark navy #00252d
- Left column (~55% width): text content
- Right side: decorative SVG shapes (absolute/overflow positioned)
- Section ID: `intro-home`

## Computed Styles

### Section container
- backgroundColor: rgb(0, 37, 45) — #00252d
- minHeight: 100vh
- display: flex
- alignItems: center (vertically)
- paddingTop: 80px (accounts for fixed navbar height)
- paddingLeft: 80px
- paddingRight: 80px
- position: relative
- overflow: hidden

### Eyebrow label (h1 "70 ANOS DE TRAJETÓRIA")
- fontFamily: Metropolis
- fontSize: 12.705px (~13px)
- fontWeight: 600
- letterSpacing: 3.0492px (~3px)
- textTransform: uppercase
- background: linear-gradient(81.79deg, rgb(66,167,223) 17.56%, rgb(49,84,155) 99.42%, rgb(45,46,126) 160.45%)
- -webkit-background-clip: text
- background-clip: text
- -webkit-text-fill-color: transparent (transparent fill to show gradient)
- Use the `.gradient-text` utility class from globals.css
- marginBottom: 24px

### Main heading (h2 "Assessoria jurídica de alta performance")
- fontFamily: Metropolis
- fontSize: 43.56px (~44px)
- fontWeight: 300 (light)
- lineHeight: 1.2
- color: rgb(255, 255, 255)
- marginBottom: 32px
- maxWidth: 560px

### Brand label paragraph ("MOTTA FERNANDES")
- Same gradient-text treatment as eyebrow
- fontSize: 12.705px
- fontWeight: 600
- letterSpacing: 3px
- textTransform: uppercase
- marginBottom: 16px

### Horizontal rule / divider
- borderBottom: 1px solid rgba(255,255,255,0.3)
- width: 100%
- maxWidth: 450px
- marginBottom: 24px

### Description paragraph
- fontFamily: Metropolis
- fontSize: 14.52px (~15px)
- fontWeight: 400
- color: rgb(255, 255, 255)
- lineHeight: 1.6
- maxWidth: 450px
- marginBottom: 48px
- Contains <strong> for "nível de excelência" — same white color, fontWeight 600

### "Mais informações" CTA link
- display: flex
- alignItems: center
- gap: 8px
- color: rgba(255, 255, 255, 0.7)
- fontSize: 10.89px (~11px)
- fontWeight: 500
- textDecoration: none
- Has a small arrow-down icon (↓) on the left
- Image: `/images/hero/seta-pra-baixo-banner.svg`
- href: `#quem-somos` (scroll anchor)
- hover: color becomes rgba(255,255,255,1)

### Decorative shapes (right side)
- position: absolute
- right: 0
- top: 0
- height: 100%
- width: ~45% of viewport
- overflow: hidden
- Image: `/images/hero/detalhe-banner.svg`
- This SVG shows abstract geometric shapes resembling stylized "MF" letters in blue/purple/teal
- objectFit: contain
- objectPosition: right center

## States & Behaviors

### AOS entrance
- Eyebrow: data-aos="fade-up", delay 0
- Heading: data-aos="fade-up", delay 100
- Brand label: data-aos="fade-up", delay 200
- Para: data-aos="fade-up", delay 300
- CTA: data-aos="fade-up", delay 400
- **Implementation:** Use CSS animation with `animate-fade-up` or apply inline styles with opacity/transform transitions in useEffect

## Assets
- Decorative SVG: `/images/hero/detalhe-banner.svg`
- Arrow down: `/images/hero/seta-pra-baixo-banner.svg`

## Text Content (verbatim)
- Eyebrow: "70 ANOS DE TRAJETÓRIA"
- Heading: "Assessoria jurídica de alta performance"
- Brand label: "MOTTA FERNANDES"
- Paragraph: "Somos um escritório de atuação diversificada (full service) e que mantém como um dos princípios fundamentais de sua existência a criteriosa seleção de novos integrantes, permitindo, assim, a manutenção do **nível de excelência** pelo qual se tornou conhecido."
- CTA: "Mais informações"

## Responsive Behavior
- **Desktop (1440px):** Left text column ~55%, right decorative shapes visible
- **Tablet (768px):** Text column widens, shapes scale down
- **Mobile (390px):** Full width text, shapes hidden or shown behind text, padding reduced to 24px
- **Breakpoint:** ~768px
