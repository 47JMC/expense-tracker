const CURRENCIES = [
  { code: "INR", label: "₹ Indian Rupee" },
  { code: "USD", label: "$ US Dollar" },
  { code: "EUR", label: "€ Euro" },
  { code: "GBP", label: "£ British Pound" },
  { code: "JPY", label: "¥ Japanese Yen" },
  { code: "AUD", label: "$ Australian Dollar" },
  { code: "CAD", label: "$ Canadian Dollar" },
  { code: "SGD", label: "$ Singapore Dollar" },
  { code: "AED", label: "د.إ UAE Dirham" },
];

function CurrencySelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (currency: string) => void;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border-2 m-2 font-['Fredoka'] border-slate-700 bg-slate-800 p-2 text-white rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
    >
      {CURRENCIES.map((c) => (
        <option key={c.code} value={c.code}>
          {c.label}
        </option>
      ))}
    </select>
  );
}

export default CurrencySelector;
