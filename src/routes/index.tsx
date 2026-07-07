import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users,
  CalendarDays,
  FileSignature,
  Wallet,
  ArrowUpRight,
} from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { talents, events, contracts, bookings } from "@/lib/demo-data";
import { formatCurrency, formatDate } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: Dashboard,
});

function Dashboard() {
  const aktiveTalente = talents.filter((t) => t.status === "aktiv").length;
  const offeneFreigaben = contracts.filter((c) => c.status === "freigabe").length;
  const saldo = bookings.reduce((sum, b) => sum + b.amount, 0);

  const stats = [
    {
      label: "Aktive Talente",
      value: String(aktiveTalente),
      icon: Users,
      to: "/crm",
    },
    {
      label: "Termine (7 Tage)",
      value: String(events.length),
      icon: CalendarDays,
      to: "/kalender",
    },
    {
      label: "Offene Freigaben",
      value: String(offeneFreigaben),
      icon: FileSignature,
      to: "/vertraege",
    },
    {
      label: "Saldo (Monat)",
      value: formatCurrency(saldo),
      icon: Wallet,
      to: "/buchhaltung",
    },
  ] as const;

  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Überblick über Talente, Termine, Verträge und Finanzen der TAMPDO MANAGEMENT UG."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Link key={s.label} to={s.to}>
            <Card className="transition-shadow hover:shadow-md">
              <CardContent className="flex items-center justify-between p-5">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {s.label}
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-slate-100">
                    {s.value}
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-300">
                  <s.icon className="h-5 w-5" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <div>
              <CardTitle>Nächste Termine</CardTitle>
              <CardDescription>Aus dem Firmenkalender</CardDescription>
            </div>
            <Link
              to="/kalender"
              className="flex items-center gap-1 text-xs font-medium text-brand-600 hover:underline"
            >
              Alle <ArrowUpRight className="h-3 w-3" />
            </Link>
          </CardHeader>
          <CardContent className="space-y-3">
            {events.map((e) => (
              <div
                key={e.id}
                className="flex items-center justify-between gap-3"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                    {e.title}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {e.talent} · {formatDate(e.date)}
                  </p>
                </div>
                <Badge variant="info">{e.type}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <div>
              <CardTitle>Verträge in Freigabe</CardTitle>
              <CardDescription>Warten auf Prüfung</CardDescription>
            </div>
            <Link
              to="/vertraege"
              className="flex items-center gap-1 text-xs font-medium text-brand-600 hover:underline"
            >
              Alle <ArrowUpRight className="h-3 w-3" />
            </Link>
          </CardHeader>
          <CardContent className="space-y-3">
            {contracts.map((c) => (
              <div
                key={c.id}
                className="flex items-center justify-between gap-3"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                    {c.title}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {c.talent} · {formatCurrency(c.value)}
                  </p>
                </div>
                <Badge
                  variant={
                    c.status === "aktiv"
                      ? "success"
                      : c.status === "freigabe"
                        ? "warning"
                        : "neutral"
                  }
                >
                  {c.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
