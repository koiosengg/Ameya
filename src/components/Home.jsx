import React from "react";
import Numbers from "./Home/Numbers";
import Hero from "./Home/Hero";
import Banner from "./Home/Banner";
import Amenities from "./Home/Amenities";
import Rooms from "./Home/Rooms";
import Testimony from "./Testimony";
import Gallery from "./Home/Gallery";

function Home() {
  return (
    <>
      <Hero />
      <Numbers />
      <Banner />
      <Rooms />
      <Amenities />
      <Gallery/>
      <Testimony />
    </>
  );
}

export default Home;
