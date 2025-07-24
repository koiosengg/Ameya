import React, { useState } from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
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

export default App;
