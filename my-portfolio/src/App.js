import React, { useState } from 'react';
import Header from './components/Header';
import Bio from './components/Bio';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Bio');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Bio':
        return <Bio />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <Bio />;
    }
  };

  return (
    <div className="container">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="content">{renderPage()}</div>
      <Footer />
    </div>
  );
}

export default App;
