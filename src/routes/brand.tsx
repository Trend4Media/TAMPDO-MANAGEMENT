import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Monogram, Wordmark } from "@/components/brand/Logo";

export const Route = createFileRoute("/brand")({
  component: BrandPage,
});

const colors = [
  { name: "Emerald Deep", hex: "#064E3B", oklch: "oklch(0.24 0.05 165)", role: "Primär BG" },
  { name: "Emerald", hex: "#0D7A5F", oklch: "oklch(0.48 0.11 165)", role: "Sekundär" },
  { name: "Gold", hex: "#C9A84C", oklch: "oklch(0.78 0.13 82)", role: "Akzent" },
  { name: "Ivory", hex: "#F5F0E0", oklch: "oklch(0.96 0.02 90)", role: "Text" },
  { name: "Near-Black Emerald", hex: "#0A1512", oklch: "oklch(0.11 0.02 165)", role: "App BG" },
  { name: "Deep Card", hex: "#12241E", oklch: "oklch(0.16 0.03 165)", role: "Card" },
  { name: "Muted Emerald", hex: "#284740", oklch: "oklch(0.32 0.05 165)", role: "Border" },
];

const typeScale = [
  { label: "Hero", spec: "Archivo Black · 96–160px", cls: "display text-6xl", sample: "TAMPDO" },
  { label: "H1", spec: "Archivo Black · 64–96px", cls: "display text-5xl", sample: "Headline" },
  { label: "H2", spec: "Archivo Black · 40–56px", cls: "display text-4xl", sample: "Sektion" },
  { label: "H3", spec: "Archivo Black · 24–32px", cls: "display text-2xl", sample: "Untertitel" },
  { label: "Body", spec: "Hind 400 · 16–18px", cls: "text-lg text-ivory", sample: "Fließtext für Oberflächen und Inhalte." },
  { label: "Eyebrow", spec: "Hind 500 · 10–11px · tracking 0.5em", cls: "eyebrow", sample: "Management Agency" },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="eyebrow">{title}</h2>
      {children}
    </section>
  );
}

function BrandPage() {
  return (
    <>
      <PageHeader
        eyebrow="Corporate Identity"
        title="Brand Guidelines"
        description="Emerald Prestige – das visuelle System der TAMPDO Management Agency: Logo, Typografie, Farben und Signature-Elemente."
      />

      {/* Logo */}
      <Section title="Logo">
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="corner-frame">
            <CardContent className="flex h-40 items-center justify-center p-6">
              <Wordmark size="md" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex h-40 items-center justify-center p-6">
              <Monogram className="h-20 w-20 text-4xl" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex h-40 flex-col items-center justify-center gap-4 bg-ivory p-6">
              <div className="text-center">
                <div className="display text-2xl text-emerald-deep">
                  TAMPDO<span className="text-gold-dark">.</span>
                </div>
                <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.5em] text-gold-dark">
                  Management Agency
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-deep/60">
                Auf Ivory
              </span>
            </CardContent>
          </Card>
        </div>
        <p className="text-sm text-ivory-dim">
          Wortmarke in Archivo Black (Ivory) mit goldenem Punkt-Akzent nach dem
          „O". Sub-Line „Management Agency" in Hind 500, Tracking 0.5em, Gold.
          Clear Space = Höhe des „T". Minimalgröße 24px (digital) / 12mm (Print).
        </p>
      </Section>

      {/* Farben */}
      <Section title="Farben — Emerald Prestige">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {colors.map((c) => (
            <Card key={c.hex} className="overflow-hidden">
              <div className="h-20" style={{ background: c.hex }} />
              <CardContent className="space-y-1 p-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold">
                  {c.role}
                </div>
                <div className="text-sm font-medium text-ivory">{c.name}</div>
                <div className="font-mono text-xs text-ivory-dim">{c.hex}</div>
                <div className="font-mono text-[10px] text-muted">{c.oklch}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <Card className="overflow-hidden">
            <div className="h-16 bg-[linear-gradient(135deg,#E6C36A,#B8923E)]" />
            <CardContent className="p-4">
              <div className="text-sm font-medium text-ivory">Gold Gradient</div>
              <div className="font-mono text-xs text-ivory-dim">
                135° · #E6C36A → #B8923E
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="h-16 bg-[linear-gradient(180deg,#0A1512,#12241E)]" />
            <CardContent className="p-4">
              <div className="text-sm font-medium text-ivory">Emerald Veil</div>
              <div className="font-mono text-xs text-ivory-dim">
                180° · #0A1512 → #12241E
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Typografie */}
      <Section title="Typografie">
        <Card>
          <CardContent className="divide-y divide-line/60 p-0">
            {typeScale.map((t) => (
              <div
                key={t.label}
                className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className={t.cls}>{t.sample}</div>
                <div className="text-right">
                  <div className="text-xs font-medium text-ivory">{t.label}</div>
                  <div className="text-[11px] text-muted">{t.spec}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </Section>

      {/* Komponenten */}
      <Section title="Komponenten">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="space-y-4 p-6">
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold">
                Buttons
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button>Gold-Fill</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
              <p className="text-xs text-muted">
                Gold-Fill → Ghost-Hover mit Gold-Glow-Shadow.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="space-y-4 p-6">
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold">
                Badges
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="gold">Gold</Badge>
                <Badge variant="success">aktiv</Badge>
                <Badge variant="warning">freigabe</Badge>
                <Badge variant="info">info</Badge>
                <Badge variant="neutral">neutral</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Signature Elements */}
      <Section title="Signature Elements">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="flex h-32 flex-col justify-center gap-4 p-6">
              <span className="text-xs text-ivory-dim">Gold Hairline</span>
              <hr className="gold-hairline" />
            </CardContent>
          </Card>
          <Card className="corner-frame">
            <CardContent className="flex h-32 items-center justify-center p-6">
              <span className="text-xs text-ivory-dim">Corner-Marks (Frame)</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex h-32 items-center justify-center p-6">
              <span className="text-xs text-ivory-dim">
                Grain-Overlay · 6% · overlay
              </span>
            </CardContent>
          </Card>
        </div>
        <p className="text-sm text-ivory-dim">
          Radius nahezu 0 (0.125rem) für scharfe, editoriale Kanten.
        </p>
      </Section>
    </>
  );
}
