import React from "react";
import DesktopBackground from "../../assets/Coorg/Hero/Desktop Background.jpg";
import Mandala from "../../assets/Home/Banner/Mandala.svg";

function Hero() {
  return (
    <div className="home-hero coorg-hero">
      <div className="home-hero-container">
        <div className="home-hero-slide">
          <img
            src={DesktopBackground}
            alt="Ameya Coorg Homestay Property Image"
          />
        </div>
      </div>
      <div className="home-hero-center">
        <section>
          <p>Explore Coorg</p>
          <h1>Coorg’s Unmissable Gems</h1>
        </section>
      </div>
      <img src={Mandala} className="home-hero-mandala" />
    </div>
  );
}

export default Hero;
