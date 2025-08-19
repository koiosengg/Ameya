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
import FamilyAndFriends from "./components/Accomodations/FamilyAndFriends";
import FamilyAndFriendsGallery from "./components/Accomodations/FamilyAndFriendsGallery";
import SmallerGroups from "./components/Accomodations/SmallerGroups";
import SmallerGroupsGallery from "./components/Accomodations/SmallerGroupsGallery";
import LargerGroups from "./components/Accomodations/LargerGroups";
import LargerGroupsGallery from "./components/Accomodations/LargerGroupsGallery";

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
          <Route
            path="accomodations/family-and-friends"
            element={<FamilyAndFriends />}
          />
          <Route
            path="accomodations/family-and-friends/gallery"
            element={<FamilyAndFriendsGallery />}
          />
          <Route
            path="accomodations/smaller-groups"
            element={<SmallerGroups />}
          />
          <Route
            path="accomodations/smaller-groups/gallery"
            element={<SmallerGroupsGallery />}
          />
          <Route
            path="accomodations/larger-groups"
            element={<LargerGroups />}
          />
          <Route
            path="accomodations/larger-groups/gallery"
            element={<LargerGroupsGallery />}
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
