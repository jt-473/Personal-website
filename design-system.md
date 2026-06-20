# Design System — Jovan Tomy Portfolio

You are building a personal portfolio with a dark, minimal visual identity.

## Typography

- **Headings:** Hussar Bold — self-hosted from `/fonts/HussarBoldWeb.otf`
- **Body / Descriptions:** Roboto — Google Fonts
- **Personality / Accent:** Schoolbell — Google Fonts
- Headings: bold, tracking tight
- Body: regular weight
- Size Scale: 12 / 14 / 16 / 20 / 24 / 32 / 40 / 48px

## Color Palette

- Primary accent: TBD — placeholder `#FFFFFF` until decided
- Secondary accent: TBD — placeholder `#FFFFFF` until decided
- Background: `#0A0A0A` — main canvas
- Surface: `#141414` — cards, modals, elevated elements
- Text Primary: `#FFFFFF` — headings, body copy
- Text Secondary: `#A0A0A0` — captions, helper text, placeholders
- Border: `#2A2A2A` — dividers, input outlines
- Success: `#22C55E`
- Warning: `#F59E0B`
- Error: `#EF4444`

## Spacing Scale

Use a 4px base unit. Common values: 4, 8, 12, 16, 24, 32, 48, 64px

## Border Radius

- Small (inputs, chips): 4px
- Medium (cards, buttons): 8px
- Large (modals, containers): 16px
- Full (avatars, pills): 9999px

## Shadows

- Subtle: 0 1px 2px rgba(0,0,0,0.05)
- Medium: 0 4px 12px rgba(0,0,0,0.1)
- Strong: 0 8px 24px rgba(0,0,0,0.15)

## Component Patterns

- **Buttons:** solid fill, 8px radius, padding 12px 24px, hover darkens slightly
- **Inputs:** 48px height, 12px padding, `#2A2A2A` border, white glow on focus
- **Cards:** 24px padding, medium shadow, `#2A2A2A` border, `#141414` background

## Rules

1. Never introduce colors outside this palette
2. Always use the spacing scale — no arbitrary values
3. Maintain consistent border radius per element type
4. When in doubt, add more whitespace
5. Accent colors TBD — leave placeholders and revisit
