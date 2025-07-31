import React, { useState } from "react";
import { Link } from "react-router-dom";
import Img1 from "../../assets/Home/Hero/Hero Img 1.png";
import Img2 from "../../assets/Home/Hero/Hero Img 2.png";
import Img3 from "../../assets/Home/Hero/Hero Img 3.jpg";
import Img4 from "../../assets/Home/Hero/Hero Img 4.jpg";
import Mandala from "../../assets/Home/Banner/Mandala.svg";

const images = [Img1, Img2, Img3, Img4];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const goRight = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="home-hero">
      <div className="home-hero-container">
        <div
          className="home-hero-slide"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Ameya Coorg Homestay Property Image"
            />
          ))}
        </div>
      </div>

      <div className="home-hero-center">
        <div
          className="home-hero-control"
          onClick={goLeft}
          style={{
            opacity: currentIndex === 0 ? 0.4 : 1,
            cursor: "pointer",
            pointerEvents: currentIndex === 0 ? "none" : "auto",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_613_128"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_613_128)">
              <path
                d="M16.0769 22.0535L6.0769 12.0535L16.0769 2.05347L17.8519 3.82847L9.6269 12.0535L17.8519 20.2785L16.0769 22.0535Z"
                fill="white"
              />
            </g>
          </svg>
        </div>

        <section>
          <p>Must Experience</p>
          <h1>A Cozy Hideaway in Coorg</h1>
        </section>

        <div
          className="home-hero-control"
          onClick={goRight}
          style={{
            opacity: currentIndex === images.length - 1 ? 0.4 : 1,
            cursor: "pointer",
            pointerEvents: currentIndex === images.length - 1 ? "none" : "auto",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_613_1888"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect
                width="24"
                height="24"
                transform="matrix(-1 0 0 1 24 0)"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_613_1888)">
              <path
                d="M7.9231 22.0535L17.9231 12.0535L7.9231 2.05347L6.1481 3.82847L14.3731 12.0535L6.1481 20.2785L7.9231 22.0535Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
      </div>

      <div className="home-hero-bottom">
        <div className="home-hero-indicator">
          {images.map((_, index) => (
            <div
              key={index}
              className={`home-hero-indicator-bar ${
                index === currentIndex ? "home-hero-indicator-active-bar" : ""
              }`}
            ></div>
          ))}
        </div>
        <div className="home-hero-buttons">
          <Link to="/" className="home-hero-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="219"
              height="56"
              viewBox="0 0 219 56"
              fill="none"
              className="home-hero-button-background"
            >
              <path
                d="M13.5732 0.75H205.896C207.455 0.75 208.848 1.90251 209.453 3.51074C210.944 7.47202 213.606 10.6779 215.929 12.5137C217.253 13.5599 218.25 14.9832 218.25 16.4375V41.3135C218.25 42.7607 217.258 44.1557 215.903 45.1143C213.744 46.6416 211.271 49.2114 209.791 52.5654C209.1 54.1318 207.724 55.2499 206.195 55.25H13.2783C11.7474 55.25 10.3644 54.1292 9.66406 52.5625C8.09139 49.044 5.37531 46.2157 3.08496 44.5654C1.73896 43.5956 0.75 42.1816 0.75 40.7295V15.8545C0.75 14.4064 1.74007 13.0089 3.09766 12.0625C5.52009 10.3737 8.38468 7.4028 9.9668 3.5166C10.6221 1.90699 12.016 0.750135 13.5732 0.75Z"
                fill="#DFC8B2"
                stroke="#974C08"
                strokeWidth="1.5"
              />
            </svg>
            <div className="home-hero-button-container">
              <p>Book your stay</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <mask
                  id="mask0_468_4088"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="21"
                >
                  <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_468_4088)">
                  <path
                    d="M13.4793 11.3333H3.3335V9.66665H13.4793L8.81266 4.99998L10.0002 3.83331L16.6668 10.5L10.0002 17.1666L8.81266 16L13.4793 11.3333Z"
                    fill="#974C08"
                  />
                </g>
              </svg>
            </div>
          </Link>
          <Link to="/" className="home-hero-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="219"
              height="56"
              viewBox="0 0 219 56"
              fill="none"
              className="home-hero-button-background"
            >
              <path
                d="M13.5732 0.75H205.896C207.455 0.75 208.848 1.90251 209.453 3.51074C210.944 7.47202 213.606 10.6779 215.929 12.5137C217.253 13.5599 218.25 14.9832 218.25 16.4375V41.3135C218.25 42.7607 217.258 44.1557 215.903 45.1143C213.744 46.6416 211.271 49.2114 209.791 52.5654C209.1 54.1318 207.724 55.2499 206.195 55.25H13.2783C11.7474 55.25 10.3644 54.1292 9.66406 52.5625C8.09139 49.044 5.37531 46.2157 3.08496 44.5654C1.73896 43.5956 0.75 42.1816 0.75 40.7295V15.8545C0.75 14.4064 1.74007 13.0089 3.09766 12.0625C5.52009 10.3737 8.38468 7.4028 9.9668 3.5166C10.6221 1.90699 12.016 0.750135 13.5732 0.75Z"
                fill="#974C08"
                stroke="#E7E7E7"
                strokeWidth="1.5"
              />
            </svg>
            <div className="home-hero-button-container">
              <p>Chat on Whats App</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <mask
                  id="mask0_613_287"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="21"
                  height="21"
                >
                  <rect x="0.5" y="0.5" width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_613_287)">
                  <path
                    d="M13.9792 11.3333H3.83337V9.66665H13.9792L9.31254 4.99998L10.5 3.83331L17.1667 10.5L10.5 17.1666L9.31254 16L13.9792 11.3333Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
          </Link>
        </div>
      </div>

      <img src={Mandala} className="home-hero-mandala" />
    </div>
  );
}

export default Hero;
