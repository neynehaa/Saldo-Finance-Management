export interface MonthlySummary {
  greetingName: string;
  monthLabel: string;
  savedAmount: number;
  savedDeltaPercent: number;
  income: number;
  expenses: number;
}

export interface SpendingPoint {
  date: string;
  amount: number;
}

export interface CategoryTotal {
  name: string;
  amount: number;
}

export interface Transaction {
  id: string;
  name: string;
  category: string;
  amount: number;
  type: "income" | "expense";
}

export interface BudgetCategory {
  name: string;
  percent: number;
}

export interface BudgetSummaryData {
  spent: number;
  limit: number;
  percentUsed: number;
  remaining: number;
  categories: BudgetCategory[];
}