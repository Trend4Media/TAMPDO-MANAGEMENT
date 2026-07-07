import { Link } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  FileSignature,
  Wallet,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/crm", label: "CRM & Talente", icon: Users, exact: false },
  { to: "/kalender", label: "Firmenkalender", icon: CalendarDays, exact: false },
  { to: "/vertraege", label: "Verträge", icon: FileSignature, exact: false },
  { to: "/buchhaltung", label: "Buchhaltung", icon: Wallet, exact: false },
] as const;

export function Sidebar() {
  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-center gap-2 px-5 py-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 font-bold text-white">
          T
        </div>
        <div className="leading-tight">
          <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            TAMPDO
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Management
          </div>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-3 py-2">
        {nav.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeOptions={{ exact: item.exact }}
            className="group"
          >
            {({ isActive }) => (
              <span
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </span>
            )}
          </Link>
        ))}
      </nav>

      <div className="border-t border-slate-200 px-3 py-3 dark:border-slate-800">
        <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-500 dark:text-slate-400">
          <Settings className="h-4 w-4" />
          Einstellungen
        </div>
        <p className="px-3 pt-2 text-[11px] text-slate-400">
          TAMPDO MANAGEMENT UG
          <br />
          (haftungsbeschränkt)
        </p>
      </div>
    </aside>
  );
}
