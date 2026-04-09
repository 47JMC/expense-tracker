import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const LINKS = [
  { path: "/dashboard", label: "Dashboard", icon: "⊞" },
  { path: "/analytics", label: "Analytics", icon: "↗" },
  { path: "/transactions", label: "Transactions", icon: "💹" },
];

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-50 bg-slate-800 hover:bg-slate-700 transition-colors p-2.5 rounded-xl"
      >
        <div className="flex flex-col gap-1.5 w-5">
          <span className="block h-0.5 bg-white rounded-full" />
          <span className="block h-0.5 bg-white rounded-full" />
          <span className="block h-0.5 bg-white rounded-full" />
        </div>
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-50 bg-slate-900 border-r border-slate-800 p-6 flex flex-col gap-2 transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <p className="font-['Fredoka'] font-bold text-white text-xl mb-6">
          <Link to="/">ExpenseX</Link>
        </p>

        {LINKS.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl font-['Outfit'] text-sm transition-colors ${isActive ? "bg-slate-800 text-white" : "text-slate-400 hover:text-white hover:bg-slate-800/50"}`
            }
          >
            <span>{link.icon}</span>
            <span>{link.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
