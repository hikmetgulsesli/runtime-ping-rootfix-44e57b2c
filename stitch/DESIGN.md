---
name: Technical Precision System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#424656'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#727687'
  outline-variant: '#c2c6d8'
  surface-tint: '#0054d6'
  primary: '#0050cb'
  on-primary: '#ffffff'
  primary-container: '#0066ff'
  on-primary-container: '#f8f7ff'
  inverse-primary: '#b3c5ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#006645'
  on-tertiary: '#ffffff'
  tertiary-container: '#008259'
  on-tertiary-container: '#e1ffec'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#001849'
  on-primary-fixed-variant: '#003fa4'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-xs:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  sidebar_width: 240px
---

## Brand & Style

The design system is engineered for high-velocity technical workflows where information density and clarity are paramount. The brand personality is authoritative, calm, and hyper-functional, catering to engineers and system administrators who require a "heads-up display" experience without cognitive overload.

The visual style follows a **Corporate / Modern** approach with a focus on **utilitarian density**. It utilizes a hybrid layout where structural navigation uses deep, immersive tones to frame high-contrast, paper-white workspace surfaces. Depth is communicated through structural lines and subtle tonal shifts rather than expressive shadows, ensuring the UI feels like a precise instrument.

## Colors

The palette is anchored by a high-contrast relationship between deep charcoal navigation and crisp white content areas. 

- **Primary (System Blue):** Used for primary actions, focus states, and active navigation indicators. It provides high visibility against both light and dark backgrounds.
- **Secondary (Deep Navy):** Reserved for the sidebar and main navigation components to provide a strong structural frame.
- **Neutral Scale:** A rigorous scale of slate grays is used for borders, secondary text, and subtle backgrounds to manage hierarchy in dense layouts.
- **Functional Colors:** Emerald, Amber, and Crimson are used strictly for status communication, ensuring technical alerts are immediately recognizable.

## Typography

This design system prioritizes legibility at small scales. **Inter** serves as the workhorse for all interface elements, providing a neutral and highly readable foundation. 

For technical data—such as IP addresses, Root IDs, and terminal output—**JetBrains Mono** is used to ensure character distinction (e.g., distinguishing '0' from 'O'). 

Typography is kept intentionally compact. The base body size is 14px for primary content and 13px for secondary meta-data to maximize the information visible on a single screen without requiring excessive scrolling.

## Layout & Spacing

The layout utilizes a **fixed-fluid hybrid model**. The sidebar navigation is fixed at 240px, while the main content area utilizes a fluid grid that expands to fill the viewport.

A strict **4px/8px spacing grid** governs all element relationships. 
- **Internal Padding:** Use 8px or 12px for component internals (cards, table cells).
- **External Margins:** Use 16px or 24px to separate major functional blocks.
- **Density:** In high-data views (tables/lists), vertical padding is reduced to 4px or 8px to increase row count per screen.

## Elevation & Depth

Hierarchy is established primarily through **tonal layers and low-contrast outlines** rather than shadows. 

- **Level 0 (Canvas):** The base background (#F8FAFC).
- **Level 1 (Surface):** Cards and content blocks (#FFFFFF) with a 1px border (#E2E8F0).
- **Level 2 (Interaction):** Hover states use a subtle tint change or a very slight, sharp shadow (2px blur, 0.05 opacity) to indicate clickability.
- **Navigation:** The sidebar uses its deep navy fill to sit "behind" or "under" the main white content surface, creating a clear architectural split.

## Shapes

The design system uses a **Soft (4px-6px)** shape language. This low radius communicates precision and aligns with the technical, "engineered" nature of the tool.

- **Buttons & Inputs:** 4px radius.
- **Cards & Modals:** 6px radius.
- **Status Badges:** 2px or 4px radius (avoiding fully rounded/pill shapes to maintain the professional aesthetic).

## Components

### Buttons
Buttons are flat with high-contrast labels. Primary buttons use the System Blue background; secondary buttons use a white background with a gray border. Use 8px horizontal and 4px vertical padding for a compact feel.

### Data Tables
Tables are the core of the workflow. Use 1px #E2E8F0 horizontal borders only. Header cells use a light gray background (#F1F5F9) and `label-xs` typography. Row hover states use #F8FAFC.

### Status Badges
Badges use a subtle background tint (10% opacity of the status color) with a bold 1px border of the same color. Text is rendered in the dark version of the status color for accessibility.

### Compact Cards
Metrics cards should be minimal. Titles use `label-xs` in neutral-500. Values use `headline-sm`. No heavy shadows; use a 1px neutral-200 border.

### Input Fields
Inputs use a white background, 1px neutral-300 border, and a 2px System Blue ring on focus. Use `body-sm` for input text to maintain density.