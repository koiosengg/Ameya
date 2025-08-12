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
import RoomDetailsGallery from "./components/RoomDetailsGallery";

function App() {
  // return <ComingSoon />;
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="roomdetailsgallery" element={<RoomDetailsGallery />} />
          <Route path="accomodations" element={<Accomodations />} />
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
