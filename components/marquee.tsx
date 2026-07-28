"use client"

import { useTranslation } from "@/components/language-provider"

export function Marquee() {
  const { t } = useTranslation()

  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border lg:grid-cols-4">
        {t.stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-2 px-4 py-10 text-center [&:nth-child(3)]:border-t [&:nth-child(4)]:border-t lg:[&:nth-child(n)]:border-t-0"
          >
            <span className="font-heading text-4xl font-bold text-accent">
              {stat.value}
            </span>
            <span className="text-xs uppercase tracking-[0.25em] text-subtle-foreground">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
