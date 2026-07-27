const SHOPIFY_API_VERSION = "2025-01"

type ShopifyConfig = {
  domain: string
  storefrontToken: string
}

function getConfig(): ShopifyConfig | null {
  const domain = process.env.SHOPIFY_STORE_DOMAIN?.trim()
  const storefrontToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN?.trim()

  if (!domain || !storefrontToken) {
    return null
  }

  return { domain, storefrontToken }
}

export function isShopifyConfigured(): boolean {
  return getConfig() !== null
}

type ShopifyGraphQLResponse<T> = {
  data?: T
  errors?: Array<{ message: string }>
}

export async function shopifyFetch<T>({
  query,
  variables,
  cache,
}: {
  query: string
  variables?: Record<string, unknown>
  cache?: RequestCache
}): Promise<T | null> {
  const config = getConfig()
  if (!config) {
    return null
  }

  const endpoint = `https://${config.domain}/api/${SHOPIFY_API_VERSION}/graphql.json`

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": config.storefrontToken,
    },
    body: JSON.stringify({ query, variables }),
    ...(cache
      ? { cache }
      : { next: { revalidate: 60 } }),
  })

  if (!response.ok) {
    console.error(
      `[shopify] HTTP ${response.status}: ${await response.text()}`
    )
    return null
  }

  const json = (await response.json()) as ShopifyGraphQLResponse<T>

  if (json.errors?.length) {
    console.error("[shopify] GraphQL errors:", json.errors)
    return null
  }

  return json.data ?? null
}
