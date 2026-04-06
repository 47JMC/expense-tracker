import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { ChartProps } from "../../lib/types";

function DailyChart({ expenses, format }: ChartProps) {
  const data = Object.entries(
    expenses.reduce<Record<string, number>>((acc, e) => {
      acc[e.date] = (acc[e.date] ?? 0) + e.amount;
      return acc;
    }, {}),
  )
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, amount]) => ({ date, amount }));

  const max = Math.max(...data.map((d) => d.amount));

  const coloredData = data.map((d) => ({
    ...d,
    fill: d.amount === max ? "#e2e8f0" : "#1e293b",
  }));

  return (
    <div className="bg-slate-900/50 rounded-2xl p-5 w-[25%] mx-4 flex-1">
      <p className="font-['Outfit'] text-slate-500 text-xs uppercase tracking-widest mb-1">
        Daily spending
      </p>
      <p className="font-['Fredoka'] text-white text-2xl mb-5">
        {format(data.reduce((s, d) => s + d.amount, 0))}
      </p>
      <ResponsiveContainer width="90%" height={180}>
        <BarChart data={coloredData} barCategoryGap="40%">
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#475569", fontSize: 11, fontFamily: "Outfit" }}
            tickFormatter={(d) =>
              new Date(d).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
              })
            }
          />
          <YAxis />
          <Tooltip
            cursor={{ fill: "rgba(255,255,255,0.03)" }}
            formatter={(v) => [v ? format(Number(v)) : "—", "Spent"]}
            contentStyle={{
              background: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: "10px",
              fontFamily: "Outfit",
              fontSize: 13,
              color: "#e2e8f0",
            }}
            labelFormatter={(d) =>
              new Date(d).toLocaleDateString("en-IN", {
                weekday: "short",
                day: "numeric",
                month: "short",
              })
            }
          />
          <Bar dataKey="amount" radius={[6, 6, 4, 4]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DailyChart;
