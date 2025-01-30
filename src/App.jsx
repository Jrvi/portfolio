import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import Home from './components/Home'
import Projects from './components/Projects'
import CV from './components/CV'
import "./App.css"

const App = () => {
  // TODO: Tää ois siirrettävä
  const padding = {
    padding: 15
  }

  return (
    <Router>
      <div className="navbar">
        <Link style={padding} to="/">Koti</Link>
        <Link style={padding} to="/projects">Projektit</Link>
        <Link style={padding} to="/cv">Ansioluettelo</Link>
        <a className="contact-link" style={padding} href="mailto:juho.jaervi@gmail.com">Ota yhteyttä</a>
      </div>

      <Routes>
        <Route path="/cv" element={<CV />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <div className="footer">
        <i>Portfolio site, Juho Järvi 2025</i>
        <div>
          <a href="https://www.linkedin.com/in/juho-j%C3%A4rvi-8371931ab/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          {' | '}
          <a href="https://github.com/Jrvi" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </Router>
  )
}

export default App