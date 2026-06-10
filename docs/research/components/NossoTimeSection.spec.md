# NossoTimeSection Specification

## Overview
- **Target file:** `src/components/NossoTimeSection.tsx`
- **Interaction model:** click-driven Swiper carousel (prev/next buttons)

## DOM Structure
- Dark background section, full-width
- Section ID: `nosso-time`
- Top: section header (eyebrow + heading + link)
- Below: horizontal carousel of lawyer photo cards
- Carousel navigation: left/right arrow buttons
- Left decorative element: partial circle/shape in dark teal

## Computed Styles

### Section container
- backgroundColor: rgb(0, 37, 45) — #00252d
- paddingTop: 80px
- paddingBottom: 0 (photos extend to bottom edge)
- paddingLeft: 80px
- paddingRight: 80px
- position: relative
- overflow: hidden

### Section header row
- display: flex
- justifyContent: space-between
- alignItems: flex-end
- marginBottom: 48px

#### Eyebrow ("NOSSO TIME")
- Apply gradient-text class
- fontSize: 11px
- fontWeight: 600
- letterSpacing: 3px
- textTransform: uppercase
- marginBottom: 8px

#### Heading row
- "Conheça nossa " — fontSize: 32px, fontWeight: 300, color: white
- "equipe" — fontSize: 32px, fontWeight: 700, color: white (bold)
- Combined in one h2 element

#### "Conheça nosso time completo" link
- color: rgba(255,255,255,0.7)
- fontSize: 13px
- fontWeight: 500
- display: flex
- alignItems: center
- gap: 6px
- ChevronRight icon after text
- hover: color white

### Carousel / Swiper container
- display: flex
- gap: 24px
- overflowX: hidden (clipped, Swiper handles it)

### Lawyer card
- position: relative
- width: 350px (desktop)
- flex-shrink: 0
- overflow: hidden
- backgroundColor: transparent

#### Photo
- width: 100%
- height: 450px
- objectFit: cover
- objectPosition: top center
- display: block

#### Name overlay (shows at bottom of card or on hover)
- position: absolute
- bottom: 0
- left: 0
- right: 0
- padding: 16px
- background: linear-gradient(to top, rgba(0,37,45,0.9) 0%, transparent 100%)
- color: white
- fontSize: 16px
- fontWeight: 600

### Navigation arrows
- position: absolute (on carousel sides)
- width: 44px
- height: 44px
- borderRadius: 50%
- border: 1px solid rgba(255,255,255,0.3)
- backgroundColor: transparent
- color: white
- display: flex
- alignItems: center
- justifyContent: center
- cursor: pointer
- hover: backgroundColor: rgba(255,255,255,0.1)
- Left arrow: ChevronLeftIcon, Right arrow: ChevronRightIcon

### Background SVG decoration
- Image: `/images/nosso-time/background-swiper.svg`
- position: absolute
- left: 0
- top: 50%
- transform: translateY(-50%)
- opacity: 0.3
- Large decorative circle/arc

## Team member data (carousel items)
Use local photos from `/images/team/`:
- Alaor de Lima Filho — `Alaor_de_Lima_Filho.webp`
- Alice de Almeida Lima — `Alice_de_Almeida_Lima.webp`
- Antonio Joaquim Pires de Albuquerque — `Antonio_Joaquim.webp`
- Ariane Baars de Arruda Botelho — `Ariane_Botelho.webp`
- Bruno Valladão Guimarães Ferreira — `Bruno_Ferreira.webp`
- Caline Araujo — `Caline_Araujo.jpg`
- Camila Spinelli — `Camila_Spinelli.webp`
- Delvio Denardi — `Delvio_Denardi.png`
- Denise de Sousa e Silva Alvarenga — `Denise_Alvarenga.webp`
- Diogo Dias — `Diogo_Dias.webp`
- Douglas Belchior — `Douglas_Belchior.jpg`
- Eduardo Garcia — `Eduardo_Garcia.webp`
- Fernanda Lopez Marques da Silva — `Fernanda_Lopez.webp`
- Fernando Lobo — `Fernando_Lobo.webp`
- Fernando Stacchini — `Fernando_Stacchini.webp`
- Gabriel Gonçalves — `Gabriel_Goncalves.webp`
- Giovanna Monreal — `Giovanna_Monreal.png`
- Giovanna Ribeiro Santos — `Giovanna_Ribeiro.webp`
- Guilherme Traub — `Guilherme_Traub.webp`
- Gustavo Goiabeira de Oliveira — `Gustavo_Oliveira.webp`
- Helena Luísa Miranda d'Oliveira Gomez — `Helena_Gomez.webp`
- Horacio Bernardes Neto — `Horacio_Bernardes.webp`
- Isadora Velasco — `Isadora_Velasco.webp`
- Ítalo (unknown surname) — `Italo.webp`
- Joyce Oliveira — `Joyce_Oliveira.jpg`
- Karolina Dias — `Karolina_Dias.webp`
- Leonardo Rodrigues Tavares Meirinho — `Leonardo_Meirinho.webp`
- Lucca Cabrini — `Lucca_Cabrini.webp`
- Luis Roux — `Luis_Roux.webp`
- Marceli Kobayashi — `Marceli_Kobayashi.jpg`
- Marcelo Moura Guedes — `Marcelo_Guedes.webp`
- Márcio Marçal — `Marcio_Marcal.webp`
- Márcio Monteiro Gea — `Marcio_Monteiro.webp`
- Maria Alice Doria — `Maria_Alice_Doria.webp`
- Mariana de Moraes Medros Miranda — `Mariana_Miranda.webp`
- Marta Cuellar — `Marta_Cuellar.webp`
- Matheus Issa — `Matheus_Issa.jpg`
- Melissa Spera — `Melissa_Spera.webp`
- Natália Lembo — `Natalia_Lembo.webp`
- Patrícia Lynch Pupo — `Patricia_Pupo.webp`
- Regina Lynch — `Regina_Lynch.webp`
- Renata Ciampi — `Renata_Ciampi.webp`
- Roberto Liesegang — `Roberto_Liesegang.webp`
- Rodrigo Jacobina — `Rodrigo_Jacobina.webp`
- Tatiana Maia Ribeiro — `Tatiana_Ribeiro.webp`
- Thaís de Almeida Travanca — `Thais_Travanca.webp`

## Implementation Note
Implement as a simple CSS scroll carousel (no Swiper dependency):
- Use `overflow-x: auto` with snap points (`scroll-snap-type: x mandatory`) OR
- Use React state with translateX animation for prev/next
- Show 3-4 cards at desktop, 1-2 at tablet, 1 at mobile

## Responsive Behavior
- **Desktop (1440px):** ~3.5 cards visible, arrows on sides
- **Tablet (768px):** 2 cards visible
- **Mobile (390px):** 1 card visible, arrows below
- **Breakpoint:** 768px
