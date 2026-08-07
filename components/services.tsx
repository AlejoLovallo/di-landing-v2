"use client"

import { useTranslation } from "@/components/language-provider"
import { ProcessSteps } from "@/components/process"

export function Services() {
  const { t } = useTranslation()

  return (
    <section id="servicios" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 max-w-2xl lg:mb-16">
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

        <div className="space-y-16 lg:space-y-24">
          {t.services.items.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className="group scroll-mt-36 border-t border-border pt-12 transition-colors hover:border-accent lg:pt-16"
            >
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary transition-colors group-hover:text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-heading text-2xl font-bold text-foreground transition-colors group-hover:text-accent lg:text-4xl">
                {service.name}
              </h3>
              <p className="mt-5 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary transition-colors group-hover:bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              {service.id === "gin-granel-fason" && (
                <div className="mt-14 border border-border bg-background p-8 transition-colors group-hover:border-accent/60 lg:mt-16 lg:p-12">
                  <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary transition-colors group-hover:text-accent">
                    <span className="h-px w-10 bg-primary transition-colors group-hover:bg-accent" />
                    {t.process.label}
                  </p>
                  <h4 className="font-heading text-2xl font-bold text-balance text-foreground transition-colors group-hover:text-accent lg:text-3xl">
                    {t.process.title}
                  </h4>
                  <ProcessSteps className="mt-10" />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
