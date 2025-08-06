import React from "react";
import DesktopBackground from "../../assets/Contact/Hero/Desktop Background.png";

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
          <p>Have Questions?</p>
          <h1>Reach Out, Let’s Connect</h1>
        </section>
      </div>
    </div>
  );
}

export default Hero;
