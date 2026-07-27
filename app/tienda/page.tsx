import type { Metadata } from "next"

import { ProductGrid } from "@/components/shop/product-grid"
import { ShopHero } from "@/components/shop/shop-hero"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { es } from "@/lib/i18n/dictionaries/es"
import { getProducts } from "@/lib/shopify"

export const revalidate = 60

export const metadata: Metadata = {
  title: `${es.shop.title} | Destilería Independencia`,
  description: es.shop.description,
}

export default async function TiendaPage() {
  const products = await getProducts()

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background pt-28 pb-24 lg:pt-32 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ShopHero />
          <ProductGrid products={products} />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
