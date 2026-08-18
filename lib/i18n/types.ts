export type Locale = "es" | "en"

export type ContactReason =
  | "distribution"
  | "events"
  | "special_order"
  | "press"
  | "other"

export type StoreProductCopy = {
  name: string
  category: string
  description: string
  imageAlts: [string, string]
}

export type Dictionary = {
  meta: {
    title: string
    description: string
  }
  nav: {
    brands: string
    services: string
    distillery: string
    aboutUs: string
    process: string
    contact: string
    shop: string
    openMenu: string
  }
  store: {
    metaTitle: string
    metaDescription: string
    label: string
    title: string
    subtitle: string
    backHome: string
    viewImage: string
    buy: string
    brands: {
      di: { name: string; tagline: string }
      pdg: { name: string; tagline: string }
    }
    products: {
      "capitan-gin-etiqueta-negra": StoreProductCopy
      "capitan-gin-london-dry": StoreProductCopy
      "pdg-gran-reserva": StoreProductCopy
      "pdg-icono": StoreProductCopy
      "pdg-the-blend": StoreProductCopy
    }
  }
  hero: {
    tagline: string
    title: string
    paragraphs: string[]
    ctaBrands: string
    ctaDistillery: string
    imageAlt: string
  }
  stats: Array<{ value: string; label: string }>
  brands: {
    label: string
    title: string
    subtitle: string
    description: string
    buyOnline: string
    viewInstagram: string
    items: Array<{
      name: string
      category: string
      description: string
      imageAlt: string
      secondaryImageAlt?: string
      galleryAlts?: string[]
    }>
  }
  services: {
    label: string
    title: string
    subtitle: string
    items: Array<{
      name: string
      description: string
      features: string[]
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
    whatsapp: string
    followInstagram: string
    imageAlt: string
    whatsappMessage: string
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
  ageGate: {
    title: string
    question: string
    confirm: string
    deny: string
  }
}
