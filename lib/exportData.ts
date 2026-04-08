import type { Expense } from "./types";

export function exportJSON(expenses: Expense[]) {
  const blob = new Blob([JSON.stringify(expenses, null, 2)], {
    type: "application/json",
  });
  download(blob, "expenses.json");
}

export function exportCSV(expenses: Expense[]) {
  const headers = ["id", "reason", "amount", "category", "date"];
  const rows = expenses.map((e) =>
    [e.id, e.reason, e.amount, e.category, e.date].join(","),
  );
  const csv = [headers.join(","), ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  download(blob, "expenses.csv");
}

function download(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
