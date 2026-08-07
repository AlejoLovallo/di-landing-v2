import type { Metadata } from "next"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { StoreCatalog } from "@/components/store-catalog"
import { es } from "@/lib/i18n/dictionaries/es"
import { SITE_URL } from "@/lib/seo/constants"

export const metadata: Metadata = {
  title: es.store.metaTitle,
  description: es.store.metaDescription,
  alternates: {
    canonical: "/tienda",
  },
  openGraph: {
    title: es.store.metaTitle,
    description: es.store.metaDescription,
    url: `${SITE_URL}/tienda`,
    images: [{ url: "/og.jpg", alt: "Destilería Independencia" }],
  },
}

export default function TiendaPage() {
  return (
    <>
      <SiteHeader homeHref="/" />
      <StoreCatalog />
      <SiteFooter />
    </>
  )
}
