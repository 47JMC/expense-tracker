export type Expense = {
  id: string;
  amount: number;
  reason: string;
  category: string;
  date: string;
};

export type ChartProps = {
  expenses: Expense[];
  format: (amount: number) => string;
};
