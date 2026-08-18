"use client"

import { cn } from "@/lib/utils"

export type TabItem = {
  id: string
  label: string
  number?: string
}

type SectionTabsProps = {
  tabs: TabItem[]
  activeTab: string
  onTabChange: (id: string) => void
  className?: string
}

export function SectionTabs({
  tabs,
  activeTab,
  onTabChange,
  className,
}: SectionTabsProps) {
  return (
    <div
      className={cn(
        "flex gap-0 overflow-x-auto border-b border-border",
        className
      )}
      role="tablist"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={activeTab === tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "shrink-0 border-b-2 px-5 py-4 text-xs uppercase tracking-[0.2em] transition-colors sm:px-6",
            activeTab === tab.id
              ? "border-primary text-foreground"
              : "border-transparent text-foreground/65 hover:text-accent"
          )}
        >
          {tab.number && (
            <span className="mr-2 tabular-nums text-primary/70">{tab.number}</span>
          )}
          {tab.label}
        </button>
      ))}
    </div>
  )
}
