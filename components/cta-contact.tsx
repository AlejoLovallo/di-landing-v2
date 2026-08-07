"use client"

import Image from "next/image"

import { ContactCtaButtons } from "@/components/contact-cta-buttons"
import { useTranslation } from "@/components/language-provider"
import { images } from "@/lib/images"

export function CtaContact() {
  const { t } = useTranslation()

  return (
    <section id="contacto" className="relative overflow-hidden">
      <Image
        src={images.di.gauge}
        alt={t.contact.imageAlt}
        fill
        sizes="100vw"
        className="object-cover"
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
        <ContactCtaButtons
          showInstagram
          className="mt-10 items-center justify-center"
        />
      </div>
    </section>
  )
}
