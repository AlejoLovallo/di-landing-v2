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
  /** Primary + secondary images (Shopify linking later) */
  images: readonly [string, string]
  /** Mercado Libre listing URL */
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
    buyUrl:
      "https://www.mercadolibre.com.ar/gin-capitan-etiqueta-negra-750-ml/up/MLAU2860963623?pdp_filters=item_id:MLA1462842225",
  },
  {
    id: "capitan-gin-london-dry",
    brand: "di",
    images: [
      images.store.capitanLondonDry,
      images.store.capitanLondonDryBack,
      images.store.general,
    ],
    buyUrl:
      "https://www.mercadolibre.com.ar/gin-capitan-london-dry-750-ml/up/MLAU2865851030?pdp_filters=item_id:MLA1967195790",
  },
  {
    id: "pdg-gran-reserva",
    brand: "pdg",
    images: [images.store.pdgGranReserva, images.store.pdgGranReservaAlt],
    buyUrl:
      "https://www.mercadolibre.com.ar/vino-plaza-de-grillos-gran-reserva-malbec-750-ml/up/MLAU2861621707?pdp_filters=item_id:MLA1967363676",
  },
  {
    id: "pdg-icono",
    brand: "pdg",
    images: [images.store.pdgIcono, images.store.pdgIconoAlt],
    buyUrl:
      "https://www.mercadolibre.com.ar/vino-plaza-de-grillos-icono-malbec-750-ml/up/MLAU2866653280?pdp_filters=item_id:MLA1967351862",
  },
  {
    id: "pdg-the-blend",
    brand: "pdg",
    images: [images.store.pdgTheBlend, images.store.pdgTheBlendAlt],
    buyUrl:
      "https://www.mercadolibre.com.ar/vino-plaza-de-grillos-the-blend-750-ml/up/MLAU2864199097?pdp_filters=item_id:MLA1463100429",
  },
]

export function productsByBrand(brand: StoreBrand): StoreProduct[] {
  return storeProducts.filter((product) => product.brand === brand)
}
