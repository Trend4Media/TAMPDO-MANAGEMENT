import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { talents } from "@/lib/demo-data";

export const Route = createFileRoute("/crm")({
  component: CrmPage,
});

function statusVariant(status: string) {
  if (status === "aktiv") return "success" as const;
  if (status === "onboarding") return "info" as const;
  return "neutral" as const;
}

function CrmPage() {
  return (
    <>
      <PageHeader
        eyebrow="CRM"
        title="CRM & Talente"
        description="Talente, Kontakte und Manager der Agentur verwalten."
        actions={
          <Button>
            <Plus className="h-4 w-4" /> Talent hinzufügen
          </Button>
        }
      />

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-line text-left text-[11px] uppercase tracking-[0.2em] text-muted">
                <tr>
                  <th className="px-5 py-4 font-medium">Name</th>
                  <th className="px-5 py-4 font-medium">Plattform</th>
                  <th className="px-5 py-4 font-medium">Follower</th>
                  <th className="px-5 py-4 font-medium">Manager</th>
                  <th className="px-5 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line/60">
                {talents.map((t) => (
                  <tr key={t.id} className="transition-colors hover:bg-white/5">
                    <td className="px-5 py-4">
                      <div className="font-medium text-ivory">{t.name}</div>
                      <div className="text-xs text-muted">{t.handle}</div>
                    </td>
                    <td className="px-5 py-4 text-ivory-dim">{t.platform}</td>
                    <td className="px-5 py-4 text-ivory-dim">
                      {t.follower.toLocaleString("de-DE")}
                    </td>
                    <td className="px-5 py-4 text-ivory-dim">{t.manager}</td>
                    <td className="px-5 py-4">
                      <Badge variant={statusVariant(t.status)}>{t.status}</Badge>
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
