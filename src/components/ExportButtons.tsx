import { exportCSV, exportJSON } from "../../lib/exportData";
import type { Expense } from "../../lib/types";

function ExportButtons({ expenses }: { expenses: Expense[] }) {
  return (
    <>
      <button
        onClick={() => exportCSV(expenses)}
        className="font-['Outfit'] text-sm px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-white"
      >
        Export CSV
      </button>
      <button
        onClick={() => exportJSON(expenses)}
        className="font-['Outfit'] text-sm px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-white"
      >
        Export JSON
      </button>
    </>
  );
}

export default ExportButtons;
