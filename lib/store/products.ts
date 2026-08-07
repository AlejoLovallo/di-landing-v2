import { images } from "@/lib/images"

export type StoreBrand = "di" | "pdg"

export type StoreProductId =
  | "capitan-gin-etiqueta-negra"
  | "capitan-gin-london-dry"
  | "pdg-gran-reserva"
  | "pdg-icono"
  | "pdg-the-blend"

export type StoreProduct = {
  id: StoreProductId
  brand: StoreBrand
  /** Front, back, then shared Destilería Independencia plate */
  images: readonly [string, string, string]
  /** Mercado Libre product URL — replace with final listings when available */
  buyUrl: string
}

/** Shared placeholder until per-product Mercado Libre links are provided by the business */
export const MERCADO_LIBRE_PLACEHOLDER =
  "https://www.mercadolibre.com.ar/"

/**
 * Catalog buy links. Keep `buyUrl` as `MERCADO_LIBRE_PLACEHOLDER` until each
 * Mercado Libre listing URL is confirmed — then replace per product below.
 */
export const storeProducts: StoreProduct[] = [
  {
    id: "capitan-gin-etiqueta-negra",
    brand: "di",
    images: [
      images.store.capitanEtiquetaNegra,
      images.store.capitanEtiquetaNegraBack,
      images.store.general,
    ],
    buyUrl: MERCADO_LIBRE_PLACEHOLDER,
  },
  {
    id: "capitan-gin-london-dry",
    brand: "di",
    images: [
      images.store.capitanLondonDry,
      images.store.capitanLondonDryBack,
      images.store.general,
    ],
    buyUrl: MERCADO_LIBRE_PLACEHOLDER,
  },
  {
    id: "pdg-gran-reserva",
    brand: "pdg",
    images: [
      images.store.pdgGranReserva,
      images.store.pdgGranReservaAlt,
      images.store.general,
    ],
    buyUrl: MERCADO_LIBRE_PLACEHOLDER,
  },
  {
    id: "pdg-icono",
    brand: "pdg",
    images: [
      images.store.pdgIcono,
      images.store.pdgIconoAlt,
      images.store.general,
    ],
    buyUrl: MERCADO_LIBRE_PLACEHOLDER,
  },
  {
    id: "pdg-the-blend",
    brand: "pdg",
    images: [
      images.store.pdgTheBlend,
      images.store.pdgTheBlendAlt,
      images.store.general,
    ],
    buyUrl: MERCADO_LIBRE_PLACEHOLDER,
  },
]

export function productsByBrand(brand: StoreBrand): StoreProduct[] {
  return storeProducts.filter((product) => product.brand === brand)
}
