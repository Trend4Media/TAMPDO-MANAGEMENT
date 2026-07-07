# TAMPDO Management Agency — Corporate Identity

**„Emerald Prestige"** — das visuelle System der TAMPDO MANAGEMENT UG (haftungsbeschränkt).
Live-Style-Guide in der App: Route **`/brand`**.

## 🎨 Farben

| Rolle       | Name                | HEX       | OKLCH                  |
| ----------- | ------------------- | --------- | ---------------------- |
| Primär BG   | Emerald Deep        | `#064E3B` | `oklch(0.24 0.05 165)` |
| Sekundär    | Emerald             | `#0D7A5F` | `oklch(0.48 0.11 165)` |
| Akzent      | Gold                | `#C9A84C` | `oklch(0.78 0.13 82)`  |
| Text        | Ivory               | `#F5F0E0` | `oklch(0.96 0.02 90)`  |
| App BG      | Near-Black Emerald  | `#0A1512` | `oklch(0.11 0.02 165)` |
| Card        | Deep Card           | `#12241E` | `oklch(0.16 0.03 165)` |
| Border      | Muted Emerald       | `#284740` | `oklch(0.32 0.05 165)` |

**Gradients**

- Gold: `linear-gradient(135deg, #E6C36A → #B8923E)`
- Emerald Veil: `linear-gradient(180deg, #0A1512 0% → #12241E 100%)`

## 🔤 Typografie

- **Display / Headlines:** `Archivo Black` — 400, UPPERCASE, letter-spacing `-0.02em`, line-height `0.92`
- **Body / UI:** `Hind` — 300 / 400 / 500 / 600
- **Eyebrow:** Hind 500, 10px, `letter-spacing: 0.5em`, uppercase, Gold

**Skala:** Hero 96–160px · H1 64–96 · H2 40–56 · H3 24–32 · Body 16–18 · Eyebrow 10–11

> Schriften sind **self-hosted** unter `public/fonts/` (woff2) und werden in
> `src/styles.css` via `@font-face` geladen — keine externe Abhängigkeit.

## 🅣 Logo

- **Wortmarke:** `TAMPDO` in Archivo Black, Ivory, mit goldenem Punkt-Akzent nach dem „O".
- **Sub-Line:** `MANAGEMENT AGENCY` in Hind 500, Tracking `0.5em`, Gold.
- **Monogramm:** `T` in Ivory auf Emerald-Deep-Kachel mit 1px Gold-Hairline-Rahmen.
- **Clear Space:** Höhe des „T" rundherum.
- **Minimalgröße:** 24px Höhe (digital) / 12mm (Print).

Implementiert als Komponenten in `src/components/brand/Logo.tsx`
(`<Wordmark />`, `<Monogram />`, `<Logo />`).

## ✨ Signature Elements

- **Gold Hairline** — 1px `linear-gradient(90deg, transparent, gold, transparent)` als Section-Divider (`.gold-hairline`)
- **Grain Overlay** — Fractal Noise, 6% Opacity, `mix-blend-mode: overlay` (`.grain`)
- **Buttons** — Gold-Fill → Ghost-Hover mit Gold-Glow-Shadow
- **Corner-Marks** — Vier goldene L-Ecken um Key-Visuals (`.corner-frame`)
- **Radius** — nahezu 0 (`0.125rem`), scharfe editoriale Kanten (`--radius-sharp`)

## Verwendung im Code

Alle Tokens sind als Tailwind-Utilities verfügbar (definiert in `@theme`):

```
bg-app  bg-card  border-line
text-ivory  text-ivory-dim  text-muted  text-gold
bg-emerald  bg-emerald-deep
font-display  (Archivo Black)   ·   Standard-Body = Hind
```

Utility-Klassen: `.display`, `.eyebrow`, `.gold-hairline`, `.text-gradient-gold`,
`.grain`, `.corner-frame`.
