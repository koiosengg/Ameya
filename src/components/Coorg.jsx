import React from "react";
import Hero from "./Coorg/Hero";
import Trek from "./Coorg/Trek";
import Attractions from "./Coorg/Attractions";
import Reach from "./Reach";
import Banner from "./Home/Banner";
import CoorgGallery from "./Coorg/Gallery";
import HomeGallery from "./Home/Gallery";
import Testimony from "./Testimony";
import Relax from "./Relax";
import FAQ from "./FAQ";

function Coorg() {
  return (
    <>
      <Hero />
      <Trek />
      <Attractions />
      <Banner />
      <Reach />
      <CoorgGallery />
      <HomeGallery />
      <Testimony />
      <Relax />
      <FAQ />
    </>
  );
}

export default Coorg;
