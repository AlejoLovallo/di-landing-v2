"use client"

import { useTranslation } from "@/components/language-provider"

export function Process() {
  const { t } = useTranslation()

  return (
    <section id="proceso" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-10 bg-primary" />
            {t.process.label}
          </p>
          <h2 className="font-heading text-4xl font-bold text-balance text-foreground lg:text-5xl">
            {t.process.title}
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step) => (
            <div
              key={step.number}
              className="group flex flex-col gap-4 bg-card p-8 transition-colors hover:bg-accent/10"
            >
              <span className="font-heading text-5xl font-bold text-primary/30 transition-colors group-hover:text-accent">
                {step.number}
              </span>
              <h3 className="font-heading text-xl font-bold text-foreground transition-colors group-hover:text-accent">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-subtle-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
