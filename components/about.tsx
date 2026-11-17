"use client"

import Image from "next/image"

import { useTranslation } from "@/components/language-provider"
import { images } from "@/lib/images"

export function About() {
  const { t } = useTranslation()
  const town = t.distillery.town

  return (
    <section id="destileria" className="relative overflow-hidden bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="relative aspect-[4/5] w-full border border-border lg:aspect-[3/4]">
              <Image
                src={images.di.detail}
                alt={t.distillery.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden border border-accent bg-background px-8 py-6 lg:block">
              <p className="font-heading text-3xl font-bold text-accent">
                {t.distillery.badgeTitle}
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-subtle-foreground">
                {t.distillery.badgeSubtitle}
              </p>
            </div>
          </div>

          <div>
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
              <span className="h-px w-10 bg-primary" />
              {t.distillery.label}
            </p>
            <h2 className="font-heading text-4xl font-bold text-balance text-foreground lg:text-5xl">
              {t.distillery.title}
            </h2>
            <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground">
              {t.distillery.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {t.distillery.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          id="capitan-sarmiento"
          className="mt-20 scroll-mt-28 border-t border-border pt-16 lg:mt-24 lg:pt-20"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
                <span className="h-px w-10 bg-primary" />
                {town.label}
              </p>
              <h3 className="font-heading text-3xl font-bold text-balance text-foreground lg:text-4xl">
                {town.title}
              </h3>
              <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground">
                {town.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="relative order-1 aspect-[4/3] w-full border border-border lg:order-2">
              <Image
                src={images.di.still}
                alt={town.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
