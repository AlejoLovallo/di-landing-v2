/**
 * Destilería Independencia design tokens.
 * CSS runtime values live in app/globals.css — keep both in sync.
 */

export const brand = {
  navy: {
    950: "#1A1F24",
    900: "#2C343C",
    800: "#3A4450",
    700: "#4E5A68",
    500: "#7A8A9A",
  },
  blue: {
    400: "#7A9BC4",
    500: "#5B7FA6",
  },
  gold: {
    500: "oklch(0.72 0.13 75)",
  },
  white: "#FFFFFF",
  text: {
    body: "oklch(0.93 0.004 240)",
    subtle: "oklch(0.76 0.012 240)",
  },
  whatsapp: "#25D366",
} as const

export const typography = {
  label: "text-xs uppercase tracking-[0.4em]",
  sectionTitle: "font-heading text-4xl font-bold lg:text-5xl",
  sectionSubtitle: "font-heading text-xl lg:text-2xl",
  body: "text-base leading-relaxed text-muted-foreground",
  bodyLarge: "text-lg leading-relaxed text-muted-foreground",
  subtle: "text-sm text-subtle-foreground",
} as const

export const spacing = {
  section: "py-24 lg:py-32",
  container: "mx-auto max-w-7xl px-6 lg:px-10",
} as const

export const radius = {
  brand: "rounded-none",
} as const
