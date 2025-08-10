import React from "react";
import DesktopBackground from "../../assets/Gallery/Hero/Desktop Background.png";

function Hero() {
  return (
    <div className="home-hero contact-hero">
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
          <p>Frames of Serenity</p>
          <h1>A Visual Escape into Ameya</h1>
        </section>
      </div>
    </div>
  );
}

export default Hero;
