"use client"

import { useEffect, useState } from "react"

import { useTranslation } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import { images } from "@/lib/images"

const STORAGE_KEY = "di-age-verified"

export function AgeGateModal() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const verified = localStorage.getItem(STORAGE_KEY) === "true"
    if (!verified) {
      setOpen(true)
    }
  }, [])

  const handleConfirm = () => {
    localStorage.setItem(STORAGE_KEY, "true")
    setOpen(false)
  }

  const handleDeny = () => {
    window.location.href = "https://www.google.com"
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (nextOpen) setOpen(true)
      }}
    >
      <DialogContent
        showCloseButton={false}
        className="max-w-md gap-8 border-none bg-[var(--di-white)] p-10 text-center text-[var(--di-navy-900)] sm:max-w-md"
      >
        <div className="flex flex-col items-center gap-8">
          <img
            src={images.logos.diBlack}
            alt="Destilería Independencia"
            className="h-16 w-auto"
          />

          <div className="space-y-3">
            <DialogTitle className="font-sans text-xl font-bold uppercase leading-tight tracking-wide text-[var(--di-navy-900)]">
              {t.ageGate.title}
            </DialogTitle>
            <DialogDescription className="text-base text-[var(--di-navy-900)]/80">
              {t.ageGate.question}
            </DialogDescription>
          </div>

          <div className="grid w-full grid-cols-2 gap-3">
            <Button
              type="button"
              variant="brand"
              onClick={handleConfirm}
              className="h-12 text-sm font-medium uppercase tracking-widest"
            >
              {t.ageGate.confirm}
            </Button>
            <Button
              type="button"
              variant="brand"
              onClick={handleDeny}
              className="h-12 text-sm font-medium uppercase tracking-widest"
            >
              {t.ageGate.deny}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
