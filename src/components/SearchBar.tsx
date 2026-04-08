import { useState, type HTMLInputTypeAttribute } from "react";

type optionTypes = {
  name: string;
  type: HTMLInputTypeAttribute;
};

const options: optionTypes[] = [
  { name: "category", type: "text" },
  { name: "reason", type: "text" },
  { name: "amount", type: "number" },
  { name: "date", type: "date" },
];

type Props = {
  onChange: (value: string, field: string) => void;
};

function SearchBar({ onChange }: Props) {
  const [inputType, setInputType] = useState<HTMLInputTypeAttribute>("text");
  const [field, setField] = useState("category");

  return (
    <div className="flex w-fit p-1 text-center placeholder:text-gray-500 rounded-xl transition-all items-center border-2 hover:border-sky-600 border-sky-500 font-['Fredoka'] bg-slate-900 hover:bg-slate-950">
      <input
        type={inputType}
        className="outline-none m-2 text-white"
        placeholder="Search..."
        onChange={(e) => onChange(e.target.value, field)}
      />
      <div className="w-px h-5 bg-slate-600 mx-1" />
      <select
        name="sortBy"
        className="rounded-lg outline-none"
        id="sortSelect"
        onChange={(e) => {
          const selected = options.find((o) => o.name === e.target.value);
          if (selected) {
            setInputType(selected.type);
            setField(e.target.value);
          }
        }}
      >
        {options.map(({ name }) => (
          <option
            className="rounded-xl bg-sky-900 p-2 m-1"
            key={name}
            value={name}
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
export default SearchBar;
