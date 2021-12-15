import React, { useState } from 'react';
import About from './components/About';
import Home from "./components/Home";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  
  const [categories] = useState([
    {
      name: 'Portfolio', description: 'These are the challenges i have worked on during my time with UofA'
    },
  ]);

  const [currentPortfolio, setCurrentPortfolio] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentPortfolio={setCurrentPortfolio}
        currentPortfolio={currentPortfolio}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
          <Home></Home>
        {!contactSelected ? (
          <>
          <About></About>
            <Portfolio currentPortfolio={currentPortfolio}></Portfolio>
            
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>
    </div>
  );
}

export default App;
