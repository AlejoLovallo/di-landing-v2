"use client"

import { useState } from "react"

import { useTranslation } from "@/components/language-provider"
import { SectionTabs } from "@/components/section-tabs"

export function Services() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState(t.services.items[0].name)

  const tabs = t.services.items.map((service, index) => ({
    id: service.name,
    label: service.name,
    number: String(index + 1).padStart(2, "0"),
  }))

  const activeService =
    t.services.items.find((service) => service.name === activeTab) ??
    t.services.items[0]

  return (
    <section id="servicios" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 max-w-2xl lg:mb-12">
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

        <SectionTabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          className="-mx-6 px-6 lg:-mx-10 lg:px-10"
        />

        <article
          key={activeService.name}
          className="mt-8 border border-border bg-background p-8 lg:p-12"
          role="tabpanel"
        >
          <h3 className="font-heading text-2xl font-bold text-foreground lg:text-4xl">
            {activeService.name}
          </h3>
          <p className="mt-5 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {activeService.description}
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {activeService.features.map((feature) => (
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
      </div>
    </section>
  )
}
