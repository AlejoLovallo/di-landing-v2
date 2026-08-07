"use client"

import { useTranslation } from "@/components/language-provider"

export function Faq() {
  const { t } = useTranslation()

  return (
    <section id="faq" className="scroll-mt-28 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 max-w-2xl lg:mb-16">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-10 bg-primary" />
            {t.faq.label}
          </p>
          <h2 className="font-heading text-4xl font-bold text-balance text-foreground lg:text-5xl">
            {t.faq.title}
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-border border-t border-border">
          {t.faq.items.map((item) => (
            <details key={item.question} className="group py-6">
              <summary className="cursor-pointer list-none font-heading text-xl font-bold text-foreground transition-colors marker:content-none hover:text-accent [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.question}
                  <span
                    aria-hidden
                    className="mt-1 shrink-0 text-primary transition-transform group-open:rotate-45 group-hover:text-accent"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
