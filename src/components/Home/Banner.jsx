import React from "react";
import { Link } from "react-router-dom";
import DesktopBackground from "../../assets/Home/Banner/Desktop Background.jpg";

function Banner() {
  return (
    <div className="home-banner">
      <div className="home-banner-container">
        <img
          src={DesktopBackground}
          alt="Ameya Coorg Homestay Property Image"
        />
        <div className="home-banner-text">
          <section>
            <h2>
              A Hidden Gem in the <span>Heart of Coorg</span>
            </h2>
            <p>
              Escape the ordinary and immerse yourself in a homestay that feels
              like home, yet so much more.
            </p>
          </section>
          <Link to="/" className="primary-btn">
            <p>Explore Rooms</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_117_4008"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_117_4008)">
                <path
                  d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
                  fill="white"
                />
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
