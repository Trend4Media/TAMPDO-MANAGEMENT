# TAMPDO Management Software

Interne Management- & Buchhaltungssoftware der **TAMPDO MANAGEMENT UG (haftungsbeschränkt)** –
um die Agentur komplett zu leiten, zu führen und zu planen.

## Module

| Modul                | Beschreibung                                              | Status         |
| -------------------- | -------------------------------------------------------- | -------------- |
| 🧑‍💼 **CRM & Talente**  | Talente, Kontakte und Manager verwalten                  | Grundgerüst ✅ |
| 📅 **Firmenkalender** | Termine, Shoots und Deadlines der Talente                | Grundgerüst ✅ |
| 📄 **Vertragsplattform** | Verträge erstellen & prüfen – mit Freigabe-Workflow   | Grundgerüst ✅ |
| 💶 **Buchhaltung**    | Einnahmen, Ausgaben und Saldo                            | Grundgerüst ✅ |
| 🎨 **Brand** (`/brand`) | Living Style-Guide der Corporate Identity „Emerald Prestige" | ✅ |

## Corporate Identity

Das Design folgt der CI **„Emerald Prestige"** (Emerald + Gold, editorial).
Vollständige Guidelines: [`BRAND.md`](./BRAND.md) · live in der App unter `/brand`.
Schriften (Archivo Black, Hind) sind self-hosted unter `public/fonts/`.

## Tech-Stack

- **React 19** + **TanStack Router** (dateibasiertes Routing) & **TanStack Query**
- **Vite 6** als Build-Tool
- **Tailwind CSS 4** + shadcn-ähnliche UI-Komponenten
- **Supabase** (PostgreSQL, Auth, Storage) als Backend
- **TypeScript**, **Bun**, **Vitest**

> Der Stack entspricht dem der `creator-collaboration-suite`, damit beide Projekte konsistent bleiben.

## Schnellstart

```bash
bun install
cp .env.example .env   # Supabase-Keys eintragen
bun run dev            # http://localhost:5173
```

Ohne Supabase-Keys läuft die App im **Demo-/Mock-Modus** mit Beispieldaten
(`src/lib/demo-data.ts`). Ein Hinweis-Banner zeigt an, dass kein Backend verbunden ist.

## Backend einrichten (Supabase)

1. Neues Supabase-Projekt anlegen (empfohlen: eigenes, internes Projekt für TAMPDO).
2. `supabase/migrations/0001_init.sql` im SQL-Editor ausführen (oder `supabase db push`).
3. `VITE_SUPABASE_URL` und `VITE_SUPABASE_ANON_KEY` in `.env` eintragen.

Das Schema legt die Tabellen `talents`, `events`, `contracts` und `bookings`
inkl. Row Level Security (nur eingeloggte Nutzer) an.

## Projektstruktur

```
src/
├── main.tsx                # Einstieg, Router + Query-Provider
├── styles.css              # Tailwind + Theme
├── lib/                    # supabase-Client, Utils, Demo-Daten
├── components/
│   ├── ui/                 # Button, Card, Badge …
│   └── layout/             # Sidebar, PageHeader
└── routes/                 # __root, index (Dashboard), crm, kalender, vertraege, buchhaltung
supabase/migrations/        # SQL-Schema
```

## Nächste Schritte

- Supabase-Auth (Login) + rollenbasierte Freigaben
- CRM: Anlegen/Bearbeiten von Talenten (Formulare + echte Queries)
- Vertrags-Uploads (PDF) via Supabase Storage + Freigabe-Historie
- Buchhaltung: Kategorien, Monatsauswertung, Export

---

© TAMPDO MANAGEMENT UG (haftungsbeschränkt)
