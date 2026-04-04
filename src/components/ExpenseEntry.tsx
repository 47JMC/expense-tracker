const CATEGORY_CONFIG: Record<string, { icon: string; color: string }> = {
  Food: {
    icon: "🍜",
    color: "bg-orange-500/10 text-orange-300 border-orange-500/20",
  },
  Transport: {
    icon: "🚗",
    color: "bg-sky-500/10 text-sky-300 border-sky-500/20",
  },
  Shopping: {
    icon: "🛍️",
    color: "bg-pink-500/10 text-pink-300 border-pink-500/20",
  },
  Health: { icon: "💊", color: "bg-red-500/10 text-red-300 border-red-500/20" },
  Entertainment: {
    icon: "🎬",
    color: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
  },
  Bills: {
    icon: "🧾",
    color: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  },
  Other: {
    icon: "📦",
    color: "bg-slate-500/10 text-slate-300 border-slate-500/20",
  },
};

type Props = {
  amount: number;
  reason: string;
  category: string;
  date: string;
  currency: string;
};

function ExpenseEntry({ reason, amount, category, date, currency }: Props) {
  const config = CATEGORY_CONFIG[category] ?? CATEGORY_CONFIG["Other"];

  const formattedDate = new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
  });

  const formattedAmount = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);

  return (
    <div className="group flex items-center gap-4 px-4 py-3 m-2 rounded-xl border border-slate-700/50 bg-slate-800/60 hover:bg-slate-800 hover:border-slate-600 transition-all duration-200 cursor-default">
      {/* Category icon */}
      <div className="text-xl w-9 h-9 flex items-center justify-center rounded-lg bg-slate-700/50 shrink-0">
        {config.icon}
      </div>

      {/* Main info */}
      <div className="flex-1 min-w-0">
        <p className="font-['Fredoka'] font-medium text-base text-white leading-tight truncate">
          {reason}
        </p>
        <div className="flex items-center gap-2 mt-0.5">
          <span
            className={`text-xs px-2 py-0.5 rounded-full border font-['Fredoka'] ${config.color}`}
          >
            {category}
          </span>
          <span className="text-xs text-slate-500">{formattedDate}</span>
        </div>
      </div>

      {/* Amount */}
      <p className="font-['Fredoka'] font-semibold text-lg text-blue-400 shrink-0">
        {formattedAmount}
      </p>
    </div>
  );
}

export default ExpenseEntry;
