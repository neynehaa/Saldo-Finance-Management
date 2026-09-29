import type {
  MonthlySummary,
  SpendingPoint,
  CategoryTotal,
  Transaction,
  BudgetSummaryData,
} from "./type";

// Replace every export below with a fetch/query to your backend.
// Each component that consumes this data accepts the same shape as a
// prop, so swapping mock data for real data doesn't require touching
// any component internals.

export const monthlySummary: MonthlySummary = {
  greetingName: "Neha",
  monthLabel: "September 2026",
  savedAmount: 37800,
  savedDeltaPercent: 12.4,
  income: 85000,
  expenses: 47200,
};

export const spendingTrend: SpendingPoint[] = [
  { date: "Sep 1", amount: 950 },
  { date: "Sep 4", amount: 1410 },
  { date: "Sep 7", amount: 1200 },
  { date: "Sep 11", amount: 1860 },
  { date: "Sep 14", amount: 1550 },
  { date: "Sep 18", amount: 2140 },
  { date: "Sep 21", amount: 1700 },
  { date: "Sep 25", amount: 2300 },
  { date: "Sep 28", amount: 1950 },
];

export const categoryBreakdown: CategoryTotal[] = [
  { name: "Food", amount: 8420 },
  { name: "Housing", amount: 18000 },
  { name: "Transport", amount: 3240 },
  { name: "Shopping", amount: 5890 },
  { name: "Subscriptions", amount: 2150 },
];

export const recentTransactions: Transaction[] = [
  {
    id: "1",
    name: "Foodmandu",
    category: "Food",
    amount: 840,
    type: "expense",
  },
  {
    id: "2",
    name: "Netflix",
    category: "Subscription",
    amount: 499,
    type: "expense",
  },
  {
    id: "3",
    name: "Salary",
    category: "Income",
    amount: 85000,
    type: "income",
  },
  {
    id: "4",
    name: "Uber",
    category: "Transport",
    amount: 520,
    type: "expense",
  },
  {
    id: "5",
    name: "Zara",
    category: "Shopping",
    amount: 4200,
    type: "expense",
  },
];

export const budgetSummary: BudgetSummaryData = {
  spent: 47200,
  limit: 55000,
  percentUsed: 86,
  remaining: 7800,
  categories: [
    { name: "Housing", percent: 92 },
    { name: "Food", percent: 71 },
    { name: "Shopping", percent: 54 },
    { name: "Transport", percent: 38 },
  ],
};
