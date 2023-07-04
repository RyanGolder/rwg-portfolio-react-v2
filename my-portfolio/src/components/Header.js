import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <h1>PORTFOLIO OF RYAN GOLDER</h1>
      <nav className={menuOpen ? 'open' : ''}>
        <ul>
          <li>
            <a href="#bio" alt="Link to the Bio of Ryan Golder">
              Bio
            </a>
          </li>
          <li>
            <a href="#portfolio" alt="Link to the Portfolio of Ryan Golder">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" alt="Contact details of Ryan Golder">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        Menu
      </button>
    </header>
  );
}

export default Header;
