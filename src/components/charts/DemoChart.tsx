import {
  ResponsiveContainer,
  Bar,
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function DemoChart() {
  const data = [
    {
      date: "Mon",
      amount: 2400,
      fill: "#EB4242",
    },
    {
      date: "Tue",
      amount: 1500,
      fill: "#CFA827",
    },
    {
      date: "Wed",
      amount: 700,
      fill: "#24C74E",
    },
    { date: "Thu", amount: 2100, fill: "#38bdf8" },
    { date: "Fri", amount: 3200, fill: "#a78bfa" },
    { date: "Sat", amount: 1800, fill: "#f472b6" },
    { date: "Sun", amount: 900, fill: "#E09419" },
  ];

  return (
    <div className="w-full rounded-xl lg:p-3 bg-slate-950">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barCategoryGap="15%">
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip
            contentStyle={{
              background: "#1e293b",
              border: "1px solid #334155",
              borderRadius: "8px",
              color: "#27D964",
              fontFamily: "Outfit",
              transition: "all",
            }}
            itemStyle={{ color: "#3CABE6" }}
            cursor={{ fill: "#070F2E" }}
          />
          <Bar dataKey="amount" barSize={30} radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DemoChart;
