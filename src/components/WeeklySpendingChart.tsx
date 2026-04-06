import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import type { ChartProps } from "../../lib/types";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function WeeklySpendingChart({ expenses, format }: ChartProps) {
  const data = DAYS.map((day, i) => ({
    day,
    amount: expenses
      .filter((e) => new Date(e.date).getDay() === i)
      .reduce((sum, e) => sum + e.amount, 0),
  }));

  const max = Math.max(...data.map((d) => d.amount));
  const coloredData = data.map((d) => ({
    ...d,
    fill: d.amount === max ? "#e2e8f0" : "#1e293b",
  }));

  return (
    <div className="bg-slate-900/50 rounded-2xl p-5 w-full flex-1">
      <p className="font-['Outfit'] text-slate-500 text-xs uppercase tracking-widest mb-1">
        Spending by day of week
      </p>
      <p className="font-['Fredoka'] text-white text-2xl mb-5">
        {DAYS[data.indexOf(data.find((d) => d.amount === max)!)]}
        <span className="text-slate-500 text-base font-['Outfit'] ml-2">
          busiest day
        </span>
      </p>
      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={coloredData} barCategoryGap="40%">
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#475569", fontSize: 11, fontFamily: "Outfit" }}
          />
          <YAxis hide />
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
            itemStyle={{ color: "#7497D6" }}
          />
          <Bar dataKey="amount" radius={[6, 6, 4, 4]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WeeklySpendingChart;
