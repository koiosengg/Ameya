import React, { useEffect, useRef, useState } from "react";
import Background from "../assets/Testimony/Background.svg";
import AnandMahajan from "../assets/Testimony/Anand Mahajan.png";
import KritiPrakash from "../assets/Testimony/Kriti Prakash.png";
import Star from "../assets/Testimony/Star.svg";

function Testimony() {
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
                Lorem ipsum dolor sit amet consectetur. Egestas amet malesuada
                nisi nunc eleifend. Tempor in consequat sapien imperdiet diam.
                Rhoncus convallis imperdiet diam vitae aliquam sagittis vel.
                Enim porttitor id vel consectetur felis sed.
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
                Lorem ipsum dolor sit amet consectetur. Egestas amet malesuada
                nisi nunc eleifend. Tempor in consequat sapien imperdiet diam.
                Rhoncus convallis imperdiet diam vitae aliquam sagittis vel.
                Enim porttitor id vel consectetur felis sed.
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
                Lorem ipsum dolor sit amet consectetur. Egestas amet malesuada
                nisi nunc eleifend. Tempor in consequat sapien imperdiet diam.
                Rhoncus convallis imperdiet diam vitae aliquam sagittis vel.
                Enim porttitor id vel consectetur felis sed.
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
                Lorem ipsum dolor sit amet consectetur. Egestas amet malesuada
                nisi nunc eleifend. Tempor in consequat sapien imperdiet diam.
                Rhoncus convallis imperdiet diam vitae aliquam sagittis vel.
                Enim porttitor id vel consectetur felis sed.
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
                Lorem ipsum dolor sit amet consectetur. Egestas amet malesuada
                nisi nunc eleifend. Tempor in consequat sapien imperdiet diam.
                Rhoncus convallis imperdiet diam vitae aliquam sagittis vel.
                Enim porttitor id vel consectetur felis sed.
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
                Lorem ipsum dolor sit amet consectetur. Egestas amet malesuada
                nisi nunc eleifend. Tempor in consequat sapien imperdiet diam.
                Rhoncus convallis imperdiet diam vitae aliquam sagittis vel.
                Enim porttitor id vel consectetur felis sed.
              </p>
            </div>
          </div>
        </div>
        <div
          className="testimony-controls"
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
