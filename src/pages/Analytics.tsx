import SpendingTrendChart from "../components/SpendingTrendChart";
import WeeklySpendingChart from "../components/WeeklySpendingChart";
import Navbar from "../components/Navbar";

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
    <div className="flex flex-col gap-4">
      <Navbar />
      <h1 className="font-['Fredoka'] text-2xl text-white">Analytics</h1>
      <div className="flex lg:flex-row gap-2 *:m-1 overflow-hidden flex-col">
        <SpendingTrendChart expenses={expenses} format={format} />
        <WeeklySpendingChart expenses={expenses} format={format} />
      </div>
    </div>
  );
}

export default Analytics;
