import { en } from "@/lib/i18n/dictionaries/en"
import { es } from "@/lib/i18n/dictionaries/es"
import type { Locale } from "@/lib/i18n/types"

export type { ContactReason, Dictionary, Locale } from "@/lib/i18n/types"

export const dictionaries = { es, en } as const

export const locales: Locale[] = ["es", "en"]

export const defaultLocale: Locale = "es"
