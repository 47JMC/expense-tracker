import { CATEGORY_CONFIG } from "../../constants/CategoryConfig";

type Props = {
  id: string;
  formattedAmount: string;
  reason: string;
  category: string;
  date: string;
};

function ExpensePreview({ reason, formattedAmount, category, date }: Props) {
  const config = CATEGORY_CONFIG[category] ?? CATEGORY_CONFIG["Other"];

  const formattedDate = date.replaceAll("-", "/");

  return (
    <div className="flex items-center gap-4 px-4 py-3 m-2 rounded-xl border border-slate-700/50 bg-slate-800/60">
      {/* Category icon */}
      <div className="text-xl w-9 h-9 flex items-center justify-center rounded-lg bg-slate-700/50 shrink-0">
        {config.icon}
      </div>

      {/* Main info */}
      <div className="flex-1 min-w-0">
        <p className="font-['Fredoka'] text-base text-white leading-tight truncate">
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

      {/* Amount only (no delete) */}
      <p className="font-['Fredoka'] font-semibold text-lg text-blue-400 shrink-0">
        {formattedAmount}
      </p>
    </div>
  );
}

export default ExpensePreview;
