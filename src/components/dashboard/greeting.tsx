import { monthlySummary } from "@/lib/dashboard/data";
import type { MonthlySummary } from "@/lib/dashboard/type";

interface GreetingSummaryProps {
  data?: MonthlySummary;
}

export function GreetingSummary({ data = monthlySummary }: GreetingSummaryProps) {
  return (
    <section>
      <h1 className="text-xl font-bold text-[#17201C]">
        Good morning, {data.greetingName}
      </h1>
      <p className="text-sm text-[#7B8580] mt-0.5">{data.monthLabel}</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 md:gap-14 items-end">
        <div>
          <div className="text-5xl md:text-6xl font-extrabold tracking-tight tabular-nums text-[#17201C]">
            Rs. {data.savedAmount.toLocaleString("en-IN")}
          </div>
          <div className="text-sm text-[#7B8580] mt-2">saved this month</div>
          <div className="text-sm font-bold text-[#477A65] mt-2.5">
            ↑ {data.savedDeltaPercent}% from August
          </div>
        </div>

        <div className="flex gap-10 md:gap-12">
          <div>
            <div className="text-sm text-[#7B8580] mb-1">Income</div>
            <div className="text-2xl font-bold tabular-nums text-[#17201C]">
              Rs. {data.income.toLocaleString("en-IN")}
            </div>
          </div>
          <div>
            <div className="text-sm text-[#7B8580] mb-1">Expenses</div>
            <div className="text-2xl font-bold tabular-nums text-[#17201C]">
              Rs. {data.expenses.toLocaleString("en-IN")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}