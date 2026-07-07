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
    <div className="grain flex h-full">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        {!isSupabaseConfigured ? (
          <div className="border-b border-gold/30 bg-gold/10 px-6 py-2 text-center text-[11px] uppercase tracking-[0.2em] text-gold">
            Demo-Modus · kein Supabase-Backend verbunden
          </div>
        ) : null}
        <main className="flex-1 overflow-y-auto px-8 py-8">
          <div className="mx-auto max-w-6xl space-y-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
