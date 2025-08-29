import React from "react";
import Hero from "./Contact/Hero";
import Form from "./Contact/Form";
import Banner from "./Home/Banner"
import Testimony from "./Testimony";
import Reach from "./Reach";
import Relax from "./Relax";
import FAQ from "./FAQ";

function Contact() {
  return (
    <>
      <Hero />
      <Form />
      <Banner/>
      <Testimony />
      <Reach />
      <Relax />
      <FAQ />
    </>
  );
}

export default Contact;
