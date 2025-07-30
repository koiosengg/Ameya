import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Footer/Logo.png";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-container-top">
          <Link to="/">
            <img src={Logo} alt="Ameya Coorg Homestay Logo" />
          </Link>
          <h2>
            Experience Serenity, <br /> Embrace Comfort.
          </h2>
          <Link to="/contact" className="primary-btn">
            <p>Contact Us</p>
          </Link>
        </div>
        <div className="footer-container-line"></div>
        <div className="footer-container-bottom">
          <div className="footer-container-bottom-left">
            <Link>About</Link>
            <Link>Accomodation</Link>
            <Link>Gallery</Link>
          </div>
          <div className="footer-container-bottom-center">
            <Link>Privacy</Link>
            <div className="footer-container-bottom-center-line"></div>
            <Link>Terms of Service</Link>
            <div className="footer-container-bottom-center-line"></div>
            <Link>Cookies</Link>
          </div>
          <a href="#" target="blank">
            Near Raja’s Seat, Sunset Valley Road,
            <br /> Madikeri, Coorg, Karnataka – 571201
          </a>
        </div>
      </div>
      <div className="footer-below">
        <p>© 2025 Ameya Homestays. All Rights Reserved.</p>
        <p>
          Crafted by{" "}
          <a href="https://www.koiostudio.com/" target="_blank">
            Koios Studios
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
