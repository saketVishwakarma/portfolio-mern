import React from 'react';

function Navbar({ darkMode, setDarkMode }) {
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav className={darkMode ? 'black' : 'blue'}>
      <div className="nav-wrapper container">
        <a href="#hero" className="brand-logo">
          <img src="/assets/logo.png" alt="Saket Logo" className="nav-logo" />
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#hero">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
