import React from "react";
import { Link } from "react-router-dom";
import FamilyAndFriends from "../../assets/Contact/Form/Family And Friends.jpg";
import SoloTravelers from "../../assets/Contact/Form/Solo Travelers.jpg";
import SmallerGroups from "../../assets/Contact/Form/Smaller Groups.jpg";
import LargerGroups from "../../assets/Contact/Form/Larger Groups.jpg";

function Form() {
  return (
    <div
      className="section-template"
      style={{ position: "relative", zIndex: "5" }}
    >
      <div className="section-template-heading">
        <h2>Share Your Details to Book</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Urna lorem semper in varius.
          <br className="desktop" />
          Lectus egestas nunc facilisis id.
        </p>
      </div>
      <div className="contact-form-container">
        <form
          action="https://formspree.io/f/mdkdgeja"
          method="POST"
          className="contact-form"
        >
          <div className="contact-form-inputs">
            <section>
              <label htmlFor="fullName">Full name</label>
              <input
                id="fullName"
                name="Full Name"
                type="text"
                placeholder="John Doe"
                required
              />
            </section>
            <section>
              <label htmlFor="emailId">Email Id</label>
              <input
                id="emailId"
                name="Email Id"
                type="email"
                placeholder="you@personal.com"
                required
              />
            </section>
            <section>
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input
                id="mobileNumber"
                name="Mobile Number"
                type="tel"
                placeholder="0123-456-789"
                required
              />
            </section>
            <section>
              <label htmlFor="noOfPeople">No.of People</label>
              <input
                id="noOfPeople"
                name="noOfPeople"
                type="number"
                min="1"
                placeholder="Select People"
                required
              />
            </section>
            <div className="contact-form-inputs-divide">
              <section>
                <label htmlFor="stayStartDate">Stay Start Date</label>
                <input
                  id="stayStartDate"
                  name="stayStartDate"
                  type="date"
                  required
                />
              </section>
              <section>
                <label htmlFor="stayEndDate">Stay End Date</label>
                <input
                  id="stayEndDate"
                  name="stayEndDate"
                  type="date"
                  required
                />
              </section>
            </div>

            <section>
              <label htmlFor="message">Message (optional)</label>
              <textarea
                id="message"
                name="message"
                placeholder="Type here"
                rows="4"
              />
            </section>
          </div>

          <div className="contact-form-checkbox">
            <input
              type="checkbox"
              id="breakfastService"
              name="breakfastService"
            />
            <label htmlFor="breakfastService">
              Do you want breakfast service?
            </label>
          </div>

          <button className="primary-btn" type="submit">
            <p>Submit</p>
          </button>
        </form>
        <div className="contact-form-imgs">
          <Link
            to="/accomodations/family-and-friends"
            className="gallery-set"
            style={{ gridArea: "box-1" }}
          >
            <img
              src={FamilyAndFriends}
              className="Ameya Coorg Homestay Family & Friends Room"
            />
            <section>
              <h3>Family & Friends</h3>
              <p>3-5 people</p>
            </section>
          </Link>
          <Link
            to="/accomodations/solo-travelers"
            className="gallery-set"
            style={{ gridArea: "box-2" }}
          >
            <img
              src={SoloTravelers}
              className="Ameya Coorg Homestay Solo Travelers Room"
            />
            <section>
              <h3>Solo Travelers</h3>
              <p>2-3 people</p>
            </section>
          </Link>
          <Link
            to="/accomodations/smaller-groups"
            className="gallery-set"
            style={{ gridArea: "box-3" }}
          >
            <img
              src={SmallerGroups}
              className="Ameya Coorg Homestay Smaller Groups Room"
            />
            <section>
              <h3>Smaller Groups</h3>
              <p>6-10 people</p>
            </section>
          </Link>
          <Link
            to="/accomodations/larger-groups"
            className="gallery-set"
            style={{ gridArea: "box-4" }}
          >
            <img
              src={LargerGroups}
              className="Ameya Coorg Homestay Larger Groups Room"
            />
            <section>
              <h3>Larger Groups</h3>
              <p>Group of 30 people</p>
            </section>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Form;
