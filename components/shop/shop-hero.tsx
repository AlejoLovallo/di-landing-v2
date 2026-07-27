"use client"

import { useTranslation } from "@/components/language-provider"

export function ShopHero() {
  const { t } = useTranslation()

  return (
    <header className="mb-16 max-w-2xl">
      <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
        <span className="h-px w-10 bg-primary" />
        {t.shop.label}
      </p>
      <h1 className="font-heading text-4xl font-bold text-balance text-foreground lg:text-5xl">
        {t.shop.title}
      </h1>
      <p className="mt-4 font-heading text-xl text-pretty text-primary lg:text-2xl">
        {t.shop.subtitle}
      </p>
      <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
        {t.shop.description}
      </p>
    </header>
  )
}
