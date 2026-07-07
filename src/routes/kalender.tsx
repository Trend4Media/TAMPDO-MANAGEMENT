import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { events } from "@/lib/demo-data";
import { formatDate } from "@/lib/utils";

export const Route = createFileRoute("/kalender")({
  component: KalenderPage,
});

function typeVariant(type: string) {
  if (type === "Deadline") return "warning" as const;
  if (type === "Live") return "success" as const;
  return "info" as const;
}

function KalenderPage() {
  return (
    <>
      <PageHeader
        title="Firmenkalender"
        description="Termine, Shoots und Deadlines der Talente an einem Ort."
        actions={
          <Button>
            <Plus className="h-4 w-4" /> Termin anlegen
          </Button>
        }
      />

      <div className="space-y-3">
        {events.map((e) => (
          <Card key={e.id}>
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
                <span className="text-xs">
                  {new Date(e.date).toLocaleDateString("de-DE", {
                    month: "short",
                  })}
                </span>
                <span className="text-lg font-semibold leading-none">
                  {new Date(e.date).getDate()}
                </span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-900 dark:text-slate-100">
                  {e.title}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {e.talent} · {formatDate(e.date)}
                </p>
              </div>
              <Badge variant={typeVariant(e.type)}>{e.type}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
