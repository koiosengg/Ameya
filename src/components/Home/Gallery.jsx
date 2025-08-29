import React from "react";
import { Link } from "react-router-dom";
import LivingRoom from "../../assets/Home/Gallery/Living Room.jpg";
import BedRoom from "../../assets/Home/Gallery/Bed Room.jpg";
import Kitchen from "../../assets/Home/Gallery/Kitchen.jpg";
import Balcony from "../../assets/Home/Gallery/Balcony.jpg";
import Bathroom from "../../assets/Home/Gallery/Bathroom.jpg";
import ParkingArea from "../../assets/Home/Gallery/Parking Area.jpg";

function Gallery() {
  return (
    <div className="section-template">
      <div className="section-template-heading">
        <h2>A Homestay That Has It All</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Urna lorem semper in varius.
          <br className="desktop" />
          Lectus egestas nunc facilisis id.
        </p>
      </div>
      <div className="home-gallery">
        <div className="home-gallery-container">
          <div className="gallery-set">
            <img
              src={LivingRoom}
              className="Ameya Coorg Homestay Living Room"
            />
            <section>
              <h3>Living Room</h3>
            </section>
          </div>
          <div className="gallery-set">
            <img src={BedRoom} className="Ameya Coorg Homestay Bed Room" />
            <section>
              <h3>Bed Room</h3>
            </section>
          </div>
          <div className="gallery-set">
            <img src={Kitchen} className="Ameya Coorg Homestay Kitchen" />
            <section>
              <h3>Kitchen</h3>
            </section>
          </div>
          <div className="gallery-set">
            <img src={Balcony} className="Ameya Coorg Homestay Balcony" />
            <section>
              <h3>Balcony</h3>
            </section>
          </div>
          <div className="gallery-set">
            <img src={Bathroom} className="Ameya Coorg Homestay Bathroom" />
            <section>
              <h3>Bathroom</h3>
            </section>
          </div>
          <div className="gallery-set">
            <img
              src={ParkingArea}
              className="Ameya Coorg Homestay Parking Area"
            />
            <section>
              <h3>Parking Area</h3>
            </section>
          </div>
        </div>
        <Link to="/gallery" className="secondary-btn">
          <p>View More</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <mask
              id="mask0_118_4540"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="25"
              height="24"
            >
              <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_118_4540)">
              <path
                d="M16.675 13H4.5V11H16.675L11.075 5.4L12.5 4L20.5 12L12.5 20L11.075 18.6L16.675 13Z"
                fill="#974C08"
              />
            </g>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Gallery;
