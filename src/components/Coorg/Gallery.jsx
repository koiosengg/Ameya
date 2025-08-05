import React from "react";
import Trekking from "../../assets/Coorg/Gallery/Trekking.png";
import WoodenBridge from "../../assets/Coorg/Gallery/Wooden Bridge.png";
import FamilySpots from "../../assets/Coorg/Gallery/Family Spots.png";
import Waterfalls from "../../assets/Coorg/Gallery/Waterfalls.png";
import JainMonastery from "../../assets/Coorg/Gallery/Jain Monastery.png";
import JeepseyRides from "../../assets/Coorg/Gallery/Jeepsey Rides.png";
import CoffeePlantations from "../../assets/Coorg/Gallery/Coffee Plantations.png";
import ExploreFarms from "../../assets/Coorg/Gallery/Explore Farms.png";
import WildLifeSafari from "../../assets/Coorg/Gallery/Wild Life Safari.png";

function Gallery() {
  return (
    <div className="section-template">
      <div className="section-template-heading">
        <h2>How to Reach</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Urna lorem semper in varius.
          <br className="desktop" />
          Lectus egestas nunc facilisis id.
        </p>
      </div>
      <div className="coorg-gallery">
        <div className="gallery-set" style={{ gridArea: "box-1" }}>
          <img src={Trekking} className="Corrg Trekking" />
          <section>
            <h3>Trekking</h3>
          </section>
        </div>
        <div className="gallery-set" style={{ gridArea: "box-2" }}>
          <img src={WoodenBridge} className="Corrg Wooden Bridge" />
          <section>
            <h3>Wooden Bridge</h3>
          </section>
        </div>
        <div className="gallery-set" style={{ gridArea: "box-3" }}>
          <img src={FamilySpots} className="Corrg Family Spots" />
          <section>
            <h3>Family Spots</h3>
          </section>
        </div>
        <div className="gallery-set" style={{ gridArea: "box-4" }}>
          <img src={Waterfalls} className="Corrg Waterfalls" />
          <section>
            <h3>Waterfalls</h3>
          </section>
        </div>
        <div className="gallery-set" style={{ gridArea: "box-5" }}>
          <img src={JainMonastery} className="Corrg Jain Monastery" />
          <section>
            <h3>Jain Monastery</h3>
          </section>
        </div>
        <div className="gallery-set" style={{ gridArea: "box-6" }}>
          <img src={JeepseyRides} className="Corrg Jeepsey Rides" />
          <section>
            <h3>Jeepsey Rides</h3>
          </section>
        </div>
        <div className="gallery-set" style={{ gridArea: "box-7" }}>
          <img src={CoffeePlantations} className="Corrg Coffee Plantations" />
          <section>
            <h3>Coffee Plantations</h3>
          </section>
        </div>
        <div className="gallery-set" style={{ gridArea: "box-8" }}>
          <img src={ExploreFarms} className="Corrg Explore Farms" />
          <section>
            <h3>Explore Farms</h3>
          </section>
        </div>
        <div className="gallery-set" style={{ gridArea: "box-9" }}>
          <img src={WildLifeSafari} className="Corrg Wild Life Safari" />
          <section>
            <h3>Wild Life Safari</h3>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
