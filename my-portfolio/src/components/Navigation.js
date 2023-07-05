import React from "react";

function Navigation({ currentPage, handlePageChange }) {
  const navigateToPage = (page) => {
    handlePageChange(page);
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="#bio" onClick={() => navigateToPage('Bio')} alt="Link to the Bio of Ryan Golder">
            Bio
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => navigateToPage('Portfolio')}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => navigateToPage('Contact')} alt="Contact details of Ryan Golder">
            Contact
          </a>
        </li>
        <li>
          <a href="#resume" onClick={() => navigateToPage('Resume')} alt="Resume of Ryan Golder">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
