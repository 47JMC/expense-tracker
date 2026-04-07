import { NavLink } from "react-router-dom";

type Props = {
  path: string;
  content: string;
};

function NavbarLink({ path, content }: Props) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? "transition-all font-['Outfit'] text-green-400"
          : "transition-all font-['Outfit'] relative text-sky-400 hover:text-sky-600 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 hover:after:w-full after:transition-all after:duration-300"
      }
    >
      {content}
    </NavLink>
  );
}

export default NavbarLink;
