import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import LivingRoomImg1 from "../../assets/Accomodations/Smaller Groups/Living Room/Living Room Img 1.jpg";
import BalconyImg1 from "../../assets/Accomodations/Smaller Groups/Balcony/Balcony Img 1.jpg";
import BathroomsImg1 from "../../assets/Accomodations/Smaller Groups/Bathrooms/Bathroom Img 1.jpg";
import BedroomsImg1 from "../../assets/Accomodations/Smaller Groups/Bedrooms/Bedrooms Img 1.jpg";
import BedroomsImg2 from "../../assets/Accomodations/Smaller Groups/Bedrooms/Bedrooms Img 2.jpg";
import AnandMahajan from "../../assets/Testimony/Anand Mahajan.png";
import KritiPrakash from "../../assets/Testimony/Kriti Prakash.png";
import Star from "../../assets/Testimony/Star.svg";
import Reach from "../Reach";
import CoorgGallery from "../Coorg/Gallery";

const AboutInfo = ({ info }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const words = info.split(" ");
  const shortText = words.slice(0, 100).join(" ");

  return (
    <section>
      <p className="room-details-hero-about-text">
        {isExpanded ? info : shortText + (words.length > 100 ? " . . . " : "")}
      </p>
      {words.length > 100 && (
        <Link
          className="tertiary-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <p>{isExpanded ? "See less" : "Read more"}</p>
        </Link>
      )}
    </section>
  );
};

