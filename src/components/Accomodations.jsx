import React from "react";

function Accomodations() {
  return (
    <div className="accomodations">
      <div className="accomodations-heading">
        <div className="accomodations-heading-text">
          <h2>Perfect Matches Just for You!</h2>
          <p>We’ve handpicked the best stays so you can relax in comfort.</p>
        </div>
        <div className="accomodations-heading-tabs">
          <div className="accomodations-heading-tab active-accomodations-heading-tab">
            Family & Friends
          </div>
          <div className="accomodations-heading-tab">Solo Travelers</div>
          <div className="accomodations-heading-tab">Smaller Groups</div>
          <div className="accomodations-heading-tab">Larger Groups</div>
        </div>
      </div>
    </div>
  );
}

export default Accomodations;
