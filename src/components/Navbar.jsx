import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Navbar/Logo.png";

function Navbar() {
  return (
    <header>
      <Link to="/" className="navbar-logo">
        <img src={Logo} alt="Ameya Coorg Homestay Logo" />
      </Link>
      <nav>
        <Link>Coorg</Link>
        <Link>Accomodations</Link>
        <Link>Gallery</Link>
        <Link>Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;
