"use server"

import { redirect } from "next/navigation"

import { createCheckoutCart } from "@/lib/shopify"

export type BuyNowState = {
  error: string | null
}

export async function buyNow(
  _prevState: BuyNowState,
  formData: FormData
): Promise<BuyNowState> {
  const variantId = formData.get("variantId")

  if (typeof variantId !== "string" || !variantId) {
    return { error: "missing_variant" }
  }

  const cart = await createCheckoutCart([
    { merchandiseId: variantId, quantity: 1 },
  ])

  if (!cart?.checkoutUrl) {
    return { error: "checkout_failed" }
  }

  redirect(cart.checkoutUrl)
}
