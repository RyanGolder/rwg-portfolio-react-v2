import React from 'react';
import Navigation from './Navigation';

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="bg-light p-3">
      <h1 className="text-center">PORTFOLIO OF RYAN GOLDER</h1>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}

export default Header;

