import { GreetingSummary } from "@/components/dashboard/greeting";
import { SpendingChart } from "@/components/dashboard/spending-chart";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { BudgetSummary } from "@/components/dashboard/budget-summary";
import { AiInsight } from "@/components/dashboard/ai-insights";

export default function DashboardPage() {
  return (
    <div className="max-w-[1160px] mx-auto px-6 md:px-9 py-9">
      <GreetingSummary />

      <SpendingChart />

      <div className="mt-14 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 md:gap-14">
        <RecentActivity />
        <BudgetSummary />
      </div>

      <AiInsight />
    </div>
  );
}