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
}

export const storeProducts: StoreProduct[] = [
  {
    id: "capitan-gin-etiqueta-negra",
    brand: "di",
    images: [
      images.store.capitanEtiquetaNegra,
      images.store.capitanEtiquetaNegraBack,
    ],
  },
  {
    id: "capitan-gin-london-dry",
    brand: "di",
    images: [
      images.store.capitanLondonDry,
      images.store.capitanLondonDryBack,
    ],
  },
  {
    id: "pdg-gran-reserva",
    brand: "pdg",
    images: [images.store.pdgGranReserva, images.store.pdgGranReservaAlt],
  },
  {
    id: "pdg-icono",
    brand: "pdg",
    images: [images.store.pdgIcono, images.store.pdgIconoAlt],
  },
  {
    id: "pdg-the-blend",
    brand: "pdg",
    images: [images.store.pdgTheBlend, images.store.pdgTheBlendAlt],
  },
]

export function productsByBrand(brand: StoreBrand): StoreProduct[] {
  return storeProducts.filter((product) => product.brand === brand)
}
