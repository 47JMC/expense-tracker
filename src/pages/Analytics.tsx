import SpendingTrendChart from "../components/SpendingTrendChart";

import type { Expense } from "../../lib/types";

function Analytics() {
  const expenses: Expense[] = JSON.parse(
    localStorage.getItem("expenses") ?? "[]",
  );
  const currency = localStorage.getItem("currency") ?? "INR";

  const format = (amount: number) =>
    new Intl.NumberFormat(undefined, {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(amount);

  if (!expenses.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500 font-['Outfit']">
          No expenses to analyse yet
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col gap-4 p-6">
      <h1 className="font-['Fredoka'] text-2xl text-white">Analytics</h1>
      <SpendingTrendChart expenses={expenses} format={format} />
    </div>
  );
}

export default Analytics;
