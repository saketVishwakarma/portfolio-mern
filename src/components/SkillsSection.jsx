// File: components/SkillsSection.jsx
import React, { useState, useEffect } from 'react';
import skillsData from '../data/skills.json';
import AOS from 'aos';
import './skill.css';

function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('Cloud');

  useEffect(() => {
    AOS.refresh();
  }, [activeCategory]);

  const formatSkillClass = (name) => {
    return `glow-${name.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
  };

  return (
    <section id="skills" className="section" style={{ padding: '5rem 1rem' }}>
      <div className="container">
        <h3
          className="center"
          style={{
            color: '#00e5ff',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '3rem'
          }}
          data-aos="fade-down"
        >
          Skills
        </h3>

        <div className="skill-category-container" style={{ margin: '3rem 0 2rem 0' }}>
          {Object.keys(skillsData).map((category, idx) => (
            <button 
              key={category}
              className={`btn ${activeCategory === category ? 'blue darken-2' : 'grey darken-3'} white-text z-depth-2`}
              onClick={() => setActiveCategory(category)}
              
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="row center-align">
          {skillsData[activeCategory].map((skill, index) => (
            <div
              key={index}
              className="col s12 m6 l4"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <div
                className={`card-panel z-depth-3 skill-card ${formatSkillClass(skill.name)}`}
                style={{
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #1f1f1f, #2c2c2c)',
                  color: 'white',
                  marginBottom: '2rem',
                  transition: 'transform 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <img src={skill.icon} alt={skill.name} style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                  <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{skill.name}</span>
                </div>
                <div
                  style={{
                    backgroundColor: '#333',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    height: '16px',
                    position: 'relative',
                    marginBottom: '0.5rem'
                  }}
                >
                  <div
                    style={{
                      width: `${skill.proficiency}%`,
                      background: 'linear-gradient(to right, #00f2fe, #4facfe)',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      paddingRight: '8px',
                      fontSize: '0.75rem',
                      color: '#fff',
                      fontWeight: 'bold'
                    }}
                  >
                    {skill.proficiency}% 🎮
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
