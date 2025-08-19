import React from "react";
import { Link } from "react-router-dom";
import Trekking from "../../assets/Coorg/Gallery/Trekking.png";
import WoodenBridge from "../../assets/Coorg/Gallery/Wooden Bridge.png";
import FamilySpots from "../../assets/Coorg/Gallery/Family Spots.png";
import Waterfalls from "../../assets/Coorg/Gallery/Waterfalls.png";
import JainMonastery from "../../assets/Coorg/Gallery/Jain Monastery.png";
import JeepseyRides from "../../assets/Coorg/Gallery/Jeepsey Rides.png";
import CoffeePlantations from "../../assets/Coorg/Gallery/Coffee Plantations.png";
import ExploreFarms from "../../assets/Coorg/Gallery/Explore Farms.png";
import WildLifeSafari from "../../assets/Coorg/Gallery/Wild Life Safari.png";

function Gallery({ overlay }) {
  return (
    <div className="section-template">
      <div className="section-template-heading">
        <h2>Discover the Soul of Coorg</h2>
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
        {overlay && (
          <>
            {" "}
            <div className="coorg-gallery-overlay"></div>
            <Link to="/coorg" className="primary-btn">
              <p>Explore Coorg</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <mask
                  id="mask0_377_5577"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="25"
                  height="25"
                >
                  <rect x="0.5" y="0.5" width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_377_5577)">
                  <path
                    d="M16.675 13.5H4.5V11.5H16.675L11.075 5.9L12.5 4.5L20.5 12.5L12.5 20.5L11.075 19.1L16.675 13.5Z"
                    fill="white"
                  />
                </g>
              </svg>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Gallery;
