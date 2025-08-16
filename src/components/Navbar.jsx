import React, { useState, useEffect } from 'react';
import './css/nav.css';

function Navbar({ darkMode, setDarkMode }) {
  const [activeNav, setActiveNav] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveNav(section);
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleThemeToggle = () => {
    document.body.classList.toggle('dark-mode');
    if (setDarkMode) setDarkMode(prev => !prev);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-wrapper container">
        {/* Logo */}
        <a href="#hero" className="brand-logo left" onClick={() => handleNavClick('hero')}>
          <img src="/assets/logo.png" alt="Saket Logo" className="nav-logo" />
        </a>

        {/* Hamburger */}
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </div>

        {/* Desktop Menu */}
        <ul className={`right hide-on-med-and-down ${menuOpen ? 'open' : ''}`}>
          <li><a href="#hero" className={activeNav === 'hero' ? 'active' : ''} onClick={() => handleNavClick('hero')}>About</a></li>
          <li><a href="#skills" className={activeNav === 'skills' ? 'active' : ''} onClick={() => handleNavClick('skills')}>Skills</a></li>
          <li><a href="#education" className={activeNav === 'education' ? 'active' : ''} onClick={() => handleNavClick('education')}>Education</a></li>
          <li><a href="#projects" className={activeNav === 'projects' ? 'active' : ''} onClick={() => handleNavClick('projects')}>Projects</a></li>
          <li><a href="#certificates" className={activeNav === 'certificates' ? 'active' : ''} onClick={() => handleNavClick('certificates')}>Certificates</a></li>
          <li><a href="#contact" className={activeNav === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')}>Contact</a></li>

          {/* Theme toggle button in menu */}
          <li>
            <button className="theme-toggle-btn" onClick={handleThemeToggle} aria-label="Toggle dark mode" title="Toggle Dark Mode" type="button">
              🎮
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <ul className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <li><a href="#hero" className={activeNav === 'hero' ? 'active' : ''} onClick={() => handleNavClick('hero')}>About</a></li>
        <li><a href="#skills" className={activeNav === 'skills' ? 'active' : ''} onClick={() => handleNavClick('skills')}>Skills</a></li>
        <li><a href="#education" className={activeNav === 'education' ? 'active' : ''} onClick={() => handleNavClick('education')}>Education</a></li>
        <li><a href="#projects" className={activeNav === 'projects' ? 'active' : ''} onClick={() => handleNavClick('projects')}>Projects</a></li>
        <li><a href="#certificates" className={activeNav === 'certificates' ? 'active' : ''} onClick={() => handleNavClick('certificates')}>Certificates</a></li>
        <li><a href="#contact" className={activeNav === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')}>Contact</a></li>
        <li>
          <button className="theme-toggle-btn" onClick={handleThemeToggle} aria-label="Toggle dark mode" title="Toggle Dark Mode" type="button">
            🎮
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
