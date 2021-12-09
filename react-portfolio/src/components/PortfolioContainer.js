import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './Home';
import About from './About';
import PortfolioPage from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

function Portfolio() {
  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState('Home');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Blog':
        return <PortfolioPage />;
      case 'Contact':
        return <Contact />;
        case 'Resume':
            return <Resume />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default Portfolio;
