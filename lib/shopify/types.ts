export type ShopifyMoney = {
  amount: string
  currencyCode: string
}

export type ShopifyImage = {
  url: string
  altText: string | null
  width: number
  height: number
}

export type ShopifyProductCard = {
  id: string
  handle: string
  title: string
  description: string
  featuredImage: ShopifyImage | null
  price: ShopifyMoney
  variantId: string | null
  availableForSale: boolean
}

export type ShopifyProduct = ShopifyProductCard & {
  images: ShopifyImage[]
  variants: Array<{
    id: string
    title: string
    availableForSale: boolean
    price: ShopifyMoney
  }>
}

export type ShopifyCart = {
  id: string
  checkoutUrl: string
}
