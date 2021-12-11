import React from 'react';

function NavTabs(props) {
  const tabs = ['Home', 'About', 'Portfolio', 'Resume', 'Contact'];
  return (
    <header className="flex-row px-1">
    <h2>
      <a data-testid="link" href="/">
        <span role="img" aria-label="camera"> 📸</span> Oh Snap!
      </a>
    </h2>
    <nav>
    
         {tabs}
        
        </nav>
        </header>
  );
}

export default NavTabs;
