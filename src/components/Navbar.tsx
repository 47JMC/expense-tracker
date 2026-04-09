import NavbarLink from "./NavbarLink";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="hidden lg:flex gap-2 m-2 p-2 bg-[#241E1E] justify-between items-center rounded-lg">
      <h1 className="text-[40px] font-semibold font-['Fredoka']">
        <Link to="/">ExpenseX</Link>
      </h1>
      <div className="rounded-3xl flex bg-[#2C3030] *:text-xl gap-5 m-1 *:mx-2 py-2 px-15">
        <NavbarLink path="/dashboard" content="Dashboard" />
        <NavbarLink path="/analytics" content="Analytics" />
        <NavbarLink path="/transactions" content="Transactions" />
      </div>
    </div>
  );
}

export default Navbar;
