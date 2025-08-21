import React, { useState } from "react";
import { Link } from "react-router-dom";
import CompanyLogo from "../assets/Company Logo.png";
import Menu from "../assets/menu.png";
import MenuCancel from "../assets/menu cancel.png";

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
      <Link
        to="/"
        state={{ scrollTo: "Banner" }}
        className="company-logo"
        onClick={handleLinkClick}
      >
        <img src={CompanyLogo} />
        <p>Balaji Proto Tools</p>
      </Link>
      <nav className="desktop">
        <Link to="/" state={{ scrollTo: "OurServices" }}>
          Our Service
        </Link>
        <Link to="/" state={{ scrollTo: "AboutUs" }}>
          About Us
        </Link>
      </nav>
      <Link to="/contact" className="primary-button desktop">
        <p>Contact Us</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <mask
            id="mask0_215_40"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_215_40)">
            <path
              d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
              fill="white"
            />
          </g>
        </svg>
      </Link>
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
          <Link
            to="/"
            state={{ scrollTo: "OurServices" }}
            onClick={toggleMobileNav}
          >
            Our Services
          </Link>
          <Link
            to="/"
            state={{ scrollTo: "AboutUs" }}
            onClick={toggleMobileNav}
          >
            About Us
          </Link>
        </nav>
        <Link
          to="/contact"
          className="primary-button"
          onClick={toggleMobileNav}
        >
          <p>Contact Us</p>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
