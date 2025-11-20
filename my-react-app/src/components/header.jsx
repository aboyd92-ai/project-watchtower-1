import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="top-nav">
      {/* Logo / title */}
      <div className="brand">
        WatchTower
      </div>

      {/* Hamburger button (mobile only via CSS) */}
      <button
        className={`hamburger ${isOpen ? "is-open" : ""}`}
        onClick={handleToggle}
        aria-label="Toggle navigation menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Nav links */}
      <nav className={`nav-links ${isOpen ? "nav-open" : ""}`}>
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/report" onClick={closeMenu}>
          Report
        </NavLink>
        <NavLink to="/reported-incidents" onClick={closeMenu}>
          Reported Incidents
        </NavLink>
        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>
      </nav>
    </header>
  );
}