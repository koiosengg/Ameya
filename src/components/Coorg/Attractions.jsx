import React from "react";
import GoldenTemple from "../../assets/Coorg/Attractions/Golden Temple.png";
import Nisargadhama from "../../assets/Coorg/Attractions/Nisargadhama.png";
import DubareElephantCamp from "../../assets/Coorg/Attractions/Dubare Elephant Camp.png";
import HarangiDam from "../../assets/Coorg/Attractions/Harangi Dam.png";
import ChikliholeDam from "../../assets/Coorg/Attractions/Chiklihole Dam.png";
import TalaKaveri from "../../assets/Coorg/Attractions/Tala Kaveri.png";
import GlassBridge from "../../assets/Coorg/Attractions/Glass Bridge.png";
import EstateTour from "../../assets/Coorg/Attractions/Estate Tour.png";
import MandalpattiJeepRide from "../../assets/Coorg/Attractions/Mandalpatti Jeep Ride.png";
import KoteAbbeFalls from "../../assets/Coorg/Attractions/Kote Abbe Falls.png";
import AbbeyFalls from "../../assets/Coorg/Attractions/Abbey Falls.png";
import OmkareshwaraTemple from "../../assets/Coorg/Attractions/Omkareshwara Temple.png";
import Museum from "../../assets/Coorg/Attractions/Museum.png";
import MadikeriFort from "../../assets/Coorg/Attractions/Madikeri Fort.png";
import RajasSeat from "../../assets/Coorg/Attractions/Raja’s Seat.png";

const AttractionsSet = ({
  image,
  distance,
  title,
  description,
  directions,
}) => {
  return (
    <div className="coorg-attractions-set">
      <div className="coorg-attractions-set-img">
        <img src={image} alt={title} />
      </div>
      <div className="coorg-attractions-set-info">
        <div className="coorg-attractions-set-info-text">
          <div className="coorg-attractions-set-info-distance">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M12 21.5C10.3867 21.5 9.06667 21.2947 8.04 20.884C7.01333 20.4727 6.5 19.9407 6.5 19.288C6.5 18.9973 6.635 18.7187 6.905 18.452C7.175 18.1853 7.54767 17.9543 8.023 17.759C8.141 17.695 8.27033 17.683 8.411 17.723C8.551 17.763 8.653 17.842 8.717 17.96C8.781 18.0773 8.789 18.203 8.741 18.337C8.693 18.471 8.61 18.57 8.492 18.634C8.274 18.7113 8.06567 18.8077 7.867 18.923C7.66833 19.0383 7.54967 19.1537 7.511 19.269C7.62567 19.6003 8.10967 19.8883 8.963 20.133C9.81633 20.3777 10.8287 20.5 12 20.5C13.1713 20.5 14.1837 20.3777 15.037 20.133C15.8903 19.8883 16.374 19.6003 16.488 19.269C16.45 19.1537 16.3317 19.0383 16.133 18.923C15.9343 18.8077 15.726 18.7117 15.508 18.635C15.39 18.571 15.3067 18.472 15.258 18.338C15.2107 18.204 15.219 18.078 15.283 17.96C15.347 17.842 15.4493 17.763 15.59 17.723C15.7307 17.683 15.8597 17.6953 15.977 17.76C16.4523 17.9547 16.825 18.1853 17.095 18.452C17.365 18.7187 17.5 18.9973 17.5 19.288C17.5 19.9413 16.9867 20.4733 15.96 20.884C14.9333 21.2947 13.6133 21.5 12 21.5ZM12 18.102C11.8387 18.102 11.6773 18.072 11.516 18.012C11.354 17.952 11.2023 17.868 11.061 17.76C9.36367 16.3727 8.096 15.0197 7.258 13.701C6.42 12.3823 6.00067 11.0833 6 9.804C6 8.76133 6.18033 7.84867 6.541 7.066C6.90233 6.28333 7.37133 5.62733 7.948 5.098C8.52467 4.56867 9.169 4.17 9.881 3.902C10.593 3.634 11.2993 3.5 12 3.5C12.7007 3.5 13.4073 3.634 14.12 3.902C14.8313 4.17 15.4753 4.56867 16.052 5.098C16.6287 5.62733 17.0977 6.28333 17.459 7.066C17.8203 7.84867 18.0007 8.76133 18 9.804C18 11.0833 17.5807 12.3823 16.742 13.701C15.9033 15.0197 14.6353 16.3723 12.938 17.759C12.7973 17.867 12.646 17.951 12.484 18.011C12.3227 18.0717 12.1613 18.102 12 18.102ZM12 11.288C12.4473 11.288 12.8283 11.134 13.143 10.826C13.4577 10.5173 13.615 10.133 13.615 9.673C13.615 9.22567 13.4577 8.84467 13.143 8.53C12.8283 8.21533 12.4473 8.058 12 8.058C11.5653 8.058 11.1873 8.21533 10.866 8.53C10.5447 8.84467 10.384 9.22567 10.384 9.673C10.384 10.133 10.5447 10.5173 10.866 10.826C11.1873 11.1347 11.5653 11.2887 12 11.288Z"
                fill="#974C08"
              />
            </svg>
            <p>{distance}</p>
          </div>
          <div className="coorg-attractions-set-info-description">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
        <a href={directions} target="_blank" className="tertiary-btn">
          <p>Get Directions</p>
        </a>
      </div>
    </div>
  );
};

