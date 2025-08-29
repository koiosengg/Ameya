import React, { useEffect, useRef, useState } from "react";
import Background from "../assets/Testimony/Background.svg";
import AnandMahajan from "../assets/Testimony/Anand Mahajan.png";
import KritiPrakash from "../assets/Testimony/Kriti Prakash.png";
import Star from "../assets/Testimony/Star.svg";
import Kumarsudip from "../assets/Testimony/Kumarsudip.png";
import Sutonuka from "../assets/Testimony/Sutonuka.jpg";
import Nalini from "../assets/Testimony/Nalini.jpg";
import Karthikeyan from "../assets/Testimony/Karthikeyan.jpg";

function Testimony() {
  const containerRef = useRef(null);
  const slideRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalGroups, setTotalGroups] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateValues = () => {
      const sets = slideRef.current?.children.length || 0;
      const isMobile = window.innerWidth < 1200;

      // if screen < 1200px → 1 per group, else 2 per group
      const perGroup = isMobile ? 1 : 2;

      setTotalGroups(Math.ceil(sets / perGroup));
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
    <div className="section-template">
      <div className="section-template-heading">
        <h2>
          Memories Shared, <br />
          Moments Cherished
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Urna lorem semper in varius.
          <br className="desktop" />
          Lectus egestas nunc facilisis id.
        </p>
      </div>

      <div className="testimony">
        <img src={Background} className="testimony-background" />
        <div
          className="testimony-controls left"
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
                  <img src={Nalini} alt="Nalini" />
                  <section>
                    <h3>Nalini</h3>
                    <span>March 4, 2025</span>
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
                The staff at Ameya homestay were relly helpful and
                understanding. They would cater to your needs. The room was
                really good in terms of size and location. The owner understood
                our challenges as we were travelling with a toddler so they
                allocated a room which could cater to my needs. It was fantastic
                experience overall.
              </p>
            </div>
            <div className="testimony-set">
              <div className="testimony-set-heading">
                <div className="testimony-info">
                  <img src={Sutonuka} alt="Sutonuka" />
                  <section>
                    <h3>Sutonuka</h3>
                    <span>March 20, 2025</span>
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
                The property is located very close to all the restaurant and
                market yet it is secluded surrounded by thick forest making it a
                very peaceful place to stay. It was very clean and well
                maintained with helpful staff.
              </p>
            </div>
            <div className="testimony-set">
              <div className="testimony-set-heading">
                <div className="testimony-info">
                  <img src={Kumarsudip} alt="Kumarsudip" />
                  <section>
                    <h3>Kumarsudip</h3>
                    <span>March 23, 2025</span>
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
                Home like atmosphere,very neat and clean,good staff incl.cook,
                centrally located yet within nature, quite big rooms and toilets
                & balcony attached.
              </p>
            </div>
            <div className="testimony-set">
              <div className="testimony-set-heading">
                <div className="testimony-info">
                  <img src={Karthikeyan} alt="Karthikeyan" />
                  <section>
                    <h3>Karthikeyan</h3>
                    <span>March 31, 2025</span>
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
                Good stay, clean and cooperative & friendly staff. It was a
                pleasant stay.
              </p>
            </div>
          </div>
        </div>
        <div
          className="testimony-controls right"
          onClick={handleRightClick}
          style={{
            opacity: activeIndex === totalGroups - 1 ? 0.3 : 1,
            pointerEvents: activeIndex === totalGroups - 1 ? "none" : "auto",
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
  );
}

export default Testimony;
