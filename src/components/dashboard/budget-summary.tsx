import { budgetSummary } from "@/lib/dashboard/data";
import type { BudgetSummaryData } from "@/lib/dashboard/type";

interface BudgetSummaryProps {
  data?: BudgetSummaryData;
  monthLabel?: string;
}

export function BudgetSummary({
  data = budgetSummary,
  monthLabel = "September budget",
}: BudgetSummaryProps) {
  return (
    <section>
      <h2 className="text-xl font-bold text-[#17201C] mb-1">{monthLabel}</h2>

      <div className="text-3xl font-extrabold tracking-tight tabular-nums text-[#17201C] mt-3">
        Rs. {data.spent.toLocaleString("en-IN")}{" "}
        <span className="text-base font-semibold text-[#7B8580]">
          of Rs. {data.limit.toLocaleString("en-IN")}
        </span>
      </div>

      <div className="h-1.5 rounded-full bg-[#E4E8E3] mt-3.5 overflow-hidden">
        <div
          className="h-full rounded-full bg-[#123C2F]"
          style={{ width: `${data.percentUsed}%` }}
        />
      </div>
      <div className="text-xs text-[#7B8580] mt-2.5">
        {data.percentUsed}% used · Rs. {data.remaining.toLocaleString("en-IN")} remaining
      </div>

      <div className="mt-5 space-y-3.5">
        {data.categories.map((cat) => (
          <div key={cat.name} className="flex items-center justify-between text-sm">
            <span className="text-[#17201C] w-24">{cat.name}</span>
            <div className="flex-1 h-1.5 rounded-full bg-[#E4E8E3] mx-3 overflow-hidden">
              <div
                className="h-full rounded-full bg-[#123C2F]"
                style={{ width: `${cat.percent}%` }}
              />
            </div>
            <span className="tabular-nums font-semibold text-[#17201C] w-9 text-right">
              {cat.percent}%
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}