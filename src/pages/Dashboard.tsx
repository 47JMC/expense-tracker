import StatsBoard from "../components/StatsBoard";
import InputBox from "../components/InputBox";
import ExpenseEntry from "../components/ExpenseEntry";
import CurrencySelector from "../components/CurrencySelector";
import DailyChart from "../components/charts/DailyChart";
import CategoryChart from "../components/charts/CategoryChart";
import { useEffect, useState } from "react";

import type { Expense } from "../../lib/types";

function Dashboard() {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const stored = localStorage.getItem("expenses");
    return stored ? JSON.parse(stored) : [];
  });

  const [currency, setCurrency] = useState<string>(() => {
    return localStorage.getItem("currency") ?? "INR";
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("currency", currency);
  }, [currency]);

  const handleAddExpense = (formData: FormData) => {
    const reason = formData.get("reason") as string;
    const amount = formData.get("amount") as string;
    const category = formData.get("category") as string;
    let date = formData.get("date") as string;

    if (!date) date = new Date().toISOString().split("T")[0];

    setExpenses((prev) => [
      ...prev,
      {
        reason,
        amount: parseFloat(amount),
        category,
        date,
        id: crypto.randomUUID(),
      },
    ]);
  };

  const handleRemoveExpense = (id: string) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const highest = expenses.length
    ? expenses.reduce(
        (max, expense) => (expense.amount > max.amount ? expense : max),
        expenses[0],
      )
    : null;

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="min-h-screen flex flex-col gap-1 items-center">
      <StatsBoard
        total={total}
        highestExpense={highest}
        format={formatAmount}
        currency={currency}
      />
      <InputBox action={handleAddExpense} />
      <CurrencySelector value={currency} onChange={setCurrency} />
      <div className="flex flex-col lg:flex-row gap-4 w-full px-4">
        <DailyChart expenses={expenses} format={formatAmount} />
        <CategoryChart expenses={expenses} format={formatAmount} />
      </div>
      <div className="rounded-lg m-5 p-5">
        {expenses.map((expense) => (
          <ExpenseEntry
            id={expense.id}
            key={expense.id}
            formattedAmount={formatAmount(expense.amount)}
            reason={expense.reason}
            date={expense.date}
            category={expense.category}
            onDelete={handleRemoveExpense}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
