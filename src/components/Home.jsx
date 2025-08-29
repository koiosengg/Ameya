import React from "react";
import Numbers from "./Home/Numbers";
import Hero from "./Home/Hero";
import Banner from "./Home/Banner";
import Amenities from "./Home/Amenities";
import Rooms from "./Home/Rooms";
import Testimony from "./Testimony";
import Gallery from "./Home/Gallery";
import Reach from "./Reach";
import Coorg from "./Home/Coorg";
import Cafe from "./Home/Cafe";
import Relax from "./Relax";
import Blog from "./Home/Blog";
import FAQ from "./FAQ";

function Home() {
  return (
    <>
      <Hero />
      <Numbers />
      <Banner />
      <Rooms />
      <Amenities />
      <Gallery />
      <Testimony />
      <Reach />
      <Coorg />
      <Cafe />
      <Relax />
      <Blog />
      <FAQ />
    </>
  );
}

export default Home;
