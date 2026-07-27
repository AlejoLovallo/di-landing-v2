"use client"

import { useTranslation } from "@/components/language-provider"
import { images } from "@/lib/images"

export function About() {
  const { t } = useTranslation()

  return (
    <section id="destileria" className="relative overflow-hidden bg-card py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="relative">
          <img
            src={images.di.detail}
            alt={t.distillery.imageAlt}
            className="aspect-[4/5] h-full w-full border border-border object-cover lg:aspect-[3/4]"
          />
          <div className="absolute -bottom-6 -right-6 hidden border border-primary bg-background px-8 py-6 lg:block">
            <p className="font-heading text-3xl font-bold text-primary">
              {t.distillery.badgeTitle}
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
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
    </section>
  )
}
