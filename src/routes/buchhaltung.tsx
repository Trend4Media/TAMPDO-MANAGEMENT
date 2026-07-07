import { createFileRoute } from "@tanstack/react-router";
import { Plus, TrendingUp, TrendingDown } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
            <TrendingUp className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400">
              {formatCurrency(einnahmen)}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Ausgaben</CardTitle>
            <TrendingDown className="h-4 w-4 text-rose-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold text-rose-600 dark:text-rose-400">
              {formatCurrency(ausgaben)}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Saldo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              {formatCurrency(saldo)}
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-slate-200 text-left text-xs uppercase tracking-wide text-slate-500 dark:border-slate-800 dark:text-slate-400">
                <tr>
                  <th className="px-5 py-3 font-medium">Datum</th>
                  <th className="px-5 py-3 font-medium">Beschreibung</th>
                  <th className="px-5 py-3 font-medium">Kategorie</th>
                  <th className="px-5 py-3 text-right font-medium">Betrag</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {bookings.map((b) => (
                  <tr
                    key={b.id}
                    className="hover:bg-slate-50 dark:hover:bg-slate-900"
                  >
                    <td className="px-5 py-3 text-slate-500 dark:text-slate-400">
                      {formatDate(b.date)}
                    </td>
                    <td className="px-5 py-3 font-medium text-slate-900 dark:text-slate-100">
                      {b.description}
                    </td>
                    <td className="px-5 py-3 text-slate-700 dark:text-slate-300">
                      {b.category}
                    </td>
                    <td
                      className={cn(
                        "px-5 py-3 text-right font-medium",
                        b.amount > 0
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-rose-600 dark:text-rose-400",
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
