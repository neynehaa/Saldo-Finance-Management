"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../components/ui/chart";
import { spendingTrend, categoryBreakdown } from "@/lib/dashboard/data";
import type { SpendingPoint, CategoryTotal } from "@/lib/dashboard/type";

const chartConfig = {
  amount: {
    label: "Spending",
    color: "#477A65",
  },
} satisfies ChartConfig;

interface SpendingChartProps {
  trend?: SpendingPoint[];
  categories?: CategoryTotal[];
  monthLabel?: string;
}

export function SpendingChart({
  trend = spendingTrend,
  categories = categoryBreakdown,
  monthLabel = "September 2026",
}: SpendingChartProps) {
  return (
    <section className="mt-14">
      <div className="flex items-baseline justify-between mb-1">
        <h2 className="text-xl font-bold text-white">Spending</h2>
        <span className="text-sm text-[#7B8580]">{monthLabel}</span>
      </div>

      <ChartContainer config={chartConfig} className="h-55 w-full mt-4">
        <AreaChart data={trend} margin={{ left: 0, right: 0, top: 8 }}>
          <CartesianGrid vertical={false} stroke="#E4E8E3" />
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tick={{ fill: "#7B8580", fontSize: 12 }}
          />
          <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
          <Area
            dataKey="amount"
            type="monotone"
            stroke="var(--primary)"
            strokeWidth={2.5}
            fill="#B9D98C"
            fillOpacity={0.16}
          />
        </AreaChart>
      </ChartContainer>

      <div className="mt-6 border-t border-[#E4E8E3]">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="flex justify-between py-3.5 border-b border-[#E4E8E3] text-sm"
          >
            <span className="text-white">{cat.name}</span>
            <span className="font-bold tabular-nums text-white">
              Rs. {cat.amount.toLocaleString("en-IN")}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}