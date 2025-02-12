import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { to: "/", label: "home" },
    { to: "/claims", label: "claims" },
    { to: "/messages", label: "messages" },
  ];

  return (
    <div className="flex gap-5 text-base text-gray-400 capitalize">
      {navLinks.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            isActive ? "text-gray-900 font-semibold" : "text-gray-400"
          }
        >
          <span className="hover:text-gray-900">{label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
