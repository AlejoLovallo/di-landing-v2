import { shopifyFetch, isShopifyConfigured } from "@/lib/shopify/client"
import {
  CART_CREATE_MUTATION,
  PRODUCT_BY_HANDLE_QUERY,
  PRODUCTS_QUERY,
} from "@/lib/shopify/queries"
import type {
  ShopifyCart,
  ShopifyImage,
  ShopifyMoney,
  ShopifyProduct,
  ShopifyProductCard,
} from "@/lib/shopify/types"

export { isShopifyConfigured }
export type {
  ShopifyCart,
  ShopifyImage,
  ShopifyMoney,
  ShopifyProduct,
  ShopifyProductCard,
}

type MoneyNode = {
  amount: string
  currencyCode: string
}

type ImageNode = {
  url: string
  altText: string | null
  width: number
  height: number
}

type ProductsResponse = {
  products: {
    edges: Array<{
      node: {
        id: string
        handle: string
        title: string
        description: string
        availableForSale: boolean
        featuredImage: ImageNode | null
        priceRange: { minVariantPrice: MoneyNode }
        variants: {
          edges: Array<{
            node: { id: string; availableForSale: boolean }
          }>
        }
      }
    }>
  }
}

type ProductByHandleResponse = {
  product: {
    id: string
    handle: string
    title: string
    description: string
    availableForSale: boolean
    featuredImage: ImageNode | null
    images: { edges: Array<{ node: ImageNode }> }
    priceRange: { minVariantPrice: MoneyNode }
    variants: {
      edges: Array<{
        node: {
          id: string
          title: string
          availableForSale: boolean
          price: MoneyNode
        }
      }>
    }
  } | null
}

type CartCreateResponse = {
  cartCreate: {
    cart: { id: string; checkoutUrl: string } | null
    userErrors: Array<{ field: string[] | null; message: string }>
  }
}

function mapImage(image: ImageNode | null): ShopifyImage | null {
  if (!image) return null
  return {
    url: image.url,
    altText: image.altText,
    width: image.width,
    height: image.height,
  }
}

function mapMoney(money: MoneyNode): ShopifyMoney {
  return {
    amount: money.amount,
    currencyCode: money.currencyCode,
  }
}

export function formatShopifyPrice(
  money: ShopifyMoney,
  locale: string = "es-AR"
): string {
  const amount = Number.parseFloat(money.amount)
  if (Number.isNaN(amount)) return money.amount

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: money.currencyCode,
  }).format(amount)
}

export async function getProducts(
  first: number = 24
): Promise<ShopifyProductCard[]> {
  const data = await shopifyFetch<ProductsResponse>({
    query: PRODUCTS_QUERY,
    variables: { first },
  })

  if (!data) return []

  return data.products.edges.map(({ node }) => {
    const firstVariant = node.variants.edges[0]?.node
    return {
      id: node.id,
      handle: node.handle,
      title: node.title,
      description: node.description,
      featuredImage: mapImage(node.featuredImage),
      price: mapMoney(node.priceRange.minVariantPrice),
      variantId: firstVariant?.id ?? null,
      availableForSale: firstVariant?.availableForSale ?? node.availableForSale,
    }
  })
}

export async function getProductByHandle(
  handle: string
): Promise<ShopifyProduct | null> {
  const data = await shopifyFetch<ProductByHandleResponse>({
    query: PRODUCT_BY_HANDLE_QUERY,
    variables: { handle },
  })

  const product = data?.product
  if (!product) return null

  const variants = product.variants.edges.map(({ node }) => ({
    id: node.id,
    title: node.title,
    availableForSale: node.availableForSale,
    price: mapMoney(node.price),
  }))

  const firstAvailable =
    variants.find((variant) => variant.availableForSale) ?? variants[0]

  return {
    id: product.id,
    handle: product.handle,
    title: product.title,
    description: product.description,
    featuredImage: mapImage(product.featuredImage),
    images: product.images.edges
      .map(({ node }) => mapImage(node))
      .filter((image): image is ShopifyImage => image !== null),
    price: mapMoney(product.priceRange.minVariantPrice),
    variantId: firstAvailable?.id ?? null,
    availableForSale: product.availableForSale,
    variants,
  }
}

export async function createCheckoutCart(
  lines: Array<{ merchandiseId: string; quantity: number }>
): Promise<ShopifyCart | null> {
  const data = await shopifyFetch<CartCreateResponse>({
    query: CART_CREATE_MUTATION,
    variables: {
      input: { lines },
    },
    cache: "no-store",
  })

  if (!data) return null

  const { cart, userErrors } = data.cartCreate
  if (userErrors.length) {
    console.error("[shopify] cartCreate userErrors:", userErrors)
    return null
  }

  if (!cart) return null

  return {
    id: cart.id,
    checkoutUrl: cart.checkoutUrl,
  }
}
