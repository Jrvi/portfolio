import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import Home from './components/Home'
import Projects from './components/Projects'
import CV from './components/CV'
import "./App.css"

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const padding = {
    padding: 15
  }

  return (
    <Router>
      <div className="navbar">
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="navbar-links-container">
          <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
            <Link style={padding} to="/" onClick={toggleMenu}>Koti</Link>
            <Link style={padding} to="/projects" onClick={toggleMenu}>Projektit</Link>
            <Link style={padding} to="/cv" onClick={toggleMenu}>Ansioluettelo</Link>
          </div>
          <div className="contact-me">
            <a className="contact-link" style={padding} href="mailto:juho.jaervi@gmail.com" onClick={toggleMenu}>Ota yhteyttä</a>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/cv" element={<CV />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <div className="footer">
        <div>
          <a href="https://www.linkedin.com/in/juho-j%C3%A4rvi-8371931ab/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>  
          <a href="https://github.com/Jrvi" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
        <i>Portfolio site, Juho Järvi 2025</i>
      </div>
    </Router>
  )
}

export default App