function Attractions() {
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
      <div className="coorg-attractions">
        <AttractionsSet
          image={GoldenTemple}
          distance="35 Km Away"
          title="Golden Temple"
          description="A peaceful Tibetan monastery known for its stunning golden architecture and spiritual aura. A great cultural stop before entering the heart of Coorg."
          directions="https://maps.app.goo.gl/ZCHVXJuPJkJekkk48"
        />
        <AttractionsSet
          image={Nisargadhama}
          distance="28 Km Away"
          title="Nisargadhama"
          description="A scenic island formed by the Kaveri river, surrounded by bamboo groves and hanging bridges. Perfect for picnics, deer sightings, and riverside fun."
          directions="https://maps.app.goo.gl/j9v6N8NJ919EWSqLA"
        />
        <AttractionsSet
          image={DubareElephantCamp}
          distance="37 Km Away"
          title="Dubare Elephant Camp"
          description="Get up close with elephants—feed, bathe, and learn about them in this unique riverside camp experience. Ideal for families and wildlife lovers."
          directions="https://maps.app.goo.gl/pTj3p5SHhBQSydSFA"
        />
        <AttractionsSet
          image={HarangiDam}
          distance="34 Km Away"
          title="Harangi Dam"
          description="A peaceful dam site offering calm waters, mountain backdrops, and less-crowded views. Best visited during monsoon or post-monsoon."
          directions="https://maps.app.goo.gl/mgd1NHQuLtvfLbqE8"
        />
        <AttractionsSet
          image={ChikliholeDam}
          distance="28 Km Away"
          title="Chiklihole Dam"
          description="A hidden gem surrounded by forest and hills—less commercialized, ideal for quiet photography or a short nature break."
          directions="https://maps.app.goo.gl/4arn7zoreaX9ftV97"
        />
        <AttractionsSet
          image={TalaKaveri}
          distance="44 Km Away"
          title="Tala Kaveri"
          description="The birthplace of the sacred Kaveri river, located at the top of the Brahmagiri hills. Offers a divine vibe with panoramic valley views."
          directions="https://maps.app.goo.gl/gSDLpVtzBu52vcyt9"
        />
        <AttractionsSet
          image={GlassBridge}
          distance="6.8 Km Away"
          title="Glass Bridge"
          description="A thrilling skywalk with glass flooring that gives you a panoramic view of the valley below. A great photo spot and adrenaline rush."
          directions="https://maps.app.goo.gl/2UJ35Ej4yaQ6dp588"
        />
        <AttractionsSet
          image={EstateTour}
          distance="8.3 Km Away"
          title="Estate Tour"
          description="Explore Coorg’s famed coffee and spice plantations. Learn how your morning brew is made while enjoying rich earthy aromas."
          directions="https://maps.app.goo.gl/P9kmw1qV5Tryt8Dr5"
        />
        <AttractionsSet
          image={MandalpattiJeepRide}
          distance="3.1 Km Away"
          title="Mandalpatti Jeep Ride"
          description="A thrilling off-road adventure that takes you to one of Coorg’s highest viewpoints. Ideal for sunrise or sunset lovers."
          directions="https://maps.app.goo.gl/P9kmw1qV5Tryt8Dr5"
        />
        <AttractionsSet
          image={KoteAbbeFalls}
          distance="24 Km Away"
          title="Kote Abbe Falls"
          description="A lesser-known but beautiful waterfall tucked in the forest. A peaceful spot for nature lovers away from the crowds."
          directions="https://maps.app.goo.gl/2y1hk7EY8AgNFRFb7"
        />
        <AttractionsSet
          image={AbbeyFalls}
          distance="8.2 Km Away"
          title="Abbey Falls"
          description="A lesser-known but beautiful waterfall tucked in the forest. A peaceful spot for nature lovers away from the crowds."
          directions="https://maps.app.goo.gl/LGwRVuzB92u8sJmF9"
        />
        <AttractionsSet
          image={OmkareshwaraTemple}
          distance="1.7 Km Away"
          title="Omkareshwara Temple"
          description="A beautiful blend of Islamic and Gothic styles, this Shiva temple in Madikeri offers a serene vibe in the middle of town."
          directions="https://maps.app.goo.gl/v3L8g5mCo2vBrT7g6"
        />
        <AttractionsSet
          image={Museum}
          distance="8.4 Km Away"
          title="Museum"
          description="A small but insightful museum showcasing Coorg’s culture, traditions, weaponry, and royal heritage. Good for history buffs."
          directions="https://maps.app.goo.gl/77J91jzz8pxnzXMMA"
        />
        <AttractionsSet
          image={MadikeriFort}
          distance="1.5 Km Away"
          title="Madikeri Fort"
          description="A 17th-century fort built by Mudduraja, offering views of Coorg’s history and colonial architecture. Includes a small museum and court hall."
          directions="https://maps.app.goo.gl/qyvaxZmYpcaYpjCe7"
        />
        <AttractionsSet
          image={RajasSeat}
          distance="1.6 Km Away"
          title="Raja’s Seat"
          description="A historic garden where Coorg’s kings once relaxed offering mesmerizing sunset views over rolling hills and valleys."
          directions="https://maps.app.goo.gl/bzkghcQqg8AkS9Kb8"
        />
      </div>
    </div>
  );
}

export default Attractions;
