import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function DemoLineChart() {
  const data = [
    { date: "Mon", amount: 2400 },
    { date: "Tue", amount: 1500 },
    { date: "Wed", amount: 700 },
    { date: "Thu", amount: 1800 },
    { date: "Fri", amount: 3200 },
    { date: "Sat", amount: 2100 },
    { date: "Sun", amount: 900 },
  ];

  return (
    <div className="w-full rounded-xl p-6 bg-slate-950">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 0, right: 20, bottom: 0, left: 0 }}
        >
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#475569", fontSize: 12, fontFamily: "Outfit" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#475569", fontSize: 12, fontFamily: "Outfit" }}
            width={40}
          />
          <Tooltip
            contentStyle={{
              fontFamily: "Outfit",
              background: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: "8px",
              color: "#e2e8f0",
            }}
            itemStyle={{ color: "#38bdf8" }}
            cursor={{ stroke: "#1e293b", strokeWidth: 1 }}
          />
          <Line
            dataKey="amount"
            stroke="#38bdf8"
            strokeWidth={2}
            dot={false}
            type="monotone"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DemoLineChart;
