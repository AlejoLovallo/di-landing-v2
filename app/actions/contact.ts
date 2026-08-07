"use server"

import { createClient, isSupabaseConfigured } from "@/lib/supabase/server"
import type { ContactReason } from "@/lib/i18n/types"

export type ContactFormState = {
  success?: boolean
  error?: string
  configError?: boolean
}

const contactReasons: ContactReason[] = [
  "distribution",
  "events",
  "special_order",
  "press",
  "other",
]

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  if (!isSupabaseConfigured()) {
    return { configError: true }
  }

  const nombre = formData.get("nombre")?.toString().trim() ?? ""
  const apellido = formData.get("apellido")?.toString().trim() ?? ""
  const email = formData.get("email")?.toString().trim() ?? ""
  const telefono = formData.get("telefono")?.toString().trim() ?? ""
  const empresa = formData.get("empresa")?.toString().trim() || null
  const volumen = formData.get("volumen")?.toString().trim() || null
  const mensaje = formData.get("mensaje")?.toString().trim() || null
  const motivo = formData.get("motivo")?.toString() as ContactReason | undefined
  const locale = formData.get("locale")?.toString() ?? "es"
  const website = formData.get("website")?.toString().trim()

  if (website) {
    return { success: true }
  }

  if (!nombre || !apellido || !email || !telefono || !motivo) {
    return { error: "missing_fields" }
  }

  if (!isValidEmail(email)) {
    return { error: "invalid_email" }
  }

  if (!contactReasons.includes(motivo)) {
    return { error: "invalid_reason" }
  }

  const supabase = createClient()
  if (!supabase) {
    return { configError: true }
  }

  const payload = {
    nombre,
    apellido,
    email,
    telefono,
    empresa,
    volumen,
    mensaje,
    motivo,
    locale,
  }

  let { error } = await supabase.from("contact_submissions").insert(payload)

  if (
    error &&
    /volumen|mensaje/i.test(error.message)
  ) {
    const { volumen: _volumen, mensaje: _mensaje, ...legacyPayload } = payload
    ;({ error } = await supabase
      .from("contact_submissions")
      .insert(legacyPayload))
  }

  if (error) {
    console.error("Contact form submission error:", error.message)
    return { error: "submit_failed" }
  }

  return { success: true }
}
