# Behavior Bible — mottafernandes.com.br

## Scroll Behaviors

### Navbar Shrink on Scroll
- **Trigger:** scroll past ~50px
- **State A (top):** full size, background rgb(0,37,45), larger padding
- **State B (scrolled):** smaller, same bg, tighter padding, smaller logo
- **Transition:** CSS transition on padding/height, ~0.3s ease
- **Implementation:** scroll event listener + JS class toggle

### AOS (Animate on Scroll) Entrances
- **Library:** AOS v2.3.1 (`unpkg.com/aos@2.3.1/dist/aos.css`)
- All elements with `data-aos` attribute animate in on viewport entry
- Default animation: fade-up or fade-in
- Classes: `aos-init` (registered), `aos-animate` (in viewport)
- Elements affected: headings, paragraphs, images, cards
- **Implementation:** Initialize AOS in useEffect: `AOS.init({ duration: 800, once: true })`

## Click Behaviors

### Team Carousel (Nosso Time)
- **Type:** Swiper.js horizontal carousel
- **Navigation:** Left/right arrow buttons
- **Slides per view:** 3-4 at desktop, fewer at mobile
- **Loop:** true
- **Navigation arrows:** custom SVG icons positioned at sides
- **Implementation:** Use a client-side Swiper component or custom scroll

### Language Selector (PT dropdown)
- **Trigger:** click on PT button
- **Behavior:** dropdown appears with PT/EN options
- **Implementation:** simple dropdown toggle

## Hover Behaviors

### Nav Links
- **Hover:** color changes to accent/lighter blue, underline may appear
- **Transition:** ~0.2s

### "Saiba mais" / "Conheça nosso escritório" Links
- **Style:** teal/accent color with arrow icon
- **Hover:** color shift, arrow moves right slightly

### Team Cards
- **Hover:** name/overlay may appear over photo

## Responsive Behavior

### Desktop (1440px)
- Navbar: full horizontal with all links visible
- Hero: left text + right decorative shapes
- Quem Somos: 2-col (text left, image right)
- Nosso Time: 3-4 slides visible in carousel
- Practice Areas: 2-column grid
- News: 1 featured left + 2 compact right
- Contato: text left + form right
- Footer: logo+social left, 3 nav columns right

### Tablet (768px)
- Navbar may collapse to hamburger
- Hero: text stacks above shapes
- 2-col layouts may become 1-col

### Mobile (390px)
- Navbar: hamburger menu
- All sections stack vertically
- Carousel shows 1 slide at a time
- Practice areas: 1-column grid

## Decorative Elements
- Hero right side: large abstract SVG shapes (partial "MF" letterforms in blue/purple/teal)
- These are positioned absolutely and overflow the section
- Source: `media/pagina/detalhe-banner.svg`
- Corner accent shapes appear in contato section too
