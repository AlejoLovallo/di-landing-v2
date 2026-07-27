"use client"

import { useActionState } from "react"

import { buyNow, type BuyNowState } from "@/app/tienda/actions"
import { useTranslation } from "@/components/language-provider"
import { Button } from "@/components/ui/button"

const initialState: BuyNowState = { error: null }

export function AddToCartButton({
  variantId,
  availableForSale,
}: {
  variantId: string | null
  availableForSale: boolean
}) {
  const { t } = useTranslation()
  const [state, formAction, pending] = useActionState(buyNow, initialState)

  if (!variantId || !availableForSale) {
    return (
      <Button
        disabled
        className="rounded-none bg-muted px-6 text-muted-foreground"
      >
        {t.shop.unavailable}
      </Button>
    )
  }

  return (
    <form action={formAction} className="space-y-3">
      <input type="hidden" name="variantId" value={variantId} />
      <Button
        type="submit"
        disabled={pending}
        className="rounded-none bg-primary px-6 text-primary-foreground hover:bg-primary/90"
      >
        {pending ? t.shop.buying : t.shop.buyNow}
      </Button>
      {state.error ? (
        <p className="text-sm text-destructive" role="alert">
          {t.shop.buyError}
        </p>
      ) : null}
    </form>
  )
}
