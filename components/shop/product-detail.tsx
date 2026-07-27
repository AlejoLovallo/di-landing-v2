"use client"

import Link from "next/link"

import { AddToCartButton } from "@/components/shop/add-to-cart-button"
import { useTranslation } from "@/components/language-provider"
import { formatShopifyPrice, type ShopifyProduct } from "@/lib/shopify"

export function ProductDetail({ product }: { product: ShopifyProduct }) {
  const { t, locale } = useTranslation()
  const priceLocale = locale === "en" ? "en-US" : "es-AR"
  const image = product.featuredImage ?? product.images[0] ?? null

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <div className="aspect-[3/4] overflow-hidden bg-card">
        {image ? (
          <img
            src={image.url}
            alt={image.altText || product.title || t.shop.productFallbackAlt}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-secondary text-xs uppercase tracking-widest text-muted-foreground">
            {product.title}
          </div>
        )}
      </div>

      <div className="flex flex-col justify-center">
        <Link
          href="/tienda"
          className="mb-8 text-xs uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-primary"
        >
          ← {t.shop.backToShop}
        </Link>

        <h1 className="font-heading text-4xl font-bold text-balance text-foreground lg:text-5xl">
          {product.title}
        </h1>

        <p className="mt-6 font-heading text-2xl text-primary">
          {formatShopifyPrice(product.price, priceLocale)}
        </p>

        {product.description ? (
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground whitespace-pre-line">
            {product.description}
          </p>
        ) : null}

        <div className="mt-10">
          <AddToCartButton
            variantId={product.variantId}
            availableForSale={product.availableForSale}
          />
        </div>
      </div>
    </div>
  )
}
