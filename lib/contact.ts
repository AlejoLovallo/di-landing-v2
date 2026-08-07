/** +54 9 11 2285-2023 */
export const WHATSAPP_NUMBER = "5491122852023"

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
