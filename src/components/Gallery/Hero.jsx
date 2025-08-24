import React from "react";
import DesktopBackground from "../../assets/Gallery/Hero/Desktop Background.png";
import MobileBackground from "../../assets/Gallery/Hero/Mobile Background.png";
import Mandala from "../../assets/Home/Banner/Mandala.svg";

function Hero() {
  return (
    <div className="home-hero contact-hero">
      <div className="home-hero-container">
        <div className="home-hero-slide">
          <img
            src={DesktopBackground}
            className="desktop"
            alt="Ameya Coorg Homestay Property Image"
          />
          <img
            src={MobileBackground}
            className="mobile"
            alt="Ameya Coorg Homestay Property Image"
          />
        </div>
      </div>
      <div className="home-hero-center">
        <section>
          <p>Frames of Serenity</p>
          <h1>A Visual Escape into Ameya</h1>
        </section>
      </div>
      <img src={Mandala} className="home-hero-mandala" />
    </div>
  );
}

export default Hero;
