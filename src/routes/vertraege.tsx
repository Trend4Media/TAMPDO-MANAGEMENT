import { createFileRoute } from "@tanstack/react-router";
import { Plus, Check, Clock } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { contracts } from "@/lib/demo-data";
import { formatCurrency } from "@/lib/utils";

export const Route = createFileRoute("/vertraege")({
  component: VertraegePage,
});

function statusVariant(status: string) {
  if (status === "aktiv") return "success" as const;
  if (status === "freigabe") return "warning" as const;
  if (status === "beendet") return "neutral" as const;
  return "info" as const;
}

function VertraegePage() {
  return (
    <>
      <PageHeader
        eyebrow="Verträge"
        title="Vertragsplattform"
        description="Verträge erstellen, prüfen und mit Freigabe-Workflow verwalten."
        actions={
          <Button>
            <Plus className="h-4 w-4" /> Vertrag erstellen
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2">
        {contracts.map((c) => (
          <Card key={c.id} className="corner-frame">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{c.title}</CardTitle>
                  <CardDescription>
                    {c.partner} · {c.talent}
                  </CardDescription>
                </div>
                <Badge variant={statusVariant(c.status)}>{c.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <span className="display text-2xl">{formatCurrency(c.value)}</span>
              {c.status === "freigabe" ? (
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Clock className="h-4 w-4" /> Später
                  </Button>
                  <Button size="sm">
                    <Check className="h-4 w-4" /> Freigeben
                  </Button>
                </div>
              ) : (
                <Button size="sm" variant="outline">
                  Details
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
