"use client"

import { useTranslation } from "@/components/language-provider"
import { useContactModal } from "@/components/contact-modal-provider"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ContactCtaButtonsProps = {
  size?: "default" | "lg"
  showInstagram?: boolean
  className?: string
  buttonClassName?: string
}

export function ContactCtaButtons({
  size = "lg",
  showInstagram = false,
  className,
  buttonClassName,
}: ContactCtaButtonsProps) {
  const { t } = useTranslation()
  const { openContactModal } = useContactModal()

  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:flex-wrap",
        className
      )}
    >
      <Button
        size={size}
        variant="brand"
        onClick={openContactModal}
        className={cn("px-8", buttonClassName)}
      >
        {t.contact.writeUs}
      </Button>
      {showInstagram && (
        <Button
          size={size}
          variant="outline"
          nativeButton={false}
          render={
            <a
              href="https://www.instagram.com/destileriaindependencia/"
              target="_blank"
              rel="noreferrer"
            />
          }
          className={cn(
            "rounded-none border-foreground/30 bg-transparent px-8 text-foreground hover:border-accent hover:bg-accent/10 hover:text-accent",
            buttonClassName
          )}
        >
          {t.contact.followInstagram}
        </Button>
      )}
    </div>
  )
}
