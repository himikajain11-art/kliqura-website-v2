import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/kliqura-logo.png";

function Header() {
  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Work", to: "/work" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink to="/" className="header-logo">
          <img src={logo} alt="Kliqura logo" />
        </NavLink>

        <nav className="header-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;