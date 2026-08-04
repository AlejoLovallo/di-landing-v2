import type { Metadata } from "next"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { StoreCatalog } from "@/components/store-catalog"
import { es } from "@/lib/i18n/dictionaries/es"

export const metadata: Metadata = {
  title: es.store.metaTitle,
  description: es.store.metaDescription,
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
