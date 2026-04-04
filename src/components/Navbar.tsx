import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex gap-2 m-2 p-2 bg-[#241E1E] justify-between items-center rounded-lg">
      <h1 className="text-3xl font-bold font-['Fredoka']">ExpenseX</h1>
      <div className="rounded-3xl flex bg-[#2C3030] *:text-xl gap-5 m-1 *:mx-2 py-2 px-10">
        <Link
          to="/dashboard"
          className="text-sky-400 hover:text-sky-600 transition-all font-['Outfit']"
        >
          Dashboard
        </Link>
        <Link
          to="/analytics"
          className="text-sky-400 hover:text-sky-600 transition-all font-['Outfit']"
        >
          Analytics
        </Link>
        <Link
          to="/transactions"
          className="text-sky-400 hover:text-sky-600 transition-all font-['Outfit']"
        >
          Transactions
        </Link>
      </div>
      <div className="rounded-3xl px-8 m-2 py-2 flex justify-center items-center bg-green-500">
        <Link
          to="https://localhost:4000"
          className="font-['Outfit'] hover:text-sky-300 text-xl transition-all"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
