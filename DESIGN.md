# Design system — Destilería Independencia

Tokens runtime: [`lib/design/tokens.ts`](lib/design/tokens.ts) + [`app/globals.css`](app/globals.css). Mantener ambos alineados.

## Tipografía — estado actual

**Normalizado a 2 familias.** Cada una tiene un rol claro; no estamos usando “muchas”.

| Rol | Fuente | Token | Uso |
| --- | --- | --- | --- |
| Display / títulos | **Playfair Display** | `--font-heading` / `font-heading` | H1–H3, wordmark, marquee, números de proceso |
| UI / body | **Inter** | `--font-sans` / `font-sans` | Nav, labels, párrafos, botones, forms |

### Sentido de cada una

- **Playfair** = voz de marca (artesanal, editorial). Solo títulos y acentos tipográficos.
- **Inter** = interfaz legible. Nav, body, CTAs, formularios, labels uppercase.

Geist Mono se eliminó del layout: no aportaba identidad y solo aparecía en números de tabs.

### Qué no hacer

- No agregar una tercera tipografía.
- No usar `font-heading` en labels uppercase / nav — eso va en Inter (`text-xs uppercase tracking-[…]`).
- Preferir tokens de `lib/design/tokens.ts` antes de inventar tamaños nuevos.

### Escala recomendada

- `typography.label` — eyebrow de sección
- `typography.sectionTitle` — H2 de sección
- `typography.sectionSubtitle` — subtítulo serif
- `typography.body` / `bodyLarge` / `subtle` — cuerpo

## Color

Paleta navy / blue / gold en `brand` (`tokens.ts`) → semánticos CSS (`--background`, `--primary`, `--accent`, `--brand-whatsapp`).

## Forma

`--radius: 0` → UI sin radio, salvo el FAB de WhatsApp (círculo de canal).

## Contacto

- CTA primario de conversión: modal **Escribinos** (hero / sección contacto; no en navbar).
- WhatsApp: FAB flotante (`components/whatsapp-fab.tsx`) → `+54 9 11 2285-2023`.

## Servicios

Lista vertical por servicio (sin tabs). “Nuestro proceso” vive dentro de **Gin — Granel y Fasón**. La navbar usa dropdown para saltar a cada servicio.
