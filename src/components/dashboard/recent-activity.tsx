import Link from "next/link";
import { recentTransactions } from "@/lib/dashboard/data";
import type { Transaction } from "@/lib/dashboard/type";

interface RecentActivityProps {
  transactions?: Transaction[];
}

export function RecentActivity({
  transactions = recentTransactions,
}: RecentActivityProps) {
  return (
    <section>
      <h2 className="text-xl font-bold text-[#17201C] mb-1">Recent activity</h2>

      <div>
        {transactions.map((tx, i) => (
          <div
            key={tx.id}
            className={`flex justify-between items-center py-3.5 ${
              i !== transactions.length - 1 ? "border-b border-[#E4E8E3]" : ""
            }`}
          >
            <div>
              <div className="text-sm font-semibold text-[#17201C]">{tx.name}</div>
              <div className="text-xs text-[#7B8580] mt-0.5">{tx.category}</div>
            </div>
            <div
              className={`text-sm font-bold tabular-nums ${
                tx.type === "income" ? "text-[#477A65]" : "text-[#17201C]"
              }`}
            >
              {tx.type === "income" ? "+" : "-"} Rs. {tx.amount.toLocaleString("en-IN")}
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/transactions"
        className="inline-block mt-4 text-sm font-semibold text-[#477A65] hover:text-[#123C2F] transition-colors"
      >
        View all transactions →
      </Link>
    </section>
  );
}