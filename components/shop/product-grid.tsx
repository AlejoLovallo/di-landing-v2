"use client"

import Link from "next/link"

import { useTranslation } from "@/components/language-provider"
import { formatShopifyPrice, type ShopifyProductCard } from "@/lib/shopify"

export function ProductGrid({ products }: { products: ShopifyProductCard[] }) {
  const { t, locale } = useTranslation()
  const priceLocale = locale === "en" ? "en-US" : "es-AR"

  if (products.length === 0) {
    return (
      <div className="border border-border bg-card/40 px-8 py-16 text-center">
        <h2 className="font-heading text-2xl font-bold text-foreground">
          {t.shop.emptyTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
          {t.shop.emptyDescription}
        </p>
        <Link
          href="/"
          className="mt-8 inline-block text-sm uppercase tracking-widest text-primary transition-colors hover:text-foreground"
        >
          {t.shop.backHome}
        </Link>
      </div>
    )
  }

  return (
    <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/tienda/${product.handle}`} className="group block">
            <div className="aspect-[3/4] overflow-hidden bg-card">
              {product.featuredImage ? (
                <img
                  src={product.featuredImage.url}
                  alt={
                    product.featuredImage.altText ||
                    product.title ||
                    t.shop.productFallbackAlt
                  }
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-secondary text-xs uppercase tracking-widest text-muted-foreground">
                  {product.title}
                </div>
              )}
            </div>
            <div className="mt-5 space-y-2">
              <h2 className="font-heading text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                {product.title}
              </h2>
              <p className="text-sm text-muted-foreground">
                {t.shop.from}{" "}
                <span className="text-foreground">
                  {formatShopifyPrice(product.price, priceLocale)}
                </span>
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
