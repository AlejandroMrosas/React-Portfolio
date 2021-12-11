import React from "react";
import About from './components/About';
import Home from "./components/Home";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
    return (
    <div>
        
        <main>
             <Nav></Nav>
            <Home></Home>
            <About></About>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </main>
    </div>


    )
}

export default App;
