import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Navbar/Logo.png";
import Menu from "../assets/Navbar/menu.png";
import MenuCancel from "../assets/Navbar/menu cancel.png";

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    setHasToggled(true);
  };

  const handleLinkClick = () => {
    if (isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }
  };

  return (
    <header>
      <NavLink to="/" className="navbar-logo" onClick={handleLinkClick}>
        <img src={Logo} alt="Ameya Coorg Homestay Logo" />
      </NavLink>
      <nav className="desktop">
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
      <div className="mobile-navbar-button mobile" onClick={toggleMobileNav}>
        <img
          src={Menu}
          alt="Mobile navbar open"
          style={{
            display: isMobileNavOpen ? "none" : hasToggled ? "block" : "",
          }}
        />
        <img
          src={MenuCancel}
          alt="Mobile navbar close"
          style={{
            display: isMobileNavOpen ? "block" : hasToggled ? "none" : "none",
          }}
        />
      </div>
      <div
        className={`mobileNavbar mobile ${
          isMobileNavOpen
            ? "activeMobileNavbar"
            : hasToggled
            ? "nonactiveMobileNavbar"
            : ""
        }`}
      >
        <nav>
          <NavLink to="/accomodations" onClick={handleLinkClick}>
            Accomodations
          </NavLink>
          <NavLink to="/coorg" onClick={handleLinkClick}>
            Coorg
          </NavLink>
          <NavLink to="/gallery" onClick={handleLinkClick}>
            Gallery
          </NavLink>
          <NavLink to="/contact" onClick={handleLinkClick}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
