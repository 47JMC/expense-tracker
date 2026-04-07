import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import type { ChartProps } from "../../../lib/types";

const CATEGORY_COLORS: Record<string, string> = {
  Food: "#38bdf8",
  Transport: "#34d399",
  Shopping: "#f472b6",
  Health: "#f87171",
  Entertainment: "#fbbf24",
  Bills: "#a78bfa",
  Other: "#94a3b8",
};

function CategoryChart({ expenses, format }: ChartProps) {
  const data = Object.entries(
    expenses.reduce<Record<string, number>>((acc, e) => {
      acc[e.category] = (acc[e.category] ?? 0) + e.amount;
      return acc;
    }, {}),
  ).map(([name, value]) => ({
    name,
    value,
    fill: CATEGORY_COLORS[name] ?? "#94a3b8",
  }));

  const total = data.reduce((s, d) => s + d.value, 0);

  return (
    <div className="bg-slate-900/50 flex-1 rounded-2xl p-5 w-full">
      <p className="font-['Outfit'] text-slate-500 text-xs uppercase tracking-widest mb-1">
        By category
      </p>
      <p className="font-['Fredoka'] text-white text-2xl mb-5">
        {format(total)}
      </p>

      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={80}
            paddingAngle={3}
            dataKey="value"
          />
          <Tooltip
            formatter={(v) => [v ? format(Number(v)) : "—", "Spent"]}
            contentStyle={{
              background: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: "10px",
              fontFamily: "Outfit",
              fontSize: 13,
              color: "#e2e8f0",
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4">
        {data.map((d) => (
          <div key={d.name} className="flex items-center gap-1.5">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: d.fill }}
            />
            <span className="font-['Outfit'] text-slate-400 text-xs">
              {d.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryChart;
