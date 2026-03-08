import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 mt-[4vh] h-[8vh] w-[50vw] z-50">
      <div className="flex justify-around items-center font-bold text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline" : "hover:underline"
          }
        >
          home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "underline" : "hover:underline"
          }
        >
          about
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "underline" : "hover:underline"
          }
        >
          projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "underline" : "hover:underline"
          }
        >
          contact
        </NavLink>
      </div>
    </nav>
  );
}
