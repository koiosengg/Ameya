import React, { useState, useRef } from "react";
import BasicTrekPackageImg1 from "../../assets/Coorg/Trek/Basic Trek Package/Img1.png";
import BasicTrekPackageImg2 from "../../assets/Coorg/Trek/Basic Trek Package/Img2.jpg";
import BasicTrekPackageImg3 from "../../assets/Coorg/Trek/Basic Trek Package/Img3.jpg";
import PremiumTrekPackageImg1 from "../../assets/Coorg/Trek/Premium Trek Package/Img1.png";
import PremiumTrekPackageImg2 from "../../assets/Coorg/Trek/Premium Trek Package/Img2.jpg";
import PremiumTrekPackageImg3 from "../../assets/Coorg/Trek/Premium Trek Package/Img3.jpg";

const TrekSet = ({
  images,
  title,
  difficulty,
  distance,
  time,
  location,
  description,
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
              currentIndex === images.length - 1 ? "not-allowed" : "pointer",
            pointerEvents: currentIndex === images.length - 1 ? "none" : "auto",
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
                currentIndex === idx ? "active-coorg-trek-set-img-dot" : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
      <div className="coorg-trek-set-info">
        <div className="coorg-trek-set-info-heading">
          <h3>{title}</h3>
          <section></section>
        </div>
        <div className="coorg-trek-set-info-difficulty">{difficulty}</div>
        <div className="coorg-trek-set-info-location-and-time">
          <section>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 24C9.84889 24 8.08889 23.7262 6.72 23.1787C5.35111 22.6302 4.66667 21.9209 4.66667 21.0507C4.66667 20.6631 4.84667 20.2916 5.20667 19.936C5.56667 19.5804 6.06356 19.2724 6.69733 19.012C6.85467 18.9267 7.02711 18.9107 7.21467 18.964C7.40133 19.0173 7.53733 19.1227 7.62267 19.28C7.708 19.4364 7.71867 19.604 7.65467 19.7827C7.59067 19.9613 7.48 20.0933 7.32267 20.1787C7.032 20.2818 6.75422 20.4102 6.48933 20.564C6.22444 20.7178 6.06622 20.8716 6.01467 21.0253C6.16756 21.4671 6.81289 21.8511 7.95067 22.1773C9.08844 22.5036 10.4382 22.6667 12 22.6667C13.5618 22.6667 14.9116 22.5036 16.0493 22.1773C17.1871 21.8511 17.832 21.4671 17.984 21.0253C17.9333 20.8716 17.7756 20.7178 17.5107 20.564C17.2458 20.4102 16.968 20.2822 16.6773 20.18C16.52 20.0947 16.4089 19.9627 16.344 19.784C16.2809 19.6053 16.292 19.4373 16.3773 19.28C16.4627 19.1227 16.5991 19.0173 16.7867 18.964C16.9742 18.9107 17.1462 18.9271 17.3027 19.0133C17.9364 19.2729 18.4333 19.5804 18.7933 19.936C19.1533 20.2916 19.3333 20.6631 19.3333 21.0507C19.3333 21.9218 18.6489 22.6311 17.28 23.1787C15.9111 23.7262 14.1511 24 12 24ZM12 19.4693C11.7849 19.4693 11.5698 19.4293 11.3547 19.3493C11.1387 19.2693 10.9364 19.1573 10.748 19.0133C8.48489 17.1636 6.79467 15.3596 5.67733 13.6013C4.56 11.8431 4.00089 10.1111 4 8.40533C4 7.01511 4.24044 5.79822 4.72133 4.75467C5.20311 3.71111 5.82844 2.83644 6.59733 2.13067C7.36622 1.42489 8.22533 0.893333 9.17467 0.536C10.124 0.178667 11.0658 0 12 0C12.9342 0 13.8764 0.178667 14.8267 0.536C15.7751 0.893333 16.6338 1.42489 17.4027 2.13067C18.1716 2.83644 18.7969 3.71111 19.2787 4.75467C19.7604 5.79822 20.0009 7.01511 20 8.40533C20 10.1111 19.4409 11.8431 18.3227 13.6013C17.2044 15.3596 15.5138 17.1631 13.2507 19.012C13.0631 19.156 12.8613 19.268 12.6453 19.348C12.4302 19.4289 12.2151 19.4693 12 19.4693ZM12 10.384C12.5964 10.384 13.1044 10.1787 13.524 9.768C13.9436 9.35645 14.1533 8.844 14.1533 8.23067C14.1533 7.63422 13.9436 7.12622 13.524 6.70667C13.1044 6.28711 12.5964 6.07733 12 6.07733C11.4204 6.07733 10.9164 6.28711 10.488 6.70667C10.0596 7.12622 9.84533 7.63422 9.84533 8.23067C9.84533 8.844 10.0596 9.35645 10.488 9.768C10.9164 10.1796 11.4204 10.3849 12 10.384Z"
                fill="#974C08"
              />
            </svg>
            <p>{distance}</p>
          </section>
          <section>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 23C5.925 23 1 18.075 1 12C1 5.925 5.925 1 12 1C18.075 1 23 5.925 23 12C23 18.075 18.075 23 12 23ZM13 5.5H11V12.414L15 16.414L16.414 15L13 11.586V5.5Z"
                fill="#974C08"
              />
            </svg>
            <p>{time}</p>
          </section>
        </div>
        <div className="coorg-trek-set-info-description">
          <h4>{location}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function Trek() {
  return (
    <div className="section-template">
      <div className="section-template-heading">
        <h2>Coorg Trekking Adventures</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Urna lorem semper in varius.
          <br className="desktop" />
          Lectus egestas nunc facilisis id.
        </p>
      </div>

      <div className="coorg-trek">
        <TrekSet
          images={[
            BasicTrekPackageImg1,
            BasicTrekPackageImg2,
            BasicTrekPackageImg3,
          ]}
          title="Basic Trek Package"
          difficulty="Difficulty: Easy to Moderate"
          distance="2.5 Km"
          time="1.5 Hours"
          location="Tadiandamol Trek"
          description="This guided trek includes packed lunch, forest permits, a first-aid kit, and convenient pickup and drop-off from the base camp ensuring a safe and seamless experience."
        />

        <div className="coorg-trek-line"></div>

        <TrekSet
          images={[
            PremiumTrekPackageImg1,
            PremiumTrekPackageImg2,
            PremiumTrekPackageImg3,
          ]}
          title="Premium Trek Package"
          difficulty="Difficulty: Easy to Moderate"
          distance="2.5 Km"
          time="1.5 Hours"
          location="Nishani Motte Trek"
          description="This guided trek includes packed lunch, forest permits, a first-aid kit, and convenient pickup and drop-off from the base camp ensuring a safe and seamless experience."
        />
      </div>
    </div>
  );
}
