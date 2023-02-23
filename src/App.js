import "./index.css";
import Nav from "./Components/Nav.js"
import Home from './Components/Pages/Home.js'
import Hero from './Components/Hero.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <>
    <div>
          <Nav />
          <Hero />
          <br></br>
          <Home />
          <footer className="footer">
              <p className="text-footer">
                  Copyright ©-All rights are reserved
              </p>
          </footer>
      </div></>
      
  )
}

export default App;