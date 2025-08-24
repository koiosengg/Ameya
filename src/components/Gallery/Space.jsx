import React from "react";
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
    <div className="gallery-space-set" style={{ gridArea: "box-3" }}>
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

function Space() {
  return (
    <div className="section-template">
      <div className="section-template-heading">
        <h2>Step Inside Our Spaces</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Urna lorem semper in varius.
          <br className="desktop" />
          Lectus egestas nunc facilisis id.
        </p>
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

export default Space;
