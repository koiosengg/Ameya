import React from "react";
import Hero from "./Gallery/Hero";
import Space from "./Gallery/Space";
import CoorgGallery from "./Coorg/Gallery";
import Cafe from "./Home/Cafe";
import HomeGallery from "./Home/Gallery";
import Testimony from "./Testimony";
import Relax from "./Relax";
import FAQ from "./FAQ";

function Gallery() {
  return (
    <>
      <Hero />
      <Space />
      <CoorgGallery />
      <Cafe />
      <HomeGallery />
      <Testimony />
      <Relax />
      <FAQ />
    </>
  );
}

export default Gallery;
