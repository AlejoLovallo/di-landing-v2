"use client"

import { useTranslation } from "@/components/language-provider"
import { cn } from "@/lib/utils"

type ProcessStepsProps = {
  className?: string
}

export function ProcessSteps({ className }: ProcessStepsProps) {
  const { t } = useTranslation()

  return (
    <div
      className={cn(
        "grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {t.process.steps.map((step) => (
        <div
          key={step.number}
          className="group flex flex-col gap-4 bg-card p-8 transition-colors hover:bg-accent/10"
        >
          <span className="font-heading text-5xl font-bold text-primary/30 transition-colors group-hover:text-accent">
            {step.number}
          </span>
          <p className="font-heading text-xl font-bold text-foreground transition-colors group-hover:text-accent">
            {step.title}
          </p>
          <p className="text-sm leading-relaxed text-subtle-foreground">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  )
}
