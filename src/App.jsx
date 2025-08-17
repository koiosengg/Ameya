import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComingSoon from "./components/ComingSoon";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accomodations from "./components/Accomodations";
import Coorg from "./components/Coorg";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import SoloTravelers from "./components/Accomodations/SoloTravelers";
import SoloTravelersGallery from "./components/Accomodations/SoloTravelersGallery";
function App() {
  // return <ComingSoon />;
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="accomodations" element={<Accomodations />} />
          <Route
            path="accomodations/solo-travelers"
            element={<SoloTravelers />}
          />
          <Route
            path="accomodations/solo-travelers/gallery"
            element={<SoloTravelersGallery />}
          />
          <Route path="coorg" element={<Coorg />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
