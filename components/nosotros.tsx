"use client"

import { useTranslation } from "@/components/language-provider"
import { images } from "@/lib/images"

export function Nosotros() {
  const { t } = useTranslation()

  return (
    <section id="nosotros" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="order-2 lg:order-1">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-10 bg-primary" />
            {t.aboutUs.label}
          </p>
          <h2 className="font-heading text-4xl font-bold text-balance text-foreground lg:text-5xl">
            {t.aboutUs.title}
          </h2>
          <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground">
            {t.aboutUs.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 grid gap-6">
            {t.aboutUs.values.map((value) => (
              <div key={value.title} className="border-l-2 border-primary pl-5">
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-subtle-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <img
            src={images.di.us}
            alt={t.aboutUs.imageAlt}
            className="h-full w-full border border-border object-cover"
          />
          <div className="absolute -bottom-6 -left-6 hidden border border-primary bg-background px-8 py-6 lg:block">
            <p className="font-heading text-3xl font-bold text-primary">DI</p>
            <p className="text-xs uppercase tracking-[0.25em] text-subtle-foreground">
              {t.aboutUs.label}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
