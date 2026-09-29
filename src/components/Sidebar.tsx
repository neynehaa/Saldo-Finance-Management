"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  ArrowLeftRight,
  Wallet,
  Repeat2,
  ChartNoAxesCombined,
  Settings,
  CircleHelp,
  LogOut,
} from "lucide-react";

const mainNavigation = [
  {
    label: "Overview",
    href: "/home",
    icon: Home,
  },
  {
    label: "Transactions",
    href: "/transactions",
    icon: ArrowLeftRight,
  },
  {
    label: "Budgets & Savings",
    href: "/budgets",
    icon: Wallet,
  },
  {
    label: "Recurring",
    href: "/recurring",
    icon: Repeat2,
  },
  {
    label: "Reports",
    href: "/reports",
    icon: ChartNoAxesCombined,
  },
];

const bottomNavigation = [
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    label: "Help & Support",
    href: "/help",
    icon: CircleHelp,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-50 flex w-[76px] flex-col border-r border-[var(--border)] bg-[var(--surface)]">
      
      {/* Logo */}
      <div className="flex justify-center pt-5">
        <Link
          href="/"
          className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[var(--primary)] text-lg font-extrabold text-white"
        >
          S
        </Link>
      </div>

      {/* Main Navigation */}
      <nav className="mt-7 flex flex-col items-center gap-2">
        {mainNavigation.map((item) => {
          const Icon = item.icon;

          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              title={item.label}
              className={`flex h-11 w-11 items-center justify-center rounded-lg transition-colors duration-150 ${
                isActive
                  ? "bg-[var(--primary)] text-white"
                  : "text-[var(--muted)] hover:bg-[var(--bg)] hover:text-[var(--text)]"
              }`}
            >
              <Icon
                size={20}
                strokeWidth={1.8}
              />
            </Link>
          );
        })}
      </nav>

      {/* Bottom Navigation */}
      <div className="mt-auto flex flex-col items-center gap-2 pb-5">
        {bottomNavigation.map((item) => {
          const Icon = item.icon;

          const isActive = pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              title={item.label}
              className={`flex h-11 w-11 items-center justify-center rounded-lg transition-colors duration-150 ${
                isActive
                  ? "bg-[var(--primary)] text-white"
                  : "text-[var(--muted)] hover:bg-[var(--bg)] hover:text-[var(--text)]"
              }`}
            >
              <Icon
                size={20}
                strokeWidth={1.8}
              />
            </Link>
          );
        })}

        {/* Logout */}
        <button
          type="button"
          title="Log out"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-[var(--muted)] transition-colors duration-150 hover:bg-[var(--bg)] hover:text-[var(--text)]"
        >
          <LogOut size={20} strokeWidth={1.8} />
        </button>
      </div>
    </aside>
  );
}