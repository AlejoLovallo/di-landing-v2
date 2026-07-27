import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ProductDetail } from "@/components/shop/product-detail"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { es } from "@/lib/i18n/dictionaries/es"
import { getProductByHandle, getProducts } from "@/lib/shopify"

export const revalidate = 60
export const dynamicParams = true

type ProductPageProps = {
  params: Promise<{ handle: string }>
}

export async function generateStaticParams() {
  const products = await getProducts()
  return products.map((product) => ({ handle: product.handle }))
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { handle } = await params
  const product = await getProductByHandle(handle)

  if (!product) {
    return {
      title: `${es.shop.title} | Destilería Independencia`,
    }
  }

  return {
    title: `${product.title} | ${es.shop.title}`,
    description: product.description || es.shop.description,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params
  const product = await getProductByHandle(handle)

  if (!product) {
    notFound()
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background pt-28 pb-24 lg:pt-32 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ProductDetail product={product} />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
