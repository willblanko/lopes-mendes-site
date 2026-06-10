# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Screenshot:** `docs/design-references/` (see top of page in screenshots)
- **Interaction model:** sticky, shrinks/changes appearance on scroll past ~50px

## DOM Structure
- Fixed header spanning full width
- Left: Logo image (white version at scroll top, colored at scroll)
- Center-right: horizontal nav links
- Far right: language selector "PT" with dropdown chevron
- All in a flex row, items centered vertically

## Computed Styles (exact values from getComputedStyle)

### Header / nav element
- position: fixed
- top: 0
- left: 0
- right: 0
- width: 100%
- z-index: 100 (above all sections)
- background: rgb(0, 37, 45) — #00252d
- padding: ~16px 80px (desktop), padding shrinks on scroll
- display: flex
- alignItems: center
- justifyContent: space-between
- transition: all 0.3s ease

### Logo (img)
- height: ~45px at top, ~35px when scrolled
- transition: height 0.3s ease
- Image: `/images/menu/white-motta-logo.png`

### Nav links
- color: rgb(255, 255, 255)
- fontSize: 13px
- fontWeight: 500
- fontFamily: Metropolis
- letterSpacing: 0.5px
- textTransform: none
- marginLeft: 32px (gap between links)
- hover: color shifts to rgba(255,255,255,0.7)
- transition: color 0.2s ease

### "Fale Conosco" link (last nav item before separator)
- Same styling as other links

### Separator
- borderLeft: 1px solid rgba(255,255,255,0.3)
- height: 20px
- margin: 0 20px

### Language selector (PT)
- color: rgb(255, 255, 255)
- fontSize: 13px
- fontWeight: 500
- display: flex
- alignItems: center
- gap: 6px
- cursor: pointer
- Has chevron-down icon

## States & Behaviors

### Scroll State
- **Trigger:** window scroll > 50px
- **State A (top):** padding ~16px 80px, logo height ~45px
- **State B (scrolled):** reduced padding ~10px 80px, logo height ~35px, bg remains same dark color
- **Transition:** transition: all 0.3s ease
- **Implementation:** useEffect scroll listener, toggle `scrolled` class or state

### Mobile hamburger (< 768px)
- Nav links hidden, hamburger icon shown
- Click hamburger: mobile menu slides in from right or drops down

## Assets
- Logo: `/images/menu/white-motta-logo.png`
- Language icon: `/images/icons/flag-pt.svg`
- Chevron down icon: from `icons.tsx`

## Text Content (verbatim)
Nav links:
- Quem somos
- Advogados
- Áreas de atuação
- ESG
- Notícias
- Contato
- Fale Conosco
- PT (language selector)

## Responsive Behavior
- **Desktop (1440px):** Full horizontal nav with all links visible
- **Tablet (768px):** May compress — smaller gaps
- **Mobile (390px):** Hamburger menu, nav links hidden, click to reveal dropdown
- **Breakpoint:** ~768px
