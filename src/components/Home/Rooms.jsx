import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FamilyAndFriends from "../../assets/Home/Rooms/Family and Friends.jpg";
import SoloTravelers from "../../assets/Home/Rooms/Solo Travelers.jpg";
import LargerGroups from "../../assets/Home/Rooms/Larger Groups.jpg";
import SmallerGroups from "../../assets/Home/Rooms/Smaller Groups.jpg";
function Rooms() {
  const setRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateWidth, setTranslateWidth] = useState(0);

  function handleRightClick() {
    const setWidth = setRef.current?.offsetWidth + 20;
    if (activeIndex < 2) {
      setTranslateWidth((prev) => prev + setWidth);
      setActiveIndex((prev) => prev + 1);
    }
  }

  function handleLeftClick() {
    const setWidth = setRef.current?.offsetWidth + 20;
    if (activeIndex > 0) {
      setTranslateWidth((prev) => prev - setWidth);
      setActiveIndex((prev) => prev - 1);
    }
  }

  return (
    <div className="home-rooms">
      <div className="home-rooms-heading">
        <h2>Rooms & Retreats</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Urna lorem semper in varius.
          Lectus egestas nunc facilisis id.
        </p>
      </div>
      <div className="home-rooms-container">
        <div
          className="home-rooms-slide"
          style={{
            transform: `translateX(-${translateWidth}px)`,
            transition: "transform 0.5s ease",
          }}
        >
          <div className="home-rooms-set">
            <img src={SoloTravelers} alt="Solo Travelers Room" />
            <section>
              <h3>Solo Travelers</h3>
              <Link to="/accomodations/solo-travelers" className="tertiary-btn">
                <p>More Details</p>
              </Link>
            </section>
          </div>
          <div className="home-rooms-set" ref={setRef}>
            <img src={FamilyAndFriends} alt="Family and Friends Room" />
            <section>
              <h3>Family & Friends</h3>
              <Link
                to="/accomodations/family-and-friends"
                className="tertiary-btn"
              >
                <p>More Details</p>
              </Link>
            </section>
          </div>
          <div className="home-rooms-set">
            <img src={SmallerGroups} alt="Smaller Groups Room" />
            <section>
              <h3>Smaller Groups</h3>
              <Link to="/accomodations/smaller-groups" className="tertiary-btn">
                <p>More Details</p>
              </Link>
            </section>
          </div>
          <div className="home-rooms-set">
            <img src={LargerGroups} alt="Larger Groups Room" />
            <section>
              <h3>Larger Groups</h3>
              <Link to="/accomodations/larger-groups" className="tertiary-btn">
                <p>More Details</p>
              </Link>
            </section>
          </div>
        </div>
        <div
          className="home-room-control-left"
          onClick={handleLeftClick}
          style={{
            opacity: activeIndex === 0 ? 0 : 1,
            pointerEvents: activeIndex === 0 ? "none" : "auto",
            cursor: activeIndex === 0 ? "default" : "pointer",
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
              id="mask0_660_10762"
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
            <g mask="url(#mask0_660_10762)">
              <path
                d="M7.825 13H20V11H7.825L13.425 5.4L12 4L4 12L12 20L13.425 18.6L7.825 13Z"
                fill="#1C1B1F"
              />
            </g>
          </svg>
        </div>
        <div
          className="home-room-control-right"
          onClick={handleRightClick}
          style={{
            opacity: activeIndex === 2 ? 0 : 1,
            pointerEvents: activeIndex === 2 ? "none" : "auto",
            cursor: activeIndex === 2 ? "default" : "pointer",
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
              id="mask0_660_10736"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_660_10736)">
              <path
                d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
                fill="#1C1B1F"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
