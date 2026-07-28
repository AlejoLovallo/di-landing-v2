"use client"

import { useActionState } from "react"

import { submitContactForm, type ContactFormState } from "@/app/actions/contact"
import { useTranslation } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { ContactReason } from "@/lib/i18n/types"
import { cn } from "@/lib/utils"

const initialState: ContactFormState = {}

const contactReasons: ContactReason[] = [
  "distribution",
  "events",
  "special_order",
  "press",
  "other",
]

type ContactModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const { t, locale } = useTranslation()
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  )

  const feedbackMessage = state.configError
    ? t.contact.modal.configError
    : state.success
      ? t.contact.modal.success
      : state.error
        ? t.contact.modal.error
        : null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>{t.contact.modal.title}</DialogTitle>
          <DialogDescription>{t.contact.modal.description}</DialogDescription>
        </DialogHeader>

        {state.success ? (
          <div className="space-y-4">
            <p className="text-sm text-primary" role="status">
              {t.contact.modal.success}
            </p>
            <DialogFooter>
              <Button
                type="button"
                variant="brand"
                onClick={() => onOpenChange(false)}
              >
                {t.contact.modal.close}
              </Button>
            </DialogFooter>
          </div>
        ) : (
          <form key={open ? "open" : "closed"} action={formAction} className="grid gap-4">
            <input type="hidden" name="locale" value={locale} />
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="nombre">{t.contact.modal.firstName}</Label>
                <Input
                  id="nombre"
                  name="nombre"
                  required
                  autoComplete="given-name"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="apellido">{t.contact.modal.lastName}</Label>
                <Input
                  id="apellido"
                  name="apellido"
                  required
                  autoComplete="family-name"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="email">{t.contact.modal.email}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="telefono">{t.contact.modal.phone}</Label>
                <Input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="empresa">{t.contact.modal.companyOptional}</Label>
              <Input
                id="empresa"
                name="empresa"
                autoComplete="organization"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="motivo">{t.contact.modal.reason}</Label>
              <select
                id="motivo"
                name="motivo"
                required
                defaultValue=""
                className={cn(
                  "h-10 w-full rounded-none border border-input bg-transparent px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30"
                )}
              >
                <option value="" disabled>
                  {t.contact.modal.reasonPlaceholder}
                </option>
                {contactReasons.map((reason) => (
                  <option key={reason} value={reason}>
                    {t.contact.modal.reasons[reason]}
                  </option>
                ))}
              </select>
            </div>

            {feedbackMessage && (
              <p
                className={cn(
                  "text-sm",
                  state.configError
                    ? "text-muted-foreground"
                    : "text-destructive"
                )}
                role="status"
              >
                {feedbackMessage}
              </p>
            )}

            <DialogFooter>
              <Button type="submit" variant="brand" disabled={isPending}>
                {isPending ? t.contact.modal.submitting : t.contact.modal.submit}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
