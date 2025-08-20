import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import SoloTravelers1 from "../assets/Accomodations/Solo Travelers/Bedrooms/Bedrooms Img 1.jpg";
import SoloTravelers2 from "../assets/Accomodations/Solo Travelers/Bedrooms/Bedrooms Img 2.jpg";
import SoloTravelers3 from "../assets/Accomodations/Solo Travelers/Bedrooms/Bedrooms Img 3.jpg";
import FamilyAndFriends1 from "../assets/Accomodations/Family And Friends/Bedrooms/Bedrooms Img 1.jpg";
import FamilyAndFriends2 from "../assets/Accomodations/Family And Friends/Bedrooms/Bedrooms Img 2.jpg";
import FamilyAndFriends3 from "../assets/Accomodations/Family And Friends/Bedrooms/Bedrooms Img 3.jpg";
import SmallerGroups1 from "../assets/Accomodations/Smaller Groups/Bedrooms/Bedrooms Img 1.jpg";
import SmallerGroups2 from "../assets/Accomodations/Smaller Groups/Bedrooms/Bedrooms Img 2.jpg";
import SmallerGroups3 from "../assets/Accomodations/Smaller Groups/Bedrooms/Bedrooms Img 3.jpg";
import LargerGroups1 from "../assets/Accomodations/Larger Groups/Bedrooms/Bedrooms Img 1.jpg";
import LargerGroups2 from "../assets/Accomodations/Larger Groups/Bedrooms/Bedrooms Img 2.jpg";
import LargerGroups3 from "../assets/Accomodations/Larger Groups/Bedrooms/Bedrooms Img 3.jpg";

const AccomodationsSet = ({
  NoOfguests,
  images,
  title,
  NoOfBeds,
  amenities,
  toLink,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const slideLeft = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const slideRight = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
  };

  const getTranslateX = () => {
    if (containerRef.current) {
      return -(containerRef.current.offsetWidth * currentIndex);
    }
    return 0;
  };

  return (
    <>
      <div className="accomodations-container">
        <span className="accomodations-container-heading">{NoOfguests}</span>
        <div className="accomodations-div">
          <div className="coorg-trek-set">
            <div className="coorg-trek-set-img-container" ref={containerRef}>
              <div
                className="coorg-trek-set-img-slide"
                style={{
                  transform: `translateX(${getTranslateX()}px)`,
                  transition: "transform 0.4s ease",
                  display: "flex",
                }}
              >
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${title} ${idx + 1}`}
                    className="coorg-trek-set-img"
                    style={{ flexShrink: 0, width: "100%" }}
                  />
                ))}
              </div>
              <div
                className="coorg-trek-set-img-controls coorg-trek-set-img-controls-left"
                style={{
                  opacity: currentIndex === 0 ? 0.3 : 1,
                  pointerEvents: currentIndex === 0 ? "none" : "auto",
                }}
                onClick={slideLeft}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    d="M7.825 13H20V11H7.825L13.425 5.4L12 4L4 12L12 20L13.425 18.6L7.825 13Z"
                    fill="#1C1B1F"
                  />
                </svg>
              </div>
              <div
                className="coorg-trek-set-img-controls coorg-trek-set-img-controls-right"
                style={{
                  opacity: currentIndex === images.length - 1 ? 0.3 : 1,
                  cursor:
                    currentIndex === images.length - 1
                      ? "not-allowed"
                      : "pointer",
                  pointerEvents:
                    currentIndex === images.length - 1 ? "none" : "auto",
                }}
                onClick={slideRight}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
                    fill="#1C1B1F"
                  />
                </svg>
              </div>
              <div className="coorg-trek-set-img-indicators">
                {images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`coorg-trek-set-img-dot ${
                      currentIndex === idx
                        ? "active-coorg-trek-set-img-dot"
                        : ""
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            <div className="accomodations-set-info">
              <div className="accomodations-set-info-text">
                <section>
                  <h3>{title}</h3>
                  <hr></hr>
                </section>
                <section>
                  <h4>{NoOfBeds}</h4>
                  <p>{amenities}</p>
                </section>
              </div>
              <Link to={toLink} className="secondary-btn">
                <p>View Room Details</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function Accomodations() {
  const [activeTab, setActiveTab] = useState("SoloTravelers");

  const tabs = [
    { id: "SoloTravelers", label: "Solo Travelers" },
    { id: "FamilyAndFriends", label: "Family & Friends" },
    { id: "SmallerGroups", label: "Smaller Groups" },
    { id: "LargerGroups", label: "Larger Groups" },
  ];

  return (
    <div className="accomodations">
      <div className="accomodations-heading">
        <div className="accomodations-heading-text">
          <h2>Perfect Matches Just for You!</h2>
          <p>We’ve handpicked the best stays so you can relax in comfort.</p>
        </div>

        <div className="accomodations-heading-tabs">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`accomodations-heading-tab ${
                activeTab === tab.id ? "active-accomodations-heading-tab" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>

      {activeTab === "SoloTravelers" && (
        <AccomodationsSet
          NoOfguests=" Rooms for 1-2 People"
          images={[SoloTravelers3, SoloTravelers1, SoloTravelers2]}
          title="Deluxe Room / Honeymoon Suite"
          NoOfBeds="Queen-size bed"
          amenities="Private premium bathroom with bathtub, Romantic décor, balcony, Breakfast included (optional), Custom menu options"
          toLink="solo-travelers"
        />
      )}

      {activeTab === "FamilyAndFriends" && (
        <AccomodationsSet
          NoOfguests=" Rooms for 4-5 People"
          images={[FamilyAndFriends1, FamilyAndFriends2, FamilyAndFriends3]}
          title="Family Suite / Triple / Quad Room"
          NoOfBeds="Multiple beds (queen + single beds)"
          amenities="Attached bathroom, Common seating area, Breakfast included (optional)"
          toLink="family-and-friends"
        />
      )}

      {activeTab === "SmallerGroups" && (
        <AccomodationsSet
          NoOfguests=" Rooms for 5-10 People"
          images={[SmallerGroups3, SmallerGroups2, SmallerGroups1]}
          title="Large Family Room, multiple rooms"
          NoOfBeds="Multiple beds (bunk beds or separate single beds)"
          amenities="Attached bathroom in each room, Common areas, Suitable for group travellers or extended families"
          toLink="smaller-groups"
        />
      )}

      {activeTab === "LargerGroups" && (
        <AccomodationsSet
          NoOfguests=" Rooms for 10-25 People"
          images={[LargerGroups1, LargerGroups2, LargerGroups3]}
          title="Private Entrance, Multiple Rooms, Common Hall, dining space"
          NoOfBeds="Multiple interconnected rooms (e.g., 4 rooms with 3 to 5 beds each)"
          amenities="Shared common hall (for dining, meetings, or socializing), Bulk discount for booking entire space"
          toLink="larger-groups"
        />
      )}
    </div>
  );
}

export default Accomodations;
