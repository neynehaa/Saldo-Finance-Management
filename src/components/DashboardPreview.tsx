"use client";

import { useEffect, useState } from "react";

export default function DashboardPreview() {
  const [greeting, setGreeting] = useState("");
  const [today, setToday] = useState("");

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();

    if (hour < 12) {
      setGreeting("Good morning");
    } else if (hour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }

    setToday(
      now.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    );
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_60px_rgba(18,60,47,0.08)]">
      <div className="relative flex h-12 items-center bg-[var(--primary)] px-5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
        </div>

        <div className="absolute left-1/2 hidden -translate-x-1/2 text-xs font-medium text-white/60 sm:block">
          saldo
        </div>
      </div>

      <div className="p-6 sm:p-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-[var(--muted)]">
              Saldo overview
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
              {greeting}, Neha
            </h2>

            <p className="mt-1 text-sm text-[var(--muted)]">{today}</p>
          </div>

          <div className="text-left sm:text-right">
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--muted)]">
              Saved this month
            </p>

            <p className="mt-1 text-3xl font-extrabold tracking-[-0.04em] tabular-nums text-[var(--text)] sm:text-4xl">
              Rs. 37,800
            </p>

            <p className="mt-1 text-sm font-semibold text-[var(--secondary)]">
              +12.4%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
