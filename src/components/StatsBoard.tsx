import type { Expense } from "../pages/Dashboard";

function StatsBoard({
  total,
  highestExpense,
}: {
  total: number;
  highestExpense: Expense | null;
}) {
  return (
    <div className="p-2 m-2 flex rounded-lg gap-5">
      <div className="font-['Outfit'] p-3 rounded-lg border-2 m-2 bg-slate-900 border-sky-500">
        <p className="text-lg">Categories</p>
        <p className="text-xl text-center">4</p>
      </div>
      <div className="font-['Outfit'] p-5 rounded-lg border-2 bg-slate-900 border-green-400">
        <p className="text-lg">Total Spent</p>
        <p className="text-xl text-blue-500">${total}</p>
      </div>
      <div className="font-['Outfit'] p-3 rounded-lg border-2 m-2 bg-slate-900 border-orange-400">
        <p className="text-lg">Highest Expense</p>
        <p className="text-xl text-orange-300 text-center">
          ${highestExpense?.amount}
        </p>
      </div>
    </div>
  );
}

export default StatsBoard;
