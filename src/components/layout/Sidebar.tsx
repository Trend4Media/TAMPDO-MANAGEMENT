import { Link } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  FileSignature,
  Wallet,
  Palette,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Monogram } from "@/components/brand/Logo";

const nav = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/crm", label: "CRM & Talente", icon: Users, exact: false },
  { to: "/kalender", label: "Firmenkalender", icon: CalendarDays, exact: false },
  { to: "/vertraege", label: "Verträge", icon: FileSignature, exact: false },
  { to: "/buchhaltung", label: "Buchhaltung", icon: Wallet, exact: false },
  { to: "/brand", label: "Brand", icon: Palette, exact: false },
] as const;

export function Sidebar() {
  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-line bg-app/60">
      <div className="flex items-center gap-3 px-5 py-6">
        <Monogram className="h-10 w-10 text-lg" />
        <div className="leading-none">
          <div className="display text-lg">
            TAMPDO<span className="text-gold">.</span>
          </div>
          <div className="eyebrow mt-1.5">Management</div>
        </div>
      </div>

      <hr className="gold-hairline mx-5" />

      <nav className="flex flex-1 flex-col gap-1 px-3 py-4">
        {nav.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeOptions={{ exact: item.exact }}
          >
            {({ isActive }) => (
              <span
                className={cn(
                  "flex items-center gap-3 rounded-[var(--radius-sharp)] px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-emerald/15 text-ivory shadow-[inset_2px_0_0_0] shadow-gold"
                    : "text-ivory-dim hover:bg-white/5 hover:text-ivory",
                )}
              >
                <item.icon
                  className={cn(
                    "h-4 w-4",
                    isActive ? "text-gold" : "text-muted",
                  )}
                />
                {item.label}
              </span>
            )}
          </Link>
        ))}
      </nav>

      <hr className="gold-hairline mx-5" />

      <div className="px-3 py-4">
        <div className="flex items-center gap-3 rounded-[var(--radius-sharp)] px-3 py-2 text-sm text-muted">
          <Settings className="h-4 w-4" />
          Einstellungen
        </div>
        <p className="px-3 pt-3 text-[10px] uppercase tracking-[0.25em] text-muted">
          TAMPDO Management UG
          <br />
          (haftungsbeschränkt)
        </p>
      </div>
    </aside>
  );
}
