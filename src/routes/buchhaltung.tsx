import { createFileRoute } from "@tanstack/react-router";
import { Plus, TrendingUp, TrendingDown } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { bookings } from "@/lib/demo-data";
import { cn, formatCurrency, formatDate } from "@/lib/utils";

export const Route = createFileRoute("/buchhaltung")({
  component: BuchhaltungPage,
});

function BuchhaltungPage() {
  const einnahmen = bookings
    .filter((b) => b.amount > 0)
    .reduce((s, b) => s + b.amount, 0);
  const ausgaben = bookings
    .filter((b) => b.amount < 0)
    .reduce((s, b) => s + b.amount, 0);
  const saldo = einnahmen + ausgaben;

  return (
    <>
      <PageHeader
        eyebrow="Finanzen"
        title="Buchhaltung"
        description="Einnahmen, Ausgaben und Saldo der TAMPDO MANAGEMENT UG."
        actions={
          <Button>
            <Plus className="h-4 w-4" /> Buchung erfassen
          </Button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Einnahmen</CardTitle>
            <TrendingUp className="h-4 w-4 text-[#5fd6ae]" />
          </CardHeader>
          <CardContent>
            <p className="display text-2xl text-[#5fd6ae]">
              {formatCurrency(einnahmen)}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Ausgaben</CardTitle>
            <TrendingDown className="h-4 w-4 text-[#e0a3a3]" />
          </CardHeader>
          <CardContent>
            <p className="display text-2xl text-[#e0a3a3]">
              {formatCurrency(ausgaben)}
            </p>
          </CardContent>
        </Card>
        <Card className="corner-frame">
          <CardHeader>
            <CardTitle>Saldo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="display text-2xl text-gradient-gold">
              {formatCurrency(saldo)}
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-line text-left text-[11px] uppercase tracking-[0.2em] text-muted">
                <tr>
                  <th className="px-5 py-4 font-medium">Datum</th>
                  <th className="px-5 py-4 font-medium">Beschreibung</th>
                  <th className="px-5 py-4 font-medium">Kategorie</th>
                  <th className="px-5 py-4 text-right font-medium">Betrag</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line/60">
                {bookings.map((b) => (
                  <tr key={b.id} className="transition-colors hover:bg-white/5">
                    <td className="px-5 py-4 text-muted">
                      {formatDate(b.date)}
                    </td>
                    <td className="px-5 py-4 font-medium text-ivory">
                      {b.description}
                    </td>
                    <td className="px-5 py-4 text-ivory-dim">{b.category}</td>
                    <td
                      className={cn(
                        "px-5 py-4 text-right font-medium",
                        b.amount > 0 ? "text-[#5fd6ae]" : "text-[#e0a3a3]",
                      )}
                    >
                      {formatCurrency(b.amount)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
