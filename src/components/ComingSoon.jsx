import React, { useState } from "react";
import Home from "./Coming Soon/Home";
import Contact from "./Coming Soon/Contact";

function ComingSoon() {
  const [activeContact, setActiveContact] = useState(false);

  function handleOpenContact() {
    setActiveContact(true);
  }

  function handleCloseContact() {
    setActiveContact(false);
  }

  return (
    <div className="coming-soon">
      <Home setContact={handleOpenContact} />
      <Contact activeContact={activeContact} setContact={handleCloseContact} />
    </div>
  );
}

export default ComingSoon;
