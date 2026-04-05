import type { Expense } from "../pages/Dashboard";

function StatsBoard({
  total,
  highestExpense,
  currency,
  format,
}: {
  total: number;
  highestExpense: Expense | null;
  currency: string;
  format: (amount: number) => string;
}) {
  return (
    <div className="p-2 m-2 flex flex-row  rounded-lg gap-3 w-full lg:w-auto overflow-x-auto">
      <div className="font-['Outfit'] p-3 rounded-lg border-2 bg-slate-900 border-sky-500 flex-1 lg:flex-none min-2-32.5">
        <p className="text-sm text-slate-400">Currency</p>
        <p className="text-xl text-center text-sky-300">{currency}</p>
      </div>
      <div className="font-['Outfit'] p-3 rounded-lg border-2 bg-slate-900 border-green-400 flex-1 lg:flex-none min-2-32.5">
        <p className="text-sm text-slate-400">Total Spent</p>
        <p className="text-xl text-green-300">{format(total)}</p>
      </div>
      <div className="font-['Outfit'] p-3 rounded-lg border-2 bg-slate-900 border-orange-400 flex-1 lg:flex-none min-2-32.5">
        <p className="text-sm text-slate-400">Highest Expense</p>
        <p className="text-xl text-orange-300">
          {highestExpense ? format(highestExpense.amount) : "—"}
        </p>
        <p className="text-xs text-slate-500 truncate">
          {highestExpense?.reason ?? ""}
        </p>
      </div>
    </div>
  );
}

export default StatsBoard;
