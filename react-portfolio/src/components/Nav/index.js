import React from 'react';
import { Link } from "react-router-dom";
function Navbar() {
  // const tabs = ['Home', 'About', 'Portfolio','Resume', 'Contact'];
  return (
    <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/About">About</Link>
    </li>
    <li>
      <Link to="/Portfolio">Portfolio</Link>
    </li>
    <li>
      <Link to="/Resume">Resume</Link>
    </li>
    <li>
      <Link to="/Contact">Contact</Link>
    </li>
  </div> 

  );
}

export default Navbar;
