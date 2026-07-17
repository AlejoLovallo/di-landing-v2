"use client"

import { useTranslation } from "@/components/language-provider"

export function Services() {
  const { t } = useTranslation()

  return (
    <section id="servicios" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-10 bg-primary" />
            {t.services.label}
          </p>
          <h2 className="font-heading text-4xl font-bold text-balance text-foreground lg:text-5xl">
            {t.services.title}
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {t.services.items.map((service) => (
            <article
              key={service.name}
              className="flex flex-col border border-border bg-background p-8 transition-colors hover:border-primary/60"
            >
              <h3 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
                {service.name}
              </h3>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
