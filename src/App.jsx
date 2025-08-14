// File: App.jsx
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import CertificatesSection from './components/CertificatesSection';
import ContactSection from './components/ContactSection';
import SkillsSection from './components/SkillsSection';
import EducationTimeline from './components/EducationTimeline'; 

import AOS from 'aos';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  return (
    <div>
       <main style={{ flex: 1 }}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationTimeline />
      
      <CertificatesSection />
      
      <ContactSection />
     </main>
    <footer className="page-footer grey darken-4 z-depth-3" style={{ borderTop: '2px solid #00fff7' }}>
  <div className="container center-align">
    <a
      href="/assets/resume.pdf"
      className="btn cyan lighten-2 glow-btn z-depth-2"
      download
      style={{ marginTop: '1rem' }}
    >
      Download Resume
    </a>
    <p className="white-text" style={{ fontWeight: 'bold', fontSize: '1rem' }}>
      &copy; {new Date().getFullYear()} Saket Kumar Vishwakarma
    </p>
  </div>
</footer>

    </div>
  );
}

export default App;
