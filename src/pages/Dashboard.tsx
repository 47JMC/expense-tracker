import StatsBoard from "../components/StatsBoard";
import InputBox from "../components/InputBox";
import ExpenseEntry from "../components/ExpenseEntry";
import CurrencySelector from "../components/CurrencySelector";
import { useState } from "react";

export type Expense = {
  id: string;
  amount: number;
  reason: string;
  category: string;
  date: string;
};

function Dashboard() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [currency, setCurrency] = useState("INR");

  const handleAddExpense = (formData: FormData) => {
    const reason = formData.get("reason") as string;
    const amount = formData.get("amount") as string;
    const category = formData.get("category") as string;
    let date = formData.get("date") as string;

    if (!date) date = new Date().toISOString().split("T")[0];

    console.log({ reason, amount, category, date });

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

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="min-h-screen flex flex-col gap-1 items-center">
      <StatsBoard total={total} />
      <InputBox action={handleAddExpense} />
      <CurrencySelector value={currency} onChange={setCurrency} />
      <div className="rounded-lg m-5 p-5">
        {expenses.map((expense) => (
          <ExpenseEntry
            key={expense.id}
            amount={expense.amount}
            reason={expense.reason}
            date={expense.date}
            category={expense.category}
            currency={currency}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
