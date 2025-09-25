import React from "react";
import { Link } from "react-router-dom";
import BedroomsImg1 from "../../assets/Accomodations/Solo Travelers/Bedrooms/Bedrooms Img 1.jpg";

function OtherRooms({ otherRoom }) {
  return (
    <div className="section-template">
      <div className="section-template-heading">
        <h2>Perfect Matches Just for You!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Urna lorem semper in varius.
          <br className="desktop" />
          Lectus egestas nunc facilisis id.
        </p>
      </div>

      <div className="room-details-other-rooms">
        <div
          className="room-details-other-rooms-set solo-travelers-other-rooms"
          style={{ display: otherRoom === "solo-travelers" ? "none" : "flex" }}
        >
          <img src={BedroomsImg1} />
          <div className="room-details-other-rooms-set-info">
            <div className="room-details-other-rooms-set-text">
              <h3>Deluxe Double Room</h3>
              <section>
                <h4>1 Large Double Bed</h4>
                <p>
                  This rates includes breakfast, lunch, snacks and dinner
                  prepared and served by our chef’s
                </p>
              </section>
            </div>
            <Link className="tertiary-btn">
              <p>View Room Details</p>
            </Link>
          </div>
        </div>
        <div
          className="room-details-other-rooms-set family-and-friends-other-rooms"
          style={{
            display: otherRoom === "family-and-friends" ? "none" : "flex",
          }}
        >
          <img src={BedroomsImg1} />
          <div className="room-details-other-rooms-set-info">
            <div className="room-details-other-rooms-set-text">
              <h3>Deluxe Double Room</h3>
              <section>
                <h4>1 Large Double Bed</h4>
                <p>
                  This rates includes breakfast, lunch, snacks and dinner
                  prepared and served by our chef’s
                </p>
              </section>
            </div>
            <Link className="tertiary-btn">
              <p>View Room Details</p>
            </Link>
          </div>
        </div>
        <div
          className="room-details-other-rooms-set smaller-groups-other-rooms"
          style={{
            display: otherRoom === "smaller-groups" ? "none" : "flex",
          }}
        >
          <img src={BedroomsImg1} />
          <div className="room-details-other-rooms-set-info">
            <div className="room-details-other-rooms-set-text">
              <h3>Deluxe Double Room</h3>
              <section>
                <h4>1 Large Double Bed</h4>
                <p>
                  This rates includes breakfast, lunch, snacks and dinner
                  prepared and served by our chef’s
                </p>
              </section>
            </div>
            <Link className="tertiary-btn">
              <p>View Room Details</p>
            </Link>
          </div>
        </div>
        <div
          className="room-details-other-rooms-set larger-groups-other-rooms"
          style={{
            display: otherRoom === "larger-groups" ? "none" : "flex",
          }}
        >
          <img src={BedroomsImg1} />
          <div className="room-details-other-rooms-set-info">
            <div className="room-details-other-rooms-set-text">
              <h3>Deluxe Double Room</h3>
              <section>
                <h4>1 Large Double Bed</h4>
                <p>
                  This rates includes breakfast, lunch, snacks and dinner
                  prepared and served by our chef’s
                </p>
              </section>
            </div>
            <Link className="tertiary-btn">
              <p>View Room Details</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherRooms;
