import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Navbar/Logo.png";

function Navbar() {
  return (
    <header>
      <NavLink to="/" className="navbar-logo">
        <img src={Logo} alt="Ameya Coorg Homestay Logo" />
      </NavLink>
      <nav>
        <NavLink
          to="/accomodations"
          className={({ isActive }) =>
            isActive ? "active-navbar-link" : undefined
          }
        >
          Accomodations
        </NavLink>

        <NavLink
          to="/coorg"
          className={({ isActive }) =>
            isActive ? "active-navbar-link" : undefined
          }
        >
          Coorg
        </NavLink>

        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive ? "active-navbar-link" : undefined
          }
        >
          Gallery
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "active-navbar-link" : undefined
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
