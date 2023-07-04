import React, { useState } from "react";
import Navigation from "./Navigation";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <h1>PORTFOLIO OF RYAN GOLDER</h1>
      <Navigation />
      <button className="menu-toggle" onClick={toggleMenu}>
        Menu
      </button>
    </header>
  );
}

export default Header;
