import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container justify-content-center">
        <ul className="navbar-nav">
          <li className={`nav-item ${currentPage === 'Bio' ? 'active' : ''}`}>
            <button className="nav-link btn btn-link" onClick={() => handlePageChange('Bio')}>
              Bio
            </button>
          </li>
          <li className={`nav-item ${currentPage === 'Portfolio' ? 'active' : ''}`}>
            <button className="nav-link btn btn-link" onClick={() => handlePageChange('Portfolio')}>
              Portfolio
            </button>
          </li>
          <li className={`nav-item ${currentPage === 'Contact' ? 'active' : ''}`}>
            <button className="nav-link btn btn-link" onClick={() => handlePageChange('Contact')}>
              Contact
            </button>
          </li>
          <li className={`nav-item ${currentPage === 'Resume' ? 'active' : ''}`}>
            <button className="nav-link btn btn-link" onClick={() => handlePageChange('Resume')}>
              Resume
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
