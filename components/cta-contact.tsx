"use client"

import { useState } from "react"

import { ContactModal } from "@/components/contact-modal"
import { useTranslation } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { images } from "@/lib/images"

export function CtaContact() {
  const { t } = useTranslation()
  const [modalOpen, setModalOpen] = useState(false)
  const [formKey, setFormKey] = useState(0)

  const handleModalOpenChange = (open: boolean) => {
    setModalOpen(open)
    if (!open) {
      setFormKey((current) => current + 1)
    }
  }

  return (
    <>
      <section id="contacto" className="relative overflow-hidden">
        <img
          src={images.di.gauge}
          alt={t.contact.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-primary">
            {t.contact.label}
          </p>
          <h2 className="font-heading text-4xl font-bold text-balance text-foreground lg:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.contact.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={() => setModalOpen(true)}
              className="rounded-none bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            >
              {t.contact.writeUs}
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={
                <a
                  href="https://www.instagram.com/destileriaindependencia/"
                  target="_blank"
                  rel="noreferrer"
                />
              }
              className="rounded-none border-foreground/30 bg-transparent px-8 text-foreground hover:bg-foreground/10"
            >
              {t.contact.followInstagram}
            </Button>
          </div>
        </div>
      </section>

      <ContactModal
        key={formKey}
        open={modalOpen}
        onOpenChange={handleModalOpenChange}
      />
    </>
  )
}
