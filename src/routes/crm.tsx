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
              <thead className="border-b border-slate-200 text-left text-xs uppercase tracking-wide text-slate-500 dark:border-slate-800 dark:text-slate-400">
                <tr>
                  <th className="px-5 py-3 font-medium">Name</th>
                  <th className="px-5 py-3 font-medium">Plattform</th>
                  <th className="px-5 py-3 font-medium">Follower</th>
                  <th className="px-5 py-3 font-medium">Manager</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {talents.map((t) => (
                  <tr
                    key={t.id}
                    className="hover:bg-slate-50 dark:hover:bg-slate-900"
                  >
                    <td className="px-5 py-3">
                      <div className="font-medium text-slate-900 dark:text-slate-100">
                        {t.name}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {t.handle}
                      </div>
                    </td>
                    <td className="px-5 py-3 text-slate-700 dark:text-slate-300">
                      {t.platform}
                    </td>
                    <td className="px-5 py-3 text-slate-700 dark:text-slate-300">
                      {t.follower.toLocaleString("de-DE")}
                    </td>
                    <td className="px-5 py-3 text-slate-700 dark:text-slate-300">
                      {t.manager}
                    </td>
                    <td className="px-5 py-3">
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
