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
        eyebrow="Kalender"
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
              <div className="flex h-12 w-12 flex-col items-center justify-center rounded-[var(--radius-sharp)] border border-line text-gold">
                <span className="text-[10px] uppercase tracking-wider">
                  {new Date(e.date).toLocaleDateString("de-DE", {
                    month: "short",
                  })}
                </span>
                <span className="display text-lg leading-none">
                  {new Date(e.date).getDate()}
                </span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-ivory">{e.title}</p>
                <p className="text-xs text-muted">
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
