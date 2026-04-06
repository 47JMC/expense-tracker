import { Link } from "react-router-dom";

type Props = {
  path: string;
  content: string;
};

function NavbarLink({ path, content }: Props) {
  return (
    <Link
      to={path}
      className="relative text-sky-400 hover:text-sky-600 transition-all font-['Outfit'] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 hover:after:w-full after:transition-all after:duration-300"
    >
      {content}
    </Link>
  );
}

export default NavbarLink;
