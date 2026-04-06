import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { ChartProps } from "../../lib/types";

function SpendingTrendChart({ expenses, format }: ChartProps) {
  const data = [...expenses]
    .sort((a, b) => a.date.localeCompare(b.date))
    .reduce<{ date: string; total: number }[]>((acc, e) => {
      const prev = acc[acc.length - 1]?.total ?? 0;
      const existing = acc.find((d) => d.date === e.date);
      if (existing) {
        existing.total += e.amount;
        return acc;
      }
      return [...acc, { date: e.date, total: prev + e.amount }];
    }, []);

  console.log(data);

  return (
    <div className="bg-slate-900/50 rounded-2xl p-5 w-full flex-1">
      <p className="font-['Outfit'] text-slate-500 text-xs uppercase tracking-widest mb-1">
        Total over time
      </p>
      <p className="font-['Fredoka'] text-white text-2xl mb-5">
        {data.length ? format(data[data.length - 1].total) : "—"}
      </p>
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={data}>
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
          <YAxis hide />
          <Tooltip
            formatter={(v) => [v ? format(Number(v)) : "—", "Total"]}
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
            itemStyle={{ color: "#7497D6" }}
          />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#e2e8f0"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SpendingTrendChart;
