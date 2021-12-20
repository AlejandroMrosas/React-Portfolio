import React, {useState} from 'react';
import About from './components/About';
import Home from "./components/Home";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from './components/Footer';

function App() {

  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
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
    <div><Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav></div>
          <div>{renderPage(currentPage)}</div> 
            <About></About>
           <Portfolio></Portfolio>
          <Contact></Contact>
          <Footer></Footer> 
    </div>
  );
}

export default App;
