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
          Lorem ipsum dolor sit amet consectetur. Urna lorem semper in varius.
          <br className="desktop" />
          Lectus egestas nunc facilisis id.
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
            <h3>Cafeteria</h3>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Cafe;
