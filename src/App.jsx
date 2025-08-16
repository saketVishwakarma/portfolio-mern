// File: App.jsx
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import CertificatesSection from './components/CertificatesSection';
import ContactSection from './components/ContactSection';
import SkillsSection from './components/SkillsSection';
import EducationTimeline from './components/EducationTimeline'; 
import Footer from './components/Footer';
import './theme.css';

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
      <Footer />

    </div>
  );
}

export default App;
