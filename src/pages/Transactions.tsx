import { useState } from "react";
import type { Expense } from "../../lib/types";
import ExpensePreview from "../components/ExpensePreview";
import SearchBar from "../components/SearchBar";
import ExportButtons from "../components/ExportButtons";

function Transactions() {
  const [search, setSearch] = useState({ value: "", field: "category" });

  const expenses: Expense[] = JSON.parse(
    localStorage.getItem("expenses") ?? "[]",
  );
  const currency = localStorage.getItem("currency") ?? "INR";

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const filteredExpenses = expenses.filter((e) =>
    String(e[search.field as keyof Expense])
      .toLowerCase()
      .includes(search.value.toLowerCase()),
  );

  return (
    <>
      <div className="flex justify-center p-4">
        <div className="w-full max-w-2xl">
          <SearchBar onChange={(value, field) => setSearch({ value, field })} />
        </div>
      </div>
      <div className="rounded-lg m-5 p-5">
        {filteredExpenses.map((expense) => (
          <ExpensePreview
            id={expense.id}
            key={expense.id}
            formattedAmount={formatAmount(expense.amount)}
            reason={expense.reason}
            date={expense.date}
            category={expense.category}
          />
        ))}
        <div className="flex gap-2 justify-end px-5">
          <ExportButtons expenses={expenses} />
        </div>
      </div>
    </>
  );
}

export default Transactions;
