# ContatoSection (Trabalhe Conosco) Specification

## Overview
- **Target file:** `src/components/ContatoSection.tsx`
- **Interaction model:** static form (no real submission)

## DOM Structure
- Dark background section
- Section ID: `contato`
- 2-column layout: text/info left, white form card right
- Decorative blue/purple geometric shapes in top-right corner (same abstract shapes as hero)
- Section position: relative; overflow: hidden

## Computed Styles

### Section container
- backgroundColor: rgb(0, 35, 42) — #00232a (slightly different dark from hero!)
- paddingTop: 80px
- paddingBottom: 80px
- paddingLeft: 80px
- paddingRight: 0 (form card goes to edge)
- display: flex
- alignItems: center
- position: relative
- overflow: hidden

### Left column (text)
- width: ~45%
- paddingRight: 80px

#### Eyebrow ("TRABALHE CONOSCO")
- Apply gradient-text
- fontSize: 11px
- fontWeight: 600
- letterSpacing: 3px
- textTransform: uppercase
- marginBottom: 16px

#### Heading ("Faça parte do nosso time")
- fontSize: 40px
- fontWeight: 300
- color: white
- lineHeight: 1.2
- marginBottom: 48px

#### Contact info rows
Each row has icon + text pair:
- contato: [email icon] email address
- telefone: [phone icon] phone number
- These appear as small labeled rows

### Right column (form card)
- backgroundColor: white
- padding: 48px
- width: ~55%
- boxShadow: none (or slight shadow)
- position: relative (to appear above decorative shapes)

#### Form title ("Trabalhe Conosco")
- fontSize: 24px
- fontWeight: 600
- color: rgb(23, 24, 30)
- marginBottom: 32px

#### Form inputs
Each input:
- width: 100%
- border: none
- borderBottom: 1px solid rgb(233, 236, 245)
- padding: 12px 0
- fontFamily: Metropolis
- fontSize: 14px
- color: rgb(23, 24, 30)
- backgroundColor: transparent
- outline: none
- marginBottom: 24px
- placeholder color: rgb(102, 102, 102)
- focus: borderBottomColor: #28348a

Fields:
1. Nome* (text input, placeholder "Nome*")
2. Endereço de e-mail* (email input, placeholder "Endereço de e-mail*")
3. Mensagem (textarea, placeholder "Mensagem", rows: 3)
4. File upload: label "Anexe seu currículo aqui:" + file input button

#### "Enviar Mensagem" button
- backgroundColor: #28348a
- color: white
- border: none
- width: 100%
- padding: 16px
- fontSize: 15px
- fontWeight: 600
- fontFamily: Metropolis
- cursor: pointer
- hover: backgroundColor: #223f99 (slightly lighter)
- transition: backgroundColor 0.2s

### Decorative SVG (top-right corner)
- Image: `/images/contato/contato-image.svg`
- position: absolute
- top: 0
- right: 0
- height: ~60%
- opacity: 0.5 or full
- Shows same style abstract shapes as hero

## States & Behaviors
- Form is static/visual only — no real submission needed
- Hover on button: background darkens
- Input focus: bottom border turns blue

## Assets
- Background decoration: `/images/contato/contato-image.svg`

## Text Content (verbatim)
- Eyebrow: "TRABALHE CONOSCO"
- Heading: "Faça parte do nosso time"
- Form title: "Trabalhe Conosco"
- Form fields: Nome*, Endereço de e-mail*, Mensagem, Anexe seu currículo aqui
- Button: "Enviar Mensagem"

## Responsive Behavior
- **Desktop (1440px):** 2-column, text left, form card right
- **Tablet (768px):** Single column, form below text
- **Mobile (390px):** Single column, full-width form
- **Breakpoint:** ~768px
