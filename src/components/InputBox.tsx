const categories = [
  "Food",
  "Transport",
  "Shopping",
  "Health",
  "Entertainment",
  "Bills",
  "Other",
];

type Props = {
  action: (formData: FormData) => void;
};

function InputBox({ action }: Props) {
  return (
    <form className="flex flex-col justify-center" action={action}>
      <div className="flex *:transition-colors">
        <input
          className="border-2 border-slate-950 focus:border-blue-400 bg-slate-800 p-3 text-white rounded-lg m-3 placeholder:text-gray-500 focus:outline-none"
          id="reasonInput"
          placeholder="Enter the reason"
          name="reason"
        />
        <input
          className="border-2 border-slate-950 focus:border-blue-400 bg-slate-800 p-3 text-white rounded-lg m-3 placeholder:text-gray-500 focus:outline-none"
          id="amountInput"
          placeholder="Enter the amount"
          name="amount"
          required
        />
        <select
          id="category"
          name="category"
          className="border-2 font-['Fredoka'] font-medium *:rounded-lg border-slate-950 active:border-blue-400 bg-slate-800 p-3 text-white rounded-lg m-3 placeholder:text-gray-500 focus:outline-none"
        >
          {categories.map((category) => (
            <option
              className="rounded-xl font-['Fredoka'] text-lg "
              value={category}
              key={category}
            >
              {category}
            </option>
          ))}
        </select>
        <input
          type="date"
          name="date"
          id="dateInput"
          className="border-2 font-['Fredoka'] border-slate-950 focus:border-blue-400 bg-slate-800 p-3 text-white rounded-lg m-3 placeholder:text-gray-500 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="bg-zinc-700 hover:bg-slate-800 transition-colors py-2 px-5 rounded-xl font-['Fredoka'] text-lg"
      >
        Add Expense
      </button>
    </form>
  );
}

export default InputBox;
