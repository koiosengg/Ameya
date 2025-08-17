import React from "react";
import { useNavigate } from "react-router-dom";
import LivingRoomImg1 from "../../assets/Gallery/Space/Living Room/Living Room Img 1.jpg";
import LivingRoomImg2 from "../../assets/Gallery/Space/Living Room/Living Room Img 2.jpg";
import LivingRoomImg3 from "../../assets/Gallery/Space/Living Room/Living Room Img 3.jpg";
import LivingRoomImg4 from "../../assets/Gallery/Space/Living Room/Living Room Img 4.jpg";
import LivingRoomImg5 from "../../assets/Gallery/Space/Living Room/Living Room Img 5.jpg";
import LivingRoomImg6 from "../../assets/Gallery/Space/Living Room/Living Room Img 6.png";
import BedroomsImg1 from "../../assets/Gallery/Space/Bedrooms/Bedrooms Img 1.jpg";
import BedroomsImg2 from "../../assets/Gallery/Space/Bedrooms/Bedrooms Img 2.jpg";
import BedroomsImg3 from "../../assets/Gallery/Space/Bedrooms/Bedrooms Img 3.jpg";
import BedroomsImg4 from "../../assets/Gallery/Space/Bedrooms/Bedrooms Img 4.jpg";
import BedroomsImg5 from "../../assets/Gallery/Space/Bedrooms/Bedrooms Img 5.jpg";
import BedroomsImg6 from "../../assets/Gallery/Space/Bedrooms/Bedrooms Img 6.jpg";
import BalconyImg1 from "../../assets/Gallery/Space/Balcony/Balcony Img 1.jpg";
import BalconyImg2 from "../../assets/Gallery/Space/Balcony/Balcony Img 2.jpg";
import BalconyImg3 from "../../assets/Gallery/Space/Balcony/Balcony Img 3.jpg";
import BalconyImg4 from "../../assets/Gallery/Space/Balcony/Balcony Img 4.jpg";
import BalconyImg5 from "../../assets/Gallery/Space/Balcony/Balcony Img 5.jpg";
import BalconyImg6 from "../../assets/Gallery/Space/Balcony/Balcony Img 6.png";
import BathroomsImg1 from "../../assets/Gallery/Space/Bathrooms/Bathrooms Img 1.jpg";
import BathroomsImg2 from "../../assets/Gallery/Space/Bathrooms/Bathrooms Img 2.jpg";
import BathroomsImg3 from "../../assets/Gallery/Space/Bathrooms/Bathrooms Img 3.jpg";
import BathroomsImg4 from "../../assets/Gallery/Space/Bathrooms/Bathrooms Img 4.jpg";
import BathroomsImg5 from "../../assets/Gallery/Space/Bathrooms/Bathrooms Img 5.jpg";
import BathroomsImg6 from "../../assets/Gallery/Space/Bathrooms/Bathrooms Img 6.png";

const Spaceset = ({ title, images }) => {
  return (
    <div className="gallery-space-set">
      <h3>{title}</h3>
      <div className="gallery-space-set-container">
        {images.map((image, key) => (
          <div className="gallery-space-set-img" key={key}>
            <img src={image} alt={`${title} Image ${key + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

function SoloTravelersGallery() {
  const navigate = useNavigate();
  return (
    <div className="room-details-gallery">
      <div className="back-to-details">
        <a onClick={() => navigate(-1)}>
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
        </a>
        <p>Back to details</p>
      </div>
      <div className="gallery-space">
        <Spaceset
          title="Living Room"
          images={[
            LivingRoomImg1,
            LivingRoomImg2,
            LivingRoomImg3,
            LivingRoomImg4,
            LivingRoomImg5,
            LivingRoomImg6,
          ]}
        />
        <Spaceset
          title="Bedrooms"
          images={[
            BedroomsImg1,
            BedroomsImg2,
            BedroomsImg3,
            BedroomsImg4,
            BedroomsImg5,
            BedroomsImg6,
          ]}
        />{" "}
        <Spaceset
          title="Balcony"
          images={[
            BalconyImg1,
            BalconyImg2,
            BalconyImg3,
            BalconyImg4,
            BalconyImg5,
            BalconyImg6,
          ]}
        />
        <Spaceset
          title="Bathrooms"
          images={[
            BathroomsImg1,
            BathroomsImg2,
            BathroomsImg3,
            BathroomsImg4,
            BathroomsImg5,
            BathroomsImg6,
          ]}
        />
      </div>
    </div>
  );
}

export default SoloTravelersGallery;
