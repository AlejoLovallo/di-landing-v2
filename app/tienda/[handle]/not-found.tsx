import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { es } from "@/lib/i18n/dictionaries/es"

export default function ProductNotFound() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background pt-28 pb-24">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10">
          <h1 className="font-heading text-3xl font-bold text-foreground">
            {es.shop.emptyTitle}
          </h1>
          <p className="mt-4 text-muted-foreground">
            {es.shop.emptyDescription}
          </p>
          <Link
            href="/tienda"
            className="mt-8 inline-block text-sm uppercase tracking-widest text-primary transition-colors hover:text-foreground"
          >
            {es.shop.backToShop}
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
