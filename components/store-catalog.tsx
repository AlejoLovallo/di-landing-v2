"use client"

import Image from "next/image"
import { useState } from "react"

import { useTranslation } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import {
  productsByBrand,
  type StoreBrand,
  type StoreProduct,
  type StoreProductId,
} from "@/lib/store/products"
import { cn } from "@/lib/utils"

function ProductCard({ product }: { product: StoreProduct }) {
  const { t } = useTranslation()
  const [activeImage, setActiveImage] = useState(0)
  const copy = t.store.products[product.id as StoreProductId]

  return (
    <article className="group flex flex-col overflow-hidden border border-border bg-card transition-colors hover:border-accent/60">
      <div className="relative aspect-[3/4] overflow-hidden bg-white">
        {product.images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={copy.imageAlts[index]}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={cn(
              "object-contain p-4 transition-all duration-500",
              activeImage === index
                ? "scale-100 opacity-100"
                : "scale-105 opacity-0"
            )}
          />
        ))}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex gap-2">
          {product.images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveImage(index)}
              aria-label={`${t.store.viewImage} ${index + 1}`}
              aria-pressed={activeImage === index}
              className={cn(
                "h-14 w-11 overflow-hidden border bg-white transition-colors",
                activeImage === index
                  ? "border-accent"
                  : "border-border opacity-70 hover:border-accent/60 hover:opacity-100"
              )}
            >
              <Image
                src={src}
                alt=""
                width={88}
                height={112}
                className="h-full w-full object-contain p-0.5"
              />
            </button>
          ))}
        </div>

        <div className="flex flex-1 flex-col">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">
            {copy.category}
          </span>
          <h3 className="mt-2 font-heading text-2xl font-bold text-foreground">
            {copy.name}
          </h3>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            {copy.description}
          </p>
          <Button
            variant="brand"
            nativeButton={false}
            render={
              <a href={product.buyUrl} target="_blank" rel="noreferrer" />
            }
            className="mt-6 w-full"
          >
            {t.store.buy}
          </Button>
        </div>
      </div>
    </article>
  )
}

function BrandSection({ brand }: { brand: StoreBrand }) {
  const { t } = useTranslation()
  const products = productsByBrand(brand)
  const brandCopy = t.store.brands[brand]

  return (
    <section className="scroll-mt-28">
      <div className="mb-8 max-w-2xl">
        <p className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
          <span className="h-px w-10 bg-primary" />
          {brandCopy.tagline}
        </p>
        <h2 className="font-heading text-3xl font-bold text-foreground lg:text-4xl">
          {brandCopy.name}
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export function StoreCatalog() {
  const { t } = useTranslation()

  return (
    <main className="bg-background pt-28 pb-24 lg:pt-32 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 max-w-2xl lg:mb-20">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-10 bg-primary" />
            {t.store.label}
          </p>
          <h1 className="font-heading text-4xl font-bold text-balance text-foreground lg:text-5xl">
            {t.store.title}
          </h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.store.subtitle}
          </p>
          <a
            href="/"
            className="mt-6 inline-flex text-sm uppercase tracking-widest text-primary transition-colors hover:text-accent"
          >
            ← {t.store.backHome}
          </a>
        </div>

        <div className="space-y-20 lg:space-y-28">
          <BrandSection brand="di" />
          <BrandSection brand="pdg" />
        </div>
      </div>
    </main>
  )
}
