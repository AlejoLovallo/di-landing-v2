"use client"

import Image from "next/image"

import { useTranslation } from "@/components/language-provider"
import { images } from "@/lib/images"

const awardImages = [
  images.brands.capitanAwardGranOro,
  images.brands.capitanAwardOroCopa,
  images.brands.capitanAwardPlata,
] as const

export function Awards() {
  const { t } = useTranslation()

  return (
    <section id="premios" className="scroll-mt-28 bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 max-w-2xl lg:mb-16">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-10 bg-primary" />
            {t.awards.label}
          </p>
          <h2 className="font-heading text-4xl font-bold text-balance text-foreground lg:text-5xl">
            {t.awards.title}
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.awards.description}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.awards.items.map((award, index) => (
            <article
              key={award.medal + award.detail}
              className="flex flex-col gap-4 border border-border bg-background p-5 transition-colors hover:border-accent/60 lg:p-6"
            >
              <div className="overflow-hidden border border-border bg-secondary">
                <Image
                  src={awardImages[index] ?? awardImages[0]}
                  alt={award.imageAlt}
                  width={640}
                  height={360}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="aspect-[16/9] w-full object-cover object-center"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-primary">
                  {award.brand}
                </p>
                <p className="mt-2 font-heading text-xl font-bold text-accent lg:text-2xl">
                  {award.medal}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {award.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
