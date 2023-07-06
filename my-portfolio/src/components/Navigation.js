import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav>
      <ul>
        <li>
          <button
            onClick={() => handlePageChange('Bio')}
            className={currentPage === 'Bio' ? 'active' : ''}
          >
            Bio
          </button>
        </li>
        <li>
          <button
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'active' : ''}
          >
            Portfolio
          </button>
        </li>
        <li>
          <button
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'active' : ''}
          >
            Contact
          </button>
        </li>
        <li>
          <button
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'active' : ''}
          >
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
