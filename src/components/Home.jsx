import React from "react";
import Numbers from "./Home/Numbers";
import Hero from "./Home/Hero";
import Banner from "./Home/Banner";
import Amenities from "./Home/Amenities";
import Rooms from "./Home/Rooms";
import Testimony from "./Testimony";
import HomeGallery from "./Home/Gallery";
import Reach from "./Reach";
import CoorgGallery from "./Coorg/Gallery";
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
      <HomeGallery />
      <Testimony />
      <Reach />
      <CoorgGallery />
      <Cafe />
      <Relax />
      <Blog />
      <FAQ />
    </>
  );
}

export default Home;
