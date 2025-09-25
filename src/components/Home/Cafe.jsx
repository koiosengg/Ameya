import React from "react";
import CafeteriaImg1 from "../../assets/Home/Cafe/Cafeteria Img 1.png";
import CafeteriaImg2 from "../../assets/Home/Cafe/Cafeteria Img 2.png";
import CafeteriaImg3 from "../../assets/Home/Cafe/Cafeteria Img 3.png";

function Cafe() {
  return (
    <div className="section-template">
      <div className="section-template-heading">
        <h2>A Cafe with Comfort Perks</h2>
        <p>
          Our on-site café serves fresh brews, bites, and cozy vibes.
          <br className="desktop" />
          Perfect for relaxing or catching up.
        </p>
      </div>
      <div className="home-cafe">
        <div className="gallery-set" style={{ gridArea: "box-1" }}>
          <img src={CafeteriaImg1} className="Ameya Coory Homestay Cafeteria" />
          <section>
            <h3>Cafeteria</h3>
          </section>
        </div>
        <div className="gallery-set" style={{ gridArea: "box-2" }}>
          <img src={CafeteriaImg2} className="Ameya Coory Homestay Cafeteria" />
          <section>
            <h3>Hot Coffee</h3>
          </section>
        </div>
        <div className="gallery-set" style={{ gridArea: "box-3" }}>
          <img src={CafeteriaImg3} className="Ameya Coory Homestay Cafeteria" />
          <section>
            <h3> Seating area</h3>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Cafe;
