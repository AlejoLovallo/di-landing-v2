export type Locale = "es" | "en"

export type ContactReason =
  | "distribution"
  | "events"
  | "special_order"
  | "press"
  | "other"

export type Dictionary = {
  meta: {
    title: string
    description: string
  }
  nav: {
    brands: string
    distillery: string
    aboutUs: string
    process: string
    contact: string
    shop: string
    openMenu: string
  }
  hero: {
    tagline: string
    title: string
    description: string
    ctaBrands: string
    ctaDistillery: string
    imageAlt: string
  }
  stats: Array<{ value: string; label: string }>
  brands: {
    label: string
    title: string
    description: string
    buyOnline: string
    viewInstagram: string
    items: Array<{
      name: string
      category: string
      description: string
      imageAlt: string
    }>
  }
  distillery: {
    label: string
    title: string
    paragraphs: string[]
    highlights: string[]
    badgeTitle: string
    badgeSubtitle: string
    imageAlt: string
  }
  aboutUs: {
    label: string
    title: string
    paragraphs: string[]
    values: Array<{ title: string; description: string }>
    imageAlt: string
  }
  process: {
    label: string
    title: string
    steps: Array<{ number: string; title: string; description: string }>
  }
  contact: {
    label: string
    title: string
    description: string
    writeUs: string
    followInstagram: string
    imageAlt: string
    modal: {
      title: string
      description: string
      firstName: string
      lastName: string
      email: string
      phone: string
      company: string
      companyOptional: string
      reason: string
      reasonPlaceholder: string
      reasons: Record<ContactReason, string>
      submit: string
      submitting: string
      success: string
      error: string
      configError: string
      close: string
    }
  }
  footer: {
    description: string
    brands: string
    shops: string
    copyright: string
    legal: string
    brandLinks: string[]
    shopLinks: string[]
  }
  language: {
    es: string
    en: string
  }
}
