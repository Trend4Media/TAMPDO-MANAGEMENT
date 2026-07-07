import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import { Sidebar } from "@/components/layout/Sidebar";
import { isSupabaseConfigured } from "@/lib/supabase";

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="flex h-full bg-slate-50 dark:bg-slate-950">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        {!isSupabaseConfigured ? (
          <div className="bg-amber-50 px-6 py-2 text-center text-xs text-amber-800 dark:bg-amber-950 dark:text-amber-300">
            Demo-Modus – kein Supabase-Backend verbunden. Trage die Keys in{" "}
            <code>.env</code> ein, um echte Daten zu nutzen.
          </div>
        ) : null}
        <main className="flex-1 overflow-y-auto px-6 py-6">
          <div className="mx-auto max-w-6xl space-y-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