function SmallerGroups() {
  const [activeOption, setActiveOption] = useState(true);
  const [activeIndexFAQ, setActiveIndexFAQ] = useState(null);

  const faqData = [
    {
      question: "Can I park my car in home stay?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Urna lorem semper in varius. Lectus egestas nunc facilisis id lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur. Urna lorem semper invarius. Lectus egestas nunc facilisis id lorem ipsum dolor sit",
    },
    {
      question: "Can I park my car in home stay?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Urna lorem semper in varius. Lectus egestas nunc facilisis id lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur. Urna lorem semper invarius. Lectus egestas nunc facilisis id lorem ipsum dolor sit",
    },
    {
      question: "Can I park my car in home stay?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Urna lorem semper in varius. Lectus egestas nunc facilisis id lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur. Urna lorem semper invarius. Lectus egestas nunc facilisis id lorem ipsum dolor sit",
    },
    {
      question: "Can I park my car in home stay?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Urna lorem semper in varius. Lectus egestas nunc facilisis id lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur. Urna lorem semper invarius. Lectus egestas nunc facilisis id lorem ipsum dolor sit",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndexFAQ((prev) => (prev === index ? null : index));
  };

  const containerRef = useRef(null);
  const slideRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalGroups, setTotalGroups] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateValues = () => {
      const sets = slideRef.current?.children.length || 0;
      setTotalGroups(Math.ceil(sets / 2));
      setContainerWidth(containerRef.current?.offsetWidth || 0);
    };

    updateValues();
    window.addEventListener("resize", updateValues);
    return () => window.removeEventListener("resize", updateValues);
  }, []);

  const handleLeftClick = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const handleRightClick = () => {
    if (activeIndex < totalGroups - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const translateX = -(activeIndex * (containerWidth + 20));

  return (
    <>
      <div className="room-details">
        <div className="room-details-hero">
          <div className="room-details-hero-top">
            <div className="back-to-details">
              <Link to="/accomodations">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5.25 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H5.25C5.05109 12.75 4.86032 12.671 4.71967 12.5303C4.57902 12.3897 4.5 12.1989 4.5 12C4.5 11.8011 4.57902 11.6103 4.71967 11.4697C4.86032 11.329 5.05109 11.25 5.25 11.25Z"
                    fill="#606060"
                  />
                  <path
                    d="M5.56086 12L11.7814 18.219C11.9222 18.3598 12.0013 18.5508 12.0013 18.75C12.0013 18.9492 11.9222 19.1402 11.7814 19.281C11.6405 19.4218 11.4495 19.5009 11.2504 19.5009C11.0512 19.5009 10.8602 19.4218 10.7194 19.281L3.96936 12.531C3.89952 12.4613 3.84411 12.3786 3.8063 12.2875C3.76849 12.1963 3.74902 12.0987 3.74902 12C3.74902 11.9014 3.76849 11.8037 3.8063 11.7126C3.84411 11.6214 3.89952 11.5387 3.96936 11.469L10.7194 4.719C10.8602 4.57817 11.0512 4.49905 11.2504 4.49905C11.4495 4.49905 11.6405 4.57817 11.7814 4.719C11.9222 4.85983 12.0013 5.05084 12.0013 5.25C12.0013 5.44916 11.9222 5.64017 11.7814 5.781L5.56086 12Z"
                    fill="#606060"
                  />
                </svg>
              </Link>
              <p>Back to details</p>
            </div>
            <h1> Large Family Room, multiple rooms</h1>
            <div className="room-details-hero-gallery">
              <Link
                to="/accomodations/smaller-groups/gallery"
                className="show-more-photos-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 18H19C18.4477 18 18 18.4477 18 19V20C18 20.5523 18.4477 21 19 21H20C20.5523 21 21 20.5523 21 20V19C21 18.4477 20.5523 18 20 18Z"
                    stroke="#121212"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 10.5H19C18.4477 10.5 18 10.9477 18 11.5V12.5C18 13.0523 18.4477 13.5 19 13.5H20C20.5523 13.5 21 13.0523 21 12.5V11.5C21 10.9477 20.5523 10.5 20 10.5Z"
                    stroke="#121212"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 3H19C18.4477 3 18 3.44772 18 4V5C18 5.55228 18.4477 6 19 6H20C20.5523 6 21 5.55228 21 5V4C21 3.44772 20.5523 3 20 3Z"
                    stroke="#121212"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.5 18H11.5C10.9477 18 10.5 18.4477 10.5 19V20C10.5 20.5523 10.9477 21 11.5 21H12.5C13.0523 21 13.5 20.5523 13.5 20V19C13.5 18.4477 13.0523 18 12.5 18Z"
                    stroke="#121212"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.5 10.5H11.5C10.9477 10.5 10.5 10.9477 10.5 11.5V12.5C10.5 13.0523 10.9477 13.5 11.5 13.5H12.5C13.0523 13.5 13.5 13.0523 13.5 12.5V11.5C13.5 10.9477 13.0523 10.5 12.5 10.5Z"
                    stroke="#121212"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.5 3H11.5C10.9477 3 10.5 3.44772 10.5 4V5C10.5 5.55228 10.9477 6 11.5 6H12.5C13.0523 6 13.5 5.55228 13.5 5V4C13.5 3.44772 13.0523 3 12.5 3Z"
                    stroke="#121212"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 18H4C3.44772 18 3 18.4477 3 19V20C3 20.5523 3.44772 21 4 21H5C5.55228 21 6 20.5523 6 20V19C6 18.4477 5.55228 18 5 18Z"
                    stroke="#121212"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 10.5H4C3.44772 10.5 3 10.9477 3 11.5V12.5C3 13.0523 3.44772 13.5 4 13.5H5C5.55228 13.5 6 13.0523 6 12.5V11.5C6 10.9477 5.55228 10.5 5 10.5Z"
                    stroke="#121212"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 3H4C3.44772 3 3 3.44772 3 4V5C3 5.55228 3.44772 6 4 6H5C5.55228 6 6 5.55228 6 5V4C6 3.44772 5.55228 3 5 3Z"
                    stroke="#121212"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Show more photos</p>
              </Link>
              <div
                className="room-details-hero-gallery-img"
                style={{ gridArea: "box-1" }}
              >
                <img src={BedroomsImg1} alt="Smaller Groups Living Room" />
              </div>
              <div
                className="room-details-hero-gallery-img"
                style={{ gridArea: "box-2" }}
              >
                <img src={BedroomsImg2} alt="Smaller Groups Living Room" />
              </div>
              <div
                className="room-details-hero-gallery-img"
                style={{ gridArea: "box-3" }}
              >
                <img src={BathroomsImg1} alt="Smaller Groups Bathrooms" />
              </div>
              <div
                className="room-details-hero-gallery-img"
                style={{ gridArea: "box-4" }}
              >
                <img src={LivingRoomImg1} alt="Smaller Groups Bedrooms" />
              </div>
              <div
                className="room-details-hero-gallery-img"
                style={{ gridArea: "box-5" }}
              >
                <img src={BalconyImg1} alt="Smaller Groups Bedrooms" />
              </div>
            </div>
            <div className="room-details-hero-labels">
              <label>2 Bedrooms</label>
              <span></span>
              <label>2 Bath</label>
              <span></span>
              <label>Balcony</label>
            </div>
            <div className="room-details-hero-price">
              <div className="room-details-hero-price-buttons">
                <button
                  className={
                    activeOption === true
                      ? "active-room-details-hero-price-button"
                      : ""
                  }
                  onClick={() => {
                    setActiveOption(true);
                  }}
                >
                  Including Breakfast
                </button>
                <button
                  className={
                    activeOption === false
                      ? "active-room-details-hero-price-button"
                      : ""
                  }
                  onClick={() => {
                    setActiveOption(false);
                  }}
                >
                  Excluding Breakfast
                </button>
              </div>
              <div className="room-details-hero-info">
                <div className="room-details-hero-info-left">
                  <section>
                    <span>Rooms</span>
                    <p>1 Room</p>
                  </section>
                  <div className="room-details-hero-info-left-line"></div>
                  <section>
                    <span>Guests</span>
                    <p>2 Guests</p>
                  </section>
                </div>
                <div className="room-details-hero-info-right">
                  <h2>
                    ₹{activeOption ? "9999" : "8999"} <span>+Taxes</span>
                  </h2>
                  <Link to="/contact" className="primary-btn">
                    <p>Know More</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="room-details-hero-about">
            <h2>About the Room</h2>
            <AboutInfo
              info=" Lorem ipsum dolor sit amet consectetur. Ultricies sed
                ullamcorper dictum in consequat viverra diam. Sed duis faucibus
                consectetur enim nunc amet. Mattis cursus ultrices sit eu lacus
                velit. Nulla eros felis faucibus dis fringilla fringilla purus
                tristique imperdiet.Ultricies sed ullamcorper dictum in consequat viverra diam. Sed duis faucibus
                consectetur enim nunc amet. Mattis cursus ultrices sit eu lacus
                velit. "
            />
          </div>
          <div className="room-details-hero-about">
            <h2>Popular Facilities</h2>
            <section>
              <div className="room-details-hero-facilities">
                <label>Free Wifi</label>
                <label>Free parking</label>
                <label>Free breakfast</label>
                <label>Room Service</label>
                <label>No Smoking Rooms</label>
                <label>Free Wifi</label>
                <label>Free parking</label>
                <label>Free breakfast</label>
                <label>Room Service</label>
                <label>No Smoking Rooms</label> <label>Free Wifi</label>
                <label>Free parking</label>
                <label>Free breakfast</label>
                <label>Room Service</label>
                <label>No Smoking Rooms</label>
              </div>
            </section>
          </div>
          <div className="room-details-hero-about">
            <h2>What Guests Ask?</h2>
            <div className="faq">
              {faqData.map((faq, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`faq-set ${
                      activeIndexFAQ === index ? "active-faq" : ""
                    }`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="faq-set-heading">
                      <h3>
                        {index + 1}. {faq.question}
                      </h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <mask
                          id="mask0_800_1761"
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
                            transform="matrix(0 -1 -1 0 24 24)"
                            fill="#D9D9D9"
                          />
                        </mask>
                        <g mask="url(#mask0_800_1761)">
                          <path
                            d="M2 8L12 18L22 8L20.225 6.225L12 14.45L3.775 6.225L2 8Z"
                            fill="#C2C2C2"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="faq-set-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                  <div className="faq-line"></div>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="room-details-hero-about">
            <h2>Reviews</h2>
            <div className="testimony">
              <div
                className="testimony-controls"
                onClick={handleLeftClick}
                style={{
                  opacity: activeIndex === 0 ? 0.3 : 1,
                  pointerEvents: activeIndex === 0 ? "none" : "auto",
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
                    id="mask0_117_4419"
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
                  <g mask="url(#mask0_117_4419)">
                    <path
                      d="M7.825 13H20V11H7.825L13.425 5.4L12 4L4 12L12 20L13.425 18.6L7.825 13Z"
                      fill="#1C1B1F"
                    />
                  </g>
                </svg>
              </div>
              <div className="testimony-container" ref={containerRef}>
                <div
                  className="testimony-slide"
                  ref={slideRef}
                  style={{
                    transform: `translateX(${translateX}px)`,
                    transition: "transform 0.5s ease",
                  }}
                >
                  <div className="testimony-set">
                    <div className="testimony-set-heading">
                      <div className="testimony-info">
                        <img src={AnandMahajan} alt="Anand Mahajan" />
                        <section>
                          <h3>Anand Mahajan</h3>
                          <span>Sun, 12 Jan 2025</span>
                        </section>
                      </div>
                      <div className="testimony-ratings">
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Egestas amet
                      malesuada nisi nunc eleifend. Tempor in consequat sapien
                      imperdiet diam. Rhoncus convallis imperdiet diam vitae
                      aliquam sagittis vel. Enim porttitor id vel consectetur
                      felis sed.
                    </p>
                  </div>
                  <div className="testimony-set">
                    <div className="testimony-set-heading">
                      <div className="testimony-info">
                        <img src={KritiPrakash} alt="Kriti Prakash" />
                        <section>
                          <h3>Kriti Prakash</h3>
                          <span>Mon, 10 Dec 2024</span>
                        </section>
                      </div>
                      <div className="testimony-ratings">
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Egestas amet
                      malesuada nisi nunc eleifend. Tempor in consequat sapien
                      imperdiet diam. Rhoncus convallis imperdiet diam vitae
                      aliquam sagittis vel. Enim porttitor id vel consectetur
                      felis sed.
                    </p>
                  </div>
                  <div className="testimony-set">
                    <div className="testimony-set-heading">
                      <div className="testimony-info">
                        <img src={AnandMahajan} alt="Anand Mahajan" />
                        <section>
                          <h3>Anand Mahajan</h3>
                          <span>Sun, 12 Jan 2025</span>
                        </section>
                      </div>
                      <div className="testimony-ratings">
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Egestas amet
                      malesuada nisi nunc eleifend. Tempor in consequat sapien
                      imperdiet diam. Rhoncus convallis imperdiet diam vitae
                      aliquam sagittis vel. Enim porttitor id vel consectetur
                      felis sed.
                    </p>
                  </div>
                  <div className="testimony-set">
                    <div className="testimony-set-heading">
                      <div className="testimony-info">
                        <img src={KritiPrakash} alt="Kriti Prakash" />
                        <section>
                          <h3>Kriti Prakash</h3>
                          <span>Mon, 10 Dec 2024</span>
                        </section>
                      </div>
                      <div className="testimony-ratings">
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Egestas amet
                      malesuada nisi nunc eleifend. Tempor in consequat sapien
                      imperdiet diam. Rhoncus convallis imperdiet diam vitae
                      aliquam sagittis vel. Enim porttitor id vel consectetur
                      felis sed.
                    </p>
                  </div>
                  <div className="testimony-set">
                    <div className="testimony-set-heading">
                      <div className="testimony-info">
                        <img src={AnandMahajan} alt="Anand Mahajan" />
                        <section>
                          <h3>Anand Mahajan</h3>
                          <span>Sun, 12 Jan 2025</span>
                        </section>
                      </div>
                      <div className="testimony-ratings">
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Egestas amet
                      malesuada nisi nunc eleifend. Tempor in consequat sapien
                      imperdiet diam. Rhoncus convallis imperdiet diam vitae
                      aliquam sagittis vel. Enim porttitor id vel consectetur
                      felis sed.
                    </p>
                  </div>
                  <div className="testimony-set">
                    <div className="testimony-set-heading">
                      <div className="testimony-info">
                        <img src={KritiPrakash} alt="Kriti Prakash" />
                        <section>
                          <h3>Kriti Prakash</h3>
                          <span>Mon, 10 Dec 2024</span>
                        </section>
                      </div>
                      <div className="testimony-ratings">
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Egestas amet
                      malesuada nisi nunc eleifend. Tempor in consequat sapien
                      imperdiet diam. Rhoncus convallis imperdiet diam vitae
                      aliquam sagittis vel. Enim porttitor id vel consectetur
                      felis sed.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="testimony-controls"
                onClick={handleRightClick}
                style={{
                  opacity: activeIndex === totalGroups - 1 ? 0.3 : 1,
                  pointerEvents:
                    activeIndex === totalGroups - 1 ? "none" : "auto",
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
                    id="mask0_117_4415"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_117_4415)">
                    <path
                      d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
                      fill="#1C1B1F"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="room-details-hero-about">
            <h2>Cancellation Policy</h2>
            <AboutInfo
              info=" Lorem ipsum dolor sit amet consectetur. Ultricies sed
                ullamcorper dictum in consequat viverra diam. Sed duis faucibus
                consectetur enim nunc amet. Mattis cursus ultrices sit eu lacus
                velit. Nulla eros felis faucibus dis fringilla fringilla purus
                tristique imperdiet.Ultricies sed ullamcorper dictum in consequat viverra diam. Sed duis faucibus
                consectetur enim nunc amet. Mattis cursus ultrices sit eu lacus
                velit. "
            />
          </div>
        </div>
      </div>
      <Reach />
      <CoorgGallery overlay={true} />
    </>
  );
}

export default SmallerGroups;
